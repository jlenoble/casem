// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Keywords.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b-\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0002\u0002\b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u0003\u0002\u0002\u0002,\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005",
    "\u0013\u0003\u0002\u0002\u0002\u0007\u0015\u0003\u0002\u0002\u0002\t",
    "\u0019\u0003\u0002\u0002\u0002\u000b\u001b\u0003\u0002\u0002\u0002\r",
    "#\u0003\u0002\u0002\u0002\u000f\u0010\u0007^\u0002\u0002\u0010\u0011",
    "\u0007/\u0002\u0002\u0011\u0012\u0007@\u0002\u0002\u0012\u0004\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0007<\u0002\u0002\u0014\u0006\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007^\u0002\u0002\u0016\u0017\u0007",
    "F\u0002\u0002\u0017\u0018\u0007q\u0002\u0002\u0018\b\u0003\u0002\u0002",
    "\u0002\u0019\u001a\u0007?\u0002\u0002\u001a\n\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0007^\u0002\u0002\u001c\u001d\u0007I\u0002\u0002\u001d",
    "\u001e\u0007g\u0002\u0002\u001e\u001f\u0007v\u0002\u0002\u001f \u0007",
    "m\u0002\u0002 !\u0007g\u0002\u0002!\"\u0007{\u0002\u0002\"\f\u0003\u0002",
    "\u0002\u0002#$\u0007^\u0002\u0002$%\u0007N\u0002\u0002%&\u0007r\u0002",
    "\u0002&\'\u0007Y\u0002\u0002\'(\u0007j\u0002\u0002()\u0007k\u0002\u0002",
    ")*\u0007n\u0002\u0002*+\u0007g\u0002\u0002+,\u0007\"\u0002\u0002,\u000e",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function Keywords(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

Keywords.prototype = Object.create(antlr4.Lexer.prototype);
Keywords.prototype.constructor = Keywords;

Keywords.EOF = antlr4.Token.EOF;
Keywords.ARROW = 1;
Keywords.COLON = 2;
Keywords.DO = 3;
Keywords.EQUAL = 4;
Keywords.GETKEY = 5;
Keywords.LOOPWHILE = 6;

Keywords.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Keywords.prototype.modeNames = [ "DEFAULT_MODE" ];

Keywords.prototype.literalNames = [ null, "'\\->'", "':'", "'\\Do'", "'='", 
                                    "'\\Getkey'", "'\\LpWhile '" ];

Keywords.prototype.symbolicNames = [ null, "ARROW", "COLON", "DO", "EQUAL", 
                                     "GETKEY", "LOOPWHILE" ];

Keywords.prototype.ruleNames = [ "ARROW", "COLON", "DO", "EQUAL", "GETKEY", 
                                 "LOOPWHILE" ];

Keywords.prototype.grammarFileName = "Keywords.g4";



exports.Keywords = Keywords;

