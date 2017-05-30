'use strict';

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

// Enter a parse tree produced by ExprsParser#reduceBoolExpr.
ExprsListener.prototype.enterReduceBoolExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#reduceBoolExpr.
ExprsListener.prototype.exitReduceBoolExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#compare.
ExprsListener.prototype.enterCompare = function (ctx) {};

// Exit a parse tree produced by ExprsParser#compare.
ExprsListener.prototype.exitCompare = function (ctx) {};

// Enter a parse tree produced by ExprsParser#compute.
ExprsListener.prototype.enterCompute = function (ctx) {};

// Exit a parse tree produced by ExprsParser#compute.
ExprsListener.prototype.exitCompute = function (ctx) {};

// Enter a parse tree produced by ExprsParser#add.
ExprsListener.prototype.enterAdd = function (ctx) {};

// Exit a parse tree produced by ExprsParser#add.
ExprsListener.prototype.exitAdd = function (ctx) {};

// Enter a parse tree produced by ExprsParser#parens.
ExprsListener.prototype.enterParens = function (ctx) {};

// Exit a parse tree produced by ExprsParser#parens.
ExprsListener.prototype.exitParens = function (ctx) {};

// Enter a parse tree produced by ExprsParser#matrixElement.
ExprsListener.prototype.enterMatrixElement = function (ctx) {};

// Exit a parse tree produced by ExprsParser#matrixElement.
ExprsListener.prototype.exitMatrixElement = function (ctx) {};

// Enter a parse tree produced by ExprsParser#listElement.
ExprsListener.prototype.enterListElement = function (ctx) {};

// Exit a parse tree produced by ExprsParser#listElement.
ExprsListener.prototype.exitListElement = function (ctx) {};

// Enter a parse tree produced by ExprsParser#scalarMult.
ExprsListener.prototype.enterScalarMult = function (ctx) {};

// Exit a parse tree produced by ExprsParser#scalarMult.
ExprsListener.prototype.exitScalarMult = function (ctx) {};

// Enter a parse tree produced by ExprsParser#negate.
ExprsListener.prototype.enterNegate = function (ctx) {};

// Exit a parse tree produced by ExprsParser#negate.
ExprsListener.prototype.exitNegate = function (ctx) {};

// Enter a parse tree produced by ExprsParser#constEvaluate.
ExprsListener.prototype.enterConstEvaluate = function (ctx) {};

// Exit a parse tree produced by ExprsParser#constEvaluate.
ExprsListener.prototype.exitConstEvaluate = function (ctx) {};

// Enter a parse tree produced by ExprsParser#parse.
ExprsListener.prototype.enterParse = function (ctx) {};

// Exit a parse tree produced by ExprsParser#parse.
ExprsListener.prototype.exitParse = function (ctx) {};

// Enter a parse tree produced by ExprsParser#multiply.
ExprsListener.prototype.enterMultiply = function (ctx) {};

// Exit a parse tree produced by ExprsParser#multiply.
ExprsListener.prototype.exitMultiply = function (ctx) {};

// Enter a parse tree produced by ExprsParser#evaluate.
ExprsListener.prototype.enterEvaluate = function (ctx) {};

// Exit a parse tree produced by ExprsParser#evaluate.
ExprsListener.prototype.exitEvaluate = function (ctx) {};

// Enter a parse tree produced by ExprsParser#evaluateMatrix.
ExprsListener.prototype.enterEvaluateMatrix = function (ctx) {};

// Exit a parse tree produced by ExprsParser#evaluateMatrix.
ExprsListener.prototype.exitEvaluateMatrix = function (ctx) {};

// Enter a parse tree produced by ExprsParser#evaluateMatrixInitializerExpr.
ExprsListener.prototype.enterEvaluateMatrixInitializerExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#evaluateMatrixInitializerExpr.
ExprsListener.prototype.exitEvaluateMatrixInitializerExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#addMatrices.
ExprsListener.prototype.enterAddMatrices = function (ctx) {};

// Exit a parse tree produced by ExprsParser#addMatrices.
ExprsListener.prototype.exitAddMatrices = function (ctx) {};

// Enter a parse tree produced by ExprsParser#addLists.
ExprsListener.prototype.enterAddLists = function (ctx) {};

// Exit a parse tree produced by ExprsParser#addLists.
ExprsListener.prototype.exitAddLists = function (ctx) {};

// Enter a parse tree produced by ExprsParser#evaluateList.
ExprsListener.prototype.enterEvaluateList = function (ctx) {};

// Exit a parse tree produced by ExprsParser#evaluateList.
ExprsListener.prototype.exitEvaluateList = function (ctx) {};

