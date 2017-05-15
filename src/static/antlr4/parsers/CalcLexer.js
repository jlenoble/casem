// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\t<\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "(\n\u0006\f\u0006\u000e\u0006+\u000b\u0006\u0005\u0006-\n\u0006\u0003",
    "\u0007\u0003\u0007\u0007\u00071\n\u0007\f\u0007\u000e\u00074\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0005\b9\n\b\u0003\b\u0003\b\u0003",
    "2\u0002\t\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r",
    "\b\u000f\t\u0003\u0002\u0004\u0003\u00023;\u0003\u00022;\u0002?\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002\u0002\u0005",
    "\u0016\u0003\u0002\u0002\u0002\u0007 \u0003\u0002\u0002\u0002\t\"\u0003",
    "\u0002\u0002\u0002\u000b,\u0003\u0002\u0002\u0002\r.\u0003\u0002\u0002",
    "\u0002\u000f8\u0003\u0002\u0002\u0002\u0011\u0012\u0007^\u0002\u0002",
    "\u0012\u0013\u0007F\u0002\u0002\u0013\u0014\u0007q\u0002\u0002\u0014",
    "\u0015\u0007\"\u0002\u0002\u0015\u0004\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0007^\u0002\u0002\u0017\u0018\u0007n\u0002\u0002\u0018\u0019",
    "\u0007r\u0002\u0002\u0019\u001a\u0007Y\u0002\u0002\u001a\u001b\u0007",
    "j\u0002\u0002\u001b\u001c\u0007k\u0002\u0002\u001c\u001d\u0007n\u0002",
    "\u0002\u001d\u001e\u0007g\u0002\u0002\u001e\u001f\u0007\"\u0002\u0002",
    "\u001f\u0006\u0003\u0002\u0002\u0002 !\u0007<\u0002\u0002!\b\u0003\u0002",
    "\u0002\u0002\"#\u0007?\u0002\u0002#\n\u0003\u0002\u0002\u0002$-\u0007",
    "2\u0002\u0002%)\t\u0002\u0002\u0002&(\t\u0003\u0002\u0002\'&\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002",
    "\u0002,$\u0003\u0002\u0002\u0002,%\u0003\u0002\u0002\u0002-\f\u0003",
    "\u0002\u0002\u0002.2\u0007$\u0002\u0002/1\u000b\u0002\u0002\u00020/",
    "\u0003\u0002\u0002\u000214\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000220\u0003\u0002\u0002\u000235\u0003\u0002\u0002\u000242\u0003\u0002",
    "\u0002\u000256\u0007$\u0002\u00026\u000e\u0003\u0002\u0002\u000279\u0007",
    "\u000f\u0002\u000287\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u0002",
    "9:\u0003\u0002\u0002\u0002:;\u0007\f\u0002\u0002;\u0010\u0003\u0002",
    "\u0002\u0002\u0007\u0002),28\u0002"].join("");


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
CalcLexer.T__3 = 4;
CalcLexer.UINT = 5;
CalcLexer.STRING = 6;
CalcLexer.NEWLINE = 7;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, "'\\Do '", "'\\lpWhile '", "':'", 
                                     "'='" ];

CalcLexer.prototype.symbolicNames = [ null, null, null, null, null, "UINT", 
                                      "STRING", "NEWLINE" ];

CalcLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "UINT", 
                                  "STRING", "NEWLINE" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

