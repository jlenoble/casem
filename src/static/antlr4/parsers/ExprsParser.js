// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprsListener = require('./ExprsListener').ExprsListener;
var ExprsVisitor = require('./ExprsVisitor').ExprsVisitor;

var grammarFileName = "Exprs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003<\u00d4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002:",
    "\n\u0002\f\u0002\u000e\u0002=\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003N\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003Z\n\u0003\f\u0003\u000e\u0003]\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004b\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004h\n\u0004\f\u0004\u000e\u0004k\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005p\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005v\n\u0005\f\u0005",
    "\u000e\u0005y\u000b\u0005\u0003\u0006\u0003\u0006\u0005\u0006}\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0006\t\u0085",
    "\n\t\r\t\u000e\t\u0086\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u008f\n\n\f\n\u000e\n\u0092\u000b\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u009a\n\u000b",
    "\f\u000b\u000e\u000b\u009d\u000b\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00b6",
    "\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00d2\n\u0018\u0003",
    "\u0018\u0002\u0006\u0002\u0004\u0006\b\u0019\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.\u0002",
    "\u0007\b\u0002\u0019\u0019\u001c\u001c\u001f\u001f$$((,,\u0004\u0002",
    "\n\n11\u0004\u0002\u0015\u0015*+\u0004\u0002\t\t77\b\u0002\u0007\b\f",
    "\r\u0013\u0013\"\"4588\u0002\u00d4\u00020\u0003\u0002\u0002\u0002\u0004",
    "M\u0003\u0002\u0002\u0002\u0006a\u0003\u0002\u0002\u0002\bo\u0003\u0002",
    "\u0002\u0002\n|\u0003\u0002\u0002\u0002\f~\u0003\u0002\u0002\u0002\u000e",
    "\u0080\u0003\u0002\u0002\u0002\u0010\u0082\u0003\u0002\u0002\u0002\u0012",
    "\u008a\u0003\u0002\u0002\u0002\u0014\u0095\u0003\u0002\u0002\u0002\u0016",
    "\u00a0\u0003\u0002\u0002\u0002\u0018\u00a7\u0003\u0002\u0002\u0002\u001a",
    "\u00b5\u0003\u0002\u0002\u0002\u001c\u00b7\u0003\u0002\u0002\u0002\u001e",
    "\u00b9\u0003\u0002\u0002\u0002 \u00bb\u0003\u0002\u0002\u0002\"\u00bd",
    "\u0003\u0002\u0002\u0002$\u00bf\u0003\u0002\u0002\u0002&\u00c1\u0003",
    "\u0002\u0002\u0002(\u00c4\u0003\u0002\u0002\u0002*\u00c7\u0003\u0002",
    "\u0002\u0002,\u00c9\u0003\u0002\u0002\u0002.\u00d1\u0003\u0002\u0002",
    "\u000201\b\u0002\u0001\u000212\u0005\u0004\u0003\u000223\u0005\u001c",
    "\u000f\u000234\u0005\u0004\u0003\u00024;\u0003\u0002\u0002\u000256\f",
    "\u0003\u0002\u000267\u0005\u001e\u0010\u000278\u0005\u0002\u0002\u0004",
    "8:\u0003\u0002\u0002\u000295\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<\u0003\u0003",
    "\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>?\b\u0003\u0001\u0002?",
    "@\u00070\u0002\u0002@A\u0005\u0004\u0003\u0002AB\u0007\u0014\u0002\u0002",
    "BN\u0003\u0002\u0002\u0002CD\u00077\u0002\u0002DN\u0005\u0004\u0003",
    "\fEF\u0005$\u0013\u0002FG\u0005\u0004\u0003\u000bGN\u0003\u0002\u0002",
    "\u0002HN\u0005\u0016\f\u0002IN\u0005\u0018\r\u0002JN\u0005*\u0016\u0002",
    "KN\u0005,\u0017\u0002LN\u0005.\u0018\u0002M>\u0003\u0002\u0002\u0002",
    "MC\u0003\u0002\u0002\u0002ME\u0003\u0002\u0002\u0002MH\u0003\u0002\u0002",
    "\u0002MI\u0003\u0002\u0002\u0002MJ\u0003\u0002\u0002\u0002MK\u0003\u0002",
    "\u0002\u0002ML\u0003\u0002\u0002\u0002N[\u0003\u0002\u0002\u0002OP\f",
    "\t\u0002\u0002PQ\u0005 \u0011\u0002QR\u0005\u0004\u0003\nRZ\u0003\u0002",
    "\u0002\u0002ST\f\b\u0002\u0002TU\u0005\"\u0012\u0002UV\u0005\u0004\u0003",
    "\tVZ\u0003\u0002\u0002\u0002WX\f\n\u0002\u0002XZ\u0005\u001a\u000e\u0002",
    "YO\u0003\u0002\u0002\u0002YS\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002",
    "\u0002Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003",
    "\u0002\u0002\u0002\\\u0005\u0003\u0002\u0002\u0002][\u0003\u0002\u0002",
    "\u0002^_\b\u0004\u0001\u0002_b\u0005&\u0014\u0002`b\u0005\u0010\t\u0002",
    "a^\u0003\u0002\u0002\u0002a`\u0003\u0002\u0002\u0002bi\u0003\u0002\u0002",
    "\u0002cd\f\u0005\u0002\u0002de\u0005\"\u0012\u0002ef\u0005\u0006\u0004",
    "\u0006fh\u0003\u0002\u0002\u0002gc\u0003\u0002\u0002\u0002hk\u0003\u0002",
    "\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002j\u0007",
    "\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002lm\b\u0005\u0001\u0002",
    "mp\u0005(\u0015\u0002np\u0005\u0012\n\u0002ol\u0003\u0002\u0002\u0002",
    "on\u0003\u0002\u0002\u0002pw\u0003\u0002\u0002\u0002qr\f\u0005\u0002",
    "\u0002rs\u0005\"\u0012\u0002st\u0005\b\u0005\u0006tv\u0003\u0002\u0002",
    "\u0002uq\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002x\t\u0003\u0002\u0002\u0002yw",
    "\u0003\u0002\u0002\u0002z}\u0005\u0016\f\u0002{}\u0005*\u0016\u0002",
    "|z\u0003\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002}\u000b\u0003\u0002",
    "\u0002\u0002~\u007f\u0005&\u0014\u0002\u007f\r\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0005(\u0015\u0002\u0081\u000f\u0003\u0002\u0002\u0002",
    "\u0082\u0084\u0007.\u0002\u0002\u0083\u0085\u0005\u0014\u000b\u0002",
    "\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u000e\u0002\u0002",
    "\u0089\u0011\u0003\u0002\u0002\u0002\u008a\u008b\u0007/\u0002\u0002",
    "\u008b\u0090\u0005\u0004\u0003\u0002\u008c\u008d\u0007\u0012\u0002\u0002",
    "\u008d\u008f\u0005\u0004\u0003\u0002\u008e\u008c\u0003\u0002\u0002\u0002",
    "\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002",
    "\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0093\u0003\u0002\u0002\u0002",
    "\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u0094\u0007\u000f\u0002\u0002",
    "\u0094\u0013\u0003\u0002\u0002\u0002\u0095\u0096\u0007.\u0002\u0002",
    "\u0096\u009b\u0005\u0004\u0003\u0002\u0097\u0098\u0007\u0012\u0002\u0002",
    "\u0098\u009a\u0005\u0004\u0003\u0002\u0099\u0097\u0003\u0002\u0002\u0002",
    "\u009a\u009d\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009e\u0003\u0002\u0002\u0002",
    "\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u009f\u0007\u000e\u0002\u0002",
    "\u009f\u0015\u0003\u0002\u0002\u0002\u00a0\u00a1\u0005&\u0014\u0002",
    "\u00a1\u00a2\u0007.\u0002\u0002\u00a2\u00a3\u0005\u0004\u0003\u0002",
    "\u00a3\u00a4\u0007\u0012\u0002\u0002\u00a4\u00a5\u0005\u0004\u0003\u0002",
    "\u00a5\u00a6\u0007\u000e\u0002\u0002\u00a6\u0017\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0005(\u0015\u0002\u00a8\u00a9\u0007.\u0002\u0002\u00a9",
    "\u00aa\u0005\u0004\u0003\u0002\u00aa\u00ab\u0007\u000e\u0002\u0002\u00ab",
    "\u0019\u0003\u0002\u0002\u0002\u00ac\u00ad\u00070\u0002\u0002\u00ad",
    "\u00ae\u0005\u0004\u0003\u0002\u00ae\u00af\u0007\u0014\u0002\u0002\u00af",
    "\u00b6\u0003\u0002\u0002\u0002\u00b0\u00b1\u0005$\u0013\u0002\u00b1",
    "\u00b2\u0005\u0004\u0003\u0002\u00b2\u00b6\u0003\u0002\u0002\u0002\u00b3",
    "\u00b6\u0005*\u0016\u0002\u00b4\u00b6\u0005,\u0017\u0002\u00b5\u00ac",
    "\u0003\u0002\u0002\u0002\u00b5\u00b0\u0003\u0002\u0002\u0002\u00b5\u00b3",
    "\u0003\u0002\u0002\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b6\u001b",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\t\u0002\u0002\u0002\u00b8\u001d",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\t\u0003\u0002\u0002\u00ba\u001f",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\t\u0004\u0002\u0002\u00bc!\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\t\u0005\u0002\u0002\u00be#\u0003\u0002",
    "\u0002\u0002\u00bf\u00c0\t\u0006\u0002\u0002\u00c0%\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0007)\u0002\u0002\u00c2\u00c3\u0007\u0003\u0002",
    "\u0002\u00c3\'\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007%\u0002\u0002",
    "\u00c5\u00c6\u0007\u0004\u0002\u0002\u00c6)\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0007\u0003\u0002\u0002\u00c8+\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u00072\u0002\u0002\u00ca-\u0003\u0002\u0002\u0002\u00cb",
    "\u00d2\u0007\u0004\u0002\u0002\u00cc\u00cd\u0007\u0017\u0002\u0002\u00cd",
    "\u00d2\u0007\u0004\u0002\u0002\u00ce\u00cf\u0007\u0004\u0002\u0002\u00cf",
    "\u00d0\u0007\u0017\u0002\u0002\u00d0\u00d2\u0007\u0004\u0002\u0002\u00d1",
    "\u00cb\u0003\u0002\u0002\u0002\u00d1\u00cc\u0003\u0002\u0002\u0002\u00d1",
    "\u00ce\u0003\u0002\u0002\u0002\u00d2/\u0003\u0002\u0002\u0002\u0010",
    ";MY[aiow|\u0086\u0090\u009b\u00b5\u00d1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'\\Abs '", "'\\acos '", 
                     "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", 
                     "']'", "'}'", "'\\ClrText'", "':'", "','", "'\\cos '", 
                     "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", "'='", 
                     "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", "'\\Goto'", 
                     "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\Lbl '", 
                     "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", 
                     "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", 
                     "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\Prog '", 
                     "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", 
                     "'\\Then '", "' \\To '", "'\\While '", "'\\WhileEnd'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ABS", "ACOS", 
                      "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", 
                      "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", 
                      "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", 
                      "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", 
                      "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", 
                      "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", 
                      "OR", "PI", "PROG", "SIN", "SQRT", "STEP", "SUB", 
                      "TAN", "THEN", "TO", "WHILE", "WHILEEND" ];

