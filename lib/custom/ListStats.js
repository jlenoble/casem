'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixWithListStats = undefined;

var _list = require('../helpers/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mixWithListStats = exports.mixWithListStats = function mixWithListStats(Interpreter) {
  Object.assign(Interpreter.prototype, {
    lists: {},

    hasList: function hasList(name) {
      return name in this.lists;
    },
    setList: function setList(name, value) {
      this.lists[name] = new _list2.default(value);
    },
    setListElement: function setListElement(_ref, value) {
      var name = _ref.name,
          i = _ref.i;

      this.getList(name).array[i] = value;
    },
    getList: function getList(name) {
      if (!this.hasList(name)) {
        throw new Error('Never initialized list ' + name);
      }
      return this.lists[name];
    },
    getListElement: function getListElement(name, i) {
      return this.getList(name).array[i];
    },
    visitAddLists: function visitAddLists(ctx) {
      if (ctx.addOp().ADD() !== null) {
        return this.visit(ctx.listExpr(0)).add(this.visit(ctx.listExpr(1)));
      }
      return this.visit(ctx.listExpr(0)).sub(this.visit(ctx.listExpr(1)));
    },
    visitEvaluateList: function visitEvaluateList(ctx) {
      return this.getList(ctx.list().getText());
    },
    visitListElementExpr: function visitListElementExpr(ctx) {
      var name = ctx.list().getText();
      var i = this.visit(ctx.numExpr(0)) - 1;

      return this.getListElement(name, i);
    },
    visitEvaluateListInitializerExpr: function visitEvaluateListInitializerExpr(ctx) {
      var _this = this;

      var exprs = ctx.listInitializerExpr().numExpr();
      return new _list2.default(Object.keys(exprs).map(function (key) {
        return _this.visit(exprs[key]);
      }));
    }
  });
};