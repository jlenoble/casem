// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var OperatorsListener = require('./OperatorsListener').OperatorsListener;
var OperatorsVisitor = require('./OperatorsVisitor').OperatorsVisitor;

var grammarFileName = "Operators.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011\u0017\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006",
    "\b\n\u0002\u0006\u0003\u0002\u0003\u0004\u0003\u0002\u0005\u0006\u0003",
    "\u0002\b\r\u0003\u0002\u000e\u000f\u0002\u0011\u0002\f\u0003\u0002\u0002",
    "\u0002\u0004\u000e\u0003\u0002\u0002\u0002\u0006\u0010\u0003\u0002\u0002",
    "\u0002\b\u0012\u0003\u0002\u0002\u0002\n\u0014\u0003\u0002\u0002\u0002",
    "\f\r\t\u0002\u0002\u0002\r\u0003\u0003\u0002\u0002\u0002\u000e\u000f",
    "\t\u0003\u0002\u0002\u000f\u0005\u0003\u0002\u0002\u0002\u0010\u0011",
    "\u0007\u0007\u0002\u0002\u0011\u0007\u0003\u0002\u0002\u0002\u0012\u0013",
    "\t\u0004\u0002\u0002\u0013\t\u0003\u0002\u0002\u0002\u0014\u0015\t\u0005",
    "\u0002\u0002\u0015\u000b\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'-'", "'*'", "'/'", null, "'='", "'\\<>'", 
                     "'>'", "'\\>='", "'<'", "'\\<='", "'\\ And '", "'\\ Or '", 
                     "'\\->'", "'\\=>'" ];

var symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", "POW", "EQ", "NE", 
                      "GT", "GE", "LT", "LE", "AND", "OR", "ARROW", "FATARROW" ];

var ruleNames =  [ "addOp", "multOp", "powOp", "compOp", "boolOp" ];

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
OperatorsParser.POW = 5;
OperatorsParser.EQ = 6;
OperatorsParser.NE = 7;
OperatorsParser.GT = 8;
OperatorsParser.GE = 9;
OperatorsParser.LT = 10;
OperatorsParser.LE = 11;
OperatorsParser.AND = 12;
OperatorsParser.OR = 13;
OperatorsParser.ARROW = 14;
OperatorsParser.FATARROW = 15;

OperatorsParser.RULE_addOp = 0;
OperatorsParser.RULE_multOp = 1;
OperatorsParser.RULE_powOp = 2;
OperatorsParser.RULE_compOp = 3;
OperatorsParser.RULE_boolOp = 4;

function AddOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OperatorsParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function() {
    return this.getToken(OperatorsParser.ADD, 0);
};

AddOpContext.prototype.SUB = function() {
    return this.getToken(OperatorsParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.exitAddOp(this);
	}
};

AddOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof OperatorsVisitor ) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




OperatorsParser.AddOpContext = AddOpContext;

OperatorsParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, OperatorsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        _la = this._input.LA(1);
        if(!(_la===OperatorsParser.ADD || _la===OperatorsParser.SUB)) {
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
    this.ruleIndex = OperatorsParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function() {
    return this.getToken(OperatorsParser.MUL, 0);
};

MultOpContext.prototype.DIV = function() {
    return this.getToken(OperatorsParser.DIV, 0);
};

MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.exitMultOp(this);
	}
};

MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof OperatorsVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




OperatorsParser.MultOpContext = MultOpContext;

OperatorsParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, OperatorsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        _la = this._input.LA(1);
        if(!(_la===OperatorsParser.MUL || _la===OperatorsParser.DIV)) {
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
    this.ruleIndex = OperatorsParser.RULE_powOp;
    return this;
}

PowOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowOpContext.prototype.constructor = PowOpContext;

PowOpContext.prototype.POW = function() {
    return this.getToken(OperatorsParser.POW, 0);
};

PowOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.enterPowOp(this);
	}
};

PowOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.exitPowOp(this);
	}
};

PowOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof OperatorsVisitor ) {
        return visitor.visitPowOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




OperatorsParser.PowOpContext = PowOpContext;

OperatorsParser.prototype.powOp = function() {

    var localctx = new PowOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, OperatorsParser.RULE_powOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(OperatorsParser.POW);
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
    this.ruleIndex = OperatorsParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQ = function() {
    return this.getToken(OperatorsParser.EQ, 0);
};

CompOpContext.prototype.NE = function() {
    return this.getToken(OperatorsParser.NE, 0);
};

CompOpContext.prototype.GT = function() {
    return this.getToken(OperatorsParser.GT, 0);
};

CompOpContext.prototype.GE = function() {
    return this.getToken(OperatorsParser.GE, 0);
};

CompOpContext.prototype.LT = function() {
    return this.getToken(OperatorsParser.LT, 0);
};

CompOpContext.prototype.LE = function() {
    return this.getToken(OperatorsParser.LE, 0);
};

CompOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.enterCompOp(this);
	}
};

CompOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.exitCompOp(this);
	}
};

CompOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof OperatorsVisitor ) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




OperatorsParser.CompOpContext = CompOpContext;

OperatorsParser.prototype.compOp = function() {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, OperatorsParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
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

BoolOpContext.prototype.AND = function() {
    return this.getToken(OperatorsParser.AND, 0);
};

BoolOpContext.prototype.OR = function() {
    return this.getToken(OperatorsParser.OR, 0);
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
    this.enterRule(localctx, 8, OperatorsParser.RULE_boolOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        _la = this._input.LA(1);
        if(!(_la===OperatorsParser.AND || _la===OperatorsParser.OR)) {
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