var ruleNames =  [ "boolExpr", "numExpr", "matrixExpr", "listExpr", "stoExpr", 
                   "matrixStoExpr", "listStoExpr", "matrixInitializerExpr", 
                   "listInitializerExpr", "matrixRowExpr", "matrixElementExpr", 
                   "listElementExpr", "vectorExpr", "compOp", "logicOp", 
                   "multOp", "addOp", "func", "matrix", "list", "variable", 
                   "constant", "number" ];

function ExprsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprsParser.prototype = Object.create(antlr4.Parser.prototype);
ExprsParser.prototype.constructor = ExprsParser;

Object.defineProperty(ExprsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprsParser.EOF = antlr4.Token.EOF;
ExprsParser.ID = 1;
ExprsParser.UINT = 2;
ExprsParser.STRING = 3;
ExprsParser.NEWLINE = 4;
ExprsParser.ABS = 5;
ExprsParser.ACOS = 6;
ExprsParser.ADD = 7;
ExprsParser.AND = 8;
ExprsParser.ARROW = 9;
ExprsParser.ASIN = 10;
ExprsParser.ATAN = 11;
ExprsParser.CBRA = 12;
ExprsParser.CCUR = 13;
ExprsParser.CLRTEXT = 14;
ExprsParser.COLON = 15;
ExprsParser.COMMA = 16;
ExprsParser.COS = 17;
ExprsParser.CPAR = 18;
ExprsParser.DIV = 19;
ExprsParser.DO = 20;
ExprsParser.DOT = 21;
ExprsParser.ELSE = 22;
ExprsParser.EQ = 23;
ExprsParser.FATARROW = 24;
ExprsParser.FOR = 25;
ExprsParser.GE = 26;
ExprsParser.GETKEY = 27;
ExprsParser.GOTO = 28;
ExprsParser.GT = 29;
ExprsParser.IF = 30;
ExprsParser.IFEND = 31;
ExprsParser.INT = 32;
ExprsParser.LBL = 33;
ExprsParser.LE = 34;
ExprsParser.LIST = 35;
ExprsParser.LOCATE = 36;
ExprsParser.LOOPWHILE = 37;
ExprsParser.LT = 38;
ExprsParser.MATRIX = 39;
ExprsParser.REMAIN = 40;
ExprsParser.MUL = 41;
ExprsParser.NE = 42;
ExprsParser.NEXT = 43;
ExprsParser.OBRA = 44;
ExprsParser.OCUR = 45;
ExprsParser.OPAR = 46;
ExprsParser.OR = 47;
ExprsParser.PI = 48;
ExprsParser.PROG = 49;
ExprsParser.SIN = 50;
ExprsParser.SQRT = 51;
ExprsParser.STEP = 52;
ExprsParser.SUB = 53;
ExprsParser.TAN = 54;
ExprsParser.THEN = 55;
ExprsParser.TO = 56;
ExprsParser.WHILE = 57;
ExprsParser.WHILEEND = 58;

ExprsParser.RULE_boolExpr = 0;
ExprsParser.RULE_numExpr = 1;
ExprsParser.RULE_matrixExpr = 2;
ExprsParser.RULE_listExpr = 3;
ExprsParser.RULE_stoExpr = 4;
ExprsParser.RULE_matrixStoExpr = 5;
ExprsParser.RULE_listStoExpr = 6;
ExprsParser.RULE_matrixInitializerExpr = 7;
ExprsParser.RULE_listInitializerExpr = 8;
ExprsParser.RULE_matrixRowExpr = 9;
ExprsParser.RULE_matrixElementExpr = 10;
ExprsParser.RULE_listElementExpr = 11;
ExprsParser.RULE_vectorExpr = 12;
ExprsParser.RULE_compOp = 13;
ExprsParser.RULE_logicOp = 14;
ExprsParser.RULE_multOp = 15;
ExprsParser.RULE_addOp = 16;
ExprsParser.RULE_func = 17;
ExprsParser.RULE_matrix = 18;
ExprsParser.RULE_list = 19;
ExprsParser.RULE_variable = 20;
ExprsParser.RULE_constant = 21;
ExprsParser.RULE_number = 22;

function BoolExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_boolExpr;
    return this;
}

BoolExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolExprContext.prototype.constructor = BoolExprContext;


 
BoolExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ReduceBoolExprContext(parser, ctx) {
	BoolExprContext.call(this, parser);
    BoolExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReduceBoolExprContext.prototype = Object.create(BoolExprContext.prototype);
ReduceBoolExprContext.prototype.constructor = ReduceBoolExprContext;

ExprsParser.ReduceBoolExprContext = ReduceBoolExprContext;

ReduceBoolExprContext.prototype.boolExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BoolExprContext);
    } else {
        return this.getTypedRuleContext(BoolExprContext,i);
    }
};

ReduceBoolExprContext.prototype.logicOp = function() {
    return this.getTypedRuleContext(LogicOpContext,0);
};
ReduceBoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterReduceBoolExpr(this);
	}
};

ReduceBoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitReduceBoolExpr(this);
	}
};

ReduceBoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitReduceBoolExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompareContext(parser, ctx) {
	BoolExprContext.call(this, parser);
    BoolExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompareContext.prototype = Object.create(BoolExprContext.prototype);
CompareContext.prototype.constructor = CompareContext;

ExprsParser.CompareContext = CompareContext;

CompareContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

CompareContext.prototype.compOp = function() {
    return this.getTypedRuleContext(CompOpContext,0);
};
CompareContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterCompare(this);
	}
};

CompareContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitCompare(this);
	}
};

CompareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitCompare(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprsParser.prototype.boolExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BoolExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, ExprsParser.RULE_boolExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CompareContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 47;
        this.numExpr(0);
        this.state = 48;
        this.compOp();
        this.state = 49;
        this.numExpr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 57;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ReduceBoolExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_boolExpr);
                this.state = 51;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 52;
                this.logicOp();
                this.state = 53;
                this.boolExpr(2); 
            }
            this.state = 59;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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

function NumExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_numExpr;
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

ExprsParser.ComputeContext = ComputeContext;

ComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

ComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
ComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterCompute(this);
	}
};

ComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitCompute(this);
	}
};

ComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.AddContext = AddContext;

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
    if(listener instanceof ExprsListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitAdd(this);
	}
};

AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.ParensContext = ParensContext;

ParensContext.prototype.OPAR = function() {
    return this.getToken(ExprsParser.OPAR, 0);
};

ParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ParensContext.prototype.CPAR = function() {
    return this.getToken(ExprsParser.CPAR, 0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitParens(this);
	}
};

ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MatrixElementContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MatrixElementContext.prototype = Object.create(NumExprContext.prototype);
MatrixElementContext.prototype.constructor = MatrixElementContext;

ExprsParser.MatrixElementContext = MatrixElementContext;

MatrixElementContext.prototype.matrixElementExpr = function() {
    return this.getTypedRuleContext(MatrixElementExprContext,0);
};
MatrixElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMatrixElement(this);
	}
};

MatrixElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMatrixElement(this);
	}
};

MatrixElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMatrixElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListElementContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListElementContext.prototype = Object.create(NumExprContext.prototype);
ListElementContext.prototype.constructor = ListElementContext;

ExprsParser.ListElementContext = ListElementContext;

ListElementContext.prototype.listElementExpr = function() {
    return this.getTypedRuleContext(ListElementExprContext,0);
};
ListElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterListElement(this);
	}
};

ListElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitListElement(this);
	}
};

ListElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitListElement(this);
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

ExprsParser.ScalarMultContext = ScalarMultContext;

ScalarMultContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ScalarMultContext.prototype.vectorExpr = function() {
    return this.getTypedRuleContext(VectorExprContext,0);
};
ScalarMultContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterScalarMult(this);
	}
};

ScalarMultContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitScalarMult(this);
	}
};

ScalarMultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.NegateContext = NegateContext;

NegateContext.prototype.SUB = function() {
    return this.getToken(ExprsParser.SUB, 0);
};

NegateContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
NegateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterNegate(this);
	}
};

NegateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitNegate(this);
	}
};

NegateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.ConstEvaluateContext = ConstEvaluateContext;

ConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.ParseContext = ParseContext;

ParseContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.MultiplyContext = MultiplyContext;

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
    if(listener instanceof ExprsListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMultiply(this);
	}
};

MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.EvaluateContext = EvaluateContext;

EvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
EvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterEvaluate(this);
	}
};

EvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitEvaluate(this);
	}
};

EvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprsParser.prototype.numExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprsParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.OPAR:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 61;
            this.match(ExprsParser.OPAR);
            this.state = 62;
            this.numExpr(0);
            this.state = 63;
            this.match(ExprsParser.CPAR);
            break;
        case ExprsParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 65;
            this.match(ExprsParser.SUB);
            this.state = 66;
            this.numExpr(10);
            break;
        case ExprsParser.ABS:
        case ExprsParser.ACOS:
        case ExprsParser.ASIN:
        case ExprsParser.ATAN:
        case ExprsParser.COS:
        case ExprsParser.INT:
        case ExprsParser.SIN:
        case ExprsParser.SQRT:
        case ExprsParser.TAN:
            localctx = new ComputeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 67;
            this.func();
            this.state = 68;
            this.numExpr(9);
            break;
        case ExprsParser.MATRIX:
            localctx = new MatrixElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 70;
            this.matrixElementExpr();
            break;
        case ExprsParser.LIST:
            localctx = new ListElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 71;
            this.listElementExpr();
            break;
        case ExprsParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 72;
            this.variable();
            break;
        case ExprsParser.PI:
            localctx = new ConstEvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 73;
            this.constant();
            break;
        case ExprsParser.UINT:
        case ExprsParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 74;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 89;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 87;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 77;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 78;
                    this.multOp();
                    this.state = 79;
                    this.numExpr(8);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 81;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 82;
                    this.addOp();
                    this.state = 83;
                    this.numExpr(7);
                    break;

                case 3:
                    localctx = new ScalarMultContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_numExpr);
                    this.state = 85;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 86;
                    this.vectorExpr();
                    break;

                } 
            }
            this.state = 91;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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

function MatrixExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_matrixExpr;
    return this;
}

MatrixExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixExprContext.prototype.constructor = MatrixExprContext;


 
MatrixExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function EvaluateMatrixContext(parser, ctx) {
	MatrixExprContext.call(this, parser);
    MatrixExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateMatrixContext.prototype = Object.create(MatrixExprContext.prototype);
EvaluateMatrixContext.prototype.constructor = EvaluateMatrixContext;

ExprsParser.EvaluateMatrixContext = EvaluateMatrixContext;

EvaluateMatrixContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};
EvaluateMatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterEvaluateMatrix(this);
	}
};

EvaluateMatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitEvaluateMatrix(this);
	}
};

EvaluateMatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitEvaluateMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateMatrixInitializerExprContext(parser, ctx) {
	MatrixExprContext.call(this, parser);
    MatrixExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateMatrixInitializerExprContext.prototype = Object.create(MatrixExprContext.prototype);
EvaluateMatrixInitializerExprContext.prototype.constructor = EvaluateMatrixInitializerExprContext;

ExprsParser.EvaluateMatrixInitializerExprContext = EvaluateMatrixInitializerExprContext;

EvaluateMatrixInitializerExprContext.prototype.matrixInitializerExpr = function() {
    return this.getTypedRuleContext(MatrixInitializerExprContext,0);
};
EvaluateMatrixInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterEvaluateMatrixInitializerExpr(this);
	}
};

EvaluateMatrixInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitEvaluateMatrixInitializerExpr(this);
	}
};

EvaluateMatrixInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitEvaluateMatrixInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddMatricesContext(parser, ctx) {
	MatrixExprContext.call(this, parser);
    MatrixExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddMatricesContext.prototype = Object.create(MatrixExprContext.prototype);
AddMatricesContext.prototype.constructor = AddMatricesContext;

ExprsParser.AddMatricesContext = AddMatricesContext;

AddMatricesContext.prototype.matrixExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatrixExprContext);
    } else {
        return this.getTypedRuleContext(MatrixExprContext,i);
    }
};

AddMatricesContext.prototype.addOp = function() {
    return this.getTypedRuleContext(AddOpContext,0);
};
AddMatricesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterAddMatrices(this);
	}
};

AddMatricesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitAddMatrices(this);
	}
};

AddMatricesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitAddMatrices(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprsParser.prototype.matrixExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MatrixExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, ExprsParser.RULE_matrixExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.MATRIX:
            localctx = new EvaluateMatrixContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 93;
            this.matrix();
            break;
        case ExprsParser.OBRA:
            localctx = new EvaluateMatrixInitializerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 94;
            this.matrixInitializerExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 103;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddMatricesContext(this, new MatrixExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_matrixExpr);
                this.state = 97;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 98;
                this.addOp();
                this.state = 99;
                this.matrixExpr(4); 
            }
            this.state = 105;
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

function ListExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_listExpr;
    return this;
}

ListExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListExprContext.prototype.constructor = ListExprContext;


 
ListExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AddListsContext(parser, ctx) {
	ListExprContext.call(this, parser);
    ListExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddListsContext.prototype = Object.create(ListExprContext.prototype);
AddListsContext.prototype.constructor = AddListsContext;

ExprsParser.AddListsContext = AddListsContext;

AddListsContext.prototype.listExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ListExprContext);
    } else {
        return this.getTypedRuleContext(ListExprContext,i);
    }
};

AddListsContext.prototype.addOp = function() {
    return this.getTypedRuleContext(AddOpContext,0);
};
AddListsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterAddLists(this);
	}
};

AddListsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitAddLists(this);
	}
};

AddListsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitAddLists(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateListContext(parser, ctx) {
	ListExprContext.call(this, parser);
    ListExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateListContext.prototype = Object.create(ListExprContext.prototype);
EvaluateListContext.prototype.constructor = EvaluateListContext;

ExprsParser.EvaluateListContext = EvaluateListContext;

EvaluateListContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};
EvaluateListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterEvaluateList(this);
	}
};

EvaluateListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitEvaluateList(this);
	}
};

EvaluateListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitEvaluateList(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateListInitializerExprContext(parser, ctx) {
	ListExprContext.call(this, parser);
    ListExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateListInitializerExprContext.prototype = Object.create(ListExprContext.prototype);
EvaluateListInitializerExprContext.prototype.constructor = EvaluateListInitializerExprContext;

ExprsParser.EvaluateListInitializerExprContext = EvaluateListInitializerExprContext;

EvaluateListInitializerExprContext.prototype.listInitializerExpr = function() {
    return this.getTypedRuleContext(ListInitializerExprContext,0);
};
EvaluateListInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterEvaluateListInitializerExpr(this);
	}
};

EvaluateListInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitEvaluateListInitializerExpr(this);
	}
};

EvaluateListInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitEvaluateListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprsParser.prototype.listExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ListExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, ExprsParser.RULE_listExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.LIST:
            localctx = new EvaluateListContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 107;
            this.list();
            break;
        case ExprsParser.OCUR:
            localctx = new EvaluateListInitializerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 108;
            this.listInitializerExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 117;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddListsContext(this, new ListExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, ExprsParser.RULE_listExpr);
                this.state = 111;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 112;
                this.addOp();
                this.state = 113;
                this.listExpr(4); 
            }
            this.state = 119;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
    this.ruleIndex = ExprsParser.RULE_stoExpr;
    return this;
}

StoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoExprContext.prototype.constructor = StoExprContext;

StoExprContext.prototype.matrixElementExpr = function() {
    return this.getTypedRuleContext(MatrixElementExprContext,0);
};

StoExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterStoExpr(this);
	}
};

StoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitStoExpr(this);
	}
};

StoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.StoExprContext = StoExprContext;

ExprsParser.prototype.stoExpr = function() {

    var localctx = new StoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprsParser.RULE_stoExpr);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.MATRIX:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.matrixElementExpr();
            break;
        case ExprsParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.variable();
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

function MatrixStoExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_matrixStoExpr;
    return this;
}

MatrixStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixStoExprContext.prototype.constructor = MatrixStoExprContext;

MatrixStoExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

MatrixStoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMatrixStoExpr(this);
	}
};

MatrixStoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMatrixStoExpr(this);
	}
};

MatrixStoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMatrixStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.MatrixStoExprContext = MatrixStoExprContext;

ExprsParser.prototype.matrixStoExpr = function() {

    var localctx = new MatrixStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ExprsParser.RULE_matrixStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.matrix();
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

function ListStoExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_listStoExpr;
    return this;
}

ListStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListStoExprContext.prototype.constructor = ListStoExprContext;

ListStoExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListStoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterListStoExpr(this);
	}
};

ListStoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitListStoExpr(this);
	}
};

ListStoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitListStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.ListStoExprContext = ListStoExprContext;

ExprsParser.prototype.listStoExpr = function() {

    var localctx = new ListStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ExprsParser.RULE_listStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.list();
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

function MatrixInitializerExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_matrixInitializerExpr;
    return this;
}

MatrixInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixInitializerExprContext.prototype.constructor = MatrixInitializerExprContext;

MatrixInitializerExprContext.prototype.OBRA = function() {
    return this.getToken(ExprsParser.OBRA, 0);
};

MatrixInitializerExprContext.prototype.CBRA = function() {
    return this.getToken(ExprsParser.CBRA, 0);
};

MatrixInitializerExprContext.prototype.matrixRowExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatrixRowExprContext);
    } else {
        return this.getTypedRuleContext(MatrixRowExprContext,i);
    }
};

MatrixInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMatrixInitializerExpr(this);
	}
};

MatrixInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMatrixInitializerExpr(this);
	}
};

MatrixInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMatrixInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.MatrixInitializerExprContext = MatrixInitializerExprContext;

ExprsParser.prototype.matrixInitializerExpr = function() {

    var localctx = new MatrixInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ExprsParser.RULE_matrixInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(ExprsParser.OBRA);
        this.state = 130; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 129;
            this.matrixRowExpr();
            this.state = 132; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ExprsParser.OBRA);
        this.state = 134;
        this.match(ExprsParser.CBRA);
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

function ListInitializerExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_listInitializerExpr;
    return this;
}

ListInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListInitializerExprContext.prototype.constructor = ListInitializerExprContext;

ListInitializerExprContext.prototype.OCUR = function() {
    return this.getToken(ExprsParser.OCUR, 0);
};

ListInitializerExprContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

ListInitializerExprContext.prototype.CCUR = function() {
    return this.getToken(ExprsParser.CCUR, 0);
};

ListInitializerExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ExprsParser.COMMA);
    } else {
        return this.getToken(ExprsParser.COMMA, i);
    }
};


ListInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterListInitializerExpr(this);
	}
};

ListInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitListInitializerExpr(this);
	}
};

ListInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.ListInitializerExprContext = ListInitializerExprContext;

ExprsParser.prototype.listInitializerExpr = function() {

    var localctx = new ListInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ExprsParser.RULE_listInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(ExprsParser.OCUR);
        this.state = 137;
        this.numExpr(0);
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprsParser.COMMA) {
            this.state = 138;
            this.match(ExprsParser.COMMA);
            this.state = 139;
            this.numExpr(0);
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 145;
        this.match(ExprsParser.CCUR);
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

function MatrixRowExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_matrixRowExpr;
    return this;
}

MatrixRowExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixRowExprContext.prototype.constructor = MatrixRowExprContext;

MatrixRowExprContext.prototype.OBRA = function() {
    return this.getToken(ExprsParser.OBRA, 0);
};

MatrixRowExprContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

MatrixRowExprContext.prototype.CBRA = function() {
    return this.getToken(ExprsParser.CBRA, 0);
};

MatrixRowExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ExprsParser.COMMA);
    } else {
        return this.getToken(ExprsParser.COMMA, i);
    }
};


MatrixRowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMatrixRowExpr(this);
	}
};

MatrixRowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMatrixRowExpr(this);
	}
};

MatrixRowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMatrixRowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.MatrixRowExprContext = MatrixRowExprContext;

