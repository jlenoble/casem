// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013\u0084\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0007\u0002&\n",
    "\u0002\f\u0002\u000e\u0002)\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u0003.\n\u0003\r\u0003\u000e\u0003/\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006B\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\bP\n\b\u0005\bR\n\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\fc\n\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\fm\n\f\f\f",
    "\u000e\fp\u000b\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u0082\n\u0012\u0003\u0012\u0002\u0003\u0016\u0013\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002",
    "\u0005\u0004\u0002\u0006\u0006\t\t\u0004\u0002\u000b\u000b\u0012\u0012",
    "\u0004\u0002\u0007\u0007\u0013\u0013\u0002\u007f\u0002\'\u0003\u0002",
    "\u0002\u0002\u00044\u0003\u0002\u0002\u0002\u00066\u0003\u0002\u0002",
    "\u0002\b8\u0003\u0002\u0002\u0002\nA\u0003\u0002\u0002\u0002\fC\u0003",
    "\u0002\u0002\u0002\u000eQ\u0003\u0002\u0002\u0002\u0010S\u0003\u0002",
    "\u0002\u0002\u0012W\u0003\u0002\u0002\u0002\u0014Y\u0003\u0002\u0002",
    "\u0002\u0016b\u0003\u0002\u0002\u0002\u0018q\u0003\u0002\u0002\u0002",
    "\u001as\u0003\u0002\u0002\u0002\u001cu\u0003\u0002\u0002\u0002\u001e",
    "w\u0003\u0002\u0002\u0002 y\u0003\u0002\u0002\u0002\"\u0081\u0003\u0002",
    "\u0002\u0002$&\u0005\u0004\u0003\u0002%$\u0003\u0002\u0002\u0002&)\u0003",
    "\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002",
    "(\u0003\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*+\u0005\n",
    "\u0006\u0002+,\u0005\u0012\n\u0002,.\u0003\u0002\u0002\u0002-*\u0003",
    "\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002",
    "/0\u0003\u0002\u0002\u000205\u0003\u0002\u0002\u000212\u0005\u0006\u0004",
    "\u000223\u0005\u0012\n\u000235\u0003\u0002\u0002\u00024-\u0003\u0002",
    "\u0002\u000241\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002\u0002",
    "67\u0005\b\u0005\u00027\u0007\u0003\u0002\u0002\u000289\u0007\f\u0002",
    "\u00029:\u0005\u0012\n\u0002:;\u0005\u0004\u0003\u0002;<\u0007\u0011",
    "\u0002\u0002<=\u0005\u0014\u000b\u0002=\t\u0003\u0002\u0002\u0002>B",
    "\u0005\f\u0007\u0002?B\u0005\u000e\b\u0002@B\u0005\u0010\t\u0002A>\u0003",
    "\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002",
    "B\u000b\u0003\u0002\u0002\u0002CD\u0005\u0016\f\u0002DE\u0007\b\u0002",
    "\u0002EF\u0005\u0018\r\u0002F\r\u0003\u0002\u0002\u0002GR\u0007\u0005",
    "\u0002\u0002HI\u0007\u0010\u0002\u0002IJ\u0005\u0016\f\u0002JK\u0007",
    "\n\u0002\u0002KL\u0005\u0016\f\u0002LO\u0007\n\u0002\u0002MP\u0007\u0005",
    "\u0002\u0002NP\u0005\u0016\f\u0002OM\u0003\u0002\u0002\u0002ON\u0003",
    "\u0002\u0002\u0002PR\u0003\u0002\u0002\u0002QG\u0003\u0002\u0002\u0002",
    "QH\u0003\u0002\u0002\u0002R\u000f\u0003\u0002\u0002\u0002ST\u0007\u000f",
    "\u0002\u0002TU\u0007\b\u0002\u0002UV\u0005\u0018\r\u0002V\u0011\u0003",
    "\u0002\u0002\u0002WX\t\u0002\u0002\u0002X\u0013\u0003\u0002\u0002\u0002",
    "YZ\u0005\u0016\f\u0002Z[\u0005\u001a\u000e\u0002[\\\u0005\u0016\f\u0002",
    "\\\u0015\u0003\u0002\u0002\u0002]^\b\f\u0001\u0002^_\u0007\u0013\u0002",
    "\u0002_c\u0005\u0016\f\u0007`c\u0005 \u0011\u0002ac\u0005\"\u0012\u0002",
    "b]\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002\u0002",
    "\u0002cn\u0003\u0002\u0002\u0002de\f\u0006\u0002\u0002ef\u0005\u001c",
    "\u000f\u0002fg\u0005\u0016\f\u0007gm\u0003\u0002\u0002\u0002hi\f\u0005",
    "\u0002\u0002ij\u0005\u001e\u0010\u0002jk\u0005\u0016\f\u0006km\u0003",
    "\u0002\u0002\u0002ld\u0003\u0002\u0002\u0002lh\u0003\u0002\u0002\u0002",
    "mp\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002",
    "\u0002o\u0017\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002qr\u0005",
    " \u0011\u0002r\u0019\u0003\u0002\u0002\u0002st\u0007\u000e\u0002\u0002",
    "t\u001b\u0003\u0002\u0002\u0002uv\t\u0003\u0002\u0002v\u001d\u0003\u0002",
    "\u0002\u0002wx\t\u0004\u0002\u0002x\u001f\u0003\u0002\u0002\u0002yz",
    "\u0007\u0003\u0002\u0002z!\u0003\u0002\u0002\u0002{\u0082\u0007\u0004",
    "\u0002\u0002|}\u0007\r\u0002\u0002}\u0082\u0007\u0004\u0002\u0002~\u007f",
    "\u0007\u0004\u0002\u0002\u007f\u0080\u0007\r\u0002\u0002\u0080\u0082",
    "\u0007\u0004\u0002\u0002\u0081{\u0003\u0002\u0002\u0002\u0081|\u0003",
    "\u0002\u0002\u0002\u0081~\u0003\u0002\u0002\u0002\u0082#\u0003\u0002",
    "\u0002\u0002\f\'/4AOQbln\u0081"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'+'", "'\\->'", "':'", 
                     "','", "'/'", "'\\Do'", "'.'", "'='", "'\\Getkey'", 
                     "'\\Locate '", "'\\LpWhile '", "'*'", "'-'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ADD", "ARROW", 
                      "COLON", "COMMA", "DIV", "DO", "DOT", "EQUAL", "GETKEY", 
                      "LOCATE", "LOOPWHILE", "MUL", "SUB" ];

