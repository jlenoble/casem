// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Regexps.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b*\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u0014\n",
    "\u0003\f\u0003\u000e\u0003\u0017\u000b\u0003\u0003\u0004\u0005\u0004",
    "\u001a\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0007\u0007$\n\u0007\f\u0007",
    "\u000e\u0007\'\u000b\u0007\u0003\u0007\u0003\u0007\u0003%\u0002\b\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0005",
    "\u0003\u0002C\\\u0003\u00023;\u0003\u00022;\u0002,\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003",
    "\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002\u0002\u0007\u0019\u0003",
    "\u0002\u0002\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b\u001f\u0003",
    "\u0002\u0002\u0002\r!\u0003\u0002\u0002\u0002\u000f\u0010\t\u0002\u0002",
    "\u0002\u0010\u0004\u0003\u0002\u0002\u0002\u0011\u0015\t\u0003\u0002",
    "\u0002\u0012\u0014\t\u0004\u0002\u0002\u0013\u0012\u0003\u0002\u0002",
    "\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0006\u0003\u0002\u0002",
    "\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0018\u001a\u0007\u000f\u0002",
    "\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u001c\u0007\f\u0002",
    "\u0002\u001c\b\u0003\u0002\u0002\u0002\u001d\u001e\u0007/\u0002\u0002",
    "\u001e\n\u0003\u0002\u0002\u0002\u001f \u0007-\u0002\u0002 \f\u0003",
    "\u0002\u0002\u0002!%\u0007$\u0002\u0002\"$\u000b\u0002\u0002\u0002#",
    "\"\u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002%#\u0003\u0002\u0002\u0002&(\u0003\u0002\u0002\u0002\'%",
    "\u0003\u0002\u0002\u0002()\u0007$\u0002\u0002)\u000e\u0003\u0002\u0002",
    "\u0002\u0006\u0002\u0015\u0019%\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function Regexps(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

Regexps.prototype = Object.create(antlr4.Lexer.prototype);
Regexps.prototype.constructor = Regexps;

Regexps.EOF = antlr4.Token.EOF;
Regexps.ID = 1;
Regexps.NATNUM = 2;
Regexps.NEWLINE = 3;
Regexps.MINUS = 4;
Regexps.PLUS = 5;
Regexps.STRING = 6;

Regexps.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Regexps.prototype.modeNames = [ "DEFAULT_MODE" ];

Regexps.prototype.literalNames = [ null, null, null, null, "'-'", "'+'" ];

Regexps.prototype.symbolicNames = [ null, "ID", "NATNUM", "NEWLINE", "MINUS", 
                                    "PLUS", "STRING" ];

Regexps.prototype.ruleNames = [ "ID", "NATNUM", "NEWLINE", "MINUS", "PLUS", 
                                "STRING" ];

Regexps.prototype.grammarFileName = "Regexps.g4";



exports.Regexps = Regexps;