ExprsParser.prototype.matrixRowExpr = function() {

    var localctx = new MatrixRowExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ExprsParser.RULE_matrixRowExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(ExprsParser.OBRA);
        this.state = 148;
        this.numExpr(0);
        this.state = 153;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprsParser.COMMA) {
            this.state = 149;
            this.match(ExprsParser.COMMA);
            this.state = 150;
            this.numExpr(0);
            this.state = 155;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 156;
        this.match(ExprsParser.CBRA);
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

function MatrixElementExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_matrixElementExpr;
    return this;
}

MatrixElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixElementExprContext.prototype.constructor = MatrixElementExprContext;

MatrixElementExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

MatrixElementExprContext.prototype.OBRA = function() {
    return this.getToken(ExprsParser.OBRA, 0);
};

MatrixElementExprContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

MatrixElementExprContext.prototype.COMMA = function() {
    return this.getToken(ExprsParser.COMMA, 0);
};

MatrixElementExprContext.prototype.CBRA = function() {
    return this.getToken(ExprsParser.CBRA, 0);
};

MatrixElementExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMatrixElementExpr(this);
	}
};

MatrixElementExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMatrixElementExpr(this);
	}
};

MatrixElementExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMatrixElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.MatrixElementExprContext = MatrixElementExprContext;

ExprsParser.prototype.matrixElementExpr = function() {

    var localctx = new MatrixElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ExprsParser.RULE_matrixElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.matrix();
        this.state = 159;
        this.match(ExprsParser.OBRA);
        this.state = 160;
        this.numExpr(0);
        this.state = 161;
        this.match(ExprsParser.COMMA);
        this.state = 162;
        this.numExpr(0);
        this.state = 163;
        this.match(ExprsParser.CBRA);
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

function ListElementExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_listElementExpr;
    return this;
}

ListElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListElementExprContext.prototype.constructor = ListElementExprContext;

ListElementExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListElementExprContext.prototype.OBRA = function() {
    return this.getToken(ExprsParser.OBRA, 0);
};

ListElementExprContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ListElementExprContext.prototype.CBRA = function() {
    return this.getToken(ExprsParser.CBRA, 0);
};

ListElementExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterListElementExpr(this);
	}
};

ListElementExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitListElementExpr(this);
	}
};

ListElementExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitListElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.ListElementExprContext = ListElementExprContext;

ExprsParser.prototype.listElementExpr = function() {

    var localctx = new ListElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ExprsParser.RULE_listElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.list();
        this.state = 166;
        this.match(ExprsParser.OBRA);
        this.state = 167;
        this.numExpr(0);
        this.state = 168;
        this.match(ExprsParser.CBRA);
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
    this.ruleIndex = ExprsParser.RULE_vectorExpr;
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

ExprsParser.VParensContext = VParensContext;

VParensContext.prototype.OPAR = function() {
    return this.getToken(ExprsParser.OPAR, 0);
};

VParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

VParensContext.prototype.CPAR = function() {
    return this.getToken(ExprsParser.CPAR, 0);
};
VParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVParens(this);
	}
};

VParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVParens(this);
	}
};

VParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.VEvaluateContext = VEvaluateContext;

VEvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVEvaluate(this);
	}
};

VEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVEvaluate(this);
	}
};

VEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.VConstEvaluateContext = VConstEvaluateContext;

VConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
VConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
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

ExprsParser.VComputeContext = VComputeContext;

VComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

VComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
VComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVCompute(this);
	}
};

VComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVCompute(this);
	}
};

VComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitVCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprsParser.VectorExprContext = VectorExprContext;

ExprsParser.prototype.vectorExpr = function() {

    var localctx = new VectorExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ExprsParser.RULE_vectorExpr);
    try {
        this.state = 179;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprsParser.OPAR:
            localctx = new VParensContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.match(ExprsParser.OPAR);
            this.state = 171;
            this.numExpr(0);
            this.state = 172;
            this.match(ExprsParser.CPAR);
            break;
        case ExprsParser.ABS:
        case ExprsParser.ACOS:
        case ExprsParser.ASIN:
        case ExprsParser.ATAN:
        case ExprsParser.COS:
        case ExprsParser.INT:
        case ExprsParser.SIN:
        case ExprsParser.SQRT:
        case ExprsParser.TAN:
            localctx = new VComputeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 174;
            this.func();
            this.state = 175;
            this.numExpr(0);
            break;
        case ExprsParser.ID:
            localctx = new VEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 177;
            this.variable();
            break;
        case ExprsParser.PI:
            localctx = new VConstEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 178;
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
    this.ruleIndex = ExprsParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQ = function() {
    return this.getToken(ExprsParser.EQ, 0);
};

CompOpContext.prototype.NE = function() {
    return this.getToken(ExprsParser.NE, 0);
};

CompOpContext.prototype.GT = function() {
    return this.getToken(ExprsParser.GT, 0);
};

CompOpContext.prototype.GE = function() {
    return this.getToken(ExprsParser.GE, 0);
};

CompOpContext.prototype.LT = function() {
    return this.getToken(ExprsParser.LT, 0);
};

CompOpContext.prototype.LE = function() {
    return this.getToken(ExprsParser.LE, 0);
};

CompOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterCompOp(this);
	}
};

CompOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitCompOp(this);
	}
};

CompOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.CompOpContext = CompOpContext;

