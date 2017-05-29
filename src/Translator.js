import path from 'path';
import {Interpreter} from './Interpreter';
import Block from './block';
import File from './file';
import Stat from './stat';
import {DoStat, ForStat, IfStat, WhileStat} from './block-stats';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcListener} = require(path.join(base, rel, 'CalcListener'));

const visitor = new Interpreter();

export class Translator extends CalcListener {
  constructor (resolve, reject) {
    super();

    Object.defineProperties(this, {
      resolve: {
        value: resolve || Promise.resolve,
      },

      reject: {
        value: reject || Promise.reject,
      },
    });
  }

  enterBlock (ctx) {
    this.currentBlock = new Block(ctx, visitor, this.currentBlock);
  }

  exitBlock (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterDoStat (ctx) {
    this.currentBlock = new DoStat(ctx, visitor, this.currentBlock);
  }

  exitDoStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterFile (ctx) {
    this.currentBlock = new File(ctx, visitor);
  }

  exitFile (ctx) {
    this.currentBlock = this.main;
  }

  enterForStat (ctx) {
    this.currentBlock = new ForStat(ctx, visitor, this.currentBlock);
  }

  exitForStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterIfStat (ctx) {
    this.currentBlock = new IfStat(ctx, visitor, this.currentBlock);
  }

  exitIfStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterProg (ctx) {
    this.main = new File(ctx, visitor);
    this.currentBlock = this.main;
  }

  exitProg (ctx) {
    setTimeout(() => {
      // Translator prints a random '\n'; This setTimeout makes sure it always
      // appears before visitor starts printing, for reproducibility
      try {
        this.resolve(this.currentBlock.reduce());
      } catch (err) {
        this.reject(err);
      }
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

  enterWhileStat (ctx) {
    this.currentBlock = new WhileStat(ctx, visitor, this.currentBlock);
  }

  exitWhileStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }
}
