// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0018a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0006\u0002\u001e\n\u0002\r\u0002",
    "\u000e\u0002\u001f\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004(\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u00056\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005@\n\u0005\f\u0005\u000e\u0005C\u000b\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006M\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0002\u0003\b\u000f\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0006\u0005\u0002\u0013",
    "\u0013\u0015\u0015\u0018\u0018\u0003\u0002\u0006\f\u0003\u0002\r\u000e",
    "\u0003\u0002\u000f\u0010\u0002]\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0004!\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b5\u0003",
    "\u0002\u0002\u0002\nL\u0003\u0002\u0002\u0002\fN\u0003\u0002\u0002\u0002",
    "\u000eR\u0003\u0002\u0002\u0002\u0010T\u0003\u0002\u0002\u0002\u0012",
    "V\u0003\u0002\u0002\u0002\u0014X\u0003\u0002\u0002\u0002\u0016Z\u0003",
    "\u0002\u0002\u0002\u0018\\\u0003\u0002\u0002\u0002\u001a^\u0003\u0002",
    "\u0002\u0002\u001c\u001e\u0005\u0004\u0003\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u0003\u0003\u0002\u0002",
    "\u0002!\"\u0005\u0006\u0004\u0002\"#\u0005\u0014\u000b\u0002#\u0005",
    "\u0003\u0002\u0002\u0002$(\u0005\b\u0005\u0002%(\u0005\n\u0006\u0002",
    "&(\u0005\f\u0007\u0002\'$\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002",
    "\u0002\'&\u0003\u0002\u0002\u0002(\u0007\u0003\u0002\u0002\u0002)*\b",
    "\u0005\u0001\u0002*+\u0007\r\u0002\u0002+6\u0005\b\u0005\t,6\u0005\u0010",
    "\t\u0002-6\u0005\u0012\n\u0002./\u0007\u0003\u0002\u0002/0\u0005\b\u0005",
    "\u000201\u0007\u0004\u0002\u000216\u0003\u0002\u0002\u000223\u0005\u0016",
    "\f\u000234\u0005\b\u0005\u000346\u0003\u0002\u0002\u00025)\u0003\u0002",
    "\u0002\u00025,\u0003\u0002\u0002\u00025-\u0003\u0002\u0002\u00025.\u0003",
    "\u0002\u0002\u000252\u0003\u0002\u0002\u00026A\u0003\u0002\u0002\u0002",
    "78\f\b\u0002\u000289\u0005\u001a\u000e\u00029:\u0005\b\u0005\t:@\u0003",
    "\u0002\u0002\u0002;<\f\u0007\u0002\u0002<=\u0005\u0018\r\u0002=>\u0005",
    "\b\u0005\b>@\u0003\u0002\u0002\u0002?7\u0003\u0002\u0002\u0002?;\u0003",
    "\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002B\t\u0003\u0002\u0002\u0002CA\u0003\u0002",
    "\u0002\u0002DM\u0007\u0017\u0002\u0002EF\u0007\u0012\u0002\u0002FG\u0005",
    "\b\u0005\u0002GH\u0007\u0005\u0002\u0002HI\u0005\b\u0005\u0002IJ\u0007",
    "\u0005\u0002\u0002JK\u0005\b\u0005\u0002KM\u0003\u0002\u0002\u0002L",
    "D\u0003\u0002\u0002\u0002LE\u0003\u0002\u0002\u0002M\u000b\u0003\u0002",
    "\u0002\u0002NO\u0005\b\u0005\u0002OP\u0007\u0011\u0002\u0002PQ\u0005",
    "\u000e\b\u0002Q\r\u0003\u0002\u0002\u0002RS\u0005\u0010\t\u0002S\u000f",
    "\u0003\u0002\u0002\u0002TU\u0007\u0014\u0002\u0002U\u0011\u0003\u0002",
    "\u0002\u0002VW\t\u0002\u0002\u0002W\u0013\u0003\u0002\u0002\u0002XY",
    "\u0007\u0016\u0002\u0002Y\u0015\u0003\u0002\u0002\u0002Z[\t\u0003\u0002",
    "\u0002[\u0017\u0003\u0002\u0002\u0002\\]\t\u0004\u0002\u0002]\u0019",
    "\u0003\u0002\u0002\u0002^_\t\u0005\u0002\u0002_\u001b\u0003\u0002\u0002",
    "\u0002\b\u001f\'5?AL"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "','", "'\\sqrt'", "'\\cos '", 
                     "'\\sin '", "'\\tan '", "'\\acos '", "'\\asin '", "'\\atan '", 
                     "'-'", "'+'", "'/'", "'*'", "'\\->'", "'\\Locate '", 
                     "'\\Pi'", null, null, null, null, "'0'" ];

