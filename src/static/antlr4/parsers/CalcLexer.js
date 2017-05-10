// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000fO\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0007\b5\n\b\f\b\u000e\b8\u000b\b\u0003\t\u0005",
    "\t;\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0007\u000eI\n\u000e",
    "\f\u000e\u000e\u000eL\u000b\u000e\u0003\u000e\u0003\u000e\u0003J\u0002",
    "\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u0003",
    "\u0002\u0005\u0003\u0002C\\\u0003\u00023;\u0003\u00022;\u0002Q\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0005",
    "\u001f\u0003\u0002\u0002\u0002\u0007!\u0003\u0002\u0002\u0002\t#\u0003",
    "\u0002\u0002\u0002\u000b\'\u0003\u0002\u0002\u0002\r0\u0003\u0002\u0002",
    "\u0002\u000f2\u0003\u0002\u0002\u0002\u0011:\u0003\u0002\u0002\u0002",
    "\u0013>\u0003\u0002\u0002\u0002\u0015@\u0003\u0002\u0002\u0002\u0017",
    "B\u0003\u0002\u0002\u0002\u0019D\u0003\u0002\u0002\u0002\u001bF\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007*\u0002\u0002\u001e\u0004\u0003",
    "\u0002\u0002\u0002\u001f \u0007+\u0002\u0002 \u0006\u0003\u0002\u0002",
    "\u0002!\"\u0007.\u0002\u0002\"\b\u0003\u0002\u0002\u0002#$\u0007^\u0002",
    "\u0002$%\u0007/\u0002\u0002%&\u0007@\u0002\u0002&\n\u0003\u0002\u0002",
    "\u0002\'(\u0007^\u0002\u0002()\u0007N\u0002\u0002)*\u0007q\u0002\u0002",
    "*+\u0007e\u0002\u0002+,\u0007c\u0002\u0002,-\u0007v\u0002\u0002-.\u0007",
    "g\u0002\u0002./\u0007\"\u0002\u0002/\f\u0003\u0002\u0002\u000201\t\u0002",
    "\u0002\u00021\u000e\u0003\u0002\u0002\u000226\t\u0003\u0002\u000235",
    "\t\u0004\u0002\u000243\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u0002",
    "64\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\u0010\u0003\u0002",
    "\u0002\u000286\u0003\u0002\u0002\u00029;\u0007\u000f\u0002\u0002:9\u0003",
    "\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002",
    "<=\u0007\f\u0002\u0002=\u0012\u0003\u0002\u0002\u0002>?\u0007/\u0002",
    "\u0002?\u0014\u0003\u0002\u0002\u0002@A\u0007-\u0002\u0002A\u0016\u0003",
    "\u0002\u0002\u0002BC\u00071\u0002\u0002C\u0018\u0003\u0002\u0002\u0002",
    "DE\u0007,\u0002\u0002E\u001a\u0003\u0002\u0002\u0002FJ\u0007$\u0002",
    "\u0002GI\u000b\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002IL\u0003\u0002",
    "\u0002\u0002JK\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002KM\u0003",
    "\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\u0007$\u0002\u0002N\u001c",
    "\u0003\u0002\u0002\u0002\u0006\u00026:J\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CalcLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CalcLexer.prototype = Object.create(antlr4.Lexer.prototype);
CalcLexer.prototype.constructor = CalcLexer;

CalcLexer.EOF = antlr4.Token.EOF;
CalcLexer.T__0 = 1;
CalcLexer.T__1 = 2;
CalcLexer.T__2 = 3;
CalcLexer.ARROW = 4;
CalcLexer.LOCATE = 5;
CalcLexer.ID = 6;
CalcLexer.NATNUM = 7;
CalcLexer.NEWLINE = 8;
CalcLexer.MINUS = 9;
CalcLexer.PLUS = 10;
CalcLexer.SLASH = 11;
CalcLexer.STAR = 12;
CalcLexer.STRING = 13;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, "'('", "')'", "','", "'\\->'", 
                                     "'\\Locate '", null, null, null, "'-'", 
                                     "'+'", "'/'", "'*'" ];

CalcLexer.prototype.symbolicNames = [ null, null, null, null, "ARROW", "LOCATE", 
                                      "ID", "NATNUM", "NEWLINE", "MINUS", 
                                      "PLUS", "SLASH", "STAR", "STRING" ];

CalcLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "ARROW", "LOCATE", 
                                  "ID", "NATNUM", "NEWLINE", "MINUS", "PLUS", 
                                  "SLASH", "STAR", "STRING" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

