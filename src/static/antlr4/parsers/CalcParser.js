// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003&\u0085\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0007\u0002&\n\u0002",
    "\f\u0002\u000e\u0002)\u000b\u0002\u0003\u0003\u0006\u0003,\n\u0003\r",
    "\u0003\u000e\u0003-\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "9\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006G\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007P\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b`\n\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bj",
    "\n\b\f\b\u000e\bm\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0002\u0003\u000e\u0013",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"\u0002\t\u0005\u0002  ##&&\u0004\u0002\u0006\u0006$$\u0003",
    "\u0002\u0007\r\u0003\u0002\u000e\u000f\u0003\u0002\u0010\u0011\u0003",
    "\u0002\u0012\u0017\u0003\u0002\u0018\u0019\u0002\u007f\u0002\'\u0003",
    "\u0002\u0002\u0002\u0004+\u0003\u0002\u0002\u0002\u00068\u0003\u0002",
    "\u0002\u0002\b:\u0003\u0002\u0002\u0002\nF\u0003\u0002\u0002\u0002\f",
    "H\u0003\u0002\u0002\u0002\u000e_\u0003\u0002\u0002\u0002\u0010n\u0003",
    "\u0002\u0002\u0002\u0012p\u0003\u0002\u0002\u0002\u0014t\u0003\u0002",
    "\u0002\u0002\u0016v\u0003\u0002\u0002\u0002\u0018x\u0003\u0002\u0002",
    "\u0002\u001az\u0003\u0002\u0002\u0002\u001c|\u0003\u0002\u0002\u0002",
    "\u001e~\u0003\u0002\u0002\u0002 \u0080\u0003\u0002\u0002\u0002\"\u0082",
    "\u0003\u0002\u0002\u0002$&\u0005\u0004\u0003\u0002%$\u0003\u0002\u0002",
    "\u0002&)\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003",
    "\u0002\u0002\u0002(\u0003\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002",
    "\u0002*,\u0005\u0006\u0004\u0002+*\u0003\u0002\u0002\u0002,-\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.\u0005",
    "\u0003\u0002\u0002\u0002/0\u0005\b\u0005\u000201\u0005\u0018\r\u0002",
    "19\u0003\u0002\u0002\u000223\u0005\n\u0006\u000234\u0005\u0018\r\u0002",
    "49\u0003\u0002\u0002\u000256\u0005\f\u0007\u000267\u0005\u0018\r\u0002",
    "79\u0003\u0002\u0002\u00028/\u0003\u0002\u0002\u000282\u0003\u0002\u0002",
    "\u000285\u0003\u0002\u0002\u00029\u0007\u0003\u0002\u0002\u0002:;\u0005",
    "\u000e\b\u0002;<\u0007\u001a\u0002\u0002<=\u0005\u0010\t\u0002=\t\u0003",
    "\u0002\u0002\u0002>G\u0007%\u0002\u0002?@\u0007\u001f\u0002\u0002@A",
    "\u0005\u000e\b\u0002AB\u0007\u0003\u0002\u0002BC\u0005\u000e\b\u0002",
    "CD\u0007\u0003\u0002\u0002DE\u0005\u000e\b\u0002EG\u0003\u0002\u0002",
    "\u0002F>\u0003\u0002\u0002\u0002F?\u0003\u0002\u0002\u0002G\u000b\u0003",
    "\u0002\u0002\u0002HI\u0007\u001d\u0002\u0002IJ\u0005\u0012\n\u0002J",
    "K\u0005\u0018\r\u0002KL\u0007!\u0002\u0002LO\u0005\u0004\u0003\u0002",
    "MN\u0007\u001c\u0002\u0002NP\u0005\u0004\u0003\u0002OM\u0003\u0002\u0002",
    "\u0002OP\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0007\u001e",
    "\u0002\u0002R\r\u0003\u0002\u0002\u0002ST\b\b\u0001\u0002TU\u0007\u0004",
    "\u0002\u0002UV\u0005\u000e\b\u0002VW\u0007\u0005\u0002\u0002W`\u0003",
    "\u0002\u0002\u0002XY\u0007\u000f\u0002\u0002Y`\u0005\u000e\b\bZ[\u0005",
    "\u001a\u000e\u0002[\\\u0005\u000e\b\u0007\\`\u0003\u0002\u0002\u0002",
    "]`\u0005\u0014\u000b\u0002^`\u0005\u0016\f\u0002_S\u0003\u0002\u0002",
    "\u0002_X\u0003\u0002\u0002\u0002_Z\u0003\u0002\u0002\u0002_]\u0003\u0002",
    "\u0002\u0002_^\u0003\u0002\u0002\u0002`k\u0003\u0002\u0002\u0002ab\f",
    "\u0006\u0002\u0002bc\u0005\u001e\u0010\u0002cd\u0005\u000e\b\u0007d",
    "j\u0003\u0002\u0002\u0002ef\f\u0005\u0002\u0002fg\u0005\u001c\u000f",
    "\u0002gh\u0005\u000e\b\u0006hj\u0003\u0002\u0002\u0002ia\u0003\u0002",
    "\u0002\u0002ie\u0003\u0002\u0002\u0002jm\u0003\u0002\u0002\u0002ki\u0003",
    "\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l\u000f\u0003\u0002\u0002",
    "\u0002mk\u0003\u0002\u0002\u0002no\u0005\u0014\u000b\u0002o\u0011\u0003",
    "\u0002\u0002\u0002pq\u0005\u000e\b\u0002qr\u0005 \u0011\u0002rs\u0005",
    "\u000e\b\u0002s\u0013\u0003\u0002\u0002\u0002tu\u0007\"\u0002\u0002",
    "u\u0015\u0003\u0002\u0002\u0002vw\t\u0002\u0002\u0002w\u0017\u0003\u0002",
    "\u0002\u0002xy\t\u0003\u0002\u0002y\u0019\u0003\u0002\u0002\u0002z{",
    "\t\u0004\u0002\u0002{\u001b\u0003\u0002\u0002\u0002|}\t\u0005\u0002",
    "\u0002}\u001d\u0003\u0002\u0002\u0002~\u007f\t\u0006\u0002\u0002\u007f",
    "\u001f\u0003\u0002\u0002\u0002\u0080\u0081\t\u0007\u0002\u0002\u0081",
    "!\u0003\u0002\u0002\u0002\u0082\u0083\t\b\u0002\u0002\u0083#\u0003\u0002",
    "\u0002\u0002\n\'-8FO_ik"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'('", "')'", "':'", "'\\sqrt'", "'\\cos '", 
                     "'\\sin '", "'\\tan '", "'\\acos '", "'\\asin '", "'\\atan '", 
                     "'+'", "'-'", "'*'", "'/'", "'='", "'\\<>'", "'>'", 
                     "'\\>='", "'<'", "'\\<='", "'\\ And '", "'\\ Or '", 
                     "'\\->'", "'\\=>'", "'\\Else '", "'\\If '", "'\\IfEnd'", 
                     "'\\Locate '", "'\\Pi'", "'\\Then '", null, null, null, 
                     null, "'0'" ];

