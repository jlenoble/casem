// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Common.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CommonParser.

function CommonVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CommonVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CommonVisitor.prototype.constructor = CommonVisitor;

// Visit a parse tree produced by CommonParser#matrix.
CommonVisitor.prototype.visitMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#variable.
CommonVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#lbl.
CommonVisitor.prototype.visitLbl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#number.
CommonVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#endStat.
CommonVisitor.prototype.visitEndStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#endProg.
CommonVisitor.prototype.visitEndProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#func.
CommonVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#addOp.
CommonVisitor.prototype.visitAddOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#multOp.
CommonVisitor.prototype.visitMultOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#compOp.
CommonVisitor.prototype.visitCompOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CommonParser#boolOP.
CommonVisitor.prototype.visitBoolOP = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CommonVisitor = CommonVisitor;