export const mixWithNumExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitAdd (ctx) {
      if (ctx.addOp().ADD() !== null) {
        return this.visit(ctx.numExpr(0)) + this.visit(ctx.numExpr(1));
      } else {
        return this.visit(ctx.numExpr(0)) - this.visit(ctx.numExpr(1));
      }
    },

    visitCompute (ctx) {
      const f = this.visit(ctx.func())(this.visit(ctx.numExpr()));
      const r = Math.round(f);
      return Math.abs(f - r) < 1e-9 ? r : f;
    },

    visitConstEvaluate (ctx) {
      const c = ctx.constant();

      if (c.PI() !== null) {
        return Math.PI;
      }
    },

    visitEvaluate (ctx) {
      return this.getVariable(ctx.variable().getText());
    },

    visitMultiply (ctx) {
      if (ctx.multOp().MUL() !== null) {
        return this.visit(ctx.numExpr(0)) * this.visit(ctx.numExpr(1));
      } else {
        return this.visit(ctx.numExpr(0)) / this.visit(ctx.numExpr(1));
      }
    },

    visitNegate (ctx) {
      return -this.visit(ctx.numExpr());
    },

    visitParens (ctx) {
      return this.visit(ctx.numExpr());
    },

    visitParse (ctx) {
      return parseFloat(ctx.number().getText(), 10);
    },

    visitScalarMult (ctx) {
      return this.visit(ctx.numExpr()) * this.visit(ctx.vectorExpr());
    },
  });
};

export const mixWithVectorExprs = Interpreter => {
  mixWithNumExprs(Interpreter);

  Object.assign(Interpreter.prototype, {
    visitVCompute: Interpreter.prototype.visitCompute,
    visitVConstEvaluate: Interpreter.prototype.visitConstEvaluate,
    visitVEvaluate: Interpreter.prototype.visitVEvaluate,
    visitVParens: Interpreter.prototype.visitVParens,
  });
};

export const mixWithExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitBoolExpr (ctx) {
      return this.visit(ctx.numExpr(0)) === this.visit(ctx.numExpr(1));
    },
  });

  mixWithVectorExprs(Interpreter);
};
