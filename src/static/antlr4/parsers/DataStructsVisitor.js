// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/DataStructs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DataStructsParser.

function DataStructsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DataStructsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DataStructsVisitor.prototype.constructor = DataStructsVisitor;

// Visit a parse tree produced by DataStructsParser#variable.
DataStructsVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DataStructsParser#number.
DataStructsVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.DataStructsVisitor = DataStructsVisitor;