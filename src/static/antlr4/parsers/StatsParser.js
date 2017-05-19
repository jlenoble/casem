// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StatsListener = require('./StatsListener').StatsListener;
var StatsVisitor = require('./StatsVisitor').StatsVisitor;

var grammarFileName = "Stats.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013`\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002 \n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004.\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b?",
    "\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0007\bI\n\b\f\b\u000e\bL\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e^",
    "\n\u000e\u0003\u000e\u0002\u0003\u000e\u000f\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0005\u0004\u0002\u0006",
    "\u0006\t\t\u0004\u0002\u000b\u000b\u0012\u0012\u0004\u0002\u0007\u0007",
    "\u0013\u0013\u0002[\u0002\u001f\u0003\u0002\u0002\u0002\u0004!\u0003",
    "\u0002\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\b/\u0003\u0002\u0002",
    "\u0002\n3\u0003\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e>",
    "\u0003\u0002\u0002\u0002\u0010M\u0003\u0002\u0002\u0002\u0012O\u0003",
    "\u0002\u0002\u0002\u0014Q\u0003\u0002\u0002\u0002\u0016S\u0003\u0002",
    "\u0002\u0002\u0018U\u0003\u0002\u0002\u0002\u001a]\u0003\u0002\u0002",
    "\u0002\u001c \u0005\u0004\u0003\u0002\u001d \u0005\u0006\u0004\u0002",
    "\u001e \u0005\b\u0005\u0002\u001f\u001c\u0003\u0002\u0002\u0002\u001f",
    "\u001d\u0003\u0002\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 ",
    "\u0003\u0003\u0002\u0002\u0002!\"\u0005\u000e\b\u0002\"#\u0007\b\u0002",
    "\u0002#$\u0005\u0010\t\u0002$\u0005\u0003\u0002\u0002\u0002%.\u0007",
    "\u0005\u0002\u0002&\'\u0007\u0010\u0002\u0002\'(\u0005\u000e\b\u0002",
    "()\u0007\n\u0002\u0002)*\u0005\u000e\b\u0002*+\u0007\n\u0002\u0002+",
    ",\u0005\u000e\b\u0002,.\u0003\u0002\u0002\u0002-%\u0003\u0002\u0002",
    "\u0002-&\u0003\u0002\u0002\u0002.\u0007\u0003\u0002\u0002\u0002/0\u0007",
    "\u000f\u0002\u000201\u0007\b\u0002\u000212\u0005\u0010\t\u00022\t\u0003",
    "\u0002\u0002\u000234\t\u0002\u0002\u00024\u000b\u0003\u0002\u0002\u0002",
    "56\u0005\u000e\b\u000267\u0005\u0012\n\u000278\u0005\u000e\b\u00028",
    "\r\u0003\u0002\u0002\u00029:\b\b\u0001\u0002:;\u0007\u0013\u0002\u0002",
    ";?\u0005\u000e\b\u0007<?\u0005\u0018\r\u0002=?\u0005\u001a\u000e\u0002",
    ">9\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002",
    "\u0002?J\u0003\u0002\u0002\u0002@A\f\u0006\u0002\u0002AB\u0005\u0014",
    "\u000b\u0002BC\u0005\u000e\b\u0007CI\u0003\u0002\u0002\u0002DE\f\u0005",
    "\u0002\u0002EF\u0005\u0016\f\u0002FG\u0005\u000e\b\u0006GI\u0003\u0002",
    "\u0002\u0002H@\u0003\u0002\u0002\u0002HD\u0003\u0002\u0002\u0002IL\u0003",
    "\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002",
    "K\u000f\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\u0005\u0018",
    "\r\u0002N\u0011\u0003\u0002\u0002\u0002OP\u0007\u000e\u0002\u0002P\u0013",
    "\u0003\u0002\u0002\u0002QR\t\u0003\u0002\u0002R\u0015\u0003\u0002\u0002",
    "\u0002ST\t\u0004\u0002\u0002T\u0017\u0003\u0002\u0002\u0002UV\u0007",
    "\u0003\u0002\u0002V\u0019\u0003\u0002\u0002\u0002W^\u0007\u0004\u0002",
    "\u0002XY\u0007\r\u0002\u0002Y^\u0007\u0004\u0002\u0002Z[\u0007\u0004",
    "\u0002\u0002[\\\u0007\r\u0002\u0002\\^\u0007\u0004\u0002\u0002]W\u0003",
    "\u0002\u0002\u0002]X\u0003\u0002\u0002\u0002]Z\u0003\u0002\u0002\u0002",
    "^\u001b\u0003\u0002\u0002\u0002\b\u001f->HJ]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'+'", "'\\->'", "':'", 
                     "','", "'/'", "'\\Do'", "'.'", "'='", "'\\Getkey'", 
                     "'\\Locate '", "'\\LpWhile '", "'*'", "'-'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ADD", "ARROW", 
                      "COLON", "COMMA", "DIV", "DO", "DOT", "EQUAL", "GETKEY", 
                      "LOCATE", "LOOPWHILE", "MUL", "SUB" ];

