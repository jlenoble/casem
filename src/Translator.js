import path from 'path';
import {Interpreter} from './Interpreter';
import Stat from './stat';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcListener} = require(path.join(base, rel, 'CalcListener'));

const visitor = new Interpreter();
const stats = [];

export class Translator extends CalcListener {
  exitProg (ctx) {
    setTimeout(() => {
      // Translator prints a random '\n'; This setTimeout makes sure it always
      // appears before visitor starts printing, for reproducibility
      stats.forEach(stat => {
        stat.reduce();
      });
    });
  }

  enterStat (ctx) {
    stats.push(new Stat(ctx, visitor));
  }
}
