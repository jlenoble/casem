// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0018\u0094\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0007\u0010x\n\u0010\f\u0010\u000e",
    "\u0010{\u000b\u0010\u0003\u0011\u0005\u0011~\n\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0007\u0016\u008c",
    "\n\u0016\f\u0016\u000e\u0016\u008f\u000b\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u008d\u0002\u0018\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018\u0003\u0002\u0005\u0003\u0002C",
    "\\\u0003\u00023;\u0003\u00022;\u0002\u0096\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0003/\u0003\u0002\u0002\u0002\u00051\u0003\u0002",
    "\u0002\u0002\u00073\u0003\u0002\u0002\u0002\t5\u0003\u0002\u0002\u0002",
    "\u000b;\u0003\u0002\u0002\u0002\rA\u0003\u0002\u0002\u0002\u000fG\u0003",
    "\u0002\u0002\u0002\u0011M\u0003\u0002\u0002\u0002\u0013T\u0003\u0002",
    "\u0002\u0002\u0015[\u0003\u0002\u0002\u0002\u0017b\u0003\u0002\u0002",
    "\u0002\u0019f\u0003\u0002\u0002\u0002\u001bo\u0003\u0002\u0002\u0002",
    "\u001ds\u0003\u0002\u0002\u0002\u001fu\u0003\u0002\u0002\u0002!}\u0003",
    "\u0002\u0002\u0002#\u0081\u0003\u0002\u0002\u0002%\u0083\u0003\u0002",
    "\u0002\u0002\'\u0085\u0003\u0002\u0002\u0002)\u0087\u0003\u0002\u0002",
    "\u0002+\u0089\u0003\u0002\u0002\u0002-\u0092\u0003\u0002\u0002\u0002",
    "/0\u0007*\u0002\u00020\u0004\u0003\u0002\u0002\u000212\u0007+\u0002",
    "\u00022\u0006\u0003\u0002\u0002\u000234\u0007.\u0002\u00024\b\u0003",
    "\u0002\u0002\u000256\u0007^\u0002\u000267\u0007u\u0002\u000278\u0007",
    "s\u0002\u000289\u0007t\u0002\u00029:\u0007v\u0002\u0002:\n\u0003\u0002",
    "\u0002\u0002;<\u0007^\u0002\u0002<=\u0007e\u0002\u0002=>\u0007q\u0002",
    "\u0002>?\u0007u\u0002\u0002?@\u0007\"\u0002\u0002@\f\u0003\u0002\u0002",
    "\u0002AB\u0007^\u0002\u0002BC\u0007u\u0002\u0002CD\u0007k\u0002\u0002",
    "DE\u0007p\u0002\u0002EF\u0007\"\u0002\u0002F\u000e\u0003\u0002\u0002",
    "\u0002GH\u0007^\u0002\u0002HI\u0007v\u0002\u0002IJ\u0007c\u0002\u0002",
    "JK\u0007p\u0002\u0002KL\u0007\"\u0002\u0002L\u0010\u0003\u0002\u0002",
    "\u0002MN\u0007^\u0002\u0002NO\u0007c\u0002\u0002OP\u0007e\u0002\u0002",
    "PQ\u0007q\u0002\u0002QR\u0007u\u0002\u0002RS\u0007\"\u0002\u0002S\u0012",
    "\u0003\u0002\u0002\u0002TU\u0007^\u0002\u0002UV\u0007c\u0002\u0002V",
    "W\u0007u\u0002\u0002WX\u0007k\u0002\u0002XY\u0007p\u0002\u0002YZ\u0007",
    "\"\u0002\u0002Z\u0014\u0003\u0002\u0002\u0002[\\\u0007^\u0002\u0002",
    "\\]\u0007c\u0002\u0002]^\u0007v\u0002\u0002^_\u0007c\u0002\u0002_`\u0007",
    "p\u0002\u0002`a\u0007\"\u0002\u0002a\u0016\u0003\u0002\u0002\u0002b",
    "c\u0007^\u0002\u0002cd\u0007/\u0002\u0002de\u0007@\u0002\u0002e\u0018",
    "\u0003\u0002\u0002\u0002fg\u0007^\u0002\u0002gh\u0007N\u0002\u0002h",
    "i\u0007q\u0002\u0002ij\u0007e\u0002\u0002jk\u0007c\u0002\u0002kl\u0007",
    "v\u0002\u0002lm\u0007g\u0002\u0002mn\u0007\"\u0002\u0002n\u001a\u0003",
    "\u0002\u0002\u0002op\u0007^\u0002\u0002pq\u0007R\u0002\u0002qr\u0007",
    "k\u0002\u0002r\u001c\u0003\u0002\u0002\u0002st\t\u0002\u0002\u0002t",
    "\u001e\u0003\u0002\u0002\u0002uy\t\u0003\u0002\u0002vx\t\u0004\u0002",
    "\u0002wv\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002\u0002yw\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z \u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002|~\u0007\u000f\u0002\u0002}|\u0003\u0002\u0002\u0002",
    "}~\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0007\f\u0002\u0002\u0080\"\u0003\u0002\u0002\u0002\u0081\u0082\u0007",
    "/\u0002\u0002\u0082$\u0003\u0002\u0002\u0002\u0083\u0084\u0007-\u0002",
    "\u0002\u0084&\u0003\u0002\u0002\u0002\u0085\u0086\u00071\u0002\u0002",
    "\u0086(\u0003\u0002\u0002\u0002\u0087\u0088\u0007,\u0002\u0002\u0088",
    "*\u0003\u0002\u0002\u0002\u0089\u008d\u0007$\u0002\u0002\u008a\u008c",
    "\u000b\u0002\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\u008f",
    "\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008d\u008b",
    "\u0003\u0002\u0002\u0002\u008e\u0090\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0007$\u0002\u0002\u0091,\u0003",
    "\u0002\u0002\u0002\u0092\u0093\u00072\u0002\u0002\u0093.\u0003\u0002",
    "\u0002\u0002\u0006\u0002y}\u008d\u0002"].join("");


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
CalcLexer.SQRT = 4;
CalcLexer.COS = 5;
CalcLexer.SIN = 6;
CalcLexer.TAN = 7;
CalcLexer.ACOS = 8;
CalcLexer.ASIN = 9;
CalcLexer.ATAN = 10;
CalcLexer.ARROW = 11;
CalcLexer.LOCATE = 12;
CalcLexer.PI = 13;
CalcLexer.ID = 14;
CalcLexer.NATNUM = 15;
CalcLexer.NEWLINE = 16;
CalcLexer.MINUS = 17;
CalcLexer.PLUS = 18;
CalcLexer.SLASH = 19;
CalcLexer.STAR = 20;
CalcLexer.STRING = 21;
CalcLexer.ZERO = 22;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, "'('", "')'", "','", "'\\sqrt'", 
                                     "'\\cos '", "'\\sin '", "'\\tan '", 
                                     "'\\acos '", "'\\asin '", "'\\atan '", 
                                     "'\\->'", "'\\Locate '", "'\\Pi'", 
                                     null, null, null, "'-'", "'+'", "'/'", 
                                     "'*'", null, "'0'" ];

CalcLexer.prototype.symbolicNames = [ null, null, null, null, "SQRT", "COS", 
                                      "SIN", "TAN", "ACOS", "ASIN", "ATAN", 
                                      "ARROW", "LOCATE", "PI", "ID", "NATNUM", 
                                      "NEWLINE", "MINUS", "PLUS", "SLASH", 
                                      "STAR", "STRING", "ZERO" ];

CalcLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "SQRT", "COS", 
                                  "SIN", "TAN", "ACOS", "ASIN", "ATAN", 
                                  "ARROW", "LOCATE", "PI", "ID", "NATNUM", 
                                  "NEWLINE", "MINUS", "PLUS", "SLASH", "STAR", 
                                  "STRING", "ZERO" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

