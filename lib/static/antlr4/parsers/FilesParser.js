'use strict';

// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Files.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FilesListener = require('./FilesListener').FilesListener;
var FilesVisitor = require('./FilesVisitor').FilesVisitor;

var grammarFileName = "Files.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03BM\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04', '\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b', '\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x02\x03', '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03', '\x03\x03\x03\x03\x03\x03\x03\x06\x03!\n\x03\r\x03', '\x0E\x03"\x03\x04\x03\x04\x03\x04\x07\x04(\n\x04', '\f\x04\x0E\x04+\x0B\x04\x03\x05\x03\x05\x03\x06', '\x03\x06\x03\x06\x03\x06\x05\x063\n\x06\x03\x06', '\x03\x06\x06\x067\n\x06\r\x06\x0E\x068\x03\x06\x07', '\x06<\n\x06\f\x06\x0E\x06?\x0B\x06\x03\x07\x03\x07', '\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x06\tI\n\t\r', '\t\x0E\tJ\x03\t\x02\x03\n\n\x02\x04\x06\b\n\f\x0E\x10', '\x02\x04\x03\x02>?\x04\x02\t\t88\x02K\x02\x12\x03', '\x02\x02\x02\x04 \x03\x02\x02\x02\x06$\x03\x02', '\x02\x02\b,\x03\x02\x02\x02\n2\x03\x02\x02\x02\f', '@\x03\x02\x02\x02\x0EC\x03\x02\x02\x02\x10F\x03', '\x02\x02\x02\x12\x13\x05\f\x07\x02\x13\x14\x05', '\x04\x03\x02\x14\x15\x05\x0E\b\x02\x15\x03\x03', '\x02\x02\x02\x16\x17\x05\x06\x04\x02\x17\x18\x07', '\x11\x02\x02\x18\x19\x05\b\x05\x02\x19\x1A\x07', 'B\x02\x02\x1A!\x03\x02\x02\x02\x1B\x1C\x07\x03', '\x02\x02\x1C\x1D\x07\x11\x02\x02\x1D\x1E\x05\n', '\x06\x02\x1E\x1F\x07B\x02\x02\x1F!\x03\x02\x02', '\x02 \x16\x03\x02\x02\x02 \x1B\x03\x02\x02\x02', '!"\x03\x02\x02\x02" \x03\x02\x02\x02"#\x03\x02', '\x02\x02#\x05\x03\x02\x02\x02$)\x07>\x02\x02%&\x07', 'A\x02\x02&(\x07>\x02\x02\'%\x03\x02\x02\x02(+\x03', '\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02', '*\x07\x03\x02\x02\x02+)\x03\x02\x02\x02,-\t\x02', '\x02\x02-\t\x03\x02\x02\x02./\b\x06\x01\x02/3\x07', '>\x02\x0201\x07?\x02\x0213\x07>\x02\x022.\x03\x02', '\x02\x0220\x03\x02\x02\x023=\x03\x02\x02\x0246\f', '\x03\x02\x0257\t\x03\x02\x0265\x03\x02\x02\x027', '8\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02', '\x029:\x03\x02\x02\x02:<\x05\n\x06\x04;4\x03\x02', '\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03', '\x02\x02\x02>\x0B\x03\x02\x02\x02?=\x03\x02\x02', '\x02@A\x07\x04\x02\x02AB\x07B\x02\x02B\r\x03\x02', '\x02\x02CD\x07\x05\x02\x02DE\x07B\x02\x02E\x0F\x03', '\x02\x02\x02FH\x07\x06\x02\x02GI\x07B\x02\x02HG', '\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02', '\x02JK\x03\x02\x02\x02K\x11\x03\x02\x02\x02\t "', ")28=J"].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'File Name'", "'%Header Record'", "'%Data Record'", "'%End'", "'\\Abs '", "'\\acos '", "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", "']'", "'}'", "'\\ClrText'", "':'", "','", "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", "'='", "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", "'\\Goto'", "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\Lbl '", "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\Prog '", "'\\Return'", "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", "' \\To '", "'\\While '", "'\\WhileEnd'"];