var symbolicNames = [ null, null, null, null, null, "SQRT", "COS", "SIN", 
                      "TAN", "ACOS", "ASIN", "ATAN", "ADD", "SUB", "MUL", 
                      "DIV", "EQ", "NE", "GT", "GE", "LT", "LE", "AND", 
                      "OR", "ARROW", "FATARROW", "ELSE", "IF", "IFEND", 
                      "LOCATE", "PI", "THEN", "ID", "NATNUM", "NEWLINE", 
                      "STRING", "ZERO" ];

var ruleNames =  [ "prog", "block", "stat", "assignStat", "printStat", "ifStat", 
                   "evalExpr", "stoExpr", "boolExpr", "variable", "number", 
                   "endStat", "func", "addOp", "multOp", "compOp", "boolOP" ];

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
CalcParser.T__3 = 4;
CalcParser.SQRT = 5;
CalcParser.COS = 6;
CalcParser.SIN = 7;
CalcParser.TAN = 8;
CalcParser.ACOS = 9;
CalcParser.ASIN = 10;
CalcParser.ATAN = 11;
CalcParser.ADD = 12;
CalcParser.SUB = 13;
CalcParser.MUL = 14;
CalcParser.DIV = 15;
CalcParser.EQ = 16;
CalcParser.NE = 17;
CalcParser.GT = 18;
CalcParser.GE = 19;
CalcParser.LT = 20;
CalcParser.LE = 21;
CalcParser.AND = 22;
CalcParser.OR = 23;
CalcParser.ARROW = 24;
CalcParser.FATARROW = 25;
CalcParser.ELSE = 26;
CalcParser.IF = 27;
CalcParser.IFEND = 28;
CalcParser.LOCATE = 29;
CalcParser.PI = 30;
CalcParser.THEN = 31;
CalcParser.ID = 32;
CalcParser.NATNUM = 33;
CalcParser.NEWLINE = 34;
CalcParser.STRING = 35;
CalcParser.ZERO = 36;

