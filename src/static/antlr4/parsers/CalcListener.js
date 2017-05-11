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


// Enter a parse tree produced by CalcParser#ifStat.
CalcListener.prototype.enterIfStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#ifStat.
CalcListener.prototype.exitIfStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#implyStat.
CalcListener.prototype.enterImplyStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#implyStat.
CalcListener.prototype.exitImplyStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#jumpStat.
CalcListener.prototype.enterJumpStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#jumpStat.
CalcListener.prototype.exitJumpStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#routineStat.
CalcListener.prototype.enterRoutineStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#routineStat.
CalcListener.prototype.exitRoutineStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#compute.
CalcListener.prototype.enterCompute = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compute.
CalcListener.prototype.exitCompute = function(ctx) {
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


// Enter a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.enterStoExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.exitStoExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#boolExpr.
CalcListener.prototype.enterBoolExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#boolExpr.
CalcListener.prototype.exitBoolExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#variable.
CalcListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CalcParser#variable.
CalcListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CalcParser#lbl.
CalcListener.prototype.enterLbl = function(ctx) {
};

// Exit a parse tree produced by CalcParser#lbl.
CalcListener.prototype.exitLbl = function(ctx) {
};


// Enter a parse tree produced by CalcParser#number.
CalcListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by CalcParser#number.
CalcListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by CalcParser#endStat.
CalcListener.prototype.enterEndStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#endStat.
CalcListener.prototype.exitEndStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#endProg.
CalcListener.prototype.enterEndProg = function(ctx) {
};

// Exit a parse tree produced by CalcParser#endProg.
CalcListener.prototype.exitEndProg = function(ctx) {
};


// Enter a parse tree produced by CalcParser#func.
CalcListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by CalcParser#func.
CalcListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by CalcParser#addOp.
CalcListener.prototype.enterAddOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#addOp.
CalcListener.prototype.exitAddOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#multOp.
CalcListener.prototype.enterMultOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#multOp.
CalcListener.prototype.exitMultOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#compOp.
CalcListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compOp.
CalcListener.prototype.exitCompOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#boolOP.
CalcListener.prototype.enterBoolOP = function(ctx) {
};

// Exit a parse tree produced by CalcParser#boolOP.
CalcListener.prototype.exitBoolOP = function(ctx) {
};



exports.CalcListener = CalcListener;