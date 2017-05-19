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


// Visit a parse tree produced by CalcParser#blockStat.
CalcVisitor.prototype.visitBlockStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#doStat.
CalcVisitor.prototype.visitDoStat = function(ctx) {
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


// Visit a parse tree produced by CalcParser#printStat.
CalcVisitor.prototype.visitPrintStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#readStat.
CalcVisitor.prototype.visitReadStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#endStat.
CalcVisitor.prototype.visitEndStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#boolExpr.
CalcVisitor.prototype.visitBoolExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#numExpr.
CalcVisitor.prototype.visitNumExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#compOp.
CalcVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#variable.
CalcVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#number.
CalcVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CalcVisitor = CalcVisitor;