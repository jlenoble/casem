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


// Visit a parse tree produced by CalcParser#data.
CalcVisitor.prototype.visitData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#cmd.
CalcVisitor.prototype.visitCmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#expr.
CalcVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#assignExpr.
CalcVisitor.prototype.visitAssignExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#boolExpr.
CalcVisitor.prototype.visitBoolExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#confExpr.
CalcVisitor.prototype.visitConfExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#doExpr.
CalcVisitor.prototype.visitDoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#evalExpr.
CalcVisitor.prototype.visitEvalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#flowExpr.
CalcVisitor.prototype.visitFlowExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#forExpr.
CalcVisitor.prototype.visitForExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#graphExpr.
CalcVisitor.prototype.visitGraphExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#ifExpr.
CalcVisitor.prototype.visitIfExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#printExpr.
CalcVisitor.prototype.visitPrintExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#readExpr.
CalcVisitor.prototype.visitReadExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#storExpr.
CalcVisitor.prototype.visitStorExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#valueExpr.
CalcVisitor.prototype.visitValueExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#lbl.
CalcVisitor.prototype.visitLbl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#func.
CalcVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#matrElt.
CalcVisitor.prototype.visitMatrElt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#matr.
CalcVisitor.prototype.visitMatr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#list.
CalcVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#cmdEnd.
CalcVisitor.prototype.visitCmdEnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#dataBeg.
CalcVisitor.prototype.visitDataBeg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#fileEnd.
CalcVisitor.prototype.visitFileEnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#header.
CalcVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#entry.
CalcVisitor.prototype.visitEntry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#label.
CalcVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#option.
CalcVisitor.prototype.visitOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#value.
CalcVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#headerBeg.
CalcVisitor.prototype.visitHeaderBeg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#boolOp.
CalcVisitor.prototype.visitBoolOp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CalcVisitor = CalcVisitor;