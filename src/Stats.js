import {mixWithPrintStats} from './PrintStats';
import {mixWithMatrixStats} from './MatrixStats';

export const mixWithStats = Interpreter => {
  const proto = Interpreter.prototype;

  Object.assign(proto, {
    visitAssignStat (ctx) {
      if (ctx.stoExpr() !== null) {
        this.setVariable(ctx.stoExpr().getText(), this.visit(ctx.numExpr()));
        return;
      }

      if (ctx.matrixStoExpr() !== null) {
        this.setMatrix(ctx.matrixStoExpr().getText(),
          this.visit(ctx.matrixExpr()));
        return;
      }
    },

    visitImplyStat (ctx) {
      if (this.visit(ctx.boolExpr())) {
        this.visit(ctx.stat());
      }
    },

    visitReadStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.getKey());
    },
  });

  mixWithPrintStats(Interpreter);
  mixWithMatrixStats(Interpreter);
};
