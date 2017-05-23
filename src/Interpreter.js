import path from 'path';
import readline from 'readline';
import {mixWithDataStructs} from './DataStructs';
import {mixWithExprs} from './Exprs';
import {mixWithStats} from './Stats';
import {mixWithBlockStats} from './BlockStats';
import File from './file';
import {getCurrentBlock, flush} from './block';

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
    getCurrentBlock().queueStat(ctx);
  }

  visitStat (ctx) {
    getCurrentBlock().queueStat(ctx);
  }

  visitProg (ctx) {
    const main = new File('main', this);

    return new Promise((resolve, reject) => {
      try {
        main.register();
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
mixWithBlockStats(Interpreter);
