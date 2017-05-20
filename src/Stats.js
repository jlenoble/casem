export const mixWithPrintStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitPrint (ctx) {
      let txt = ctx.STRING().getText().replace(/^"(.*)"$/, '$1');
      this.screen.print(txt);
    },

    visitPrintAt (ctx) {
      const x = this.visit(ctx.numExpr(0));
      const y = this.visit(ctx.numExpr(1));
      let txt;

      if (ctx.STRING() !== null) {
        txt = ctx.STRING().getText().replace(/^"(.*)"$/, '$1');
      } else {
        txt = this.visit(ctx.numExpr(2)).toString();
      }

      this.screen.printAt(x, y, txt);
    },
  });
};

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
