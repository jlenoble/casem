import path from 'path';
import readline from 'readline';
import {mixWithDataStructs} from './DataStructs';
import {mixWithExprs} from './Exprs';
import {mixWithStats} from './Stats';
import File from './file';

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcVisitor} = require(path.join(base, rel, 'CalcVisitor'));

export class Interpreter extends CalcVisitor {
  constructor (...args) {
    super(...args);

    let currentKey = 0;
    this.getKey = () => {
      return currentKey;
    };

    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'c') {
        process.exit();
      } else {
        currentKey = key;
      }
    });
  }

  visitDoStat (ctx) {
    this.repeatUntil(ctx.blocks(), ctx.boolExpr());
  }

  visitWhileStat (ctx) {
    console.log('WHILE');
  }

  visitForStat (ctx) {
    const start = this.visit(ctx.numExpr(0));
    const end = this.visit(ctx.numExpr(1));
    const step = ctx.numExpr(2) !== null ? this.visit(ctx.numExpr(2)) : 1;
    const name = ctx.variable().getText();

    this.setVariable(name, start);
    this.forNext(ctx.blocks(), name, end, step);
  }

  visitIfStat (ctx) {
    if (this.visit(ctx.boolExpr())) {
      this.visit(ctx.blocks(0));
    } else {
      if (ctx.ELSE()) {
        this.visit(ctx.blocks(1));
      }
    }
  }

  visitProg (ctx) {
    const main = new File('main', this);

    this.getCurrentFile = function () {
      return main;
    };

    this.repeatUntil = (blocksCtx, boolExprCtx) => {
      this.visit(blocksCtx);

      if (this.visit(boolExprCtx)) {
        this.getCurrentFile().doQueue(() => this.repeatUntil(
          blocksCtx, boolExprCtx));
      }
    };

    this.forNext = (blocksCtx, varName, end, step) => {
      let i = this.getVariable(varName);

      if (i <= end) {
        this.visit(blocksCtx);
        this.setVariable(varName, i + step);

        this.getCurrentFile().doQueue(() => this.forNext(
          blocksCtx, varName, end, step));
      }
    };

    return new Promise((resolve, reject) => {
      try {
        super.visitProg(ctx);
        this.getCurrentFile().flush(resolve);
      } catch (err) {
        reject(err);
      }
    });
  }
}

mixWithDataStructs(Interpreter);
mixWithExprs(Interpreter);
mixWithStats(Interpreter);
