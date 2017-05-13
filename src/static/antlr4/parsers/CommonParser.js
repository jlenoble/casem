// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Common.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CommonListener = require('./CommonListener').CommonListener;
var CommonVisitor = require('./CommonVisitor').CommonVisitor;

var grammarFileName = "Common.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003EY\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006-\n\u0006\f\u0006\u000e\u00060\u000b\u0006\u0003\u0006\u0005",
    "\u00063\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u00068\n\u0006",
    "\f\u0006\u000e\u0006;\u000b\u0006\u0003\u0006\u0007\u0006>\n\u0006\f",
    "\u0006\u000e\u0006A\u000b\u0006\u0003\u0007\u0006\u0007D\n\u0007\r\u0007",
    "\u000e\u0007E\u0003\u0007\u0005\u0007I\n\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0003\n\u000f\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\t",
    "\u0004\u0002\u001d\u001d??\u0003\u0002?@\u0003\u0002\u0005\r\u0003\u0002",
    "\u000e\u000f\u0003\u0002\u0010\u0011\u0003\u0002\u0013\u0018\u0003\u0002",
    "\u0019\u001a\u0002S\u0002\u001c\u0003\u0002\u0002\u0002\u0004\u001f",
    "\u0003\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002\u0002\b$\u0003\u0002",
    "\u0002\u0002\n2\u0003\u0002\u0002\u0002\fH\u0003\u0002\u0002\u0002\u000e",
    "J\u0003\u0002\u0002\u0002\u0010L\u0003\u0002\u0002\u0002\u0012N\u0003",
    "\u0002\u0002\u0002\u0014P\u0003\u0002\u0002\u0002\u0016R\u0003\u0002",
    "\u0002\u0002\u0018T\u0003\u0002\u0002\u0002\u001aV\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u00073\u0002\u0002\u001d\u001e\t\u0002\u0002\u0002",
    "\u001e\u0003\u0003\u0002\u0002\u0002\u001f \u0007/\u0002\u0002 !\u0007",
    "@\u0002\u0002!\u0005\u0003\u0002\u0002\u0002\"#\u0007?\u0002\u0002#",
    "\u0007\u0003\u0002\u0002\u0002$%\t\u0003\u0002\u0002%\t\u0003\u0002",
    "\u0002\u0002&\'\b\u0006\u0001\u0002\'3\u0007@\u0002\u0002(3\u00076\u0002",
    "\u0002)3\u0007E\u0002\u0002*.\u0007\u0003\u0002\u0002+-\u0007E\u0002",
    "\u0002,+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002",
    "\u0002\u0002./\u0003\u0002\u0002\u0002/1\u0003\u0002\u0002\u00020.\u0003",
    "\u0002\u0002\u000213\u0005\n\u0006\u00032&\u0003\u0002\u0002\u00022",
    "(\u0003\u0002\u0002\u00022)\u0003\u0002\u0002\u00022*\u0003\u0002\u0002",
    "\u00023?\u0003\u0002\u0002\u000245\f\u0004\u0002\u000259\u0007\u0003",
    "\u0002\u000268\u0007E\u0002\u000276\u0003\u0002\u0002\u00028;\u0003",
    "\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002",
    ":<\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<>\u0005\n\u0006",
    "\u0005=4\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002",
    "\u0002\u0002?@\u0003\u0002\u0002\u0002@\u000b\u0003\u0002\u0002\u0002",
    "A?\u0003\u0002\u0002\u0002BD\u0007C\u0002\u0002CB\u0003\u0002\u0002",
    "\u0002DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002",
    "\u0002\u0002FI\u0003\u0002\u0002\u0002GI\u0007\u0004\u0002\u0002HC\u0003",
    "\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002I\r\u0003\u0002\u0002\u0002",
    "JK\u00079\u0002\u0002K\u000f\u0003\u0002\u0002\u0002LM\t\u0004\u0002",
    "\u0002M\u0011\u0003\u0002\u0002\u0002NO\t\u0005\u0002\u0002O\u0013\u0003",
    "\u0002\u0002\u0002PQ\t\u0006\u0002\u0002Q\u0015\u0003\u0002\u0002\u0002",
    "RS\u0007\u0012\u0002\u0002S\u0017\u0003\u0002\u0002\u0002TU\t\u0007",
    "\u0002\u0002U\u0019\u0003\u0002\u0002\u0002VW\t\b\u0002\u0002W\u001b",
    "\u0003\u0002\u0002\u0002\b.29?EH"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "':'", "'\\sqrt'", "'\\cos '", "'\\sin '", 
                     "'\\tan '", "'\\acos '", "'\\asin '", "'\\atan '", 
                     "'\\Abs '", "'\\Int '", "'+'", "'-'", "'*'", "'/'", 
                     null, "'='", "'\\<>'", "'>'", "'\\>='", "'<'", "'\\<='", 
                     "'\\ And '", "'\\ Or '", "'\\->'", "'\\=>'", "'\\Ans'", 
                     "'\\AxesOff'", "'\\AxesOn'", "'\\ClrGraph'", "'\\ClrText'", 
                     "'\\Disp'", "'\\Do'", "'\\Else '", "'\\10^x'", "'\\Fix '", 
                     "'\\F-Line '", "'\\For '", "'\\Getkey'", "'\\Gra'", 
                     "'\\Goto'", "'\\If '", "'\\IfEnd'", "'\\Lbl '", "'\\List '", 
                     "'\\List->Mat'", "'\\Locate '", "'\\LpWhile '", "'\\Mat '", 
                     "'\\Next'", "'\\Norm'", "'\\Pi'", "'\\PlotOn '", "'\\Prog '", 
                     "'\\Return'", "'\\Seq'", "'\\Stop'", "'\\Then '", "' \\To '", 
                     "'\\ViewWindow '", null, null, null, null, null, null, 
                     "'0'" ];

