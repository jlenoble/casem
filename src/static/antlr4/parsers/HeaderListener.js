// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Header.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HeaderParser.
function HeaderListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HeaderListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HeaderListener.prototype.constructor = HeaderListener;

// Enter a parse tree produced by HeaderParser#header.
HeaderListener.prototype.enterHeader = function(ctx) {
};

// Exit a parse tree produced by HeaderParser#header.
HeaderListener.prototype.exitHeader = function(ctx) {
};


// Enter a parse tree produced by HeaderParser#entry.
HeaderListener.prototype.enterEntry = function(ctx) {
};

// Exit a parse tree produced by HeaderParser#entry.
HeaderListener.prototype.exitEntry = function(ctx) {
};


// Enter a parse tree produced by HeaderParser#label.
HeaderListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by HeaderParser#label.
HeaderListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by HeaderParser#option.
HeaderListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by HeaderParser#option.
HeaderListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by HeaderParser#value.
HeaderListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by HeaderParser#value.
HeaderListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by HeaderParser#headerBeg.
HeaderListener.prototype.enterHeaderBeg = function(ctx) {
};

// Exit a parse tree produced by HeaderParser#headerBeg.
HeaderListener.prototype.exitHeaderBeg = function(ctx) {
};


// Enter a parse tree produced by HeaderParser#boolOp.
HeaderListener.prototype.enterBoolOp = function(ctx) {
};

// Exit a parse tree produced by HeaderParser#boolOp.
HeaderListener.prototype.exitBoolOp = function(ctx) {
};



exports.HeaderListener = HeaderListener;