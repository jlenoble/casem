// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Functions.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FunctionsListener = require('./FunctionsListener').FunctionsListener;
var FunctionsVisitor = require('./FunctionsVisitor').FunctionsVisitor;

var grammarFileName = "Functions.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0002\u0002\u0003\u0003\u0002\u0003\t\u0002\u0005",
    "\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\t\u0002\u0002\u0002",
    "\u0005\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\\sqrt'", "'\\cos '", "'\\sin '", "'\\tan '", 
                     "'\\acos '", "'\\asin '", "'\\atan '" ];

var symbolicNames = [ null, "SQRT", "COS", "SIN", "TAN", "ACOS", "ASIN", 
                      "ATAN" ];

var ruleNames =  [ "func" ];

function FunctionsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FunctionsParser.prototype = Object.create(antlr4.Parser.prototype);
FunctionsParser.prototype.constructor = FunctionsParser;

Object.defineProperty(FunctionsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FunctionsParser.EOF = antlr4.Token.EOF;
FunctionsParser.SQRT = 1;
FunctionsParser.COS = 2;
FunctionsParser.SIN = 3;
FunctionsParser.TAN = 4;
FunctionsParser.ACOS = 5;
FunctionsParser.ASIN = 6;
FunctionsParser.ATAN = 7;

FunctionsParser.RULE_func = 0;

function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FunctionsParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(FunctionsParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(FunctionsParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(FunctionsParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(FunctionsParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(FunctionsParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(FunctionsParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(FunctionsParser.ATAN, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof FunctionsListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof FunctionsListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FunctionsVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FunctionsParser.FuncContext = FuncContext;

FunctionsParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FunctionsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FunctionsParser.SQRT) | (1 << FunctionsParser.COS) | (1 << FunctionsParser.SIN) | (1 << FunctionsParser.TAN) | (1 << FunctionsParser.ACOS) | (1 << FunctionsParser.ASIN) | (1 << FunctionsParser.ATAN))) !== 0))) {
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


exports.FunctionsParser = FunctionsParser;
