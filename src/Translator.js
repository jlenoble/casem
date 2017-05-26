import path from 'path';
import {Interpreter} from './Interpreter';
import File from './file';
import Stat from './stat';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcListener} = require(path.join(base, rel, 'CalcListener'));

const visitor = new Interpreter();

export class Translator extends CalcListener {
  enterProg (ctx) {
    this.currentBlock = new File(ctx, visitor);
  }

  exitProg (ctx) {
    setTimeout(() => {
      // Translator prints a random '\n'; This setTimeout makes sure it always
      // appears before visitor starts printing, for reproducibility
      this.currentBlock.reduce();
    });
  }

  enterStat (ctx) {
    if (!this.isImplyStat) { // Makes sure implied Stat won't be cached
      this.currentBlock.push(new Stat(ctx, visitor));
    }

    this.isImplyStat = ctx.implyStat() !== null;
  }

  exitStat (ctx) {
    this.isImplyStat = false;
  }
}
