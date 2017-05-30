'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixWithJumpStats = undefined;

var _file = require('../helpers/file');

var mixWithJumpStats = exports.mixWithJumpStats = function mixWithJumpStats(Interpreter) {
  Object.assign(Interpreter.prototype, {
    visitJumpStat: function visitJumpStat(ctx) {
      if (ctx.PROG() !== null) {
        return (0, _file.execFile)(ctx.STRING().getText());
      }

      if (ctx.endProg() !== null) {
        throw new Error('RETURN'); // Must be caught to stop reducing file
      }

      if (ctx.GOTO() !== null) {
        throw new Error('\\Lbl ' + ctx.ID().getText());
      }
    }
  });
};