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


// Visit a parse tree produced by StatsParser#printStat.
StatsVisitor.prototype.visitPrintStat = function(ctx) {
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


// Visit a parse tree produced by StatsParser#numExpr.
StatsVisitor.prototype.visitNumExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#compOp.
StatsVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#variable.
StatsVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StatsParser#number.
StatsVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.StatsVisitor = StatsVisitor;