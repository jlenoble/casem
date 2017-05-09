// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Header.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by HeaderParser.

function HeaderVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

HeaderVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
HeaderVisitor.prototype.constructor = HeaderVisitor;

// Visit a parse tree produced by HeaderParser#header.
HeaderVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HeaderParser#entry.
HeaderVisitor.prototype.visitEntry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HeaderParser#label.
HeaderVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HeaderParser#option.
HeaderVisitor.prototype.visitOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HeaderParser#value.
HeaderVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HeaderParser#headerBeg.
HeaderVisitor.prototype.visitHeaderBeg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HeaderParser#boolOp.
HeaderVisitor.prototype.visitBoolOp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.HeaderVisitor = HeaderVisitor;