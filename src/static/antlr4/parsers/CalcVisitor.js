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


// Visit a parse tree produced by CalcParser#header.
CalcVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#headerStart.
CalcVisitor.prototype.visitHeaderStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#headerEntry.
CalcVisitor.prototype.visitHeaderEntry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#entryName.
CalcVisitor.prototype.visitEntryName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalcParser#entryExpr.
CalcVisitor.prototype.visitEntryExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CalcVisitor = CalcVisitor;