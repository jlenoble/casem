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


// Enter a parse tree produced by CalcParser#blockStat.
CalcListener.prototype.enterBlockStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#blockStat.
CalcListener.prototype.exitBlockStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#doStat.
CalcListener.prototype.enterDoStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#doStat.
CalcListener.prototype.exitDoStat = function(ctx) {
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


// Enter a parse tree produced by CalcParser#readStat.
CalcListener.prototype.enterReadStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#readStat.
CalcListener.prototype.exitReadStat = function(ctx) {
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


// Enter a parse tree produced by CalcParser#parens.
CalcListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by CalcParser#parens.
CalcListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by CalcParser#scalarMult.
CalcListener.prototype.enterScalarMult = function(ctx) {
};

// Exit a parse tree produced by CalcParser#scalarMult.
CalcListener.prototype.exitScalarMult = function(ctx) {
};


// Enter a parse tree produced by CalcParser#negate.
CalcListener.prototype.enterNegate = function(ctx) {
};

// Exit a parse tree produced by CalcParser#negate.
CalcListener.prototype.exitNegate = function(ctx) {
};


// Enter a parse tree produced by CalcParser#constEvaluate.
CalcListener.prototype.enterConstEvaluate = function(ctx) {
};

// Exit a parse tree produced by CalcParser#constEvaluate.
CalcListener.prototype.exitConstEvaluate = function(ctx) {
};


// Enter a parse tree produced by CalcParser#parse.
CalcListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by CalcParser#parse.
CalcListener.prototype.exitParse = function(ctx) {
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


// Enter a parse tree produced by CalcParser#vParens.
CalcListener.prototype.enterVParens = function(ctx) {
};

// Exit a parse tree produced by CalcParser#vParens.
CalcListener.prototype.exitVParens = function(ctx) {
};


// Enter a parse tree produced by CalcParser#vCompute.
CalcListener.prototype.enterVCompute = function(ctx) {
};

// Exit a parse tree produced by CalcParser#vCompute.
CalcListener.prototype.exitVCompute = function(ctx) {
};


// Enter a parse tree produced by CalcParser#vEvaluate.
CalcListener.prototype.enterVEvaluate = function(ctx) {
};

// Exit a parse tree produced by CalcParser#vEvaluate.
CalcListener.prototype.exitVEvaluate = function(ctx) {
};


// Enter a parse tree produced by CalcParser#vConstEvaluate.
CalcListener.prototype.enterVConstEvaluate = function(ctx) {
};

// Exit a parse tree produced by CalcParser#vConstEvaluate.
CalcListener.prototype.exitVConstEvaluate = function(ctx) {
};


// Enter a parse tree produced by CalcParser#compOp.
CalcListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compOp.
CalcListener.prototype.exitCompOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#multOp.
CalcListener.prototype.enterMultOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#multOp.
CalcListener.prototype.exitMultOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#addOp.
CalcListener.prototype.enterAddOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#addOp.
CalcListener.prototype.exitAddOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#func.
CalcListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by CalcParser#func.
CalcListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by CalcParser#variable.
CalcListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CalcParser#variable.
CalcListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CalcParser#constant.
CalcListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by CalcParser#constant.
CalcListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by CalcParser#number.
CalcListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by CalcParser#number.
CalcListener.prototype.exitNumber = function(ctx) {
};



exports.CalcListener = CalcListener;