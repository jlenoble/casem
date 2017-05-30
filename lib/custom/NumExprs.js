"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var variables = {};

var mixWithNumExprs = exports.mixWithNumExprs = function mixWithNumExprs(Interpreter) {
  Object.assign(Interpreter.prototype, {
    hasVariable: function hasVariable(name) {
      return function (name) {
        return name in variables;
      };
    },
    getVariable: function getVariable(name) {
      if (!this.hasVariable(name)) {
        throw new ReferenceError("Variable '" + name + "' is not initialized");
      }
      return variables[name];
    },
    setVariable: function setVariable(name, value) {
      variables[name] = value;
    },
    visitAdd: function visitAdd(ctx) {
      if (ctx.addOp().ADD() !== null) {
        return this.visit(ctx.numExpr(0)) + this.visit(ctx.numExpr(1));
      }
      return this.visit(ctx.numExpr(0)) - this.visit(ctx.numExpr(1));
    },
    visitCompute: function visitCompute(ctx) {
      var f = this.visit(ctx.func())(this.visit(ctx.numExpr()));
      var r = Math.round(f);
      return Math.abs(f - r) < 1e-9 ? r : f;
    },
    visitConstEvaluate: function visitConstEvaluate(ctx) {
      var c = ctx.constant();

      if (c.PI() !== null) {
        return Math.PI;
      }
    },
    visitEvaluate: function visitEvaluate(ctx) {
      return this.getVariable(ctx.variable().getText());
    },
    visitListElement: function visitListElement(ctx) {
      return this.visit(ctx.listElementExpr());
    },
    visitMatrixElement: function visitMatrixElement(ctx) {
      return this.visit(ctx.matrixElementExpr());
    },
    visitMultiply: function visitMultiply(ctx) {
      if (ctx.multOp().MUL() !== null) {
        return this.visit(ctx.numExpr(0)) * this.visit(ctx.numExpr(1));
      }
      if (ctx.multOp().DIV() !== null) {
        return this.visit(ctx.numExpr(0)) / this.visit(ctx.numExpr(1));
      }
      return this.visit(ctx.numExpr(0)) % this.visit(ctx.numExpr(1));
    },
    visitNegate: function visitNegate(ctx) {
      return -this.visit(ctx.numExpr());
    },
    visitParens: function visitParens(ctx) {
      return this.visit(ctx.numExpr());
    },
    visitParse: function visitParse(ctx) {
      return parseFloat(ctx.number().getText(), 10);
    },
    visitScalarMult: function visitScalarMult(ctx) {
      return this.visit(ctx.numExpr()) * this.visit(ctx.vectorExpr());
    }
  });
};