CalcParser.RULE_prog = 0;
CalcParser.RULE_block = 1;
CalcParser.RULE_stat = 2;
CalcParser.RULE_assignStat = 3;
CalcParser.RULE_printStat = 4;
CalcParser.RULE_ifStat = 5;
CalcParser.RULE_evalExpr = 6;
CalcParser.RULE_stoExpr = 7;
CalcParser.RULE_boolExpr = 8;
CalcParser.RULE_variable = 9;
CalcParser.RULE_number = 10;
CalcParser.RULE_endStat = 11;
CalcParser.RULE_func = 12;
CalcParser.RULE_addOp = 13;
CalcParser.RULE_multOp = 14;
CalcParser.RULE_compOp = 15;
CalcParser.RULE_boolOP = 16;

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

ProgContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
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
        this.state = 37;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.SUB) | (1 << CalcParser.IF) | (1 << CalcParser.LOCATE) | (1 << CalcParser.PI))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CalcParser.ID - 32)) | (1 << (CalcParser.NATNUM - 32)) | (1 << (CalcParser.STRING - 32)) | (1 << (CalcParser.ZERO - 32)))) !== 0)) {
            this.state = 34;
            this.block();
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BlockContext = BlockContext;

CalcParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalcParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 40;
        		this.stat();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 43; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.assignStat = function() {
    return this.getTypedRuleContext(AssignStatContext,0);
};

StatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

StatContext.prototype.printStat = function() {
    return this.getTypedRuleContext(PrintStatContext,0);
};

StatContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitStat(this);
	}
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.StatContext = StatContext;

CalcParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalcParser.RULE_stat);
    try {
        this.state = 54;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.T__1:
        case CalcParser.SQRT:
        case CalcParser.COS:
        case CalcParser.SIN:
        case CalcParser.TAN:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
        case CalcParser.SUB:
        case CalcParser.PI:
        case CalcParser.ID:
        case CalcParser.NATNUM:
        case CalcParser.ZERO:
            this.enterOuterAlt(localctx, 1);
            this.state = 45;
            this.assignStat();
            this.state = 46;
            this.endStat();
            break;
        case CalcParser.LOCATE:
        case CalcParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.printStat();
            this.state = 49;
            this.endStat();
            break;
        case CalcParser.IF:
            this.enterOuterAlt(localctx, 3);
            this.state = 51;
            this.ifStat();
            this.state = 52;
            this.endStat();
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
    this.ruleIndex = CalcParser.RULE_assignStat;
    return this;
}

AssignStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatContext.prototype.constructor = AssignStatContext;

AssignStatContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

AssignStatContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

AssignStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

AssignStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAssignStat(this);
	}
};

AssignStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAssignStat(this);
	}
};

AssignStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAssignStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AssignStatContext = AssignStatContext;

CalcParser.prototype.assignStat = function() {

    var localctx = new AssignStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalcParser.RULE_assignStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.evalExpr(0);
        this.state = 57;
        this.match(CalcParser.ARROW);
        this.state = 58;
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
    this.ruleIndex = CalcParser.RULE_printStat;
    return this;
}

PrintStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatContext.prototype.constructor = PrintStatContext;


 
PrintStatContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PrintContext(parser, ctx) {
	PrintStatContext.call(this, parser);
    PrintStatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintContext.prototype = Object.create(PrintStatContext.prototype);
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
	PrintStatContext.call(this, parser);
    PrintStatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintAtContext.prototype = Object.create(PrintStatContext.prototype);
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



CalcParser.PrintStatContext = PrintStatContext;

CalcParser.prototype.printStat = function() {

    var localctx = new PrintStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalcParser.RULE_printStat);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.match(CalcParser.LOCATE);
            this.state = 62;
            this.evalExpr(0);
            this.state = 63;
            this.match(CalcParser.T__0);
            this.state = 64;
            this.evalExpr(0);
            this.state = 65;
            this.match(CalcParser.T__0);
            this.state = 66;
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

function IfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.IF = function() {
    return this.getToken(CalcParser.IF, 0);
};

IfStatContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

IfStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

IfStatContext.prototype.THEN = function() {
    return this.getToken(CalcParser.THEN, 0);
};

IfStatContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

IfStatContext.prototype.IFEND = function() {
    return this.getToken(CalcParser.IFEND, 0);
};

IfStatContext.prototype.ELSE = function() {
    return this.getToken(CalcParser.ELSE, 0);
};

IfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterIfStat(this);
	}
};

IfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitIfStat(this);
	}
};

IfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.IfStatContext = IfStatContext;

CalcParser.prototype.ifStat = function() {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalcParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(CalcParser.IF);
        this.state = 71;
        this.boolExpr();
        this.state = 72;
        this.endStat();
        this.state = 73;
        this.match(CalcParser.THEN);
        this.state = 74;
        this.block();
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CalcParser.ELSE) {
            this.state = 75;
            this.match(CalcParser.ELSE);
            this.state = 76;
            this.block();
        }

        this.state = 79;
        this.match(CalcParser.IFEND);
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

AddContext.prototype.addOp = function() {
    return this.getTypedRuleContext(AddOpContext,0);
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

MultiplyContext.prototype.multOp = function() {
    return this.getTypedRuleContext(MultOpContext,0);
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
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, CalcParser.RULE_evalExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.T__1:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 82;
            this.match(CalcParser.T__1);
            this.state = 83;
            this.evalExpr(0);
            this.state = 84;
            this.match(CalcParser.T__2);
            break;
        case CalcParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 86;
            this.match(CalcParser.SUB);
            this.state = 87;
            this.evalExpr(6);
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
            this.state = 88;
            this.func();
            this.state = 89;
            this.evalExpr(5);
            break;
        case CalcParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 91;
            this.variable();
            break;
        case CalcParser.PI:
        case CalcParser.NATNUM:
        case CalcParser.ZERO:
            localctx = new ParseFloatContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 92;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 105;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 103;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 95;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 96;
                    this.multOp();
                    this.state = 97;
                    this.evalExpr(5);
                    break;

                case 2:
                    localctx = new AddContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 99;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 100;
                    this.addOp();
                    this.state = 101;
                    this.evalExpr(4);
                    break;

                } 
            }
            this.state = 107;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
    this.enterRule(localctx, 14, CalcParser.RULE_stoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
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

function BoolExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_boolExpr;
    return this;
}

BoolExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolExprContext.prototype.constructor = BoolExprContext;

BoolExprContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

