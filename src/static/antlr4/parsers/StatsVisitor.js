// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by StatsParser.

function StatsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

StatsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
StatsVisitor.prototype.constructor = StatsVisitor;

// Visit a parse tree produced by StatsParser#stat.
StatsVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#assignStat.
StatsVisitor.prototype.visitAssignStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#print.
StatsVisitor.prototype.visitPrint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#printAt.
StatsVisitor.prototype.visitPrintAt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#readStat.
StatsVisitor.prototype.visitReadStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#implyStat.
StatsVisitor.prototype.visitImplyStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#endStat.
StatsVisitor.prototype.visitEndStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#reduceBoolExpr.
StatsVisitor.prototype.visitReduceBoolExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#compare.
StatsVisitor.prototype.visitCompare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#compute.
StatsVisitor.prototype.visitCompute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#add.
StatsVisitor.prototype.visitAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#parens.
StatsVisitor.prototype.visitParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#matrixElement.
StatsVisitor.prototype.visitMatrixElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#listElement.
StatsVisitor.prototype.visitListElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#scalarMult.
StatsVisitor.prototype.visitScalarMult = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#negate.
StatsVisitor.prototype.visitNegate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#constEvaluate.
StatsVisitor.prototype.visitConstEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#parse.
StatsVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#multiply.
StatsVisitor.prototype.visitMultiply = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#evaluate.
StatsVisitor.prototype.visitEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#evaluateMatrix.
StatsVisitor.prototype.visitEvaluateMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#evaluateMatrixInitializerExpr.
StatsVisitor.prototype.visitEvaluateMatrixInitializerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#addMatrices.
StatsVisitor.prototype.visitAddMatrices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#addLists.
StatsVisitor.prototype.visitAddLists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#evaluateList.
StatsVisitor.prototype.visitEvaluateList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#evaluateListInitializerExpr.
StatsVisitor.prototype.visitEvaluateListInitializerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#stoExpr.
StatsVisitor.prototype.visitStoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#matrixStoExpr.
StatsVisitor.prototype.visitMatrixStoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#listStoExpr.
StatsVisitor.prototype.visitListStoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#matrixInitializerExpr.
StatsVisitor.prototype.visitMatrixInitializerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#listInitializerExpr.
StatsVisitor.prototype.visitListInitializerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#matrixRowExpr.
StatsVisitor.prototype.visitMatrixRowExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#matrixElementExpr.
StatsVisitor.prototype.visitMatrixElementExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#listElementExpr.
StatsVisitor.prototype.visitListElementExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#vParens.
StatsVisitor.prototype.visitVParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#vCompute.
StatsVisitor.prototype.visitVCompute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#vEvaluate.
StatsVisitor.prototype.visitVEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#vConstEvaluate.
StatsVisitor.prototype.visitVConstEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#compOp.
StatsVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#logicOp.
StatsVisitor.prototype.visitLogicOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#multOp.
StatsVisitor.prototype.visitMultOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#addOp.
StatsVisitor.prototype.visitAddOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#func.
StatsVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#matrix.
StatsVisitor.prototype.visitMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#list.
StatsVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#variable.
StatsVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#constant.
StatsVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#number.
StatsVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.StatsVisitor = StatsVisitor;