import Stat from './stat';
import Queue from './queue';

class Block extends Stat {
  constructor (ctx, visitor, options) {
    const {parent, file} = Object.assign({
      parent: null,
      file: null,
    }, options);

    super(ctx, visitor, file);

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
    return this.queue.push(arg);
  }

  reduce () {
    return this.queue.reduce();
  }

  isJumping () {
    return this.file && this.file.isJumping();
  }

  isJumpingTo (label) {
    return this.file && this.file.isJumpingTo(label);
  }

  startJumping (label) {
    return this.file && this.file.startJumping(label);
  }

  stopJumping (label) {
    return this.file && this.file.stopJumping(label);
  }
}

export default Block;
