// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/File.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FileParser.

function FileVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FileVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FileVisitor.prototype.constructor = FileVisitor;

// Visit a parse tree produced by FileParser#header.
FileVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FileParser#attributes.
FileVisitor.prototype.visitAttributes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FileParser#headerAttr.
FileVisitor.prototype.visitHeaderAttr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FileParser#headerValue.
FileVisitor.prototype.visitHeaderValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FileParser#fileName.
FileVisitor.prototype.visitFileName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FileParser#startHeader.
FileVisitor.prototype.visitStartHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FileParser#endHeader.
FileVisitor.prototype.visitEndHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FileParser#endFile.
FileVisitor.prototype.visitEndFile = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FileVisitor = FileVisitor;