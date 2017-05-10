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


// Visit a parse tree produced by CalcParser#statement.
CalcVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#expr.
CalcVisitor.prototype.visitExpr = function(ctx) {
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


// Visit a parse tree produced by CalcParser#print.
CalcVisitor.prototype.visitPrint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#printAt.
CalcVisitor.prototype.visitPrintAt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#assignExpr.
CalcVisitor.prototype.visitAssignExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#stoExpr.
CalcVisitor.prototype.visitStoExpr = function(ctx) {
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


// Visit a parse tree produced by CalcParser#endStatement.
CalcVisitor.prototype.visitEndStatement = function(ctx) {
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



exports.CalcVisitor = CalcVisitor;