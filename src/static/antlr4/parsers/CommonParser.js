// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Common.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CommonListener = require('./CommonListener').CommonListener;
var CommonVisitor = require('./CommonVisitor').CommonVisitor;

var grammarFileName = "Common.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003)6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006#\n\u0006\r\u0006\u000e",
    "\u0006$\u0003\u0006\u0005\u0006(\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0002\b\u0005\u0002  %%))\u0003\u0002\u0004\n\u0003",
    "\u0002\u000b\f\u0003\u0002\r\u000e\u0003\u0002\u000f\u0014\u0003\u0002",
    "\u0015\u0016\u0002,\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001b",
    "\u0003\u0002\u0002\u0002\u0006\u001d\u0003\u0002\u0002\u0002\b\u001f",
    "\u0003\u0002\u0002\u0002\n\'\u0003\u0002\u0002\u0002\f)\u0003\u0002",
    "\u0002\u0002\u000e+\u0003\u0002\u0002\u0002\u0010-\u0003\u0002\u0002",
    "\u0002\u0012/\u0003\u0002\u0002\u0002\u00141\u0003\u0002\u0002\u0002",
    "\u00163\u0003\u0002\u0002\u0002\u0018\u0019\u0007\u001f\u0002\u0002",
    "\u0019\u001a\u0007$\u0002\u0002\u001a\u0003\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0007$\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0007$\u0002\u0002\u001e\u0007\u0003\u0002\u0002\u0002",
    "\u001f \t\u0002\u0002\u0002 \t\u0003\u0002\u0002\u0002!#\u0007\'\u0002",
    "\u0002\"!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\"\u0003",
    "\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002",
    "&(\u0007\u0003\u0002\u0002\'\"\u0003\u0002\u0002\u0002\'&\u0003\u0002",
    "\u0002\u0002(\u000b\u0003\u0002\u0002\u0002)*\u0007\"\u0002\u0002*\r",
    "\u0003\u0002\u0002\u0002+,\t\u0003\u0002\u0002,\u000f\u0003\u0002\u0002",
    "\u0002-.\t\u0004\u0002\u0002.\u0011\u0003\u0002\u0002\u0002/0\t\u0005",
    "\u0002\u00020\u0013\u0003\u0002\u0002\u000212\t\u0006\u0002\u00022\u0015",
    "\u0003\u0002\u0002\u000234\t\u0007\u0002\u00024\u0017\u0003\u0002\u0002",
    "\u0002\u0004$\'"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'\\sqrt'", "'\\cos '", "'\\sin '", "'\\tan '", 
                     "'\\acos '", "'\\asin '", "'\\atan '", "'+'", "'-'", 
                     "'*'", "'/'", "'='", "'\\<>'", "'>'", "'\\>='", "'<'", 
                     "'\\<='", "'\\ And '", "'\\ Or '", "'\\->'", "'\\=>'", 
                     "'\\Else '", "'\\Goto'", "'\\If '", "'\\IfEnd'", "'\\Lbl '", 
                     "'\\Locate '", "'\\Mat '", "'\\Pi'", "'\\Prog '", "'\\Return'", 
                     "'\\Then '", null, null, null, null, null, "'0'" ];

var symbolicNames = [ null, null, "SQRT", "COS", "SIN", "TAN", "ACOS", "ASIN", 
                      "ATAN", "ADD", "SUB", "MUL", "DIV", "EQ", "NE", "GT", 
                      "GE", "LT", "LE", "AND", "OR", "ARROW", "FATARROW", 
                      "ELSE", "GOTO", "IF", "IFEND", "LBL", "LOCATE", "MATRIX", 
                      "PI", "PROG", "RETURN", "THEN", "ID", "NATNUM", "TEXT", 
                      "NEWLINE", "STRING", "ZERO" ];

