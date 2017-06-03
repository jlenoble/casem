import path from 'path';
import {Interpreter} from './Interpreter';
import Block from '../helpers/block';
import File from '../helpers/file';
import Stat from '../helpers/stat';
import {DoStat, ForStat, IfStat, WhileStat} from '../helpers/block-stats';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcListener} = require(path.join(base, rel, 'CalcListener'));

export class Translator extends CalcListener {
  constructor (readStdin = true) {
    super();

    Object.defineProperties(this, {
      visitor: {
        value: new Interpreter(readStdin),
      },
    });
  }

  enterBlock (ctx) {
    this.currentBlock = new Block(ctx, this.visitor, {
      parent: this.currentBlock,
      file: this.currentFile,
    });
  }

  exitBlock (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterDoStat (ctx) {
    this.currentBlock = new DoStat(ctx, this.visitor, {
      parent: this.currentBlock,
      file: this.currentFile,
    });
  }

  exitDoStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterFile (ctx) {
    this.currentBlock = new File(ctx, this.visitor);
    this.currentFile = this.currentBlock;
  }

  exitFile (ctx) {
    this.currentBlock = this.main;
    this.currentFile = this.currentBlock;
  }

  enterForStat (ctx) {
    this.currentBlock = new ForStat(ctx, this.visitor, {
      parent: this.currentBlock,
      file: this.currentFile,
    });
  }

  exitForStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterIfStat (ctx) {
    this.currentBlock = new IfStat(ctx, this.visitor, {
      parent: this.currentBlock,
      file: this.currentFile,
    });
  }

  exitIfStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }

  enterProg (ctx) {
    this.main = new File(ctx, this.visitor);
    this.currentBlock = this.main;
    this.currentFile = this.currentBlock;
  }

  exitProg (ctx) {
    setTimeout(() => {
      return this.currentBlock.reduce();
    });
  }

  enterStat (ctx) {
    if (!this.isImplyStat) { // Makes sure implied Stat won't be cached
      this.currentBlock.push(new Stat(ctx, this.visitor, this.currentFile));
    }

    this.isImplyStat = ctx.implyStat() !== null;
  }

  exitStat (ctx) {
    this.isImplyStat = false;
  }

  enterWhileStat (ctx) {
    this.currentBlock = new WhileStat(ctx, this.visitor, {
      parent: this.currentBlock,
      file: this.currentFile,
    });
  }

  exitWhileStat (ctx) {
    this.currentBlock = this.currentBlock.parent;
  }
}
