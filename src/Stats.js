export const mixWithStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitAssignStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.visit(ctx.numExpr()));
    },

    visitPrintStat (ctx) {
      if (ctx.LOCATE()) {
        console.log(this.visit(ctx.numExpr(2)));
      } else {
        console.log(ctx.STRING().getText().replace(/^"(.*)"$/, '$1'));
      }
    },

    visitReadStat (ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.getKey());
    },

    visitStat (ctx) {
      this.queueStat(ctx);
    },
  });
};
