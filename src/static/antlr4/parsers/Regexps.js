// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Regexps.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\t=\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001b\n",
    "\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u001f\n\u0003\f\u0003\u000e",
    "\u0003\"\u000b\u0003\u0003\u0004\u0006\u0004%\n\u0004\r\u0004\u000e",
    "\u0004&\u0003\u0005\u0006\u0005*\n\u0005\r\u0005\u000e\u0005+\u0003",
    "\u0006\u0005\u0006/\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0007\u00075\n\u0007\f\u0007\u000e\u00078\u000b\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u00036\u0002\t\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002\u0007\u0003",
    "\u0002C\\\u0003\u00023;\u0003\u00022;\u0004\u0002C\\c|\u0004\u0002\u000b",
    "\u000b\"\"\u0002C\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u001a\u0003",
    "\u0002\u0002\u0002\u0005\u001c\u0003\u0002\u0002\u0002\u0007$\u0003",
    "\u0002\u0002\u0002\t)\u0003\u0002\u0002\u0002\u000b.\u0003\u0002\u0002",
    "\u0002\r2\u0003\u0002\u0002\u0002\u000f;\u0003\u0002\u0002\u0002\u0011",
    "\u001b\t\u0002\u0002\u0002\u0012\u0013\u0007^\u0002\u0002\u0013\u001b",
    "\u0007t\u0002\u0002\u0014\u0015\u0007^\u0002\u0002\u0015\u0016\u0007",
    "v\u0002\u0002\u0016\u0017\u0007j\u0002\u0002\u0017\u0018\u0007g\u0002",
    "\u0002\u0018\u0019\u0007v\u0002\u0002\u0019\u001b\u0007c\u0002\u0002",
    "\u001a\u0011\u0003\u0002\u0002\u0002\u001a\u0012\u0003\u0002\u0002\u0002",
    "\u001a\u0014\u0003\u0002\u0002\u0002\u001b\u0004\u0003\u0002\u0002\u0002",
    "\u001c \t\u0003\u0002\u0002\u001d\u001f\t\u0004\u0002\u0002\u001e\u001d",
    "\u0003\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002 \u001e\u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\u0006\u0003\u0002\u0002",
    "\u0002\" \u0003\u0002\u0002\u0002#%\t\u0005\u0002\u0002$#\u0003\u0002",
    "\u0002\u0002%&\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&\'",
    "\u0003\u0002\u0002\u0002\'\b\u0003\u0002\u0002\u0002(*\t\u0006\u0002",
    "\u0002)(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,\n\u0003\u0002\u0002\u0002-/",
    "\u0007\u000f\u0002\u0002.-\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/0\u0003\u0002\u0002\u000201\u0007\f\u0002\u00021\f\u0003\u0002",
    "\u0002\u000226\u0007$\u0002\u000235\u000b\u0002\u0002\u000243\u0003",
    "\u0002\u0002\u000258\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u0002",
    "64\u0003\u0002\u0002\u000279\u0003\u0002\u0002\u000286\u0003\u0002\u0002",
    "\u00029:\u0007$\u0002\u0002:\u000e\u0003\u0002\u0002\u0002;<\u00072",
    "\u0002\u0002<\u0010\u0003\u0002\u0002\u0002\t\u0002\u001a &+.6\u0002"].join("");


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
Regexps.TEXT = 3;
Regexps.WS = 4;
Regexps.NEWLINE = 5;
Regexps.STRING = 6;
Regexps.ZERO = 7;

Regexps.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Regexps.prototype.modeNames = [ "DEFAULT_MODE" ];

Regexps.prototype.literalNames = [ null, null, null, null, null, null, null, 
                                   "'0'" ];

Regexps.prototype.symbolicNames = [ null, "ID", "NATNUM", "TEXT", "WS", 
                                    "NEWLINE", "STRING", "ZERO" ];

Regexps.prototype.ruleNames = [ "ID", "NATNUM", "TEXT", "WS", "NEWLINE", 
                                "STRING", "ZERO" ];

Regexps.prototype.grammarFileName = "Regexps.g4";



exports.Regexps = Regexps;

