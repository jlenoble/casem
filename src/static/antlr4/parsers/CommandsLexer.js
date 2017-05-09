// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Commands.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\nI\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006",
    "/\n\u0006\r\u0006\u000e\u00060\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u00076\n\u0007\f\u0007\u000e\u00079\u000b\u0007\u0005\u0007;\n\u0007",
    "\u0003\b\u0003\b\u0006\b?\n\b\r\b\u000e\b@\u0003\b\u0003\b\u0003\t\u0005",
    "\tF\n\t\u0003\t\u0003\t\u0002\u0002\n\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0003\u0002\u0006\u0003",
    "\u0002C\\\u0003\u00023;\u0003\u00022;\u0006\u0002\"\"2;C\\c|\u0002M",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0003\u0013\u0003\u0002\u0002\u0002\u0005\u001a\u0003\u0002\u0002\u0002",
    "\u0007\u001f\u0003\u0002\u0002\u0002\t%\u0003\u0002\u0002\u0002\u000b",
    ".\u0003\u0002\u0002\u0002\r:\u0003\u0002\u0002\u0002\u000f<\u0003\u0002",
    "\u0002\u0002\u0011E\u0003\u0002\u0002\u0002\u0013\u0014\u0007^\u0002",
    "\u0002\u0014\u0015\u0007I\u0002\u0002\u0015\u0016\u0007q\u0002\u0002",
    "\u0016\u0017\u0007v\u0002\u0002\u0017\u0018\u0007q\u0002\u0002\u0018",
    "\u0019\u0007C\u0002\u0002\u0019\u0004\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0007^\u0002\u0002\u001b\u001c\u0007N\u0002\u0002\u001c\u001d",
    "\u0007d\u0002\u0002\u001d\u001e\u0007n\u0002\u0002\u001e\u0006\u0003",
    "\u0002\u0002\u0002\u001f \u0007^\u0002\u0002 !\u0007R\u0002\u0002!\"",
    "\u0007t\u0002\u0002\"#\u0007q\u0002\u0002#$\u0007i\u0002\u0002$\b\u0003",
    "\u0002\u0002\u0002%&\u0007^\u0002\u0002&\'\u0007T\u0002\u0002\'(\u0007",
    "g\u0002\u0002()\u0007v\u0002\u0002)*\u0007w\u0002\u0002*+\u0007t\u0002",
    "\u0002+,\u0007p\u0002\u0002,\n\u0003\u0002\u0002\u0002-/\t\u0002\u0002",
    "\u0002.-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u000201\u0003\u0002\u0002\u00021\f\u0003\u0002\u0002\u00022;",
    "\u00072\u0002\u000237\t\u0003\u0002\u000246\t\u0004\u0002\u000254\u0003",
    "\u0002\u0002\u000269\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u0002",
    "78\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002",
    "\u0002:2\u0003\u0002\u0002\u0002:3\u0003\u0002\u0002\u0002;\u000e\u0003",
    "\u0002\u0002\u0002<>\u0007$\u0002\u0002=?\t\u0005\u0002\u0002>=\u0003",
    "\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "@A\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0007$\u0002",
    "\u0002C\u0010\u0003\u0002\u0002\u0002DF\u0007\u000f\u0002\u0002ED\u0003",
    "\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002",
    "GH\u0007\f\u0002\u0002H\u0012\u0003\u0002\u0002\u0002\b\u000207:@E\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CommandsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CommandsLexer.prototype = Object.create(antlr4.Lexer.prototype);
CommandsLexer.prototype.constructor = CommandsLexer;

CommandsLexer.EOF = antlr4.Token.EOF;
CommandsLexer.GOTOA = 1;
CommandsLexer.LBL = 2;
CommandsLexer.PROG = 3;
CommandsLexer.RETURN = 4;
CommandsLexer.ID = 5;
CommandsLexer.NUM = 6;
CommandsLexer.STRING = 7;
CommandsLexer.NEWLINE = 8;

CommandsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CommandsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CommandsLexer.prototype.literalNames = [ null, "'\\GotoA'", "'\\Lbl'", "'\\Prog'", 
                                         "'\\Return'" ];

CommandsLexer.prototype.symbolicNames = [ null, "GOTOA", "LBL", "PROG", 
                                          "RETURN", "ID", "NUM", "STRING", 
                                          "NEWLINE" ];

CommandsLexer.prototype.ruleNames = [ "GOTOA", "LBL", "PROG", "RETURN", 
                                      "ID", "NUM", "STRING", "NEWLINE" ];

CommandsLexer.prototype.grammarFileName = "Commands.g4";



exports.CommandsLexer = CommandsLexer;

