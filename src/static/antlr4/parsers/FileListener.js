// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/File.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FileParser.
function FileListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FileListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FileListener.prototype.constructor = FileListener;

// Enter a parse tree produced by FileParser#header.
FileListener.prototype.enterHeader = function(ctx) {
};

// Exit a parse tree produced by FileParser#header.
FileListener.prototype.exitHeader = function(ctx) {
};


// Enter a parse tree produced by FileParser#attributes.
FileListener.prototype.enterAttributes = function(ctx) {
};

// Exit a parse tree produced by FileParser#attributes.
FileListener.prototype.exitAttributes = function(ctx) {
};


// Enter a parse tree produced by FileParser#headerAttr.
FileListener.prototype.enterHeaderAttr = function(ctx) {
};

// Exit a parse tree produced by FileParser#headerAttr.
FileListener.prototype.exitHeaderAttr = function(ctx) {
};


// Enter a parse tree produced by FileParser#headerValue.
FileListener.prototype.enterHeaderValue = function(ctx) {
};

// Exit a parse tree produced by FileParser#headerValue.
FileListener.prototype.exitHeaderValue = function(ctx) {
};


// Enter a parse tree produced by FileParser#fileName.
FileListener.prototype.enterFileName = function(ctx) {
};

// Exit a parse tree produced by FileParser#fileName.
FileListener.prototype.exitFileName = function(ctx) {
};


// Enter a parse tree produced by FileParser#startHeader.
FileListener.prototype.enterStartHeader = function(ctx) {
};

// Exit a parse tree produced by FileParser#startHeader.
FileListener.prototype.exitStartHeader = function(ctx) {
};


// Enter a parse tree produced by FileParser#endHeader.
FileListener.prototype.enterEndHeader = function(ctx) {
};

// Exit a parse tree produced by FileParser#endHeader.
FileListener.prototype.exitEndHeader = function(ctx) {
};


// Enter a parse tree produced by FileParser#endFile.
FileListener.prototype.enterEndFile = function(ctx) {
};

// Exit a parse tree produced by FileParser#endFile.
FileListener.prototype.exitEndFile = function(ctx) {
};



exports.FileListener = FileListener;