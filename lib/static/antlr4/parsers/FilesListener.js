'use strict';

// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Files.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FilesParser.
function FilesListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FilesListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FilesListener.prototype.constructor = FilesListener;

// Enter a parse tree produced by FilesParser#header.
FilesListener.prototype.enterHeader = function (ctx) {};

// Exit a parse tree produced by FilesParser#header.
FilesListener.prototype.exitHeader = function (ctx) {};

// Enter a parse tree produced by FilesParser#attributes.
FilesListener.prototype.enterAttributes = function (ctx) {};

// Exit a parse tree produced by FilesParser#attributes.
FilesListener.prototype.exitAttributes = function (ctx) {};

// Enter a parse tree produced by FilesParser#headerAttr.
FilesListener.prototype.enterHeaderAttr = function (ctx) {};

// Exit a parse tree produced by FilesParser#headerAttr.
FilesListener.prototype.exitHeaderAttr = function (ctx) {};

// Enter a parse tree produced by FilesParser#headerValue.
FilesListener.prototype.enterHeaderValue = function (ctx) {};

// Exit a parse tree produced by FilesParser#headerValue.
FilesListener.prototype.exitHeaderValue = function (ctx) {};

// Enter a parse tree produced by FilesParser#fileName.
FilesListener.prototype.enterFileName = function (ctx) {};

// Exit a parse tree produced by FilesParser#fileName.
FilesListener.prototype.exitFileName = function (ctx) {};

// Enter a parse tree produced by FilesParser#startHeader.
FilesListener.prototype.enterStartHeader = function (ctx) {};

// Exit a parse tree produced by FilesParser#startHeader.
FilesListener.prototype.exitStartHeader = function (ctx) {};

// Enter a parse tree produced by FilesParser#endHeader.
FilesListener.prototype.enterEndHeader = function (ctx) {};

// Exit a parse tree produced by FilesParser#endHeader.
FilesListener.prototype.exitEndHeader = function (ctx) {};

// Enter a parse tree produced by FilesParser#endFile.
FilesListener.prototype.enterEndFile = function (ctx) {};

// Exit a parse tree produced by FilesParser#endFile.
FilesListener.prototype.exitEndFile = function (ctx) {};

exports.FilesListener = FilesListener;