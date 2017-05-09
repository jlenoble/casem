// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Header.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HeaderListener = require('./HeaderListener').HeaderListener;
var HeaderVisitor = require('./HeaderVisitor').HeaderVisitor;

var grammarFileName = "Header.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003O=\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0003\u0002\u0003\u0002\u0006\u0002\u0013\n\u0002\r\u0002\u000e",
    "\u0002\u0014\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "!\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006(\n\u0006\u0003\u0006\u0003\u0006\u0006\u0006,\n\u0006\r",
    "\u0006\u000e\u0006-\u0003\u0006\u0005\u00061\n\u0006\u0007\u00063\n",
    "\u0006\f\u0006\u000e\u00066\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0002\u0003\n\t\u0002\u0004\u0006\b\n",
    "\f\u000e\u0002\u0005\u0003\u0002\u0004\u000e\u0003\u0002\u0010\u0011",
    "\u0003\u0002\u0014\u0019\u0002<\u0002\u0010\u0003\u0002\u0002\u0002",
    "\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001a\u0003\u0002\u0002\u0002",
    "\b \u0003\u0002\u0002\u0002\n\'\u0003\u0002\u0002\u0002\f7\u0003\u0002",
    "\u0002\u0002\u000e:\u0003\u0002\u0002\u0002\u0010\u0012\u0005\f\u0007",
    "\u0002\u0011\u0013\u0005\u0004\u0003\u0002\u0012\u0011\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002",
    "\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0003\u0003\u0002\u0002",
    "\u0002\u0016\u0017\u0005\u0006\u0004\u0002\u0017\u0018\u0007\u0003\u0002",
    "\u0002\u0018\u0019\u0005\b\u0005\u0002\u0019\u0005\u0003\u0002\u0002",
    "\u0002\u001a\u001b\t\u0002\u0002\u0002\u001b\u0007\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0005\n\u0006\u0002\u001d\u001e\u0007O\u0002\u0002",
    "\u001e!\u0003\u0002\u0002\u0002\u001f!\u0007O\u0002\u0002 \u001c\u0003",
    "\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!\t\u0003\u0002\u0002",
    "\u0002\"#\b\u0006\u0001\u0002#(\u0007K\u0002\u0002$(\u0007L\u0002\u0002",
    "%&\u0007L\u0002\u0002&(\u0007K\u0002\u0002\'\"\u0003\u0002\u0002\u0002",
    "\'$\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002(4\u0003\u0002",
    "\u0002\u0002)+\f\u0003\u0002\u0002*,\t\u0003\u0002\u0002+*\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.0\u0003\u0002\u0002\u0002/1\u0005\n\u0006\u00020",
    "/\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u000213\u0003\u0002\u0002",
    "\u00022)\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u00025\u000b\u0003\u0002\u0002\u0002",
    "64\u0003\u0002\u0002\u000278\u0007\u000f\u0002\u000289\u0007O\u0002",
    "\u00029\r\u0003\u0002\u0002\u0002:;\t\u0004\u0002\u0002;\u000f\u0003",
    "\u0002\u0002\u0002\b\u0014 \'-04"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'Format'", "'Communication SW'", "'Data Type'", 
                     "'Capacity'", "'File Name'", "'Group Name'", "'Password'", 
                     "'Option1'", "'Option2'", "'Option3'", "'Option4'", 
                     "'%Header Record'", "'+'", "'-'", "'*'", "'/'", "'='", 
                     "'\\<>'", "'>'", "'\\>='", "'<'", "'\\<='", "'\\ And '", 
                     "'\\ Or '", "'\\->'", "'\\=>'", "'\\Goto'", "'\\Lbl'", 
                     "'\\Prog'", "'\\Return'", "'\\Stop'", "'\\If'", "'\\Then'", 
                     "'\\Else'", "'\\IfEnd'", "'\\For'", "'\\To'", "'\\Next'", 
                     "'\\Do'", "'\\LpWhile'", "'\\Getkey'", "'\\Locate'", 
                     "'\\ClrText'", "'\\Disp'", "'\\Norm'", "'\\Gra'", "'\\Fix'", 
                     "'\\ClrGraph'", "'\\ViewWindow'", "'\\AxesOn'", "'\\AxesOff'", 
                     "'\\F-Line'", "'\\PlotOn'", "'\\Mat '", "'\\List '", 
                     "'\\List->Mat'", "'\\Seq'", "'\\Pi'", "'\\Ans'", "'\\Abs '", 
                     "'\\acos '", "'\\asin '", "'\\atan '", "'\\cos '", 
                     "'\\Int '", "'\\sin '", "'\\sqrt'", "'\\tan '", "'\\10^x'", 
                     "'!'", null, null, null, null, "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "ADD", "SUB", "MUL", 
                      "DIV", "EQ", "NE", "GT", "GE", "LT", "LE", "AND", 
                      "OR", "ARROW", "FATARROW", "GOTO", "LBL", "PROG", 
                      "RETURN", "STOP", "IF", "THEN", "ELSE", "IFEND", "FOR", 
                      "TO", "NEXT", "DO", "LPWHILE", "GETKEY", "LOCATE", 
                      "CLRTXT", "DISP", "NORM", "GRA", "FIX", "CLRGRPH", 
                      "VIEWWINDOW", "AXESON", "AXESOFF", "FLINE", "PLOTON", 
                      "MATR", "LIST", "LISTMAT", "SEQ", "PI", "ANS", "ABS", 
                      "ACOS", "ASIN", "ATAN", "COS", "INT", "SIN", "SQRT", 
                      "TAN", "EXPNT", "FACT", "POW", "ID", "NUM", "STRING", 
                      "QUESMARK", "NEWLINE" ];

