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


// Visit a parse tree produced by StatsParser#endStat.
StatsVisitor.prototype.visitEndStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#boolExpr.
StatsVisitor.prototype.visitBoolExpr = function(ctx) {
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


// Visit a parse tree produced by StatsParser#stoExpr.
StatsVisitor.prototype.visitStoExpr = function(ctx) {
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