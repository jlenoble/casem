'use strict';

// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/DataStructs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DataStructsListener = require('./DataStructsListener').DataStructsListener;
var DataStructsVisitor = require('./DataStructsVisitor').DataStructsVisitor;

var grammarFileName = "DataStructs.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03>#\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04', '\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x03\x02', '\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04', '\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07', '\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07', '!\n\x07\x03\x07\x02\x02\b\x02\x04\x06\b\n\f\x02\x03', '\b\x02\b\t\r\x0E\x14\x14##67::\x02\x1E\x02\x0E\x03', '\x02\x02\x02\x04\x10\x03\x02\x02\x02\x06\x13\x03', '\x02\x02\x02\b\x16\x03\x02\x02\x02\n\x18\x03\x02', '\x02\x02\f \x03\x02\x02\x02\x0E\x0F\t\x02\x02\x02', '\x0F\x03\x03\x02\x02\x02\x10\x11\x07*\x02\x02', '\x11\x12\x07\x03\x02\x02\x12\x05\x03\x02\x02\x02', '\x13\x14\x07&\x02\x02\x14\x15\x07\x04\x02\x02', '\x15\x07\x03\x02\x02\x02\x16\x17\x07\x03\x02\x02', '\x17\t\x03\x02\x02\x02\x18\x19\x073\x02\x02\x19', '\x0B\x03\x02\x02\x02\x1A!\x07\x04\x02\x02\x1B', '\x1C\x07\x18\x02\x02\x1C!\x07\x04\x02\x02\x1D', '\x1E\x07\x04\x02\x02\x1E\x1F\x07\x18\x02\x02\x1F', '!\x07\x04\x02\x02 \x1A\x03\x02\x02\x02 \x1B\x03', '\x02\x02\x02 \x1D\x03\x02\x02\x02!\r\x03\x02\x02', '\x02\x03 '].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, null, null, null, null, null, "'\\Abs '", "'\\acos '", "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", "']'", "'}'", "'\\ClrText'", "':'", "','", "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", "'='", "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", "'\\Goto'", "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\Lbl '", "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\Prog '", "'\\Return'", "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", "' \\To '", "'\\While '", "'\\WhileEnd'"];

var symbolicNames = [null, "ID", "UINT", "STRING", "WS", "NEWLINE", "ABS", "ACOS", "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", "OR", "PI", "PROG", "RETURN", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND"];

var ruleNames = ["func", "matrix", "list", "variable", "constant", "number"];

function DataStructsParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DataStructsParser.prototype = Object.create(antlr4.Parser.prototype);
DataStructsParser.prototype.constructor = DataStructsParser;

Object.defineProperty(DataStructsParser.prototype, "atn", {
    get: function get() {
        return atn;
    }
});

DataStructsParser.EOF = antlr4.Token.EOF;
DataStructsParser.ID = 1;
DataStructsParser.UINT = 2;
DataStructsParser.STRING = 3;
DataStructsParser.WS = 4;
DataStructsParser.NEWLINE = 5;
DataStructsParser.ABS = 6;
DataStructsParser.ACOS = 7;
DataStructsParser.ADD = 8;
DataStructsParser.AND = 9;
DataStructsParser.ARROW = 10;
DataStructsParser.ASIN = 11;
DataStructsParser.ATAN = 12;
DataStructsParser.CBRA = 13;
DataStructsParser.CCUR = 14;
DataStructsParser.CLRTEXT = 15;
DataStructsParser.COLON = 16;
DataStructsParser.COMMA = 17;
DataStructsParser.COS = 18;
DataStructsParser.CPAR = 19;
DataStructsParser.DIV = 20;
DataStructsParser.DO = 21;
DataStructsParser.DOT = 22;
DataStructsParser.ELSE = 23;
DataStructsParser.EQ = 24;
DataStructsParser.FATARROW = 25;
DataStructsParser.FOR = 26;
DataStructsParser.GE = 27;
DataStructsParser.GETKEY = 28;
DataStructsParser.GOTO = 29;
DataStructsParser.GT = 30;
DataStructsParser.IF = 31;
DataStructsParser.IFEND = 32;
DataStructsParser.INT = 33;
DataStructsParser.LBL = 34;
DataStructsParser.LE = 35;
DataStructsParser.LIST = 36;
DataStructsParser.LOCATE = 37;
DataStructsParser.LOOPWHILE = 38;
DataStructsParser.LT = 39;
DataStructsParser.MATRIX = 40;
DataStructsParser.REMAIN = 41;
DataStructsParser.MUL = 42;
DataStructsParser.NE = 43;
DataStructsParser.NEXT = 44;
DataStructsParser.OBRA = 45;
DataStructsParser.OCUR = 46;
DataStructsParser.OPAR = 47;
DataStructsParser.OR = 48;
DataStructsParser.PI = 49;
DataStructsParser.PROG = 50;
DataStructsParser.RETURN = 51;
DataStructsParser.SIN = 52;
DataStructsParser.SQRT = 53;
DataStructsParser.STEP = 54;
DataStructsParser.SUB = 55;
DataStructsParser.TAN = 56;
DataStructsParser.THEN = 57;
DataStructsParser.TO = 58;
DataStructsParser.WHILE = 59;
DataStructsParser.WHILEEND = 60;

DataStructsParser.RULE_func = 0;
DataStructsParser.RULE_matrix = 1;
DataStructsParser.RULE_list = 2;
DataStructsParser.RULE_variable = 3;
DataStructsParser.RULE_constant = 4;
DataStructsParser.RULE_number = 5;

function FuncContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function () {
    return this.getToken(DataStructsParser.SQRT, 0);
};

FuncContext.prototype.COS = function () {
    return this.getToken(DataStructsParser.COS, 0);
};

FuncContext.prototype.SIN = function () {
    return this.getToken(DataStructsParser.SIN, 0);
};

FuncContext.prototype.TAN = function () {
    return this.getToken(DataStructsParser.TAN, 0);
};

FuncContext.prototype.ACOS = function () {
    return this.getToken(DataStructsParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function () {
    return this.getToken(DataStructsParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function () {
    return this.getToken(DataStructsParser.ATAN, 0);
};

FuncContext.prototype.ABS = function () {
    return this.getToken(DataStructsParser.ABS, 0);
};

FuncContext.prototype.INT = function () {
    return this.getToken(DataStructsParser.INT, 0);
};

FuncContext.prototype.enterRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.enterFunc(this);
    }
};

FuncContext.prototype.exitRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.exitFunc(this);
    }
};

FuncContext.prototype.accept = function (visitor) {
    if (visitor instanceof DataStructsVisitor) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};

DataStructsParser.FuncContext = FuncContext;

DataStructsParser.prototype.func = function () {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DataStructsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) == 0 && (1 << _la & (1 << DataStructsParser.ABS | 1 << DataStructsParser.ACOS | 1 << DataStructsParser.ASIN | 1 << DataStructsParser.ATAN | 1 << DataStructsParser.COS)) !== 0 || (_la - 33 & ~0x1f) == 0 && (1 << _la - 33 & (1 << DataStructsParser.INT - 33 | 1 << DataStructsParser.SIN - 33 | 1 << DataStructsParser.SQRT - 33 | 1 << DataStructsParser.TAN - 33)) !== 0)) {
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

function MatrixContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function () {
    return this.getToken(DataStructsParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function () {
    return this.getToken(DataStructsParser.ID, 0);
};

MatrixContext.prototype.enterRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.enterMatrix(this);
    }
};

MatrixContext.prototype.exitRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.exitMatrix(this);
    }
};

