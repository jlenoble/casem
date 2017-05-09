// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var OperatorsListener = require('./OperatorsListener').OperatorsListener;
var OperatorsVisitor = require('./OperatorsVisitor').OperatorsVisitor;

var grammarFileName = "Operators.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003B\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0002\u0002\u0003\u0003\u0002\u0007\f\u0002\u0005",
    "\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\t\u0002\u0002\u0002",
    "\u0005\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'='", "'\\<>'", 
                     "'>'", "'\\>='", "'<'", "'\\<='", "'\\ And '", "'\\ Or '", 
                     "'\\->'", "'\\=>'", "'\\Goto'", "'\\Lbl'", "'\\Prog'", 
                     "'\\Return'", "'\\Stop'", "'\\If'", "'\\Then'", "'\\Else'", 
                     "'\\IfEnd'", "'\\For'", "'\\To'", "'\\Next'", "'\\Do'", 
                     "'\\LpWhile'", "'\\Getkey'", "'\\Locate'", "'\\ClrText'", 
                     "'\\Disp'", "'\\Norm'", "'\\Gra'", "'\\Fix'", "'\\ClrGraph'", 
                     "'\\ViewWindow'", "'\\AxesOn'", "'\\AxesOff'", "'\\F-Line'", 
                     "'\\PlotOn'", "'\\Mat '", "'\\List '", "'\\List->Mat'", 
                     "'\\Seq'", "'\\Pi'", "'\\Ans'", "'\\Abs '", "'\\acos '", 
                     "'\\asin '", "'\\atan '", "'\\cos '", "'\\Int '", "'\\sin '", 
                     "'\\sqrt'", "'\\tan '", "'\\10^x'", "'!'", null, null, 
                     null, null, "'?'" ];

var symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", "EQ", "NE", "GT", 
                      "GE", "LT", "LE", "AND", "OR", "ARROW", "FATARROW", 
                      "GOTO", "LBL", "PROG", "RETURN", "STOP", "IF", "THEN", 
                      "ELSE", "IFEND", "FOR", "TO", "NEXT", "DO", "LPWHILE", 
                      "GETKEY", "LOCATE", "CLRTXT", "DISP", "NORM", "GRA", 
                      "FIX", "CLRGRPH", "VIEWWINDOW", "AXESON", "AXESOFF", 
                      "FLINE", "PLOTON", "MATR", "LIST", "LISTMAT", "SEQ", 
                      "PI", "ANS", "ABS", "ACOS", "ASIN", "ATAN", "COS", 
                      "INT", "SIN", "SQRT", "TAN", "EXPNT", "FACT", "POW", 
                      "ID", "NUM", "STRING", "QUESMARK", "NEWLINE" ];

var ruleNames =  [ "boolOp" ];

function OperatorsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

OperatorsParser.prototype = Object.create(antlr4.Parser.prototype);
OperatorsParser.prototype.constructor = OperatorsParser;

Object.defineProperty(OperatorsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

OperatorsParser.EOF = antlr4.Token.EOF;
OperatorsParser.ADD = 1;
OperatorsParser.SUB = 2;
OperatorsParser.MUL = 3;
OperatorsParser.DIV = 4;
OperatorsParser.EQ = 5;
OperatorsParser.NE = 6;
OperatorsParser.GT = 7;
OperatorsParser.GE = 8;
OperatorsParser.LT = 9;
OperatorsParser.LE = 10;
OperatorsParser.AND = 11;
OperatorsParser.OR = 12;
OperatorsParser.ARROW = 13;
OperatorsParser.FATARROW = 14;
OperatorsParser.GOTO = 15;
OperatorsParser.LBL = 16;
OperatorsParser.PROG = 17;
OperatorsParser.RETURN = 18;
OperatorsParser.STOP = 19;
OperatorsParser.IF = 20;
OperatorsParser.THEN = 21;
OperatorsParser.ELSE = 22;
OperatorsParser.IFEND = 23;
OperatorsParser.FOR = 24;
OperatorsParser.TO = 25;
OperatorsParser.NEXT = 26;
OperatorsParser.DO = 27;
OperatorsParser.LPWHILE = 28;
OperatorsParser.GETKEY = 29;
OperatorsParser.LOCATE = 30;
OperatorsParser.CLRTXT = 31;
OperatorsParser.DISP = 32;
OperatorsParser.NORM = 33;
OperatorsParser.GRA = 34;
OperatorsParser.FIX = 35;
OperatorsParser.CLRGRPH = 36;
OperatorsParser.VIEWWINDOW = 37;
OperatorsParser.AXESON = 38;
OperatorsParser.AXESOFF = 39;
OperatorsParser.FLINE = 40;
OperatorsParser.PLOTON = 41;
OperatorsParser.MATR = 42;
OperatorsParser.LIST = 43;
OperatorsParser.LISTMAT = 44;
OperatorsParser.SEQ = 45;
OperatorsParser.PI = 46;
OperatorsParser.ANS = 47;
OperatorsParser.ABS = 48;
OperatorsParser.ACOS = 49;
OperatorsParser.ASIN = 50;
OperatorsParser.ATAN = 51;
OperatorsParser.COS = 52;
OperatorsParser.INT = 53;
OperatorsParser.SIN = 54;
OperatorsParser.SQRT = 55;
OperatorsParser.TAN = 56;
OperatorsParser.EXPNT = 57;
OperatorsParser.FACT = 58;
OperatorsParser.POW = 59;
OperatorsParser.ID = 60;
OperatorsParser.NUM = 61;
OperatorsParser.STRING = 62;
OperatorsParser.QUESMARK = 63;
OperatorsParser.NEWLINE = 64;

OperatorsParser.RULE_boolOp = 0;

function BoolOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OperatorsParser.RULE_boolOp;
    return this;
}

BoolOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOpContext.prototype.constructor = BoolOpContext;

BoolOpContext.prototype.EQ = function() {
    return this.getToken(OperatorsParser.EQ, 0);
};

BoolOpContext.prototype.NE = function() {
    return this.getToken(OperatorsParser.NE, 0);
};

BoolOpContext.prototype.GT = function() {
    return this.getToken(OperatorsParser.GT, 0);
};

BoolOpContext.prototype.GE = function() {
    return this.getToken(OperatorsParser.GE, 0);
};

BoolOpContext.prototype.LT = function() {
    return this.getToken(OperatorsParser.LT, 0);
};

BoolOpContext.prototype.LE = function() {
    return this.getToken(OperatorsParser.LE, 0);
};

BoolOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.enterBoolOp(this);
	}
};

BoolOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.exitBoolOp(this);
	}
};

BoolOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof OperatorsVisitor ) {
        return visitor.visitBoolOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




OperatorsParser.BoolOpContext = BoolOpContext;

OperatorsParser.prototype.boolOp = function() {

    var localctx = new BoolOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, OperatorsParser.RULE_boolOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << OperatorsParser.EQ) | (1 << OperatorsParser.NE) | (1 << OperatorsParser.GT) | (1 << OperatorsParser.GE) | (1 << OperatorsParser.LT) | (1 << OperatorsParser.LE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.OperatorsParser = OperatorsParser;
