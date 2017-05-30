class Stat {
  constructor (ctx, visitor) {
    Object.defineProperties(this, {
      ctx: {
        value: ctx,
      },

      visitor: {
        value: visitor,
      },
    });
  }

  reduce (label) {
    if (label !== undefined) {
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
}

export default Stat;
