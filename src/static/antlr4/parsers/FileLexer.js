// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/File.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000ee\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0007\tO\n\t\f\t\u000e\tR\u000b",
    "\t\u0003\n\u0003\n\u0003\u000b\u0005\u000bW\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0007\f]\n\f\f\f\u000e\f`\u000b\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003^\u0002\u000e\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u0003\u0002\u0006\u0003\u0002C\\\u0003\u00023;\u0003",
    "\u00022;\u0006\u0002\"\"2;C\\c|\u0002g\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003\u001b\u0003\u0002\u0002",
    "\u0002\u0005\u001d\u0003\u0002\u0002\u0002\u0007\'\u0003\u0002\u0002",
    "\u0002\t)\u0003\u0002\u0002\u0002\u000b8\u0003\u0002\u0002\u0002\rE",
    "\u0003\u0002\u0002\u0002\u000fJ\u0003\u0002\u0002\u0002\u0011L\u0003",
    "\u0002\u0002\u0002\u0013S\u0003\u0002\u0002\u0002\u0015V\u0003\u0002",
    "\u0002\u0002\u0017Z\u0003\u0002\u0002\u0002\u0019c\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0007<\u0002\u0002\u001c\u0004\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0007H\u0002\u0002\u001e\u001f\u0007k\u0002\u0002",
    "\u001f \u0007n\u0002\u0002 !\u0007g\u0002\u0002!\"\u0007\"\u0002\u0002",
    "\"#\u0007P\u0002\u0002#$\u0007c\u0002\u0002$%\u0007o\u0002\u0002%&\u0007",
    "g\u0002\u0002&\u0006\u0003\u0002\u0002\u0002\'(\u0007/\u0002\u0002(",
    "\b\u0003\u0002\u0002\u0002)*\u0007\'\u0002\u0002*+\u0007J\u0002\u0002",
    "+,\u0007g\u0002\u0002,-\u0007c\u0002\u0002-.\u0007f\u0002\u0002./\u0007",
    "g\u0002\u0002/0\u0007t\u0002\u000201\u0007\"\u0002\u000212\u0007T\u0002",
    "\u000223\u0007g\u0002\u000234\u0007e\u0002\u000245\u0007q\u0002\u0002",
    "56\u0007t\u0002\u000267\u0007f\u0002\u00027\n\u0003\u0002\u0002\u0002",
    "89\u0007\'\u0002\u00029:\u0007F\u0002\u0002:;\u0007c\u0002\u0002;<\u0007",
    "v\u0002\u0002<=\u0007c\u0002\u0002=>\u0007\"\u0002\u0002>?\u0007T\u0002",
    "\u0002?@\u0007g\u0002\u0002@A\u0007e\u0002\u0002AB\u0007q\u0002\u0002",
    "BC\u0007t\u0002\u0002CD\u0007f\u0002\u0002D\f\u0003\u0002\u0002\u0002",
    "EF\u0007\'\u0002\u0002FG\u0007G\u0002\u0002GH\u0007p\u0002\u0002HI\u0007",
    "f\u0002\u0002I\u000e\u0003\u0002\u0002\u0002JK\t\u0002\u0002\u0002K",
    "\u0010\u0003\u0002\u0002\u0002LP\t\u0003\u0002\u0002MO\t\u0004\u0002",
    "\u0002NM\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002",
    "\u0002\u0002PQ\u0003\u0002\u0002\u0002Q\u0012\u0003\u0002\u0002\u0002",
    "RP\u0003\u0002\u0002\u0002ST\t\u0005\u0002\u0002T\u0014\u0003\u0002",
    "\u0002\u0002UW\u0007\u000f\u0002\u0002VU\u0003\u0002\u0002\u0002VW\u0003",
    "\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0007\f\u0002\u0002Y",
    "\u0016\u0003\u0002\u0002\u0002Z^\u0007$\u0002\u0002[]\u000b\u0002\u0002",
    "\u0002\\[\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^_\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_a\u0003\u0002\u0002\u0002",
    "`^\u0003\u0002\u0002\u0002ab\u0007$\u0002\u0002b\u0018\u0003\u0002\u0002",
    "\u0002cd\u00072\u0002\u0002d\u001a\u0003\u0002\u0002\u0002\u0006\u0002",
    "PV^\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FileLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FileLexer.prototype = Object.create(antlr4.Lexer.prototype);
FileLexer.prototype.constructor = FileLexer;

FileLexer.EOF = antlr4.Token.EOF;
FileLexer.T__0 = 1;
FileLexer.T__1 = 2;
FileLexer.T__2 = 3;
FileLexer.T__3 = 4;
FileLexer.T__4 = 5;
FileLexer.T__5 = 6;
FileLexer.ID = 7;
FileLexer.NATNUM = 8;
FileLexer.TEXT = 9;
FileLexer.NEWLINE = 10;
FileLexer.STRING = 11;
FileLexer.ZERO = 12;

FileLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FileLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FileLexer.prototype.literalNames = [ null, "':'", "'File Name'", "'-'", 
                                     "'%Header Record'", "'%Data Record'", 
                                     "'%End'", null, null, null, null, null, 
                                     "'0'" ];

FileLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, "ID", "NATNUM", "TEXT", "NEWLINE", 
                                      "STRING", "ZERO" ];

FileLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "ID", "NATNUM", "TEXT", "NEWLINE", 
                                  "STRING", "ZERO" ];

FileLexer.prototype.grammarFileName = "File.g4";



exports.FileLexer = FileLexer;

