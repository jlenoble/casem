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


// Enter a parse tree produced by CalcParser#file.
CalcListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by CalcParser#file.
CalcListener.prototype.exitFile = function(ctx) {
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


// Enter a parse tree produced by CalcParser#clearText.
CalcListener.prototype.enterClearText = function(ctx) {
};

// Exit a parse tree produced by CalcParser#clearText.
CalcListener.prototype.exitClearText = function(ctx) {
};


// Enter a parse tree produced by CalcParser#confStat.
CalcListener.prototype.enterConfStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#confStat.
CalcListener.prototype.exitConfStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#readStat.
CalcListener.prototype.enterReadStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#readStat.
CalcListener.prototype.exitReadStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#graphStat.
CalcListener.prototype.enterGraphStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#graphStat.
CalcListener.prototype.exitGraphStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#ifStat.
CalcListener.prototype.enterIfStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#ifStat.
CalcListener.prototype.exitIfStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#forStat.
CalcListener.prototype.enterForStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#forStat.
CalcListener.prototype.exitForStat = function(ctx) {
};


// Enter a parse tree produced by CalcParser#doStat.
CalcListener.prototype.enterDoStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#doStat.
CalcListener.prototype.exitDoStat = function(ctx) {
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


// Enter a parse tree produced by CalcParser#labelStat.
CalcListener.prototype.enterLabelStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#labelStat.
CalcListener.prototype.exitLabelStat = function(ctx) {
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


// Enter a parse tree produced by CalcParser#evaluateListInitializer.
CalcListener.prototype.enterEvaluateListInitializer = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateListInitializer.
CalcListener.prototype.exitEvaluateListInitializer = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateMatrix.
CalcListener.prototype.enterEvaluateMatrix = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateMatrix.
CalcListener.prototype.exitEvaluateMatrix = function(ctx) {
};


// Enter a parse tree produced by CalcParser#factorial.
CalcListener.prototype.enterFactorial = function(ctx) {
};

// Exit a parse tree produced by CalcParser#factorial.
CalcListener.prototype.exitFactorial = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateMatrixInitializer.
CalcListener.prototype.enterEvaluateMatrixInitializer = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateMatrixInitializer.
CalcListener.prototype.exitEvaluateMatrixInitializer = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateList.
CalcListener.prototype.enterEvaluateList = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateList.
CalcListener.prototype.exitEvaluateList = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateMatrixElement.
CalcListener.prototype.enterEvaluateMatrixElement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateMatrixElement.
CalcListener.prototype.exitEvaluateMatrixElement = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateListElement.
CalcListener.prototype.enterEvaluateListElement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateListElement.
CalcListener.prototype.exitEvaluateListElement = function(ctx) {
};


// Enter a parse tree produced by CalcParser#compute.
CalcListener.prototype.enterCompute = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compute.
CalcListener.prototype.exitCompute = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateSeq.
CalcListener.prototype.enterEvaluateSeq = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateSeq.
CalcListener.prototype.exitEvaluateSeq = function(ctx) {
};


// Enter a parse tree produced by CalcParser#negate.
CalcListener.prototype.enterNegate = function(ctx) {
};

// Exit a parse tree produced by CalcParser#negate.
CalcListener.prototype.exitNegate = function(ctx) {
};


// Enter a parse tree produced by CalcParser#power.
CalcListener.prototype.enterPower = function(ctx) {
};

// Exit a parse tree produced by CalcParser#power.
CalcListener.prototype.exitPower = function(ctx) {
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


// Enter a parse tree produced by CalcParser#exponent.
CalcListener.prototype.enterExponent = function(ctx) {
};

// Exit a parse tree produced by CalcParser#exponent.
CalcListener.prototype.exitExponent = function(ctx) {
};


// Enter a parse tree produced by CalcParser#dispExpr.
CalcListener.prototype.enterDispExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#dispExpr.
CalcListener.prototype.exitDispExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.enterStoExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.exitStoExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#getKey.
CalcListener.prototype.enterGetKey = function(ctx) {
};

// Exit a parse tree produced by CalcParser#getKey.
CalcListener.prototype.exitGetKey = function(ctx) {
};


// Enter a parse tree produced by CalcParser#reduceBoolExpr.
CalcListener.prototype.enterReduceBoolExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#reduceBoolExpr.
CalcListener.prototype.exitReduceBoolExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#compare.
CalcListener.prototype.enterCompare = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compare.
CalcListener.prototype.exitCompare = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrixElement.
CalcListener.prototype.enterMatrixElement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixElement.
CalcListener.prototype.exitMatrixElement = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrixInitializer.
CalcListener.prototype.enterMatrixInitializer = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixInitializer.
CalcListener.prototype.exitMatrixInitializer = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrixRow.
CalcListener.prototype.enterMatrixRow = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixRow.
CalcListener.prototype.exitMatrixRow = function(ctx) {
};


// Enter a parse tree produced by CalcParser#listElement.
CalcListener.prototype.enterListElement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#listElement.
CalcListener.prototype.exitListElement = function(ctx) {
};


// Enter a parse tree produced by CalcParser#listInitializer.
CalcListener.prototype.enterListInitializer = function(ctx) {
};

// Exit a parse tree produced by CalcParser#listInitializer.
CalcListener.prototype.exitListInitializer = function(ctx) {
};


// Enter a parse tree produced by CalcParser#header.
CalcListener.prototype.enterHeader = function(ctx) {
};

// Exit a parse tree produced by CalcParser#header.
CalcListener.prototype.exitHeader = function(ctx) {
};


// Enter a parse tree produced by CalcParser#attributes.
CalcListener.prototype.enterAttributes = function(ctx) {
};

// Exit a parse tree produced by CalcParser#attributes.
CalcListener.prototype.exitAttributes = function(ctx) {
};


// Enter a parse tree produced by CalcParser#headerAttr.
CalcListener.prototype.enterHeaderAttr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#headerAttr.
CalcListener.prototype.exitHeaderAttr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#headerValue.
CalcListener.prototype.enterHeaderValue = function(ctx) {
};

// Exit a parse tree produced by CalcParser#headerValue.
CalcListener.prototype.exitHeaderValue = function(ctx) {
};


// Enter a parse tree produced by CalcParser#fileName.
CalcListener.prototype.enterFileName = function(ctx) {
};

// Exit a parse tree produced by CalcParser#fileName.
CalcListener.prototype.exitFileName = function(ctx) {
};


// Enter a parse tree produced by CalcParser#startHeader.
CalcListener.prototype.enterStartHeader = function(ctx) {
};

// Exit a parse tree produced by CalcParser#startHeader.
CalcListener.prototype.exitStartHeader = function(ctx) {
};


// Enter a parse tree produced by CalcParser#endHeader.
CalcListener.prototype.enterEndHeader = function(ctx) {
};

// Exit a parse tree produced by CalcParser#endHeader.
CalcListener.prototype.exitEndHeader = function(ctx) {
};


// Enter a parse tree produced by CalcParser#endFile.
CalcListener.prototype.enterEndFile = function(ctx) {
};

// Exit a parse tree produced by CalcParser#endFile.
CalcListener.prototype.exitEndFile = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrix.
CalcListener.prototype.enterMatrix = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrix.
CalcListener.prototype.exitMatrix = function(ctx) {
};


// Enter a parse tree produced by CalcParser#list.
CalcListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by CalcParser#list.
CalcListener.prototype.exitList = function(ctx) {
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


// Enter a parse tree produced by CalcParser#powOp.
CalcListener.prototype.enterPowOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#powOp.
CalcListener.prototype.exitPowOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#compOp.
CalcListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compOp.
CalcListener.prototype.exitCompOp = function(ctx) {
};


// Enter a parse tree produced by CalcParser#boolOp.
CalcListener.prototype.enterBoolOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#boolOp.
CalcListener.prototype.exitBoolOp = function(ctx) {
};



exports.CalcListener = CalcListener;