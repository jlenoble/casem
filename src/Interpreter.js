import path from 'path';
import readline from 'readline';

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcVisitor} = require(path.join(base, rel, 'CalcVisitor'));
const {CalcParser} = require(path.join(base, rel, 'CalcParser'));

export class Interpreter extends CalcVisitor {
  constructor (...args) {
    super(...args);

    const variables = {};
    this.hasVariable = name => name in variables;
    this.getVariable = name => {
      if (!this.hasVariable(name)) {
        throw new ReferenceError(`Variable '${name}' is not initialized`);
      }
      return variables[name];
    };
    this.setVariable = (name, value) => {
      variables[name] = value;
    };

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

  visitAssignStat (ctx) {
    this.setVariable(ctx.variable().getText(), this.visit(ctx.numExpr()));
  }

  visitBoolExpr (ctx) {
    return this.visit(ctx.numExpr(0)) === this.visit(ctx.numExpr(1));
  }

  visitDoStat (ctx) {
    this.repeatUntil(ctx.block(), ctx.boolExpr());
  }

  visitNumExpr (ctx) {
    if (ctx.number()) {
      return parseFloat(ctx.number().getText(), 10);
    }

    if (ctx.variable()) {
      return this.getVariable(ctx.variable().getText());
    }
  }

  visitPrintStat (ctx) {
    console.log(ctx.STRING().getText().replace(/^"(.*)"$/, '$1'));
  }

  visitProg (ctx) {
    let statQueue = [];

    const doQueue = onResume => {
      statQueue.push(onResume);
    };

    const flush = () => {
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
        console.log('Good bye!');
        return; // Final return
      }

      // **Prepend** new postponed stats to old ones
      statQueue = statQueue.concat(queue);

      // Flush again until all is done
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(flush());
          } catch (err) {
            reject(err);
          }
        }, 0);
      });
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

    super.visitProg(ctx);

    return flush();
  }

  visitReadStat (ctx) {
    this.setVariable(ctx.variable().getText(), this.getKey());
  }

  visitStat (ctx) {
    this.queueStat(ctx);
  }
}
