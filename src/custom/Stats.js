import {mixWithJumpStats} from './JumpStats';
import {mixWithPrintStats} from './PrintStats';
import {mixWithMatrixStats} from './MatrixStats';
import {mixWithListStats} from './ListStats';

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

      if (ctx.listStoExpr() !== null) {
        this.setList(ctx.listStoExpr().getText(),
          this.visit(ctx.listExpr()));
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

  mixWithJumpStats(Interpreter);
  mixWithPrintStats(Interpreter);
  mixWithMatrixStats(Interpreter);
  mixWithListStats(Interpreter);
};
