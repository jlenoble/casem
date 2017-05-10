// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\rG\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0007\u0006-\n\u0006\f\u0006\u000e\u00060\u000b\u0006\u0003",
    "\u0007\u0005\u00073\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0007\fA\n\f\f\f\u000e\fD\u000b\f\u0003\f\u0003\f\u0003B\u0002\r",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0003\u0002\u0005\u0003\u0002C",
    "\\\u0003\u00023;\u0003\u00022;\u0002I\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0003\u0019\u0003\u0002\u0002\u0002\u0005\u001b\u0003\u0002\u0002",
    "\u0002\u0007\u001f\u0003\u0002\u0002\u0002\t(\u0003\u0002\u0002\u0002",
    "\u000b*\u0003\u0002\u0002\u0002\r2\u0003\u0002\u0002\u0002\u000f6\u0003",
    "\u0002\u0002\u0002\u00118\u0003\u0002\u0002\u0002\u0013:\u0003\u0002",
    "\u0002\u0002\u0015<\u0003\u0002\u0002\u0002\u0017>\u0003\u0002\u0002",
    "\u0002\u0019\u001a\u0007.\u0002\u0002\u001a\u0004\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0007^\u0002\u0002\u001c\u001d\u0007/\u0002\u0002",
    "\u001d\u001e\u0007@\u0002\u0002\u001e\u0006\u0003\u0002\u0002\u0002",
    "\u001f \u0007^\u0002\u0002 !\u0007N\u0002\u0002!\"\u0007q\u0002\u0002",
    "\"#\u0007e\u0002\u0002#$\u0007c\u0002\u0002$%\u0007v\u0002\u0002%&\u0007",
    "g\u0002\u0002&\'\u0007\"\u0002\u0002\'\b\u0003\u0002\u0002\u0002()\t",
    "\u0002\u0002\u0002)\n\u0003\u0002\u0002\u0002*.\t\u0003\u0002\u0002",
    "+-\t\u0004\u0002\u0002,+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\f\u0003",
    "\u0002\u0002\u00020.\u0003\u0002\u0002\u000213\u0007\u000f\u0002\u0002",
    "21\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000245\u0007\f\u0002\u00025\u000e\u0003\u0002\u0002\u000267\u0007",
    "/\u0002\u00027\u0010\u0003\u0002\u0002\u000289\u0007-\u0002\u00029\u0012",
    "\u0003\u0002\u0002\u0002:;\u00071\u0002\u0002;\u0014\u0003\u0002\u0002",
    "\u0002<=\u0007,\u0002\u0002=\u0016\u0003\u0002\u0002\u0002>B\u0007$",
    "\u0002\u0002?A\u000b\u0002\u0002\u0002@?\u0003\u0002\u0002\u0002AD\u0003",
    "\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002",
    "CE\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EF\u0007$\u0002",
    "\u0002F\u0018\u0003\u0002\u0002\u0002\u0006\u0002.2B\u0002"].join("");


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
CalcLexer.ARROW = 2;
CalcLexer.LOCATE = 3;
CalcLexer.ID = 4;
CalcLexer.NATNUM = 5;
CalcLexer.NEWLINE = 6;
CalcLexer.MINUS = 7;
CalcLexer.PLUS = 8;
CalcLexer.SLASH = 9;
CalcLexer.STAR = 10;
CalcLexer.STRING = 11;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, "','", "'\\->'", "'\\Locate '", 
                                     null, null, null, "'-'", "'+'", "'/'", 
                                     "'*'" ];

CalcLexer.prototype.symbolicNames = [ null, null, "ARROW", "LOCATE", "ID", 
                                      "NATNUM", "NEWLINE", "MINUS", "PLUS", 
                                      "SLASH", "STAR", "STRING" ];

CalcLexer.prototype.ruleNames = [ "T__0", "ARROW", "LOCATE", "ID", "NATNUM", 
                                  "NEWLINE", "MINUS", "PLUS", "SLASH", "STAR", 
                                  "STRING" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

