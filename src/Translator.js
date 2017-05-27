import path from 'path';
import {Interpreter} from './Interpreter';
import Block from './block';
import File from './file';
import Stat from './stat';
import {ForStat, IfStat} from './block-stats';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcListener} = require(path.join(base, rel, 'CalcListener'));

const visitor = new Interpreter();

export class Translator extends CalcListener {
  enterBlock (ctx) {
    this.currentBlock = new Block(ctx, visitor, this.currentBlock);
  }

  exitBlock (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterForStat (ctx) {
    this.currentBlock = new ForStat(ctx, visitor, this.currentBlock);
  }

  exitForstat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterIfStat (ctx) {
    this.currentBlock = new IfStat(ctx, visitor, this.currentBlock);
  }

  exitIfstat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

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
