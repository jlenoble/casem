// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0011V\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006.\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0002",
    "\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011\u0003\u0002\u0002\u0002V\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0003!\u0003\u0002\u0002\u0002\u0005#\u0003\u0002\u0002",
    "\u0002\u0007%\u0003\u0002\u0002\u0002\t\'\u0003\u0002\u0002\u0002\u000b",
    "-\u0003\u0002\u0002\u0002\r/\u0003\u0002\u0002\u0002\u000f1\u0003\u0002",
    "\u0002\u0002\u00115\u0003\u0002\u0002\u0002\u00137\u0003\u0002\u0002",
    "\u0002\u0015;\u0003\u0002\u0002\u0002\u0017=\u0003\u0002\u0002\u0002",
    "\u0019A\u0003\u0002\u0002\u0002\u001bH\u0003\u0002\u0002\u0002\u001d",
    "N\u0003\u0002\u0002\u0002\u001fR\u0003\u0002\u0002\u0002!\"\u0007-\u0002",
    "\u0002\"\u0004\u0003\u0002\u0002\u0002#$\u0007/\u0002\u0002$\u0006\u0003",
    "\u0002\u0002\u0002%&\u0007,\u0002\u0002&\b\u0003\u0002\u0002\u0002\'",
    "(\u00071\u0002\u0002(\n\u0003\u0002\u0002\u0002).\u0007`\u0002\u0002",
    "*+\u0007^\u0002\u0002+,\u0007z\u0002\u0002,.\u0007`\u0002\u0002-)\u0003",
    "\u0002\u0002\u0002-*\u0003\u0002\u0002\u0002.\f\u0003\u0002\u0002\u0002",
    "/0\u0007?\u0002\u00020\u000e\u0003\u0002\u0002\u000212\u0007^\u0002",
    "\u000223\u0007>\u0002\u000234\u0007@\u0002\u00024\u0010\u0003\u0002",
    "\u0002\u000256\u0007@\u0002\u00026\u0012\u0003\u0002\u0002\u000278\u0007",
    "^\u0002\u000289\u0007@\u0002\u00029:\u0007?\u0002\u0002:\u0014\u0003",
    "\u0002\u0002\u0002;<\u0007>\u0002\u0002<\u0016\u0003\u0002\u0002\u0002",
    "=>\u0007^\u0002\u0002>?\u0007>\u0002\u0002?@\u0007?\u0002\u0002@\u0018",
    "\u0003\u0002\u0002\u0002AB\u0007^\u0002\u0002BC\u0007\"\u0002\u0002",
    "CD\u0007C\u0002\u0002DE\u0007p\u0002\u0002EF\u0007f\u0002\u0002FG\u0007",
    "\"\u0002\u0002G\u001a\u0003\u0002\u0002\u0002HI\u0007^\u0002\u0002I",
    "J\u0007\"\u0002\u0002JK\u0007Q\u0002\u0002KL\u0007t\u0002\u0002LM\u0007",
    "\"\u0002\u0002M\u001c\u0003\u0002\u0002\u0002NO\u0007^\u0002\u0002O",
    "P\u0007/\u0002\u0002PQ\u0007@\u0002\u0002Q\u001e\u0003\u0002\u0002\u0002",
    "RS\u0007^\u0002\u0002ST\u0007?\u0002\u0002TU\u0007@\u0002\u0002U \u0003",
    "\u0002\u0002\u0002\u0004\u0002-\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function OperatorsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

OperatorsLexer.prototype = Object.create(antlr4.Lexer.prototype);
OperatorsLexer.prototype.constructor = OperatorsLexer;

OperatorsLexer.EOF = antlr4.Token.EOF;
OperatorsLexer.ADD = 1;
OperatorsLexer.SUB = 2;
OperatorsLexer.MUL = 3;
OperatorsLexer.DIV = 4;
OperatorsLexer.POW = 5;
OperatorsLexer.EQ = 6;
OperatorsLexer.NE = 7;
OperatorsLexer.GT = 8;
OperatorsLexer.GE = 9;
OperatorsLexer.LT = 10;
OperatorsLexer.LE = 11;
OperatorsLexer.AND = 12;
OperatorsLexer.OR = 13;
OperatorsLexer.ARROW = 14;
OperatorsLexer.FATARROW = 15;

OperatorsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

OperatorsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

OperatorsLexer.prototype.literalNames = [ null, "'+'", "'-'", "'*'", "'/'", 
                                          null, "'='", "'\\<>'", "'>'", 
                                          "'\\>='", "'<'", "'\\<='", "'\\ And '", 
                                          "'\\ Or '", "'\\->'", "'\\=>'" ];

OperatorsLexer.prototype.symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", 
                                           "POW", "EQ", "NE", "GT", "GE", 
                                           "LT", "LE", "AND", "OR", "ARROW", 
                                           "FATARROW" ];

OperatorsLexer.prototype.ruleNames = [ "ADD", "SUB", "MUL", "DIV", "POW", 
                                       "EQ", "NE", "GT", "GE", "LT", "LE", 
                                       "AND", "OR", "ARROW", "FATARROW" ];

OperatorsLexer.prototype.grammarFileName = "Operators.g4";



exports.OperatorsLexer = OperatorsLexer;

