// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/DataStructs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DataStructsListener = require('./DataStructsListener').DataStructsListener;
var DataStructsVisitor = require('./DataStructsVisitor').DataStructsVisitor;

var grammarFileName = "DataStructs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013\u0011\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u000f\n\u0003\u0003\u0003\u0002\u0002\u0004",
    "\u0002\u0004\u0002\u0002\u0002\u0010\u0002\u0006\u0003\u0002\u0002\u0002",
    "\u0004\u000e\u0003\u0002\u0002\u0002\u0006\u0007\u0007\u0003\u0002\u0002",
    "\u0007\u0003\u0003\u0002\u0002\u0002\b\u000f\u0007\u0004\u0002\u0002",
    "\t\n\u0007\r\u0002\u0002\n\u000f\u0007\u0004\u0002\u0002\u000b\f\u0007",
    "\u0004\u0002\u0002\f\r\u0007\r\u0002\u0002\r\u000f\u0007\u0004\u0002",
    "\u0002\u000e\b\u0003\u0002\u0002\u0002\u000e\t\u0003\u0002\u0002\u0002",
    "\u000e\u000b\u0003\u0002\u0002\u0002\u000f\u0005\u0003\u0002\u0002\u0002",
    "\u0003\u000e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'+'", "'\\->'", "':'", 
                     "','", "'/'", "'\\Do'", "'.'", "'='", "'\\Getkey'", 
                     "'\\Locate '", "'\\LpWhile '", "'*'", "'-'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ADD", "ARROW", 
                      "COLON", "COMMA", "DIV", "DO", "DOT", "EQUAL", "GETKEY", 
                      "LOCATE", "LOOPWHILE", "MUL", "SUB" ];

var ruleNames =  [ "variable", "number" ];

function DataStructsParser (input) {
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
	get : function() {
		return atn;
	}
});

DataStructsParser.EOF = antlr4.Token.EOF;
DataStructsParser.ID = 1;
DataStructsParser.UINT = 2;
DataStructsParser.STRING = 3;
DataStructsParser.NEWLINE = 4;
DataStructsParser.ADD = 5;
DataStructsParser.ARROW = 6;
DataStructsParser.COLON = 7;
DataStructsParser.COMMA = 8;
DataStructsParser.DIV = 9;
DataStructsParser.DO = 10;
DataStructsParser.DOT = 11;
DataStructsParser.EQUAL = 12;
DataStructsParser.GETKEY = 13;
DataStructsParser.LOCATE = 14;
DataStructsParser.LOOPWHILE = 15;
DataStructsParser.MUL = 16;
DataStructsParser.SUB = 17;

DataStructsParser.RULE_variable = 0;
DataStructsParser.RULE_number = 1;

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DataStructsParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(DataStructsParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.VariableContext = VariableContext;

DataStructsParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DataStructsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.match(DataStructsParser.ID);
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
    this.ruleIndex = DataStructsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DataStructsParser.UINT);
    } else {
        return this.getToken(DataStructsParser.UINT, i);
    }
};


NumberContext.prototype.DOT = function() {
    return this.getToken(DataStructsParser.DOT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof DataStructsListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DataStructsVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DataStructsParser.NumberContext = NumberContext;

DataStructsParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DataStructsParser.RULE_number);
    try {
        this.state = 12;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 6;
            this.match(DataStructsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 7;
            this.match(DataStructsParser.DOT);
            this.state = 8;
            this.match(DataStructsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 9;
            this.match(DataStructsParser.UINT);
            this.state = 10;
            this.match(DataStructsParser.DOT);
            this.state = 11;
            this.match(DataStructsParser.UINT);
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


exports.DataStructsParser = DataStructsParser;
