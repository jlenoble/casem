// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000b?\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0007\u0007+\n\u0007\f\u0007\u000e\u0007.\u000b\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0007\t6\n\t\f\t\u000e",
    "\t9\u000b\t\u0003\n\u0005\n<\n\n\u0003\n\u0003\n\u0003,\u0002\u000b",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0003\u0002\u0005\u0003\u0002C\\\u0003\u00023;",
    "\u0003\u00022;\u0002A\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0003\u0015",
    "\u0003\u0002\u0002\u0002\u0005\u0017\u0003\u0002\u0002\u0002\u0007\u001b",
    "\u0003\u0002\u0002\u0002\t$\u0003\u0002\u0002\u0002\u000b&\u0003\u0002",
    "\u0002\u0002\r(\u0003\u0002\u0002\u0002\u000f1\u0003\u0002\u0002\u0002",
    "\u00113\u0003\u0002\u0002\u0002\u0013;\u0003\u0002\u0002\u0002\u0015",
    "\u0016\u0007.\u0002\u0002\u0016\u0004\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0007^\u0002\u0002\u0018\u0019\u0007/\u0002\u0002\u0019\u001a",
    "\u0007@\u0002\u0002\u001a\u0006\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0007^\u0002\u0002\u001c\u001d\u0007N\u0002\u0002\u001d\u001e\u0007",
    "q\u0002\u0002\u001e\u001f\u0007e\u0002\u0002\u001f \u0007c\u0002\u0002",
    " !\u0007v\u0002\u0002!\"\u0007g\u0002\u0002\"#\u0007\"\u0002\u0002#",
    "\b\u0003\u0002\u0002\u0002$%\u0007/\u0002\u0002%\n\u0003\u0002\u0002",
    "\u0002&\'\u0007-\u0002\u0002\'\f\u0003\u0002\u0002\u0002(,\u0007$\u0002",
    "\u0002)+\u000b\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+.\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002-/\u0003",
    "\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/0\u0007$\u0002\u00020\u000e",
    "\u0003\u0002\u0002\u000212\t\u0002\u0002\u00022\u0010\u0003\u0002\u0002",
    "\u000237\t\u0003\u0002\u000246\t\u0004\u0002\u000254\u0003\u0002\u0002",
    "\u000269\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002",
    "\u0002\u00028\u0012\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002",
    ":<\u0007\u000f\u0002\u0002;:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002",
    "\u0002<=\u0003\u0002\u0002\u0002=>\u0007\f\u0002\u0002>\u0014\u0003",
    "\u0002\u0002\u0002\u0006\u0002,7;\u0002"].join("");


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
CalcLexer.MINUS = 4;
CalcLexer.PLUS = 5;
CalcLexer.STRING = 6;
CalcLexer.ID = 7;
CalcLexer.NATNUM = 8;
CalcLexer.NEWLINE = 9;

CalcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalcLexer.prototype.literalNames = [ null, "','", "'\\->'", "'\\Locate '", 
                                     "'-'", "'+'" ];

CalcLexer.prototype.symbolicNames = [ null, null, "ARROW", "LOCATE", "MINUS", 
                                      "PLUS", "STRING", "ID", "NATNUM", 
                                      "NEWLINE" ];

CalcLexer.prototype.ruleNames = [ "T__0", "ARROW", "LOCATE", "MINUS", "PLUS", 
                                  "STRING", "ID", "NATNUM", "NEWLINE" ];

CalcLexer.prototype.grammarFileName = "Calc.g4";



exports.CalcLexer = CalcLexer;

