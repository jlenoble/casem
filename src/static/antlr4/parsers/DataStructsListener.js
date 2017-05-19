// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/DataStructs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DataStructsParser.
function DataStructsListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DataStructsListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DataStructsListener.prototype.constructor = DataStructsListener;

// Enter a parse tree produced by DataStructsParser#variable.
DataStructsListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by DataStructsParser#variable.
DataStructsListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by DataStructsParser#number.
DataStructsListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by DataStructsParser#number.
DataStructsListener.prototype.exitNumber = function(ctx) {
};



exports.DataStructsListener = DataStructsListener;