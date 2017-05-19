// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprsListener = require('./ExprsListener').ExprsListener;
var ExprsVisitor = require('./ExprsVisitor').ExprsVisitor;

var grammarFileName = "Exprs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013=\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001c",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003&\n\u0003\f\u0003\u000e",
    "\u0003)\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t;\n\t\u0003\t\u0002",
    "\u0003\u0004\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0004\u0004",
    "\u0002\u000b\u000b\u0012\u0012\u0004\u0002\u0007\u0007\u0013\u0013\u0002",
    ":\u0002\u0012\u0003\u0002\u0002\u0002\u0004\u001b\u0003\u0002\u0002",
    "\u0002\u0006*\u0003\u0002\u0002\u0002\b,\u0003\u0002\u0002\u0002\n.",
    "\u0003\u0002\u0002\u0002\f0\u0003\u0002\u0002\u0002\u000e2\u0003\u0002",
    "\u0002\u0002\u0010:\u0003\u0002\u0002\u0002\u0012\u0013\u0005\u0004",
    "\u0003\u0002\u0013\u0014\u0005\b\u0005\u0002\u0014\u0015\u0005\u0004",
    "\u0003\u0002\u0015\u0003\u0003\u0002\u0002\u0002\u0016\u0017\b\u0003",
    "\u0001\u0002\u0017\u0018\u0007\u0013\u0002\u0002\u0018\u001c\u0005\u0004",
    "\u0003\u0007\u0019\u001c\u0005\u000e\b\u0002\u001a\u001c\u0005\u0010",
    "\t\u0002\u001b\u0016\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002",
    "\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\'\u0003\u0002",
    "\u0002\u0002\u001d\u001e\f\u0006\u0002\u0002\u001e\u001f\u0005\n\u0006",
    "\u0002\u001f \u0005\u0004\u0003\u0007 &\u0003\u0002\u0002\u0002!\"\f",
    "\u0005\u0002\u0002\"#\u0005\f\u0007\u0002#$\u0005\u0004\u0003\u0006",
    "$&\u0003\u0002\u0002\u0002%\u001d\u0003\u0002\u0002\u0002%!\u0003\u0002",
    "\u0002\u0002&)\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'",
    "(\u0003\u0002\u0002\u0002(\u0005\u0003\u0002\u0002\u0002)\'\u0003\u0002",
    "\u0002\u0002*+\u0005\u000e\b\u0002+\u0007\u0003\u0002\u0002\u0002,-",
    "\u0007\u000e\u0002\u0002-\t\u0003\u0002\u0002\u0002./\t\u0002\u0002",
    "\u0002/\u000b\u0003\u0002\u0002\u000201\t\u0003\u0002\u00021\r\u0003",
    "\u0002\u0002\u000223\u0007\u0003\u0002\u00023\u000f\u0003\u0002\u0002",
    "\u00024;\u0007\u0004\u0002\u000256\u0007\r\u0002\u00026;\u0007\u0004",
    "\u0002\u000278\u0007\u0004\u0002\u000289\u0007\r\u0002\u00029;\u0007",
    "\u0004\u0002\u0002:4\u0003\u0002\u0002\u0002:5\u0003\u0002\u0002\u0002",
    ":7\u0003\u0002\u0002\u0002;\u0011\u0003\u0002\u0002\u0002\u0006\u001b",
    "%\':"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'+'", "'\\->'", "':'", 
                     "','", "'/'", "'\\Do'", "'.'", "'='", "'\\Getkey'", 
                     "'\\Locate '", "'\\LpWhile '", "'*'", "'-'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ADD", "ARROW", 
                      "COLON", "COMMA", "DIV", "DO", "DOT", "EQUAL", "GETKEY", 
                      "LOCATE", "LOOPWHILE", "MUL", "SUB" ];

var ruleNames =  [ "boolExpr", "numExpr", "stoExpr", "compOp", "multOp", 
                   "addOp", "variable", "number" ];

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
ExprsParser.ADD = 5;
ExprsParser.ARROW = 6;
ExprsParser.COLON = 7;
ExprsParser.COMMA = 8;
ExprsParser.DIV = 9;
ExprsParser.DO = 10;
ExprsParser.DOT = 11;
ExprsParser.EQUAL = 12;
ExprsParser.GETKEY = 13;
ExprsParser.LOCATE = 14;
ExprsParser.LOOPWHILE = 15;
ExprsParser.MUL = 16;
ExprsParser.SUB = 17;

