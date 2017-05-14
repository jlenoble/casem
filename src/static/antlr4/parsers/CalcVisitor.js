// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CalcParser.

function CalcVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CalcVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CalcVisitor.prototype.constructor = CalcVisitor;

// Visit a parse tree produced by CalcParser#prog.
CalcVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#file.
CalcVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#block.
CalcVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#stat.
CalcVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#assignStat.
CalcVisitor.prototype.visitAssignStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#print.
CalcVisitor.prototype.visitPrint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#printAt.
CalcVisitor.prototype.visitPrintAt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#clearText.
CalcVisitor.prototype.visitClearText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#confStat.
CalcVisitor.prototype.visitConfStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#readStat.
CalcVisitor.prototype.visitReadStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#graphStat.
CalcVisitor.prototype.visitGraphStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#ifStat.
CalcVisitor.prototype.visitIfStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#forStat.
CalcVisitor.prototype.visitForStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#doStat.
CalcVisitor.prototype.visitDoStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#implyStat.
CalcVisitor.prototype.visitImplyStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#jumpStat.
CalcVisitor.prototype.visitJumpStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#labelStat.
CalcVisitor.prototype.visitLabelStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#add.
CalcVisitor.prototype.visitAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#parseFloat.
CalcVisitor.prototype.visitParseFloat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#parens.
CalcVisitor.prototype.visitParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluateListInitializer.
CalcVisitor.prototype.visitEvaluateListInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluateMatrix.
CalcVisitor.prototype.visitEvaluateMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#scalarMult.
CalcVisitor.prototype.visitScalarMult = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#factorial.
CalcVisitor.prototype.visitFactorial = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluateMatrixInitializer.
CalcVisitor.prototype.visitEvaluateMatrixInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluateList.
CalcVisitor.prototype.visitEvaluateList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluateMatrixElement.
CalcVisitor.prototype.visitEvaluateMatrixElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluateListElement.
CalcVisitor.prototype.visitEvaluateListElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#compute.
CalcVisitor.prototype.visitCompute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluateSeq.
CalcVisitor.prototype.visitEvaluateSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#negate.
CalcVisitor.prototype.visitNegate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#power.
CalcVisitor.prototype.visitPower = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#multiply.
CalcVisitor.prototype.visitMultiply = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evaluate.
CalcVisitor.prototype.visitEvaluate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#exponent.
CalcVisitor.prototype.visitExponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#vectorExpr.
CalcVisitor.prototype.visitVectorExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#dispExpr.
CalcVisitor.prototype.visitDispExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#stoExpr.
CalcVisitor.prototype.visitStoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#getKey.
CalcVisitor.prototype.visitGetKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#reduceBoolExpr.
CalcVisitor.prototype.visitReduceBoolExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#compare.
CalcVisitor.prototype.visitCompare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#matrixElement.
CalcVisitor.prototype.visitMatrixElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#matrixInitializer.
CalcVisitor.prototype.visitMatrixInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#matrixRow.
CalcVisitor.prototype.visitMatrixRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#listElement.
CalcVisitor.prototype.visitListElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#listInitializer.
CalcVisitor.prototype.visitListInitializer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#header.
CalcVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#attributes.
CalcVisitor.prototype.visitAttributes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#headerAttr.
CalcVisitor.prototype.visitHeaderAttr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#headerValue.
CalcVisitor.prototype.visitHeaderValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#fileName.
CalcVisitor.prototype.visitFileName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#startHeader.
CalcVisitor.prototype.visitStartHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#endHeader.
CalcVisitor.prototype.visitEndHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#endFile.
CalcVisitor.prototype.visitEndFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#matrix.
CalcVisitor.prototype.visitMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#list.
CalcVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#variable.
CalcVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#lbl.
CalcVisitor.prototype.visitLbl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#number.
CalcVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#endStat.
CalcVisitor.prototype.visitEndStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#endProg.
CalcVisitor.prototype.visitEndProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#func.
CalcVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#addOp.
CalcVisitor.prototype.visitAddOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#multOp.
CalcVisitor.prototype.visitMultOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#powOp.
CalcVisitor.prototype.visitPowOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#compOp.
CalcVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#boolOp.
CalcVisitor.prototype.visitBoolOp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CalcVisitor = CalcVisitor;