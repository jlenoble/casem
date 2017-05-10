// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014q\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0007\fU\n\f\f\f\u000e\f",
    "X\u000b\f\u0003\r\u0005\r[\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0007\u0012i\n\u0012\f\u0012\u000e\u0012l\u000b",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003j\u0002",
    "\u0014\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\u0003\u0002\u0005\u0003\u0002",
    "C\\\u0003\u00023;\u0003\u00022;\u0002s\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0003\'\u0003\u0002\u0002\u0002\u0005",
    ")\u0003\u0002\u0002\u0002\u0007+\u0003\u0002\u0002\u0002\t-\u0003\u0002",
    "\u0002\u0002\u000b1\u0003\u0002\u0002\u0002\r7\u0003\u0002\u0002\u0002",
    "\u000f@\u0003\u0002\u0002\u0002\u0011D\u0003\u0002\u0002\u0002\u0013",
    "J\u0003\u0002\u0002\u0002\u0015P\u0003\u0002\u0002\u0002\u0017R\u0003",
    "\u0002\u0002\u0002\u0019Z\u0003\u0002\u0002\u0002\u001b^\u0003\u0002",
    "\u0002\u0002\u001d`\u0003\u0002\u0002\u0002\u001fb\u0003\u0002\u0002",
    "\u0002!d\u0003\u0002\u0002\u0002#f\u0003\u0002\u0002\u0002%o\u0003\u0002",
    "\u0002\u0002\'(\u0007*\u0002\u0002(\u0004\u0003\u0002\u0002\u0002)*",
    "\u0007+\u0002\u0002*\u0006\u0003\u0002\u0002\u0002+,\u0007.\u0002\u0002",
    ",\b\u0003\u0002\u0002\u0002-.\u0007^\u0002\u0002./\u0007/\u0002\u0002",
    "/0\u0007@\u0002\u00020\n\u0003\u0002\u0002\u000212\u0007^\u0002\u0002",
    "23\u0007e\u0002\u000234\u0007q\u0002\u000245\u0007u\u0002\u000256\u0007",
    "\"\u0002\u00026\f\u0003\u0002\u0002\u000278\u0007^\u0002\u000289\u0007",
    "N\u0002\u00029:\u0007q\u0002\u0002:;\u0007e\u0002\u0002;<\u0007c\u0002",
    "\u0002<=\u0007v\u0002\u0002=>\u0007g\u0002\u0002>?\u0007\"\u0002\u0002",
    "?\u000e\u0003\u0002\u0002\u0002@A\u0007^\u0002\u0002AB\u0007R\u0002",
    "\u0002BC\u0007k\u0002\u0002C\u0010\u0003\u0002\u0002\u0002DE\u0007^",
    "\u0002\u0002EF\u0007u\u0002\u0002FG\u0007k\u0002\u0002GH\u0007p\u0002",
    "\u0002HI\u0007\"\u0002\u0002I\u0012\u0003\u0002\u0002\u0002JK\u0007",
    "^\u0002\u0002KL\u0007v\u0002\u0002LM\u0007c\u0002\u0002MN\u0007p\u0002",
    "\u0002NO\u0007\"\u0002\u0002O\u0014\u0003\u0002\u0002\u0002PQ\t\u0002",
    "\u0002\u0002Q\u0016\u0003\u0002\u0002\u0002RV\t\u0003\u0002\u0002SU",
    "\t\u0004\u0002\u0002TS\u0003\u0002\u0002\u0002UX\u0003\u0002\u0002\u0002",
    "VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002W\u0018\u0003\u0002",
    "\u0002\u0002XV\u0003\u0002\u0002\u0002Y[\u0007\u000f\u0002\u0002ZY\u0003",
    "\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002",
    "\\]\u0007\f\u0002\u0002]\u001a\u0003\u0002\u0002\u0002^_\u0007/\u0002",
    "\u0002_\u001c\u0003\u0002\u0002\u0002`a\u0007-\u0002\u0002a\u001e\u0003",
    "\u0002\u0002\u0002bc\u00071\u0002\u0002c \u0003\u0002\u0002\u0002de",
    "\u0007,\u0002\u0002e\"\u0003\u0002\u0002\u0002fj\u0007$\u0002\u0002",
    "gi\u000b\u0002\u0002\u0002hg\u0003\u0002\u0002\u0002il\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002km\u0003\u0002",
    "\u0002\u0002lj\u0003\u0002\u0002\u0002mn\u0007$\u0002\u0002n$\u0003",
    "\u0002\u0002\u0002op\u00072\u0002\u0002p&\u0003\u0002\u0002\u0002\u0006",
    "\u0002VZj\u0002"].join("");


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
CalcLexer.COS = 5;
CalcLexer.LOCATE = 6;
CalcLexer.PI = 7;
CalcLexer.SIN = 8;
CalcLexer.TAN = 9;
CalcLexer.ID = 10;
CalcLexer.NATNUM = 11;
CalcLexer.NEWLINE = 12;
CalcLexer.MINUS = 13;
CalcLexer.PLUS = 14;
CalcLexer.SLASH = 15;
CalcLexer.STAR = 16;
CalcLexer.STRING = 17;
CalcLexer.ZERO = 18;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, "'('", "')'", "','", "'\\->'", 
                                     "'\\cos '", "'\\Locate '", "'\\Pi'", 
                                     "'\\sin '", "'\\tan '", null, null, 
                                     null, "'-'", "'+'", "'/'", "'*'", null, 
                                     "'0'" ];

CalcLexer.prototype.symbolicNames = [ null, null, null, null, "ARROW", "COS", 
                                      "LOCATE", "PI", "SIN", "TAN", "ID", 
                                      "NATNUM", "NEWLINE", "MINUS", "PLUS", 
                                      "SLASH", "STAR", "STRING", "ZERO" ];

CalcLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "ARROW", "COS", 
                                  "LOCATE", "PI", "SIN", "TAN", "ID", "NATNUM", 
                                  "NEWLINE", "MINUS", "PLUS", "SLASH", "STAR", 
                                  "STRING", "ZERO" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

