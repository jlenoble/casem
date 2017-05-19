export const mixWithExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitBoolExpr (ctx) {
      return this.visit(ctx.numExpr(0)) === this.visit(ctx.numExpr(1));
    },

    visitNumExpr (ctx) {
      if (ctx.number()) {
        return parseFloat(ctx.number().getText(), 10);
      }

      if (ctx.variable()) {
        return this.getVariable(ctx.variable().getText());
      }
    },
  });
};
