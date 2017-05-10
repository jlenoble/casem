// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007\u0019\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\u0003\u0002",
    "\u0002\u0002\u0018\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003\r\u0003",
    "\u0002\u0002\u0002\u0005\u000f\u0003\u0002\u0002\u0002\u0007\u0011\u0003",
    "\u0002\u0002\u0002\t\u0013\u0003\u0002\u0002\u0002\u000b\u0015\u0003",
    "\u0002\u0002\u0002\r\u000e\u0007-\u0002\u0002\u000e\u0004\u0003\u0002",
    "\u0002\u0002\u000f\u0010\u0007/\u0002\u0002\u0010\u0006\u0003\u0002",
    "\u0002\u0002\u0011\u0012\u0007,\u0002\u0002\u0012\b\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u00071\u0002\u0002\u0014\n\u0003\u0002\u0002\u0002",
    "\u0015\u0016\u0007^\u0002\u0002\u0016\u0017\u0007/\u0002\u0002\u0017",
    "\u0018\u0007@\u0002\u0002\u0018\f\u0003\u0002\u0002\u0002\u0003\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function OperatorsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

OperatorsLexer.prototype = Object.create(antlr4.Lexer.prototype);
OperatorsLexer.prototype.constructor = OperatorsLexer;

OperatorsLexer.EOF = antlr4.Token.EOF;
OperatorsLexer.ADD = 1;
OperatorsLexer.SUB = 2;
OperatorsLexer.MUL = 3;
OperatorsLexer.DIV = 4;
OperatorsLexer.ARROW = 5;

OperatorsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

OperatorsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

OperatorsLexer.prototype.literalNames = [ null, "'+'", "'-'", "'*'", "'/'", 
                                          "'\\->'" ];

OperatorsLexer.prototype.symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", 
                                           "ARROW" ];

OperatorsLexer.prototype.ruleNames = [ "ADD", "SUB", "MUL", "DIV", "ARROW" ];

OperatorsLexer.prototype.grammarFileName = "Operators.g4";



exports.OperatorsLexer = OperatorsLexer;

