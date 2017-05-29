// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/DataStructs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DataStructsListener = require('./DataStructsListener').DataStructsListener;
var DataStructsVisitor = require('./DataStructsVisitor').DataStructsVisitor;

var grammarFileName = "DataStructs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00035\u001e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006\u001c\n\u0006\u0003\u0006\u0002\u0002\u0007",
    "\u0002\u0004\u0006\b\n\u0002\u0003\b\u0002\u0007\b\f\r\u0010\u0010\u001f",
    "\u001f-.11\u0002\u001a\u0002\f\u0003\u0002\u0002\u0002\u0004\u000e\u0003",
    "\u0002\u0002\u0002\u0006\u0011\u0003\u0002\u0002\u0002\b\u0013\u0003",
    "\u0002\u0002\u0002\n\u001b\u0003\u0002\u0002\u0002\f\r\t\u0002\u0002",
    "\u0002\r\u0003\u0003\u0002\u0002\u0002\u000e\u000f\u0007$\u0002\u0002",
    "\u000f\u0010\u0007\u0003\u0002\u0002\u0010\u0005\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0007\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007,\u0002\u0002\u0014\t\u0003\u0002\u0002\u0002\u0015",
    "\u001c\u0007\u0004\u0002\u0002\u0016\u0017\u0007\u0015\u0002\u0002\u0017",
    "\u001c\u0007\u0004\u0002\u0002\u0018\u0019\u0007\u0004\u0002\u0002\u0019",
    "\u001a\u0007\u0015\u0002\u0002\u001a\u001c\u0007\u0004\u0002\u0002\u001b",
    "\u0015\u0003\u0002\u0002\u0002\u001b\u0016\u0003\u0002\u0002\u0002\u001b",
    "\u0018\u0003\u0002\u0002\u0002\u001c\u000b\u0003\u0002\u0002\u0002\u0003",
    "\u001b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'\\Abs '", "'\\acos '", 
                     "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", 
                     "':'", "','", "'\\cos '", "']'", "')'", "'/'", "'\\Do'", 
                     "'.'", "'\\Else '", "'='", "'\\=>'", "'\\For '", "'\\>='", 
                     "'\\Getkey'", "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", 
                     "'\\<='", "'\\Locate '", "'\\LpWhile '", "'<'", "'\\Mat '", 
                     "'%'", "'*'", "'\\<>'", "'\\Next'", "'['", "'('", "'\\ Or '", 
                     "'\\Pi'", "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", 
                     "'\\tan '", "'\\Then '", "' \\To '", "'\\While '", 
                     "'\\WhileEnd'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ABS", "ACOS", 
                      "ADD", "AND", "ARROW", "ASIN", "ATAN", "COLON", "COMMA", 
                      "COS", "CBRA", "CPAR", "DIV", "DO", "DOT", "ELSE", 
                      "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GT", "IF", 
                      "IFEND", "INT", "LE", "LOCATE", "LOOPWHILE", "LT", 
                      "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OPAR", 
                      "OR", "PI", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", 
                      "TO", "WHILE", "WHILEEND" ];

var ruleNames =  [ "func", "matrix", "variable", "constant", "number" ];

function DataStructsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DataStructsParser.prototype = Object.create(antlr4.Parser.prototype);
DataStructsParser.prototype.constructor = DataStructsParser;

