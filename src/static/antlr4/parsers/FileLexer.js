// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/File.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010|\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tZ\n",
    "\t\u0003\n\u0003\n\u0007\n^\n\n\f\n\u000e\na\u000b\n\u0003\u000b\u0006",
    "\u000bd\n\u000b\r\u000b\u000e\u000be\u0003\f\u0006\fi\n\f\r\f\u000e",
    "\fj\u0003\r\u0005\rn\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0007",
    "\u000et\n\u000e\f\u000e\u000e\u000ew\u000b\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003u\u0002\u0010\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u0003\u0002\u0007\u0003",
    "\u0002C\\\u0003\u00023;\u0003\u00022;\u0004\u0002C\\c|\u0004\u0002\u000b",
    "\u000b\"\"\u0002\u0082\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0003\u001f\u0003\u0002\u0002\u0002\u0005!",
    "\u0003\u0002\u0002\u0002\u0007+\u0003\u0002\u0002\u0002\t-\u0003\u0002",
    "\u0002\u0002\u000b/\u0003\u0002\u0002\u0002\r>\u0003\u0002\u0002\u0002",
    "\u000fK\u0003\u0002\u0002\u0002\u0011Y\u0003\u0002\u0002\u0002\u0013",
    "[\u0003\u0002\u0002\u0002\u0015c\u0003\u0002\u0002\u0002\u0017h\u0003",
    "\u0002\u0002\u0002\u0019m\u0003\u0002\u0002\u0002\u001bq\u0003\u0002",
    "\u0002\u0002\u001dz\u0003\u0002\u0002\u0002\u001f \u0007<\u0002\u0002",
    " \u0004\u0003\u0002\u0002\u0002!\"\u0007H\u0002\u0002\"#\u0007k\u0002",
    "\u0002#$\u0007n\u0002\u0002$%\u0007g\u0002\u0002%&\u0007\"\u0002\u0002",
    "&\'\u0007P\u0002\u0002\'(\u0007c\u0002\u0002()\u0007o\u0002\u0002)*",
    "\u0007g\u0002\u0002*\u0006\u0003\u0002\u0002\u0002+,\u0007/\u0002\u0002",
    ",\b\u0003\u0002\u0002\u0002-.\u0007-\u0002\u0002.\n\u0003\u0002\u0002",
    "\u0002/0\u0007\'\u0002\u000201\u0007J\u0002\u000212\u0007g\u0002\u0002",
    "23\u0007c\u0002\u000234\u0007f\u0002\u000245\u0007g\u0002\u000256\u0007",
    "t\u0002\u000267\u0007\"\u0002\u000278\u0007T\u0002\u000289\u0007g\u0002",
    "\u00029:\u0007e\u0002\u0002:;\u0007q\u0002\u0002;<\u0007t\u0002\u0002",
    "<=\u0007f\u0002\u0002=\f\u0003\u0002\u0002\u0002>?\u0007\'\u0002\u0002",
    "?@\u0007F\u0002\u0002@A\u0007c\u0002\u0002AB\u0007v\u0002\u0002BC\u0007",
    "c\u0002\u0002CD\u0007\"\u0002\u0002DE\u0007T\u0002\u0002EF\u0007g\u0002",
    "\u0002FG\u0007e\u0002\u0002GH\u0007q\u0002\u0002HI\u0007t\u0002\u0002",
    "IJ\u0007f\u0002\u0002J\u000e\u0003\u0002\u0002\u0002KL\u0007\'\u0002",
    "\u0002LM\u0007G\u0002\u0002MN\u0007p\u0002\u0002NO\u0007f\u0002\u0002",
    "O\u0010\u0003\u0002\u0002\u0002PZ\t\u0002\u0002\u0002QR\u0007^\u0002",
    "\u0002RZ\u0007t\u0002\u0002ST\u0007^\u0002\u0002TU\u0007v\u0002\u0002",
    "UV\u0007j\u0002\u0002VW\u0007g\u0002\u0002WX\u0007v\u0002\u0002XZ\u0007",
    "c\u0002\u0002YP\u0003\u0002\u0002\u0002YQ\u0003\u0002\u0002\u0002YS",
    "\u0003\u0002\u0002\u0002Z\u0012\u0003\u0002\u0002\u0002[_\t\u0003\u0002",
    "\u0002\\^\t\u0004\u0002\u0002]\\\u0003\u0002\u0002\u0002^a\u0003\u0002",
    "\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`\u0014",
    "\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002bd\t\u0005\u0002\u0002",
    "cb\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002",
    "\u0002ef\u0003\u0002\u0002\u0002f\u0016\u0003\u0002\u0002\u0002gi\t",
    "\u0006\u0002\u0002hg\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002",
    "jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002k\u0018\u0003\u0002",
    "\u0002\u0002ln\u0007\u000f\u0002\u0002ml\u0003\u0002\u0002\u0002mn\u0003",
    "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0007\f\u0002\u0002p",
    "\u001a\u0003\u0002\u0002\u0002qu\u0007$\u0002\u0002rt\u000b\u0002\u0002",
    "\u0002sr\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002us\u0003\u0002\u0002\u0002vx\u0003\u0002\u0002\u0002wu\u0003",
    "\u0002\u0002\u0002xy\u0007$\u0002\u0002y\u001c\u0003\u0002\u0002\u0002",
    "z{\u00072\u0002\u0002{\u001e\u0003\u0002\u0002\u0002\t\u0002Y_ejmu\u0002"].join("");


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
FileLexer.T__6 = 7;
FileLexer.ID = 8;
FileLexer.NATNUM = 9;
FileLexer.TEXT = 10;
FileLexer.WS = 11;
FileLexer.NEWLINE = 12;
FileLexer.STRING = 13;
FileLexer.ZERO = 14;

FileLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FileLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FileLexer.prototype.literalNames = [ null, "':'", "'File Name'", "'-'", 
                                     "'+'", "'%Header Record'", "'%Data Record'", 
                                     "'%End'", null, null, null, null, null, 
                                     null, "'0'" ];

FileLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, "ID", "NATNUM", "TEXT", 
                                      "WS", "NEWLINE", "STRING", "ZERO" ];

FileLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "ID", "NATNUM", "TEXT", 
                                  "WS", "NEWLINE", "STRING", "ZERO" ];

FileLexer.prototype.grammarFileName = "File.g4";



exports.FileLexer = FileLexer;

