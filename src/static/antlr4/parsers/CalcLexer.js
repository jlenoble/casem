// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\fT\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\"\n\u0003\f\u0003",
    "\u000e\u0003%\u000b\u0003\u0005\u0003\'\n\u0003\u0003\u0004\u0003\u0004",
    "\u0007\u0004+\n\u0004\f\u0004\u000e\u0004.\u000b\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0005\u00053\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003,\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0003\u0002\u0006",
    "\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0003\u00023;\u0003\u00022;\u0002",
    "X\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005&\u0003\u0002\u0002",
    "\u0002\u0007(\u0003\u0002\u0002\u0002\t2\u0003\u0002\u0002\u0002\u000b",
    "6\u0003\u0002\u0002\u0002\r:\u0003\u0002\u0002\u0002\u000f<\u0003\u0002",
    "\u0002\u0002\u0011@\u0003\u0002\u0002\u0002\u0013B\u0003\u0002\u0002",
    "\u0002\u0015J\u0003\u0002\u0002\u0002\u0017\u001b\t\u0002\u0002\u0002",
    "\u0018\u001a\t\u0003\u0002\u0002\u0019\u0018\u0003\u0002\u0002\u0002",
    "\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u0004\u0003\u0002\u0002\u0002",
    "\u001d\u001b\u0003\u0002\u0002\u0002\u001e\'\u00072\u0002\u0002\u001f",
    "#\t\u0004\u0002\u0002 \"\t\u0005\u0002\u0002! \u0003\u0002\u0002\u0002",
    "\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&\u001e",
    "\u0003\u0002\u0002\u0002&\u001f\u0003\u0002\u0002\u0002\'\u0006\u0003",
    "\u0002\u0002\u0002(,\u0007$\u0002\u0002)+\u000b\u0002\u0002\u0002*)",
    "\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002-/\u0003\u0002\u0002\u0002.,\u0003\u0002",
    "\u0002\u0002/0\u0007$\u0002\u00020\b\u0003\u0002\u0002\u000213\u0007",
    "\u000f\u0002\u000221\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u000245\u0007\f\u0002\u00025\n\u0003\u0002\u0002",
    "\u000267\u0007^\u0002\u000278\u0007/\u0002\u000289\u0007@\u0002\u0002",
    "9\f\u0003\u0002\u0002\u0002:;\u0007<\u0002\u0002;\u000e\u0003\u0002",
    "\u0002\u0002<=\u0007^\u0002\u0002=>\u0007F\u0002\u0002>?\u0007q\u0002",
    "\u0002?\u0010\u0003\u0002\u0002\u0002@A\u0007?\u0002\u0002A\u0012\u0003",
    "\u0002\u0002\u0002BC\u0007^\u0002\u0002CD\u0007I\u0002\u0002DE\u0007",
    "g\u0002\u0002EF\u0007v\u0002\u0002FG\u0007m\u0002\u0002GH\u0007g\u0002",
    "\u0002HI\u0007{\u0002\u0002I\u0014\u0003\u0002\u0002\u0002JK\u0007^",
    "\u0002\u0002KL\u0007N\u0002\u0002LM\u0007r\u0002\u0002MN\u0007Y\u0002",
    "\u0002NO\u0007j\u0002\u0002OP\u0007k\u0002\u0002PQ\u0007n\u0002\u0002",
    "QR\u0007g\u0002\u0002RS\u0007\"\u0002\u0002S\u0016\u0003\u0002\u0002",
    "\u0002\b\u0002\u001b#&,2\u0002"].join("");


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
CalcLexer.ID = 1;
CalcLexer.UINT = 2;
CalcLexer.STRING = 3;
CalcLexer.NEWLINE = 4;
CalcLexer.ARROW = 5;
CalcLexer.COLON = 6;
CalcLexer.DO = 7;
CalcLexer.EQUAL = 8;
CalcLexer.GETKEY = 9;
CalcLexer.LOOPWHILE = 10;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, null, null, null, null, "'\\->'", 
                                     "':'", "'\\Do'", "'='", "'\\Getkey'", 
                                     "'\\LpWhile '" ];

CalcLexer.prototype.symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", 
                                      "ARROW", "COLON", "DO", "EQUAL", "GETKEY", 
                                      "LOOPWHILE" ];

CalcLexer.prototype.ruleNames = [ "ID", "UINT", "STRING", "NEWLINE", "ARROW", 
                                  "COLON", "DO", "EQUAL", "GETKEY", "LOOPWHILE" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

