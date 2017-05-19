// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\fX\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0007\u0002",
    " \n\u0002\f\u0002\u000e\u0002#\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u0003(\n\u0003\r\u0003\u000e\u0003)\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003/\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u00056\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005",
    "\fP\n\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0002\u0002\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u0002\u0003\u0004\u0002\u0007\u0007\f",
    "\f\u0002O\u0002!\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002\u0002",
    "\u00060\u0003\u0002\u0002\u0002\b5\u0003\u0002\u0002\u0002\n7\u0003",
    "\u0002\u0002\u0002\f;\u0003\u0002\u0002\u0002\u000e=\u0003\u0002\u0002",
    "\u0002\u0010A\u0003\u0002\u0002\u0002\u0012G\u0003\u0002\u0002\u0002",
    "\u0014I\u0003\u0002\u0002\u0002\u0016O\u0003\u0002\u0002\u0002\u0018",
    "Q\u0003\u0002\u0002\u0002\u001aS\u0003\u0002\u0002\u0002\u001cU\u0003",
    "\u0002\u0002\u0002\u001e \u0005\u0004\u0003\u0002\u001f\u001e\u0003",
    "\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002",
    "\u0002!\"\u0003\u0002\u0002\u0002\"\u0003\u0003\u0002\u0002\u0002#!",
    "\u0003\u0002\u0002\u0002$%\u0005\b\u0005\u0002%&\u0005\u0012\n\u0002",
    "&(\u0003\u0002\u0002\u0002\'$\u0003\u0002\u0002\u0002()\u0003\u0002",
    "\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*/",
    "\u0003\u0002\u0002\u0002+,\u0005\u0006\u0004\u0002,-\u0005\u0012\n\u0002",
    "-/\u0003\u0002\u0002\u0002.\'\u0003\u0002\u0002\u0002.+\u0003\u0002",
    "\u0002\u0002/\u0005\u0003\u0002\u0002\u000201\u0005\u0010\t\u00021\u0007",
    "\u0003\u0002\u0002\u000226\u0005\n\u0006\u000236\u0005\f\u0007\u0002",
    "46\u0005\u000e\b\u000252\u0003\u0002\u0002\u000253\u0003\u0002\u0002",
    "\u000254\u0003\u0002\u0002\u00026\t\u0003\u0002\u0002\u000278\u0005",
    "\u0016\f\u000289\u0007\u0003\u0002\u00029:\u0005\u001a\u000e\u0002:",
    "\u000b\u0003\u0002\u0002\u0002;<\u0007\u000b\u0002\u0002<\r\u0003\u0002",
    "\u0002\u0002=>\u0007\u0004\u0002\u0002>?\u0007\u0003\u0002\u0002?@\u0005",
    "\u001a\u000e\u0002@\u000f\u0003\u0002\u0002\u0002AB\u0007\u0005\u0002",
    "\u0002BC\u0005\u0012\n\u0002CD\u0005\u0004\u0003\u0002DE\u0007\u0006",
    "\u0002\u0002EF\u0005\u0014\u000b\u0002F\u0011\u0003\u0002\u0002\u0002",
    "GH\t\u0002\u0002\u0002H\u0013\u0003\u0002\u0002\u0002IJ\u0005\u0016",
    "\f\u0002JK\u0005\u0018\r\u0002KL\u0005\u0016\f\u0002L\u0015\u0003\u0002",
    "\u0002\u0002MP\u0005\u001a\u000e\u0002NP\u0005\u001c\u000f\u0002OM\u0003",
    "\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002P\u0017\u0003\u0002\u0002",
    "\u0002QR\u0007\b\u0002\u0002R\u0019\u0003\u0002\u0002\u0002ST\u0007",
    "\t\u0002\u0002T\u001b\u0003\u0002\u0002\u0002UV\u0007\n\u0002\u0002",
    "V\u001d\u0003\u0002\u0002\u0002\u0007!).5O"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\\->'", "'\\Getkey'", "'\\Do'", "'\\LpWhile '", 
                     "':'", "'='" ];

var symbolicNames = [ null, null, null, null, null, null, null, "ID", "UINT", 
                      "STRING", "NEWLINE" ];

