// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/DataStructs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0013w\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0007\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u00030\n\u0003\f\u0003\u000e\u00033\u000b\u0003",
    "\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0007\u00049\n\u0004\f",
    "\u0004\u000e\u0004<\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0005\u0005A\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003:\u0002",
    "\u0013\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013\u0003\u0002\u0006\u0004\u0002C\\c|",
    "\u0005\u00022;C\\c|\u0003\u00023;\u0003\u00022;\u0002{\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0003%\u0003\u0002\u0002\u0002\u00054\u0003\u0002\u0002",
    "\u0002\u00076\u0003\u0002\u0002\u0002\t@\u0003\u0002\u0002\u0002\u000b",
    "D\u0003\u0002\u0002\u0002\rF\u0003\u0002\u0002\u0002\u000fJ\u0003\u0002",
    "\u0002\u0002\u0011L\u0003\u0002\u0002\u0002\u0013N\u0003\u0002\u0002",
    "\u0002\u0015P\u0003\u0002\u0002\u0002\u0017T\u0003\u0002\u0002\u0002",
    "\u0019V\u0003\u0002\u0002\u0002\u001bX\u0003\u0002\u0002\u0002\u001d",
    "`\u0003\u0002\u0002\u0002\u001fi\u0003\u0002\u0002\u0002!s\u0003\u0002",
    "\u0002\u0002#u\u0003\u0002\u0002\u0002%)\t\u0002\u0002\u0002&(\t\u0003",
    "\u0002\u0002\'&\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'",
    "\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0004\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002,5\u00072\u0002\u0002-1\t\u0004",
    "\u0002\u0002.0\t\u0005\u0002\u0002/.\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "25\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u00024,\u0003\u0002\u0002",
    "\u00024-\u0003\u0002\u0002\u00025\u0006\u0003\u0002\u0002\u00026:\u0007",
    "$\u0002\u000279\u000b\u0002\u0002\u000287\u0003\u0002\u0002\u00029<",
    "\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002",
    "\u0002;=\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=>\u0007$",
    "\u0002\u0002>\b\u0003\u0002\u0002\u0002?A\u0007\u000f\u0002\u0002@?",
    "\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002",
    "\u0002BC\u0007\f\u0002\u0002C\n\u0003\u0002\u0002\u0002DE\u0007-\u0002",
    "\u0002E\f\u0003\u0002\u0002\u0002FG\u0007^\u0002\u0002GH\u0007/\u0002",
    "\u0002HI\u0007@\u0002\u0002I\u000e\u0003\u0002\u0002\u0002JK\u0007<",
    "\u0002\u0002K\u0010\u0003\u0002\u0002\u0002LM\u0007.\u0002\u0002M\u0012",
    "\u0003\u0002\u0002\u0002NO\u00071\u0002\u0002O\u0014\u0003\u0002\u0002",
    "\u0002PQ\u0007^\u0002\u0002QR\u0007F\u0002\u0002RS\u0007q\u0002\u0002",
    "S\u0016\u0003\u0002\u0002\u0002TU\u00070\u0002\u0002U\u0018\u0003\u0002",
    "\u0002\u0002VW\u0007?\u0002\u0002W\u001a\u0003\u0002\u0002\u0002XY\u0007",
    "^\u0002\u0002YZ\u0007I\u0002\u0002Z[\u0007g\u0002\u0002[\\\u0007v\u0002",
    "\u0002\\]\u0007m\u0002\u0002]^\u0007g\u0002\u0002^_\u0007{\u0002\u0002",
    "_\u001c\u0003\u0002\u0002\u0002`a\u0007^\u0002\u0002ab\u0007N\u0002",
    "\u0002bc\u0007q\u0002\u0002cd\u0007e\u0002\u0002de\u0007c\u0002\u0002",
    "ef\u0007v\u0002\u0002fg\u0007g\u0002\u0002gh\u0007\"\u0002\u0002h\u001e",
    "\u0003\u0002\u0002\u0002ij\u0007^\u0002\u0002jk\u0007N\u0002\u0002k",
    "l\u0007r\u0002\u0002lm\u0007Y\u0002\u0002mn\u0007j\u0002\u0002no\u0007",
    "k\u0002\u0002op\u0007n\u0002\u0002pq\u0007g\u0002\u0002qr\u0007\"\u0002",
    "\u0002r \u0003\u0002\u0002\u0002st\u0007,\u0002\u0002t\"\u0003\u0002",
    "\u0002\u0002uv\u0007/\u0002\u0002v$\u0003\u0002\u0002\u0002\b\u0002",
    ")14:@\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function DataStructsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

DataStructsLexer.prototype = Object.create(antlr4.Lexer.prototype);
DataStructsLexer.prototype.constructor = DataStructsLexer;

DataStructsLexer.EOF = antlr4.Token.EOF;
DataStructsLexer.ID = 1;
DataStructsLexer.UINT = 2;
DataStructsLexer.STRING = 3;
DataStructsLexer.NEWLINE = 4;
DataStructsLexer.ADD = 5;
DataStructsLexer.ARROW = 6;
DataStructsLexer.COLON = 7;
DataStructsLexer.COMMA = 8;
DataStructsLexer.DIV = 9;
DataStructsLexer.DO = 10;
DataStructsLexer.DOT = 11;
DataStructsLexer.EQUAL = 12;
DataStructsLexer.GETKEY = 13;
DataStructsLexer.LOCATE = 14;
DataStructsLexer.LOOPWHILE = 15;
DataStructsLexer.MUL = 16;
DataStructsLexer.SUB = 17;

DataStructsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

DataStructsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

DataStructsLexer.prototype.literalNames = [ null, null, null, null, null, 
                                            "'+'", "'\\->'", "':'", "','", 
                                            "'/'", "'\\Do'", "'.'", "'='", 
                                            "'\\Getkey'", "'\\Locate '", 
                                            "'\\LpWhile '", "'*'", "'-'" ];

DataStructsLexer.prototype.symbolicNames = [ null, "ID", "UINT", "STRING", 
                                             "NEWLINE", "ADD", "ARROW", 
                                             "COLON", "COMMA", "DIV", "DO", 
                                             "DOT", "EQUAL", "GETKEY", "LOCATE", 
                                             "LOOPWHILE", "MUL", "SUB" ];

DataStructsLexer.prototype.ruleNames = [ "ID", "UINT", "STRING", "NEWLINE", 
                                         "ADD", "ARROW", "COLON", "COMMA", 
                                         "DIV", "DO", "DOT", "EQUAL", "GETKEY", 
                                         "LOCATE", "LOOPWHILE", "MUL", "SUB" ];

DataStructsLexer.prototype.grammarFileName = "DataStructs.g4";



exports.DataStructsLexer = DataStructsLexer;

