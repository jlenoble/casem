import Stat from './stat';
import Queue from './queue';

class Block extends Stat {
  constructor (ctx, visitor, parent = null) {
    super(ctx, visitor);

    Object.defineProperties(this, {
      queue: {
        value: new Queue(),
      },

      parent: {
        value: parent,
      },
    });

    if (parent !== null) {
      parent.push(this);
    }
  }

  push (arg) {
    this.queue.push(arg);
  }

  reduce (p = Promise.resolve()) {
    return this.queue.reduce(p);
  }
}

export default Block;
