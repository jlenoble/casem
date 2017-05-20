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

// Enter a parse tree produced by ExprsParser#boolExpr.
ExprsListener.prototype.enterBoolExpr = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#boolExpr.
ExprsListener.prototype.exitBoolExpr = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#compute.
ExprsListener.prototype.enterCompute = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#compute.
ExprsListener.prototype.exitCompute = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#add.
ExprsListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#add.
ExprsListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#parens.
ExprsListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#parens.
ExprsListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#scalarMult.
ExprsListener.prototype.enterScalarMult = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#scalarMult.
ExprsListener.prototype.exitScalarMult = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#negate.
ExprsListener.prototype.enterNegate = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#negate.
ExprsListener.prototype.exitNegate = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#constEvaluate.
ExprsListener.prototype.enterConstEvaluate = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#constEvaluate.
ExprsListener.prototype.exitConstEvaluate = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#parse.
ExprsListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#parse.
ExprsListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#multiply.
ExprsListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#multiply.
ExprsListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#evaluate.
ExprsListener.prototype.enterEvaluate = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#evaluate.
ExprsListener.prototype.exitEvaluate = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#stoExpr.
ExprsListener.prototype.enterStoExpr = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#stoExpr.
ExprsListener.prototype.exitStoExpr = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#vParens.
ExprsListener.prototype.enterVParens = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#vParens.
ExprsListener.prototype.exitVParens = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#vCompute.
ExprsListener.prototype.enterVCompute = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#vCompute.
ExprsListener.prototype.exitVCompute = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#vEvaluate.
ExprsListener.prototype.enterVEvaluate = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#vEvaluate.
ExprsListener.prototype.exitVEvaluate = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#vConstEvaluate.
ExprsListener.prototype.enterVConstEvaluate = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#vConstEvaluate.
ExprsListener.prototype.exitVConstEvaluate = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#compOp.
ExprsListener.prototype.enterCompOp = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#compOp.
ExprsListener.prototype.exitCompOp = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#multOp.
ExprsListener.prototype.enterMultOp = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#multOp.
ExprsListener.prototype.exitMultOp = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#addOp.
ExprsListener.prototype.enterAddOp = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#addOp.
ExprsListener.prototype.exitAddOp = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#func.
ExprsListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#func.
ExprsListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#variable.
ExprsListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#variable.
ExprsListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#constant.
ExprsListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#constant.
ExprsListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by ExprsParser#number.
ExprsListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ExprsParser#number.
ExprsListener.prototype.exitNumber = function(ctx) {
};



exports.ExprsListener = ExprsListener;