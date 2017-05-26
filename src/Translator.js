import path from 'path';
import {Interpreter} from './Interpreter';
import Queue from './queue';
import Stat from './stat';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcListener} = require(path.join(base, rel, 'CalcListener'));

const visitor = new Interpreter();
const stats = new Queue();

export class Translator extends CalcListener {
  exitProg (ctx) {
    setTimeout(() => {
      // Translator prints a random '\n'; This setTimeout makes sure it always
      // appears before visitor starts printing, for reproducibility
      stats.reduce();
    });
  }

  enterStat (ctx) {
    if (!this.isImplyStat) { // Makes sure implied Stat won't be cached
      stats.push(new Stat(ctx, visitor));
    }

    this.isImplyStat = ctx.implyStat() !== null;
  }

  exitStat (ctx) {
    this.isImplyStat = false;
  }
}