var ruleNames =  [ "prog", "block", "blockStat", "stat", "assignStat", "printStat", 
                   "readStat", "doStat", "endStat", "boolExpr", "numExpr", 
                   "compOp", "variable", "number" ];

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
CalcParser.T__4 = 5;
CalcParser.T__5 = 6;
CalcParser.ID = 7;
CalcParser.UINT = 8;
CalcParser.STRING = 9;
CalcParser.NEWLINE = 10;

CalcParser.RULE_prog = 0;
CalcParser.RULE_block = 1;
CalcParser.RULE_blockStat = 2;
CalcParser.RULE_stat = 3;
CalcParser.RULE_assignStat = 4;
CalcParser.RULE_printStat = 5;
CalcParser.RULE_readStat = 6;
CalcParser.RULE_doStat = 7;
CalcParser.RULE_endStat = 8;
CalcParser.RULE_boolExpr = 9;
CalcParser.RULE_numExpr = 10;
CalcParser.RULE_compOp = 11;
CalcParser.RULE_variable = 12;
CalcParser.RULE_number = 13;

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
        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__2) | (1 << CalcParser.ID) | (1 << CalcParser.UINT) | (1 << CalcParser.STRING))) !== 0)) {
            this.state = 28;
            this.block();
            this.state = 33;
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
        this.state = 44;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.T__1:
        case CalcParser.ID:
        case CalcParser.UINT:
        case CalcParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 37; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 34;
            		this.stat();
            		this.state = 35;
            		this.endStat();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 39; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        case CalcParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 41;
            this.blockStat();
            this.state = 42;
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
        this.state = 46;
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
    this.enterRule(localctx, 6, CalcParser.RULE_stat);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
        case CalcParser.UINT:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.assignStat();
            break;
        case CalcParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.printStat();
            break;
        case CalcParser.T__1:
            this.enterOuterAlt(localctx, 3);
            this.state = 50;
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

AssignStatContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
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
    this.enterRule(localctx, 8, CalcParser.RULE_assignStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.numExpr();
        this.state = 54;
        this.match(CalcParser.T__0);
        this.state = 55;
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

PrintStatContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};

PrintStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPrintStat(this);
	}
};

PrintStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPrintStat(this);
	}
};

PrintStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPrintStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.PrintStatContext = PrintStatContext;

CalcParser.prototype.printStat = function() {

    var localctx = new PrintStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalcParser.RULE_printStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(CalcParser.STRING);
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

ReadStatContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
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
    this.enterRule(localctx, 12, CalcParser.RULE_readStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(CalcParser.T__1);
        this.state = 60;
        this.match(CalcParser.T__0);
        this.state = 61;
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

DoStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

DoStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
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
    this.enterRule(localctx, 14, CalcParser.RULE_doStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(CalcParser.T__2);
        this.state = 64;
        this.endStat();
        this.state = 65;
        this.block();
        this.state = 66;
        this.match(CalcParser.T__3);
        this.state = 67;
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
    this.enterRule(localctx, 16, CalcParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.T__4 || _la===CalcParser.NEWLINE)) {
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
        this.state = 71;
        this.numExpr();
        this.state = 72;
        this.compOp();
        this.state = 73;
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
    this.ruleIndex = CalcParser.RULE_numExpr;
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
    if(listener instanceof CalcListener ) {
        listener.enterNumExpr(this);
	}
};

NumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitNumExpr(this);
	}
};

NumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitNumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.NumExprContext = NumExprContext;

CalcParser.prototype.numExpr = function() {

    var localctx = new NumExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CalcParser.RULE_numExpr);
    try {
        this.state = 77;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.variable();
            break;
        case CalcParser.UINT:
            this.enterOuterAlt(localctx, 2);
            this.state = 76;
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
    this.enterRule(localctx, 22, CalcParser.RULE_compOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(CalcParser.T__5);
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
    this.enterRule(localctx, 24, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
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

NumberContext.prototype.UINT = function() {
    return this.getToken(CalcParser.UINT, 0);
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
    this.enterRule(localctx, 26, CalcParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(CalcParser.UINT);
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


exports.CalcParser = CalcParser;
