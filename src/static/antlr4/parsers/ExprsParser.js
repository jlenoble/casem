// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprsListener = require('./ExprsListener').ExprsListener;
var ExprsVisitor = require('./ExprsVisitor').ExprsVisitor;

var grammarFileName = "Exprs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00030\\\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003*\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00036\n\u0003",
    "\f\u0003\u000e\u00039\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005F\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\fZ\n\f\u0003\f\u0002\u0003\u0004\r\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0002\u0006\b\u0002\u0015\u0015\u0018",
    "\u0018\u001a\u001a\u001e\u001e!!$$\u0004\u0002\u0011\u0011\"#\u0004",
    "\u0002\t\t++\b\u0002\u0007\b\u000b\f\u000f\u000f\u001d\u001d(),,\u0002",
    "]\u0002\u0018\u0003\u0002\u0002\u0002\u0004)\u0003\u0002\u0002\u0002",
    "\u0006:\u0003\u0002\u0002\u0002\bE\u0003\u0002\u0002\u0002\nG\u0003",
    "\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eK\u0003\u0002\u0002",
    "\u0002\u0010M\u0003\u0002\u0002\u0002\u0012O\u0003\u0002\u0002\u0002",
    "\u0014Q\u0003\u0002\u0002\u0002\u0016Y\u0003\u0002\u0002\u0002\u0018",
    "\u0019\u0005\u0004\u0003\u0002\u0019\u001a\u0005\n\u0006\u0002\u001a",
    "\u001b\u0005\u0004\u0003\u0002\u001b\u0003\u0003\u0002\u0002\u0002\u001c",
    "\u001d\b\u0003\u0001\u0002\u001d\u001e\u0007&\u0002\u0002\u001e\u001f",
    "\u0005\u0004\u0003\u0002\u001f \u0007\u0010\u0002\u0002 *\u0003\u0002",
    "\u0002\u0002!\"\u0007+\u0002\u0002\"*\u0005\u0004\u0003\n#$\u0005\u0010",
    "\t\u0002$%\u0005\u0004\u0003\t%*\u0003\u0002\u0002\u0002&*\u0005\u0012",
    "\n\u0002\'*\u0005\u0014\u000b\u0002(*\u0005\u0016\f\u0002)\u001c\u0003",
    "\u0002\u0002\u0002)!\u0003\u0002\u0002\u0002)#\u0003\u0002\u0002\u0002",
    ")&\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)(\u0003\u0002",
    "\u0002\u0002*7\u0003\u0002\u0002\u0002+,\f\u0007\u0002\u0002,-\u0005",
    "\f\u0007\u0002-.\u0005\u0004\u0003\b.6\u0003\u0002\u0002\u0002/0\f\u0006",
    "\u0002\u000201\u0005\u000e\b\u000212\u0005\u0004\u0003\u000726\u0003",
    "\u0002\u0002\u000234\f\b\u0002\u000246\u0005\b\u0005\u00025+\u0003\u0002",
    "\u0002\u00025/\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000269\u0003",
    "\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u0002",
    "8\u0005\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:;\u0005\u0012",
    "\n\u0002;\u0007\u0003\u0002\u0002\u0002<=\u0007&\u0002\u0002=>\u0005",
    "\u0004\u0003\u0002>?\u0007\u0010\u0002\u0002?F\u0003\u0002\u0002\u0002",
    "@A\u0005\u0010\t\u0002AB\u0005\u0004\u0003\u0002BF\u0003\u0002\u0002",
    "\u0002CF\u0005\u0012\n\u0002DF\u0005\u0014\u000b\u0002E<\u0003\u0002",
    "\u0002\u0002E@\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002ED\u0003",
    "\u0002\u0002\u0002F\t\u0003\u0002\u0002\u0002GH\t\u0002\u0002\u0002",
    "H\u000b\u0003\u0002\u0002\u0002IJ\t\u0003\u0002\u0002J\r\u0003\u0002",
    "\u0002\u0002KL\t\u0004\u0002\u0002L\u000f\u0003\u0002\u0002\u0002MN",
    "\t\u0005\u0002\u0002N\u0011\u0003\u0002\u0002\u0002OP\u0007\u0003\u0002",
    "\u0002P\u0013\u0003\u0002\u0002\u0002QR\u0007\'\u0002\u0002R\u0015\u0003",
    "\u0002\u0002\u0002SZ\u0007\u0004\u0002\u0002TU\u0007\u0013\u0002\u0002",
    "UZ\u0007\u0004\u0002\u0002VW\u0007\u0004\u0002\u0002WX\u0007\u0013\u0002",
    "\u0002XZ\u0007\u0004\u0002\u0002YS\u0003\u0002\u0002\u0002YT\u0003\u0002",
    "\u0002\u0002YV\u0003\u0002\u0002\u0002Z\u0017\u0003\u0002\u0002\u0002",
    "\u0007)57EY"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'\\Abs '", "'\\acos '", 
                     "'+'", "'\\->'", "'\\asin '", "'\\atan '", "':'", "','", 
                     "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", 
                     "'='", "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", 
                     "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\<='", 
                     "'\\Locate '", "'\\LpWhile '", "'<'", "'%'", "'*'", 
                     "'\\<>'", "'\\Next'", "'('", "'\\Pi'", "'\\sin '", 
                     "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", 
                     "' \\To '", "'\\While '", "'\\WhileEnd'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ABS", "ACOS", 
                      "ADD", "ARROW", "ASIN", "ATAN", "COLON", "COMMA", 
                      "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQUAL", 
                      "FATARROW", "FOR", "GE", "GETKEY", "GT", "IF", "IFEND", 
                      "INT", "LE", "LOCATE", "LOOPWHILE", "LT", "REMAIN", 
                      "MUL", "NE", "NEXT", "OPAR", "PI", "SIN", "SQRT", 
                      "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND" ];

