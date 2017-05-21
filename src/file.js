import Queue from './queue';

class File {
  constructor (filename, visitor) {
    Object.defineProperties(this, {
      queue: {
        value: new Queue(),
      },
      visitor: {
        value: visitor,
      },
    });
  }

  doQueue (func) {
    return this.queue.doQueue(func);
  }

  execStat (ctx) {
    this.visitor.visitChildren(ctx);
  }

  flush (resolve) {
    return this.queue.flush(resolve);
  }

  queueStat (ctx) {
    if (this.queue.length) {
      this.queue.doQueue(() => this.execStat(ctx));
    } else {
      this.execStat(ctx);
    }
  }
}

export default File;
