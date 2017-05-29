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


// Enter a parse tree produced by CalcParser#blocks.
CalcListener.prototype.enterBlocks = function(ctx) {
};

// Exit a parse tree produced by CalcParser#blocks.
CalcListener.prototype.exitBlocks = function(ctx) {
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


// Enter a parse tree produced by CalcParser#whileStat.
CalcListener.prototype.enterWhileStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#whileStat.
CalcListener.prototype.exitWhileStat = function(ctx) {
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


// Enter a parse tree produced by CalcParser#readStat.
CalcListener.prototype.enterReadStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#readStat.
CalcListener.prototype.exitReadStat = function(ctx) {
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


// Enter a parse tree produced by CalcParser#endStat.
CalcListener.prototype.enterEndStat = function(ctx) {
};

// Exit a parse tree produced by CalcParser#endStat.
CalcListener.prototype.exitEndStat = function(ctx) {
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


// Enter a parse tree produced by CalcParser#matrixElement.
CalcListener.prototype.enterMatrixElement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixElement.
CalcListener.prototype.exitMatrixElement = function(ctx) {
};


// Enter a parse tree produced by CalcParser#listElement.
CalcListener.prototype.enterListElement = function(ctx) {
};

// Exit a parse tree produced by CalcParser#listElement.
CalcListener.prototype.exitListElement = function(ctx) {
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


// Enter a parse tree produced by CalcParser#evaluateMatrix.
CalcListener.prototype.enterEvaluateMatrix = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateMatrix.
CalcListener.prototype.exitEvaluateMatrix = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateMatrixInitializerExpr.
CalcListener.prototype.enterEvaluateMatrixInitializerExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateMatrixInitializerExpr.
CalcListener.prototype.exitEvaluateMatrixInitializerExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#addMatrices.
CalcListener.prototype.enterAddMatrices = function(ctx) {
};

// Exit a parse tree produced by CalcParser#addMatrices.
CalcListener.prototype.exitAddMatrices = function(ctx) {
};


// Enter a parse tree produced by CalcParser#addLists.
CalcListener.prototype.enterAddLists = function(ctx) {
};

// Exit a parse tree produced by CalcParser#addLists.
CalcListener.prototype.exitAddLists = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateList.
CalcListener.prototype.enterEvaluateList = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateList.
CalcListener.prototype.exitEvaluateList = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evaluateListInitializerExpr.
CalcListener.prototype.enterEvaluateListInitializerExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evaluateListInitializerExpr.
CalcListener.prototype.exitEvaluateListInitializerExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.enterStoExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#stoExpr.
CalcListener.prototype.exitStoExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrixStoExpr.
CalcListener.prototype.enterMatrixStoExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixStoExpr.
CalcListener.prototype.exitMatrixStoExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#listStoExpr.
CalcListener.prototype.enterListStoExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#listStoExpr.
CalcListener.prototype.exitListStoExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrixInitializerExpr.
CalcListener.prototype.enterMatrixInitializerExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixInitializerExpr.
CalcListener.prototype.exitMatrixInitializerExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#listInitializerExpr.
CalcListener.prototype.enterListInitializerExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#listInitializerExpr.
CalcListener.prototype.exitListInitializerExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrixRowExpr.
CalcListener.prototype.enterMatrixRowExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixRowExpr.
CalcListener.prototype.exitMatrixRowExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrixElementExpr.
CalcListener.prototype.enterMatrixElementExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrixElementExpr.
CalcListener.prototype.exitMatrixElementExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#listElementExpr.
CalcListener.prototype.enterListElementExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#listElementExpr.
CalcListener.prototype.exitListElementExpr = function(ctx) {
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


// Enter a parse tree produced by CalcParser#logicOp.
CalcListener.prototype.enterLogicOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#logicOp.
CalcListener.prototype.exitLogicOp = function(ctx) {
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