var symbolicNames = [null, null, null, null, null, "ABS", "ACOS", "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", "OR", "PI", "PROG", "RETURN", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND", "ID", "UINT", "STRING", "WS", "NEWLINE"];

var ruleNames = ["header", "attributes", "headerAttr", "headerValue", "fileName", "startHeader", "endHeader", "endFile"];

function FilesParser(input) {
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
    get: function get() {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.startHeader = function () {
    return this.getTypedRuleContext(StartHeaderContext, 0);
};

HeaderContext.prototype.attributes = function () {
    return this.getTypedRuleContext(AttributesContext, 0);
};

HeaderContext.prototype.endHeader = function () {
    return this.getTypedRuleContext(EndHeaderContext, 0);
};

HeaderContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterHeader(this);
    }
};

HeaderContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitHeader(this);
    }
};

HeaderContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.HeaderContext = HeaderContext;

FilesParser.prototype.header = function () {

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
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_attributes;
    return this;
}

AttributesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributesContext.prototype.constructor = AttributesContext;

AttributesContext.prototype.headerAttr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(HeaderAttrContext);
    } else {
        return this.getTypedRuleContext(HeaderAttrContext, i);
    }
};

AttributesContext.prototype.COLON = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FilesParser.COLON);
    } else {
        return this.getToken(FilesParser.COLON, i);
    }
};

AttributesContext.prototype.headerValue = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(HeaderValueContext);
    } else {
        return this.getTypedRuleContext(HeaderValueContext, i);
    }
};

AttributesContext.prototype.NEWLINE = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FilesParser.NEWLINE);
    } else {
        return this.getToken(FilesParser.NEWLINE, i);
    }
};

AttributesContext.prototype.fileName = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(FileNameContext);
    } else {
        return this.getTypedRuleContext(FileNameContext, i);
    }
};

AttributesContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterAttributes(this);
    }
};

AttributesContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitAttributes(this);
    }
};

AttributesContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitAttributes(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.AttributesContext = AttributesContext;

FilesParser.prototype.attributes = function () {

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
            switch (this._input.LA(1)) {
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
        } while (_la === FilesParser.T__0 || _la === FilesParser.ID);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_headerAttr;
    return this;
}

HeaderAttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderAttrContext.prototype.constructor = HeaderAttrContext;

HeaderAttrContext.prototype.ID = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FilesParser.ID);
    } else {
        return this.getToken(FilesParser.ID, i);
    }
};

HeaderAttrContext.prototype.WS = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FilesParser.WS);
    } else {
        return this.getToken(FilesParser.WS, i);
    }
};

HeaderAttrContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterHeaderAttr(this);
    }
};

HeaderAttrContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitHeaderAttr(this);
    }
};

HeaderAttrContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitHeaderAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.HeaderAttrContext = HeaderAttrContext;

FilesParser.prototype.headerAttr = function () {

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
        while (_la === FilesParser.WS) {
            this.state = 35;
            this.match(FilesParser.WS);
            this.state = 36;
            this.match(FilesParser.ID);
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_headerValue;
    return this;
}

HeaderValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderValueContext.prototype.constructor = HeaderValueContext;

HeaderValueContext.prototype.ID = function () {
    return this.getToken(FilesParser.ID, 0);
};

HeaderValueContext.prototype.UINT = function () {
    return this.getToken(FilesParser.UINT, 0);
};

HeaderValueContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterHeaderValue(this);
    }
};

HeaderValueContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitHeaderValue(this);
    }
};

HeaderValueContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitHeaderValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.HeaderValueContext = HeaderValueContext;

