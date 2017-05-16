// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\fT\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0007\b8\n\b\f\b\u000e\b;\u000b\b\u0003\t\u0003\t\u0003\t\u0007",
    "\t@\n\t\f\t\u000e\tC\u000b\t\u0005\tE\n\t\u0003\n\u0003\n\u0007\nI\n",
    "\n\f\n\u000e\nL\u000b\n\u0003\n\u0003\n\u0003\u000b\u0005\u000bQ\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003J\u0002\f\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0003",
    "\u0002\u0006\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0003\u00023;\u0003",
    "\u00022;\u0002X\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u001b\u0003",
    "\u0002\u0002\u0002\u0007#\u0003\u0002\u0002\u0002\t\'\u0003\u0002\u0002",
    "\u0002\u000b1\u0003\u0002\u0002\u0002\r3\u0003\u0002\u0002\u0002\u000f",
    "5\u0003\u0002\u0002\u0002\u0011D\u0003\u0002\u0002\u0002\u0013F\u0003",
    "\u0002\u0002\u0002\u0015P\u0003\u0002\u0002\u0002\u0017\u0018\u0007",
    "^\u0002\u0002\u0018\u0019\u0007/\u0002\u0002\u0019\u001a\u0007@\u0002",
    "\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c\u0007^\u0002",
    "\u0002\u001c\u001d\u0007I\u0002\u0002\u001d\u001e\u0007g\u0002\u0002",
    "\u001e\u001f\u0007v\u0002\u0002\u001f \u0007m\u0002\u0002 !\u0007g\u0002",
    "\u0002!\"\u0007{\u0002\u0002\"\u0006\u0003\u0002\u0002\u0002#$\u0007",
    "^\u0002\u0002$%\u0007F\u0002\u0002%&\u0007q\u0002\u0002&\b\u0003\u0002",
    "\u0002\u0002\'(\u0007^\u0002\u0002()\u0007N\u0002\u0002)*\u0007r\u0002",
    "\u0002*+\u0007Y\u0002\u0002+,\u0007j\u0002\u0002,-\u0007k\u0002\u0002",
    "-.\u0007n\u0002\u0002./\u0007g\u0002\u0002/0\u0007\"\u0002\u00020\n",
    "\u0003\u0002\u0002\u000212\u0007<\u0002\u00022\f\u0003\u0002\u0002\u0002",
    "34\u0007?\u0002\u00024\u000e\u0003\u0002\u0002\u000259\t\u0002\u0002",
    "\u000268\t\u0003\u0002\u000276\u0003\u0002\u0002\u00028;\u0003\u0002",
    "\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:\u0010",
    "\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<E\u00072\u0002\u0002",
    "=A\t\u0004\u0002\u0002>@\t\u0005\u0002\u0002?>\u0003\u0002\u0002\u0002",
    "@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002",
    "\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002D<\u0003\u0002",
    "\u0002\u0002D=\u0003\u0002\u0002\u0002E\u0012\u0003\u0002\u0002\u0002",
    "FJ\u0007$\u0002\u0002GI\u000b\u0002\u0002\u0002HG\u0003\u0002\u0002",
    "\u0002IL\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002JH\u0003\u0002",
    "\u0002\u0002KM\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\u0007",
    "$\u0002\u0002N\u0014\u0003\u0002\u0002\u0002OQ\u0007\u000f\u0002\u0002",
    "PO\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002",
    "\u0002RS\u0007\f\u0002\u0002S\u0016\u0003\u0002\u0002\u0002\b\u0002",
    "9ADJP\u0002"].join("");


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
CalcLexer.T__4 = 5;
CalcLexer.T__5 = 6;
CalcLexer.ID = 7;
CalcLexer.UINT = 8;
CalcLexer.STRING = 9;
CalcLexer.NEWLINE = 10;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, "'\\->'", "'\\Getkey'", "'\\Do'", 
                                     "'\\LpWhile '", "':'", "'='" ];

CalcLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, "ID", "UINT", "STRING", "NEWLINE" ];

CalcLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "ID", "UINT", "STRING", "NEWLINE" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