MatrixContext.prototype.accept = function (visitor) {
    if (visitor instanceof DataStructsVisitor) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};

DataStructsParser.MatrixContext = MatrixContext;

DataStructsParser.prototype.matrix = function () {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DataStructsParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(DataStructsParser.MATRIX);
        this.state = 15;
        this.match(DataStructsParser.ID);
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

function ListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function () {
    return this.getToken(DataStructsParser.LIST, 0);
};

ListContext.prototype.UINT = function () {
    return this.getToken(DataStructsParser.UINT, 0);
};

ListContext.prototype.enterRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.enterList(this);
    }
};

ListContext.prototype.exitRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.exitList(this);
    }
};

ListContext.prototype.accept = function (visitor) {
    if (visitor instanceof DataStructsVisitor) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};

DataStructsParser.ListContext = ListContext;

DataStructsParser.prototype.list = function () {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DataStructsParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(DataStructsParser.LIST);
        this.state = 18;
        this.match(DataStructsParser.UINT);
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

function VariableContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function () {
    return this.getToken(DataStructsParser.ID, 0);
};

VariableContext.prototype.enterRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.enterVariable(this);
    }
};

VariableContext.prototype.exitRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.exitVariable(this);
    }
};

VariableContext.prototype.accept = function (visitor) {
    if (visitor instanceof DataStructsVisitor) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};

DataStructsParser.VariableContext = VariableContext;

DataStructsParser.prototype.variable = function () {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DataStructsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(DataStructsParser.ID);
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

function ConstantContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function () {
    return this.getToken(DataStructsParser.PI, 0);
};

ConstantContext.prototype.enterRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.enterConstant(this);
    }
};

ConstantContext.prototype.exitRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.exitConstant(this);
    }
};

ConstantContext.prototype.accept = function (visitor) {
    if (visitor instanceof DataStructsVisitor) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};

DataStructsParser.ConstantContext = ConstantContext;

DataStructsParser.prototype.constant = function () {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DataStructsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.match(DataStructsParser.PI);
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

function NumberContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(DataStructsParser.UINT);
    } else {
        return this.getToken(DataStructsParser.UINT, i);
    }
};

NumberContext.prototype.DOT = function () {
    return this.getToken(DataStructsParser.DOT, 0);
};

NumberContext.prototype.enterRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.enterNumber(this);
    }
};

NumberContext.prototype.exitRule = function (listener) {
    if (listener instanceof DataStructsListener) {
        listener.exitNumber(this);
    }
};

NumberContext.prototype.accept = function (visitor) {
    if (visitor instanceof DataStructsVisitor) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};

DataStructsParser.NumberContext = NumberContext;

DataStructsParser.prototype.number = function () {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DataStructsParser.RULE_number);
    try {
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 24;
                this.match(DataStructsParser.UINT);
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 25;
                this.match(DataStructsParser.DOT);
                this.state = 26;
                this.match(DataStructsParser.UINT);
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 27;
                this.match(DataStructsParser.UINT);
                this.state = 28;
                this.match(DataStructsParser.DOT);
                this.state = 29;
                this.match(DataStructsParser.UINT);
                break;

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

exports.DataStructsParser = DataStructsParser;