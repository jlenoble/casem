const files = new Map();

class File {
  constructor (ctx) {
    const file = files.get(ctx);

    if (file) {
      return file;
    }

    files.set(ctx, this);

    Object.defineProperties(this, {
      ctx: {
        value: ctx,
      },
      jumpingTo: {
        value: '',
        writable: true,
      },
    });
  }

  exec (visitor) {
    const prevFile = visitor.currentFile;
    visitor.currentFile = this; // eslint-disable-line no-param-reassign

    visitor.visit(this.ctx.block());
    this.jumpingTo = ''; // Reset any early return

    visitor.currentFile = prevFile; // eslint-disable-line no-param-reassign
  }

  isJumping () {
    return this.jumpingTo !== '';
  }

  isJumpingTo (label) {
    return this.jumpingTo === label;
  }

  isFinished () {
    return this.jumpingTo === 'EOF';
  };

  startJumping (label) {
    if (this.isJumping()) {
      throw new Error('Already jumping to ' + this.jumpingTo +
        '; Can\'t go to ' + label);
    }
    this.jumpingTo = label;
  }

  stopJumping (label) {
    if (!this.isJumpingTo(label)) {
      throw new Error('Can\'t jump to ' + label +
        ' because jumping to ' + this.jumpingTo);
    }
    this.jumpingTo = '';
  }
}

export default File;
