const variables = {};

export const mixWithNumExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    hasVariable (name) {
      return name => name in variables;
    },

    getVariable (name) {
      if (!this.hasVariable(name)) {
        throw new ReferenceError(`Variable '${name}' is not initialized`);
      }
      return variables[name];
    },

    setVariable (name, value) {
      variables[name] = value;
    },

    visitAdd (ctx) {
      if (ctx.addOp().ADD() !== null) {
        return this.visit(ctx.numExpr(0)) + this.visit(ctx.numExpr(1));
      }
      return this.visit(ctx.numExpr(0)) - this.visit(ctx.numExpr(1));
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

    visitMatrixElement (ctx) {
      return this.visit(ctx.matrixElementExpr());
    },

    visitMultiply (ctx) {
      if (ctx.multOp().MUL() !== null) {
        return this.visit(ctx.numExpr(0)) * this.visit(ctx.numExpr(1));
      }
      if (ctx.multOp().DIV() !== null) {
        return this.visit(ctx.numExpr(0)) / this.visit(ctx.numExpr(1));
      }
      return this.visit(ctx.numExpr(0)) % this.visit(ctx.numExpr(1));
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
