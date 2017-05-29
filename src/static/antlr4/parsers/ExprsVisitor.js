// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExprsParser.

function ExprsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExprsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprsVisitor.prototype.constructor = ExprsVisitor;

// Visit a parse tree produced by ExprsParser#reduceBoolExpr.
ExprsVisitor.prototype.visitReduceBoolExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#compare.
ExprsVisitor.prototype.visitCompare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#compute.
ExprsVisitor.prototype.visitCompute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#add.
ExprsVisitor.prototype.visitAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#parens.
ExprsVisitor.prototype.visitParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#matrixElement.
ExprsVisitor.prototype.visitMatrixElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#scalarMult.
ExprsVisitor.prototype.visitScalarMult = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#negate.
ExprsVisitor.prototype.visitNegate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#constEvaluate.
ExprsVisitor.prototype.visitConstEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#parse.
ExprsVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#multiply.
ExprsVisitor.prototype.visitMultiply = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#evaluate.
ExprsVisitor.prototype.visitEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#evaluateMatrix.
ExprsVisitor.prototype.visitEvaluateMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#evaluateMatrixInitializerExpr.
ExprsVisitor.prototype.visitEvaluateMatrixInitializerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#addMatrices.
ExprsVisitor.prototype.visitAddMatrices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#stoExpr.
ExprsVisitor.prototype.visitStoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#matrixStoExpr.
ExprsVisitor.prototype.visitMatrixStoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#matrixInitializerExpr.
ExprsVisitor.prototype.visitMatrixInitializerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#matrixRowExpr.
ExprsVisitor.prototype.visitMatrixRowExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#matrixElementExpr.
ExprsVisitor.prototype.visitMatrixElementExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#vParens.
ExprsVisitor.prototype.visitVParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#vCompute.
ExprsVisitor.prototype.visitVCompute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#vEvaluate.
ExprsVisitor.prototype.visitVEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#vConstEvaluate.
ExprsVisitor.prototype.visitVConstEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#compOp.
ExprsVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#logicOp.
ExprsVisitor.prototype.visitLogicOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#multOp.
ExprsVisitor.prototype.visitMultOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#addOp.
ExprsVisitor.prototype.visitAddOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#func.
ExprsVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#matrix.
ExprsVisitor.prototype.visitMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#variable.
ExprsVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#constant.
ExprsVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#number.
ExprsVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExprsVisitor = ExprsVisitor;