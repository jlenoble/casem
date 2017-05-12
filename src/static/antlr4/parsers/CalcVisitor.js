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


// Visit a parse tree produced by CalcParser#block.
CalcVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#nonGreedyBlock.
CalcVisitor.prototype.visitNonGreedyBlock = function(ctx) {
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


// Visit a parse tree produced by CalcParser#ifStat.
CalcVisitor.prototype.visitIfStat = function(ctx) {
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


// Visit a parse tree produced by CalcParser#routineStat.
CalcVisitor.prototype.visitRoutineStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#labelStat.
CalcVisitor.prototype.visitLabelStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#compute.
CalcVisitor.prototype.visitCompute = function(ctx) {
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


// Visit a parse tree produced by CalcParser#negate.
CalcVisitor.prototype.visitNegate = function(ctx) {
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


// Visit a parse tree produced by CalcParser#stoExpr.
CalcVisitor.prototype.visitStoExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#boolExpr.
CalcVisitor.prototype.visitBoolExpr = function(ctx) {
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


// Visit a parse tree produced by CalcParser#compOp.
CalcVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#boolOP.
CalcVisitor.prototype.visitBoolOP = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CalcVisitor = CalcVisitor;