var ruleNames =  [ "prog", "block", "blockStat", "doStat", "stat", "assignStat", 
                   "printStat", "readStat", "endStat", "boolExpr", "numExpr", 
                   "stoExpr", "compOp", "multOp", "addOp", "variable", "number" ];

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
CalcParser.ID = 1;
CalcParser.UINT = 2;
CalcParser.STRING = 3;
CalcParser.NEWLINE = 4;
CalcParser.ADD = 5;
CalcParser.ARROW = 6;
CalcParser.COLON = 7;
CalcParser.COMMA = 8;
CalcParser.DIV = 9;
CalcParser.DO = 10;
CalcParser.DOT = 11;
CalcParser.EQUAL = 12;
CalcParser.GETKEY = 13;
CalcParser.LOCATE = 14;
CalcParser.LOOPWHILE = 15;
CalcParser.MUL = 16;
CalcParser.SUB = 17;

CalcParser.RULE_prog = 0;
CalcParser.RULE_block = 1;
CalcParser.RULE_blockStat = 2;
CalcParser.RULE_doStat = 3;
CalcParser.RULE_stat = 4;
CalcParser.RULE_assignStat = 5;
CalcParser.RULE_printStat = 6;
CalcParser.RULE_readStat = 7;
CalcParser.RULE_endStat = 8;
CalcParser.RULE_boolExpr = 9;
CalcParser.RULE_numExpr = 10;
CalcParser.RULE_stoExpr = 11;
CalcParser.RULE_compOp = 12;
CalcParser.RULE_multOp = 13;
CalcParser.RULE_addOp = 14;
CalcParser.RULE_variable = 15;
CalcParser.RULE_number = 16;

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
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.ID) | (1 << CalcParser.UINT) | (1 << CalcParser.STRING) | (1 << CalcParser.DO) | (1 << CalcParser.DOT) | (1 << CalcParser.GETKEY) | (1 << CalcParser.LOCATE) | (1 << CalcParser.SUB))) !== 0)) {
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

BlockContext.prototype.endStat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EndStatContext);
    } else {
        return this.getTypedRuleContext(EndStatContext,i);
    }
};