var symbolicNames = [ null, null, null, null, "SQRT", "COS", "SIN", "TAN", 
                      "ACOS", "ASIN", "ATAN", "MINUS", "PLUS", "SLASH", 
                      "STAR", "ARROW", "LOCATE", "PI", "ID", "NATNUM", "NEWLINE", 
                      "STRING", "ZERO" ];

var ruleNames =  [ "prog", "statement", "expr", "evalExpr", "printExpr", 
                   "assignExpr", "stoExpr", "variable", "number", "endStatement", 
                   "func", "additiveOp", "multiplicativeOp" ];

function CalcParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CalcParser.prototype = Object.create(antlr4.Parser.prototype);
CalcParser.prototype.constructor = CalcParser;

Object.defineProperty(CalcParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CalcParser.EOF = antlr4.Token.EOF;
CalcParser.T__0 = 1;
CalcParser.T__1 = 2;
CalcParser.T__2 = 3;
CalcParser.SQRT = 4;
CalcParser.COS = 5;
CalcParser.SIN = 6;
CalcParser.TAN = 7;
CalcParser.ACOS = 8;
CalcParser.ASIN = 9;
CalcParser.ATAN = 10;
CalcParser.MINUS = 11;
CalcParser.PLUS = 12;
CalcParser.SLASH = 13;
CalcParser.STAR = 14;
CalcParser.ARROW = 15;
CalcParser.LOCATE = 16;
CalcParser.PI = 17;
CalcParser.ID = 18;
CalcParser.NATNUM = 19;
CalcParser.NEWLINE = 20;
CalcParser.STRING = 21;
CalcParser.ZERO = 22;

CalcParser.RULE_prog = 0;
CalcParser.RULE_statement = 1;
CalcParser.RULE_expr = 2;
CalcParser.RULE_evalExpr = 3;
CalcParser.RULE_printExpr = 4;
CalcParser.RULE_assignExpr = 5;
CalcParser.RULE_stoExpr = 6;
CalcParser.RULE_variable = 7;
CalcParser.RULE_number = 8;
CalcParser.RULE_endStatement = 9;
CalcParser.RULE_func = 10;
CalcParser.RULE_additiveOp = 11;
CalcParser.RULE_multiplicativeOp = 12;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ProgContext = ProgContext;

CalcParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalcParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 26;
            this.statement();
            this.state = 29; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.MINUS) | (1 << CalcParser.LOCATE) | (1 << CalcParser.PI) | (1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.STRING) | (1 << CalcParser.ZERO))) !== 0));
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

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatementContext.prototype.endStatement = function() {
    return this.getTypedRuleContext(EndStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.StatementContext = StatementContext;

CalcParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalcParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.expr();
        this.state = 32;
        this.endStatement();
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

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

ExprContext.prototype.printExpr = function() {
    return this.getTypedRuleContext(PrintExprContext,0);
};

ExprContext.prototype.assignExpr = function() {
    return this.getTypedRuleContext(AssignExprContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ExprContext = ExprContext;

CalcParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalcParser.RULE_expr);
    try {
        this.state = 37;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.evalExpr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.printExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 36;
            this.assignExpr();
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

function EvalExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_evalExpr;
    return this;
}

EvalExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvalExprContext.prototype.constructor = EvalExprContext;


 
EvalExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ComputeContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComputeContext.prototype = Object.create(EvalExprContext.prototype);
ComputeContext.prototype.constructor = ComputeContext;

CalcParser.ComputeContext = ComputeContext;

ComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

ComputeContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
ComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterCompute(this);
	}
};

ComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitCompute(this);
	}
};

ComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddContext.prototype = Object.create(EvalExprContext.prototype);
AddContext.prototype.constructor = AddContext;

CalcParser.AddContext = AddContext;

AddContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

AddContext.prototype.additiveOp = function() {
    return this.getTypedRuleContext(AdditiveOpContext,0);
};
AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAdd(this);
	}
};

AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParseFloatContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParseFloatContext.prototype = Object.create(EvalExprContext.prototype);
ParseFloatContext.prototype.constructor = ParseFloatContext;

CalcParser.ParseFloatContext = ParseFloatContext;

ParseFloatContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ParseFloatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterParseFloat(this);
	}
};

ParseFloatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitParseFloat(this);
	}
};

ParseFloatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitParseFloat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParensContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(EvalExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

CalcParser.ParensContext = ParensContext;

ParensContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitParens(this);
	}
};

ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegateContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateContext.prototype = Object.create(EvalExprContext.prototype);
NegateContext.prototype.constructor = NegateContext;

CalcParser.NegateContext = NegateContext;

NegateContext.prototype.MINUS = function() {
    return this.getToken(CalcParser.MINUS, 0);
};

NegateContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
NegateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterNegate(this);
	}
};

NegateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitNegate(this);
	}
};

NegateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitNegate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyContext.prototype = Object.create(EvalExprContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

CalcParser.MultiplyContext = MultiplyContext;

MultiplyContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

MultiplyContext.prototype.multiplicativeOp = function() {
    return this.getTypedRuleContext(MultiplicativeOpContext,0);
};
MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMultiply(this);
	}
};

MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMultiply(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateContext.prototype.constructor = EvaluateContext;

CalcParser.EvaluateContext = EvaluateContext;

EvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
EvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluate(this);
	}
};

EvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluate(this);
	}
};

EvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.evalExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new EvalExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, CalcParser.RULE_evalExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.MINUS:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 40;
            this.match(CalcParser.MINUS);
            this.state = 41;
            this.evalExpr(7);
            break;
        case CalcParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            this.variable();
            break;
        case CalcParser.PI:
        case CalcParser.NATNUM:
        case CalcParser.ZERO:
            localctx = new ParseFloatContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 43;
            this.number();
            break;
        case CalcParser.T__0:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            this.match(CalcParser.T__0);
            this.state = 45;
            this.evalExpr(0);
            this.state = 46;
            this.match(CalcParser.T__1);
            break;
        case CalcParser.SQRT:
        case CalcParser.COS:
        case CalcParser.SIN:
        case CalcParser.TAN:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
            localctx = new ComputeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 48;
            this.func();
            this.state = 49;
            this.evalExpr(1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 63;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 61;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 53;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 54;
                    this.multiplicativeOp();
                    this.state = 55;
                    this.evalExpr(7);
                    break;

                case 2:
                    localctx = new AddContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 57;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 58;
                    this.additiveOp();
                    this.state = 59;
                    this.evalExpr(6);
                    break;

                } 
            }
            this.state = 65;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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

function PrintExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_printExpr;
    return this;
}

PrintExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintExprContext.prototype.constructor = PrintExprContext;


 
PrintExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PrintContext(parser, ctx) {
	PrintExprContext.call(this, parser);
    PrintExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintContext.prototype = Object.create(PrintExprContext.prototype);
PrintContext.prototype.constructor = PrintContext;

CalcParser.PrintContext = PrintContext;

PrintContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};
PrintContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPrint(this);
	}
};

PrintContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPrint(this);
	}
};

PrintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPrint(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrintAtContext(parser, ctx) {
	PrintExprContext.call(this, parser);
    PrintExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintAtContext.prototype = Object.create(PrintExprContext.prototype);
PrintAtContext.prototype.constructor = PrintAtContext;

CalcParser.PrintAtContext = PrintAtContext;

PrintAtContext.prototype.LOCATE = function() {
    return this.getToken(CalcParser.LOCATE, 0);
};

PrintAtContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};
PrintAtContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPrintAt(this);
	}
};

PrintAtContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPrintAt(this);
	}
};

PrintAtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPrintAt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.PrintExprContext = PrintExprContext;