var ruleNames =  [ "boolExpr", "numExpr", "stoExpr", "vectorExpr", "compOp", 
                   "multOp", "addOp", "func", "variable", "constant", "number" ];

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
ExprsParser.ABS = 5;
ExprsParser.ACOS = 6;
ExprsParser.ADD = 7;
ExprsParser.ARROW = 8;
ExprsParser.ASIN = 9;
ExprsParser.ATAN = 10;
ExprsParser.COLON = 11;
ExprsParser.COMMA = 12;
ExprsParser.COS = 13;
ExprsParser.CPAR = 14;
ExprsParser.DIV = 15;
ExprsParser.DO = 16;
ExprsParser.DOT = 17;
ExprsParser.ELSE = 18;
ExprsParser.EQUAL = 19;
ExprsParser.FATARROW = 20;
ExprsParser.FOR = 21;
ExprsParser.GE = 22;
ExprsParser.GETKEY = 23;
ExprsParser.GT = 24;
ExprsParser.IF = 25;
ExprsParser.IFEND = 26;
ExprsParser.INT = 27;
ExprsParser.LE = 28;
ExprsParser.LOCATE = 29;
ExprsParser.LOOPWHILE = 30;
ExprsParser.LT = 31;
ExprsParser.REMAIN = 32;
ExprsParser.MUL = 33;
ExprsParser.NE = 34;
ExprsParser.NEXT = 35;
ExprsParser.OPAR = 36;
ExprsParser.PI = 37;
ExprsParser.SIN = 38;
ExprsParser.SQRT = 39;
ExprsParser.STEP = 40;
ExprsParser.SUB = 41;
ExprsParser.TAN = 42;
ExprsParser.THEN = 43;
ExprsParser.TO = 44;
ExprsParser.WHILE = 45;
ExprsParser.WHILEEND = 46;

ExprsParser.RULE_boolExpr = 0;
ExprsParser.RULE_numExpr = 1;
ExprsParser.RULE_stoExpr = 2;
ExprsParser.RULE_vectorExpr = 3;
ExprsParser.RULE_compOp = 4;
ExprsParser.RULE_multOp = 5;
ExprsParser.RULE_addOp = 6;
ExprsParser.RULE_func = 7;
ExprsParser.RULE_variable = 8;
ExprsParser.RULE_constant = 9;
ExprsParser.RULE_number = 10;

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
        this.state = 22;
        this.numExpr(0);
        this.state = 23;
        this.compOp();
        this.state = 24;
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

function ComputeContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComputeContext.prototype = Object.create(NumExprContext.prototype);
ComputeContext.prototype.constructor = ComputeContext;

ExprsParser.ComputeContext = ComputeContext;

ComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

ComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
ComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterCompute(this);
	}
};

ComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitCompute(this);
	}
};

ComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
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


function ParensContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(NumExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

ExprsParser.ParensContext = ParensContext;

ParensContext.prototype.OPAR = function() {
    return this.getToken(ExprsParser.OPAR, 0);
};

ParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ParensContext.prototype.CPAR = function() {
    return this.getToken(ExprsParser.CPAR, 0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitParens(this);
	}
};

ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ScalarMultContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ScalarMultContext.prototype = Object.create(NumExprContext.prototype);
ScalarMultContext.prototype.constructor = ScalarMultContext;

ExprsParser.ScalarMultContext = ScalarMultContext;

ScalarMultContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ScalarMultContext.prototype.vectorExpr = function() {
    return this.getTypedRuleContext(VectorExprContext,0);
};
ScalarMultContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterScalarMult(this);
	}
};

ScalarMultContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitScalarMult(this);
	}
};

ScalarMultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitScalarMult(this);
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


function ConstEvaluateContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstEvaluateContext.prototype = Object.create(NumExprContext.prototype);
ConstEvaluateContext.prototype.constructor = ConstEvaluateContext;

ExprsParser.ConstEvaluateContext = ConstEvaluateContext;

ConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitConstEvaluate(this);
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
        this.state = 39;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.OPAR:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 27;
            this.match(ExprsParser.OPAR);
            this.state = 28;
            this.numExpr(0);
            this.state = 29;
            this.match(ExprsParser.CPAR);
            break;
        case ExprsParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 31;
            this.match(ExprsParser.SUB);
            this.state = 32;
            this.numExpr(8);
            break;
        case ExprsParser.ABS:
        case ExprsParser.ACOS:
        case ExprsParser.ASIN:
        case ExprsParser.ATAN:
        case ExprsParser.COS:
        case ExprsParser.INT:
        case ExprsParser.SIN:
        case ExprsParser.SQRT:
        case ExprsParser.TAN:
            localctx = new ComputeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 33;
            this.func();
            this.state = 34;
            this.numExpr(7);
            break;
        case ExprsParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 36;
            this.variable();
            break;
        case ExprsParser.PI:
            localctx = new ConstEvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 37;
            this.constant();
            break;
        case ExprsParser.UINT:
        case ExprsParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 38;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 53;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 51;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 41;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 42;
                    this.multOp();
                    this.state = 43;
                    this.numExpr(6);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 45;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 46;
                    this.addOp();
                    this.state = 47;
                    this.numExpr(5);
                    break;

                case 3:
                    localctx = new ScalarMultContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 49;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 50;
                    this.vectorExpr();
                    break;

                } 
            }
            this.state = 55;
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
        this.state = 56;
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

function VectorExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_vectorExpr;
    return this;
}

VectorExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VectorExprContext.prototype.constructor = VectorExprContext;


 
VectorExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VParensContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VParensContext.prototype = Object.create(VectorExprContext.prototype);
VParensContext.prototype.constructor = VParensContext;

ExprsParser.VParensContext = VParensContext;

VParensContext.prototype.OPAR = function() {
    return this.getToken(ExprsParser.OPAR, 0);
};

VParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

VParensContext.prototype.CPAR = function() {
    return this.getToken(ExprsParser.CPAR, 0);
};
VParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVParens(this);
	}
};

VParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVParens(this);
	}
};

VParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitVParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VEvaluateContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VEvaluateContext.prototype = Object.create(VectorExprContext.prototype);
VEvaluateContext.prototype.constructor = VEvaluateContext;

ExprsParser.VEvaluateContext = VEvaluateContext;

VEvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVEvaluate(this);
	}
};

VEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVEvaluate(this);
	}
};

VEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitVEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VConstEvaluateContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VConstEvaluateContext.prototype = Object.create(VectorExprContext.prototype);
VConstEvaluateContext.prototype.constructor = VConstEvaluateContext;

ExprsParser.VConstEvaluateContext = VConstEvaluateContext;

VConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
VConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitVConstEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VComputeContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VComputeContext.prototype = Object.create(VectorExprContext.prototype);
VComputeContext.prototype.constructor = VComputeContext;

ExprsParser.VComputeContext = VComputeContext;

VComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

VComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
VComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVCompute(this);
	}
};

VComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVCompute(this);
	}
};

VComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitVCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprsParser.VectorExprContext = VectorExprContext;

ExprsParser.prototype.vectorExpr = function() {

    var localctx = new VectorExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprsParser.RULE_vectorExpr);
    try {
        this.state = 67;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.OPAR:
            localctx = new VParensContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.match(ExprsParser.OPAR);
            this.state = 59;
            this.numExpr(0);
            this.state = 60;
            this.match(ExprsParser.CPAR);
            break;
        case ExprsParser.ABS:
        case ExprsParser.ACOS:
        case ExprsParser.ASIN:
        case ExprsParser.ATAN:
        case ExprsParser.COS:
        case ExprsParser.INT:
        case ExprsParser.SIN:
        case ExprsParser.SQRT:
        case ExprsParser.TAN:
            localctx = new VComputeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.func();
            this.state = 63;
            this.numExpr(0);
            break;
        case ExprsParser.ID:
            localctx = new VEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 65;
            this.variable();
            break;
        case ExprsParser.PI:
            localctx = new VConstEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 66;
            this.constant();
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

CompOpContext.prototype.NE = function() {
    return this.getToken(ExprsParser.NE, 0);
};

CompOpContext.prototype.GT = function() {
    return this.getToken(ExprsParser.GT, 0);
};

CompOpContext.prototype.GE = function() {
    return this.getToken(ExprsParser.GE, 0);
};

CompOpContext.prototype.LT = function() {
    return this.getToken(ExprsParser.LT, 0);
};

CompOpContext.prototype.LE = function() {
    return this.getToken(ExprsParser.LE, 0);
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
    this.enterRule(localctx, 8, ExprsParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (ExprsParser.EQUAL - 19)) | (1 << (ExprsParser.GE - 19)) | (1 << (ExprsParser.GT - 19)) | (1 << (ExprsParser.LE - 19)) | (1 << (ExprsParser.LT - 19)) | (1 << (ExprsParser.NE - 19)))) !== 0))) {
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

MultOpContext.prototype.REMAIN = function() {
    return this.getToken(ExprsParser.REMAIN, 0);
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
    this.enterRule(localctx, 10, ExprsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if(!(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (ExprsParser.DIV - 15)) | (1 << (ExprsParser.REMAIN - 15)) | (1 << (ExprsParser.MUL - 15)))) !== 0))) {
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
    this.enterRule(localctx, 12, ExprsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
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

function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(ExprsParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(ExprsParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(ExprsParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(ExprsParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(ExprsParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(ExprsParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(ExprsParser.ATAN, 0);
};

FuncContext.prototype.ABS = function() {
    return this.getToken(ExprsParser.ABS, 0);
};

FuncContext.prototype.INT = function() {
    return this.getToken(ExprsParser.INT, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.FuncContext = FuncContext;

ExprsParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ExprsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprsParser.ABS) | (1 << ExprsParser.ACOS) | (1 << ExprsParser.ASIN) | (1 << ExprsParser.ATAN) | (1 << ExprsParser.COS) | (1 << ExprsParser.INT))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ExprsParser.SIN - 38)) | (1 << (ExprsParser.SQRT - 38)) | (1 << (ExprsParser.TAN - 38)))) !== 0))) {
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
    this.enterRule(localctx, 16, ExprsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
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

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(ExprsParser.PI, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.ConstantContext = ConstantContext;

ExprsParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ExprsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(ExprsParser.PI);
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
    this.enterRule(localctx, 20, ExprsParser.RULE_number);
    try {
        this.state = 87;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.match(ExprsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.match(ExprsParser.DOT);
            this.state = 83;
            this.match(ExprsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 84;
            this.match(ExprsParser.UINT);
            this.state = 85;
            this.match(ExprsParser.DOT);
            this.state = 86;
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
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprsParser = ExprsParser;
