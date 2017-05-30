'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixWithPrintStats = undefined;

var _screen = require('../helpers/screen');

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var screen = new _screen2.default();

var mixWithPrintStats = exports.mixWithPrintStats = function mixWithPrintStats(Interpreter) {
  Object.assign(Interpreter.prototype, {
    visitClearText: function visitClearText() {
      screen.clear();
    },
    visitPrint: function visitPrint(ctx) {
      var txt = ctx.STRING().getText().replace(/^"(.*)"$/, '$1');
      screen.print(txt);
    },
    visitPrintAt: function visitPrintAt(ctx) {
      var x = this.visit(ctx.numExpr(0));
      var y = this.visit(ctx.numExpr(1));
      var txt = void 0;

      if (ctx.STRING() !== null) {
        txt = ctx.STRING().getText().replace(/^"(.*)"$/, '$1');
      } else {
        txt = this.visit(ctx.numExpr(2)).toString();
      }

      screen.printAt(x, y, txt);
    }
  });
};