var ruleNames =  [ "matrix", "variable", "lbl", "number", "endStat", "endProg", 
                   "func", "addOp", "multOp", "compOp", "boolOP" ];

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
CommonParser.SQRT = 2;
CommonParser.COS = 3;
CommonParser.SIN = 4;
CommonParser.TAN = 5;
CommonParser.ACOS = 6;
CommonParser.ASIN = 7;
CommonParser.ATAN = 8;
CommonParser.ADD = 9;
CommonParser.SUB = 10;
CommonParser.MUL = 11;
CommonParser.DIV = 12;
CommonParser.EQ = 13;
CommonParser.NE = 14;
CommonParser.GT = 15;
CommonParser.GE = 16;
CommonParser.LT = 17;
CommonParser.LE = 18;
CommonParser.AND = 19;
CommonParser.OR = 20;
CommonParser.ARROW = 21;
CommonParser.FATARROW = 22;
CommonParser.ELSE = 23;
CommonParser.GOTO = 24;
CommonParser.IF = 25;
CommonParser.IFEND = 26;
CommonParser.LBL = 27;
CommonParser.LOCATE = 28;
CommonParser.MATRIX = 29;
CommonParser.PI = 30;
CommonParser.PROG = 31;
CommonParser.RETURN = 32;
CommonParser.THEN = 33;
CommonParser.ID = 34;
CommonParser.NATNUM = 35;
CommonParser.TEXT = 36;
CommonParser.NEWLINE = 37;
CommonParser.STRING = 38;
CommonParser.ZERO = 39;

CommonParser.RULE_matrix = 0;
CommonParser.RULE_variable = 1;
CommonParser.RULE_lbl = 2;
CommonParser.RULE_number = 3;
CommonParser.RULE_endStat = 4;
CommonParser.RULE_endProg = 5;
CommonParser.RULE_func = 6;
CommonParser.RULE_addOp = 7;
CommonParser.RULE_multOp = 8;
CommonParser.RULE_compOp = 9;
CommonParser.RULE_boolOP = 10;

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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.match(CommonParser.MATRIX);
        this.state = 23;
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
    this.enterRule(localctx, 2, CommonParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
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
    this.enterRule(localctx, 4, CommonParser.RULE_lbl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
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

NumberContext.prototype.ZERO = function() {
    return this.getToken(CommonParser.ZERO, 0);
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




CommonParser.NumberContext = NumberContext;

CommonParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CommonParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        _la = this._input.LA(1);
        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (CommonParser.PI - 30)) | (1 << (CommonParser.NATNUM - 30)) | (1 << (CommonParser.ZERO - 30)))) !== 0))) {
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
    this.enterRule(localctx, 8, CommonParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.state = 37;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CommonParser.NEWLINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 32; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 31;
                this.match(CommonParser.NEWLINE);
                this.state = 34; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===CommonParser.NEWLINE);
            break;
        case CommonParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.match(CommonParser.T__0);
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
    this.enterRule(localctx, 10, CommonParser.RULE_endProg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
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
    this.enterRule(localctx, 12, CommonParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CommonParser.SQRT) | (1 << CommonParser.COS) | (1 << CommonParser.SIN) | (1 << CommonParser.TAN) | (1 << CommonParser.ACOS) | (1 << CommonParser.ASIN) | (1 << CommonParser.ATAN))) !== 0))) {
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
    this.enterRule(localctx, 14, CommonParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
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
    this.enterRule(localctx, 16, CommonParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
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
    this.enterRule(localctx, 18, CommonParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
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

function BoolOPContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CommonParser.RULE_boolOP;
    return this;
}

BoolOPContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOPContext.prototype.constructor = BoolOPContext;

BoolOPContext.prototype.AND = function() {
    return this.getToken(CommonParser.AND, 0);
};

BoolOPContext.prototype.OR = function() {
    return this.getToken(CommonParser.OR, 0);
};

BoolOPContext.prototype.enterRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.enterBoolOP(this);
	}
};

BoolOPContext.prototype.exitRule = function(listener) {
    if(listener instanceof CommonListener ) {
        listener.exitBoolOP(this);
	}
};

BoolOPContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CommonVisitor ) {
        return visitor.visitBoolOP(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CommonParser.BoolOPContext = BoolOPContext;

CommonParser.prototype.boolOP = function() {

    var localctx = new BoolOPContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CommonParser.RULE_boolOP);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
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


exports.CommonParser = CommonParser;
