export const mixWithNumExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitAdd (ctx) {
      if (ctx.addOp().ADD()) {
        return this.visit(ctx.numExpr(0)) + this.visit(ctx.numExpr(1));
      } else {
        return this.visit(ctx.numExpr(0)) - this.visit(ctx.numExpr(1));
      }
    },

    visitEvaluate (ctx) {
      return this.getVariable(ctx.variable().getText());
    },

    visitMultiply (ctx) {
      if (ctx.multOp().MUL()) {
        return this.visit(ctx.numExpr(0)) * this.visit(ctx.numExpr(1));
      } else {
        return this.visit(ctx.numExpr(0)) / this.visit(ctx.numExpr(1));
      }
    },

    visitNegate (ctx) {
      return -this.visit(ctx.numExpr());
    },

    visitParse (ctx) {
      return parseFloat(ctx.number().getText(), 10);
    },
  });
};

export const mixWithExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitBoolExpr (ctx) {
      return this.visit(ctx.numExpr(0)) === this.visit(ctx.numExpr(1));
    },
  });

  mixWithNumExprs(Interpreter);
};
