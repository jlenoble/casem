// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by OperatorsParser.

function OperatorsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

OperatorsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
OperatorsVisitor.prototype.constructor = OperatorsVisitor;

// Visit a parse tree produced by OperatorsParser#addOp.
OperatorsVisitor.prototype.visitAddOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by OperatorsParser#multOp.
OperatorsVisitor.prototype.visitMultOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by OperatorsParser#compOp.
OperatorsVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by OperatorsParser#boolOp.
OperatorsVisitor.prototype.visitBoolOp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.OperatorsVisitor = OperatorsVisitor;