var symbolicNames = [ null, null, null, "SQRT", "COS", "SIN", "TAN", "ACOS", 
                      "ASIN", "ATAN", "ABS", "INT", "ADD", "SUB", "MUL", 
                      "DIV", "POW", "EQ", "NE", "GT", "GE", "LT", "LE", 
                      "AND", "OR", "ARROW", "FATARROW", "ANS", "AXESOFF", 
                      "AXESON", "CLRGRPH", "CLRTXT", "DISP", "DO", "ELSE", 
                      "EXPNT", "FIX", "FLINE", "FOR", "GETKEY", "GRA", "GOTO", 
                      "IF", "IFEND", "LBL", "LIST", "LISTMAT", "LOCATE", 
                      "LPWHILE", "MATRIX", "NEXT", "NORM", "PI", "PLOTON", 
                      "PROG", "RETURN", "SEQ", "STOP", "THEN", "TO", "VIEWWINDOW", 
                      "ID", "NATNUM", "TEXT", "WS", "NEWLINE", "STRING", 
                      "ZERO" ];

var ruleNames =  [ "matrix", "list", "variable", "lbl", "number", "endStat", 
                   "endProg", "func", "addOp", "multOp", "powOp", "compOp", 
                   "boolOp" ];

function CommonParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CommonParser.prototype = Object.create(antlr4.Parser.prototype);
CommonParser.prototype.constructor = CommonParser;

Object.defineProperty(CommonParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CommonParser.EOF = antlr4.Token.EOF;
CommonParser.T__0 = 1;
CommonParser.T__1 = 2;
CommonParser.SQRT = 3;
CommonParser.COS = 4;
CommonParser.SIN = 5;
CommonParser.TAN = 6;
CommonParser.ACOS = 7;
CommonParser.ASIN = 8;
CommonParser.ATAN = 9;
CommonParser.ABS = 10;
CommonParser.INT = 11;
CommonParser.ADD = 12;
CommonParser.SUB = 13;
CommonParser.MUL = 14;
CommonParser.DIV = 15;
CommonParser.POW = 16;
CommonParser.EQ = 17;
CommonParser.NE = 18;
CommonParser.GT = 19;
CommonParser.GE = 20;
CommonParser.LT = 21;
CommonParser.LE = 22;
CommonParser.AND = 23;
CommonParser.OR = 24;
CommonParser.ARROW = 25;
CommonParser.FATARROW = 26;
CommonParser.ANS = 27;
CommonParser.AXESOFF = 28;
CommonParser.AXESON = 29;
CommonParser.CLRGRPH = 30;
CommonParser.CLRTXT = 31;
CommonParser.DISP = 32;
CommonParser.DO = 33;
CommonParser.ELSE = 34;
CommonParser.EXPNT = 35;
CommonParser.FIX = 36;
CommonParser.FLINE = 37;
CommonParser.FOR = 38;
CommonParser.GETKEY = 39;
CommonParser.GRA = 40;
CommonParser.GOTO = 41;
CommonParser.IF = 42;
CommonParser.IFEND = 43;
CommonParser.LBL = 44;
CommonParser.LIST = 45;
CommonParser.LISTMAT = 46;
CommonParser.LOCATE = 47;
CommonParser.LPWHILE = 48;
CommonParser.MATRIX = 49;
CommonParser.NEXT = 50;
CommonParser.NORM = 51;
CommonParser.PI = 52;
CommonParser.PLOTON = 53;
CommonParser.PROG = 54;
CommonParser.RETURN = 55;
CommonParser.SEQ = 56;
CommonParser.STOP = 57;
CommonParser.THEN = 58;
CommonParser.TO = 59;
CommonParser.VIEWWINDOW = 60;
CommonParser.ID = 61;
CommonParser.NATNUM = 62;
CommonParser.TEXT = 63;
CommonParser.WS = 64;
CommonParser.NEWLINE = 65;
CommonParser.STRING = 66;
CommonParser.ZERO = 67;

CommonParser.RULE_matrix = 0;
CommonParser.RULE_list = 1;
CommonParser.RULE_variable = 2;
CommonParser.RULE_lbl = 3;
CommonParser.RULE_number = 4;
CommonParser.RULE_endStat = 5;
CommonParser.RULE_endProg = 6;
CommonParser.RULE_func = 7;
CommonParser.RULE_addOp = 8;
CommonParser.RULE_multOp = 9;
CommonParser.RULE_powOp = 10;
CommonParser.RULE_compOp = 11;
CommonParser.RULE_boolOp = 12;

function MatrixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function() {
    return this.getToken(CommonParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function() {
    return this.getToken(CommonParser.ID, 0);
};

MatrixContext.prototype.ANS = function() {
    return this.getToken(CommonParser.ANS, 0);
};

MatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterMatrix(this);
	}
};

MatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitMatrix(this);
	}
};

MatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.MatrixContext = MatrixContext;

CommonParser.prototype.matrix = function() {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CommonParser.RULE_matrix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(CommonParser.MATRIX);
        this.state = 27;
        _la = this._input.LA(1);
        if(!(_la===CommonParser.ANS || _la===CommonParser.ID)) {
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

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function() {
    return this.getToken(CommonParser.LIST, 0);
};

ListContext.prototype.NATNUM = function() {
    return this.getToken(CommonParser.NATNUM, 0);
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.ListContext = ListContext;

CommonParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CommonParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.match(CommonParser.LIST);
        this.state = 30;
        this.match(CommonParser.NATNUM);
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
    this.ruleIndex = CommonParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(CommonParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.VariableContext = VariableContext;

CommonParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CommonParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(CommonParser.ID);
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

function LblContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_lbl;
    return this;
}

LblContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LblContext.prototype.constructor = LblContext;

LblContext.prototype.ID = function() {
    return this.getToken(CommonParser.ID, 0);
};

LblContext.prototype.NATNUM = function() {
    return this.getToken(CommonParser.NATNUM, 0);
};

LblContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterLbl(this);
	}
};

LblContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitLbl(this);
	}
};

LblContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitLbl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.LblContext = LblContext;

CommonParser.prototype.lbl = function() {

    var localctx = new LblContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CommonParser.RULE_lbl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        _la = this._input.LA(1);
        if(!(_la===CommonParser.ID || _la===CommonParser.NATNUM)) {
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

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NATNUM = function() {
    return this.getToken(CommonParser.NATNUM, 0);
};

NumberContext.prototype.PI = function() {
    return this.getToken(CommonParser.PI, 0);
};

NumberContext.prototype.ZERO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CommonParser.ZERO);
    } else {
        return this.getToken(CommonParser.ZERO, i);
    }
};


NumberContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CommonParser.prototype.number = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumberContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, CommonParser.RULE_number, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CommonParser.NATNUM:
            this.state = 37;
            this.match(CommonParser.NATNUM);
            break;
        case CommonParser.PI:
            this.state = 38;
            this.match(CommonParser.PI);
            break;
        case CommonParser.ZERO:
            this.state = 39;
            this.match(CommonParser.ZERO);
            break;
        case CommonParser.T__0:
            this.state = 40;
            this.match(CommonParser.T__0);
            this.state = 44;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 41;
                    this.match(CommonParser.ZERO); 
                }
                this.state = 46;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
            }

            this.state = 47;
            this.number(1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 61;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new NumberContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CommonParser.RULE_number);
                this.state = 50;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 51;
                this.match(CommonParser.T__0);
                this.state = 55;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 52;
                        this.match(CommonParser.ZERO); 
                    }
                    this.state = 57;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
                }

                this.state = 58;
                this.number(3); 
            }
            this.state = 63;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function EndStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_endStat;
    return this;
}

EndStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatContext.prototype.constructor = EndStatContext;

EndStatContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CommonParser.NEWLINE);
    } else {
        return this.getToken(CommonParser.NEWLINE, i);
    }
};


EndStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterEndStat(this);
	}
};

EndStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitEndStat(this);
	}
};

EndStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitEndStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.EndStatContext = EndStatContext;

