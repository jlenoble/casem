'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixWithMatrixStats = undefined;

var _matrix = require('../helpers/matrix');

var _matrix2 = _interopRequireDefault(_matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mixWithMatrixStats = exports.mixWithMatrixStats = function mixWithMatrixStats(Interpreter) {
  Object.assign(Interpreter.prototype, {
    matrices: {},

    hasMatrix: function hasMatrix(name) {
      return name in this.matrices;
    },
    setMatrix: function setMatrix(name, value) {
      this.matrices[name] = new _matrix2.default(value);
    },
    setMatrixElement: function setMatrixElement(_ref, value) {
      var name = _ref.name,
          i = _ref.i,
          j = _ref.j;

      this.getMatrix(name).array[i][j] = value;
    },
    getMatrix: function getMatrix(name) {
      if (!this.hasMatrix(name)) {
        throw new Error('Never initialized matrix ' + name);
      }
      return this.matrices[name];
    },
    getMatrixElement: function getMatrixElement(name, i, j) {
      return this.getMatrix(name).array[i][j];
    },
    visitAddMatrices: function visitAddMatrices(ctx) {
      if (ctx.addOp().ADD() !== null) {
        return this.visit(ctx.matrixExpr(0)).add(this.visit(ctx.matrixExpr(1)));
      }
      return this.visit(ctx.matrixExpr(0)).sub(this.visit(ctx.matrixExpr(1)));
    },
    visitEvaluateMatrix: function visitEvaluateMatrix(ctx) {
      return this.getMatrix(ctx.matrix().getText());
    },
    visitMatrixElementExpr: function visitMatrixElementExpr(ctx) {
      var name = ctx.matrix().getText();
      var i = this.visit(ctx.numExpr(0)) - 1;
      var j = this.visit(ctx.numExpr(1)) - 1;

      return this.getMatrixElement(name, i, j);
    },
    visitEvaluateMatrixInitializerExpr: function visitEvaluateMatrixInitializerExpr(ctx) {
      var _this = this;

      var rows = ctx.matrixInitializerExpr().matrixRowExpr();

      return new _matrix2.default(Object.keys(rows).map(function (key) {
        var exprs = rows[key].numExpr();
        return Object.keys(exprs).map(function (key) {
          return _this.visit(exprs[key]);
        });
      }));
    }
  });
};