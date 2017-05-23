import Queue from './queue';

const blocks = [];

export const getCurrentBlock = () => {
  return blocks[blocks.length - 1];
};

export const getParentBlock = () => {
  return blocks[blocks.length - 2];
};

export const flush = resolve => {
  if (blocks.length === 0) {
    return resolve();
  }

  new Promise(resolve => {
    getCurrentBlock().flush(resolve);
  }).then(() => {
    blocks.pop();
    flush(resolve);
  });
};

class Block {
  constructor (visitor) {
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

  register () {
    blocks.push(this);
  }

  unregister () {
    const block = blocks.pop();

    if (block !== this) {
      throw new ReferenceError('Block mismatch');
    }
  }
}

export default Block;
