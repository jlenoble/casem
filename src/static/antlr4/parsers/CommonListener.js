// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Common.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CommonParser.
function CommonListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CommonListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CommonListener.prototype.constructor = CommonListener;

// Enter a parse tree produced by CommonParser#matrix.
CommonListener.prototype.enterMatrix = function(ctx) {
};

// Exit a parse tree produced by CommonParser#matrix.
CommonListener.prototype.exitMatrix = function(ctx) {
};


// Enter a parse tree produced by CommonParser#list.
CommonListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by CommonParser#list.
CommonListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by CommonParser#variable.
CommonListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CommonParser#variable.
CommonListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CommonParser#lbl.
CommonListener.prototype.enterLbl = function(ctx) {
};

// Exit a parse tree produced by CommonParser#lbl.
CommonListener.prototype.exitLbl = function(ctx) {
};


// Enter a parse tree produced by CommonParser#number.
CommonListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by CommonParser#number.
CommonListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by CommonParser#endStat.
CommonListener.prototype.enterEndStat = function(ctx) {
};

// Exit a parse tree produced by CommonParser#endStat.
CommonListener.prototype.exitEndStat = function(ctx) {
};


// Enter a parse tree produced by CommonParser#endProg.
CommonListener.prototype.enterEndProg = function(ctx) {
};

// Exit a parse tree produced by CommonParser#endProg.
CommonListener.prototype.exitEndProg = function(ctx) {
};


// Enter a parse tree produced by CommonParser#func.
CommonListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by CommonParser#func.
CommonListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by CommonParser#addOp.
CommonListener.prototype.enterAddOp = function(ctx) {
};

// Exit a parse tree produced by CommonParser#addOp.
CommonListener.prototype.exitAddOp = function(ctx) {
};


// Enter a parse tree produced by CommonParser#multOp.
CommonListener.prototype.enterMultOp = function(ctx) {
};

// Exit a parse tree produced by CommonParser#multOp.
CommonListener.prototype.exitMultOp = function(ctx) {
};


// Enter a parse tree produced by CommonParser#compOp.
CommonListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by CommonParser#compOp.
CommonListener.prototype.exitCompOp = function(ctx) {
};


// Enter a parse tree produced by CommonParser#boolOp.
CommonListener.prototype.enterBoolOp = function(ctx) {
};

// Exit a parse tree produced by CommonParser#boolOp.
CommonListener.prototype.exitBoolOp = function(ctx) {
};



exports.CommonListener = CommonListener;