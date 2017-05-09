// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/CommonLexerRules.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007F\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002\u001d\n\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003\"\n\u0003\f\u0003\u000e\u0003%\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0006\u0003)\n\u0003\r\u0003\u000e\u0003",
    "*\u0005\u0003-\n\u0003\u0003\u0003\u0003\u0003\u0006\u00031\n\u0003",
    "\r\u0003\u000e\u00032\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0007",
    "\u00049\n\u0004\f\u0004\u000e\u0004<\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0005\u0006C\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003:\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\u0003\u0002\u0006\u0003\u0002C\\\u0004\u00022;",
    "C\\\u0003\u00023;\u0003\u00022;\u0002P\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0003\u001c\u0003\u0002\u0002\u0002\u00054\u0003\u0002\u0002",
    "\u0002\u00076\u0003\u0002\u0002\u0002\t?\u0003\u0002\u0002\u0002\u000b",
    "B\u0003\u0002\u0002\u0002\r\u0011\t\u0002\u0002\u0002\u000e\u0010\t",
    "\u0003\u0002\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003",
    "\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003",
    "\u0002\u0002\u0002\u0012\u001d\u0003\u0002\u0002\u0002\u0013\u0011\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0007^\u0002\u0002\u0015\u001d\u0007",
    "t\u0002\u0002\u0016\u0017\u0007^\u0002\u0002\u0017\u0018\u0007v\u0002",
    "\u0002\u0018\u0019\u0007j\u0002\u0002\u0019\u001a\u0007g\u0002\u0002",
    "\u001a\u001b\u0007v\u0002\u0002\u001b\u001d\u0007c\u0002\u0002\u001c",
    "\r\u0003\u0002\u0002\u0002\u001c\u0014\u0003\u0002\u0002\u0002\u001c",
    "\u0016\u0003\u0002\u0002\u0002\u001d\u0004\u0003\u0002\u0002\u0002\u001e",
    "5\u00072\u0002\u0002\u001f#\t\u0004\u0002\u0002 \"\t\u0005\u0002\u0002",
    "! \u0003\u0002\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003\u0002",
    "\u0002\u0002#$\u0003\u0002\u0002\u0002$,\u0003\u0002\u0002\u0002%#\u0003",
    "\u0002\u0002\u0002&(\u00070\u0002\u0002\')\t\u0005\u0002\u0002(\'\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+-\u0003\u0002\u0002\u0002,&\u0003\u0002\u0002",
    "\u0002,-\u0003\u0002\u0002\u0002-5\u0003\u0002\u0002\u0002.0\u00070",
    "\u0002\u0002/1\t\u0005\u0002\u00020/\u0003\u0002\u0002\u000212\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "35\u0003\u0002\u0002\u00024\u001e\u0003\u0002\u0002\u00024\u001f\u0003",
    "\u0002\u0002\u00024.\u0003\u0002\u0002\u00025\u0006\u0003\u0002\u0002",
    "\u00026:\u0007$\u0002\u000279\u000b\u0002\u0002\u000287\u0003\u0002",
    "\u0002\u00029<\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002:8\u0003",
    "\u0002\u0002\u0002;=\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002",
    "=>\u0007$\u0002\u0002>\b\u0003\u0002\u0002\u0002?@\u0007A\u0002\u0002",
    "@\n\u0003\u0002\u0002\u0002AC\u0007\u000f\u0002\u0002BA\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DE\u0007",
    "\f\u0002\u0002E\f\u0003\u0002\u0002\u0002\f\u0002\u0011\u001c#*,24:",
    "B\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CommonLexerRules(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CommonLexerRules.prototype = Object.create(antlr4.Lexer.prototype);
CommonLexerRules.prototype.constructor = CommonLexerRules;

CommonLexerRules.EOF = antlr4.Token.EOF;
CommonLexerRules.ID = 1;
CommonLexerRules.NUM = 2;
CommonLexerRules.STRING = 3;
CommonLexerRules.QUESMARK = 4;
CommonLexerRules.NEWLINE = 5;

CommonLexerRules.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CommonLexerRules.prototype.modeNames = [ "DEFAULT_MODE" ];

CommonLexerRules.prototype.literalNames = [ null, null, null, null, "'?'" ];

CommonLexerRules.prototype.symbolicNames = [ null, "ID", "NUM", "STRING", 
                                             "QUESMARK", "NEWLINE" ];

CommonLexerRules.prototype.ruleNames = [ "ID", "NUM", "STRING", "QUESMARK", 
                                         "NEWLINE" ];

CommonLexerRules.prototype.grammarFileName = "CommonLexerRules.g4";



exports.CommonLexerRules = CommonLexerRules;