Object.defineProperty(DataStructsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DataStructsParser.EOF = antlr4.Token.EOF;
DataStructsParser.ID = 1;
DataStructsParser.UINT = 2;
DataStructsParser.STRING = 3;
DataStructsParser.NEWLINE = 4;
DataStructsParser.ABS = 5;
DataStructsParser.ACOS = 6;
DataStructsParser.ADD = 7;
DataStructsParser.AND = 8;
DataStructsParser.ARROW = 9;
DataStructsParser.ASIN = 10;
DataStructsParser.ATAN = 11;
DataStructsParser.COLON = 12;
DataStructsParser.COMMA = 13;
DataStructsParser.COS = 14;
DataStructsParser.CBRA = 15;
DataStructsParser.CPAR = 16;
DataStructsParser.DIV = 17;
DataStructsParser.DO = 18;
DataStructsParser.DOT = 19;
DataStructsParser.ELSE = 20;
DataStructsParser.EQ = 21;
DataStructsParser.FATARROW = 22;
DataStructsParser.FOR = 23;
DataStructsParser.GE = 24;
DataStructsParser.GETKEY = 25;
DataStructsParser.GT = 26;
DataStructsParser.IF = 27;
DataStructsParser.IFEND = 28;
DataStructsParser.INT = 29;
DataStructsParser.LE = 30;
DataStructsParser.LOCATE = 31;
DataStructsParser.LOOPWHILE = 32;
DataStructsParser.LT = 33;
DataStructsParser.MATRIX = 34;
DataStructsParser.REMAIN = 35;
DataStructsParser.MUL = 36;
DataStructsParser.NE = 37;
DataStructsParser.NEXT = 38;
DataStructsParser.OBRA = 39;
DataStructsParser.OPAR = 40;
DataStructsParser.OR = 41;
DataStructsParser.PI = 42;
DataStructsParser.SIN = 43;
DataStructsParser.SQRT = 44;
DataStructsParser.STEP = 45;
DataStructsParser.SUB = 46;
DataStructsParser.TAN = 47;
DataStructsParser.THEN = 48;
DataStructsParser.TO = 49;
DataStructsParser.WHILE = 50;
DataStructsParser.WHILEEND = 51;

DataStructsParser.RULE_func = 0;
DataStructsParser.RULE_matrix = 1;
DataStructsParser.RULE_variable = 2;
DataStructsParser.RULE_constant = 3;
DataStructsParser.RULE_number = 4;

function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(DataStructsParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(DataStructsParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(DataStructsParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(DataStructsParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(DataStructsParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(DataStructsParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(DataStructsParser.ATAN, 0);
};

FuncContext.prototype.ABS = function() {
    return this.getToken(DataStructsParser.ABS, 0);
};

FuncContext.prototype.INT = function() {
    return this.getToken(DataStructsParser.INT, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.FuncContext = FuncContext;

DataStructsParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DataStructsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DataStructsParser.ABS) | (1 << DataStructsParser.ACOS) | (1 << DataStructsParser.ASIN) | (1 << DataStructsParser.ATAN) | (1 << DataStructsParser.COS) | (1 << DataStructsParser.INT))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (DataStructsParser.SIN - 43)) | (1 << (DataStructsParser.SQRT - 43)) | (1 << (DataStructsParser.TAN - 43)))) !== 0))) {
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

function MatrixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function() {
    return this.getToken(DataStructsParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function() {
    return this.getToken(DataStructsParser.ID, 0);
};

MatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterMatrix(this);
	}
};

MatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitMatrix(this);
	}
};

MatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.MatrixContext = MatrixContext;

DataStructsParser.prototype.matrix = function() {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DataStructsParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(DataStructsParser.MATRIX);
        this.state = 13;
        this.match(DataStructsParser.ID);
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(DataStructsParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.VariableContext = VariableContext;

DataStructsParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DataStructsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.match(DataStructsParser.ID);
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

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(DataStructsParser.PI, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.ConstantContext = ConstantContext;

DataStructsParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DataStructsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(DataStructsParser.PI);
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

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DataStructsParser.UINT);
    } else {
        return this.getToken(DataStructsParser.UINT, i);
    }
};


NumberContext.prototype.DOT = function() {
    return this.getToken(DataStructsParser.DOT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.NumberContext = NumberContext;

DataStructsParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DataStructsParser.RULE_number);
    try {
        this.state = 25;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 19;
            this.match(DataStructsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 20;
            this.match(DataStructsParser.DOT);
            this.state = 21;
            this.match(DataStructsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 22;
            this.match(DataStructsParser.UINT);
            this.state = 23;
            this.match(DataStructsParser.DOT);
            this.state = 24;
            this.match(DataStructsParser.UINT);
            break;

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


exports.DataStructsParser = DataStructsParser;
