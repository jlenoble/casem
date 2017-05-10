// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Keywords.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0004\u0014\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0002\u0002\u0004\u0003\u0003\u0005\u0004\u0003\u0002\u0002\u0002",
    "\u0013\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0003\u0007\u0003\u0002\u0002\u0002\u0005\u0010\u0003\u0002\u0002",
    "\u0002\u0007\b\u0007^\u0002\u0002\b\t\u0007N\u0002\u0002\t\n\u0007q",
    "\u0002\u0002\n\u000b\u0007e\u0002\u0002\u000b\f\u0007c\u0002\u0002\f",
    "\r\u0007v\u0002\u0002\r\u000e\u0007g\u0002\u0002\u000e\u000f\u0007\"",
    "\u0002\u0002\u000f\u0004\u0003\u0002\u0002\u0002\u0010\u0011\u0007^",
    "\u0002\u0002\u0011\u0012\u0007R\u0002\u0002\u0012\u0013\u0007k\u0002",
    "\u0002\u0013\u0006\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


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
Keywords.LOCATE = 1;
Keywords.PI = 2;

Keywords.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Keywords.prototype.modeNames = [ "DEFAULT_MODE" ];

Keywords.prototype.literalNames = [ null, "'\\Locate '", "'\\Pi'" ];

Keywords.prototype.symbolicNames = [ null, "LOCATE", "PI" ];

Keywords.prototype.ruleNames = [ "LOCATE", "PI" ];

Keywords.prototype.grammarFileName = "Keywords.g4";



exports.Keywords = Keywords;

