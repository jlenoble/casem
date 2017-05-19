// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprsParser.
function ExprsListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprsListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprsListener.prototype.constructor = ExprsListener;

// Enter a parse tree produced by ExprsParser#boolExpr.
ExprsListener.prototype.enterBoolExpr = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#boolExpr.
ExprsListener.prototype.exitBoolExpr = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#numExpr.
ExprsListener.prototype.enterNumExpr = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#numExpr.
ExprsListener.prototype.exitNumExpr = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#compOp.
ExprsListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#compOp.
ExprsListener.prototype.exitCompOp = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#variable.
ExprsListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#variable.
ExprsListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#number.
ExprsListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#number.
ExprsListener.prototype.exitNumber = function(ctx) {
};



exports.ExprsListener = ExprsListener;