FilesParser.prototype.headerValue = function () {

    var localctx = new HeaderValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FilesParser.RULE_headerValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        _la = this._input.LA(1);
        if (!(_la === FilesParser.ID || _la === FilesParser.UINT)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_fileName;
    return this;
}

FileNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileNameContext.prototype.constructor = FileNameContext;

FileNameContext.prototype.ID = function () {
    return this.getToken(FilesParser.ID, 0);
};

FileNameContext.prototype.UINT = function () {
    return this.getToken(FilesParser.UINT, 0);
};

FileNameContext.prototype.fileName = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(FileNameContext);
    } else {
        return this.getTypedRuleContext(FileNameContext, i);
    }
};

FileNameContext.prototype.SUB = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FilesParser.SUB);
    } else {
        return this.getToken(FilesParser.SUB, i);
    }
};

FileNameContext.prototype.ADD = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FilesParser.ADD);
    } else {
        return this.getToken(FilesParser.ADD, i);
    }
};

FileNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterFileName(this);
    }
};

FileNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitFileName(this);
    }
};

FileNameContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitFileName(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.prototype.fileName = function (_p) {
    if (_p === undefined) {
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
        switch (this._input.LA(1)) {
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
        var _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FileNameContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, FilesParser.RULE_fileName);
                this.state = 50;
                if (!this.precpred(this._ctx, 1)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 51;
                    _la = this._input.LA(1);
                    if (!(_la === FilesParser.ADD || _la === FilesParser.SUB)) {
                        this._errHandler.recoverInline(this);
                    } else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 54;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === FilesParser.ADD || _la === FilesParser.SUB);
                this.state = 56;
                this.fileName(2);
            }
            this.state = 61;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function StartHeaderContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_startHeader;
    return this;
}

StartHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartHeaderContext.prototype.constructor = StartHeaderContext;

StartHeaderContext.prototype.NEWLINE = function () {
    return this.getToken(FilesParser.NEWLINE, 0);
};

StartHeaderContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterStartHeader(this);
    }
};

StartHeaderContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitStartHeader(this);
    }
};

StartHeaderContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitStartHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.StartHeaderContext = StartHeaderContext;

FilesParser.prototype.startHeader = function () {

    var localctx = new StartHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FilesParser.RULE_startHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(FilesParser.T__1);
        this.state = 63;
        this.match(FilesParser.NEWLINE);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_endHeader;
    return this;
}

EndHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndHeaderContext.prototype.constructor = EndHeaderContext;

EndHeaderContext.prototype.NEWLINE = function () {
    return this.getToken(FilesParser.NEWLINE, 0);
};

EndHeaderContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterEndHeader(this);
    }
};

EndHeaderContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitEndHeader(this);
    }
};

EndHeaderContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitEndHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.EndHeaderContext = EndHeaderContext;

FilesParser.prototype.endHeader = function () {

    var localctx = new EndHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FilesParser.RULE_endHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(FilesParser.T__2);
        this.state = 66;
        this.match(FilesParser.NEWLINE);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FilesParser.RULE_endFile;
    return this;
}

EndFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndFileContext.prototype.constructor = EndFileContext;

EndFileContext.prototype.NEWLINE = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FilesParser.NEWLINE);
    } else {
        return this.getToken(FilesParser.NEWLINE, i);
    }
};

EndFileContext.prototype.enterRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.enterEndFile(this);
    }
};

EndFileContext.prototype.exitRule = function (listener) {
    if (listener instanceof FilesListener) {
        listener.exitEndFile(this);
    }
};

EndFileContext.prototype.accept = function (visitor) {
    if (visitor instanceof FilesVisitor) {
        return visitor.visitEndFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FilesParser.EndFileContext = EndFileContext;

FilesParser.prototype.endFile = function () {

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
        } while (_la === FilesParser.NEWLINE);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

FilesParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 4:
            return this.fileName_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

FilesParser.prototype.fileName_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 1);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

exports.FilesParser = FilesParser;