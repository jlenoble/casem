import {mixWithPrintStats} from './PrintStats';

export const mixWithStats = Interpreter => {
  const proto = Interpreter.prototype;

  Object.assign(proto, {
    visitAssignStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.visit(ctx.numExpr()));
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
};
