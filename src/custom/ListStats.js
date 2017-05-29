import List from '../helpers/list';

export const mixWithListStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    lists: {},

    hasList (name) {
      return name in this.lists;
    },

    setList (name, value) {
      this.lists[name] = new List(value);
    },

    setListElement ({name, i}, value) {
      this.getList(name).array[i] = value;
    },

    getList (name) {
      if (!this.hasList(name)) {
        throw new Error('Never initialized list ' + name);
      }
      return this.lists[name];
    },

    getListElement (name, i) {
      return this.getList(name).array[i];
    },

    visitAddLists (ctx) {
      if (ctx.addOp().ADD() !== null) {
        return this.visit(ctx.listExpr(0)).add(this.visit(ctx.listExpr(1)));
      }
      return this.visit(ctx.listExpr(0)).sub(this.visit(ctx.listExpr(1)));
    },

    visitEvaluateList (ctx) {
      return this.getList(ctx.list().getText());
    },

    visitListElementExpr (ctx) {
      const name = ctx.list().getText();
      const i = this.visit(ctx.numExpr(0)) - 1;

      return this.getListElement(name, i);
    },

    visitEvaluateListInitializerExpr (ctx) {
      const exprs = ctx.listInitializerExpr().numExpr();
      return new List(Object.keys(exprs).map(key => {
        return this.visit(exprs[key]);
      }));
    },
  });
};
