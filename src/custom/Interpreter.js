import path from 'path';
import {mixWithDataStructs} from './DataStructs';
import {mixWithExprs} from './Exprs';
import {mixWithStats} from './Stats';

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
}

mixWithDataStructs(Interpreter);
mixWithExprs(Interpreter);
mixWithStats(Interpreter);
