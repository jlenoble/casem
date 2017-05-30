'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixWithExprs = exports.mixWithVectorExprs = undefined;

var _NumExprs = require('./NumExprs');

var mixWithVectorExprs = exports.mixWithVectorExprs = function mixWithVectorExprs(Interpreter) {
  (0, _NumExprs.mixWithNumExprs)(Interpreter);

  var proto = Interpreter.prototype;

  Object.assign(proto, {
    visitVCompute: proto.visitCompute,
    visitVConstEvaluate: proto.visitConstEvaluate,
    visitVEvaluate: proto.visitEvaluate,
    visitVParens: proto.visitParens
  });
};

var mixWithExprs = exports.mixWithExprs = function mixWithExprs(Interpreter) {
  Object.assign(Interpreter.prototype, {
    visitCompare: function visitCompare(ctx) {
      var left = this.visit(ctx.numExpr(0));
      var right = this.visit(ctx.numExpr(1));
      var operator = ctx.compOp();

      if (operator.EQ() !== null) {
        return left === right;
      }
      if (operator.NE() !== null) {
        return left !== right;
      }
      if (operator.GT() !== null) {
        return left > right;
      }
      if (operator.GE() !== null) {
        return left >= right;
      }
      if (operator.LT() !== null) {
        return left < right;
      }
      return left <= right;
    },
    visitReduceBoolExpr: function visitReduceBoolExpr(ctx) {
      var left = this.visit(ctx.boolExpr(0));
      var right = this.visit(ctx.boolExpr(1));
      var operator = ctx.logicOp();

      if (operator.AND() !== null) {
        return left && right;
      }
      return left || right;
    }
  });

  mixWithVectorExprs(Interpreter);
};