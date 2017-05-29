// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/DataStructs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DataStructsListener = require('./DataStructsListener').DataStructsListener;
var DataStructsVisitor = require('./DataStructsVisitor').DataStructsVisitor;

var grammarFileName = "DataStructs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003<#\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "!\n\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003",
    "\b\u0002\u0007\b\f\r\u0013\u0013\"\"4588\u0002\u001e\u0002\u000e\u0003",
    "\u0002\u0002\u0002\u0004\u0010\u0003\u0002\u0002\u0002\u0006\u0013\u0003",
    "\u0002\u0002\u0002\b\u0016\u0003\u0002\u0002\u0002\n\u0018\u0003\u0002",
    "\u0002\u0002\f \u0003\u0002\u0002\u0002\u000e\u000f\t\u0002\u0002\u0002",
    "\u000f\u0003\u0003\u0002\u0002\u0002\u0010\u0011\u0007)\u0002\u0002",
    "\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0005\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007%\u0002\u0002\u0014\u0015\u0007\u0004\u0002\u0002",
    "\u0015\u0007\u0003\u0002\u0002\u0002\u0016\u0017\u0007\u0003\u0002\u0002",
    "\u0017\t\u0003\u0002\u0002\u0002\u0018\u0019\u00072\u0002\u0002\u0019",
    "\u000b\u0003\u0002\u0002\u0002\u001a!\u0007\u0004\u0002\u0002\u001b",
    "\u001c\u0007\u0017\u0002\u0002\u001c!\u0007\u0004\u0002\u0002\u001d",
    "\u001e\u0007\u0004\u0002\u0002\u001e\u001f\u0007\u0017\u0002\u0002\u001f",
    "!\u0007\u0004\u0002\u0002 \u001a\u0003\u0002\u0002\u0002 \u001b\u0003",
    "\u0002\u0002\u0002 \u001d\u0003\u0002\u0002\u0002!\r\u0003\u0002\u0002",
    "\u0002\u0003 "].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'\\Abs '", "'\\acos '", 
                     "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", 
                     "']'", "'}'", "'\\ClrText'", "':'", "','", "'\\cos '", 
                     "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", "'='", 
                     "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", "'\\Goto'", 
                     "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\Lbl '", 
                     "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", 
                     "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", 
                     "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\Prog '", 
                     "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", 
                     "'\\Then '", "' \\To '", "'\\While '", "'\\WhileEnd'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ABS", "ACOS", 
                      "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", 
                      "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", 
                      "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", 
                      "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", 
                      "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", 
                      "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", 
                      "OR", "PI", "PROG", "SIN", "SQRT", "STEP", "SUB", 
                      "TAN", "THEN", "TO", "WHILE", "WHILEEND" ];

var ruleNames =  [ "func", "matrix", "list", "variable", "constant", "number" ];

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
DataStructsParser.CBRA = 12;
DataStructsParser.CCUR = 13;
DataStructsParser.CLRTEXT = 14;
DataStructsParser.COLON = 15;
DataStructsParser.COMMA = 16;
DataStructsParser.COS = 17;
DataStructsParser.CPAR = 18;
DataStructsParser.DIV = 19;
DataStructsParser.DO = 20;
DataStructsParser.DOT = 21;
DataStructsParser.ELSE = 22;
DataStructsParser.EQ = 23;
DataStructsParser.FATARROW = 24;
DataStructsParser.FOR = 25;
DataStructsParser.GE = 26;
DataStructsParser.GETKEY = 27;
DataStructsParser.GOTO = 28;
DataStructsParser.GT = 29;
DataStructsParser.IF = 30;
DataStructsParser.IFEND = 31;
DataStructsParser.INT = 32;
DataStructsParser.LBL = 33;
DataStructsParser.LE = 34;
DataStructsParser.LIST = 35;
DataStructsParser.LOCATE = 36;
DataStructsParser.LOOPWHILE = 37;
DataStructsParser.LT = 38;
DataStructsParser.MATRIX = 39;
DataStructsParser.REMAIN = 40;
DataStructsParser.MUL = 41;
DataStructsParser.NE = 42;
DataStructsParser.NEXT = 43;
DataStructsParser.OBRA = 44;
DataStructsParser.OCUR = 45;
DataStructsParser.OPAR = 46;
DataStructsParser.OR = 47;
DataStructsParser.PI = 48;
DataStructsParser.PROG = 49;
DataStructsParser.SIN = 50;
DataStructsParser.SQRT = 51;
DataStructsParser.STEP = 52;
DataStructsParser.SUB = 53;
DataStructsParser.TAN = 54;
DataStructsParser.THEN = 55;
DataStructsParser.TO = 56;
DataStructsParser.WHILE = 57;
DataStructsParser.WHILEEND = 58;

DataStructsParser.RULE_func = 0;
DataStructsParser.RULE_matrix = 1;
DataStructsParser.RULE_list = 2;
DataStructsParser.RULE_variable = 3;
DataStructsParser.RULE_constant = 4;
DataStructsParser.RULE_number = 5;

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
        this.state = 12;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DataStructsParser.ABS) | (1 << DataStructsParser.ACOS) | (1 << DataStructsParser.ASIN) | (1 << DataStructsParser.ATAN) | (1 << DataStructsParser.COS))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DataStructsParser.INT - 32)) | (1 << (DataStructsParser.SIN - 32)) | (1 << (DataStructsParser.SQRT - 32)) | (1 << (DataStructsParser.TAN - 32)))) !== 0))) {
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
        this.state = 14;
        this.match(DataStructsParser.MATRIX);
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

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function() {
    return this.getToken(DataStructsParser.LIST, 0);
};

ListContext.prototype.UINT = function() {
    return this.getToken(DataStructsParser.UINT, 0);
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.ListContext = ListContext;

DataStructsParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DataStructsParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(DataStructsParser.LIST);
        this.state = 18;
        this.match(DataStructsParser.UINT);
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
    this.enterRule(localctx, 6, DataStructsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
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
    this.enterRule(localctx, 8, DataStructsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
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
    this.enterRule(localctx, 10, DataStructsParser.RULE_number);
    try {
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.match(DataStructsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.match(DataStructsParser.DOT);
            this.state = 26;
            this.match(DataStructsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 27;
            this.match(DataStructsParser.UINT);
            this.state = 28;
            this.match(DataStructsParser.DOT);
            this.state = 29;
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
