// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StatsListener = require('./StatsListener').StatsListener;
var StatsVisitor = require('./StatsVisitor').StatsVisitor;

var grammarFileName = "Stats.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00030\u0088\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002)\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00047\n\u0004\u0005\u0004",
    "9\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tV",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0007\tb\n\t\f\t\u000e\te\u000b\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000br\n\u000b\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0086\n\u0012",
    "\u0003\u0012\u0002\u0003\u0010\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\u0007\u0004\u0002",
    "\u0006\u0006\r\r\b\u0002\u0015\u0015\u0018\u0018\u001a\u001a\u001e\u001e",
    "!!$$\u0004\u0002\u0011\u0011\"#\u0004\u0002\t\t++\b\u0002\u0007\b\u000b",
    "\f\u000f\u000f\u001d\u001d(),,\u0002\u0088\u0002(\u0003\u0002\u0002",
    "\u0002\u0004*\u0003\u0002\u0002\u0002\u00068\u0003\u0002\u0002\u0002",
    "\b:\u0003\u0002\u0002\u0002\n>\u0003\u0002\u0002\u0002\fB\u0003\u0002",
    "\u0002\u0002\u000eD\u0003\u0002\u0002\u0002\u0010U\u0003\u0002\u0002",
    "\u0002\u0012f\u0003\u0002\u0002\u0002\u0014q\u0003\u0002\u0002\u0002",
    "\u0016s\u0003\u0002\u0002\u0002\u0018u\u0003\u0002\u0002\u0002\u001a",
    "w\u0003\u0002\u0002\u0002\u001cy\u0003\u0002\u0002\u0002\u001e{\u0003",
    "\u0002\u0002\u0002 }\u0003\u0002\u0002\u0002\"\u0085\u0003\u0002\u0002",
    "\u0002$)\u0005\u0004\u0003\u0002%)\u0005\u0006\u0004\u0002&)\u0005\b",
    "\u0005\u0002\')\u0005\n\u0006\u0002($\u0003\u0002\u0002\u0002(%\u0003",
    "\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002",
    ")\u0003\u0003\u0002\u0002\u0002*+\u0005\u0010\t\u0002+,\u0007\n\u0002",
    "\u0002,-\u0005\u0012\n\u0002-\u0005\u0003\u0002\u0002\u0002.9\u0007",
    "\u0005\u0002\u0002/0\u0007\u001f\u0002\u000201\u0005\u0010\t\u00021",
    "2\u0007\u000e\u0002\u000223\u0005\u0010\t\u000236\u0007\u000e\u0002",
    "\u000247\u0007\u0005\u0002\u000257\u0005\u0010\t\u000264\u0003\u0002",
    "\u0002\u000265\u0003\u0002\u0002\u000279\u0003\u0002\u0002\u00028.\u0003",
    "\u0002\u0002\u00028/\u0003\u0002\u0002\u00029\u0007\u0003\u0002\u0002",
    "\u0002:;\u0007\u0019\u0002\u0002;<\u0007\n\u0002\u0002<=\u0005\u0012",
    "\n\u0002=\t\u0003\u0002\u0002\u0002>?\u0005\u000e\b\u0002?@\u0007\u0016",
    "\u0002\u0002@A\u0005\u0002\u0002\u0002A\u000b\u0003\u0002\u0002\u0002",
    "BC\t\u0002\u0002\u0002C\r\u0003\u0002\u0002\u0002DE\u0005\u0010\t\u0002",
    "EF\u0005\u0016\f\u0002FG\u0005\u0010\t\u0002G\u000f\u0003\u0002\u0002",
    "\u0002HI\b\t\u0001\u0002IJ\u0007&\u0002\u0002JK\u0005\u0010\t\u0002",
    "KL\u0007\u0010\u0002\u0002LV\u0003\u0002\u0002\u0002MN\u0007+\u0002",
    "\u0002NV\u0005\u0010\t\nOP\u0005\u001c\u000f\u0002PQ\u0005\u0010\t\t",
    "QV\u0003\u0002\u0002\u0002RV\u0005\u001e\u0010\u0002SV\u0005 \u0011",
    "\u0002TV\u0005\"\u0012\u0002UH\u0003\u0002\u0002\u0002UM\u0003\u0002",
    "\u0002\u0002UO\u0003\u0002\u0002\u0002UR\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002Vc\u0003\u0002\u0002\u0002",
    "WX\f\u0007\u0002\u0002XY\u0005\u0018\r\u0002YZ\u0005\u0010\t\bZb\u0003",
    "\u0002\u0002\u0002[\\\f\u0006\u0002\u0002\\]\u0005\u001a\u000e\u0002",
    "]^\u0005\u0010\t\u0007^b\u0003\u0002\u0002\u0002_`\f\b\u0002\u0002`",
    "b\u0005\u0014\u000b\u0002aW\u0003\u0002\u0002\u0002a[\u0003\u0002\u0002",
    "\u0002a_\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002d\u0011\u0003\u0002\u0002\u0002",
    "ec\u0003\u0002\u0002\u0002fg\u0005\u001e\u0010\u0002g\u0013\u0003\u0002",
    "\u0002\u0002hi\u0007&\u0002\u0002ij\u0005\u0010\t\u0002jk\u0007\u0010",
    "\u0002\u0002kr\u0003\u0002\u0002\u0002lm\u0005\u001c\u000f\u0002mn\u0005",
    "\u0010\t\u0002nr\u0003\u0002\u0002\u0002or\u0005\u001e\u0010\u0002p",
    "r\u0005 \u0011\u0002qh\u0003\u0002\u0002\u0002ql\u0003\u0002\u0002\u0002",
    "qo\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002\u0002r\u0015\u0003\u0002",
    "\u0002\u0002st\t\u0003\u0002\u0002t\u0017\u0003\u0002\u0002\u0002uv",
    "\t\u0004\u0002\u0002v\u0019\u0003\u0002\u0002\u0002wx\t\u0005\u0002",
    "\u0002x\u001b\u0003\u0002\u0002\u0002yz\t\u0006\u0002\u0002z\u001d\u0003",
    "\u0002\u0002\u0002{|\u0007\u0003\u0002\u0002|\u001f\u0003\u0002\u0002",
    "\u0002}~\u0007\'\u0002\u0002~!\u0003\u0002\u0002\u0002\u007f\u0086\u0007",
    "\u0004\u0002\u0002\u0080\u0081\u0007\u0013\u0002\u0002\u0081\u0086\u0007",
    "\u0004\u0002\u0002\u0082\u0083\u0007\u0004\u0002\u0002\u0083\u0084\u0007",
    "\u0013\u0002\u0002\u0084\u0086\u0007\u0004\u0002\u0002\u0085\u007f\u0003",
    "\u0002\u0002\u0002\u0085\u0080\u0003\u0002\u0002\u0002\u0085\u0082\u0003",
    "\u0002\u0002\u0002\u0086#\u0003\u0002\u0002\u0002\n(68Uacq\u0085"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'\\Abs '", "'\\acos '", 
                     "'+'", "'\\->'", "'\\asin '", "'\\atan '", "':'", "','", 
                     "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", 
                     "'='", "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", 
                     "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\<='", 
                     "'\\Locate '", "'\\LpWhile '", "'<'", "'%'", "'*'", 
                     "'\\<>'", "'\\Next'", "'('", "'\\Pi'", "'\\sin '", 
                     "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", 
                     "' \\To '", "'\\While '", "'\\WhileEnd'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ABS", "ACOS", 
                      "ADD", "ARROW", "ASIN", "ATAN", "COLON", "COMMA", 
                      "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQUAL", 
                      "FATARROW", "FOR", "GE", "GETKEY", "GT", "IF", "IFEND", 
                      "INT", "LE", "LOCATE", "LOOPWHILE", "LT", "REMAIN", 
                      "MUL", "NE", "NEXT", "OPAR", "PI", "SIN", "SQRT", 
                      "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND" ];