BoolExprContext.prototype.compOp = function() {
    return this.getTypedRuleContext(CompOpContext,0);
};

BoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBoolExpr(this);
	}
};

BoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBoolExpr(this);
	}
};

BoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBoolExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BoolExprContext = BoolExprContext;

CalcParser.prototype.boolExpr = function() {

    var localctx = new BoolExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CalcParser.RULE_boolExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.evalExpr(0);
        this.state = 111;
        this.compOp();
        this.state = 112;
        this.evalExpr(0);
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
    this.enterRule(localctx, 18, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
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
    this.enterRule(localctx, 20, CalcParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        _la = this._input.LA(1);
        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (CalcParser.PI - 30)) | (1 << (CalcParser.NATNUM - 30)) | (1 << (CalcParser.ZERO - 30)))) !== 0))) {
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
    this.ruleIndex = CalcParser.RULE_endStat;
    return this;
}

EndStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatContext.prototype.constructor = EndStatContext;

EndStatContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EndStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEndStat(this);
	}
};

EndStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEndStat(this);
	}
};

EndStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEndStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EndStatContext = EndStatContext;

CalcParser.prototype.endStat = function() {

    var localctx = new EndStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CalcParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.T__3 || _la===CalcParser.NEWLINE)) {
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
    this.enterRule(localctx, 24, CalcParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
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

function AddOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function() {
    return this.getToken(CalcParser.ADD, 0);
};

AddOpContext.prototype.SUB = function() {
    return this.getToken(CalcParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAddOp(this);
	}
};

AddOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AddOpContext = AddOpContext;

CalcParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CalcParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.ADD || _la===CalcParser.SUB)) {
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
    this.ruleIndex = CalcParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function() {
    return this.getToken(CalcParser.MUL, 0);
};

MultOpContext.prototype.DIV = function() {
    return this.getToken(CalcParser.DIV, 0);
};

MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMultOp(this);
	}
};

MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MultOpContext = MultOpContext;

CalcParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CalcParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.MUL || _la===CalcParser.DIV)) {
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
    this.ruleIndex = CalcParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQ = function() {
    return this.getToken(CalcParser.EQ, 0);
};

CompOpContext.prototype.NE = function() {
    return this.getToken(CalcParser.NE, 0);
};

CompOpContext.prototype.GT = function() {
    return this.getToken(CalcParser.GT, 0);
};

CompOpContext.prototype.GE = function() {
    return this.getToken(CalcParser.GE, 0);
};

CompOpContext.prototype.LT = function() {
    return this.getToken(CalcParser.LT, 0);
};

CompOpContext.prototype.LE = function() {
    return this.getToken(CalcParser.LE, 0);
};

CompOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterCompOp(this);
	}
};

CompOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitCompOp(this);
	}
};

CompOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.CompOpContext = CompOpContext;

CalcParser.prototype.compOp = function() {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CalcParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.EQ) | (1 << CalcParser.NE) | (1 << CalcParser.GT) | (1 << CalcParser.GE) | (1 << CalcParser.LT) | (1 << CalcParser.LE))) !== 0))) {
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
    this.ruleIndex = CalcParser.RULE_boolOP;
    return this;
}

BoolOPContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOPContext.prototype.constructor = BoolOPContext;

BoolOPContext.prototype.AND = function() {
    return this.getToken(CalcParser.AND, 0);
};

BoolOPContext.prototype.OR = function() {
    return this.getToken(CalcParser.OR, 0);
};

BoolOPContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBoolOP(this);
	}
};

BoolOPContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBoolOP(this);
	}
};

BoolOPContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBoolOP(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BoolOPContext = BoolOPContext;

CalcParser.prototype.boolOP = function() {

    var localctx = new BoolOPContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CalcParser.RULE_boolOP);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.AND || _la===CalcParser.OR)) {
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
	case 6:
			return this.evalExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalcParser.prototype.evalExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalcParser = CalcParser;