CommonParser.prototype.endStat = function() {

    var localctx = new EndStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CommonParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.state = 70;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CommonParser.NEWLINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 65; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 64;
                this.match(CommonParser.NEWLINE);
                this.state = 67; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===CommonParser.NEWLINE);
            break;
        case CommonParser.T__1:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.match(CommonParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

function EndProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_endProg;
    return this;
}

EndProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndProgContext.prototype.constructor = EndProgContext;

EndProgContext.prototype.RETURN = function() {
    return this.getToken(CommonParser.RETURN, 0);
};

EndProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterEndProg(this);
	}
};

EndProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitEndProg(this);
	}
};

EndProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitEndProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.EndProgContext = EndProgContext;

CommonParser.prototype.endProg = function() {

    var localctx = new EndProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CommonParser.RULE_endProg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(CommonParser.RETURN);
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

function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(CommonParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(CommonParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(CommonParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(CommonParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(CommonParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(CommonParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(CommonParser.ATAN, 0);
};

FuncContext.prototype.ABS = function() {
    return this.getToken(CommonParser.ABS, 0);
};

FuncContext.prototype.INT = function() {
    return this.getToken(CommonParser.INT, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.FuncContext = FuncContext;

CommonParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CommonParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CommonParser.SQRT) | (1 << CommonParser.COS) | (1 << CommonParser.SIN) | (1 << CommonParser.TAN) | (1 << CommonParser.ACOS) | (1 << CommonParser.ASIN) | (1 << CommonParser.ATAN) | (1 << CommonParser.ABS) | (1 << CommonParser.INT))) !== 0))) {
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

function AddOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function() {
    return this.getToken(CommonParser.ADD, 0);
};

AddOpContext.prototype.SUB = function() {
    return this.getToken(CommonParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitAddOp(this);
	}
};

AddOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.AddOpContext = AddOpContext;

CommonParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CommonParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        _la = this._input.LA(1);
        if(!(_la===CommonParser.ADD || _la===CommonParser.SUB)) {
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

function MultOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function() {
    return this.getToken(CommonParser.MUL, 0);
};

MultOpContext.prototype.DIV = function() {
    return this.getToken(CommonParser.DIV, 0);
};

MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitMultOp(this);
	}
};

MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.MultOpContext = MultOpContext;

CommonParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CommonParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        _la = this._input.LA(1);
        if(!(_la===CommonParser.MUL || _la===CommonParser.DIV)) {
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

function PowOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_powOp;
    return this;
}

PowOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowOpContext.prototype.constructor = PowOpContext;

PowOpContext.prototype.POW = function() {
    return this.getToken(CommonParser.POW, 0);
};

PowOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterPowOp(this);
	}
};

PowOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitPowOp(this);
	}
};

PowOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitPowOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.PowOpContext = PowOpContext;

CommonParser.prototype.powOp = function() {

    var localctx = new PowOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CommonParser.RULE_powOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(CommonParser.POW);
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

function CompOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQ = function() {
    return this.getToken(CommonParser.EQ, 0);
};

CompOpContext.prototype.NE = function() {
    return this.getToken(CommonParser.NE, 0);
};

CompOpContext.prototype.GT = function() {
    return this.getToken(CommonParser.GT, 0);
};

CompOpContext.prototype.GE = function() {
    return this.getToken(CommonParser.GE, 0);
};

CompOpContext.prototype.LT = function() {
    return this.getToken(CommonParser.LT, 0);
};

CompOpContext.prototype.LE = function() {
    return this.getToken(CommonParser.LE, 0);
};

CompOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterCompOp(this);
	}
};

CompOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitCompOp(this);
	}
};

CompOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.CompOpContext = CompOpContext;

CommonParser.prototype.compOp = function() {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CommonParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CommonParser.EQ) | (1 << CommonParser.NE) | (1 << CommonParser.GT) | (1 << CommonParser.GE) | (1 << CommonParser.LT) | (1 << CommonParser.LE))) !== 0))) {
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

function BoolOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_boolOp;
    return this;
}

BoolOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOpContext.prototype.constructor = BoolOpContext;

BoolOpContext.prototype.AND = function() {
    return this.getToken(CommonParser.AND, 0);
};

BoolOpContext.prototype.OR = function() {
    return this.getToken(CommonParser.OR, 0);
};

BoolOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterBoolOp(this);
	}
};

BoolOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitBoolOp(this);
	}
};

BoolOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitBoolOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.BoolOpContext = BoolOpContext;

CommonParser.prototype.boolOp = function() {

    var localctx = new BoolOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CommonParser.RULE_boolOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        _la = this._input.LA(1);
        if(!(_la===CommonParser.AND || _la===CommonParser.OR)) {
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


CommonParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 4:
			return this.number_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CommonParser.prototype.number_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CommonParser = CommonParser;
