// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Files.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FilesListener = require('./FilesListener').FilesListener;
var FilesVisitor = require('./FilesVisitor').FilesVisitor;

var grammarFileName = "Files.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003BM\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003!\n\u0003\r\u0003",
    "\u000e\u0003\"\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004(\n\u0004",
    "\f\u0004\u000e\u0004+\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u00063\n\u0006\u0003\u0006",
    "\u0003\u0006\u0006\u00067\n\u0006\r\u0006\u000e\u00068\u0003\u0006\u0007",
    "\u0006<\n\u0006\f\u0006\u000e\u0006?\u000b\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0006\tI\n\t\r",
    "\t\u000e\tJ\u0003\t\u0002\u0003\n\n\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0002\u0004\u0003\u0002>?\u0004\u0002\t\t88\u0002K\u0002\u0012\u0003",
    "\u0002\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006$\u0003\u0002",
    "\u0002\u0002\b,\u0003\u0002\u0002\u0002\n2\u0003\u0002\u0002\u0002\f",
    "@\u0003\u0002\u0002\u0002\u000eC\u0003\u0002\u0002\u0002\u0010F\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0005\f\u0007\u0002\u0013\u0014\u0005",
    "\u0004\u0003\u0002\u0014\u0015\u0005\u000e\b\u0002\u0015\u0003\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u0005\u0006\u0004\u0002\u0017\u0018\u0007",
    "\u0011\u0002\u0002\u0018\u0019\u0005\b\u0005\u0002\u0019\u001a\u0007",
    "B\u0002\u0002\u001a!\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0003",
    "\u0002\u0002\u001c\u001d\u0007\u0011\u0002\u0002\u001d\u001e\u0005\n",
    "\u0006\u0002\u001e\u001f\u0007B\u0002\u0002\u001f!\u0003\u0002\u0002",
    "\u0002 \u0016\u0003\u0002\u0002\u0002 \u001b\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002",
    "\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$)\u0007>\u0002\u0002%&\u0007",
    "A\u0002\u0002&(\u0007>\u0002\u0002\'%\u0003\u0002\u0002\u0002(+\u0003",
    "\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002",
    "*\u0007\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002,-\t\u0002",
    "\u0002\u0002-\t\u0003\u0002\u0002\u0002./\b\u0006\u0001\u0002/3\u0007",
    ">\u0002\u000201\u0007?\u0002\u000213\u0007>\u0002\u00022.\u0003\u0002",
    "\u0002\u000220\u0003\u0002\u0002\u00023=\u0003\u0002\u0002\u000246\f",
    "\u0003\u0002\u000257\t\u0003\u0002\u000265\u0003\u0002\u0002\u00027",
    "8\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029:\u0003\u0002\u0002\u0002:<\u0005\n\u0006\u0004;4\u0003\u0002",
    "\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003",
    "\u0002\u0002\u0002>\u000b\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002",
    "\u0002@A\u0007\u0004\u0002\u0002AB\u0007B\u0002\u0002B\r\u0003\u0002",
    "\u0002\u0002CD\u0007\u0005\u0002\u0002DE\u0007B\u0002\u0002E\u000f\u0003",
    "\u0002\u0002\u0002FH\u0007\u0006\u0002\u0002GI\u0007B\u0002\u0002HG",
    "\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002",
    "\u0002JK\u0003\u0002\u0002\u0002K\u0011\u0003\u0002\u0002\u0002\t \"",
    ")28=J"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'File Name'", "'%Header Record'", "'%Data Record'", 
                     "'%End'", "'\\Abs '", "'\\acos '", "'+'", "'\\ And '", 
                     "'\\->'", "'\\asin '", "'\\atan '", "']'", "'}'", "'\\ClrText'", 
                     "':'", "','", "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", 
                     "'\\Else '", "'='", "'\\=>'", "'\\For '", "'\\>='", 
                     "'\\Getkey'", "'\\Goto'", "'>'", "'\\If '", "'\\IfEnd'", 
                     "'\\Int '", "'\\Lbl '", "'\\<='", "'\\List '", "'\\Locate '", 
                     "'\\LpWhile '", "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", 
                     "'\\Next'", "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", 
                     "'\\Prog '", "'\\Return'", "'\\sin '", "'\\sqrt'", 
                     "'\\Step '", "'-'", "'\\tan '", "'\\Then '", "' \\To '", 
                     "'\\While '", "'\\WhileEnd'" ];

