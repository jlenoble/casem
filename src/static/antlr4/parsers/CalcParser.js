// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003R\u0207\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0003\u0002\u0007\u0002^\n\u0002\f\u0002\u000e",
    "\u0002a\u000b\u0002\u0003\u0002\u0005\u0002d\n\u0002\u0003\u0002\u0006",
    "\u0002g\n\u0002\r\u0002\u000e\u0002h\u0005\u0002k\n\u0002\u0003\u0003",
    "\u0003\u0003\u0007\u0003o\n\u0003\f\u0003\u000e\u0003r\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0006\u0004\u0082\n\u0004\r\u0004\u000e\u0004\u0083",
    "\u0006\u0004\u0086\n\u0004\r\u0004\u000e\u0004\u0087\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005\u009a\n\u0005\f\u0005\u000e",
    "\u0005\u009d\u000b\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u00a1\n",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u00af\n\u0007\u0003\u0007\u0005\u0007\u00b2\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00b8\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00c1\n\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u00e1\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00ea\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0106\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0006\u0011\u0122\n\u0011\r\u0011\u000e\u0011",
    "\u0123\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u012a",
    "\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u013a\n\u0011\f\u0011",
    "\u000e\u0011\u013d\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u0142\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u0149\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u0154\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0007\u0014\u015a\n\u0014\f\u0014\u000e\u0014\u015d\u000b",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0006\u0016\u0169",
    "\n\u0016\r\u0016\u000e\u0016\u016a\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0173\n\u0017\f\u0017",
    "\u000e\u0017\u0176\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0184\n\u0019\f\u0019\u000e",
    "\u0019\u0187\u000b\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0006\u001b\u0199\n\u001b\r\u001b\u000e\u001b\u019a\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u01a3",
    "\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d",
    "\u01a9\n\u001d\u0003\u001e\u0003\u001e\u0006\u001e\u01ad\n\u001e\r\u001e",
    "\u000e\u001e\u01ae\u0003\u001e\u0003\u001e\u0006\u001e\u01b3\n\u001e",
    "\r\u001e\u000e\u001e\u01b4\u0003\u001e\u0005\u001e\u01b8\n\u001e\u0007",
    "\u001e\u01ba\n\u001e\f\u001e\u000e\u001e\u01bd\u000b\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0006!\u01c7",
    "\n!\r!\u000e!\u01c8\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003",
    "$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0007",
    "&\u01db\n&\f&\u000e&\u01de\u000b&\u0003&\u0005&\u01e1\n&\u0003&\u0003",
    "&\u0003&\u0007&\u01e6\n&\f&\u000e&\u01e9\u000b&\u0003&\u0007&\u01ec",
    "\n&\f&\u000e&\u01ef\u000b&\u0003\'\u0006\'\u01f2\n\'\r\'\u000e\'\u01f3",
    "\u0003\'\u0005\'\u01f7\n\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003",
    "*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003.\u0002",
    "\u0006 &:J/\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\u0002\u000b\u0004",
    "\u0002\u0013\u0013\u0018\u0018\u0004\u0002\u0012\u0014\u0018\u0018\u0003",
    "\u0002\"#\u0004\u0002\u0012\u001211\u0003\u0002\u0012\u0013\u0003\u0002",
    "\u0019!\u0003\u0002$%\u0003\u0002\',\u0003\u0002-.\u0002\u022e\u0002",
    "j\u0003\u0002\u0002\u0002\u0004l\u0003\u0002\u0002\u0002\u0006\u0085",
    "\u0003\u0002\u0002\u0002\b\u00a0\u0003\u0002\u0002\u0002\n\u00a2\u0003",
    "\u0002\u0002\u0002\f\u00b1\u0003\u0002\u0002\u0002\u000e\u00b7\u0003",
    "\u0002\u0002\u0002\u0010\u00c0\u0003\u0002\u0002\u0002\u0012\u00e0\u0003",
    "\u0002\u0002\u0002\u0014\u00e2\u0003\u0002\u0002\u0002\u0016\u00ed\u0003",
    "\u0002\u0002\u0002\u0018\u00f5\u0003\u0002\u0002\u0002\u001a\u00fb\u0003",
    "\u0002\u0002\u0002\u001c\u0105\u0003\u0002\u0002\u0002\u001e\u0107\u0003",
    "\u0002\u0002\u0002 \u0129\u0003\u0002\u0002\u0002\"\u0141\u0003\u0002",
    "\u0002\u0002$\u0148\u0003\u0002\u0002\u0002&\u0153\u0003\u0002\u0002",
    "\u0002(\u015e\u0003\u0002\u0002\u0002*\u0166\u0003\u0002\u0002\u0002",
    ",\u016e\u0003\u0002\u0002\u0002.\u0179\u0003\u0002\u0002\u00020\u017f",
    "\u0003\u0002\u0002\u00022\u018a\u0003\u0002\u0002\u00024\u0198\u0003",
    "\u0002\u0002\u00026\u01a2\u0003\u0002\u0002\u00028\u01a8\u0003\u0002",
    "\u0002\u0002:\u01aa\u0003\u0002\u0002\u0002<\u01be\u0003\u0002\u0002",
    "\u0002>\u01c1\u0003\u0002\u0002\u0002@\u01c4\u0003\u0002\u0002\u0002",
    "B\u01ca\u0003\u0002\u0002\u0002D\u01cd\u0003\u0002\u0002\u0002F\u01d0",
    "\u0003\u0002\u0002\u0002H\u01d2\u0003\u0002\u0002\u0002J\u01e0\u0003",
    "\u0002\u0002\u0002L\u01f6\u0003\u0002\u0002\u0002N\u01f8\u0003\u0002",
    "\u0002\u0002P\u01fa\u0003\u0002\u0002\u0002R\u01fc\u0003\u0002\u0002",
    "\u0002T\u01fe\u0003\u0002\u0002\u0002V\u0200\u0003\u0002\u0002\u0002",
    "X\u0202\u0003\u0002\u0002\u0002Z\u0204\u0003\u0002\u0002\u0002\\^\u0005",
    "\u0006\u0004\u0002]\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002",
    "_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`k\u0003\u0002\u0002",
    "\u0002a_\u0003\u0002\u0002\u0002bd\u0005\u0006\u0004\u0002cb\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002df\u0003\u0002\u0002\u0002eg\u0005",
    "\u0004\u0003\u0002fe\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002",
    "hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ik\u0003\u0002\u0002",
    "\u0002j_\u0003\u0002\u0002\u0002jc\u0003\u0002\u0002\u0002k\u0003\u0003",
    "\u0002\u0002\u0002lp\u00052\u001a\u0002mo\u0005\u0006\u0004\u0002nm",
    "\u0003\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002",
    "\u0002pq\u0003\u0002\u0002\u0002qs\u0003\u0002\u0002\u0002rp\u0003\u0002",
    "\u0002\u0002st\u0005@!\u0002t\u0005\u0003\u0002\u0002\u0002uv\u0005",
    "\b\u0005\u0002vw\u0005L\'\u0002w\u0086\u0003\u0002\u0002\u0002xy\u0005",
    "\"\u0012\u0002yz\u00076\u0002\u0002z\u0086\u0003\u0002\u0002\u0002{",
    "|\u0005&\u0014\u0002|}\u00070\u0002\u0002}~\u0005\"\u0012\u0002~\u007f",
    "\u00076\u0002\u0002\u007f\u0086\u0003\u0002\u0002\u0002\u0080\u0082",
    "\u0007\u0016\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u0083",
    "\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0003\u0002\u0002\u0002\u0084\u0086\u0003\u0002\u0002\u0002\u0085u",
    "\u0003\u0002\u0002\u0002\u0085x\u0003\u0002\u0002\u0002\u0085{\u0003",
    "\u0002\u0002\u0002\u0085\u0081\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003",
    "\u0002\u0002\u0002\u0088\u0007\u0003\u0002\u0002\u0002\u0089\u00a1\u0005",
    "\n\u0006\u0002\u008a\u00a1\u0005\f\u0007\u0002\u008b\u00a1\u0005\u000e",
    "\b\u0002\u008c\u00a1\u0005\u0010\t\u0002\u008d\u00a1\u0005\u0012\n\u0002",
    "\u008e\u00a1\u0005\u0014\u000b\u0002\u008f\u00a1\u0005\u0016\f\u0002",
    "\u0090\u00a1\u0005\u0018\r\u0002\u0091\u00a1\u0005\u001a\u000e\u0002",
    "\u0092\u00a1\u0005\u001c\u000f\u0002\u0093\u00a1\u0005\u001e\u0010\u0002",
    "\u0094\u0095\u0007D\u0002\u0002\u0095\u0096\u0007\u0003\u0002\u0002",
    "\u0096\u009b\u0005D#\u0002\u0097\u0098\u0007\u0004\u0002\u0002\u0098",
    "\u009a\u0005D#\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009d",
    "\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u009e\u0003\u0002\u0002\u0002\u009d\u009b",
    "\u0003\u0002\u0002\u0002\u009e\u009f\u0007\u0005\u0002\u0002\u009f\u00a1",
    "\u0003\u0002\u0002\u0002\u00a0\u0089\u0003\u0002\u0002\u0002\u00a0\u008a",
    "\u0003\u0002\u0002\u0002\u00a0\u008b\u0003\u0002\u0002\u0002\u00a0\u008c",
    "\u0003\u0002\u0002\u0002\u00a0\u008d\u0003\u0002\u0002\u0002\u00a0\u008e",
    "\u0003\u0002\u0002\u0002\u00a0\u008f\u0003\u0002\u0002\u0002\u00a0\u0090",
    "\u0003\u0002\u0002\u0002\u00a0\u0091\u0003\u0002\u0002\u0002\u00a0\u0092",
    "\u0003\u0002\u0002\u0002\u00a0\u0093\u0003\u0002\u0002\u0002\u00a0\u0094",
    "\u0003\u0002\u0002\u0002\u00a1\t\u0003\u0002\u0002\u0002\u00a2\u00a3",
    "\u0005 \u0011\u0002\u00a3\u00a4\u0007/\u0002\u0002\u00a4\u00a5\u0005",
    "$\u0013\u0002\u00a5\u000b\u0003\u0002\u0002\u0002\u00a6\u00b2\u0007",
    "\u0017\u0002\u0002\u00a7\u00a8\u0007E\u0002\u0002\u00a8\u00a9\u0005",
    " \u0011\u0002\u00a9\u00aa\u0007\u0004\u0002\u0002\u00aa\u00ab\u0005",
    " \u0011\u0002\u00ab\u00ae\u0007\u0004\u0002\u0002\u00ac\u00af\u0005",
    " \u0011\u0002\u00ad\u00af\u0007\u0017\u0002\u0002\u00ae\u00ac\u0003",
    "\u0002\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b2\u0003",
    "\u0002\u0002\u0002\u00b0\u00b2\u00075\u0002\u0002\u00b1\u00a6\u0003",
    "\u0002\u0002\u0002\u00b1\u00a7\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003",
    "\u0002\u0002\u0002\u00b2\r\u0003\u0002\u0002\u0002\u00b3\u00b8\u0007",
    "I\u0002\u0002\u00b4\u00b5\u0007:\u0002\u0002\u00b5\u00b8\t\u0002\u0002",
    "\u0002\u00b6\u00b8\u0007>\u0002\u0002\u00b7\u00b3\u0003\u0002\u0002",
    "\u0002\u00b7\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002",
    "\u0002\u00b8\u000f\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007\u0017\u0002",
    "\u0002\u00ba\u00bb\u0007\u0006\u0002\u0002\u00bb\u00bc\u0007/\u0002",
    "\u0002\u00bc\u00c1\u0005$\u0013\u0002\u00bd\u00be\u0007=\u0002\u0002",
    "\u00be\u00bf\u0007/\u0002\u0002\u00bf\u00c1\u0007\u0012\u0002\u0002",
    "\u00c0\u00b9\u0003\u0002\u0002\u0002\u00c0\u00bd\u0003\u0002\u0002\u0002",
    "\u00c1\u0011\u0003\u0002\u0002\u0002\u00c2\u00e1\u00072\u0002\u0002",
    "\u00c3\u00e1\u00073\u0002\u0002\u00c4\u00e1\u00074\u0002\u0002\u00c5",
    "\u00c6\u0007R\u0002\u0002\u00c6\u00c7\u0005 \u0011\u0002\u00c7\u00c8",
    "\u0007\u0004\u0002\u0002\u00c8\u00c9\u0005 \u0011\u0002\u00c9\u00ca",
    "\u0007\u0004\u0002\u0002\u00ca\u00cb\u0005 \u0011\u0002\u00cb\u00cc",
    "\u0007\u0004\u0002\u0002\u00cc\u00cd\u0005 \u0011\u0002\u00cd\u00ce",
    "\u0007\u0004\u0002\u0002\u00ce\u00cf\u0005 \u0011\u0002\u00cf\u00d0",
    "\u0007\u0004\u0002\u0002\u00d0\u00d1\u0005 \u0011\u0002\u00d1\u00e1",
    "\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007;\u0002\u0002\u00d3\u00d4",
    "\u0005 \u0011\u0002\u00d4\u00d5\u0007\u0004\u0002\u0002\u00d5\u00d6",
    "\u0005 \u0011\u0002\u00d6\u00d7\u0007\u0004\u0002\u0002\u00d7\u00d8",
    "\u0005 \u0011\u0002\u00d8\u00d9\u0007\u0004\u0002\u0002\u00d9\u00da",
    "\u0005 \u0011\u0002\u00da\u00e1\u0003\u0002\u0002\u0002\u00db\u00dc",
    "\u0007K\u0002\u0002\u00dc\u00dd\u0005 \u0011\u0002\u00dd\u00de\u0007",
    "\u0004\u0002\u0002\u00de\u00df\u0005 \u0011\u0002\u00df\u00e1\u0003",
    "\u0002\u0002\u0002\u00e0\u00c2\u0003\u0002\u0002\u0002\u00e0\u00c3\u0003",
    "\u0002\u0002\u0002\u00e0\u00c4\u0003\u0002\u0002\u0002\u00e0\u00c5\u0003",
    "\u0002\u0002\u0002\u00e0\u00d2\u0003\u0002\u0002\u0002\u00e0\u00db\u0003",
    "\u0002\u0002\u0002\u00e1\u0013\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007",
    "@\u0002\u0002\u00e3\u00e4\u0005&\u0014\u0002\u00e4\u00e5\u0005L\'\u0002",
    "\u00e5\u00e6\u0007P\u0002\u0002\u00e6\u00e9\u0005\u0006\u0004\u0002",
    "\u00e7\u00e8\u00078\u0002\u0002\u00e8\u00ea\u0005\u0006\u0004\u0002",
    "\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007A\u0002\u0002",
    "\u00ec\u0015\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007<\u0002\u0002",
    "\u00ee\u00ef\u0005\n\u0006\u0002\u00ef\u00f0\u0007Q\u0002\u0002\u00f0",
    "\u00f1\u0005 \u0011\u0002\u00f1\u00f2\u0005L\'\u0002\u00f2\u00f3\u0005",
    "\u0006\u0004\u0002\u00f3\u00f4\u0007H\u0002\u0002\u00f4\u0017\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u00077\u0002\u0002\u00f6\u00f7\u0005",
    "L\'\u0002\u00f7\u00f8\u0005\u0006\u0004\u0002\u00f8\u00f9\u0007F\u0002",
    "\u0002\u00f9\u00fa\u0005&\u0014\u0002\u00fa\u0019\u0003\u0002\u0002",
    "\u0002\u00fb\u00fc\u0005&\u0014\u0002\u00fc\u00fd\u00070\u0002\u0002",
    "\u00fd\u00fe\u0005\b\u0005\u0002\u00fe\u001b\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0007?\u0002\u0002\u0100\u0106\u0005H%\u0002\u0101\u0102",
    "\u0007L\u0002\u0002\u0102\u0106\u0007\u0017\u0002\u0002\u0103\u0106",
    "\u0005N(\u0002\u0104\u0106\u0007O\u0002\u0002\u0105\u00ff\u0003\u0002",
    "\u0002\u0002\u0105\u0101\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002",
    "\u0002\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0106\u001d\u0003\u0002",
    "\u0002\u0002\u0107\u0108\u0007B\u0002\u0002\u0108\u0109\u0005H%\u0002",
    "\u0109\u001f\u0003\u0002\u0002\u0002\u010a\u010b\b\u0011\u0001\u0002",
    "\u010b\u010c\u0007\u0003\u0002\u0002\u010c\u010d\u0005 \u0011\u0002",
    "\u010d\u010e\u0007\u0005\u0002\u0002\u010e\u012a\u0003\u0002\u0002\u0002",
    "\u010f\u0110\u0007#\u0002\u0002\u0110\u012a\u0005 \u0011\u0012\u0111",
    "\u0112\u0005P)\u0002\u0112\u0113\u0005 \u0011\u0011\u0113\u012a\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u00079\u0002\u0002\u0115\u012a\u0005",
    " \u0011\u000e\u0116\u012a\u0005(\u0015\u0002\u0117\u012a\u0005B\"\u0002",
    "\u0118\u012a\u0005*\u0016\u0002\u0119\u012a\u0005.\u0018\u0002\u011a",
    "\u012a\u0005D#\u0002\u011b\u012a\u00050\u0019\u0002\u011c\u011d\u0007",
    "N\u0002\u0002\u011d\u011e\u0007\u0003\u0002\u0002\u011e\u0121\u0005",
    " \u0011\u0002\u011f\u0120\u0007\u0004\u0002\u0002\u0120\u0122\u0005",
    " \u0011\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0122\u0123\u0003",
    "\u0002\u0002\u0002\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0124\u0003",
    "\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0126\u0007",
    "\u0005\u0002\u0002\u0126\u012a\u0003\u0002\u0002\u0002\u0127\u012a\u0005",
    "F$\u0002\u0128\u012a\u0005J&\u0002\u0129\u010a\u0003\u0002\u0002\u0002",
    "\u0129\u010f\u0003\u0002\u0002\u0002\u0129\u0111\u0003\u0002\u0002\u0002",
    "\u0129\u0114\u0003\u0002\u0002\u0002\u0129\u0116\u0003\u0002\u0002\u0002",
    "\u0129\u0117\u0003\u0002\u0002\u0002\u0129\u0118\u0003\u0002\u0002\u0002",
    "\u0129\u0119\u0003\u0002\u0002\u0002\u0129\u011a\u0003\u0002\u0002\u0002",
    "\u0129\u011b\u0003\u0002\u0002\u0002\u0129\u011c\u0003\u0002\u0002\u0002",
    "\u0129\u0127\u0003\u0002\u0002\u0002\u0129\u0128\u0003\u0002\u0002\u0002",
    "\u012a\u013b\u0003\u0002\u0002\u0002\u012b\u012c\f\u000f\u0002\u0002",
    "\u012c\u012d\u0005V,\u0002\u012d\u012e\u0005 \u0011\u0010\u012e\u013a",
    "\u0003\u0002\u0002\u0002\u012f\u0130\f\r\u0002\u0002\u0130\u0131\u0005",
    "T+\u0002\u0131\u0132\u0005 \u0011\u000e\u0132\u013a\u0003\u0002\u0002",
    "\u0002\u0133\u0134\f\f\u0002\u0002\u0134\u0135\u0005R*\u0002\u0135\u0136",
    "\u0005 \u0011\r\u0136\u013a\u0003\u0002\u0002\u0002\u0137\u0138\f\u0010",
    "\u0002\u0002\u0138\u013a\u0007\u0007\u0002\u0002\u0139\u012b\u0003\u0002",
    "\u0002\u0002\u0139\u012f\u0003\u0002\u0002\u0002\u0139\u0133\u0003\u0002",
    "\u0002\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u013a\u013d\u0003\u0002",
    "\u0002\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002",
    "\u0002\u0002\u013c!\u0003\u0002\u0002\u0002\u013d\u013b\u0003\u0002",
    "\u0002\u0002\u013e\u0142\u0005 \u0011\u0002\u013f\u0142\u0007\u0017",
    "\u0002\u0002\u0140\u0142\u0005B\"\u0002\u0141\u013e\u0003\u0002\u0002",
    "\u0002\u0141\u013f\u0003\u0002\u0002\u0002\u0141\u0140\u0003\u0002\u0002",
    "\u0002\u0142#\u0003\u0002\u0002\u0002\u0143\u0149\u0005(\u0015\u0002",
    "\u0144\u0149\u0005B\"\u0002\u0145\u0149\u0005.\u0018\u0002\u0146\u0149",
    "\u0005D#\u0002\u0147\u0149\u0005F$\u0002\u0148\u0143\u0003\u0002\u0002",
    "\u0002\u0148\u0144\u0003\u0002\u0002\u0002\u0148\u0145\u0003\u0002\u0002",
    "\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0148\u0147\u0003\u0002\u0002",
    "\u0002\u0149%\u0003\u0002\u0002\u0002\u014a\u014b\b\u0014\u0001\u0002",
    "\u014b\u014c\u0005 \u0011\u0002\u014c\u014d\u0005X-\u0002\u014d\u014e",
    "\u0005 \u0011\u0002\u014e\u0154\u0003\u0002\u0002\u0002\u014f\u0150",
    "\u0007=\u0002\u0002\u0150\u0151\u0005X-\u0002\u0151\u0152\u0005 \u0011",
    "\u0002\u0152\u0154\u0003\u0002\u0002\u0002\u0153\u014a\u0003\u0002\u0002",
    "\u0002\u0153\u014f\u0003\u0002\u0002\u0002\u0154\u015b\u0003\u0002\u0002",
    "\u0002\u0155\u0156\f\u0003\u0002\u0002\u0156\u0157\u0005Z.\u0002\u0157",
    "\u0158\u0005&\u0014\u0004\u0158\u015a\u0003\u0002\u0002\u0002\u0159",
    "\u0155\u0003\u0002\u0002\u0002\u015a\u015d\u0003\u0002\u0002\u0002\u015b",
    "\u0159\u0003\u0002\u0002\u0002\u015b\u015c\u0003\u0002\u0002\u0002\u015c",
    "\'\u0003\u0002\u0002\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015e",
    "\u015f\u0007G\u0002\u0002\u015f\u0160\u0007\u0012\u0002\u0002\u0160",
    "\u0161\u0007\b\u0002\u0002\u0161\u0162\u0005 \u0011\u0002\u0162\u0163",
    "\u0007\u0004\u0002\u0002\u0163\u0164\u0005 \u0011\u0002\u0164\u0165",
    "\u0007\t\u0002\u0002\u0165)\u0003\u0002\u0002\u0002\u0166\u0168\u0007",
    "\b\u0002\u0002\u0167\u0169\u0005,\u0017\u0002\u0168\u0167\u0003\u0002",
    "\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u0168\u0003\u0002",
    "\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016c\u0003\u0002",
    "\u0002\u0002\u016c\u016d\u0007\t\u0002\u0002\u016d+\u0003\u0002\u0002",
    "\u0002\u016e\u016f\u0007\b\u0002\u0002\u016f\u0174\u0005 \u0011\u0002",
    "\u0170\u0171\u0007\u0004\u0002\u0002\u0171\u0173\u0005 \u0011\u0002",
    "\u0172\u0170\u0003\u0002\u0002\u0002\u0173\u0176\u0003\u0002\u0002\u0002",
    "\u0174\u0172\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002",
    "\u0175\u0177\u0003\u0002\u0002\u0002\u0176\u0174\u0003\u0002\u0002\u0002",
    "\u0177\u0178\u0007\t\u0002\u0002\u0178-\u0003\u0002\u0002\u0002\u0179",
    "\u017a\u0007C\u0002\u0002\u017a\u017b\u0007\u0013\u0002\u0002\u017b",
    "\u017c\u0007\b\u0002\u0002\u017c\u017d\u0005 \u0011\u0002\u017d\u017e",
    "\u0007\t\u0002\u0002\u017e/\u0003\u0002\u0002\u0002\u017f\u0180\u0007",
    "\n\u0002\u0002\u0180\u0185\u0005 \u0011\u0002\u0181\u0182\u0007\u0004",
    "\u0002\u0002\u0182\u0184\u0005 \u0011\u0002\u0183\u0181\u0003\u0002",
    "\u0002\u0002\u0184\u0187\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0188\u0003\u0002",
    "\u0002\u0002\u0187\u0185\u0003\u0002\u0002\u0002\u0188\u0189\u0007\u000b",
    "\u0002\u0002\u01891\u0003\u0002\u0002\u0002\u018a\u018b\u0005<\u001f",
    "\u0002\u018b\u018c\u00054\u001b\u0002\u018c\u018d\u0005> \u0002\u018d",
    "3\u0003\u0002\u0002\u0002\u018e\u018f\u00056\u001c\u0002\u018f\u0190",
    "\u0007\f\u0002\u0002\u0190\u0191\u00058\u001d\u0002\u0191\u0192\u0007",
    "\u0016\u0002\u0002\u0192\u0199\u0003\u0002\u0002\u0002\u0193\u0194\u0007",
    "\r\u0002\u0002\u0194\u0195\u0007\f\u0002\u0002\u0195\u0196\u0005:\u001e",
    "\u0002\u0196\u0197\u0007\u0016\u0002\u0002\u0197\u0199\u0003\u0002\u0002",
    "\u0002\u0198\u018e\u0003\u0002\u0002\u0002\u0198\u0193\u0003\u0002\u0002",
    "\u0002\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u0198\u0003\u0002\u0002",
    "\u0002\u019a\u019b\u0003\u0002\u0002\u0002\u019b5\u0003\u0002\u0002",
    "\u0002\u019c\u01a3\u0007\u0014\u0002\u0002\u019d\u019e\u0007\u0014\u0002",
    "\u0002\u019e\u01a3\u0007\u0013\u0002\u0002\u019f\u01a0\u0007\u0014\u0002",
    "\u0002\u01a0\u01a1\u0007\u0015\u0002\u0002\u01a1\u01a3\u0007\u0014\u0002",
    "\u0002\u01a2\u019c\u0003\u0002\u0002\u0002\u01a2\u019d\u0003\u0002\u0002",
    "\u0002\u01a2\u019f\u0003\u0002\u0002\u0002\u01a37\u0003\u0002\u0002",
    "\u0002\u01a4\u01a9\u0007\u0014\u0002\u0002\u01a5\u01a9\u0007\u0013\u0002",
    "\u0002\u01a6\u01a9\u0007\u0018\u0002\u0002\u01a7\u01a9\u0003\u0002\u0002",
    "\u0002\u01a8\u01a4\u0003\u0002\u0002\u0002\u01a8\u01a5\u0003\u0002\u0002",
    "\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a7\u0003\u0002\u0002",
    "\u0002\u01a99\u0003\u0002\u0002\u0002\u01aa\u01ac\b\u001e\u0001\u0002",
    "\u01ab\u01ad\t\u0003\u0002\u0002\u01ac\u01ab\u0003\u0002\u0002\u0002",
    "\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01ac\u0003\u0002\u0002\u0002",
    "\u01ae\u01af\u0003\u0002\u0002\u0002\u01af\u01bb\u0003\u0002\u0002\u0002",
    "\u01b0\u01b2\f\u0003\u0002\u0002\u01b1\u01b3\t\u0004\u0002\u0002\u01b2",
    "\u01b1\u0003\u0002\u0002\u0002\u01b3\u01b4\u0003\u0002\u0002\u0002\u01b4",
    "\u01b2\u0003\u0002\u0002\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002\u01b5",
    "\u01b7\u0003\u0002\u0002\u0002\u01b6\u01b8\u0005:\u001e\u0002\u01b7",
    "\u01b6\u0003\u0002\u0002\u0002\u01b7\u01b8\u0003\u0002\u0002\u0002\u01b8",
    "\u01ba\u0003\u0002\u0002\u0002\u01b9\u01b0\u0003\u0002\u0002\u0002\u01ba",
    "\u01bd\u0003\u0002\u0002\u0002\u01bb\u01b9\u0003\u0002\u0002\u0002\u01bb",
    "\u01bc\u0003\u0002\u0002\u0002\u01bc;\u0003\u0002\u0002\u0002\u01bd",
    "\u01bb\u0003\u0002\u0002\u0002\u01be\u01bf\u0007\u000e\u0002\u0002\u01bf",
    "\u01c0\u0007\u0016\u0002\u0002\u01c0=\u0003\u0002\u0002\u0002\u01c1",
    "\u01c2\u0007\u000f\u0002\u0002\u01c2\u01c3\u0007\u0016\u0002\u0002\u01c3",
    "?\u0003\u0002\u0002\u0002\u01c4\u01c6\u0007\u0010\u0002\u0002\u01c5",
    "\u01c7\u0007\u0016\u0002\u0002\u01c6\u01c5\u0003\u0002\u0002\u0002\u01c7",
    "\u01c8\u0003\u0002\u0002\u0002\u01c8\u01c6\u0003\u0002\u0002\u0002\u01c8",
    "\u01c9\u0003\u0002\u0002\u0002\u01c9A\u0003\u0002\u0002\u0002\u01ca",
    "\u01cb\u0007G\u0002\u0002\u01cb\u01cc\t\u0005\u0002\u0002\u01ccC\u0003",
    "\u0002\u0002\u0002\u01cd\u01ce\u0007C\u0002\u0002\u01ce\u01cf\u0007",
    "\u0013\u0002\u0002\u01cfE\u0003\u0002\u0002\u0002\u01d0\u01d1\u0007",
    "\u0012\u0002\u0002\u01d1G\u0003\u0002\u0002\u0002\u01d2\u01d3\t\u0006",
    "\u0002\u0002\u01d3I\u0003\u0002\u0002\u0002\u01d4\u01d5\b&\u0001\u0002",
    "\u01d5\u01e1\u0007\u0013\u0002\u0002\u01d6\u01e1\u0007J\u0002\u0002",
    "\u01d7\u01e1\u0007\u0018\u0002\u0002\u01d8\u01dc\u0007\u0011\u0002\u0002",
    "\u01d9\u01db\u0007\u0018\u0002\u0002\u01da\u01d9\u0003\u0002\u0002\u0002",
    "\u01db\u01de\u0003\u0002\u0002\u0002\u01dc\u01da\u0003\u0002\u0002\u0002",
    "\u01dc\u01dd\u0003\u0002\u0002\u0002\u01dd\u01df\u0003\u0002\u0002\u0002",
    "\u01de\u01dc\u0003\u0002\u0002\u0002\u01df\u01e1\u0005J&\u0003\u01e0",
    "\u01d4\u0003\u0002\u0002\u0002\u01e0\u01d6\u0003\u0002\u0002\u0002\u01e0",
    "\u01d7\u0003\u0002\u0002\u0002\u01e0\u01d8\u0003\u0002\u0002\u0002\u01e1",
    "\u01ed\u0003\u0002\u0002\u0002\u01e2\u01e3\f\u0004\u0002\u0002\u01e3",
    "\u01e7\u0007\u0011\u0002\u0002\u01e4\u01e6\u0007\u0018\u0002\u0002\u01e5",
    "\u01e4\u0003\u0002\u0002\u0002\u01e6\u01e9\u0003\u0002\u0002\u0002\u01e7",
    "\u01e5\u0003\u0002\u0002\u0002\u01e7\u01e8\u0003\u0002\u0002\u0002\u01e8",
    "\u01ea\u0003\u0002\u0002\u0002\u01e9\u01e7\u0003\u0002\u0002\u0002\u01ea",
    "\u01ec\u0005J&\u0005\u01eb\u01e2\u0003\u0002\u0002\u0002\u01ec\u01ef",
    "\u0003\u0002\u0002\u0002\u01ed\u01eb\u0003\u0002\u0002\u0002\u01ed\u01ee",
    "\u0003\u0002\u0002\u0002\u01eeK\u0003\u0002\u0002\u0002\u01ef\u01ed",
    "\u0003\u0002\u0002\u0002\u01f0\u01f2\u0007\u0016\u0002\u0002\u01f1\u01f0",
    "\u0003\u0002\u0002\u0002\u01f2\u01f3\u0003\u0002\u0002\u0002\u01f3\u01f1",
    "\u0003\u0002\u0002\u0002\u01f3\u01f4\u0003\u0002\u0002\u0002\u01f4\u01f7",
    "\u0003\u0002\u0002\u0002\u01f5\u01f7\u0007\f\u0002\u0002\u01f6\u01f1",
    "\u0003\u0002\u0002\u0002\u01f6\u01f5\u0003\u0002\u0002\u0002\u01f7M",
    "\u0003\u0002\u0002\u0002\u01f8\u01f9\u0007M\u0002\u0002\u01f9O\u0003",
    "\u0002\u0002\u0002\u01fa\u01fb\t\u0007\u0002\u0002\u01fbQ\u0003\u0002",
    "\u0002\u0002\u01fc\u01fd\t\u0004\u0002\u0002\u01fdS\u0003\u0002\u0002",
    "\u0002\u01fe\u01ff\t\b\u0002\u0002\u01ffU\u0003\u0002\u0002\u0002\u0200",
    "\u0201\u0007&\u0002\u0002\u0201W\u0003\u0002\u0002\u0002\u0202\u0203",
    "\t\t\u0002\u0002\u0203Y\u0003\u0002\u0002\u0002\u0204\u0205\t\n\u0002",
    "\u0002\u0205[\u0003\u0002\u0002\u0002-_chjp\u0083\u0085\u0087\u009b",
    "\u00a0\u00ae\u00b1\u00b7\u00c0\u00e0\u00e9\u0105\u0123\u0129\u0139\u013b",
    "\u0141\u0148\u0153\u015b\u016a\u0174\u0185\u0198\u019a\u01a2\u01a8\u01ae",
    "\u01b4\u01b7\u01bb\u01c8\u01dc\u01e0\u01e7\u01ed\u01f3\u01f6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", "'?'", "'!'", "'['", "']'", 
                     "'{'", "'}'", "':'", "'File Name'", "'%Header Record'", 
                     "'%Data Record'", "'%End'", "'.'", null, null, null, 
                     null, null, null, "'0'", "'\\sqrt'", "'\\cos '", "'\\sin '", 
                     "'\\tan '", "'\\acos '", "'\\asin '", "'\\atan '", 
                     "'\\Abs '", "'\\Int '", "'+'", "'-'", "'*'", "'/'", 
                     null, "'='", "'\\<>'", "'>'", "'\\>='", "'<'", "'\\<='", 
                     "'\\ And '", "'\\ Or '", "'\\->'", "'\\=>'", "'\\Ans'", 
                     "'\\AxesOff'", "'\\AxesOn'", "'\\ClrGraph'", "'\\ClrText'", 
                     "'\\Disp'", "'\\Do'", "'\\Else '", "'\\10^x'", "'\\Fix '", 
                     "'\\F-Line '", "'\\For '", "'\\Getkey'", "'\\Gra'", 
                     "'\\Goto'", "'\\If '", "'\\IfEnd'", "'\\Lbl '", "'\\List '", 
                     "'\\List->Mat'", "'\\Locate '", "'\\LpWhile '", "'\\Mat '", 
                     "'\\Next'", "'\\Norm'", "'\\Pi'", "'\\PlotOn '", "'\\Prog '", 
                     "'\\Return'", "'\\Seq'", "'\\Stop'", "'\\Then '", "' \\To '", 
                     "'\\ViewWindow '" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "ID", "NATNUM", 
                      "TEXT", "WS", "NEWLINE", "STRING", "ZERO", "SQRT", 
                      "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "ABS", 
                      "INT", "ADD", "SUB", "MUL", "DIV", "POW", "EQ", "NE", 
                      "GT", "GE", "LT", "LE", "AND", "OR", "ARROW", "FATARROW", 
                      "ANS", "AXESOFF", "AXESON", "CLRGRPH", "CLRTXT", "DISP", 
                      "DO", "ELSE", "EXPNT", "FIX", "FLINE", "FOR", "GETKEY", 
                      "GRA", "GOTO", "IF", "IFEND", "LBL", "LIST", "LISTMAT", 
                      "LOCATE", "LPWHILE", "MATRIX", "NEXT", "NORM", "PI", 
                      "PLOTON", "PROG", "RETURN", "SEQ", "STOP", "THEN", 
                      "TO", "VIEWWINDOW" ];

