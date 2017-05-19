// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007.\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u0012\n\u0003\f\u0003\u000e",
    "\u0003\u0015\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "\u001a\n\u0004\f\u0004\u000e\u0004\u001d\u000b\u0004\u0005\u0004\u001f",
    "\n\u0004\u0003\u0005\u0003\u0005\u0007\u0005#\n\u0005\f\u0005\u000e",
    "\u0005&\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0005\u0006",
    "+\n\u0006\u0003\u0006\u0003\u0006\u0003$\u0002\u0007\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\u0003\u0002\u0006\u0004\u0002",
    "C\\c|\u0005\u00022;C\\c|\u0003\u00023;\u0003\u00022;\u00022\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u000f",
    "\u0003\u0002\u0002\u0002\u0007\u001e\u0003\u0002\u0002\u0002\t \u0003",
    "\u0002\u0002\u0002\u000b*\u0003\u0002\u0002\u0002\r\u000e\u0007?\u0002",
    "\u0002\u000e\u0004\u0003\u0002\u0002\u0002\u000f\u0013\t\u0002\u0002",
    "\u0002\u0010\u0012\t\u0003\u0002\u0002\u0011\u0010\u0003\u0002\u0002",
    "\u0002\u0012\u0015\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0006\u0003\u0002\u0002",
    "\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0016\u001f\u00072\u0002",
    "\u0002\u0017\u001b\t\u0004\u0002\u0002\u0018\u001a\t\u0005\u0002\u0002",
    "\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003\u0002\u0002\u0002",
    "\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002",
    "\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002",
    "\u001e\u0016\u0003\u0002\u0002\u0002\u001e\u0017\u0003\u0002\u0002\u0002",
    "\u001f\b\u0003\u0002\u0002\u0002 $\u0007$\u0002\u0002!#\u000b\u0002",
    "\u0002\u0002\"!\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$%",
    "\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%\'\u0003\u0002\u0002",
    "\u0002&$\u0003\u0002\u0002\u0002\'(\u0007$\u0002\u0002(\n\u0003\u0002",
    "\u0002\u0002)+\u0007\u000f\u0002\u0002*)\u0003\u0002\u0002\u0002*+\u0003",
    "\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0007\f\u0002\u0002-",
    "\f\u0003\u0002\u0002\u0002\b\u0002\u0013\u001b\u001e$*\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ExprsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ExprsLexer.prototype = Object.create(antlr4.Lexer.prototype);
ExprsLexer.prototype.constructor = ExprsLexer;

ExprsLexer.EOF = antlr4.Token.EOF;
ExprsLexer.T__0 = 1;
ExprsLexer.ID = 2;
ExprsLexer.UINT = 3;
ExprsLexer.STRING = 4;
ExprsLexer.NEWLINE = 5;

ExprsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ExprsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExprsLexer.prototype.literalNames = [ null, "'='" ];

ExprsLexer.prototype.symbolicNames = [ null, null, "ID", "UINT", "STRING", 
                                       "NEWLINE" ];

ExprsLexer.prototype.ruleNames = [ "T__0", "ID", "UINT", "STRING", "NEWLINE" ];

ExprsLexer.prototype.grammarFileName = "Exprs.g4";



exports.ExprsLexer = ExprsLexer;

