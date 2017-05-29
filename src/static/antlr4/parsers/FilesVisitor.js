// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Files.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FilesParser.

function FilesVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FilesVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FilesVisitor.prototype.constructor = FilesVisitor;

// Visit a parse tree produced by FilesParser#header.
FilesVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FilesParser#attributes.
FilesVisitor.prototype.visitAttributes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FilesParser#headerAttr.
FilesVisitor.prototype.visitHeaderAttr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FilesParser#headerValue.
FilesVisitor.prototype.visitHeaderValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FilesParser#fileName.
FilesVisitor.prototype.visitFileName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FilesParser#startHeader.
FilesVisitor.prototype.visitStartHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FilesParser#endHeader.
FilesVisitor.prototype.visitEndHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FilesParser#endFile.
FilesVisitor.prototype.visitEndFile = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FilesVisitor = FilesVisitor;