var symbolicNames = [ null, null, null, null, null, "ABS", "ACOS", "ADD", 
                      "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", 
                      "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", 
                      "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GOTO", 
                      "GT", "IF", "IFEND", "INT", "LBL", "LE", "LIST", "LOCATE", 
                      "LOOPWHILE", "LT", "MATRIX", "REMAIN", "MUL", "NE", 
                      "NEXT", "OBRA", "OCUR", "OPAR", "OR", "PI", "PROG", 
                      "RETURN", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", 
                      "TO", "WHILE", "WHILEEND", "ID", "UINT", "STRING", 
                      "WS", "NEWLINE" ];

var ruleNames =  [ "header", "attributes", "headerAttr", "headerValue", 
                   "fileName", "startHeader", "endHeader", "endFile" ];

function FilesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FilesParser.prototype = Object.create(antlr4.Parser.prototype);
FilesParser.prototype.constructor = FilesParser;

Object.defineProperty(FilesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FilesParser.EOF = antlr4.Token.EOF;
FilesParser.T__0 = 1;
FilesParser.T__1 = 2;
FilesParser.T__2 = 3;
FilesParser.T__3 = 4;
FilesParser.ABS = 5;
FilesParser.ACOS = 6;
FilesParser.ADD = 7;
FilesParser.AND = 8;
FilesParser.ARROW = 9;
FilesParser.ASIN = 10;
FilesParser.ATAN = 11;
FilesParser.CBRA = 12;
FilesParser.CCUR = 13;
FilesParser.CLRTEXT = 14;
FilesParser.COLON = 15;
FilesParser.COMMA = 16;
FilesParser.COS = 17;
FilesParser.CPAR = 18;
FilesParser.DIV = 19;
FilesParser.DO = 20;
FilesParser.DOT = 21;
FilesParser.ELSE = 22;
FilesParser.EQ = 23;
FilesParser.FATARROW = 24;
FilesParser.FOR = 25;
FilesParser.GE = 26;
FilesParser.GETKEY = 27;
FilesParser.GOTO = 28;
FilesParser.GT = 29;
FilesParser.IF = 30;
FilesParser.IFEND = 31;
FilesParser.INT = 32;
FilesParser.LBL = 33;
FilesParser.LE = 34;
FilesParser.LIST = 35;
FilesParser.LOCATE = 36;
FilesParser.LOOPWHILE = 37;
FilesParser.LT = 38;
FilesParser.MATRIX = 39;
FilesParser.REMAIN = 40;
FilesParser.MUL = 41;
FilesParser.NE = 42;
FilesParser.NEXT = 43;
FilesParser.OBRA = 44;
FilesParser.OCUR = 45;
FilesParser.OPAR = 46;
FilesParser.OR = 47;
FilesParser.PI = 48;
FilesParser.PROG = 49;
FilesParser.RETURN = 50;
FilesParser.SIN = 51;
FilesParser.SQRT = 52;
FilesParser.STEP = 53;
FilesParser.SUB = 54;
FilesParser.TAN = 55;
FilesParser.THEN = 56;
FilesParser.TO = 57;
FilesParser.WHILE = 58;
FilesParser.WHILEEND = 59;
FilesParser.ID = 60;
FilesParser.UINT = 61;
FilesParser.STRING = 62;
FilesParser.WS = 63;
FilesParser.NEWLINE = 64;

FilesParser.RULE_header = 0;
FilesParser.RULE_attributes = 1;
FilesParser.RULE_headerAttr = 2;
FilesParser.RULE_headerValue = 3;
FilesParser.RULE_fileName = 4;
FilesParser.RULE_startHeader = 5;
FilesParser.RULE_endHeader = 6;
FilesParser.RULE_endFile = 7;

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.startHeader = function() {
    return this.getTypedRuleContext(StartHeaderContext,0);
};

HeaderContext.prototype.attributes = function() {
    return this.getTypedRuleContext(AttributesContext,0);
};

HeaderContext.prototype.endHeader = function() {
    return this.getTypedRuleContext(EndHeaderContext,0);
};

HeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitHeader(this);
	}
};

HeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FilesParser.HeaderContext = HeaderContext;

FilesParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FilesParser.RULE_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.startHeader();
        this.state = 17;
        this.attributes();
        this.state = 18;
        this.endHeader();
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

function AttributesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_attributes;
    return this;
}

AttributesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributesContext.prototype.constructor = AttributesContext;

AttributesContext.prototype.headerAttr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HeaderAttrContext);
    } else {
        return this.getTypedRuleContext(HeaderAttrContext,i);
    }
};

AttributesContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FilesParser.COLON);
    } else {
        return this.getToken(FilesParser.COLON, i);
    }
};


AttributesContext.prototype.headerValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HeaderValueContext);
    } else {
        return this.getTypedRuleContext(HeaderValueContext,i);
    }
};

AttributesContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FilesParser.NEWLINE);
    } else {
        return this.getToken(FilesParser.NEWLINE, i);
    }
};


AttributesContext.prototype.fileName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FileNameContext);
    } else {
        return this.getTypedRuleContext(FileNameContext,i);
    }
};

AttributesContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterAttributes(this);
	}
};

AttributesContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitAttributes(this);
	}
};

AttributesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitAttributes(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FilesParser.AttributesContext = AttributesContext;

FilesParser.prototype.attributes = function() {

    var localctx = new AttributesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FilesParser.RULE_attributes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 30;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FilesParser.ID:
                this.state = 20;
                this.headerAttr();
                this.state = 21;
                this.match(FilesParser.COLON);
                this.state = 22;
                this.headerValue();
                this.state = 23;
                this.match(FilesParser.NEWLINE);
                break;
            case FilesParser.T__0:
                this.state = 25;
                this.match(FilesParser.T__0);
                this.state = 26;
                this.match(FilesParser.COLON);
                this.state = 27;
                this.fileName(0);
                this.state = 28;
                this.match(FilesParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 32; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FilesParser.T__0 || _la===FilesParser.ID);
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

function HeaderAttrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_headerAttr;
    return this;
}

HeaderAttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderAttrContext.prototype.constructor = HeaderAttrContext;

HeaderAttrContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FilesParser.ID);
    } else {
        return this.getToken(FilesParser.ID, i);
    }
};


HeaderAttrContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FilesParser.WS);
    } else {
        return this.getToken(FilesParser.WS, i);
    }
};


HeaderAttrContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterHeaderAttr(this);
	}
};

HeaderAttrContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitHeaderAttr(this);
	}
};

HeaderAttrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitHeaderAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FilesParser.HeaderAttrContext = HeaderAttrContext;

FilesParser.prototype.headerAttr = function() {

    var localctx = new HeaderAttrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FilesParser.RULE_headerAttr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(FilesParser.ID);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FilesParser.WS) {
            this.state = 35;
            this.match(FilesParser.WS);
            this.state = 36;
            this.match(FilesParser.ID);
            this.state = 41;
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

function HeaderValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_headerValue;
    return this;
}

HeaderValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderValueContext.prototype.constructor = HeaderValueContext;

HeaderValueContext.prototype.ID = function() {
    return this.getToken(FilesParser.ID, 0);
};

HeaderValueContext.prototype.UINT = function() {
    return this.getToken(FilesParser.UINT, 0);
};

HeaderValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterHeaderValue(this);
	}
};

HeaderValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitHeaderValue(this);
	}
};

HeaderValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitHeaderValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FilesParser.HeaderValueContext = HeaderValueContext;