var ruleNames =  [ "prog", "file", "block", "stat", "assignStat", "printStat", 
                   "confStat", "readStat", "graphStat", "ifStat", "forStat", 
                   "doStat", "implyStat", "jumpStat", "labelStat", "evalExpr", 
                   "dispExpr", "stoExpr", "boolExpr", "matrixElement", "matrixInitializer", 
                   "matrixRow", "listElement", "listInitializer", "header", 
                   "attributes", "headerAttr", "headerValue", "fileName", 
                   "startHeader", "endHeader", "endFile", "matrix", "list", 
                   "variable", "lbl", "number", "endStat", "endProg", "func", 
                   "addOp", "multOp", "powOp", "compOp", "boolOp" ];

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
CalcParser.T__12 = 13;
CalcParser.T__13 = 14;
CalcParser.T__14 = 15;
CalcParser.ID = 16;
CalcParser.NATNUM = 17;
CalcParser.TEXT = 18;
CalcParser.WS = 19;
CalcParser.NEWLINE = 20;
CalcParser.STRING = 21;
CalcParser.ZERO = 22;
CalcParser.SQRT = 23;
CalcParser.COS = 24;
CalcParser.SIN = 25;
CalcParser.TAN = 26;
CalcParser.ACOS = 27;
CalcParser.ASIN = 28;
CalcParser.ATAN = 29;
CalcParser.ABS = 30;
CalcParser.INT = 31;
CalcParser.ADD = 32;
CalcParser.SUB = 33;
CalcParser.MUL = 34;
CalcParser.DIV = 35;
CalcParser.POW = 36;
CalcParser.EQ = 37;
CalcParser.NE = 38;
CalcParser.GT = 39;
CalcParser.GE = 40;
CalcParser.LT = 41;
CalcParser.LE = 42;
CalcParser.AND = 43;
CalcParser.OR = 44;
CalcParser.ARROW = 45;
CalcParser.FATARROW = 46;
CalcParser.ANS = 47;
CalcParser.AXESOFF = 48;
CalcParser.AXESON = 49;
CalcParser.CLRGRPH = 50;
CalcParser.CLRTXT = 51;
CalcParser.DISP = 52;
CalcParser.DO = 53;
CalcParser.ELSE = 54;
CalcParser.EXPNT = 55;
CalcParser.FIX = 56;
CalcParser.FLINE = 57;
CalcParser.FOR = 58;
CalcParser.GETKEY = 59;
CalcParser.GRA = 60;
CalcParser.GOTO = 61;
CalcParser.IF = 62;
CalcParser.IFEND = 63;
CalcParser.LBL = 64;
CalcParser.LIST = 65;
CalcParser.LISTMAT = 66;
CalcParser.LOCATE = 67;
CalcParser.LPWHILE = 68;
CalcParser.MATRIX = 69;
CalcParser.NEXT = 70;
CalcParser.NORM = 71;
CalcParser.PI = 72;
CalcParser.PLOTON = 73;
CalcParser.PROG = 74;
CalcParser.RETURN = 75;
CalcParser.SEQ = 76;
CalcParser.STOP = 77;
CalcParser.THEN = 78;
CalcParser.TO = 79;
CalcParser.VIEWWINDOW = 80;

