// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CalcParser.
function CalcListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CalcListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CalcListener.prototype.constructor = CalcListener;

// Enter a parse tree produced by CalcParser#prog.
CalcListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by CalcParser#prog.
CalcListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by CalcParser#stat.
CalcListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#stat.
CalcListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#expr.
CalcListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#expr.
CalcListener.prototype.exitExpr = function(ctx) {
};



exports.CalcListener = CalcListener;