import {mixWithPrintStats} from './PrintStats';

export const mixWithStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitAssignStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.visit(ctx.numExpr()));
    },

    visitReadStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.getKey());
    },

    visitStat (ctx) {
      this.queueStat(ctx);
    },
  });

  mixWithPrintStats(Interpreter);
};