var ruleNames =  [ "stat", "assignStat", "printStat", "readStat", "implyStat", 
                   "endStat", "boolExpr", "numExpr", "stoExpr", "vectorExpr", 
                   "compOp", "multOp", "addOp", "func", "variable", "constant", 
                   "number" ];

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
StatsParser.ABS = 5;
StatsParser.ACOS = 6;
StatsParser.ADD = 7;
StatsParser.ARROW = 8;
StatsParser.ASIN = 9;
StatsParser.ATAN = 10;
StatsParser.COLON = 11;
StatsParser.COMMA = 12;
StatsParser.COS = 13;
StatsParser.CPAR = 14;
StatsParser.DIV = 15;
StatsParser.DO = 16;
StatsParser.DOT = 17;
StatsParser.ELSE = 18;
StatsParser.EQUAL = 19;
StatsParser.FATARROW = 20;
StatsParser.FOR = 21;
StatsParser.GE = 22;
StatsParser.GETKEY = 23;
StatsParser.GT = 24;
StatsParser.IF = 25;
StatsParser.IFEND = 26;
StatsParser.INT = 27;
StatsParser.LE = 28;
StatsParser.LOCATE = 29;
StatsParser.LOOPWHILE = 30;
StatsParser.LT = 31;
StatsParser.REMAIN = 32;
StatsParser.MUL = 33;
StatsParser.NE = 34;
StatsParser.NEXT = 35;
StatsParser.OPAR = 36;
StatsParser.PI = 37;
StatsParser.SIN = 38;
StatsParser.SQRT = 39;
StatsParser.STEP = 40;
StatsParser.SUB = 41;
StatsParser.TAN = 42;
StatsParser.THEN = 43;
StatsParser.TO = 44;
StatsParser.WHILE = 45;
StatsParser.WHILEEND = 46;