// Enter a parse tree produced by ExprsParser#evaluateListInitializerExpr.
ExprsListener.prototype.enterEvaluateListInitializerExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#evaluateListInitializerExpr.
ExprsListener.prototype.exitEvaluateListInitializerExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#stoExpr.
ExprsListener.prototype.enterStoExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#stoExpr.
ExprsListener.prototype.exitStoExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#matrixStoExpr.
ExprsListener.prototype.enterMatrixStoExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#matrixStoExpr.
ExprsListener.prototype.exitMatrixStoExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#listStoExpr.
ExprsListener.prototype.enterListStoExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#listStoExpr.
ExprsListener.prototype.exitListStoExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#matrixInitializerExpr.
ExprsListener.prototype.enterMatrixInitializerExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#matrixInitializerExpr.
ExprsListener.prototype.exitMatrixInitializerExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#listInitializerExpr.
ExprsListener.prototype.enterListInitializerExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#listInitializerExpr.
ExprsListener.prototype.exitListInitializerExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#matrixRowExpr.
ExprsListener.prototype.enterMatrixRowExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#matrixRowExpr.
ExprsListener.prototype.exitMatrixRowExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#matrixElementExpr.
ExprsListener.prototype.enterMatrixElementExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#matrixElementExpr.
ExprsListener.prototype.exitMatrixElementExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#listElementExpr.
ExprsListener.prototype.enterListElementExpr = function (ctx) {};

// Exit a parse tree produced by ExprsParser#listElementExpr.
ExprsListener.prototype.exitListElementExpr = function (ctx) {};

// Enter a parse tree produced by ExprsParser#vParens.
ExprsListener.prototype.enterVParens = function (ctx) {};

// Exit a parse tree produced by ExprsParser#vParens.
ExprsListener.prototype.exitVParens = function (ctx) {};

// Enter a parse tree produced by ExprsParser#vCompute.
ExprsListener.prototype.enterVCompute = function (ctx) {};

// Exit a parse tree produced by ExprsParser#vCompute.
ExprsListener.prototype.exitVCompute = function (ctx) {};

// Enter a parse tree produced by ExprsParser#vEvaluate.
ExprsListener.prototype.enterVEvaluate = function (ctx) {};

// Exit a parse tree produced by ExprsParser#vEvaluate.
ExprsListener.prototype.exitVEvaluate = function (ctx) {};

// Enter a parse tree produced by ExprsParser#vConstEvaluate.
ExprsListener.prototype.enterVConstEvaluate = function (ctx) {};

// Exit a parse tree produced by ExprsParser#vConstEvaluate.
ExprsListener.prototype.exitVConstEvaluate = function (ctx) {};

// Enter a parse tree produced by ExprsParser#compOp.
ExprsListener.prototype.enterCompOp = function (ctx) {};

// Exit a parse tree produced by ExprsParser#compOp.
ExprsListener.prototype.exitCompOp = function (ctx) {};

// Enter a parse tree produced by ExprsParser#logicOp.
ExprsListener.prototype.enterLogicOp = function (ctx) {};

// Exit a parse tree produced by ExprsParser#logicOp.
ExprsListener.prototype.exitLogicOp = function (ctx) {};

// Enter a parse tree produced by ExprsParser#multOp.
ExprsListener.prototype.enterMultOp = function (ctx) {};

// Exit a parse tree produced by ExprsParser#multOp.
ExprsListener.prototype.exitMultOp = function (ctx) {};

// Enter a parse tree produced by ExprsParser#addOp.
ExprsListener.prototype.enterAddOp = function (ctx) {};

// Exit a parse tree produced by ExprsParser#addOp.
ExprsListener.prototype.exitAddOp = function (ctx) {};

// Enter a parse tree produced by ExprsParser#func.
ExprsListener.prototype.enterFunc = function (ctx) {};

// Exit a parse tree produced by ExprsParser#func.
ExprsListener.prototype.exitFunc = function (ctx) {};

// Enter a parse tree produced by ExprsParser#matrix.
ExprsListener.prototype.enterMatrix = function (ctx) {};

// Exit a parse tree produced by ExprsParser#matrix.
ExprsListener.prototype.exitMatrix = function (ctx) {};

// Enter a parse tree produced by ExprsParser#list.
ExprsListener.prototype.enterList = function (ctx) {};

// Exit a parse tree produced by ExprsParser#list.
ExprsListener.prototype.exitList = function (ctx) {};

// Enter a parse tree produced by ExprsParser#variable.
ExprsListener.prototype.enterVariable = function (ctx) {};

// Exit a parse tree produced by ExprsParser#variable.
ExprsListener.prototype.exitVariable = function (ctx) {};

// Enter a parse tree produced by ExprsParser#constant.
ExprsListener.prototype.enterConstant = function (ctx) {};

// Exit a parse tree produced by ExprsParser#constant.
ExprsListener.prototype.exitConstant = function (ctx) {};

// Enter a parse tree produced by ExprsParser#number.
ExprsListener.prototype.enterNumber = function (ctx) {};

// Exit a parse tree produced by ExprsParser#number.
ExprsListener.prototype.exitNumber = function (ctx) {};

exports.ExprsListener = ExprsListener;