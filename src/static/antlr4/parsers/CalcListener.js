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


// Enter a parse tree produced by CalcParser#block.
CalcListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by CalcParser#block.
CalcListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by CalcParser#stat.
CalcListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#stat.
CalcListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#assignStat.
CalcListener.prototype.enterAssignStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#assignStat.
CalcListener.prototype.exitAssignStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#printStat.
CalcListener.prototype.enterPrintStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#printStat.
CalcListener.prototype.exitPrintStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#readStat.
CalcListener.prototype.enterReadStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#readStat.
CalcListener.prototype.exitReadStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#doStat.
CalcListener.prototype.enterDoStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#doStat.
CalcListener.prototype.exitDoStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#endStat.
CalcListener.prototype.enterEndStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#endStat.
CalcListener.prototype.exitEndStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#boolExpr.
CalcListener.prototype.enterBoolExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#boolExpr.
CalcListener.prototype.exitBoolExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#numExpr.
CalcListener.prototype.enterNumExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#numExpr.
CalcListener.prototype.exitNumExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#compOp.
CalcListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compOp.
CalcListener.prototype.exitCompOp = function(ctx) {
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



exports.CalcListener = CalcListener;