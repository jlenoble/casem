// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Functions.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FunctionsParser.

function FunctionsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FunctionsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FunctionsVisitor.prototype.constructor = FunctionsVisitor;

// Visit a parse tree produced by FunctionsParser#func.
FunctionsVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FunctionsVisitor = FunctionsVisitor;