CalcParser.RULE_prog = 0;
CalcParser.RULE_file = 1;
CalcParser.RULE_block = 2;
CalcParser.RULE_stat = 3;
CalcParser.RULE_assignStat = 4;
CalcParser.RULE_printStat = 5;
CalcParser.RULE_confStat = 6;
CalcParser.RULE_readStat = 7;
CalcParser.RULE_graphStat = 8;
CalcParser.RULE_ifStat = 9;
CalcParser.RULE_forStat = 10;
CalcParser.RULE_doStat = 11;
CalcParser.RULE_implyStat = 12;
CalcParser.RULE_jumpStat = 13;
CalcParser.RULE_labelStat = 14;
CalcParser.RULE_evalExpr = 15;
CalcParser.RULE_dispExpr = 16;
CalcParser.RULE_stoExpr = 17;
CalcParser.RULE_boolExpr = 18;
CalcParser.RULE_matrixElement = 19;
CalcParser.RULE_matrixInitializer = 20;
CalcParser.RULE_matrixRow = 21;
CalcParser.RULE_listElement = 22;
CalcParser.RULE_listInitializer = 23;
CalcParser.RULE_header = 24;
CalcParser.RULE_attributes = 25;
CalcParser.RULE_headerAttr = 26;
CalcParser.RULE_headerValue = 27;
CalcParser.RULE_fileName = 28;
CalcParser.RULE_startHeader = 29;
CalcParser.RULE_endHeader = 30;
CalcParser.RULE_endFile = 31;
CalcParser.RULE_matrix = 32;
CalcParser.RULE_list = 33;
CalcParser.RULE_variable = 34;
CalcParser.RULE_lbl = 35;
CalcParser.RULE_number = 36;
CalcParser.RULE_endStat = 37;
CalcParser.RULE_endProg = 38;
CalcParser.RULE_func = 39;
CalcParser.RULE_addOp = 40;
CalcParser.RULE_multOp = 41;
CalcParser.RULE_powOp = 42;
CalcParser.RULE_compOp = 43;
CalcParser.RULE_boolOp = 44;

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

ProgContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

ProgContext.prototype.file = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FileContext);
    } else {
        return this.getTypedRuleContext(FileContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitProg(this);
	}
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
    var _la = 0; // Token type
    try {
        this.state = 104;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__5) | (1 << CalcParser.T__7) | (1 << CalcParser.T__14) | (1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.NEWLINE) | (1 << CalcParser.STRING) | (1 << CalcParser.ZERO) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.ABS) | (1 << CalcParser.INT))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CalcParser.SUB - 33)) | (1 << (CalcParser.AXESOFF - 33)) | (1 << (CalcParser.AXESON - 33)) | (1 << (CalcParser.CLRGRPH - 33)) | (1 << (CalcParser.CLRTXT - 33)) | (1 << (CalcParser.DO - 33)) | (1 << (CalcParser.EXPNT - 33)) | (1 << (CalcParser.FIX - 33)) | (1 << (CalcParser.FLINE - 33)) | (1 << (CalcParser.FOR - 33)) | (1 << (CalcParser.GETKEY - 33)) | (1 << (CalcParser.GRA - 33)) | (1 << (CalcParser.GOTO - 33)) | (1 << (CalcParser.IF - 33)) | (1 << (CalcParser.LBL - 33)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (CalcParser.LIST - 65)) | (1 << (CalcParser.LISTMAT - 65)) | (1 << (CalcParser.LOCATE - 65)) | (1 << (CalcParser.MATRIX - 65)) | (1 << (CalcParser.NORM - 65)) | (1 << (CalcParser.PI - 65)) | (1 << (CalcParser.PLOTON - 65)) | (1 << (CalcParser.PROG - 65)) | (1 << (CalcParser.RETURN - 65)) | (1 << (CalcParser.SEQ - 65)) | (1 << (CalcParser.STOP - 65)) | (1 << (CalcParser.VIEWWINDOW - 65)))) !== 0)) {
                this.state = 90;
                this.block();
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__5) | (1 << CalcParser.T__7) | (1 << CalcParser.T__14) | (1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.NEWLINE) | (1 << CalcParser.STRING) | (1 << CalcParser.ZERO) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.ABS) | (1 << CalcParser.INT))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CalcParser.SUB - 33)) | (1 << (CalcParser.AXESOFF - 33)) | (1 << (CalcParser.AXESON - 33)) | (1 << (CalcParser.CLRGRPH - 33)) | (1 << (CalcParser.CLRTXT - 33)) | (1 << (CalcParser.DO - 33)) | (1 << (CalcParser.EXPNT - 33)) | (1 << (CalcParser.FIX - 33)) | (1 << (CalcParser.FLINE - 33)) | (1 << (CalcParser.FOR - 33)) | (1 << (CalcParser.GETKEY - 33)) | (1 << (CalcParser.GRA - 33)) | (1 << (CalcParser.GOTO - 33)) | (1 << (CalcParser.IF - 33)) | (1 << (CalcParser.LBL - 33)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (CalcParser.LIST - 65)) | (1 << (CalcParser.LISTMAT - 65)) | (1 << (CalcParser.LOCATE - 65)) | (1 << (CalcParser.MATRIX - 65)) | (1 << (CalcParser.NORM - 65)) | (1 << (CalcParser.PI - 65)) | (1 << (CalcParser.PLOTON - 65)) | (1 << (CalcParser.PROG - 65)) | (1 << (CalcParser.RETURN - 65)) | (1 << (CalcParser.SEQ - 65)) | (1 << (CalcParser.STOP - 65)) | (1 << (CalcParser.VIEWWINDOW - 65)))) !== 0)) {
                this.state = 96;
                this.block();
            }

            this.state = 100; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 99;
                this.file();
                this.state = 102; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===CalcParser.T__11);
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

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
};

FileContext.prototype.endFile = function() {
    return this.getTypedRuleContext(EndFileContext,0);
};

FileContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitFile(this);
	}
};

FileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.FileContext = FileContext;

CalcParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalcParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.header();
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__5) | (1 << CalcParser.T__7) | (1 << CalcParser.T__14) | (1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.NEWLINE) | (1 << CalcParser.STRING) | (1 << CalcParser.ZERO) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.ABS) | (1 << CalcParser.INT))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CalcParser.SUB - 33)) | (1 << (CalcParser.AXESOFF - 33)) | (1 << (CalcParser.AXESON - 33)) | (1 << (CalcParser.CLRGRPH - 33)) | (1 << (CalcParser.CLRTXT - 33)) | (1 << (CalcParser.DO - 33)) | (1 << (CalcParser.EXPNT - 33)) | (1 << (CalcParser.FIX - 33)) | (1 << (CalcParser.FLINE - 33)) | (1 << (CalcParser.FOR - 33)) | (1 << (CalcParser.GETKEY - 33)) | (1 << (CalcParser.GRA - 33)) | (1 << (CalcParser.GOTO - 33)) | (1 << (CalcParser.IF - 33)) | (1 << (CalcParser.LBL - 33)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (CalcParser.LIST - 65)) | (1 << (CalcParser.LISTMAT - 65)) | (1 << (CalcParser.LOCATE - 65)) | (1 << (CalcParser.MATRIX - 65)) | (1 << (CalcParser.NORM - 65)) | (1 << (CalcParser.PI - 65)) | (1 << (CalcParser.PLOTON - 65)) | (1 << (CalcParser.PROG - 65)) | (1 << (CalcParser.RETURN - 65)) | (1 << (CalcParser.SEQ - 65)) | (1 << (CalcParser.STOP - 65)) | (1 << (CalcParser.VIEWWINDOW - 65)))) !== 0)) {
            this.state = 107;
            this.block();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 113;
        this.endFile();
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

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.endStat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EndStatContext);
    } else {
        return this.getTypedRuleContext(EndStatContext,i);
    }
};

BlockContext.prototype.dispExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DispExprContext);
    } else {
        return this.getTypedRuleContext(DispExprContext,i);
    }
};

BlockContext.prototype.DISP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.DISP);
    } else {
        return this.getToken(CalcParser.DISP, i);
    }
};


BlockContext.prototype.boolExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BoolExprContext);
    } else {
        return this.getTypedRuleContext(BoolExprContext,i);
    }
};

BlockContext.prototype.FATARROW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.FATARROW);
    } else {
        return this.getToken(CalcParser.FATARROW, i);
    }
};


BlockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
    }
};


BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BlockContext = BlockContext;

CalcParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalcParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 131;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 115;
        		    this.stat();
        		    this.state = 116;
        		    this.endStat();
        		    break;

        		case 2:
        		    this.state = 118;
        		    this.dispExpr();
        		    this.state = 119;
        		    this.match(CalcParser.DISP);
        		    break;

        		case 3:
        		    this.state = 121;
        		    this.boolExpr(0);
        		    this.state = 122;
        		    this.match(CalcParser.FATARROW);
        		    this.state = 123;
        		    this.dispExpr();
        		    this.state = 124;
        		    this.match(CalcParser.DISP);
        		    break;

        		case 4:
        		    this.state = 127; 
        		    this._errHandler.sync(this);
        		    var _alt = 1;
        		    do {
        		    	switch (_alt) {
        		    	case 1:
        		    		this.state = 126;
        		    		this.match(CalcParser.NEWLINE);
        		    		break;
        		    	default:
        		    		throw new antlr4.error.NoViableAltException(this);
        		    	}
        		    	this.state = 129; 
        		    	this._errHandler.sync(this);
        		    	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
        		    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 133; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_stat;
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

StatContext.prototype.confStat = function() {
    return this.getTypedRuleContext(ConfStatContext,0);
};

StatContext.prototype.readStat = function() {
    return this.getTypedRuleContext(ReadStatContext,0);
};

StatContext.prototype.graphStat = function() {
    return this.getTypedRuleContext(GraphStatContext,0);
};

StatContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

StatContext.prototype.forStat = function() {
    return this.getTypedRuleContext(ForStatContext,0);
};

StatContext.prototype.doStat = function() {
    return this.getTypedRuleContext(DoStatContext,0);
};

StatContext.prototype.implyStat = function() {
    return this.getTypedRuleContext(ImplyStatContext,0);
};

StatContext.prototype.jumpStat = function() {
    return this.getTypedRuleContext(JumpStatContext,0);
};

StatContext.prototype.labelStat = function() {
    return this.getTypedRuleContext(LabelStatContext,0);
};

StatContext.prototype.LISTMAT = function() {
    return this.getToken(CalcParser.LISTMAT, 0);
};

StatContext.prototype.list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ListContext);
    } else {
        return this.getTypedRuleContext(ListContext,i);
    }
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitStat(this);
	}
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.StatContext = StatContext;

CalcParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalcParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 135;
            this.assignStat();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.printStat();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 137;
            this.confStat();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 138;
            this.readStat();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 139;
            this.graphStat();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 140;
            this.ifStat();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 141;
            this.forStat();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 142;
            this.doStat();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 143;
            this.implyStat();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 144;
            this.jumpStat();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 145;
            this.labelStat();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 146;
            this.match(CalcParser.LISTMAT);
            this.state = 147;
            this.match(CalcParser.T__0);
            this.state = 148;
            this.list();
            this.state = 153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===CalcParser.T__1) {
                this.state = 149;
                this.match(CalcParser.T__1);
                this.state = 150;
                this.list();
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 156;
            this.match(CalcParser.T__2);
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
    this.ruleIndex = CalcParser.RULE_assignStat;
    return this;
}

AssignStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatContext.prototype.constructor = AssignStatContext;

AssignStatContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

AssignStatContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

AssignStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

AssignStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAssignStat(this);
	}
};

AssignStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAssignStat(this);
	}
};

AssignStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAssignStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AssignStatContext = AssignStatContext;

CalcParser.prototype.assignStat = function() {

    var localctx = new AssignStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalcParser.RULE_assignStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.evalExpr(0);
        this.state = 161;
        this.match(CalcParser.ARROW);
        this.state = 162;
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
    this.ruleIndex = CalcParser.RULE_printStat;
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

CalcParser.PrintContext = PrintContext;

PrintContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};
PrintContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPrint(this);
	}
};

PrintContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPrint(this);
	}
};

PrintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPrint(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ClearTextContext(parser, ctx) {
	PrintStatContext.call(this, parser);
    PrintStatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClearTextContext.prototype = Object.create(PrintStatContext.prototype);
ClearTextContext.prototype.constructor = ClearTextContext;

CalcParser.ClearTextContext = ClearTextContext;

ClearTextContext.prototype.CLRTXT = function() {
    return this.getToken(CalcParser.CLRTXT, 0);
};
ClearTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterClearText(this);
	}
};

ClearTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitClearText(this);
	}
};

ClearTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitClearText(this);
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

CalcParser.PrintAtContext = PrintAtContext;

PrintAtContext.prototype.LOCATE = function() {
    return this.getToken(CalcParser.LOCATE, 0);
};

PrintAtContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

PrintAtContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};
PrintAtContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPrintAt(this);
	}
};

PrintAtContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPrintAt(this);
	}
};

PrintAtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPrintAt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.PrintStatContext = PrintStatContext;

CalcParser.prototype.printStat = function() {

    var localctx = new PrintStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalcParser.RULE_printStat);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 164;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 165;
            this.match(CalcParser.LOCATE);
            this.state = 166;
            this.evalExpr(0);
            this.state = 167;
            this.match(CalcParser.T__1);
            this.state = 168;
            this.evalExpr(0);
            this.state = 169;
            this.match(CalcParser.T__1);
            this.state = 172;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CalcParser.T__0:
            case CalcParser.T__5:
            case CalcParser.T__7:
            case CalcParser.T__14:
            case CalcParser.ID:
            case CalcParser.NATNUM:
            case CalcParser.ZERO:
            case CalcParser.SQRT:
            case CalcParser.COS:
            case CalcParser.SIN:
            case CalcParser.TAN:
            case CalcParser.ACOS:
            case CalcParser.ASIN:
            case CalcParser.ATAN:
            case CalcParser.ABS:
            case CalcParser.INT:
            case CalcParser.SUB:
            case CalcParser.EXPNT:
            case CalcParser.LIST:
            case CalcParser.MATRIX:
            case CalcParser.PI:
            case CalcParser.SEQ:
                this.state = 170;
                this.evalExpr(0);
                break;
            case CalcParser.STRING:
                this.state = 171;
                this.match(CalcParser.STRING);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case CalcParser.CLRTXT:
            localctx = new ClearTextContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 174;
            this.match(CalcParser.CLRTXT);
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

function ConfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_confStat;
    return this;
}

ConfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConfStatContext.prototype.constructor = ConfStatContext;

ConfStatContext.prototype.NORM = function() {
    return this.getToken(CalcParser.NORM, 0);
};

ConfStatContext.prototype.FIX = function() {
    return this.getToken(CalcParser.FIX, 0);
};

ConfStatContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

ConfStatContext.prototype.ZERO = function() {
    return this.getToken(CalcParser.ZERO, 0);
};

ConfStatContext.prototype.GRA = function() {
    return this.getToken(CalcParser.GRA, 0);
};

ConfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterConfStat(this);
	}
};

ConfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitConfStat(this);
	}
};

ConfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitConfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ConfStatContext = ConfStatContext;

CalcParser.prototype.confStat = function() {

    var localctx = new ConfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CalcParser.RULE_confStat);
    var _la = 0; // Token type
    try {
        this.state = 181;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.NORM:
            this.enterOuterAlt(localctx, 1);
            this.state = 177;
            this.match(CalcParser.NORM);
            break;
        case CalcParser.FIX:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(CalcParser.FIX);
            this.state = 179;
            _la = this._input.LA(1);
            if(!(_la===CalcParser.NATNUM || _la===CalcParser.ZERO)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case CalcParser.GRA:
            this.enterOuterAlt(localctx, 3);
            this.state = 180;
            this.match(CalcParser.GRA);
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
    this.ruleIndex = CalcParser.RULE_readStat;
    return this;
}

ReadStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadStatContext.prototype.constructor = ReadStatContext;

ReadStatContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};

ReadStatContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

ReadStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

ReadStatContext.prototype.GETKEY = function() {
    return this.getToken(CalcParser.GETKEY, 0);
};

ReadStatContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

ReadStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterReadStat(this);
	}
};

ReadStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitReadStat(this);
	}
};

ReadStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitReadStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ReadStatContext = ReadStatContext;

CalcParser.prototype.readStat = function() {

    var localctx = new ReadStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CalcParser.RULE_readStat);
    try {
        this.state = 190;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 183;
            this.match(CalcParser.STRING);
            this.state = 184;
            this.match(CalcParser.T__3);
            this.state = 185;
            this.match(CalcParser.ARROW);
            this.state = 186;
            this.stoExpr();
            break;
        case CalcParser.GETKEY:
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.match(CalcParser.GETKEY);
            this.state = 188;
            this.match(CalcParser.ARROW);
            this.state = 189;
            this.match(CalcParser.ID);
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

function GraphStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_graphStat;
    return this;
}

GraphStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphStatContext.prototype.constructor = GraphStatContext;

GraphStatContext.prototype.AXESOFF = function() {
    return this.getToken(CalcParser.AXESOFF, 0);
};

GraphStatContext.prototype.AXESON = function() {
    return this.getToken(CalcParser.AXESON, 0);
};

GraphStatContext.prototype.CLRGRPH = function() {
    return this.getToken(CalcParser.CLRGRPH, 0);
};

GraphStatContext.prototype.VIEWWINDOW = function() {
    return this.getToken(CalcParser.VIEWWINDOW, 0);
};

GraphStatContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

GraphStatContext.prototype.FLINE = function() {
    return this.getToken(CalcParser.FLINE, 0);
};

GraphStatContext.prototype.PLOTON = function() {
    return this.getToken(CalcParser.PLOTON, 0);
};

GraphStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterGraphStat(this);
	}
};

GraphStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitGraphStat(this);
	}
};

GraphStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitGraphStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.GraphStatContext = GraphStatContext;

CalcParser.prototype.graphStat = function() {

    var localctx = new GraphStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CalcParser.RULE_graphStat);
    try {
        this.state = 222;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.AXESOFF:
            this.enterOuterAlt(localctx, 1);
            this.state = 192;
            this.match(CalcParser.AXESOFF);
            break;
        case CalcParser.AXESON:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.match(CalcParser.AXESON);
            break;
        case CalcParser.CLRGRPH:
            this.enterOuterAlt(localctx, 3);
            this.state = 194;
            this.match(CalcParser.CLRGRPH);
            break;
        case CalcParser.VIEWWINDOW:
            this.enterOuterAlt(localctx, 4);
            this.state = 195;
            this.match(CalcParser.VIEWWINDOW);
            this.state = 196;
            this.evalExpr(0);
            this.state = 197;
            this.match(CalcParser.T__1);
            this.state = 198;
            this.evalExpr(0);
            this.state = 199;
            this.match(CalcParser.T__1);
            this.state = 200;
            this.evalExpr(0);
            this.state = 201;
            this.match(CalcParser.T__1);
            this.state = 202;
            this.evalExpr(0);
            this.state = 203;
            this.match(CalcParser.T__1);
            this.state = 204;
            this.evalExpr(0);
            this.state = 205;
            this.match(CalcParser.T__1);
            this.state = 206;
            this.evalExpr(0);
            break;
        case CalcParser.FLINE:
            this.enterOuterAlt(localctx, 5);
            this.state = 208;
            this.match(CalcParser.FLINE);
            this.state = 209;
            this.evalExpr(0);
            this.state = 210;
            this.match(CalcParser.T__1);
            this.state = 211;
            this.evalExpr(0);
            this.state = 212;
            this.match(CalcParser.T__1);
            this.state = 213;
            this.evalExpr(0);
            this.state = 214;
            this.match(CalcParser.T__1);
            this.state = 215;
            this.evalExpr(0);
            break;
        case CalcParser.PLOTON:
            this.enterOuterAlt(localctx, 6);
            this.state = 217;
            this.match(CalcParser.PLOTON);
            this.state = 218;
            this.evalExpr(0);
            this.state = 219;
            this.match(CalcParser.T__1);
            this.state = 220;
            this.evalExpr(0);
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

function IfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.IF = function() {
    return this.getToken(CalcParser.IF, 0);
};

IfStatContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

IfStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

IfStatContext.prototype.THEN = function() {
    return this.getToken(CalcParser.THEN, 0);
};

IfStatContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

IfStatContext.prototype.IFEND = function() {
    return this.getToken(CalcParser.IFEND, 0);
};

IfStatContext.prototype.ELSE = function() {
    return this.getToken(CalcParser.ELSE, 0);
};

IfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterIfStat(this);
	}
};

IfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitIfStat(this);
	}
};

IfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.IfStatContext = IfStatContext;

CalcParser.prototype.ifStat = function() {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CalcParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(CalcParser.IF);
        this.state = 225;
        this.boolExpr(0);
        this.state = 226;
        this.endStat();
        this.state = 227;
        this.match(CalcParser.THEN);
        this.state = 228;
        this.block();
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CalcParser.ELSE) {
            this.state = 229;
            this.match(CalcParser.ELSE);
            this.state = 230;
            this.block();
        }

        this.state = 233;
        this.match(CalcParser.IFEND);
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

function ForStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_forStat;
    return this;
}

ForStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatContext.prototype.constructor = ForStatContext;

ForStatContext.prototype.FOR = function() {
    return this.getToken(CalcParser.FOR, 0);
};

ForStatContext.prototype.assignStat = function() {
    return this.getTypedRuleContext(AssignStatContext,0);
};

ForStatContext.prototype.TO = function() {
    return this.getToken(CalcParser.TO, 0);
};

ForStatContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

ForStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

ForStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ForStatContext.prototype.NEXT = function() {
    return this.getToken(CalcParser.NEXT, 0);
};

ForStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterForStat(this);
	}
};

ForStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitForStat(this);
	}
};

ForStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitForStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ForStatContext = ForStatContext;

CalcParser.prototype.forStat = function() {

    var localctx = new ForStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CalcParser.RULE_forStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(CalcParser.FOR);
        this.state = 236;
        this.assignStat();
        this.state = 237;
        this.match(CalcParser.TO);
        this.state = 238;
        this.evalExpr(0);
        this.state = 239;
        this.endStat();
        this.state = 240;
        this.block();
        this.state = 241;
        this.match(CalcParser.NEXT);
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

function DoStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_doStat;
    return this;
}

DoStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoStatContext.prototype.constructor = DoStatContext;

DoStatContext.prototype.DO = function() {
    return this.getToken(CalcParser.DO, 0);
};

DoStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

DoStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

DoStatContext.prototype.LPWHILE = function() {
    return this.getToken(CalcParser.LPWHILE, 0);
};

DoStatContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

DoStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterDoStat(this);
	}
};

DoStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitDoStat(this);
	}
};

DoStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitDoStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.DoStatContext = DoStatContext;

CalcParser.prototype.doStat = function() {

    var localctx = new DoStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CalcParser.RULE_doStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(CalcParser.DO);
        this.state = 244;
        this.endStat();
        this.state = 245;
        this.block();
        this.state = 246;
        this.match(CalcParser.LPWHILE);
        this.state = 247;
        this.boolExpr(0);
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
    this.ruleIndex = CalcParser.RULE_implyStat;
    return this;
}

ImplyStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImplyStatContext.prototype.constructor = ImplyStatContext;

ImplyStatContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

ImplyStatContext.prototype.FATARROW = function() {
    return this.getToken(CalcParser.FATARROW, 0);
};

ImplyStatContext.prototype.stat = function() {
    return this.getTypedRuleContext(StatContext,0);
};

ImplyStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterImplyStat(this);
	}
};

ImplyStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitImplyStat(this);
	}
};

ImplyStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitImplyStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ImplyStatContext = ImplyStatContext;

CalcParser.prototype.implyStat = function() {

    var localctx = new ImplyStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CalcParser.RULE_implyStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.boolExpr(0);
        this.state = 250;
        this.match(CalcParser.FATARROW);
        this.state = 251;
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

function JumpStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_jumpStat;
    return this;
}

JumpStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JumpStatContext.prototype.constructor = JumpStatContext;

JumpStatContext.prototype.GOTO = function() {
    return this.getToken(CalcParser.GOTO, 0);
};

JumpStatContext.prototype.lbl = function() {
    return this.getTypedRuleContext(LblContext,0);
};

JumpStatContext.prototype.PROG = function() {
    return this.getToken(CalcParser.PROG, 0);
};

JumpStatContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};

JumpStatContext.prototype.endProg = function() {
    return this.getTypedRuleContext(EndProgContext,0);
};

JumpStatContext.prototype.STOP = function() {
    return this.getToken(CalcParser.STOP, 0);
};

JumpStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterJumpStat(this);
	}
};

JumpStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitJumpStat(this);
	}
};

JumpStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitJumpStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.JumpStatContext = JumpStatContext;

CalcParser.prototype.jumpStat = function() {

    var localctx = new JumpStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CalcParser.RULE_jumpStat);
    try {
        this.state = 259;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.GOTO:
            this.enterOuterAlt(localctx, 1);
            this.state = 253;
            this.match(CalcParser.GOTO);
            this.state = 254;
            this.lbl();
            break;
        case CalcParser.PROG:
            this.enterOuterAlt(localctx, 2);
            this.state = 255;
            this.match(CalcParser.PROG);
            this.state = 256;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 257;
            this.endProg();
            break;
        case CalcParser.STOP:
            this.enterOuterAlt(localctx, 4);
            this.state = 258;
            this.match(CalcParser.STOP);
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

function LabelStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_labelStat;
    return this;
}

LabelStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelStatContext.prototype.constructor = LabelStatContext;

LabelStatContext.prototype.LBL = function() {
    return this.getToken(CalcParser.LBL, 0);
};

LabelStatContext.prototype.lbl = function() {
    return this.getTypedRuleContext(LblContext,0);
};

LabelStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterLabelStat(this);
	}
};

LabelStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitLabelStat(this);
	}
};

LabelStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitLabelStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.LabelStatContext = LabelStatContext;

CalcParser.prototype.labelStat = function() {

    var localctx = new LabelStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CalcParser.RULE_labelStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.match(CalcParser.LBL);
        this.state = 262;
        this.lbl();
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

function EvalExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_evalExpr;
    return this;
}

EvalExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvalExprContext.prototype.constructor = EvalExprContext;


 
EvalExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AddContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddContext.prototype = Object.create(EvalExprContext.prototype);
AddContext.prototype.constructor = AddContext;

CalcParser.AddContext = AddContext;

AddContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

AddContext.prototype.addOp = function() {
    return this.getTypedRuleContext(AddOpContext,0);
};
AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAdd(this);
	}
};

AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParseFloatContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParseFloatContext.prototype = Object.create(EvalExprContext.prototype);
ParseFloatContext.prototype.constructor = ParseFloatContext;

CalcParser.ParseFloatContext = ParseFloatContext;

ParseFloatContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ParseFloatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterParseFloat(this);
	}
};

ParseFloatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitParseFloat(this);
	}
};

ParseFloatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitParseFloat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParensContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(EvalExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

CalcParser.ParensContext = ParensContext;

ParensContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitParens(this);
	}
};

ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateListInitializerContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateListInitializerContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateListInitializerContext.prototype.constructor = EvaluateListInitializerContext;

CalcParser.EvaluateListInitializerContext = EvaluateListInitializerContext;

EvaluateListInitializerContext.prototype.listInitializer = function() {
    return this.getTypedRuleContext(ListInitializerContext,0);
};
EvaluateListInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateListInitializer(this);
	}
};

EvaluateListInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateListInitializer(this);
	}
};

EvaluateListInitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateListInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateMatrixContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateMatrixContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateMatrixContext.prototype.constructor = EvaluateMatrixContext;

CalcParser.EvaluateMatrixContext = EvaluateMatrixContext;

EvaluateMatrixContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};
EvaluateMatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateMatrix(this);
	}
};

EvaluateMatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateMatrix(this);
	}
};

EvaluateMatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactorialContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorialContext.prototype = Object.create(EvalExprContext.prototype);
FactorialContext.prototype.constructor = FactorialContext;

CalcParser.FactorialContext = FactorialContext;

FactorialContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
FactorialContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterFactorial(this);
	}
};

FactorialContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitFactorial(this);
	}
};

FactorialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitFactorial(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateMatrixInitializerContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateMatrixInitializerContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateMatrixInitializerContext.prototype.constructor = EvaluateMatrixInitializerContext;

CalcParser.EvaluateMatrixInitializerContext = EvaluateMatrixInitializerContext;

EvaluateMatrixInitializerContext.prototype.matrixInitializer = function() {
    return this.getTypedRuleContext(MatrixInitializerContext,0);
};
EvaluateMatrixInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateMatrixInitializer(this);
	}
};

EvaluateMatrixInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateMatrixInitializer(this);
	}
};

EvaluateMatrixInitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateMatrixInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateListContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateListContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateListContext.prototype.constructor = EvaluateListContext;

CalcParser.EvaluateListContext = EvaluateListContext;

EvaluateListContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};
EvaluateListContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateList(this);
	}
};

EvaluateListContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateList(this);
	}
};

EvaluateListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateList(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateMatrixElementContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateMatrixElementContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateMatrixElementContext.prototype.constructor = EvaluateMatrixElementContext;

CalcParser.EvaluateMatrixElementContext = EvaluateMatrixElementContext;

EvaluateMatrixElementContext.prototype.matrixElement = function() {
    return this.getTypedRuleContext(MatrixElementContext,0);
};
EvaluateMatrixElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateMatrixElement(this);
	}
};

EvaluateMatrixElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateMatrixElement(this);
	}
};

EvaluateMatrixElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateMatrixElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateListElementContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateListElementContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateListElementContext.prototype.constructor = EvaluateListElementContext;

CalcParser.EvaluateListElementContext = EvaluateListElementContext;

EvaluateListElementContext.prototype.listElement = function() {
    return this.getTypedRuleContext(ListElementContext,0);
};
EvaluateListElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateListElement(this);
	}
};

EvaluateListElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateListElement(this);
	}
};

EvaluateListElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateListElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComputeContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComputeContext.prototype = Object.create(EvalExprContext.prototype);
ComputeContext.prototype.constructor = ComputeContext;

CalcParser.ComputeContext = ComputeContext;

ComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

ComputeContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
ComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterCompute(this);
	}
};

ComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitCompute(this);
	}
};

ComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateSeqContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateSeqContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateSeqContext.prototype.constructor = EvaluateSeqContext;

CalcParser.EvaluateSeqContext = EvaluateSeqContext;

EvaluateSeqContext.prototype.SEQ = function() {
    return this.getToken(CalcParser.SEQ, 0);
};

EvaluateSeqContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};
EvaluateSeqContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateSeq(this);
	}
};

EvaluateSeqContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateSeq(this);
	}
};

EvaluateSeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateSeq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegateContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateContext.prototype = Object.create(EvalExprContext.prototype);
NegateContext.prototype.constructor = NegateContext;

CalcParser.NegateContext = NegateContext;

NegateContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
NegateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterNegate(this);
	}
};

NegateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitNegate(this);
	}
};

NegateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitNegate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowerContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerContext.prototype = Object.create(EvalExprContext.prototype);
PowerContext.prototype.constructor = PowerContext;

CalcParser.PowerContext = PowerContext;

PowerContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

PowerContext.prototype.powOp = function() {
    return this.getTypedRuleContext(PowOpContext,0);
};
PowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPower(this);
	}
};

PowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPower(this);
	}
};

PowerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPower(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyContext.prototype = Object.create(EvalExprContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

CalcParser.MultiplyContext = MultiplyContext;

MultiplyContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

MultiplyContext.prototype.multOp = function() {
    return this.getTypedRuleContext(MultOpContext,0);
};
MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMultiply(this);
	}
};

MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMultiply(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EvaluateContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateContext.prototype = Object.create(EvalExprContext.prototype);
EvaluateContext.prototype.constructor = EvaluateContext;

CalcParser.EvaluateContext = EvaluateContext;

EvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
EvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluate(this);
	}
};

EvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluate(this);
	}
};

EvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExponentContext(parser, ctx) {
	EvalExprContext.call(this, parser);
    EvalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExponentContext.prototype = Object.create(EvalExprContext.prototype);
ExponentContext.prototype.constructor = ExponentContext;

CalcParser.ExponentContext = ExponentContext;

ExponentContext.prototype.EXPNT = function() {
    return this.getToken(CalcParser.EXPNT, 0);
};

ExponentContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
ExponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterExponent(this);
	}
};

ExponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitExponent(this);
	}
};

ExponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitExponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.evalExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new EvalExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, CalcParser.RULE_evalExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 265;
            this.match(CalcParser.T__0);
            this.state = 266;
            this.evalExpr(0);
            this.state = 267;
            this.match(CalcParser.T__2);
            break;

        case 2:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 269;
            this.match(CalcParser.SUB);
            this.state = 270;
            this.evalExpr(16);
            break;

        case 3:
            localctx = new ComputeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 271;
            this.func();
            this.state = 272;
            this.evalExpr(15);
            break;

        case 4:
            localctx = new ExponentContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 274;
            this.match(CalcParser.EXPNT);
            this.state = 275;
            this.evalExpr(12);
            break;

        case 5:
            localctx = new EvaluateMatrixElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 276;
            this.matrixElement();
            break;

        case 6:
            localctx = new EvaluateMatrixContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 277;
            this.matrix();
            break;

        case 7:
            localctx = new EvaluateMatrixInitializerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 278;
            this.matrixInitializer();
            break;

        case 8:
            localctx = new EvaluateListElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 279;
            this.listElement();
            break;

        case 9:
            localctx = new EvaluateListContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 280;
            this.list();
            break;

        case 10:
            localctx = new EvaluateListInitializerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 281;
            this.listInitializer();
            break;

        case 11:
            localctx = new EvaluateSeqContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 282;
            this.match(CalcParser.SEQ);
            this.state = 283;
            this.match(CalcParser.T__0);
            this.state = 284;
            this.evalExpr(0);
            this.state = 287; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 285;
                this.match(CalcParser.T__1);
                this.state = 286;
                this.evalExpr(0);
                this.state = 289; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===CalcParser.T__1);
            this.state = 291;
            this.match(CalcParser.T__2);
            break;

        case 12:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 293;
            this.variable();
            break;

        case 13:
            localctx = new ParseFloatContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 294;
            this.number(0);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 313;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 311;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 297;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 298;
                    this.powOp();
                    this.state = 299;
                    this.evalExpr(14);
                    break;

                case 2:
                    localctx = new MultiplyContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 301;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 302;
                    this.multOp();
                    this.state = 303;
                    this.evalExpr(12);
                    break;

                case 3:
                    localctx = new AddContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 305;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 306;
                    this.addOp();
                    this.state = 307;
                    this.evalExpr(11);
                    break;

                case 4:
                    localctx = new FactorialContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 309;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 310;
                    this.match(CalcParser.T__4);
                    break;

                } 
            }
            this.state = 315;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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

function DispExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_dispExpr;
    return this;
}

DispExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DispExprContext.prototype.constructor = DispExprContext;

DispExprContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

DispExprContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};

DispExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

DispExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterDispExpr(this);
	}
};

DispExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitDispExpr(this);
	}
};

DispExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitDispExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.DispExprContext = DispExprContext;

CalcParser.prototype.dispExpr = function() {

    var localctx = new DispExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CalcParser.RULE_dispExpr);
    try {
        this.state = 319;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 316;
            this.evalExpr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 317;
            this.match(CalcParser.STRING);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 318;
            this.matrix();
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

function StoExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_stoExpr;
    return this;
}

StoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoExprContext.prototype.constructor = StoExprContext;

StoExprContext.prototype.matrixElement = function() {
    return this.getTypedRuleContext(MatrixElementContext,0);
};

StoExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

StoExprContext.prototype.listElement = function() {
    return this.getTypedRuleContext(ListElementContext,0);
};

StoExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

StoExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterStoExpr(this);
	}
};

StoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitStoExpr(this);
	}
};

StoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.StoExprContext = StoExprContext;

CalcParser.prototype.stoExpr = function() {

    var localctx = new StoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CalcParser.RULE_stoExpr);
    try {
        this.state = 326;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 321;
            this.matrixElement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 322;
            this.matrix();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 323;
            this.listElement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 324;
            this.list();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 325;
            this.variable();
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

function BoolExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_boolExpr;
    return this;
}

BoolExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolExprContext.prototype.constructor = BoolExprContext;


 
BoolExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function GetKeyContext(parser, ctx) {
	BoolExprContext.call(this, parser);
    BoolExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GetKeyContext.prototype = Object.create(BoolExprContext.prototype);
GetKeyContext.prototype.constructor = GetKeyContext;

CalcParser.GetKeyContext = GetKeyContext;

GetKeyContext.prototype.GETKEY = function() {
    return this.getToken(CalcParser.GETKEY, 0);
};

GetKeyContext.prototype.compOp = function() {
    return this.getTypedRuleContext(CompOpContext,0);
};

GetKeyContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};
GetKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterGetKey(this);
	}
};

GetKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitGetKey(this);
	}
};

GetKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitGetKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ReduceBoolExprContext(parser, ctx) {
	BoolExprContext.call(this, parser);
    BoolExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReduceBoolExprContext.prototype = Object.create(BoolExprContext.prototype);
ReduceBoolExprContext.prototype.constructor = ReduceBoolExprContext;

CalcParser.ReduceBoolExprContext = ReduceBoolExprContext;

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

ReduceBoolExprContext.prototype.boolOp = function() {
    return this.getTypedRuleContext(BoolOpContext,0);
};
ReduceBoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterReduceBoolExpr(this);
	}
};

ReduceBoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitReduceBoolExpr(this);
	}
};

ReduceBoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.CompareContext = CompareContext;

CompareContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

CompareContext.prototype.compOp = function() {
    return this.getTypedRuleContext(CompOpContext,0);
};
CompareContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterCompare(this);
	}
};

CompareContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitCompare(this);
	}
};

CompareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitCompare(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.boolExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BoolExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, CalcParser.RULE_boolExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.T__0:
        case CalcParser.T__5:
        case CalcParser.T__7:
        case CalcParser.T__14:
        case CalcParser.ID:
        case CalcParser.NATNUM:
        case CalcParser.ZERO:
        case CalcParser.SQRT:
        case CalcParser.COS:
        case CalcParser.SIN:
        case CalcParser.TAN:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
        case CalcParser.ABS:
        case CalcParser.INT:
        case CalcParser.SUB:
        case CalcParser.EXPNT:
        case CalcParser.LIST:
        case CalcParser.MATRIX:
        case CalcParser.PI:
        case CalcParser.SEQ:
            localctx = new CompareContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 329;
            this.evalExpr(0);
            this.state = 330;
            this.compOp();
            this.state = 331;
            this.evalExpr(0);
            break;
        case CalcParser.GETKEY:
            localctx = new GetKeyContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 333;
            this.match(CalcParser.GETKEY);
            this.state = 334;
            this.compOp();
            this.state = 335;
            this.evalExpr(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 345;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ReduceBoolExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_boolExpr);
                this.state = 339;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 340;
                this.boolOp();
                this.state = 341;
                this.boolExpr(2); 
            }
            this.state = 347;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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

function MatrixElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_matrixElement;
    return this;
}

MatrixElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixElementContext.prototype.constructor = MatrixElementContext;

MatrixElementContext.prototype.MATRIX = function() {
    return this.getToken(CalcParser.MATRIX, 0);
};

MatrixElementContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

MatrixElementContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

MatrixElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrixElement(this);
	}
};

MatrixElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrixElement(this);
	}
};

MatrixElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrixElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixElementContext = MatrixElementContext;

CalcParser.prototype.matrixElement = function() {

    var localctx = new MatrixElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CalcParser.RULE_matrixElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(CalcParser.MATRIX);
        this.state = 349;
        this.match(CalcParser.ID);
        this.state = 350;
        this.match(CalcParser.T__5);
        this.state = 351;
        this.evalExpr(0);
        this.state = 352;
        this.match(CalcParser.T__1);
        this.state = 353;
        this.evalExpr(0);
        this.state = 354;
        this.match(CalcParser.T__6);
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

function MatrixInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_matrixInitializer;
    return this;
}

MatrixInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixInitializerContext.prototype.constructor = MatrixInitializerContext;

MatrixInitializerContext.prototype.matrixRow = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatrixRowContext);
    } else {
        return this.getTypedRuleContext(MatrixRowContext,i);
    }
};

MatrixInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrixInitializer(this);
	}
};

MatrixInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrixInitializer(this);
	}
};

MatrixInitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrixInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixInitializerContext = MatrixInitializerContext;

CalcParser.prototype.matrixInitializer = function() {

    var localctx = new MatrixInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CalcParser.RULE_matrixInitializer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.match(CalcParser.T__5);
        this.state = 358; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 357;
            this.matrixRow();
            this.state = 360; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CalcParser.T__5);
        this.state = 362;
        this.match(CalcParser.T__6);
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

function MatrixRowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_matrixRow;
    return this;
}

MatrixRowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixRowContext.prototype.constructor = MatrixRowContext;

MatrixRowContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

MatrixRowContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrixRow(this);
	}
};

MatrixRowContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrixRow(this);
	}
};

MatrixRowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrixRow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixRowContext = MatrixRowContext;

CalcParser.prototype.matrixRow = function() {

    var localctx = new MatrixRowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CalcParser.RULE_matrixRow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this.match(CalcParser.T__5);
        this.state = 365;
        this.evalExpr(0);
        this.state = 370;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalcParser.T__1) {
            this.state = 366;
            this.match(CalcParser.T__1);
            this.state = 367;
            this.evalExpr(0);
            this.state = 372;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 373;
        this.match(CalcParser.T__6);
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

function ListElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_listElement;
    return this;
}

ListElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListElementContext.prototype.constructor = ListElementContext;

ListElementContext.prototype.LIST = function() {
    return this.getToken(CalcParser.LIST, 0);
};

ListElementContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

ListElementContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

ListElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterListElement(this);
	}
};

ListElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitListElement(this);
	}
};

ListElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitListElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ListElementContext = ListElementContext;

CalcParser.prototype.listElement = function() {

    var localctx = new ListElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CalcParser.RULE_listElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        this.match(CalcParser.LIST);
        this.state = 376;
        this.match(CalcParser.NATNUM);
        this.state = 377;
        this.match(CalcParser.T__5);
        this.state = 378;
        this.evalExpr(0);
        this.state = 379;
        this.match(CalcParser.T__6);
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

function ListInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_listInitializer;
    return this;
}

ListInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListInitializerContext.prototype.constructor = ListInitializerContext;

ListInitializerContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

ListInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterListInitializer(this);
	}
};

ListInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitListInitializer(this);
	}
};

ListInitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitListInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ListInitializerContext = ListInitializerContext;

CalcParser.prototype.listInitializer = function() {

    var localctx = new ListInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CalcParser.RULE_listInitializer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        this.match(CalcParser.T__7);
        this.state = 382;
        this.evalExpr(0);
        this.state = 387;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalcParser.T__1) {
            this.state = 383;
            this.match(CalcParser.T__1);
            this.state = 384;
            this.evalExpr(0);
            this.state = 389;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 390;
        this.match(CalcParser.T__8);
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
    if(listener instanceof CalcListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitHeader(this);
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
    this.enterRule(localctx, 48, CalcParser.RULE_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.startHeader();
        this.state = 393;
        this.attributes();
        this.state = 394;
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
    this.ruleIndex = CalcParser.RULE_attributes;
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
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
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
    if(listener instanceof CalcListener ) {
        listener.enterAttributes(this);
	}
};

AttributesContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAttributes(this);
	}
};

AttributesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAttributes(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AttributesContext = AttributesContext;

CalcParser.prototype.attributes = function() {

    var localctx = new AttributesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CalcParser.RULE_attributes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 406;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CalcParser.TEXT:
                this.state = 396;
                this.headerAttr();
                this.state = 397;
                this.match(CalcParser.T__9);
                this.state = 398;
                this.headerValue();
                this.state = 399;
                this.match(CalcParser.NEWLINE);
                break;
            case CalcParser.T__10:
                this.state = 401;
                this.match(CalcParser.T__10);
                this.state = 402;
                this.match(CalcParser.T__9);
                this.state = 403;
                this.fileName(0);
                this.state = 404;
                this.match(CalcParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 408; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CalcParser.T__10 || _la===CalcParser.TEXT);
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
    this.ruleIndex = CalcParser.RULE_headerAttr;
    return this;
}

HeaderAttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderAttrContext.prototype.constructor = HeaderAttrContext;

HeaderAttrContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.TEXT);
    } else {
        return this.getToken(CalcParser.TEXT, i);
    }
};


HeaderAttrContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

HeaderAttrContext.prototype.WS = function() {
    return this.getToken(CalcParser.WS, 0);
};

HeaderAttrContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterHeaderAttr(this);
	}
};

HeaderAttrContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitHeaderAttr(this);
	}
};

HeaderAttrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitHeaderAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.HeaderAttrContext = HeaderAttrContext;

CalcParser.prototype.headerAttr = function() {

    var localctx = new HeaderAttrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, CalcParser.RULE_headerAttr);
    try {
        this.state = 416;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 410;
            this.match(CalcParser.TEXT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 411;
            this.match(CalcParser.TEXT);
            this.state = 412;
            this.match(CalcParser.NATNUM);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 413;
            this.match(CalcParser.TEXT);
            this.state = 414;
            this.match(CalcParser.WS);
            this.state = 415;
            this.match(CalcParser.TEXT);
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

function HeaderValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_headerValue;
    return this;
}

HeaderValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderValueContext.prototype.constructor = HeaderValueContext;

HeaderValueContext.prototype.TEXT = function() {
    return this.getToken(CalcParser.TEXT, 0);
};

HeaderValueContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

HeaderValueContext.prototype.ZERO = function() {
    return this.getToken(CalcParser.ZERO, 0);
};

HeaderValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterHeaderValue(this);
	}
};

HeaderValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitHeaderValue(this);
	}
};

HeaderValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitHeaderValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.HeaderValueContext = HeaderValueContext;

CalcParser.prototype.headerValue = function() {

    var localctx = new HeaderValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, CalcParser.RULE_headerValue);
    try {
        this.state = 422;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.TEXT:
            this.enterOuterAlt(localctx, 1);
            this.state = 418;
            this.match(CalcParser.TEXT);
            break;
        case CalcParser.NATNUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 419;
            this.match(CalcParser.NATNUM);
            break;
        case CalcParser.ZERO:
            this.enterOuterAlt(localctx, 3);
            this.state = 420;
            this.match(CalcParser.ZERO);
            break;
        case CalcParser.NEWLINE:
            this.enterOuterAlt(localctx, 4);

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

function FileNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_fileName;
    return this;
}

FileNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileNameContext.prototype.constructor = FileNameContext;

FileNameContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.TEXT);
    } else {
        return this.getToken(CalcParser.TEXT, i);
    }
};


FileNameContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.ID);
    } else {
        return this.getToken(CalcParser.ID, i);
    }
};


FileNameContext.prototype.NATNUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.NATNUM);
    } else {
        return this.getToken(CalcParser.NATNUM, i);
    }
};


FileNameContext.prototype.ZERO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.ZERO);
    } else {
        return this.getToken(CalcParser.ZERO, i);
    }
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

FileNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterFileName(this);
	}
};

FileNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitFileName(this);
	}
};

FileNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitFileName(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.fileName = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new FileNameContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 56;
    this.enterRecursionRule(localctx, 56, CalcParser.RULE_fileName, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 425;
        		_la = this._input.LA(1);
        		if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.TEXT) | (1 << CalcParser.ZERO))) !== 0))) {
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
        	this.state = 428; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this._ctx.stop = this._input.LT(-1);
        this.state = 441;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FileNameContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_fileName);
                this.state = 430;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 432; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 431;
                		_la = this._input.LA(1);
                		if(!(_la===CalcParser.ADD || _la===CalcParser.SUB)) {
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
                	this.state = 434; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,33, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                this.state = 437;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
                if(la_===1) {
                    this.state = 436;
                    this.fileName(0);

                } 
            }
            this.state = 443;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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
    this.ruleIndex = CalcParser.RULE_startHeader;
    return this;
}

StartHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartHeaderContext.prototype.constructor = StartHeaderContext;

StartHeaderContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

StartHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterStartHeader(this);
	}
};

StartHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitStartHeader(this);
	}
};

StartHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitStartHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.StartHeaderContext = StartHeaderContext;

CalcParser.prototype.startHeader = function() {

    var localctx = new StartHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, CalcParser.RULE_startHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 444;
        this.match(CalcParser.T__11);
        this.state = 445;
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

function EndHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_endHeader;
    return this;
}

EndHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndHeaderContext.prototype.constructor = EndHeaderContext;

EndHeaderContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EndHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEndHeader(this);
	}
};

EndHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEndHeader(this);
	}
};

EndHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEndHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EndHeaderContext = EndHeaderContext;

CalcParser.prototype.endHeader = function() {

    var localctx = new EndHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, CalcParser.RULE_endHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 447;
        this.match(CalcParser.T__12);
        this.state = 448;
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

function EndFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_endFile;
    return this;
}

EndFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndFileContext.prototype.constructor = EndFileContext;

EndFileContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
    }
};


EndFileContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEndFile(this);
	}
};

EndFileContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEndFile(this);
	}
};

EndFileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEndFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EndFileContext = EndFileContext;

CalcParser.prototype.endFile = function() {

    var localctx = new EndFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, CalcParser.RULE_endFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 450;
        this.match(CalcParser.T__13);
        this.state = 452; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 451;
            this.match(CalcParser.NEWLINE);
            this.state = 454; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CalcParser.NEWLINE);
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
    this.ruleIndex = CalcParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function() {
    return this.getToken(CalcParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

MatrixContext.prototype.ANS = function() {
    return this.getToken(CalcParser.ANS, 0);
};

MatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrix(this);
	}
};

MatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrix(this);
	}
};

MatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixContext = MatrixContext;

CalcParser.prototype.matrix = function() {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, CalcParser.RULE_matrix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 456;
        this.match(CalcParser.MATRIX);
        this.state = 457;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.ID || _la===CalcParser.ANS)) {
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

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function() {
    return this.getToken(CalcParser.LIST, 0);
};

ListContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ListContext = ListContext;

CalcParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, CalcParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 459;
        this.match(CalcParser.LIST);
        this.state = 460;
        this.match(CalcParser.NATNUM);
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
    this.ruleIndex = CalcParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.VariableContext = VariableContext;

CalcParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this.match(CalcParser.ID);
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

function LblContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_lbl;
    return this;
}

LblContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LblContext.prototype.constructor = LblContext;

LblContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

LblContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

LblContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterLbl(this);
	}
};

LblContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitLbl(this);
	}
};

LblContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitLbl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.LblContext = LblContext;

CalcParser.prototype.lbl = function() {

    var localctx = new LblContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, CalcParser.RULE_lbl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.ID || _la===CalcParser.NATNUM)) {
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

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NATNUM = function() {
    return this.getToken(CalcParser.NATNUM, 0);
};

NumberContext.prototype.PI = function() {
    return this.getToken(CalcParser.PI, 0);
};

NumberContext.prototype.ZERO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.ZERO);
    } else {
        return this.getToken(CalcParser.ZERO, i);
    }
};


NumberContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.number = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumberContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 72;
    this.enterRecursionRule(localctx, 72, CalcParser.RULE_number, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 478;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.NATNUM:
            this.state = 467;
            this.match(CalcParser.NATNUM);
            break;
        case CalcParser.PI:
            this.state = 468;
            this.match(CalcParser.PI);
            break;
        case CalcParser.ZERO:
            this.state = 469;
            this.match(CalcParser.ZERO);
            break;
        case CalcParser.T__14:
            this.state = 470;
            this.match(CalcParser.T__14);
            this.state = 474;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 471;
                    this.match(CalcParser.ZERO); 
                }
                this.state = 476;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
            }

            this.state = 477;
            this.number(1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 491;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new NumberContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_number);
                this.state = 480;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 481;
                this.match(CalcParser.T__14);
                this.state = 485;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 482;
                        this.match(CalcParser.ZERO); 
                    }
                    this.state = 487;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
                }

                this.state = 488;
                this.number(3); 
            }
            this.state = 493;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
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

function EndStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_endStat;
    return this;
}

EndStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatContext.prototype.constructor = EndStatContext;

EndStatContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
    }
};


EndStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEndStat(this);
	}
};

EndStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEndStat(this);
	}
};

EndStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEndStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EndStatContext = EndStatContext;

CalcParser.prototype.endStat = function() {

    var localctx = new EndStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, CalcParser.RULE_endStat);
    try {
        this.state = 500;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.NEWLINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 495; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 494;
            		this.match(CalcParser.NEWLINE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 497; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,41, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        case CalcParser.T__9:
            this.enterOuterAlt(localctx, 2);
            this.state = 499;
            this.match(CalcParser.T__9);
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

function EndProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_endProg;
    return this;
}

EndProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndProgContext.prototype.constructor = EndProgContext;

EndProgContext.prototype.RETURN = function() {
    return this.getToken(CalcParser.RETURN, 0);
};

EndProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEndProg(this);
	}
};

EndProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEndProg(this);
	}
};

EndProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEndProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EndProgContext = EndProgContext;

CalcParser.prototype.endProg = function() {

    var localctx = new EndProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, CalcParser.RULE_endProg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 502;
        this.match(CalcParser.RETURN);
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
    this.ruleIndex = CalcParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function() {
    return this.getToken(CalcParser.SQRT, 0);
};

FuncContext.prototype.COS = function() {
    return this.getToken(CalcParser.COS, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(CalcParser.SIN, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(CalcParser.TAN, 0);
};

FuncContext.prototype.ACOS = function() {
    return this.getToken(CalcParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function() {
    return this.getToken(CalcParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function() {
    return this.getToken(CalcParser.ATAN, 0);
};

FuncContext.prototype.ABS = function() {
    return this.getToken(CalcParser.ABS, 0);
};

FuncContext.prototype.INT = function() {
    return this.getToken(CalcParser.INT, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.FuncContext = FuncContext;

CalcParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, CalcParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 504;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.ABS) | (1 << CalcParser.INT))) !== 0))) {
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
    this.ruleIndex = CalcParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function() {
    return this.getToken(CalcParser.ADD, 0);
};

AddOpContext.prototype.SUB = function() {
    return this.getToken(CalcParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAddOp(this);
	}
};

AddOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AddOpContext = AddOpContext;

CalcParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, CalcParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 506;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.ADD || _la===CalcParser.SUB)) {
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
    this.ruleIndex = CalcParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function() {
    return this.getToken(CalcParser.MUL, 0);
};

MultOpContext.prototype.DIV = function() {
    return this.getToken(CalcParser.DIV, 0);
};

MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMultOp(this);
	}
};

MultOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MultOpContext = MultOpContext;

CalcParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, CalcParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 508;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.MUL || _la===CalcParser.DIV)) {
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

function PowOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_powOp;
    return this;
}

PowOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowOpContext.prototype.constructor = PowOpContext;

PowOpContext.prototype.POW = function() {
    return this.getToken(CalcParser.POW, 0);
};

PowOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPowOp(this);
	}
};

PowOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPowOp(this);
	}
};

PowOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPowOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.PowOpContext = PowOpContext;

CalcParser.prototype.powOp = function() {

    var localctx = new PowOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, CalcParser.RULE_powOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 510;
        this.match(CalcParser.POW);
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
    this.ruleIndex = CalcParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQ = function() {
    return this.getToken(CalcParser.EQ, 0);
};

CompOpContext.prototype.NE = function() {
    return this.getToken(CalcParser.NE, 0);
};

CompOpContext.prototype.GT = function() {
    return this.getToken(CalcParser.GT, 0);
};

CompOpContext.prototype.GE = function() {
    return this.getToken(CalcParser.GE, 0);
};

CompOpContext.prototype.LT = function() {
    return this.getToken(CalcParser.LT, 0);
};

CompOpContext.prototype.LE = function() {
    return this.getToken(CalcParser.LE, 0);
};

CompOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterCompOp(this);
	}
};

CompOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitCompOp(this);
	}
};

CompOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.CompOpContext = CompOpContext;

CalcParser.prototype.compOp = function() {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, CalcParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 512;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (CalcParser.EQ - 37)) | (1 << (CalcParser.NE - 37)) | (1 << (CalcParser.GT - 37)) | (1 << (CalcParser.GE - 37)) | (1 << (CalcParser.LT - 37)) | (1 << (CalcParser.LE - 37)))) !== 0))) {
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

function BoolOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_boolOp;
    return this;
}

BoolOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOpContext.prototype.constructor = BoolOpContext;

BoolOpContext.prototype.AND = function() {
    return this.getToken(CalcParser.AND, 0);
};

BoolOpContext.prototype.OR = function() {
    return this.getToken(CalcParser.OR, 0);
};

BoolOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBoolOp(this);
	}
};

BoolOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBoolOp(this);
	}
};

BoolOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBoolOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BoolOpContext = BoolOpContext;

CalcParser.prototype.boolOp = function() {

    var localctx = new BoolOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, CalcParser.RULE_boolOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 514;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.AND || _la===CalcParser.OR)) {
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


CalcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 15:
			return this.evalExpr_sempred(localctx, predIndex);
	case 18:
			return this.boolExpr_sempred(localctx, predIndex);
	case 28:
			return this.fileName_sempred(localctx, predIndex);
	case 36:
			return this.number_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalcParser.prototype.evalExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 14);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CalcParser.prototype.boolExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CalcParser.prototype.fileName_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CalcParser.prototype.number_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalcParser = CalcParser;