FilesParser.prototype.headerValue = function() {

    var localctx = new HeaderValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FilesParser.RULE_headerValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        _la = this._input.LA(1);
        if(!(_la===FilesParser.ID || _la===FilesParser.UINT)) {
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

function FileNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_fileName;
    return this;
}

FileNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileNameContext.prototype.constructor = FileNameContext;

FileNameContext.prototype.ID = function() {
    return this.getToken(FilesParser.ID, 0);
};

FileNameContext.prototype.UINT = function() {
    return this.getToken(FilesParser.UINT, 0);
};

FileNameContext.prototype.fileName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FileNameContext);
    } else {
        return this.getTypedRuleContext(FileNameContext,i);
    }
};

FileNameContext.prototype.SUB = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FilesParser.SUB);
    } else {
        return this.getToken(FilesParser.SUB, i);
    }
};


FileNameContext.prototype.ADD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FilesParser.ADD);
    } else {
        return this.getToken(FilesParser.ADD, i);
    }
};


FileNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterFileName(this);
	}
};

FileNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitFileName(this);
	}
};

FileNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitFileName(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FilesParser.prototype.fileName = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new FileNameContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, FilesParser.RULE_fileName, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FilesParser.ID:
            this.state = 45;
            this.match(FilesParser.ID);
            break;
        case FilesParser.UINT:
            this.state = 46;
            this.match(FilesParser.UINT);
            this.state = 47;
            this.match(FilesParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 59;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FileNameContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, FilesParser.RULE_fileName);
                this.state = 50;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 52; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 51;
                    _la = this._input.LA(1);
                    if(!(_la===FilesParser.ADD || _la===FilesParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 54; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===FilesParser.ADD || _la===FilesParser.SUB);
                this.state = 56;
                this.fileName(2); 
            }
            this.state = 61;
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

function StartHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_startHeader;
    return this;
}

StartHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartHeaderContext.prototype.constructor = StartHeaderContext;

StartHeaderContext.prototype.NEWLINE = function() {
    return this.getToken(FilesParser.NEWLINE, 0);
};

StartHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterStartHeader(this);
	}
};

StartHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitStartHeader(this);
	}
};

StartHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitStartHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FilesParser.StartHeaderContext = StartHeaderContext;

FilesParser.prototype.startHeader = function() {

    var localctx = new StartHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FilesParser.RULE_startHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(FilesParser.T__1);
        this.state = 63;
        this.match(FilesParser.NEWLINE);
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

function EndHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_endHeader;
    return this;
}

EndHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndHeaderContext.prototype.constructor = EndHeaderContext;

EndHeaderContext.prototype.NEWLINE = function() {
    return this.getToken(FilesParser.NEWLINE, 0);
};

EndHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterEndHeader(this);
	}
};

EndHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitEndHeader(this);
	}
};

EndHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitEndHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FilesParser.EndHeaderContext = EndHeaderContext;

FilesParser.prototype.endHeader = function() {

    var localctx = new EndHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FilesParser.RULE_endHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(FilesParser.T__2);
        this.state = 66;
        this.match(FilesParser.NEWLINE);
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

function EndFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_endFile;
    return this;
}

EndFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndFileContext.prototype.constructor = EndFileContext;

EndFileContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FilesParser.NEWLINE);
    } else {
        return this.getToken(FilesParser.NEWLINE, i);
    }
};


EndFileContext.prototype.enterRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.enterEndFile(this);
	}
};

EndFileContext.prototype.exitRule = function(listener) {
    if(listener instanceof FilesListener ) {
        listener.exitEndFile(this);
	}
};

EndFileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FilesVisitor ) {
        return visitor.visitEndFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FilesParser.EndFileContext = EndFileContext;

FilesParser.prototype.endFile = function() {

    var localctx = new EndFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FilesParser.RULE_endFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(FilesParser.T__3);
        this.state = 70; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 69;
            this.match(FilesParser.NEWLINE);
            this.state = 72; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FilesParser.NEWLINE);
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


FilesParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 4:
			return this.fileName_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FilesParser.prototype.fileName_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FilesParser = FilesParser;
