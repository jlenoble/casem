import Stat from './stat';
import Queue from './queue';

class Block extends Stat {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    Object.defineProperties(this, {
      queue: {
        value: new Queue(),
      },
    });
  }

  push (arg) {
    this.queue.push(arg);
  }

  reduce () {
    this.queue.reduce();
  }
}

export default Block;
