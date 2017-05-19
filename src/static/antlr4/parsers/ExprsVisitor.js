// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExprsParser.

function ExprsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExprsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprsVisitor.prototype.constructor = ExprsVisitor;

// Visit a parse tree produced by ExprsParser#boolExpr.
ExprsVisitor.prototype.visitBoolExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#numExpr.
ExprsVisitor.prototype.visitNumExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#compOp.
ExprsVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#variable.
ExprsVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprsParser#number.
ExprsVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExprsVisitor = ExprsVisitor;