// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Functions.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\t>\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0002\u0002\t\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002\u0002\u0002=\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002\u0002\u0005",
    "\u0017\u0003\u0002\u0002\u0002\u0007\u001d\u0003\u0002\u0002\u0002\t",
    "#\u0003\u0002\u0002\u0002\u000b)\u0003\u0002\u0002\u0002\r0\u0003\u0002",
    "\u0002\u0002\u000f7\u0003\u0002\u0002\u0002\u0011\u0012\u0007^\u0002",
    "\u0002\u0012\u0013\u0007u\u0002\u0002\u0013\u0014\u0007s\u0002\u0002",
    "\u0014\u0015\u0007t\u0002\u0002\u0015\u0016\u0007v\u0002\u0002\u0016",
    "\u0004\u0003\u0002\u0002\u0002\u0017\u0018\u0007^\u0002\u0002\u0018",
    "\u0019\u0007e\u0002\u0002\u0019\u001a\u0007q\u0002\u0002\u001a\u001b",
    "\u0007u\u0002\u0002\u001b\u001c\u0007\"\u0002\u0002\u001c\u0006\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007^\u0002\u0002\u001e\u001f\u0007",
    "u\u0002\u0002\u001f \u0007k\u0002\u0002 !\u0007p\u0002\u0002!\"\u0007",
    "\"\u0002\u0002\"\b\u0003\u0002\u0002\u0002#$\u0007^\u0002\u0002$%\u0007",
    "v\u0002\u0002%&\u0007c\u0002\u0002&\'\u0007p\u0002\u0002\'(\u0007\"",
    "\u0002\u0002(\n\u0003\u0002\u0002\u0002)*\u0007^\u0002\u0002*+\u0007",
    "c\u0002\u0002+,\u0007e\u0002\u0002,-\u0007q\u0002\u0002-.\u0007u\u0002",
    "\u0002./\u0007\"\u0002\u0002/\f\u0003\u0002\u0002\u000201\u0007^\u0002",
    "\u000212\u0007c\u0002\u000223\u0007u\u0002\u000234\u0007k\u0002\u0002",
    "45\u0007p\u0002\u000256\u0007\"\u0002\u00026\u000e\u0003\u0002\u0002",
    "\u000278\u0007^\u0002\u000289\u0007c\u0002\u00029:\u0007v\u0002\u0002",
    ":;\u0007c\u0002\u0002;<\u0007p\u0002\u0002<=\u0007\"\u0002\u0002=\u0010",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FunctionsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FunctionsLexer.prototype = Object.create(antlr4.Lexer.prototype);
FunctionsLexer.prototype.constructor = FunctionsLexer;

FunctionsLexer.EOF = antlr4.Token.EOF;
FunctionsLexer.SQRT = 1;
FunctionsLexer.COS = 2;
FunctionsLexer.SIN = 3;
FunctionsLexer.TAN = 4;
FunctionsLexer.ACOS = 5;
FunctionsLexer.ASIN = 6;
FunctionsLexer.ATAN = 7;

FunctionsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FunctionsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FunctionsLexer.prototype.literalNames = [ null, "'\\sqrt'", "'\\cos '", 
                                          "'\\sin '", "'\\tan '", "'\\acos '", 
                                          "'\\asin '", "'\\atan '" ];

FunctionsLexer.prototype.symbolicNames = [ null, "SQRT", "COS", "SIN", "TAN", 
                                           "ACOS", "ASIN", "ATAN" ];

FunctionsLexer.prototype.ruleNames = [ "SQRT", "COS", "SIN", "TAN", "ACOS", 
                                       "ASIN", "ATAN" ];

FunctionsLexer.prototype.grammarFileName = "Functions.g4";



exports.FunctionsLexer = FunctionsLexer;

