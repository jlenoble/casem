import path from 'path';
import readline from 'readline';
import {mixWithDataStructs} from './DataStructs';
import {mixWithExprs} from './Exprs';
import {mixWithStats} from './Stats';
import Screen from './screen';

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

    this.screen = new Screen();

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
    let statQueue = [];

    const doQueue = onResume => {
      statQueue.push(onResume);
    };

    const flush = resolve => {
       // Unqueuing may generate more postponed stats so we will use
       // the reset main queue to register them while only flushing a copy
      const queue = statQueue;
      statQueue = [];

      // Unqueue one postponed stat at a time until all are processed or
      // one is newly postponed
      while (!statQueue.length && queue.length) {
        queue.shift()();
      }

      if (!queue.length && !statQueue.length) { // No stat left unprocessed
        return resolve();
      }

      // **Prepend** new postponed stats to old ones
      statQueue = statQueue.concat(queue);

      // Flush again until promise is resolved
      setTimeout(flush, 0, resolve);
    };

    // let statCounter = 0;
    const execStat = ctx => {
      // statCounter++;
      // console.log(statCounter, ctx.getText());
      this.visitChildren(ctx);
    };

    this.queueStat = ctx => {
      if (statQueue.length) {
        doQueue(() => execStat(ctx));
      } else {
        execStat(ctx);
      }
    };

    this.repeatUntil = (blockCtx, boolExprCtx) => {
      this.visit(blockCtx);

      if (this.visit(boolExprCtx)) {
        doQueue(() => this.repeatUntil(blockCtx, boolExprCtx));
      }
    };

    return new Promise((resolve, reject) => {
      try {
        super.visitProg(ctx);
        flush(resolve);
      } catch (err) {
        reject(err);
      }
    });
  }
}

mixWithDataStructs(Interpreter);
mixWithExprs(Interpreter);
mixWithStats(Interpreter);
