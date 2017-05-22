// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by StatsParser.
function StatsListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

StatsListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
StatsListener.prototype.constructor = StatsListener;

// Enter a parse tree produced by StatsParser#stat.
StatsListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by StatsParser#stat.
StatsListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by StatsParser#assignStat.
StatsListener.prototype.enterAssignStat = function(ctx) {
};

// Exit a parse tree produced by StatsParser#assignStat.
StatsListener.prototype.exitAssignStat = function(ctx) {
};


// Enter a parse tree produced by StatsParser#print.
StatsListener.prototype.enterPrint = function(ctx) {
};

// Exit a parse tree produced by StatsParser#print.
StatsListener.prototype.exitPrint = function(ctx) {
};


// Enter a parse tree produced by StatsParser#printAt.
StatsListener.prototype.enterPrintAt = function(ctx) {
};

// Exit a parse tree produced by StatsParser#printAt.
StatsListener.prototype.exitPrintAt = function(ctx) {
};


// Enter a parse tree produced by StatsParser#readStat.
StatsListener.prototype.enterReadStat = function(ctx) {
};

// Exit a parse tree produced by StatsParser#readStat.
StatsListener.prototype.exitReadStat = function(ctx) {
};


// Enter a parse tree produced by StatsParser#implyStat.
StatsListener.prototype.enterImplyStat = function(ctx) {
};

// Exit a parse tree produced by StatsParser#implyStat.
StatsListener.prototype.exitImplyStat = function(ctx) {
};


// Enter a parse tree produced by StatsParser#endStat.
StatsListener.prototype.enterEndStat = function(ctx) {
};

// Exit a parse tree produced by StatsParser#endStat.
StatsListener.prototype.exitEndStat = function(ctx) {
};


// Enter a parse tree produced by StatsParser#boolExpr.
StatsListener.prototype.enterBoolExpr = function(ctx) {
};

// Exit a parse tree produced by StatsParser#boolExpr.
StatsListener.prototype.exitBoolExpr = function(ctx) {
};


// Enter a parse tree produced by StatsParser#compute.
StatsListener.prototype.enterCompute = function(ctx) {
};

// Exit a parse tree produced by StatsParser#compute.
StatsListener.prototype.exitCompute = function(ctx) {
};


// Enter a parse tree produced by StatsParser#add.
StatsListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by StatsParser#add.
StatsListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by StatsParser#parens.
StatsListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by StatsParser#parens.
StatsListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by StatsParser#scalarMult.
StatsListener.prototype.enterScalarMult = function(ctx) {
};

// Exit a parse tree produced by StatsParser#scalarMult.
StatsListener.prototype.exitScalarMult = function(ctx) {
};


// Enter a parse tree produced by StatsParser#negate.
StatsListener.prototype.enterNegate = function(ctx) {
};

// Exit a parse tree produced by StatsParser#negate.
StatsListener.prototype.exitNegate = function(ctx) {
};


// Enter a parse tree produced by StatsParser#constEvaluate.
StatsListener.prototype.enterConstEvaluate = function(ctx) {
};

// Exit a parse tree produced by StatsParser#constEvaluate.
StatsListener.prototype.exitConstEvaluate = function(ctx) {
};


// Enter a parse tree produced by StatsParser#parse.
StatsListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by StatsParser#parse.
StatsListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by StatsParser#multiply.
StatsListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by StatsParser#multiply.
StatsListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by StatsParser#evaluate.
StatsListener.prototype.enterEvaluate = function(ctx) {
};

// Exit a parse tree produced by StatsParser#evaluate.
StatsListener.prototype.exitEvaluate = function(ctx) {
};


// Enter a parse tree produced by StatsParser#stoExpr.
StatsListener.prototype.enterStoExpr = function(ctx) {
};

// Exit a parse tree produced by StatsParser#stoExpr.
StatsListener.prototype.exitStoExpr = function(ctx) {
};


// Enter a parse tree produced by StatsParser#vParens.
StatsListener.prototype.enterVParens = function(ctx) {
};

// Exit a parse tree produced by StatsParser#vParens.
StatsListener.prototype.exitVParens = function(ctx) {
};


// Enter a parse tree produced by StatsParser#vCompute.
StatsListener.prototype.enterVCompute = function(ctx) {
};

// Exit a parse tree produced by StatsParser#vCompute.
StatsListener.prototype.exitVCompute = function(ctx) {
};


// Enter a parse tree produced by StatsParser#vEvaluate.
StatsListener.prototype.enterVEvaluate = function(ctx) {
};

// Exit a parse tree produced by StatsParser#vEvaluate.
StatsListener.prototype.exitVEvaluate = function(ctx) {
};


// Enter a parse tree produced by StatsParser#vConstEvaluate.
StatsListener.prototype.enterVConstEvaluate = function(ctx) {
};

// Exit a parse tree produced by StatsParser#vConstEvaluate.
StatsListener.prototype.exitVConstEvaluate = function(ctx) {
};


// Enter a parse tree produced by StatsParser#compOp.
StatsListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by StatsParser#compOp.
StatsListener.prototype.exitCompOp = function(ctx) {
};


// Enter a parse tree produced by StatsParser#multOp.
StatsListener.prototype.enterMultOp = function(ctx) {
};

// Exit a parse tree produced by StatsParser#multOp.
StatsListener.prototype.exitMultOp = function(ctx) {
};


// Enter a parse tree produced by StatsParser#addOp.
StatsListener.prototype.enterAddOp = function(ctx) {
};

// Exit a parse tree produced by StatsParser#addOp.
StatsListener.prototype.exitAddOp = function(ctx) {
};


// Enter a parse tree produced by StatsParser#func.
StatsListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by StatsParser#func.
StatsListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by StatsParser#variable.
StatsListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by StatsParser#variable.
StatsListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by StatsParser#constant.
StatsListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by StatsParser#constant.
StatsListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by StatsParser#number.
StatsListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by StatsParser#number.
StatsListener.prototype.exitNumber = function(ctx) {
};



exports.StatsListener = StatsListener;