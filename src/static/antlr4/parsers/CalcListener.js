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


// Enter a parse tree produced by CalcParser#data.
CalcListener.prototype.enterData = function(ctx) {
};

// Exit a parse tree produced by CalcParser#data.
CalcListener.prototype.exitData = function(ctx) {
};


// Enter a parse tree produced by CalcParser#cmd.
CalcListener.prototype.enterCmd = function(ctx) {
};

// Exit a parse tree produced by CalcParser#cmd.
CalcListener.prototype.exitCmd = function(ctx) {
};


// Enter a parse tree produced by CalcParser#expr.
CalcListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#expr.
CalcListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#assignExpr.
CalcListener.prototype.enterAssignExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#assignExpr.
CalcListener.prototype.exitAssignExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#boolExpr.
CalcListener.prototype.enterBoolExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#boolExpr.
CalcListener.prototype.exitBoolExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#confExpr.
CalcListener.prototype.enterConfExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#confExpr.
CalcListener.prototype.exitConfExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#doExpr.
CalcListener.prototype.enterDoExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#doExpr.
CalcListener.prototype.exitDoExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#evalExpr.
CalcListener.prototype.enterEvalExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#evalExpr.
CalcListener.prototype.exitEvalExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#flowExpr.
CalcListener.prototype.enterFlowExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#flowExpr.
CalcListener.prototype.exitFlowExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#forExpr.
CalcListener.prototype.enterForExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#forExpr.
CalcListener.prototype.exitForExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#graphExpr.
CalcListener.prototype.enterGraphExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#graphExpr.
CalcListener.prototype.exitGraphExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#ifExpr.
CalcListener.prototype.enterIfExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#ifExpr.
CalcListener.prototype.exitIfExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#printExpr.
CalcListener.prototype.enterPrintExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#printExpr.
CalcListener.prototype.exitPrintExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#readExpr.
CalcListener.prototype.enterReadExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#readExpr.
CalcListener.prototype.exitReadExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#storExpr.
CalcListener.prototype.enterStorExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#storExpr.
CalcListener.prototype.exitStorExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#valueExpr.
CalcListener.prototype.enterValueExpr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#valueExpr.
CalcListener.prototype.exitValueExpr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#lbl.
CalcListener.prototype.enterLbl = function(ctx) {
};

// Exit a parse tree produced by CalcParser#lbl.
CalcListener.prototype.exitLbl = function(ctx) {
};


// Enter a parse tree produced by CalcParser#func.
CalcListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by CalcParser#func.
CalcListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matrElt.
CalcListener.prototype.enterMatrElt = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matrElt.
CalcListener.prototype.exitMatrElt = function(ctx) {
};


// Enter a parse tree produced by CalcParser#matr.
CalcListener.prototype.enterMatr = function(ctx) {
};

// Exit a parse tree produced by CalcParser#matr.
CalcListener.prototype.exitMatr = function(ctx) {
};


// Enter a parse tree produced by CalcParser#list.
CalcListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by CalcParser#list.
CalcListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by CalcParser#cmdEnd.
CalcListener.prototype.enterCmdEnd = function(ctx) {
};

// Exit a parse tree produced by CalcParser#cmdEnd.
CalcListener.prototype.exitCmdEnd = function(ctx) {
};


// Enter a parse tree produced by CalcParser#dataBeg.
CalcListener.prototype.enterDataBeg = function(ctx) {
};

// Exit a parse tree produced by CalcParser#dataBeg.
CalcListener.prototype.exitDataBeg = function(ctx) {
};


// Enter a parse tree produced by CalcParser#fileEnd.
CalcListener.prototype.enterFileEnd = function(ctx) {
};

// Exit a parse tree produced by CalcParser#fileEnd.
CalcListener.prototype.exitFileEnd = function(ctx) {
};


// Enter a parse tree produced by CalcParser#header.
CalcListener.prototype.enterHeader = function(ctx) {
};

// Exit a parse tree produced by CalcParser#header.
CalcListener.prototype.exitHeader = function(ctx) {
};


// Enter a parse tree produced by CalcParser#entry.
CalcListener.prototype.enterEntry = function(ctx) {
};

// Exit a parse tree produced by CalcParser#entry.
CalcListener.prototype.exitEntry = function(ctx) {
};


// Enter a parse tree produced by CalcParser#label.
CalcListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by CalcParser#label.
CalcListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by CalcParser#option.
CalcListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by CalcParser#option.
CalcListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by CalcParser#value.
CalcListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by CalcParser#value.
CalcListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by CalcParser#headerBeg.
CalcListener.prototype.enterHeaderBeg = function(ctx) {
};

// Exit a parse tree produced by CalcParser#headerBeg.
CalcListener.prototype.exitHeaderBeg = function(ctx) {
};


// Enter a parse tree produced by CalcParser#boolOp.
CalcListener.prototype.enterBoolOp = function(ctx) {
};

// Exit a parse tree produced by CalcParser#boolOp.
CalcListener.prototype.exitBoolOp = function(ctx) {
};



exports.CalcListener = CalcListener;