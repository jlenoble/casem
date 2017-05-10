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


// Enter a parse tree produced by CalcParser#statement.
CalcListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#statement.
CalcListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by CalcParser#expr.
CalcListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#expr.
CalcListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#add.
CalcListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by CalcParser#add.
CalcListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by CalcParser#parseFloat.
CalcListener.prototype.enterParseFloat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#parseFloat.
CalcListener.prototype.exitParseFloat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#parens.
CalcListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by CalcParser#parens.
CalcListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by CalcParser#negate.
CalcListener.prototype.enterNegate = function(ctx) {
};

// Exit a parse tree produced by CalcParser#negate.
CalcListener.prototype.exitNegate = function(ctx) {
};


// Enter a parse tree produced by CalcParser#multiply.
CalcListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by CalcParser#multiply.
CalcListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluate.
CalcListener.prototype.enterEvaluate = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluate.
CalcListener.prototype.exitEvaluate = function(ctx) {
};


// Enter a parse tree produced by CalcParser#print.
CalcListener.prototype.enterPrint = function(ctx) {
};

// Exit a parse tree produced by CalcParser#print.
CalcListener.prototype.exitPrint = function(ctx) {
};


// Enter a parse tree produced by CalcParser#printAt.
CalcListener.prototype.enterPrintAt = function(ctx) {
};

// Exit a parse tree produced by CalcParser#printAt.
CalcListener.prototype.exitPrintAt = function(ctx) {
};


// Enter a parse tree produced by CalcParser#assignExpr.
CalcListener.prototype.enterAssignExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#assignExpr.
CalcListener.prototype.exitAssignExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.enterStoExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.exitStoExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#additiveOp.
CalcListener.prototype.enterAdditiveOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#additiveOp.
CalcListener.prototype.exitAdditiveOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#multiplicativeOp.
CalcListener.prototype.enterMultiplicativeOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#multiplicativeOp.
CalcListener.prototype.exitMultiplicativeOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#variable.
CalcListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CalcParser#variable.
CalcListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CalcParser#number.
CalcListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by CalcParser#number.
CalcListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by CalcParser#endStatement.
CalcListener.prototype.enterEndStatement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#endStatement.
CalcListener.prototype.exitEndStatement = function(ctx) {
};



exports.CalcListener = CalcListener;