import {ForLoop, DoLoop, WhileLoop} from './loop';

export const mixWithBlockStats = Interpreter => {
  const proto = Interpreter.prototype;

  Object.assign(proto, {
    visitDoStat (ctx) {
      const loop = new DoLoop(ctx, this);
      loop.run();
    },

    visitForStat (ctx) {
      const loop = new ForLoop(ctx, this);
      loop.run();
    },

    visitIfStat (ctx) {
      if (this.visit(ctx.boolExpr())) {
        this.visit(ctx.blocks(0));
      } else {
        if (ctx.ELSE()) {
          this.visit(ctx.blocks(1));
        }
      }
    },

    visitWhileStat (ctx) {
      const loop = new WhileLoop(ctx, this);
      loop.run();
    },
  });
};
