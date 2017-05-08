// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011%\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003\u0013\n\u0003",
    "\r\u0003\u000e\u0003\u0014\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007#\n\u0007\u0003\u0007\u0002",
    "\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003\u0003\u0002\u0004\u000e",
    "\u0002 \u0002\u000e\u0003\u0002\u0002\u0002\u0004\u0010\u0003\u0002",
    "\u0002\u0002\u0006\u0016\u0003\u0002\u0002\u0002\b\u0019\u0003\u0002",
    "\u0002\u0002\n\u001d\u0003\u0002\u0002\u0002\f\"\u0003\u0002\u0002\u0002",
    "\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0003\u0003\u0002\u0002\u0002",
    "\u0010\u0012\u0005\u0006\u0004\u0002\u0011\u0013\u0005\b\u0005\u0002",
    "\u0012\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0005\u0003\u0002\u0002\u0002\u0016\u0017\u0007\u000f\u0002\u0002",
    "\u0017\u0018\u0007\u0011\u0002\u0002\u0018\u0007\u0003\u0002\u0002\u0002",
    "\u0019\u001a\u0005\n\u0006\u0002\u001a\u001b\u0007\u0003\u0002\u0002",
    "\u001b\u001c\u0005\f\u0007\u0002\u001c\t\u0003\u0002\u0002\u0002\u001d",
    "\u001e\t\u0002\u0002\u0002\u001e\u000b\u0003\u0002\u0002\u0002\u001f",
    " \u0007\u0010\u0002\u0002 #\u0007\u0011\u0002\u0002!#\u0007\u0011\u0002",
    "\u0002\"\u001f\u0003\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002#\r",
    "\u0003\u0002\u0002\u0002\u0004\u0014\""].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'Format'", "'Communication SW'", "'Data Type'", 
                     "'Capacity'", "'File Name'", "'Group Name'", "'Password'", 
                     "'Option1'", "'Option2'", "'Option3'", "'Option4'", 
                     "'%Header Record'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "HEADER_RECORD", "ENTRY_VALUE", 
                      "NEWLINE" ];

var ruleNames =  [ "prog", "header", "headerStart", "headerEntry", "entryName", 
                   "entryExpr" ];

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
CalcParser.T__6 = 7;
CalcParser.T__7 = 8;
CalcParser.T__8 = 9;
CalcParser.T__9 = 10;
CalcParser.T__10 = 11;
CalcParser.T__11 = 12;
CalcParser.HEADER_RECORD = 13;
CalcParser.ENTRY_VALUE = 14;
CalcParser.NEWLINE = 15;

CalcParser.RULE_prog = 0;
CalcParser.RULE_header = 1;
CalcParser.RULE_headerStart = 2;
CalcParser.RULE_headerEntry = 3;
CalcParser.RULE_entryName = 4;
CalcParser.RULE_entryExpr = 5;

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

ProgContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.header();
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

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.headerStart = function() {
    return this.getTypedRuleContext(HeaderStartContext,0);
};

HeaderContext.prototype.headerEntry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HeaderEntryContext);
    } else {
        return this.getTypedRuleContext(HeaderEntryContext,i);
    }
};

HeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.HeaderContext = HeaderContext;

CalcParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalcParser.RULE_header);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.headerStart();
        this.state = 16; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 15;
            this.headerEntry();
            this.state = 18; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__2) | (1 << CalcParser.T__3) | (1 << CalcParser.T__4) | (1 << CalcParser.T__5) | (1 << CalcParser.T__6) | (1 << CalcParser.T__7) | (1 << CalcParser.T__8) | (1 << CalcParser.T__9) | (1 << CalcParser.T__10) | (1 << CalcParser.T__11))) !== 0));
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

function HeaderStartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_headerStart;
    return this;
}

HeaderStartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderStartContext.prototype.constructor = HeaderStartContext;

HeaderStartContext.prototype.HEADER_RECORD = function() {
    return this.getToken(CalcParser.HEADER_RECORD, 0);
};

HeaderStartContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

HeaderStartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitHeaderStart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.HeaderStartContext = HeaderStartContext;

CalcParser.prototype.headerStart = function() {

    var localctx = new HeaderStartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalcParser.RULE_headerStart);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(CalcParser.HEADER_RECORD);
        this.state = 21;
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

function HeaderEntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_headerEntry;
    return this;
}

HeaderEntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderEntryContext.prototype.constructor = HeaderEntryContext;

HeaderEntryContext.prototype.entryName = function() {
    return this.getTypedRuleContext(EntryNameContext,0);
};

HeaderEntryContext.prototype.entryExpr = function() {
    return this.getTypedRuleContext(EntryExprContext,0);
};

HeaderEntryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitHeaderEntry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.HeaderEntryContext = HeaderEntryContext;

CalcParser.prototype.headerEntry = function() {

    var localctx = new HeaderEntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalcParser.RULE_headerEntry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.entryName();
        this.state = 24;
        this.match(CalcParser.T__0);
        this.state = 25;
        this.entryExpr();
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

function EntryNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_entryName;
    return this;
}

EntryNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryNameContext.prototype.constructor = EntryNameContext;


EntryNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEntryName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EntryNameContext = EntryNameContext;

CalcParser.prototype.entryName = function() {

    var localctx = new EntryNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalcParser.RULE_entryName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__2) | (1 << CalcParser.T__3) | (1 << CalcParser.T__4) | (1 << CalcParser.T__5) | (1 << CalcParser.T__6) | (1 << CalcParser.T__7) | (1 << CalcParser.T__8) | (1 << CalcParser.T__9) | (1 << CalcParser.T__10) | (1 << CalcParser.T__11))) !== 0))) {
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

function EntryExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_entryExpr;
    return this;
}

EntryExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryExprContext.prototype.constructor = EntryExprContext;

EntryExprContext.prototype.ENTRY_VALUE = function() {
    return this.getToken(CalcParser.ENTRY_VALUE, 0);
};

EntryExprContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EntryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEntryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EntryExprContext = EntryExprContext;

CalcParser.prototype.entryExpr = function() {

    var localctx = new EntryExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalcParser.RULE_entryExpr);
    try {
        this.state = 32;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ENTRY_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.match(CalcParser.ENTRY_VALUE);
            this.state = 30;
            this.match(CalcParser.NEWLINE);
            break;
        case CalcParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.match(CalcParser.NEWLINE);
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


exports.CalcParser = CalcParser;
