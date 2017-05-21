import path from 'path';
import readline from 'readline';
import {mixWithDataStructs} from './DataStructs';
import {mixWithExprs} from './Exprs';
import {mixWithStats} from './Stats';
import Queue from './queue';

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
    this.repeatUntil(ctx.block(), ctx.boolExpr());
  }

  visitProg (ctx) {
    const statQueue = new Queue();

    this.queueStat = ctx => {
      if (statQueue.length) {
        statQueue.doQueue(() => this.execStat(ctx));
      } else {
        this.execStat(ctx);
      }
    };

    this.repeatUntil = (blockCtx, boolExprCtx) => {
      this.visit(blockCtx);

      if (this.visit(boolExprCtx)) {
        statQueue.doQueue(() => this.repeatUntil(blockCtx, boolExprCtx));
      }
    };

    return new Promise((resolve, reject) => {
      try {
        super.visitProg(ctx);
        statQueue.flush(resolve);
      } catch (err) {
        reject(err);
      }
    });
  }
}

mixWithDataStructs(Interpreter);
mixWithExprs(Interpreter);
mixWithStats(Interpreter);