ExprsParser.prototype.compOp = function() {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ExprsParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        _la = this._input.LA(1);
        if(!(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (ExprsParser.EQ - 23)) | (1 << (ExprsParser.GE - 23)) | (1 << (ExprsParser.GT - 23)) | (1 << (ExprsParser.LE - 23)) | (1 << (ExprsParser.LT - 23)) | (1 << (ExprsParser.NE - 23)))) !== 0))) {
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

function LogicOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_logicOp;
    return this;
}

LogicOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicOpContext.prototype.constructor = LogicOpContext;

LogicOpContext.prototype.AND = function() {
    return this.getToken(ExprsParser.AND, 0);
};

LogicOpContext.prototype.OR = function() {
    return this.getToken(ExprsParser.OR, 0);
};

LogicOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterLogicOp(this);
	}
};

LogicOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitLogicOp(this);
	}
};

LogicOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitLogicOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.LogicOpContext = LogicOpContext;

ExprsParser.prototype.logicOp = function() {

    var localctx = new LogicOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ExprsParser.RULE_logicOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        _la = this._input.LA(1);
        if(!(_la===ExprsParser.AND || _la===ExprsParser.OR)) {
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
    this.ruleIndex = ExprsParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function() {
    return this.getToken(ExprsParser.MUL, 0);
};

MultOpContext.prototype.DIV = function() {
    return this.getToken(ExprsParser.DIV, 0);
};

MultOpContext.prototype.REMAIN = function() {
    return this.getToken(ExprsParser.REMAIN, 0);
};

MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMultOp(this);
	}
};

MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.MultOpContext = MultOpContext;

ExprsParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ExprsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (ExprsParser.DIV - 19)) | (1 << (ExprsParser.REMAIN - 19)) | (1 << (ExprsParser.MUL - 19)))) !== 0))) {
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
    this.ruleIndex = ExprsParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function() {
    return this.getToken(ExprsParser.ADD, 0);
};

AddOpContext.prototype.SUB = function() {
    return this.getToken(ExprsParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitAddOp(this);
	}
};

AddOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.AddOpContext = AddOpContext;

ExprsParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ExprsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        _la = this._input.LA(1);
        if(!(_la===ExprsParser.ADD || _la===ExprsParser.SUB)) {
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
    this.ruleIndex = ExprsParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(ExprsParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(ExprsParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(ExprsParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(ExprsParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(ExprsParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(ExprsParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(ExprsParser.ATAN, 0);
};

FuncContext.prototype.ABS = function() {
    return this.getToken(ExprsParser.ABS, 0);
};

FuncContext.prototype.INT = function() {
    return this.getToken(ExprsParser.INT, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.FuncContext = FuncContext;

ExprsParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ExprsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprsParser.ABS) | (1 << ExprsParser.ACOS) | (1 << ExprsParser.ASIN) | (1 << ExprsParser.ATAN) | (1 << ExprsParser.COS))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ExprsParser.INT - 32)) | (1 << (ExprsParser.SIN - 32)) | (1 << (ExprsParser.SQRT - 32)) | (1 << (ExprsParser.TAN - 32)))) !== 0))) {
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

function MatrixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function() {
    return this.getToken(ExprsParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function() {
    return this.getToken(ExprsParser.ID, 0);
};

MatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterMatrix(this);
	}
};

MatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitMatrix(this);
	}
};

MatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.MatrixContext = MatrixContext;

ExprsParser.prototype.matrix = function() {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ExprsParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(ExprsParser.MATRIX);
        this.state = 192;
        this.match(ExprsParser.ID);
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

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprsParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function() {
    return this.getToken(ExprsParser.LIST, 0);
};

ListContext.prototype.UINT = function() {
    return this.getToken(ExprsParser.UINT, 0);
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.ListContext = ListContext;

ExprsParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ExprsParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(ExprsParser.LIST);
        this.state = 195;
        this.match(ExprsParser.UINT);
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
    this.ruleIndex = ExprsParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(ExprsParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.VariableContext = VariableContext;

ExprsParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ExprsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(ExprsParser.ID);
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
    this.ruleIndex = ExprsParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(ExprsParser.PI, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.ConstantContext = ConstantContext;

ExprsParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ExprsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(ExprsParser.PI);
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
    this.ruleIndex = ExprsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ExprsParser.UINT);
    } else {
        return this.getToken(ExprsParser.UINT, i);
    }
};


NumberContext.prototype.DOT = function() {
    return this.getToken(ExprsParser.DOT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprsListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprsVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprsParser.NumberContext = NumberContext;

ExprsParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ExprsParser.RULE_number);
    try {
        this.state = 207;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 201;
            this.match(ExprsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 202;
            this.match(ExprsParser.DOT);
            this.state = 203;
            this.match(ExprsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 204;
            this.match(ExprsParser.UINT);
            this.state = 205;
            this.match(ExprsParser.DOT);
            this.state = 206;
            this.match(ExprsParser.UINT);
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


ExprsParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.boolExpr_sempred(localctx, predIndex);
	case 1:
			return this.numExpr_sempred(localctx, predIndex);
	case 2:
			return this.matrixExpr_sempred(localctx, predIndex);
	case 3:
			return this.listExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprsParser.prototype.boolExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ExprsParser.prototype.numExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 8);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ExprsParser.prototype.matrixExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ExprsParser.prototype.listExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprsParser = ExprsParser;
