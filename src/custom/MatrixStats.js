import Matrix from '../helpers/matrix';

export const mixWithMatrixStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    matrices: {},

    hasMatrix (name) {
      return name in this.matrices;
    },

    setMatrix (name, value) {
      this.matrices[name] = new Matrix(value);
    },

    setMatrixElement ({name, i, j}, value) {
      this.getMatrix(name).array[i][j] = value;
    },

    getMatrix (name) {
      if (!this.hasMatrix(name)) {
        throw new Error('Never initialized matrix ' + name);
      }
      return this.matrices[name];
    },

    getMatrixElement (name, i, j) {
      return this.getMatrix(name).array[i][j];
    },

    visitAddMatrices (ctx) {
      if (ctx.addOp().ADD() !== null) {
        return this.visit(ctx.matrixExpr(0)).add(this.visit(ctx.matrixExpr(1)));
      }
      return this.visit(ctx.matrixExpr(0)).sub(this.visit(ctx.matrixExpr(1)));
    },

    visitEvaluateMatrix (ctx) {
      return this.getMatrix(ctx.matrix().getText());
    },

    visitMatrixElementExpr (ctx) {
      const name = ctx.matrix().getText();
      const i = this.visit(ctx.numExpr(0)) - 1;
      const j = this.visit(ctx.numExpr(1)) - 1;

      return this.getMatrixElement(name, i, j);
    },

    visitEvaluateMatrixInitializerExpr (ctx) {
      const rows = ctx.matrixInitializerExpr().matrixRowExpr();

      return new Matrix(Object.keys(rows).map(key => {
        const exprs = rows[key].numExpr();
        return Object.keys(exprs).map(key => {
          return this.visit(exprs[key]);
        });
      }));
    },
  });
};