CalcParser.prototype.printExpr = function() {

    var localctx = new PrintExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalcParser.RULE_printExpr);
    try {
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.match(CalcParser.LOCATE);
            this.state = 68;
            this.evalExpr(0);
            this.state = 69;
            this.match(CalcParser.T__2);
            this.state = 70;
            this.evalExpr(0);
            this.state = 71;
            this.match(CalcParser.T__2);
            this.state = 72;
            this.evalExpr(0);
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

function AssignExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_assignExpr;
    return this;
}

AssignExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignExprContext.prototype.constructor = AssignExprContext;

AssignExprContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

AssignExprContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

AssignExprContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

AssignExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAssignExpr(this);
	}
};

AssignExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAssignExpr(this);
	}
};

AssignExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAssignExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AssignExprContext = AssignExprContext;

CalcParser.prototype.assignExpr = function() {

    var localctx = new AssignExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalcParser.RULE_assignExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.evalExpr(0);
        this.state = 77;
        this.match(CalcParser.ARROW);
        this.state = 78;
        this.stoExpr();
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
    this.ruleIndex = CalcParser.RULE_stoExpr;
    return this;
}

StoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoExprContext.prototype.constructor = StoExprContext;

StoExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterStoExpr(this);
	}
};

StoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitStoExpr(this);
	}
};

StoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.StoExprContext = StoExprContext;

CalcParser.prototype.stoExpr = function() {

    var localctx = new StoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CalcParser.RULE_stoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.VariableContext = VariableContext;

CalcParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(CalcParser.ID);
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
    this.ruleIndex = CalcParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

NumberContext.prototype.PI = function() {
    return this.getToken(CalcParser.PI, 0);
};

NumberContext.prototype.ZERO = function() {
    return this.getToken(CalcParser.ZERO, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.NumberContext = NumberContext;

CalcParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CalcParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.PI) | (1 << CalcParser.NATNUM) | (1 << CalcParser.ZERO))) !== 0))) {
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

function EndStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_endStatement;
    return this;
}

EndStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatementContext.prototype.constructor = EndStatementContext;

EndStatementContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EndStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEndStatement(this);
	}
};

EndStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEndStatement(this);
	}
};

EndStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEndStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EndStatementContext = EndStatementContext;

CalcParser.prototype.endStatement = function() {

    var localctx = new EndStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CalcParser.RULE_endStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(CalcParser.NEWLINE);
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
    this.ruleIndex = CalcParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(CalcParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(CalcParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(CalcParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(CalcParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(CalcParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(CalcParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(CalcParser.ATAN, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.FuncContext = FuncContext;

CalcParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CalcParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN))) !== 0))) {
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

function AdditiveOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_additiveOp;
    return this;
}

AdditiveOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveOpContext.prototype.constructor = AdditiveOpContext;

AdditiveOpContext.prototype.PLUS = function() {
    return this.getToken(CalcParser.PLUS, 0);
};

AdditiveOpContext.prototype.MINUS = function() {
    return this.getToken(CalcParser.MINUS, 0);
};

AdditiveOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAdditiveOp(this);
	}
};

AdditiveOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAdditiveOp(this);
	}
};

AdditiveOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAdditiveOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AdditiveOpContext = AdditiveOpContext;

CalcParser.prototype.additiveOp = function() {

    var localctx = new AdditiveOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CalcParser.RULE_additiveOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.MINUS || _la===CalcParser.PLUS)) {
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
    this.ruleIndex = CalcParser.RULE_multiplicativeOp;
    return this;
}

MultiplicativeOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeOpContext.prototype.constructor = MultiplicativeOpContext;

MultiplicativeOpContext.prototype.STAR = function() {
    return this.getToken(CalcParser.STAR, 0);
};

MultiplicativeOpContext.prototype.SLASH = function() {
    return this.getToken(CalcParser.SLASH, 0);
};

MultiplicativeOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMultiplicativeOp(this);
	}
};

MultiplicativeOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMultiplicativeOp(this);
	}
};

MultiplicativeOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMultiplicativeOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MultiplicativeOpContext = MultiplicativeOpContext;

CalcParser.prototype.multiplicativeOp = function() {

    var localctx = new MultiplicativeOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CalcParser.RULE_multiplicativeOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.SLASH || _la===CalcParser.STAR)) {
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


CalcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.evalExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalcParser.prototype.evalExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalcParser = CalcParser;
