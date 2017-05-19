export const mixWithStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitAssignStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.visit(ctx.numExpr()));
    },

    visitPrintStat (ctx) {
      console.log(ctx.STRING().getText().replace(/^"(.*)"$/, '$1'));
    },

    visitReadStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.getKey());
    },

    visitStat (ctx) {
      this.queueStat(ctx);
    },
  });
};
