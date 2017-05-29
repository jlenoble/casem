import Screen from './screen';

const screen = new Screen();

export const mixWithPrintStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitClearText () {
      screen.clear();
    },

    visitPrint (ctx) {
      let txt = ctx.STRING().getText().replace(/^"(.*)"$/, '$1');
      screen.print(txt);
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

      screen.printAt(x, y, txt);
    },
  });
};
