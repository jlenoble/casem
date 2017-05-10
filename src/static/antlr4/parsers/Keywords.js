// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Keywords.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b6\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0002\u00025",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0016\u0003\u0002\u0002\u0002",
    "\u0007\u001b\u0003\u0002\u0002\u0002\t\"\u0003\u0002\u0002\u0002\u000b",
    "+\u0003\u0002\u0002\u0002\r/\u0003\u0002\u0002\u0002\u000f\u0010\u0007",
    "^\u0002\u0002\u0010\u0011\u0007G\u0002\u0002\u0011\u0012\u0007n\u0002",
    "\u0002\u0012\u0013\u0007u\u0002\u0002\u0013\u0014\u0007g\u0002\u0002",
    "\u0014\u0015\u0007\"\u0002\u0002\u0015\u0004\u0003\u0002\u0002\u0002",
    "\u0016\u0017\u0007^\u0002\u0002\u0017\u0018\u0007K\u0002\u0002\u0018",
    "\u0019\u0007h\u0002\u0002\u0019\u001a\u0007\"\u0002\u0002\u001a\u0006",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007^\u0002\u0002\u001c\u001d",
    "\u0007K\u0002\u0002\u001d\u001e\u0007h\u0002\u0002\u001e\u001f\u0007",
    "G\u0002\u0002\u001f \u0007p\u0002\u0002 !\u0007f\u0002\u0002!\b\u0003",
    "\u0002\u0002\u0002\"#\u0007^\u0002\u0002#$\u0007N\u0002\u0002$%\u0007",
    "q\u0002\u0002%&\u0007e\u0002\u0002&\'\u0007c\u0002\u0002\'(\u0007v\u0002",
    "\u0002()\u0007g\u0002\u0002)*\u0007\"\u0002\u0002*\n\u0003\u0002\u0002",
    "\u0002+,\u0007^\u0002\u0002,-\u0007R\u0002\u0002-.\u0007k\u0002\u0002",
    ".\f\u0003\u0002\u0002\u0002/0\u0007^\u0002\u000201\u0007V\u0002\u0002",
    "12\u0007j\u0002\u000223\u0007g\u0002\u000234\u0007p\u0002\u000245\u0007",
    "\"\u0002\u00025\u000e\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


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
Keywords.ELSE = 1;
Keywords.IF = 2;
Keywords.IFEND = 3;
Keywords.LOCATE = 4;
Keywords.PI = 5;
Keywords.THEN = 6;

Keywords.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Keywords.prototype.modeNames = [ "DEFAULT_MODE" ];

Keywords.prototype.literalNames = [ null, "'\\Else '", "'\\If '", "'\\IfEnd'", 
                                    "'\\Locate '", "'\\Pi'", "'\\Then '" ];

Keywords.prototype.symbolicNames = [ null, "ELSE", "IF", "IFEND", "LOCATE", 
                                     "PI", "THEN" ];

Keywords.prototype.ruleNames = [ "ELSE", "IF", "IFEND", "LOCATE", "PI", 
                                 "THEN" ];

Keywords.prototype.grammarFileName = "Keywords.g4";



exports.Keywords = Keywords;

