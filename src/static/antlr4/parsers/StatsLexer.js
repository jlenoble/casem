// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\nB\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0007\u0006&\n\u0006\f\u0006\u000e\u0006)\u000b",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007.\n\u0007\f\u0007",
    "\u000e\u00071\u000b\u0007\u0005\u00073\n\u0007\u0003\b\u0003\b\u0007",
    "\b7\n\b\f\b\u000e\b:\u000b\b\u0003\b\u0003\b\u0003\t\u0005\t?\n\t\u0003",
    "\t\u0003\t\u00038\u0002\n\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0003\u0002\u0006\u0004\u0002C\\c|",
    "\u0005\u00022;C\\c|\u0003\u00023;\u0003\u00022;\u0002F\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003",
    "\u0002\u0002\u0002\u0005\u0017\u0003\u0002\u0002\u0002\u0007\u001f\u0003",
    "\u0002\u0002\u0002\t!\u0003\u0002\u0002\u0002\u000b#\u0003\u0002\u0002",
    "\u0002\r2\u0003\u0002\u0002\u0002\u000f4\u0003\u0002\u0002\u0002\u0011",
    ">\u0003\u0002\u0002\u0002\u0013\u0014\u0007^\u0002\u0002\u0014\u0015",
    "\u0007/\u0002\u0002\u0015\u0016\u0007@\u0002\u0002\u0016\u0004\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0007^\u0002\u0002\u0018\u0019\u0007",
    "I\u0002\u0002\u0019\u001a\u0007g\u0002\u0002\u001a\u001b\u0007v\u0002",
    "\u0002\u001b\u001c\u0007m\u0002\u0002\u001c\u001d\u0007g\u0002\u0002",
    "\u001d\u001e\u0007{\u0002\u0002\u001e\u0006\u0003\u0002\u0002\u0002",
    "\u001f \u0007<\u0002\u0002 \b\u0003\u0002\u0002\u0002!\"\u0007?\u0002",
    "\u0002\"\n\u0003\u0002\u0002\u0002#\'\t\u0002\u0002\u0002$&\t\u0003",
    "\u0002\u0002%$\u0003\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002\'%",
    "\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(\f\u0003\u0002\u0002",
    "\u0002)\'\u0003\u0002\u0002\u0002*3\u00072\u0002\u0002+/\t\u0004\u0002",
    "\u0002,.\t\u0005\u0002\u0002-,\u0003\u0002\u0002\u0002.1\u0003\u0002",
    "\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u00022*\u0003\u0002\u0002\u0002",
    "2+\u0003\u0002\u0002\u00023\u000e\u0003\u0002\u0002\u000248\u0007$\u0002",
    "\u000257\u000b\u0002\u0002\u000265\u0003\u0002\u0002\u00027:\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029;\u0003",
    "\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;<\u0007$\u0002\u0002<\u0010",
    "\u0003\u0002\u0002\u0002=?\u0007\u000f\u0002\u0002>=\u0003\u0002\u0002",
    "\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0007\f",
    "\u0002\u0002A\u0012\u0003\u0002\u0002\u0002\b\u0002\'/28>\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function StatsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

StatsLexer.prototype = Object.create(antlr4.Lexer.prototype);
StatsLexer.prototype.constructor = StatsLexer;

StatsLexer.EOF = antlr4.Token.EOF;
StatsLexer.T__0 = 1;
StatsLexer.T__1 = 2;
StatsLexer.T__2 = 3;
StatsLexer.T__3 = 4;
StatsLexer.ID = 5;
StatsLexer.UINT = 6;
StatsLexer.STRING = 7;
StatsLexer.NEWLINE = 8;

StatsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

StatsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

StatsLexer.prototype.literalNames = [ null, "'\\->'", "'\\Getkey'", "':'", 
                                      "'='" ];

StatsLexer.prototype.symbolicNames = [ null, null, null, null, null, "ID", 
                                       "UINT", "STRING", "NEWLINE" ];

StatsLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ID", 
                                   "UINT", "STRING", "NEWLINE" ];

StatsLexer.prototype.grammarFileName = "Stats.g4";



exports.StatsLexer = StatsLexer;