StatsParser.RULE_stat = 0;
StatsParser.RULE_assignStat = 1;
StatsParser.RULE_printStat = 2;
StatsParser.RULE_readStat = 3;
StatsParser.RULE_implyStat = 4;
StatsParser.RULE_endStat = 5;
StatsParser.RULE_boolExpr = 6;
StatsParser.RULE_numExpr = 7;
StatsParser.RULE_stoExpr = 8;
StatsParser.RULE_vectorExpr = 9;
StatsParser.RULE_compOp = 10;
StatsParser.RULE_multOp = 11;
StatsParser.RULE_addOp = 12;
StatsParser.RULE_func = 13;
StatsParser.RULE_variable = 14;
StatsParser.RULE_constant = 15;
StatsParser.RULE_number = 16;

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

StatContext.prototype.implyStat = function() {
    return this.getTypedRuleContext(ImplyStatContext,0);
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
        this.state = 38;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.assignStat();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.printStat();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 36;
            this.readStat();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 37;
            this.implyStat();
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
        this.state = 40;
        this.numExpr(0);
        this.state = 41;
        this.match(StatsParser.ARROW);
        this.state = 42;
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

StatsParser.PrintContext = PrintContext;

PrintContext.prototype.STRING = function() {
    return this.getToken(StatsParser.STRING, 0);
};
PrintContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterPrint(this);
	}
};

PrintContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitPrint(this);
	}
};

PrintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.PrintAtContext = PrintAtContext;

PrintAtContext.prototype.LOCATE = function() {
    return this.getToken(StatsParser.LOCATE, 0);
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
        return this.getTokens(StatsParser.COMMA);
    } else {
        return this.getToken(StatsParser.COMMA, i);
    }
};


PrintAtContext.prototype.STRING = function() {
    return this.getToken(StatsParser.STRING, 0);
};
PrintAtContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterPrintAt(this);
	}
};

PrintAtContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitPrintAt(this);
	}
};

PrintAtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitPrintAt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StatsParser.PrintStatContext = PrintStatContext;

StatsParser.prototype.printStat = function() {

    var localctx = new PrintStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StatsParser.RULE_printStat);
    try {
        this.state = 54;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.match(StatsParser.STRING);
            break;
        case StatsParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 45;
            this.match(StatsParser.LOCATE);
            this.state = 46;
            this.numExpr(0);
            this.state = 47;
            this.match(StatsParser.COMMA);
            this.state = 48;
            this.numExpr(0);
            this.state = 49;
            this.match(StatsParser.COMMA);
            this.state = 52;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case StatsParser.STRING:
                this.state = 50;
                this.match(StatsParser.STRING);
                break;
            case StatsParser.ID:
            case StatsParser.UINT:
            case StatsParser.ABS:
            case StatsParser.ACOS:
            case StatsParser.ASIN:
            case StatsParser.ATAN:
            case StatsParser.COS:
            case StatsParser.DOT:
            case StatsParser.INT:
            case StatsParser.OPAR:
            case StatsParser.PI:
            case StatsParser.SIN:
            case StatsParser.SQRT:
            case StatsParser.SUB:
            case StatsParser.TAN:
                this.state = 51;
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
        this.state = 56;
        this.match(StatsParser.GETKEY);
        this.state = 57;
        this.match(StatsParser.ARROW);
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

function ImplyStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_implyStat;
    return this;
}

ImplyStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImplyStatContext.prototype.constructor = ImplyStatContext;

ImplyStatContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

ImplyStatContext.prototype.FATARROW = function() {
    return this.getToken(StatsParser.FATARROW, 0);
};

ImplyStatContext.prototype.stat = function() {
    return this.getTypedRuleContext(StatContext,0);
};

ImplyStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterImplyStat(this);
	}
};

ImplyStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitImplyStat(this);
	}
};

ImplyStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitImplyStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.ImplyStatContext = ImplyStatContext;

StatsParser.prototype.implyStat = function() {

    var localctx = new ImplyStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StatsParser.RULE_implyStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.boolExpr();
        this.state = 61;
        this.match(StatsParser.FATARROW);
        this.state = 62;
        this.stat();
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
    this.enterRule(localctx, 10, StatsParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
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
    this.enterRule(localctx, 12, StatsParser.RULE_boolExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.numExpr(0);
        this.state = 67;
        this.compOp();
        this.state = 68;
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

function ComputeContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComputeContext.prototype = Object.create(NumExprContext.prototype);
ComputeContext.prototype.constructor = ComputeContext;

StatsParser.ComputeContext = ComputeContext;

ComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

ComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
ComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterCompute(this);
	}
};

ComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitCompute(this);
	}
};

ComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
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


function ParensContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(NumExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

StatsParser.ParensContext = ParensContext;

ParensContext.prototype.OPAR = function() {
    return this.getToken(StatsParser.OPAR, 0);
};

ParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ParensContext.prototype.CPAR = function() {
    return this.getToken(StatsParser.CPAR, 0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitParens(this);
	}
};

ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ScalarMultContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ScalarMultContext.prototype = Object.create(NumExprContext.prototype);
ScalarMultContext.prototype.constructor = ScalarMultContext;

StatsParser.ScalarMultContext = ScalarMultContext;

ScalarMultContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ScalarMultContext.prototype.vectorExpr = function() {
    return this.getTypedRuleContext(VectorExprContext,0);
};
ScalarMultContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterScalarMult(this);
	}
};

ScalarMultContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitScalarMult(this);
	}
};

ScalarMultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitScalarMult(this);
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


function ConstEvaluateContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstEvaluateContext.prototype = Object.create(NumExprContext.prototype);
ConstEvaluateContext.prototype.constructor = ConstEvaluateContext;

StatsParser.ConstEvaluateContext = ConstEvaluateContext;

ConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitConstEvaluate(this);
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
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, StatsParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.OPAR:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 71;
            this.match(StatsParser.OPAR);
            this.state = 72;
            this.numExpr(0);
            this.state = 73;
            this.match(StatsParser.CPAR);
            break;
        case StatsParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 75;
            this.match(StatsParser.SUB);
            this.state = 76;
            this.numExpr(8);
            break;
        case StatsParser.ABS:
        case StatsParser.ACOS:
        case StatsParser.ASIN:
        case StatsParser.ATAN:
        case StatsParser.COS:
        case StatsParser.INT:
        case StatsParser.SIN:
        case StatsParser.SQRT:
        case StatsParser.TAN:
            localctx = new ComputeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 77;
            this.func();
            this.state = 78;
            this.numExpr(7);
            break;
        case StatsParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 80;
            this.variable();
            break;
        case StatsParser.PI:
            localctx = new ConstEvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 81;
            this.constant();
            break;
        case StatsParser.UINT:
        case StatsParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 82;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 97;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 95;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 85;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 86;
                    this.multOp();
                    this.state = 87;
                    this.numExpr(6);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 89;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 90;
                    this.addOp();
                    this.state = 91;
                    this.numExpr(5);
                    break;

                case 3:
                    localctx = new ScalarMultContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 93;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 94;
                    this.vectorExpr();
                    break;

                } 
            }
            this.state = 99;
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
    this.enterRule(localctx, 16, StatsParser.RULE_stoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
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

function VectorExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_vectorExpr;
    return this;
}

VectorExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VectorExprContext.prototype.constructor = VectorExprContext;


 
VectorExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VParensContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VParensContext.prototype = Object.create(VectorExprContext.prototype);
VParensContext.prototype.constructor = VParensContext;

StatsParser.VParensContext = VParensContext;

VParensContext.prototype.OPAR = function() {
    return this.getToken(StatsParser.OPAR, 0);
};

VParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

VParensContext.prototype.CPAR = function() {
    return this.getToken(StatsParser.CPAR, 0);
};
VParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterVParens(this);
	}
};

VParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitVParens(this);
	}
};

VParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitVParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VEvaluateContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VEvaluateContext.prototype = Object.create(VectorExprContext.prototype);
VEvaluateContext.prototype.constructor = VEvaluateContext;

StatsParser.VEvaluateContext = VEvaluateContext;

VEvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterVEvaluate(this);
	}
};

VEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitVEvaluate(this);
	}
};

VEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitVEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VConstEvaluateContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VConstEvaluateContext.prototype = Object.create(VectorExprContext.prototype);
VConstEvaluateContext.prototype.constructor = VConstEvaluateContext;

StatsParser.VConstEvaluateContext = VConstEvaluateContext;

VConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
VConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitVConstEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VComputeContext(parser, ctx) {
	VectorExprContext.call(this, parser);
    VectorExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VComputeContext.prototype = Object.create(VectorExprContext.prototype);
VComputeContext.prototype.constructor = VComputeContext;

StatsParser.VComputeContext = VComputeContext;

VComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

VComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
VComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterVCompute(this);
	}
};

VComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitVCompute(this);
	}
};

VComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitVCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StatsParser.VectorExprContext = VectorExprContext;

StatsParser.prototype.vectorExpr = function() {

    var localctx = new VectorExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, StatsParser.RULE_vectorExpr);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.OPAR:
            localctx = new VParensContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 102;
            this.match(StatsParser.OPAR);
            this.state = 103;
            this.numExpr(0);
            this.state = 104;
            this.match(StatsParser.CPAR);
            break;
        case StatsParser.ABS:
        case StatsParser.ACOS:
        case StatsParser.ASIN:
        case StatsParser.ATAN:
        case StatsParser.COS:
        case StatsParser.INT:
        case StatsParser.SIN:
        case StatsParser.SQRT:
        case StatsParser.TAN:
            localctx = new VComputeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.func();
            this.state = 107;
            this.numExpr(0);
            break;
        case StatsParser.ID:
            localctx = new VEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            this.variable();
            break;
        case StatsParser.PI:
            localctx = new VConstEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 110;
            this.constant();
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
    this.ruleIndex = StatsParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQUAL = function() {
    return this.getToken(StatsParser.EQUAL, 0);
};

CompOpContext.prototype.NE = function() {
    return this.getToken(StatsParser.NE, 0);
};

CompOpContext.prototype.GT = function() {
    return this.getToken(StatsParser.GT, 0);
};

CompOpContext.prototype.GE = function() {
    return this.getToken(StatsParser.GE, 0);
};

CompOpContext.prototype.LT = function() {
    return this.getToken(StatsParser.LT, 0);
};

CompOpContext.prototype.LE = function() {
    return this.getToken(StatsParser.LE, 0);
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
    this.enterRule(localctx, 20, StatsParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (StatsParser.EQUAL - 19)) | (1 << (StatsParser.GE - 19)) | (1 << (StatsParser.GT - 19)) | (1 << (StatsParser.LE - 19)) | (1 << (StatsParser.LT - 19)) | (1 << (StatsParser.NE - 19)))) !== 0))) {
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

MultOpContext.prototype.REMAIN = function() {
    return this.getToken(StatsParser.REMAIN, 0);
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
    this.enterRule(localctx, 22, StatsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        _la = this._input.LA(1);
        if(!(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (StatsParser.DIV - 15)) | (1 << (StatsParser.REMAIN - 15)) | (1 << (StatsParser.MUL - 15)))) !== 0))) {
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
    this.enterRule(localctx, 24, StatsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
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

function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(StatsParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(StatsParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(StatsParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(StatsParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(StatsParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(StatsParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(StatsParser.ATAN, 0);
};

FuncContext.prototype.ABS = function() {
    return this.getToken(StatsParser.ABS, 0);
};

FuncContext.prototype.INT = function() {
    return this.getToken(StatsParser.INT, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.FuncContext = FuncContext;

StatsParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, StatsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StatsParser.ABS) | (1 << StatsParser.ACOS) | (1 << StatsParser.ASIN) | (1 << StatsParser.ATAN) | (1 << StatsParser.COS) | (1 << StatsParser.INT))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (StatsParser.SIN - 38)) | (1 << (StatsParser.SQRT - 38)) | (1 << (StatsParser.TAN - 38)))) !== 0))) {
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
    this.enterRule(localctx, 28, StatsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
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

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(StatsParser.PI, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.ConstantContext = ConstantContext;

StatsParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, StatsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(StatsParser.PI);
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
    this.enterRule(localctx, 32, StatsParser.RULE_number);
    try {
        this.state = 131;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.match(StatsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.match(StatsParser.DOT);
            this.state = 127;
            this.match(StatsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 128;
            this.match(StatsParser.UINT);
            this.state = 129;
            this.match(StatsParser.DOT);
            this.state = 130;
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
	case 7:
			return this.numExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

StatsParser.prototype.numExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.StatsParser = StatsParser;
