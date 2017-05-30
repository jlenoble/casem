import Block from './block';

const files = new Map();

export const execFile = filename => {
  const file = files.get(filename);

  if (file !== undefined) {
    return file.reduce();
  }
};

class File extends Block {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    if (ctx.header !== undefined) {
      // Cache nested file: Must be explicitly called
      const filename = ctx.header().attributes().fileName(0).getText();
      files.set('"' + filename + '"', this);
    } else {
      files.set('"main"', this);
    }

    Object.defineProperty(this, 'jumpingTo', {
      value: '',
      writable: true,
    });
  }

  reduce () {
    return super.reduce().catch(err => {
      if (err.message === 'RETURN') {
        return;
      }

      if (('' + err.message).match(/^\\Lbl [A-Z0-9]$/)) {
        this.startJumping(err.message);
        return this.reduce();
      }

      throw err;
    });
  }

  isJumping () {
    return this.jumpingTo !== '';
  }

  isJumpingTo (label) {
    return this.jumpingTo === label;
  }

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
