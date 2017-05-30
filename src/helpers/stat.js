class Stat {
  constructor (ctx, visitor, file) {
    Object.defineProperties(this, {
      ctx: {
        value: ctx,
      },

      visitor: {
        value: visitor,
      },

      file: {
        value: file,
      },
    });
  }

  reduce () {
    if (this.isJumping()) {
      return;
    }

    const p = this.visitor.visit(this.ctx);

    if (Array.isArray(p)) {
      if (p.length !== 1) {
        throw new Error('Length should always be 1; Was', p.length);
      }
      return p[0];
    }

    return p;
  }

  isJumping () {
    return this.file.isJumping();
  }

  isJumpingTo (label) {
    return this.file.isJumpingTo(label);
  }

  startJumping (label) {
    return this.file.startJumping(label);
  }

  stopJumping (label) {
    return this.file.stopJumping(label);
  }
}

export default Stat;
