// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Operators.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var OperatorsListener = require('./OperatorsListener').OperatorsListener;
var OperatorsVisitor = require('./OperatorsVisitor').OperatorsVisitor;

var grammarFileName = "Operators.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\u000b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004\u0002",
    "\u0004\u0002\u0004\u0003\u0002\u0003\u0004\u0003\u0002\u0005\u0006\u0002",
    "\b\u0002\u0006\u0003\u0002\u0002\u0002\u0004\b\u0003\u0002\u0002\u0002",
    "\u0006\u0007\t\u0002\u0002\u0002\u0007\u0003\u0003\u0002\u0002\u0002",
    "\b\t\t\u0003\u0002\u0002\t\u0005\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'-'", "'+'", "'/'", "'*'", "'\\->'" ];

var symbolicNames = [ null, "MINUS", "PLUS", "SLASH", "STAR", "ARROW" ];

var ruleNames =  [ "additiveOp", "multiplicativeOp" ];

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
OperatorsParser.MINUS = 1;
OperatorsParser.PLUS = 2;
OperatorsParser.SLASH = 3;
OperatorsParser.STAR = 4;
OperatorsParser.ARROW = 5;

OperatorsParser.RULE_additiveOp = 0;
OperatorsParser.RULE_multiplicativeOp = 1;

function AdditiveOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OperatorsParser.RULE_additiveOp;
    return this;
}

AdditiveOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveOpContext.prototype.constructor = AdditiveOpContext;

AdditiveOpContext.prototype.PLUS = function() {
    return this.getToken(OperatorsParser.PLUS, 0);
};

AdditiveOpContext.prototype.MINUS = function() {
    return this.getToken(OperatorsParser.MINUS, 0);
};

AdditiveOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.enterAdditiveOp(this);
	}
};

AdditiveOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.exitAdditiveOp(this);
	}
};

AdditiveOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof OperatorsVisitor ) {
        return visitor.visitAdditiveOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




OperatorsParser.AdditiveOpContext = AdditiveOpContext;

OperatorsParser.prototype.additiveOp = function() {

    var localctx = new AdditiveOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, OperatorsParser.RULE_additiveOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        _la = this._input.LA(1);
        if(!(_la===OperatorsParser.MINUS || _la===OperatorsParser.PLUS)) {
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

function MultiplicativeOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OperatorsParser.RULE_multiplicativeOp;
    return this;
}

MultiplicativeOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeOpContext.prototype.constructor = MultiplicativeOpContext;

MultiplicativeOpContext.prototype.STAR = function() {
    return this.getToken(OperatorsParser.STAR, 0);
};

MultiplicativeOpContext.prototype.SLASH = function() {
    return this.getToken(OperatorsParser.SLASH, 0);
};

MultiplicativeOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.enterMultiplicativeOp(this);
	}
};

MultiplicativeOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof OperatorsListener ) {
        listener.exitMultiplicativeOp(this);
	}
};

MultiplicativeOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof OperatorsVisitor ) {
        return visitor.visitMultiplicativeOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




OperatorsParser.MultiplicativeOpContext = MultiplicativeOpContext;

OperatorsParser.prototype.multiplicativeOp = function() {

    var localctx = new MultiplicativeOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, OperatorsParser.RULE_multiplicativeOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        _la = this._input.LA(1);
        if(!(_la===OperatorsParser.SLASH || _la===OperatorsParser.STAR)) {
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