BlockContext.prototype.blockStat = function() {
    return this.getTypedRuleContext(BlockStatContext,0);
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
        this.state = 50;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
        case CalcParser.UINT:
        case CalcParser.STRING:
        case CalcParser.DOT:
        case CalcParser.GETKEY:
        case CalcParser.LOCATE:
        case CalcParser.SUB:
            this.enterOuterAlt(localctx, 1);
            this.state = 43; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 40;
            		this.stat();
            		this.state = 41;
            		this.endStat();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 45; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        case CalcParser.DO:
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
            this.blockStat();
            this.state = 48;
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

function BlockStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_blockStat;
    return this;
}

BlockStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatContext.prototype.constructor = BlockStatContext;

BlockStatContext.prototype.doStat = function() {
    return this.getTypedRuleContext(DoStatContext,0);
};

BlockStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBlockStat(this);
	}
};

BlockStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBlockStat(this);
	}
};

BlockStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBlockStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BlockStatContext = BlockStatContext;

CalcParser.prototype.blockStat = function() {

    var localctx = new BlockStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalcParser.RULE_blockStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.doStat();
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

function DoStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_doStat;
    return this;
}

DoStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoStatContext.prototype.constructor = DoStatContext;

DoStatContext.prototype.DO = function() {
    return this.getToken(CalcParser.DO, 0);
};

DoStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

DoStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

DoStatContext.prototype.LOOPWHILE = function() {
    return this.getToken(CalcParser.LOOPWHILE, 0);
};

DoStatContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

DoStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterDoStat(this);
	}
};

DoStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitDoStat(this);
	}
};

DoStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitDoStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.DoStatContext = DoStatContext;

CalcParser.prototype.doStat = function() {

    var localctx = new DoStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalcParser.RULE_doStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(CalcParser.DO);
        this.state = 55;
        this.endStat();
        this.state = 56;
        this.block();
        this.state = 57;
        this.match(CalcParser.LOOPWHILE);
        this.state = 58;
        this.boolExpr();
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

StatContext.prototype.printStat = function() {
    return this.getTypedRuleContext(PrintStatContext,0);
};

StatContext.prototype.readStat = function() {
    return this.getTypedRuleContext(ReadStatContext,0);
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
    this.enterRule(localctx, 8, CalcParser.RULE_stat);
    try {
        this.state = 63;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
        case CalcParser.UINT:
        case CalcParser.DOT:
        case CalcParser.SUB:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.assignStat();
            break;
        case CalcParser.STRING:
        case CalcParser.LOCATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.printStat();
            break;
        case CalcParser.GETKEY:
            this.enterOuterAlt(localctx, 3);
            this.state = 62;
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
    this.ruleIndex = CalcParser.RULE_assignStat;
    return this;
}

AssignStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatContext.prototype.constructor = AssignStatContext;

AssignStatContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
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
    this.enterRule(localctx, 10, CalcParser.RULE_assignStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.numExpr(0);
        this.state = 66;
        this.match(CalcParser.ARROW);
        this.state = 67;
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

PrintAtContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

PrintAtContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.COMMA);
    } else {
        return this.getToken(CalcParser.COMMA, i);
    }
};


PrintAtContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
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
    this.enterRule(localctx, 12, CalcParser.RULE_printStat);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 69;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.match(CalcParser.LOCATE);
            this.state = 71;
            this.numExpr(0);
            this.state = 72;
            this.match(CalcParser.COMMA);
            this.state = 73;
            this.numExpr(0);
            this.state = 74;
            this.match(CalcParser.COMMA);
            this.state = 77;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CalcParser.STRING:
                this.state = 75;
                this.match(CalcParser.STRING);
                break;
            case CalcParser.ID:
            case CalcParser.UINT:
            case CalcParser.DOT:
            case CalcParser.SUB:
                this.state = 76;
                this.numExpr(0);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
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
    this.ruleIndex = CalcParser.RULE_readStat;
    return this;
}

ReadStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadStatContext.prototype.constructor = ReadStatContext;

ReadStatContext.prototype.GETKEY = function() {
    return this.getToken(CalcParser.GETKEY, 0);
};

ReadStatContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

ReadStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

ReadStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterReadStat(this);
	}
};

ReadStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitReadStat(this);
	}
};

ReadStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitReadStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ReadStatContext = ReadStatContext;

CalcParser.prototype.readStat = function() {

    var localctx = new ReadStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CalcParser.RULE_readStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(CalcParser.GETKEY);
        this.state = 82;
        this.match(CalcParser.ARROW);
        this.state = 83;
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
    this.ruleIndex = CalcParser.RULE_endStat;
    return this;
}

EndStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatContext.prototype.constructor = EndStatContext;

EndStatContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EndStatContext.prototype.COLON = function() {
    return this.getToken(CalcParser.COLON, 0);
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
    this.enterRule(localctx, 16, CalcParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.NEWLINE || _la===CalcParser.COLON)) {
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
    this.ruleIndex = CalcParser.RULE_boolExpr;
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
    this.enterRule(localctx, 18, CalcParser.RULE_boolExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.numExpr(0);
        this.state = 88;
        this.compOp();
        this.state = 89;
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
    this.ruleIndex = CalcParser.RULE_numExpr;
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

CalcParser.AddContext = AddContext;

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


function NegateContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateContext.prototype = Object.create(NumExprContext.prototype);
NegateContext.prototype.constructor = NegateContext;

CalcParser.NegateContext = NegateContext;

NegateContext.prototype.SUB = function() {
    return this.getToken(CalcParser.SUB, 0);
};

NegateContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
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


function ParseContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParseContext.prototype = Object.create(NumExprContext.prototype);
ParseContext.prototype.constructor = ParseContext;

CalcParser.ParseContext = ParseContext;

ParseContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.MultiplyContext = MultiplyContext;

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
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateContext.prototype = Object.create(NumExprContext.prototype);
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



CalcParser.prototype.numExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, CalcParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 92;
            this.match(CalcParser.SUB);
            this.state = 93;
            this.numExpr(5);
            break;
        case CalcParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 94;
            this.variable();
            break;
        case CalcParser.UINT:
        case CalcParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 95;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 108;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 106;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                    this.state = 98;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 99;
                    this.multOp();
                    this.state = 100;
                    this.numExpr(5);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 103;
                    this.addOp();
                    this.state = 104;
                    this.numExpr(4);
                    break;

                } 
            }
            this.state = 110;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
    this.enterRule(localctx, 22, CalcParser.RULE_stoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
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
    this.ruleIndex = CalcParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQUAL = function() {
    return this.getToken(CalcParser.EQUAL, 0);
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
    this.enterRule(localctx, 24, CalcParser.RULE_compOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(CalcParser.EQUAL);
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
    this.enterRule(localctx, 26, CalcParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.DIV || _la===CalcParser.MUL)) {
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
    this.enterRule(localctx, 28, CalcParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
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
    this.enterRule(localctx, 30, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
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

NumberContext.prototype.UINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.UINT);
    } else {
        return this.getToken(CalcParser.UINT, i);
    }
};


NumberContext.prototype.DOT = function() {
    return this.getToken(CalcParser.DOT, 0);
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
    this.enterRule(localctx, 32, CalcParser.RULE_number);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.match(CalcParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.match(CalcParser.DOT);
            this.state = 123;
            this.match(CalcParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 124;
            this.match(CalcParser.UINT);
            this.state = 125;
            this.match(CalcParser.DOT);
            this.state = 126;
            this.match(CalcParser.UINT);
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


CalcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 10:
			return this.numExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalcParser.prototype.numExpr_sempred = function(localctx, predIndex) {
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
