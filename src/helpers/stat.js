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

  reduce () {
    return this.visitor.visit(this.ctx);
  }
}

export default Stat;
