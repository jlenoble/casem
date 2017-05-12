// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/File.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FileListener = require('./FileListener').FileListener;
var FileVisitor = require('./FileVisitor').FileVisitor;

var grammarFileName = "File.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000eB\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003!\n\u0003\r\u0003",
    "\u000e\u0003\"\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005+\n\u0005\u0003\u0006\u0003\u0006\u0007",
    "\u0006/\n\u0006\f\u0006\u000e\u00062\u000b\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0006\t>\n\t\r\t\u000e\t?\u0003\t\u0002\u0002\n\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0002\u0002\u0002@\u0002\u0012\u0003\u0002",
    "\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002",
    "\u0002\b*\u0003\u0002\u0002\u0002\n,\u0003\u0002\u0002\u0002\f5\u0003",
    "\u0002\u0002\u0002\u000e8\u0003\u0002\u0002\u0002\u0010;\u0003\u0002",
    "\u0002\u0002\u0012\u0013\u0005\f\u0007\u0002\u0013\u0014\u0005\u0004",
    "\u0003\u0002\u0014\u0015\u0005\u000e\b\u0002\u0015\u0003\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0005\u0006\u0004\u0002\u0017\u0018\u0007\u0003",
    "\u0002\u0002\u0018\u0019\u0005\b\u0005\u0002\u0019\u001a\u0007\f\u0002",
    "\u0002\u001a!\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0004\u0002",
    "\u0002\u001c\u001d\u0007\u0003\u0002\u0002\u001d\u001e\u0005\n\u0006",
    "\u0002\u001e\u001f\u0007\f\u0002\u0002\u001f!\u0003\u0002\u0002\u0002",
    " \u0016\u0003\u0002\u0002\u0002 \u001b\u0003\u0002\u0002\u0002!\"\u0003",
    "\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002",
    "#\u0005\u0003\u0002\u0002\u0002$%\u0007\u000b\u0002\u0002%\u0007\u0003",
    "\u0002\u0002\u0002&+\u0007\u000b\u0002\u0002\'+\u0007\n\u0002\u0002",
    "(+\u0007\u000e\u0002\u0002)+\u0003\u0002\u0002\u0002*&\u0003\u0002\u0002",
    "\u0002*\'\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*)\u0003",
    "\u0002\u0002\u0002+\t\u0003\u0002\u0002\u0002,0\u0005\b\u0005\u0002",
    "-/\u0007\u0005\u0002\u0002.-\u0003\u0002\u0002\u0002/2\u0003\u0002\u0002",
    "\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u000213\u0003\u0002",
    "\u0002\u000220\u0003\u0002\u0002\u000234\u0007\u000b\u0002\u00024\u000b",
    "\u0003\u0002\u0002\u000256\u0007\u0006\u0002\u000267\u0007\f\u0002\u0002",
    "7\r\u0003\u0002\u0002\u000289\u0007\u0007\u0002\u00029:\u0007\f\u0002",
    "\u0002:\u000f\u0003\u0002\u0002\u0002;=\u0007\b\u0002\u0002<>\u0007",
    "\f\u0002\u0002=<\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?",
    "=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@\u0011\u0003\u0002",
    "\u0002\u0002\u0007 \"*0?"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'File Name'", "'-'", "'%Header Record'", 
                     "'%Data Record'", "'%End'", null, null, null, null, 
                     null, "'0'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "ID", "NATNUM", 
                      "TEXT", "NEWLINE", "STRING", "ZERO" ];

var ruleNames =  [ "header", "attributes", "headerAttr", "headerValue", 
                   "fileName", "startHeader", "endHeader", "endFile" ];

function FileParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FileParser.prototype = Object.create(antlr4.Parser.prototype);
FileParser.prototype.constructor = FileParser;

Object.defineProperty(FileParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FileParser.EOF = antlr4.Token.EOF;
FileParser.T__0 = 1;
FileParser.T__1 = 2;
FileParser.T__2 = 3;
FileParser.T__3 = 4;
FileParser.T__4 = 5;
FileParser.T__5 = 6;
FileParser.ID = 7;
FileParser.NATNUM = 8;
FileParser.TEXT = 9;
FileParser.NEWLINE = 10;
FileParser.STRING = 11;
FileParser.ZERO = 12;

FileParser.RULE_header = 0;
FileParser.RULE_attributes = 1;
FileParser.RULE_headerAttr = 2;
FileParser.RULE_headerValue = 3;
FileParser.RULE_fileName = 4;
FileParser.RULE_startHeader = 5;
FileParser.RULE_endHeader = 6;
FileParser.RULE_endFile = 7;

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FileParser.RULE_header;
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
    if(listener instanceof FileListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitHeader(this);
	}
};

HeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.HeaderContext = HeaderContext;

FileParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FileParser.RULE_header);
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
    this.ruleIndex = FileParser.RULE_attributes;
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
        return this.getTokens(FileParser.NEWLINE);
    } else {
        return this.getToken(FileParser.NEWLINE, i);
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
    if(listener instanceof FileListener ) {
        listener.enterAttributes(this);
	}
};

AttributesContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitAttributes(this);
	}
};

AttributesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitAttributes(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.AttributesContext = AttributesContext;

FileParser.prototype.attributes = function() {

    var localctx = new AttributesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FileParser.RULE_attributes);
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
            case FileParser.TEXT:
                this.state = 20;
                this.headerAttr();
                this.state = 21;
                this.match(FileParser.T__0);
                this.state = 22;
                this.headerValue();
                this.state = 23;
                this.match(FileParser.NEWLINE);
                break;
            case FileParser.T__1:
                this.state = 25;
                this.match(FileParser.T__1);
                this.state = 26;
                this.match(FileParser.T__0);
                this.state = 27;
                this.fileName();
                this.state = 28;
                this.match(FileParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 32; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FileParser.T__1 || _la===FileParser.TEXT);
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
    this.ruleIndex = FileParser.RULE_headerAttr;
    return this;
}

HeaderAttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderAttrContext.prototype.constructor = HeaderAttrContext;

HeaderAttrContext.prototype.TEXT = function() {
    return this.getToken(FileParser.TEXT, 0);
};

HeaderAttrContext.prototype.enterRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.enterHeaderAttr(this);
	}
};

HeaderAttrContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitHeaderAttr(this);
	}
};

HeaderAttrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitHeaderAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.HeaderAttrContext = HeaderAttrContext;

FileParser.prototype.headerAttr = function() {

    var localctx = new HeaderAttrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FileParser.RULE_headerAttr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(FileParser.TEXT);
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
    this.ruleIndex = FileParser.RULE_headerValue;
    return this;
}

HeaderValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderValueContext.prototype.constructor = HeaderValueContext;

HeaderValueContext.prototype.TEXT = function() {
    return this.getToken(FileParser.TEXT, 0);
};

HeaderValueContext.prototype.NATNUM = function() {
    return this.getToken(FileParser.NATNUM, 0);
};

HeaderValueContext.prototype.ZERO = function() {
    return this.getToken(FileParser.ZERO, 0);
};

HeaderValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.enterHeaderValue(this);
	}
};

HeaderValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitHeaderValue(this);
	}
};

HeaderValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitHeaderValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.HeaderValueContext = HeaderValueContext;

FileParser.prototype.headerValue = function() {

    var localctx = new HeaderValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FileParser.RULE_headerValue);
    try {
        this.state = 40;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.match(FileParser.TEXT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.match(FileParser.NATNUM);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 38;
            this.match(FileParser.ZERO);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);

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

function FileNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FileParser.RULE_fileName;
    return this;
}

FileNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileNameContext.prototype.constructor = FileNameContext;

FileNameContext.prototype.headerValue = function() {
    return this.getTypedRuleContext(HeaderValueContext,0);
};

FileNameContext.prototype.TEXT = function() {
    return this.getToken(FileParser.TEXT, 0);
};

FileNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.enterFileName(this);
	}
};

FileNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitFileName(this);
	}
};

FileNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitFileName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.FileNameContext = FileNameContext;

FileParser.prototype.fileName = function() {

    var localctx = new FileNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FileParser.RULE_fileName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.headerValue();
        this.state = 46;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FileParser.T__2) {
            this.state = 43;
            this.match(FileParser.T__2);
            this.state = 48;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 49;
        this.match(FileParser.TEXT);
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

function StartHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FileParser.RULE_startHeader;
    return this;
}

StartHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartHeaderContext.prototype.constructor = StartHeaderContext;

StartHeaderContext.prototype.NEWLINE = function() {
    return this.getToken(FileParser.NEWLINE, 0);
};

StartHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.enterStartHeader(this);
	}
};

StartHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitStartHeader(this);
	}
};

StartHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitStartHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.StartHeaderContext = StartHeaderContext;

FileParser.prototype.startHeader = function() {

    var localctx = new StartHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FileParser.RULE_startHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(FileParser.T__3);
        this.state = 52;
        this.match(FileParser.NEWLINE);
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
    this.ruleIndex = FileParser.RULE_endHeader;
    return this;
}

EndHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndHeaderContext.prototype.constructor = EndHeaderContext;

EndHeaderContext.prototype.NEWLINE = function() {
    return this.getToken(FileParser.NEWLINE, 0);
};

EndHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.enterEndHeader(this);
	}
};

EndHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitEndHeader(this);
	}
};

EndHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitEndHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.EndHeaderContext = EndHeaderContext;

FileParser.prototype.endHeader = function() {

    var localctx = new EndHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FileParser.RULE_endHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(FileParser.T__4);
        this.state = 55;
        this.match(FileParser.NEWLINE);
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
    this.ruleIndex = FileParser.RULE_endFile;
    return this;
}

EndFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndFileContext.prototype.constructor = EndFileContext;

EndFileContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FileParser.NEWLINE);
    } else {
        return this.getToken(FileParser.NEWLINE, i);
    }
};


EndFileContext.prototype.enterRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.enterEndFile(this);
	}
};

EndFileContext.prototype.exitRule = function(listener) {
    if(listener instanceof FileListener ) {
        listener.exitEndFile(this);
	}
};

EndFileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FileVisitor ) {
        return visitor.visitEndFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FileParser.EndFileContext = EndFileContext;

FileParser.prototype.endFile = function() {

    var localctx = new EndFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FileParser.RULE_endFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(FileParser.T__5);
        this.state = 59; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 58;
            this.match(FileParser.NEWLINE);
            this.state = 61; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FileParser.NEWLINE);
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


exports.FileParser = FileParser;
