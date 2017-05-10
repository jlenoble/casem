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

var literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'\\->'" ];

var symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", "ARROW" ];

var ruleNames =  [ "addOp", "multOp" ];

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
OperatorsParser.ARROW = 5;

OperatorsParser.RULE_addOp = 0;
OperatorsParser.RULE_multOp = 1;

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
        this.state = 4;
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
        this.state = 6;
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


exports.OperatorsParser = OperatorsParser;
