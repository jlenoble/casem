import path from 'path';
import readline from 'readline';
import {mixWithDataStructs} from './DataStructs';
import {mixWithExprs} from './Exprs';
import {mixWithStats} from './Stats';
import {mixWithBlockStats} from './BlockStats';
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

  visitBlockStat (ctx) {
    this.getCurrentFile().queueStat(ctx);
  }

  visitStat (ctx) {
    this.getCurrentFile().queueStat(ctx);
  }

  visitProg (ctx) {
    const main = new File('main', this);

    this.getCurrentFile = function () {
      return main;
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
mixWithBlockStats(Interpreter);
