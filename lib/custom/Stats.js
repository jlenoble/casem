'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixWithStats = undefined;

var _JumpStats = require('./JumpStats');

var _PrintStats = require('./PrintStats');

var _MatrixStats = require('./MatrixStats');

var _ListStats = require('./ListStats');

var mixWithStats = exports.mixWithStats = function mixWithStats(Interpreter) {
  var proto = Interpreter.prototype;

  Object.assign(proto, {
    visitAssignStat: function visitAssignStat(ctx) {
      if (ctx.stoExpr() !== null) {
        this.setVariable(ctx.stoExpr().getText(), this.visit(ctx.numExpr()));
        return;
      }

      if (ctx.matrixStoExpr() !== null) {
        this.setMatrix(ctx.matrixStoExpr().getText(), this.visit(ctx.matrixExpr()));
        return;
      }

      if (ctx.listStoExpr() !== null) {
        this.setList(ctx.listStoExpr().getText(), this.visit(ctx.listExpr()));
        return;
      }
    },
    visitImplyStat: function visitImplyStat(ctx) {
      if (this.visit(ctx.boolExpr())) {
        this.visit(ctx.stat());
      }
    },
    visitReadStat: function visitReadStat(ctx) {
      this.setVariable(ctx.stoExpr().getText(), this.getKey());
    }
  });

  (0, _JumpStats.mixWithJumpStats)(Interpreter);
  (0, _PrintStats.mixWithPrintStats)(Interpreter);
  (0, _MatrixStats.mixWithMatrixStats)(Interpreter);
  (0, _ListStats.mixWithListStats)(Interpreter);
};