var ruleNames =  [ "stat", "assignStat", "printStat", "readStat", "endStat", 
                   "boolExpr", "numExpr", "stoExpr", "compOp", "multOp", 
                   "addOp", "variable", "number" ];

function StatsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StatsParser.prototype = Object.create(antlr4.Parser.prototype);
StatsParser.prototype.constructor = StatsParser;

Object.defineProperty(StatsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StatsParser.EOF = antlr4.Token.EOF;
StatsParser.ID = 1;
StatsParser.UINT = 2;
StatsParser.STRING = 3;
StatsParser.NEWLINE = 4;
StatsParser.ADD = 5;
StatsParser.ARROW = 6;
StatsParser.COLON = 7;
StatsParser.COMMA = 8;
StatsParser.DIV = 9;
StatsParser.DO = 10;
StatsParser.DOT = 11;
StatsParser.EQUAL = 12;
StatsParser.GETKEY = 13;
StatsParser.LOCATE = 14;
StatsParser.LOOPWHILE = 15;
StatsParser.MUL = 16;
StatsParser.SUB = 17;

StatsParser.RULE_stat = 0;
StatsParser.RULE_assignStat = 1;
StatsParser.RULE_printStat = 2;
StatsParser.RULE_readStat = 3;
StatsParser.RULE_endStat = 4;
StatsParser.RULE_boolExpr = 5;
StatsParser.RULE_numExpr = 6;
StatsParser.RULE_stoExpr = 7;
StatsParser.RULE_compOp = 8;
StatsParser.RULE_multOp = 9;
StatsParser.RULE_addOp = 10;
StatsParser.RULE_variable = 11;
StatsParser.RULE_number = 12;

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.assignStat = function() {
    return this.getTypedRuleContext(AssignStatContext,0);
};

StatContext.prototype.printStat = function() {
    return this.getTypedRuleContext(PrintStatContext,0);
};

StatContext.prototype.readStat = function() {
    return this.getTypedRuleContext(ReadStatContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitStat(this);
	}
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.StatContext = StatContext;

StatsParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StatsParser.RULE_stat);
    try {
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.ID:
        case StatsParser.UINT:
        case StatsParser.DOT:
        case StatsParser.SUB:
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.assignStat();
            break;
        case StatsParser.STRING:
        case StatsParser.LOCATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 27;
            this.printStat();
            break;
        case StatsParser.GETKEY:
            this.enterOuterAlt(localctx, 3);
            this.state = 28;
            this.readStat();
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

function AssignStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_assignStat;
    return this;
}

AssignStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatContext.prototype.constructor = AssignStatContext;

AssignStatContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

AssignStatContext.prototype.ARROW = function() {
    return this.getToken(StatsParser.ARROW, 0);
};

AssignStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

AssignStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterAssignStat(this);
	}
};

AssignStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitAssignStat(this);
	}
};

AssignStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitAssignStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.AssignStatContext = AssignStatContext;

StatsParser.prototype.assignStat = function() {

    var localctx = new AssignStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StatsParser.RULE_assignStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.numExpr(0);
        this.state = 32;
        this.match(StatsParser.ARROW);
        this.state = 33;
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

function PrintStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_printStat;
    return this;
}

PrintStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatContext.prototype.constructor = PrintStatContext;

PrintStatContext.prototype.STRING = function() {
    return this.getToken(StatsParser.STRING, 0);
};

PrintStatContext.prototype.LOCATE = function() {
    return this.getToken(StatsParser.LOCATE, 0);
};

PrintStatContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

PrintStatContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StatsParser.COMMA);
    } else {
        return this.getToken(StatsParser.COMMA, i);
    }
};


PrintStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterPrintStat(this);
	}
};

PrintStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitPrintStat(this);
	}
};

PrintStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitPrintStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.PrintStatContext = PrintStatContext;

StatsParser.prototype.printStat = function() {

    var localctx = new PrintStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StatsParser.RULE_printStat);
    try {
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.match(StatsParser.STRING);
            break;
        case StatsParser.LOCATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.match(StatsParser.LOCATE);
            this.state = 37;
            this.numExpr(0);
            this.state = 38;
            this.match(StatsParser.COMMA);
            this.state = 39;
            this.numExpr(0);
            this.state = 40;
            this.match(StatsParser.COMMA);
            this.state = 41;
            this.numExpr(0);
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

function ReadStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_readStat;
    return this;
}

ReadStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadStatContext.prototype.constructor = ReadStatContext;

ReadStatContext.prototype.GETKEY = function() {
    return this.getToken(StatsParser.GETKEY, 0);
};

ReadStatContext.prototype.ARROW = function() {
    return this.getToken(StatsParser.ARROW, 0);
};

ReadStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

ReadStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterReadStat(this);
	}
};

ReadStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitReadStat(this);
	}
};

ReadStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitReadStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.ReadStatContext = ReadStatContext;

StatsParser.prototype.readStat = function() {

    var localctx = new ReadStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StatsParser.RULE_readStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(StatsParser.GETKEY);
        this.state = 46;
        this.match(StatsParser.ARROW);
        this.state = 47;
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

function EndStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_endStat;
    return this;
}

EndStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatContext.prototype.constructor = EndStatContext;

EndStatContext.prototype.NEWLINE = function() {
    return this.getToken(StatsParser.NEWLINE, 0);
};

EndStatContext.prototype.COLON = function() {
    return this.getToken(StatsParser.COLON, 0);
};

EndStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterEndStat(this);
	}
};

EndStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitEndStat(this);
	}
};

EndStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitEndStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.EndStatContext = EndStatContext;

StatsParser.prototype.endStat = function() {

    var localctx = new EndStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StatsParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        _la = this._input.LA(1);
        if(!(_la===StatsParser.NEWLINE || _la===StatsParser.COLON)) {
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

function BoolExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_boolExpr;
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
    if(listener instanceof StatsListener ) {
        listener.enterBoolExpr(this);
	}
};

BoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitBoolExpr(this);
	}
};

BoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitBoolExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.BoolExprContext = BoolExprContext;

StatsParser.prototype.boolExpr = function() {

    var localctx = new BoolExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, StatsParser.RULE_boolExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.numExpr(0);
        this.state = 52;
        this.compOp();
        this.state = 53;
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
    this.ruleIndex = StatsParser.RULE_numExpr;
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

StatsParser.AddContext = AddContext;

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
    if(listener instanceof StatsListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitAdd(this);
	}
};

AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.NegateContext = NegateContext;

NegateContext.prototype.SUB = function() {
    return this.getToken(StatsParser.SUB, 0);
};

NegateContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
NegateContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterNegate(this);
	}
};

NegateContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitNegate(this);
	}
};

NegateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.ParseContext = ParseContext;

ParseContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.MultiplyContext = MultiplyContext;

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
    if(listener instanceof StatsListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMultiply(this);
	}
};

MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.EvaluateContext = EvaluateContext;

EvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
EvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterEvaluate(this);
	}
};

EvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitEvaluate(this);
	}
};

EvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StatsParser.prototype.numExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, StatsParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 56;
            this.match(StatsParser.SUB);
            this.state = 57;
            this.numExpr(5);
            break;
        case StatsParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 58;
            this.variable();
            break;
        case StatsParser.UINT:
        case StatsParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 59;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 72;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 70;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 62;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 63;
                    this.multOp();
                    this.state = 64;
                    this.numExpr(5);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 66;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 67;
                    this.addOp();
                    this.state = 68;
                    this.numExpr(4);
                    break;

                } 
            }
            this.state = 74;
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

function StoExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_stoExpr;
    return this;
}

StoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoExprContext.prototype.constructor = StoExprContext;

StoExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterStoExpr(this);
	}
};

StoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitStoExpr(this);
	}
};

StoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.StoExprContext = StoExprContext;

StatsParser.prototype.stoExpr = function() {

    var localctx = new StoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, StatsParser.RULE_stoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
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
    this.ruleIndex = StatsParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQUAL = function() {
    return this.getToken(StatsParser.EQUAL, 0);
};

CompOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterCompOp(this);
	}
};

CompOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitCompOp(this);
	}
};

CompOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.CompOpContext = CompOpContext;

StatsParser.prototype.compOp = function() {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, StatsParser.RULE_compOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(StatsParser.EQUAL);
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
    this.ruleIndex = StatsParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function() {
    return this.getToken(StatsParser.MUL, 0);
};

MultOpContext.prototype.DIV = function() {
    return this.getToken(StatsParser.DIV, 0);
};

MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMultOp(this);
	}
};

MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.MultOpContext = MultOpContext;

StatsParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, StatsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        _la = this._input.LA(1);
        if(!(_la===StatsParser.DIV || _la===StatsParser.MUL)) {
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
    this.ruleIndex = StatsParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function() {
    return this.getToken(StatsParser.ADD, 0);
};

AddOpContext.prototype.SUB = function() {
    return this.getToken(StatsParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitAddOp(this);
	}
};

AddOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.AddOpContext = AddOpContext;

StatsParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, StatsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        _la = this._input.LA(1);
        if(!(_la===StatsParser.ADD || _la===StatsParser.SUB)) {
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
    this.ruleIndex = StatsParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(StatsParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.VariableContext = VariableContext;

StatsParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, StatsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(StatsParser.ID);
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
    this.ruleIndex = StatsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StatsParser.UINT);
    } else {
        return this.getToken(StatsParser.UINT, i);
    }
};


NumberContext.prototype.DOT = function() {
    return this.getToken(StatsParser.DOT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.NumberContext = NumberContext;

StatsParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, StatsParser.RULE_number);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.match(StatsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.match(StatsParser.DOT);
            this.state = 87;
            this.match(StatsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 88;
            this.match(StatsParser.UINT);
            this.state = 89;
            this.match(StatsParser.DOT);
            this.state = 90;
            this.match(StatsParser.UINT);
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


StatsParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.numExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

StatsParser.prototype.numExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.StatsParser = StatsParser;
