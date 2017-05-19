// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprsListener = require('./ExprsListener').ExprsListener;
var ExprsVisitor = require('./ExprsVisitor').ExprsVisitor;

var grammarFileName = "Exprs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f\u001f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0015\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002",
    "\b\u0002\u0004\u0006\b\n\f\u0002\u0002\u0002\u0019\u0002\u000e\u0003",
    "\u0002\u0002\u0002\u0004\u0014\u0003\u0002\u0002\u0002\u0006\u0016\u0003",
    "\u0002\u0002\u0002\b\u0018\u0003\u0002\u0002\u0002\n\u001a\u0003\u0002",
    "\u0002\u0002\f\u001c\u0003\u0002\u0002\u0002\u000e\u000f\u0005\u0004",
    "\u0003\u0002\u000f\u0010\u0005\b\u0005\u0002\u0010\u0011\u0005\u0004",
    "\u0003\u0002\u0011\u0003\u0003\u0002\u0002\u0002\u0012\u0015\u0005\n",
    "\u0006\u0002\u0013\u0015\u0005\f\u0007\u0002\u0014\u0012\u0003\u0002",
    "\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0015\u0005\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0005\n\u0006\u0002\u0017\u0007\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0007\n\u0002\u0002\u0019\t\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0007\u0003\u0002\u0002\u001b\u000b\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0007\u0004\u0002\u0002\u001d\r\u0003\u0002\u0002",
    "\u0002\u0003\u0014"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'\\->'", "':'", "'\\Do'", 
                     "'='", "'\\Getkey'", "'\\LpWhile '" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ARROW", 
                      "COLON", "DO", "EQUAL", "GETKEY", "LOOPWHILE" ];

var ruleNames =  [ "boolExpr", "numExpr", "stoExpr", "compOp", "variable", 
                   "number" ];

function ExprsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprsParser.prototype = Object.create(antlr4.Parser.prototype);
ExprsParser.prototype.constructor = ExprsParser;

Object.defineProperty(ExprsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprsParser.EOF = antlr4.Token.EOF;
ExprsParser.ID = 1;
ExprsParser.UINT = 2;
ExprsParser.STRING = 3;
ExprsParser.NEWLINE = 4;
ExprsParser.ARROW = 5;
ExprsParser.COLON = 6;
ExprsParser.DO = 7;
ExprsParser.EQUAL = 8;
ExprsParser.GETKEY = 9;
ExprsParser.LOOPWHILE = 10;

ExprsParser.RULE_boolExpr = 0;
ExprsParser.RULE_numExpr = 1;
ExprsParser.RULE_stoExpr = 2;
ExprsParser.RULE_compOp = 3;
ExprsParser.RULE_variable = 4;
ExprsParser.RULE_number = 5;

function BoolExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_boolExpr;
    return this;
}

BoolExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolExprContext.prototype.constructor = BoolExprContext;

BoolExprContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

BoolExprContext.prototype.compOp = function() {
    return this.getTypedRuleContext(CompOpContext,0);
};

BoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterBoolExpr(this);
	}
};

BoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitBoolExpr(this);
	}
};

BoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitBoolExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.BoolExprContext = BoolExprContext;

ExprsParser.prototype.boolExpr = function() {

    var localctx = new BoolExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprsParser.RULE_boolExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.numExpr();
        this.state = 13;
        this.compOp();
        this.state = 14;
        this.numExpr();
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

function NumExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_numExpr;
    return this;
}

NumExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumExprContext.prototype.constructor = NumExprContext;

NumExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

NumExprContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

NumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterNumExpr(this);
	}
};

NumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitNumExpr(this);
	}
};

NumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitNumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.NumExprContext = NumExprContext;

ExprsParser.prototype.numExpr = function() {

    var localctx = new NumExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ExprsParser.RULE_numExpr);
    try {
        this.state = 18;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 16;
            this.variable();
            break;
        case ExprsParser.UINT:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
            this.number();
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

function StoExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_stoExpr;
    return this;
}

StoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoExprContext.prototype.constructor = StoExprContext;

StoExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterStoExpr(this);
	}
};

StoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitStoExpr(this);
	}
};

StoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.StoExprContext = StoExprContext;

ExprsParser.prototype.stoExpr = function() {

    var localctx = new StoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ExprsParser.RULE_stoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.variable();
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
    this.ruleIndex = ExprsParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQUAL = function() {
    return this.getToken(ExprsParser.EQUAL, 0);
};

CompOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterCompOp(this);
	}
};

CompOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitCompOp(this);
	}
};

CompOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.CompOpContext = CompOpContext;

ExprsParser.prototype.compOp = function() {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprsParser.RULE_compOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.match(ExprsParser.EQUAL);
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
    this.ruleIndex = ExprsParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(ExprsParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.VariableContext = VariableContext;

ExprsParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(ExprsParser.ID);
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
    this.ruleIndex = ExprsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function() {
    return this.getToken(ExprsParser.UINT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.NumberContext = NumberContext;

ExprsParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ExprsParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(ExprsParser.UINT);
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


exports.ExprsParser = ExprsParser;
