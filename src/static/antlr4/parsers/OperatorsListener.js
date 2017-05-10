// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by OperatorsParser.
function OperatorsListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

OperatorsListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
OperatorsListener.prototype.constructor = OperatorsListener;

// Enter a parse tree produced by OperatorsParser#additiveOp.
OperatorsListener.prototype.enterAdditiveOp = function(ctx) {
};

// Exit a parse tree produced by OperatorsParser#additiveOp.
OperatorsListener.prototype.exitAdditiveOp = function(ctx) {
};


// Enter a parse tree produced by OperatorsParser#multiplicativeOp.
OperatorsListener.prototype.enterMultiplicativeOp = function(ctx) {
};

// Exit a parse tree produced by OperatorsParser#multiplicativeOp.
OperatorsListener.prototype.exitMultiplicativeOp = function(ctx) {
};



exports.OperatorsListener = OperatorsListener;