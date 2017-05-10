// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010N\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0002\u0010\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u0003\u0002",
    "\u0002\u0002M\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0003\u001f\u0003\u0002\u0002\u0002\u0005!\u0003",
    "\u0002\u0002\u0002\u0007#\u0003\u0002\u0002\u0002\t%\u0003\u0002\u0002",
    "\u0002\u000b\'\u0003\u0002\u0002\u0002\r)\u0003\u0002\u0002\u0002\u000f",
    "-\u0003\u0002\u0002\u0002\u0011/\u0003\u0002\u0002\u0002\u00133\u0003",
    "\u0002\u0002\u0002\u00155\u0003\u0002\u0002\u0002\u00179\u0003\u0002",
    "\u0002\u0002\u0019@\u0003\u0002\u0002\u0002\u001bF\u0003\u0002\u0002",
    "\u0002\u001dJ\u0003\u0002\u0002\u0002\u001f \u0007-\u0002\u0002 \u0004",
    "\u0003\u0002\u0002\u0002!\"\u0007/\u0002\u0002\"\u0006\u0003\u0002\u0002",
    "\u0002#$\u0007,\u0002\u0002$\b\u0003\u0002\u0002\u0002%&\u00071\u0002",
    "\u0002&\n\u0003\u0002\u0002\u0002\'(\u0007?\u0002\u0002(\f\u0003\u0002",
    "\u0002\u0002)*\u0007^\u0002\u0002*+\u0007>\u0002\u0002+,\u0007@\u0002",
    "\u0002,\u000e\u0003\u0002\u0002\u0002-.\u0007@\u0002\u0002.\u0010\u0003",
    "\u0002\u0002\u0002/0\u0007^\u0002\u000201\u0007@\u0002\u000212\u0007",
    "?\u0002\u00022\u0012\u0003\u0002\u0002\u000234\u0007>\u0002\u00024\u0014",
    "\u0003\u0002\u0002\u000256\u0007^\u0002\u000267\u0007>\u0002\u00027",
    "8\u0007?\u0002\u00028\u0016\u0003\u0002\u0002\u00029:\u0007^\u0002\u0002",
    ":;\u0007\"\u0002\u0002;<\u0007C\u0002\u0002<=\u0007p\u0002\u0002=>\u0007",
    "f\u0002\u0002>?\u0007\"\u0002\u0002?\u0018\u0003\u0002\u0002\u0002@",
    "A\u0007^\u0002\u0002AB\u0007\"\u0002\u0002BC\u0007Q\u0002\u0002CD\u0007",
    "t\u0002\u0002DE\u0007\"\u0002\u0002E\u001a\u0003\u0002\u0002\u0002F",
    "G\u0007^\u0002\u0002GH\u0007/\u0002\u0002HI\u0007@\u0002\u0002I\u001c",
    "\u0003\u0002\u0002\u0002JK\u0007^\u0002\u0002KL\u0007?\u0002\u0002L",
    "M\u0007@\u0002\u0002M\u001e\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


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
OperatorsLexer.EQ = 5;
OperatorsLexer.NE = 6;
OperatorsLexer.GT = 7;
OperatorsLexer.GE = 8;
OperatorsLexer.LT = 9;
OperatorsLexer.LE = 10;
OperatorsLexer.AND = 11;
OperatorsLexer.OR = 12;
OperatorsLexer.ARROW = 13;
OperatorsLexer.FATARROW = 14;

OperatorsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

OperatorsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

OperatorsLexer.prototype.literalNames = [ null, "'+'", "'-'", "'*'", "'/'", 
                                          "'='", "'\\<>'", "'>'", "'\\>='", 
                                          "'<'", "'\\<='", "'\\ And '", 
                                          "'\\ Or '", "'\\->'", "'\\=>'" ];

OperatorsLexer.prototype.symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", 
                                           "EQ", "NE", "GT", "GE", "LT", 
                                           "LE", "AND", "OR", "ARROW", "FATARROW" ];

OperatorsLexer.prototype.ruleNames = [ "ADD", "SUB", "MUL", "DIV", "EQ", 
                                       "NE", "GT", "GE", "LT", "LE", "AND", 
                                       "OR", "ARROW", "FATARROW" ];

OperatorsLexer.prototype.grammarFileName = "Operators.g4";



exports.OperatorsLexer = OperatorsLexer;