ExprsParser.RULE_boolExpr = 0;
ExprsParser.RULE_numExpr = 1;
ExprsParser.RULE_stoExpr = 2;
ExprsParser.RULE_compOp = 3;
ExprsParser.RULE_multOp = 4;
ExprsParser.RULE_addOp = 5;
ExprsParser.RULE_variable = 6;
ExprsParser.RULE_number = 7;

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
        this.state = 16;
        this.numExpr(0);
        this.state = 17;
        this.compOp();
        this.state = 18;
        this.numExpr(0);
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


 
NumExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AddContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddContext.prototype = Object.create(NumExprContext.prototype);
AddContext.prototype.constructor = AddContext;

ExprsParser.AddContext = AddContext;

AddContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

AddContext.prototype.addOp = function() {
    return this.getTypedRuleContext(AddOpContext,0);
};
AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitAdd(this);
	}
};

AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegateContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateContext.prototype = Object.create(NumExprContext.prototype);
NegateContext.prototype.constructor = NegateContext;

ExprsParser.NegateContext = NegateContext;

NegateContext.prototype.SUB = function() {
    return this.getToken(ExprsParser.SUB, 0);
};

NegateContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
NegateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterNegate(this);
	}
};

NegateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitNegate(this);
	}
};

NegateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitNegate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParseContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParseContext.prototype = Object.create(NumExprContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ExprsParser.ParseContext = ParseContext;

ParseContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyContext.prototype = Object.create(NumExprContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

ExprsParser.MultiplyContext = MultiplyContext;

MultiplyContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

MultiplyContext.prototype.multOp = function() {
    return this.getTypedRuleContext(MultOpContext,0);
};
MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMultiply(this);
	}
};

MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMultiply(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateContext.prototype = Object.create(NumExprContext.prototype);
EvaluateContext.prototype.constructor = EvaluateContext;

ExprsParser.EvaluateContext = EvaluateContext;

EvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
EvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterEvaluate(this);
	}
};

EvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitEvaluate(this);
	}
};

EvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprsParser.prototype.numExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprsParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 21;
            this.match(ExprsParser.SUB);
            this.state = 22;
            this.numExpr(5);
            break;
        case ExprsParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 23;
            this.variable();
            break;
        case ExprsParser.UINT:
        case ExprsParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 37;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 35;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 27;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 28;
                    this.multOp();
                    this.state = 29;
                    this.numExpr(5);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 31;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 32;
                    this.addOp();
                    this.state = 33;
                    this.numExpr(4);
                    break;

                } 
            }
            this.state = 39;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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
        this.state = 40;
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
        this.state = 42;
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

function MultOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function() {
    return this.getToken(ExprsParser.MUL, 0);
};

MultOpContext.prototype.DIV = function() {
    return this.getToken(ExprsParser.DIV, 0);
};

MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMultOp(this);
	}
};

MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.MultOpContext = MultOpContext;

ExprsParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!(_la===ExprsParser.DIV || _la===ExprsParser.MUL)) {
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
    this.ruleIndex = ExprsParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function() {
    return this.getToken(ExprsParser.ADD, 0);
};

AddOpContext.prototype.SUB = function() {
    return this.getToken(ExprsParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitAddOp(this);
	}
};

AddOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.AddOpContext = AddOpContext;

ExprsParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ExprsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        _la = this._input.LA(1);
        if(!(_la===ExprsParser.ADD || _la===ExprsParser.SUB)) {
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
    this.enterRule(localctx, 12, ExprsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
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

NumberContext.prototype.UINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ExprsParser.UINT);
    } else {
        return this.getToken(ExprsParser.UINT, i);
    }
};


NumberContext.prototype.DOT = function() {
    return this.getToken(ExprsParser.DOT, 0);
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
    this.enterRule(localctx, 14, ExprsParser.RULE_number);
    try {
        this.state = 56;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.match(ExprsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(ExprsParser.DOT);
            this.state = 52;
            this.match(ExprsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 53;
            this.match(ExprsParser.UINT);
            this.state = 54;
            this.match(ExprsParser.DOT);
            this.state = 55;
            this.match(ExprsParser.UINT);
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


ExprsParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.numExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprsParser.prototype.numExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprsParser = ExprsParser;