var ruleNames =  [ "header", "entry", "label", "option", "value", "headerBeg", 
                   "boolOp" ];

function HeaderParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

HeaderParser.prototype = Object.create(antlr4.Parser.prototype);
HeaderParser.prototype.constructor = HeaderParser;

Object.defineProperty(HeaderParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HeaderParser.EOF = antlr4.Token.EOF;
HeaderParser.T__0 = 1;
HeaderParser.T__1 = 2;
HeaderParser.T__2 = 3;
HeaderParser.T__3 = 4;
HeaderParser.T__4 = 5;
HeaderParser.T__5 = 6;
HeaderParser.T__6 = 7;
HeaderParser.T__7 = 8;
HeaderParser.T__8 = 9;
HeaderParser.T__9 = 10;
HeaderParser.T__10 = 11;
HeaderParser.T__11 = 12;
HeaderParser.T__12 = 13;
HeaderParser.ADD = 14;
HeaderParser.SUB = 15;
HeaderParser.MUL = 16;
HeaderParser.DIV = 17;
HeaderParser.EQ = 18;
HeaderParser.NE = 19;
HeaderParser.GT = 20;
HeaderParser.GE = 21;
HeaderParser.LT = 22;
HeaderParser.LE = 23;
HeaderParser.AND = 24;
HeaderParser.OR = 25;
HeaderParser.ARROW = 26;
HeaderParser.FATARROW = 27;
HeaderParser.GOTO = 28;
HeaderParser.LBL = 29;
HeaderParser.PROG = 30;
HeaderParser.RETURN = 31;
HeaderParser.STOP = 32;
HeaderParser.IF = 33;
HeaderParser.THEN = 34;
HeaderParser.ELSE = 35;
HeaderParser.IFEND = 36;
HeaderParser.FOR = 37;
HeaderParser.TO = 38;
HeaderParser.NEXT = 39;
HeaderParser.DO = 40;
HeaderParser.LPWHILE = 41;
HeaderParser.GETKEY = 42;
HeaderParser.LOCATE = 43;
HeaderParser.CLRTXT = 44;
HeaderParser.DISP = 45;
HeaderParser.NORM = 46;
HeaderParser.GRA = 47;
HeaderParser.FIX = 48;
HeaderParser.CLRGRPH = 49;
HeaderParser.VIEWWINDOW = 50;
HeaderParser.AXESON = 51;
HeaderParser.AXESOFF = 52;
HeaderParser.FLINE = 53;
HeaderParser.PLOTON = 54;
HeaderParser.MATR = 55;
HeaderParser.LIST = 56;
HeaderParser.LISTMAT = 57;
HeaderParser.SEQ = 58;
HeaderParser.PI = 59;
HeaderParser.ANS = 60;
HeaderParser.ABS = 61;
HeaderParser.ACOS = 62;
HeaderParser.ASIN = 63;
HeaderParser.ATAN = 64;
HeaderParser.COS = 65;
HeaderParser.INT = 66;
HeaderParser.SIN = 67;
HeaderParser.SQRT = 68;
HeaderParser.TAN = 69;
HeaderParser.EXPNT = 70;
HeaderParser.FACT = 71;
HeaderParser.POW = 72;
HeaderParser.ID = 73;
HeaderParser.NUM = 74;
HeaderParser.STRING = 75;
HeaderParser.QUESMARK = 76;
HeaderParser.NEWLINE = 77;

HeaderParser.RULE_header = 0;
HeaderParser.RULE_entry = 1;
HeaderParser.RULE_label = 2;
HeaderParser.RULE_option = 3;
HeaderParser.RULE_value = 4;
HeaderParser.RULE_headerBeg = 5;
HeaderParser.RULE_boolOp = 6;

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HeaderParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.headerBeg = function() {
    return this.getTypedRuleContext(HeaderBegContext,0);
};

HeaderContext.prototype.entry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EntryContext);
    } else {
        return this.getTypedRuleContext(EntryContext,i);
    }
};

HeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.exitHeader(this);
	}
};

HeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HeaderVisitor ) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HeaderParser.HeaderContext = HeaderContext;

HeaderParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HeaderParser.RULE_header);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.headerBeg();
        this.state = 16; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 15;
            this.entry();
            this.state = 18; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HeaderParser.T__1) | (1 << HeaderParser.T__2) | (1 << HeaderParser.T__3) | (1 << HeaderParser.T__4) | (1 << HeaderParser.T__5) | (1 << HeaderParser.T__6) | (1 << HeaderParser.T__7) | (1 << HeaderParser.T__8) | (1 << HeaderParser.T__9) | (1 << HeaderParser.T__10) | (1 << HeaderParser.T__11))) !== 0));
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

function EntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HeaderParser.RULE_entry;
    return this;
}

EntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryContext.prototype.constructor = EntryContext;

EntryContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

EntryContext.prototype.option = function() {
    return this.getTypedRuleContext(OptionContext,0);
};

EntryContext.prototype.enterRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.enterEntry(this);
	}
};

EntryContext.prototype.exitRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.exitEntry(this);
	}
};

EntryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HeaderVisitor ) {
        return visitor.visitEntry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HeaderParser.EntryContext = EntryContext;

HeaderParser.prototype.entry = function() {

    var localctx = new EntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, HeaderParser.RULE_entry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.label();
        this.state = 21;
        this.match(HeaderParser.T__0);
        this.state = 22;
        this.option();
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

function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HeaderParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;


LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HeaderVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HeaderParser.LabelContext = LabelContext;

HeaderParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, HeaderParser.RULE_label);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HeaderParser.T__1) | (1 << HeaderParser.T__2) | (1 << HeaderParser.T__3) | (1 << HeaderParser.T__4) | (1 << HeaderParser.T__5) | (1 << HeaderParser.T__6) | (1 << HeaderParser.T__7) | (1 << HeaderParser.T__8) | (1 << HeaderParser.T__9) | (1 << HeaderParser.T__10) | (1 << HeaderParser.T__11))) !== 0))) {
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

function OptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HeaderParser.RULE_option;
    return this;
}

OptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionContext.prototype.constructor = OptionContext;

OptionContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

OptionContext.prototype.NEWLINE = function() {
    return this.getToken(HeaderParser.NEWLINE, 0);
};

OptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.enterOption(this);
	}
};

OptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.exitOption(this);
	}
};

OptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HeaderVisitor ) {
        return visitor.visitOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HeaderParser.OptionContext = OptionContext;

HeaderParser.prototype.option = function() {

    var localctx = new OptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, HeaderParser.RULE_option);
    try {
        this.state = 30;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HeaderParser.ID:
        case HeaderParser.NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.value(0);
            this.state = 27;
            this.match(HeaderParser.NEWLINE);
            break;
        case HeaderParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.match(HeaderParser.NEWLINE);
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HeaderParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.ID = function() {
    return this.getToken(HeaderParser.ID, 0);
};

ValueContext.prototype.NUM = function() {
    return this.getToken(HeaderParser.NUM, 0);
};

ValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HeaderVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};



HeaderParser.prototype.value = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ValueContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, HeaderParser.RULE_value, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 33;
            this.match(HeaderParser.ID);
            break;

        case 2:
            this.state = 34;
            this.match(HeaderParser.NUM);
            break;

        case 3:
            this.state = 35;
            this.match(HeaderParser.NUM);
            this.state = 36;
            this.match(HeaderParser.ID);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 50;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ValueContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, HeaderParser.RULE_value);
                this.state = 39;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 41; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 40;
                		_la = this._input.LA(1);
                		if(!(_la===HeaderParser.ADD || _la===HeaderParser.SUB)) {
                		this._errHandler.recoverInline(this);
                		}
                		else {
                			this._errHandler.reportMatch(this);
                		    this.consume();
                		}
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 43; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                this.state = 46;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                if(la_===1) {
                    this.state = 45;
                    this.value(0);

                } 
            }
            this.state = 52;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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

function HeaderBegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HeaderParser.RULE_headerBeg;
    return this;
}

HeaderBegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderBegContext.prototype.constructor = HeaderBegContext;

HeaderBegContext.prototype.NEWLINE = function() {
    return this.getToken(HeaderParser.NEWLINE, 0);
};

HeaderBegContext.prototype.enterRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.enterHeaderBeg(this);
	}
};

HeaderBegContext.prototype.exitRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.exitHeaderBeg(this);
	}
};

HeaderBegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HeaderVisitor ) {
        return visitor.visitHeaderBeg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HeaderParser.HeaderBegContext = HeaderBegContext;

HeaderParser.prototype.headerBeg = function() {

    var localctx = new HeaderBegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, HeaderParser.RULE_headerBeg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(HeaderParser.T__12);
        this.state = 54;
        this.match(HeaderParser.NEWLINE);
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

function BoolOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HeaderParser.RULE_boolOp;
    return this;
}

BoolOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOpContext.prototype.constructor = BoolOpContext;

BoolOpContext.prototype.EQ = function() {
    return this.getToken(HeaderParser.EQ, 0);
};

BoolOpContext.prototype.NE = function() {
    return this.getToken(HeaderParser.NE, 0);
};

BoolOpContext.prototype.GT = function() {
    return this.getToken(HeaderParser.GT, 0);
};

BoolOpContext.prototype.GE = function() {
    return this.getToken(HeaderParser.GE, 0);
};

BoolOpContext.prototype.LT = function() {
    return this.getToken(HeaderParser.LT, 0);
};

BoolOpContext.prototype.LE = function() {
    return this.getToken(HeaderParser.LE, 0);
};

BoolOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.enterBoolOp(this);
	}
};

BoolOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof HeaderListener ) {
        listener.exitBoolOp(this);
	}
};

BoolOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HeaderVisitor ) {
        return visitor.visitBoolOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HeaderParser.BoolOpContext = BoolOpContext;

HeaderParser.prototype.boolOp = function() {

    var localctx = new BoolOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, HeaderParser.RULE_boolOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HeaderParser.EQ) | (1 << HeaderParser.NE) | (1 << HeaderParser.GT) | (1 << HeaderParser.GE) | (1 << HeaderParser.LT) | (1 << HeaderParser.LE))) !== 0))) {
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


HeaderParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 4:
			return this.value_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

HeaderParser.prototype.value_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.HeaderParser = HeaderParser;
