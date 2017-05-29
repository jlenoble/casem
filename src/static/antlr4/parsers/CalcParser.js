// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003<\u0169\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0007\u0003T\n\u0003\f\u0003\u000e\u0003W\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0006\u0004\\\n\u0004\r\u0004\u000e\u0004]\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004c\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005i\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006r\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007~\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u0096\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00a4\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ae\n\f\u0003\f\u0005\f",
    "\u00b1\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00bf\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00cf\n",
    "\u0012\f\u0012\u000e\u0012\u00d2\u000b\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00e3\n\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0007\u0013\u00ef\n\u0013\f\u0013\u000e\u0013\u00f2",
    "\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00f7\n",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00fd",
    "\n\u0014\f\u0014\u000e\u0014\u0100\u000b\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0105\n\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0007\u0015\u010b\n\u0015\f\u0015\u000e\u0015\u010e",
    "\u000b\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u0112\n\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0006",
    "\u0019\u011a\n\u0019\r\u0019\u000e\u0019\u011b\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0124\n",
    "\u001a\f\u001a\u000e\u001a\u0127\u000b\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u012f\n",
    "\u001b\f\u001b\u000e\u001b\u0132\u000b\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u014b\n\u001e\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0005(\u0167\n",
    "(\u0003(\u0002\u0006\"$&()\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN\u0002",
    "\b\u0004\u0002\u0006\u0006\u0011\u0011\b\u0002\u0019\u0019\u001c\u001c",
    "\u001f\u001f$$((,,\u0004\u0002\n\n11\u0004\u0002\u0015\u0015*+\u0004",
    "\u0002\t\t77\b\u0002\u0007\b\f\r\u0013\u0013\"\"4588\u0002\u016c\u0002",
    "P\u0003\u0002\u0002\u0002\u0004U\u0003\u0002\u0002\u0002\u0006b\u0003",
    "\u0002\u0002\u0002\bh\u0003\u0002\u0002\u0002\nj\u0003\u0002\u0002\u0002",
    "\fu\u0003\u0002\u0002\u0002\u000e\u0083\u0003\u0002\u0002\u0002\u0010",
    "\u0089\u0003\u0002\u0002\u0002\u0012\u0095\u0003\u0002\u0002\u0002\u0014",
    "\u00a3\u0003\u0002\u0002\u0002\u0016\u00b0\u0003\u0002\u0002\u0002\u0018",
    "\u00b2\u0003\u0002\u0002\u0002\u001a\u00b6\u0003\u0002\u0002\u0002\u001c",
    "\u00be\u0003\u0002\u0002\u0002\u001e\u00c0\u0003\u0002\u0002\u0002 ",
    "\u00c3\u0003\u0002\u0002\u0002\"\u00c5\u0003\u0002\u0002\u0002$\u00e2",
    "\u0003\u0002\u0002\u0002&\u00f6\u0003\u0002\u0002\u0002(\u0104\u0003",
    "\u0002\u0002\u0002*\u0111\u0003\u0002\u0002\u0002,\u0113\u0003\u0002",
    "\u0002\u0002.\u0115\u0003\u0002\u0002\u00020\u0117\u0003\u0002\u0002",
    "\u00022\u011f\u0003\u0002\u0002\u00024\u012a\u0003\u0002\u0002\u0002",
    "6\u0135\u0003\u0002\u0002\u00028\u013c\u0003\u0002\u0002\u0002:\u014a",
    "\u0003\u0002\u0002\u0002<\u014c\u0003\u0002\u0002\u0002>\u014e\u0003",
    "\u0002\u0002\u0002@\u0150\u0003\u0002\u0002\u0002B\u0152\u0003\u0002",
    "\u0002\u0002D\u0154\u0003\u0002\u0002\u0002F\u0156\u0003\u0002\u0002",
    "\u0002H\u0159\u0003\u0002\u0002\u0002J\u015c\u0003\u0002\u0002\u0002",
    "L\u015e\u0003\u0002\u0002\u0002N\u0166\u0003\u0002\u0002\u0002PQ\u0005",
    "\u0004\u0003\u0002Q\u0003\u0003\u0002\u0002\u0002RT\u0005\u0006\u0004",
    "\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002V\u0005\u0003\u0002\u0002\u0002",
    "WU\u0003\u0002\u0002\u0002XY\u0005\u0012\n\u0002YZ\u0005 \u0011\u0002",
    "Z\\\u0003\u0002\u0002\u0002[X\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^c\u0003",
    "\u0002\u0002\u0002_`\u0005\b\u0005\u0002`a\u0005 \u0011\u0002ac\u0003",
    "\u0002\u0002\u0002b[\u0003\u0002\u0002\u0002b_\u0003\u0002\u0002\u0002",
    "c\u0007\u0003\u0002\u0002\u0002di\u0005\n\u0006\u0002ei\u0005\f\u0007",
    "\u0002fi\u0005\u000e\b\u0002gi\u0005\u0010\t\u0002hd\u0003\u0002\u0002",
    "\u0002he\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hg\u0003\u0002",
    "\u0002\u0002i\t\u0003\u0002\u0002\u0002jk\u0007 \u0002\u0002kl\u0005",
    "\"\u0012\u0002lm\u0005 \u0011\u0002mn\u00079\u0002\u0002nq\u0005\u0004",
    "\u0003\u0002op\u0007\u0018\u0002\u0002pr\u0005\u0004\u0003\u0002qo\u0003",
    "\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002",
    "st\u0007!\u0002\u0002t\u000b\u0003\u0002\u0002\u0002uv\u0007\u001b\u0002",
    "\u0002vw\u0005$\u0013\u0002wx\u0007\u000b\u0002\u0002xy\u0005J&\u0002",
    "yz\u0007:\u0002\u0002z}\u0005$\u0013\u0002{|\u00076\u0002\u0002|~\u0005",
    "$\u0013\u0002}{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f",
    "\u0003\u0002\u0002\u0002\u007f\u0080\u0005 \u0011\u0002\u0080\u0081",
    "\u0005\u0004\u0003\u0002\u0081\u0082\u0007-\u0002\u0002\u0082\r\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0007\u0016\u0002\u0002\u0084\u0085\u0005",
    " \u0011\u0002\u0085\u0086\u0005\u0004\u0003\u0002\u0086\u0087\u0007",
    "\'\u0002\u0002\u0087\u0088\u0005\"\u0012\u0002\u0088\u000f\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0007;\u0002\u0002\u008a\u008b\u0005\"\u0012",
    "\u0002\u008b\u008c\u0005 \u0011\u0002\u008c\u008d\u0005\u0004\u0003",
    "\u0002\u008d\u008e\u0007<\u0002\u0002\u008e\u0011\u0003\u0002\u0002",
    "\u0002\u008f\u0096\u0005\u0014\u000b\u0002\u0090\u0096\u0005\u0016\f",
    "\u0002\u0091\u0096\u0005\u0018\r\u0002\u0092\u0096\u0005\u001a\u000e",
    "\u0002\u0093\u0096\u0005\u001c\u000f\u0002\u0094\u0096\u0005\u001e\u0010",
    "\u0002\u0095\u008f\u0003\u0002\u0002\u0002\u0095\u0090\u0003\u0002\u0002",
    "\u0002\u0095\u0091\u0003\u0002\u0002\u0002\u0095\u0092\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0094\u0003\u0002\u0002",
    "\u0002\u0096\u0013\u0003\u0002\u0002\u0002\u0097\u0098\u0005$\u0013",
    "\u0002\u0098\u0099\u0007\u000b\u0002\u0002\u0099\u009a\u0005*\u0016",
    "\u0002\u009a\u00a4\u0003\u0002\u0002\u0002\u009b\u009c\u0005&\u0014",
    "\u0002\u009c\u009d\u0007\u000b\u0002\u0002\u009d\u009e\u0005,\u0017",
    "\u0002\u009e\u00a4\u0003\u0002\u0002\u0002\u009f\u00a0\u0005(\u0015",
    "\u0002\u00a0\u00a1\u0007\u000b\u0002\u0002\u00a1\u00a2\u0005.\u0018",
    "\u0002\u00a2\u00a4\u0003\u0002\u0002\u0002\u00a3\u0097\u0003\u0002\u0002",
    "\u0002\u00a3\u009b\u0003\u0002\u0002\u0002\u00a3\u009f\u0003\u0002\u0002",
    "\u0002\u00a4\u0015\u0003\u0002\u0002\u0002\u00a5\u00b1\u0007\u0005\u0002",
    "\u0002\u00a6\u00a7\u0007&\u0002\u0002\u00a7\u00a8\u0005$\u0013\u0002",
    "\u00a8\u00a9\u0007\u0012\u0002\u0002\u00a9\u00aa\u0005$\u0013\u0002",
    "\u00aa\u00ad\u0007\u0012\u0002\u0002\u00ab\u00ae\u0007\u0005\u0002\u0002",
    "\u00ac\u00ae\u0005$\u0013\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002",
    "\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ae\u00b1\u0003\u0002\u0002\u0002",
    "\u00af\u00b1\u0007\u0010\u0002\u0002\u00b0\u00a5\u0003\u0002\u0002\u0002",
    "\u00b0\u00a6\u0003\u0002\u0002\u0002\u00b0\u00af\u0003\u0002\u0002\u0002",
    "\u00b1\u0017\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u001d\u0002\u0002",
    "\u00b3\u00b4\u0007\u000b\u0002\u0002\u00b4\u00b5\u0005*\u0016\u0002",
    "\u00b5\u0019\u0003\u0002\u0002\u0002\u00b6\u00b7\u0005\"\u0012\u0002",
    "\u00b7\u00b8\u0007\u001a\u0002\u0002\u00b8\u00b9\u0005\u0012\n\u0002",
    "\u00b9\u001b\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u001e\u0002\u0002",
    "\u00bb\u00bf\u0007\u0003\u0002\u0002\u00bc\u00bd\u00073\u0002\u0002",
    "\u00bd\u00bf\u0007\u0005\u0002\u0002\u00be\u00ba\u0003\u0002\u0002\u0002",
    "\u00be\u00bc\u0003\u0002\u0002\u0002\u00bf\u001d\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0007#\u0002\u0002\u00c1\u00c2\u0007\u0003\u0002\u0002",
    "\u00c2\u001f\u0003\u0002\u0002\u0002\u00c3\u00c4\t\u0002\u0002\u0002",
    "\u00c4!\u0003\u0002\u0002\u0002\u00c5\u00c6\b\u0012\u0001\u0002\u00c6",
    "\u00c7\u0005$\u0013\u0002\u00c7\u00c8\u0005<\u001f\u0002\u00c8\u00c9",
    "\u0005$\u0013\u0002\u00c9\u00d0\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\f\u0003\u0002\u0002\u00cb\u00cc\u0005> \u0002\u00cc\u00cd\u0005\"\u0012",
    "\u0004\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00ca\u0003\u0002\u0002",
    "\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1#\u0003\u0002\u0002",
    "\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d4\b\u0013\u0001",
    "\u0002\u00d4\u00d5\u00070\u0002\u0002\u00d5\u00d6\u0005$\u0013\u0002",
    "\u00d6\u00d7\u0007\u0014\u0002\u0002\u00d7\u00e3\u0003\u0002\u0002\u0002",
    "\u00d8\u00d9\u00077\u0002\u0002\u00d9\u00e3\u0005$\u0013\f\u00da\u00db",
    "\u0005D#\u0002\u00db\u00dc\u0005$\u0013\u000b\u00dc\u00e3\u0003\u0002",
    "\u0002\u0002\u00dd\u00e3\u00056\u001c\u0002\u00de\u00e3\u00058\u001d",
    "\u0002\u00df\u00e3\u0005J&\u0002\u00e0\u00e3\u0005L\'\u0002\u00e1\u00e3",
    "\u0005N(\u0002\u00e2\u00d3\u0003\u0002\u0002\u0002\u00e2\u00d8\u0003",
    "\u0002\u0002\u0002\u00e2\u00da\u0003\u0002\u0002\u0002\u00e2\u00dd\u0003",
    "\u0002\u0002\u0002\u00e2\u00de\u0003\u0002\u0002\u0002\u00e2\u00df\u0003",
    "\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e1\u0003",
    "\u0002\u0002\u0002\u00e3\u00f0\u0003\u0002\u0002\u0002\u00e4\u00e5\f",
    "\t\u0002\u0002\u00e5\u00e6\u0005@!\u0002\u00e6\u00e7\u0005$\u0013\n",
    "\u00e7\u00ef\u0003\u0002\u0002\u0002\u00e8\u00e9\f\b\u0002\u0002\u00e9",
    "\u00ea\u0005B\"\u0002\u00ea\u00eb\u0005$\u0013\t\u00eb\u00ef\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\f\n\u0002\u0002\u00ed\u00ef\u0005:\u001e\u0002",
    "\u00ee\u00e4\u0003\u0002\u0002\u0002\u00ee\u00e8\u0003\u0002\u0002\u0002",
    "\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f2\u0003\u0002\u0002\u0002",
    "\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002",
    "\u00f1%\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002",
    "\u00f3\u00f4\b\u0014\u0001\u0002\u00f4\u00f7\u0005F$\u0002\u00f5\u00f7",
    "\u00050\u0019\u0002\u00f6\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f5",
    "\u0003\u0002\u0002\u0002\u00f7\u00fe\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\f\u0005\u0002\u0002\u00f9\u00fa\u0005B\"\u0002\u00fa\u00fb\u0005&\u0014",
    "\u0006\u00fb\u00fd\u0003\u0002\u0002\u0002\u00fc\u00f8\u0003\u0002\u0002",
    "\u0002\u00fd\u0100\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002",
    "\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\'\u0003\u0002\u0002",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0101\u0102\b\u0015\u0001",
    "\u0002\u0102\u0105\u0005H%\u0002\u0103\u0105\u00052\u001a\u0002\u0104",
    "\u0101\u0003\u0002\u0002\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0105",
    "\u010c\u0003\u0002\u0002\u0002\u0106\u0107\f\u0005\u0002\u0002\u0107",
    "\u0108\u0005B\"\u0002\u0108\u0109\u0005(\u0015\u0006\u0109\u010b\u0003",
    "\u0002\u0002\u0002\u010a\u0106\u0003\u0002\u0002\u0002\u010b\u010e\u0003",
    "\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003",
    "\u0002\u0002\u0002\u010d)\u0003\u0002\u0002\u0002\u010e\u010c\u0003",
    "\u0002\u0002\u0002\u010f\u0112\u00056\u001c\u0002\u0110\u0112\u0005",
    "J&\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0110\u0003\u0002",
    "\u0002\u0002\u0112+\u0003\u0002\u0002\u0002\u0113\u0114\u0005F$\u0002",
    "\u0114-\u0003\u0002\u0002\u0002\u0115\u0116\u0005H%\u0002\u0116/\u0003",
    "\u0002\u0002\u0002\u0117\u0119\u0007.\u0002\u0002\u0118\u011a\u0005",
    "4\u001b\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u011a\u011b\u0003",
    "\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002\u011b\u011c\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d\u011e\u0007",
    "\u000e\u0002\u0002\u011e1\u0003\u0002\u0002\u0002\u011f\u0120\u0007",
    "/\u0002\u0002\u0120\u0125\u0005$\u0013\u0002\u0121\u0122\u0007\u0012",
    "\u0002\u0002\u0122\u0124\u0005$\u0013\u0002\u0123\u0121\u0003\u0002",
    "\u0002\u0002\u0124\u0127\u0003\u0002\u0002\u0002\u0125\u0123\u0003\u0002",
    "\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0128\u0003\u0002",
    "\u0002\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u0128\u0129\u0007\u000f",
    "\u0002\u0002\u01293\u0003\u0002\u0002\u0002\u012a\u012b\u0007.\u0002",
    "\u0002\u012b\u0130\u0005$\u0013\u0002\u012c\u012d\u0007\u0012\u0002",
    "\u0002\u012d\u012f\u0005$\u0013\u0002\u012e\u012c\u0003\u0002\u0002",
    "\u0002\u012f\u0132\u0003\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002",
    "\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0133\u0003\u0002\u0002",
    "\u0002\u0132\u0130\u0003\u0002\u0002\u0002\u0133\u0134\u0007\u000e\u0002",
    "\u0002\u01345\u0003\u0002\u0002\u0002\u0135\u0136\u0005F$\u0002\u0136",
    "\u0137\u0007.\u0002\u0002\u0137\u0138\u0005$\u0013\u0002\u0138\u0139",
    "\u0007\u0012\u0002\u0002\u0139\u013a\u0005$\u0013\u0002\u013a\u013b",
    "\u0007\u000e\u0002\u0002\u013b7\u0003\u0002\u0002\u0002\u013c\u013d",
    "\u0005H%\u0002\u013d\u013e\u0007.\u0002\u0002\u013e\u013f\u0005$\u0013",
    "\u0002\u013f\u0140\u0007\u000e\u0002\u0002\u01409\u0003\u0002\u0002",
    "\u0002\u0141\u0142\u00070\u0002\u0002\u0142\u0143\u0005$\u0013\u0002",
    "\u0143\u0144\u0007\u0014\u0002\u0002\u0144\u014b\u0003\u0002\u0002\u0002",
    "\u0145\u0146\u0005D#\u0002\u0146\u0147\u0005$\u0013\u0002\u0147\u014b",
    "\u0003\u0002\u0002\u0002\u0148\u014b\u0005J&\u0002\u0149\u014b\u0005",
    "L\'\u0002\u014a\u0141\u0003\u0002\u0002\u0002\u014a\u0145\u0003\u0002",
    "\u0002\u0002\u014a\u0148\u0003\u0002\u0002\u0002\u014a\u0149\u0003\u0002",
    "\u0002\u0002\u014b;\u0003\u0002\u0002\u0002\u014c\u014d\t\u0003\u0002",
    "\u0002\u014d=\u0003\u0002\u0002\u0002\u014e\u014f\t\u0004\u0002\u0002",
    "\u014f?\u0003\u0002\u0002\u0002\u0150\u0151\t\u0005\u0002\u0002\u0151",
    "A\u0003\u0002\u0002\u0002\u0152\u0153\t\u0006\u0002\u0002\u0153C\u0003",
    "\u0002\u0002\u0002\u0154\u0155\t\u0007\u0002\u0002\u0155E\u0003\u0002",
    "\u0002\u0002\u0156\u0157\u0007)\u0002\u0002\u0157\u0158\u0007\u0003",
    "\u0002\u0002\u0158G\u0003\u0002\u0002\u0002\u0159\u015a\u0007%\u0002",
    "\u0002\u015a\u015b\u0007\u0004\u0002\u0002\u015bI\u0003\u0002\u0002",
    "\u0002\u015c\u015d\u0007\u0003\u0002\u0002\u015dK\u0003\u0002\u0002",
    "\u0002\u015e\u015f\u00072\u0002\u0002\u015fM\u0003\u0002\u0002\u0002",
    "\u0160\u0167\u0007\u0004\u0002\u0002\u0161\u0162\u0007\u0017\u0002\u0002",
    "\u0162\u0167\u0007\u0004\u0002\u0002\u0163\u0164\u0007\u0004\u0002\u0002",
    "\u0164\u0165\u0007\u0017\u0002\u0002\u0165\u0167\u0007\u0004\u0002\u0002",
    "\u0166\u0160\u0003\u0002\u0002\u0002\u0166\u0161\u0003\u0002\u0002\u0002",
    "\u0166\u0163\u0003\u0002\u0002\u0002\u0167O\u0003\u0002\u0002\u0002",
    "\u001bU]bhq}\u0095\u00a3\u00ad\u00b0\u00be\u00d0\u00e2\u00ee\u00f0\u00f6",
    "\u00fe\u0104\u010c\u0111\u011b\u0125\u0130\u014a\u0166"].join("");


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

var ruleNames =  [ "prog", "blocks", "block", "blockStat", "ifStat", "forStat", 
                   "doStat", "whileStat", "stat", "assignStat", "printStat", 
                   "readStat", "implyStat", "jumpStat", "labelStat", "endStat", 
                   "boolExpr", "numExpr", "matrixExpr", "listExpr", "stoExpr", 
                   "matrixStoExpr", "listStoExpr", "matrixInitializerExpr", 
                   "listInitializerExpr", "matrixRowExpr", "matrixElementExpr", 
                   "listElementExpr", "vectorExpr", "compOp", "logicOp", 
                   "multOp", "addOp", "func", "matrix", "list", "variable", 
                   "constant", "number" ];

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
CalcParser.ID = 1;
CalcParser.UINT = 2;
CalcParser.STRING = 3;
CalcParser.NEWLINE = 4;
CalcParser.ABS = 5;
CalcParser.ACOS = 6;
CalcParser.ADD = 7;
CalcParser.AND = 8;
CalcParser.ARROW = 9;
CalcParser.ASIN = 10;
CalcParser.ATAN = 11;
CalcParser.CBRA = 12;
CalcParser.CCUR = 13;
CalcParser.CLRTEXT = 14;
CalcParser.COLON = 15;
CalcParser.COMMA = 16;
CalcParser.COS = 17;
CalcParser.CPAR = 18;
CalcParser.DIV = 19;
CalcParser.DO = 20;
CalcParser.DOT = 21;
CalcParser.ELSE = 22;
CalcParser.EQ = 23;
CalcParser.FATARROW = 24;
CalcParser.FOR = 25;
CalcParser.GE = 26;
CalcParser.GETKEY = 27;
CalcParser.GOTO = 28;
CalcParser.GT = 29;
CalcParser.IF = 30;
CalcParser.IFEND = 31;
CalcParser.INT = 32;
CalcParser.LBL = 33;
CalcParser.LE = 34;
CalcParser.LIST = 35;
CalcParser.LOCATE = 36;
CalcParser.LOOPWHILE = 37;
CalcParser.LT = 38;
CalcParser.MATRIX = 39;
CalcParser.REMAIN = 40;
CalcParser.MUL = 41;
CalcParser.NE = 42;
CalcParser.NEXT = 43;
CalcParser.OBRA = 44;
CalcParser.OCUR = 45;
CalcParser.OPAR = 46;
CalcParser.OR = 47;
CalcParser.PI = 48;
CalcParser.PROG = 49;
CalcParser.SIN = 50;
CalcParser.SQRT = 51;
CalcParser.STEP = 52;
CalcParser.SUB = 53;
CalcParser.TAN = 54;
CalcParser.THEN = 55;
CalcParser.TO = 56;
CalcParser.WHILE = 57;
CalcParser.WHILEEND = 58;

CalcParser.RULE_prog = 0;
CalcParser.RULE_blocks = 1;
CalcParser.RULE_block = 2;
CalcParser.RULE_blockStat = 3;
CalcParser.RULE_ifStat = 4;
CalcParser.RULE_forStat = 5;
CalcParser.RULE_doStat = 6;
CalcParser.RULE_whileStat = 7;
CalcParser.RULE_stat = 8;
CalcParser.RULE_assignStat = 9;
CalcParser.RULE_printStat = 10;
CalcParser.RULE_readStat = 11;
CalcParser.RULE_implyStat = 12;
CalcParser.RULE_jumpStat = 13;
CalcParser.RULE_labelStat = 14;
CalcParser.RULE_endStat = 15;
CalcParser.RULE_boolExpr = 16;
CalcParser.RULE_numExpr = 17;
CalcParser.RULE_matrixExpr = 18;
CalcParser.RULE_listExpr = 19;
CalcParser.RULE_stoExpr = 20;
CalcParser.RULE_matrixStoExpr = 21;
CalcParser.RULE_listStoExpr = 22;
CalcParser.RULE_matrixInitializerExpr = 23;
CalcParser.RULE_listInitializerExpr = 24;
CalcParser.RULE_matrixRowExpr = 25;
CalcParser.RULE_matrixElementExpr = 26;
CalcParser.RULE_listElementExpr = 27;
CalcParser.RULE_vectorExpr = 28;
CalcParser.RULE_compOp = 29;
CalcParser.RULE_logicOp = 30;
CalcParser.RULE_multOp = 31;
CalcParser.RULE_addOp = 32;
CalcParser.RULE_func = 33;
CalcParser.RULE_matrix = 34;
CalcParser.RULE_list = 35;
CalcParser.RULE_variable = 36;
CalcParser.RULE_constant = 37;
CalcParser.RULE_number = 38;

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

ProgContext.prototype.blocks = function() {
    return this.getTypedRuleContext(BlocksContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.blocks();
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

function BlocksContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_blocks;
    return this;
}

BlocksContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlocksContext.prototype.constructor = BlocksContext;

BlocksContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

BlocksContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBlocks(this);
	}
};

BlocksContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBlocks(this);
	}
};

BlocksContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBlocks(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BlocksContext = BlocksContext;

CalcParser.prototype.blocks = function() {

    var localctx = new BlocksContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalcParser.RULE_blocks);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.ID) | (1 << CalcParser.UINT) | (1 << CalcParser.STRING) | (1 << CalcParser.ABS) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.CLRTEXT) | (1 << CalcParser.COS) | (1 << CalcParser.DO) | (1 << CalcParser.DOT) | (1 << CalcParser.FOR) | (1 << CalcParser.GETKEY) | (1 << CalcParser.GOTO) | (1 << CalcParser.IF))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CalcParser.INT - 32)) | (1 << (CalcParser.LBL - 32)) | (1 << (CalcParser.LIST - 32)) | (1 << (CalcParser.LOCATE - 32)) | (1 << (CalcParser.MATRIX - 32)) | (1 << (CalcParser.OBRA - 32)) | (1 << (CalcParser.OCUR - 32)) | (1 << (CalcParser.OPAR - 32)) | (1 << (CalcParser.PI - 32)) | (1 << (CalcParser.PROG - 32)) | (1 << (CalcParser.SIN - 32)) | (1 << (CalcParser.SQRT - 32)) | (1 << (CalcParser.SUB - 32)) | (1 << (CalcParser.TAN - 32)) | (1 << (CalcParser.WHILE - 32)))) !== 0)) {
            this.state = 80;
            this.block();
            this.state = 85;
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

BlockContext.prototype.blockStat = function() {
    return this.getTypedRuleContext(BlockStatContext,0);
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
        this.state = 96;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
        case CalcParser.UINT:
        case CalcParser.STRING:
        case CalcParser.ABS:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
        case CalcParser.CLRTEXT:
        case CalcParser.COS:
        case CalcParser.DOT:
        case CalcParser.GETKEY:
        case CalcParser.GOTO:
        case CalcParser.INT:
        case CalcParser.LBL:
        case CalcParser.LIST:
        case CalcParser.LOCATE:
        case CalcParser.MATRIX:
        case CalcParser.OBRA:
        case CalcParser.OCUR:
        case CalcParser.OPAR:
        case CalcParser.PI:
        case CalcParser.PROG:
        case CalcParser.SIN:
        case CalcParser.SQRT:
        case CalcParser.SUB:
        case CalcParser.TAN:
            this.enterOuterAlt(localctx, 1);
            this.state = 89; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 86;
            		this.stat();
            		this.state = 87;
            		this.endStat();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 91; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        case CalcParser.DO:
        case CalcParser.FOR:
        case CalcParser.IF:
        case CalcParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.blockStat();
            this.state = 94;
            this.endStat();
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

function BlockStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_blockStat;
    return this;
}

BlockStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatContext.prototype.constructor = BlockStatContext;

BlockStatContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

BlockStatContext.prototype.forStat = function() {
    return this.getTypedRuleContext(ForStatContext,0);
};

BlockStatContext.prototype.doStat = function() {
    return this.getTypedRuleContext(DoStatContext,0);
};

BlockStatContext.prototype.whileStat = function() {
    return this.getTypedRuleContext(WhileStatContext,0);
};

BlockStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBlockStat(this);
	}
};

BlockStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBlockStat(this);
	}
};

BlockStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBlockStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BlockStatContext = BlockStatContext;

CalcParser.prototype.blockStat = function() {

    var localctx = new BlockStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalcParser.RULE_blockStat);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 98;
            this.ifStat();
            break;
        case CalcParser.FOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 99;
            this.forStat();
            break;
        case CalcParser.DO:
            this.enterOuterAlt(localctx, 3);
            this.state = 100;
            this.doStat();
            break;
        case CalcParser.WHILE:
            this.enterOuterAlt(localctx, 4);
            this.state = 101;
            this.whileStat();
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

IfStatContext.prototype.blocks = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlocksContext);
    } else {
        return this.getTypedRuleContext(BlocksContext,i);
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
    this.enterRule(localctx, 8, CalcParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(CalcParser.IF);
        this.state = 105;
        this.boolExpr(0);
        this.state = 106;
        this.endStat();
        this.state = 107;
        this.match(CalcParser.THEN);
        this.state = 108;
        this.blocks();
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CalcParser.ELSE) {
            this.state = 109;
            this.match(CalcParser.ELSE);
            this.state = 110;
            this.blocks();
        }

        this.state = 113;
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

ForStatContext.prototype.numExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext,i);
    }
};

ForStatContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

ForStatContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ForStatContext.prototype.TO = function() {
    return this.getToken(CalcParser.TO, 0);
};

ForStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

ForStatContext.prototype.blocks = function() {
    return this.getTypedRuleContext(BlocksContext,0);
};

ForStatContext.prototype.NEXT = function() {
    return this.getToken(CalcParser.NEXT, 0);
};

ForStatContext.prototype.STEP = function() {
    return this.getToken(CalcParser.STEP, 0);
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
    this.enterRule(localctx, 10, CalcParser.RULE_forStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(CalcParser.FOR);
        this.state = 116;
        this.numExpr(0);
        this.state = 117;
        this.match(CalcParser.ARROW);
        this.state = 118;
        this.variable();
        this.state = 119;
        this.match(CalcParser.TO);
        this.state = 120;
        this.numExpr(0);
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CalcParser.STEP) {
            this.state = 121;
            this.match(CalcParser.STEP);
            this.state = 122;
            this.numExpr(0);
        }

        this.state = 125;
        this.endStat();
        this.state = 126;
        this.blocks();
        this.state = 127;
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

DoStatContext.prototype.blocks = function() {
    return this.getTypedRuleContext(BlocksContext,0);
};

DoStatContext.prototype.LOOPWHILE = function() {
    return this.getToken(CalcParser.LOOPWHILE, 0);
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
    this.enterRule(localctx, 12, CalcParser.RULE_doStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(CalcParser.DO);
        this.state = 130;
        this.endStat();
        this.state = 131;
        this.blocks();
        this.state = 132;
        this.match(CalcParser.LOOPWHILE);
        this.state = 133;
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

function WhileStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_whileStat;
    return this;
}

WhileStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatContext.prototype.constructor = WhileStatContext;

WhileStatContext.prototype.WHILE = function() {
    return this.getToken(CalcParser.WHILE, 0);
};

WhileStatContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

WhileStatContext.prototype.endStat = function() {
    return this.getTypedRuleContext(EndStatContext,0);
};

WhileStatContext.prototype.blocks = function() {
    return this.getTypedRuleContext(BlocksContext,0);
};

WhileStatContext.prototype.WHILEEND = function() {
    return this.getToken(CalcParser.WHILEEND, 0);
};

WhileStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterWhileStat(this);
	}
};

WhileStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitWhileStat(this);
	}
};

WhileStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitWhileStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.WhileStatContext = WhileStatContext;

CalcParser.prototype.whileStat = function() {

    var localctx = new WhileStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CalcParser.RULE_whileStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(CalcParser.WHILE);
        this.state = 136;
        this.boolExpr(0);
        this.state = 137;
        this.endStat();
        this.state = 138;
        this.blocks();
        this.state = 139;
        this.match(CalcParser.WHILEEND);
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

StatContext.prototype.readStat = function() {
    return this.getTypedRuleContext(ReadStatContext,0);
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
    this.enterRule(localctx, 16, CalcParser.RULE_stat);
    try {
        this.state = 147;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.assignStat();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.printStat();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 143;
            this.readStat();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 144;
            this.implyStat();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 145;
            this.jumpStat();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 146;
            this.labelStat();
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

AssignStatContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

AssignStatContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

AssignStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};

AssignStatContext.prototype.matrixExpr = function() {
    return this.getTypedRuleContext(MatrixExprContext,0);
};

AssignStatContext.prototype.matrixStoExpr = function() {
    return this.getTypedRuleContext(MatrixStoExprContext,0);
};

AssignStatContext.prototype.listExpr = function() {
    return this.getTypedRuleContext(ListExprContext,0);
};

AssignStatContext.prototype.listStoExpr = function() {
    return this.getTypedRuleContext(ListStoExprContext,0);
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
    this.enterRule(localctx, 18, CalcParser.RULE_assignStat);
    try {
        this.state = 161;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 149;
            this.numExpr(0);
            this.state = 150;
            this.match(CalcParser.ARROW);
            this.state = 151;
            this.stoExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.matrixExpr(0);
            this.state = 154;
            this.match(CalcParser.ARROW);
            this.state = 155;
            this.matrixStoExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 157;
            this.listExpr(0);
            this.state = 158;
            this.match(CalcParser.ARROW);
            this.state = 159;
            this.listStoExpr();
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

ClearTextContext.prototype.CLRTEXT = function() {
    return this.getToken(CalcParser.CLRTEXT, 0);
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
        return this.getTokens(CalcParser.COMMA);
    } else {
        return this.getToken(CalcParser.COMMA, i);
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
    this.enterRule(localctx, 20, CalcParser.RULE_printStat);
    try {
        this.state = 174;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 163;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 164;
            this.match(CalcParser.LOCATE);
            this.state = 165;
            this.numExpr(0);
            this.state = 166;
            this.match(CalcParser.COMMA);
            this.state = 167;
            this.numExpr(0);
            this.state = 168;
            this.match(CalcParser.COMMA);
            this.state = 171;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CalcParser.STRING:
                this.state = 169;
                this.match(CalcParser.STRING);
                break;
            case CalcParser.ID:
            case CalcParser.UINT:
            case CalcParser.ABS:
            case CalcParser.ACOS:
            case CalcParser.ASIN:
            case CalcParser.ATAN:
            case CalcParser.COS:
            case CalcParser.DOT:
            case CalcParser.INT:
            case CalcParser.LIST:
            case CalcParser.MATRIX:
            case CalcParser.OPAR:
            case CalcParser.PI:
            case CalcParser.SIN:
            case CalcParser.SQRT:
            case CalcParser.SUB:
            case CalcParser.TAN:
                this.state = 170;
                this.numExpr(0);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case CalcParser.CLRTEXT:
            localctx = new ClearTextContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 173;
            this.match(CalcParser.CLRTEXT);
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

ReadStatContext.prototype.GETKEY = function() {
    return this.getToken(CalcParser.GETKEY, 0);
};

ReadStatContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

ReadStatContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
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
    this.enterRule(localctx, 22, CalcParser.RULE_readStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(CalcParser.GETKEY);
        this.state = 177;
        this.match(CalcParser.ARROW);
        this.state = 178;
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
        this.state = 180;
        this.boolExpr(0);
        this.state = 181;
        this.match(CalcParser.FATARROW);
        this.state = 182;
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

JumpStatContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

JumpStatContext.prototype.PROG = function() {
    return this.getToken(CalcParser.PROG, 0);
};

JumpStatContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
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
        this.state = 188;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.GOTO:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(CalcParser.GOTO);
            this.state = 185;
            this.match(CalcParser.ID);
            break;
        case CalcParser.PROG:
            this.enterOuterAlt(localctx, 2);
            this.state = 186;
            this.match(CalcParser.PROG);
            this.state = 187;
            this.match(CalcParser.STRING);
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

LabelStatContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
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
        this.state = 190;
        this.match(CalcParser.LBL);
        this.state = 191;
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

EndStatContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EndStatContext.prototype.COLON = function() {
    return this.getToken(CalcParser.COLON, 0);
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
    this.enterRule(localctx, 30, CalcParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.NEWLINE || _la===CalcParser.COLON)) {
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
    this.ruleIndex = CalcParser.RULE_boolExpr;
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

ReduceBoolExprContext.prototype.logicOp = function() {
    return this.getTypedRuleContext(LogicOpContext,0);
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
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, CalcParser.RULE_boolExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CompareContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 196;
        this.numExpr(0);
        this.state = 197;
        this.compOp();
        this.state = 198;
        this.numExpr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 206;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ReduceBoolExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_boolExpr);
                this.state = 200;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 201;
                this.logicOp();
                this.state = 202;
                this.boolExpr(2); 
            }
            this.state = 208;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
    this.ruleIndex = CalcParser.RULE_numExpr;
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

CalcParser.ComputeContext = ComputeContext;

ComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

ComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
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


function AddContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddContext.prototype = Object.create(NumExprContext.prototype);
AddContext.prototype.constructor = AddContext;

CalcParser.AddContext = AddContext;

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


function ParensContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(NumExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

CalcParser.ParensContext = ParensContext;

ParensContext.prototype.OPAR = function() {
    return this.getToken(CalcParser.OPAR, 0);
};

ParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ParensContext.prototype.CPAR = function() {
    return this.getToken(CalcParser.CPAR, 0);
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


function MatrixElementContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MatrixElementContext.prototype = Object.create(NumExprContext.prototype);
MatrixElementContext.prototype.constructor = MatrixElementContext;

CalcParser.MatrixElementContext = MatrixElementContext;

MatrixElementContext.prototype.matrixElementExpr = function() {
    return this.getTypedRuleContext(MatrixElementExprContext,0);
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


function ListElementContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListElementContext.prototype = Object.create(NumExprContext.prototype);
ListElementContext.prototype.constructor = ListElementContext;

CalcParser.ListElementContext = ListElementContext;

ListElementContext.prototype.listElementExpr = function() {
    return this.getTypedRuleContext(ListElementExprContext,0);
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


function ScalarMultContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ScalarMultContext.prototype = Object.create(NumExprContext.prototype);
ScalarMultContext.prototype.constructor = ScalarMultContext;

CalcParser.ScalarMultContext = ScalarMultContext;

ScalarMultContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ScalarMultContext.prototype.vectorExpr = function() {
    return this.getTypedRuleContext(VectorExprContext,0);
};
ScalarMultContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterScalarMult(this);
	}
};

ScalarMultContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitScalarMult(this);
	}
};

ScalarMultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.NegateContext = NegateContext;

NegateContext.prototype.SUB = function() {
    return this.getToken(CalcParser.SUB, 0);
};

NegateContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
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


function ConstEvaluateContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstEvaluateContext.prototype = Object.create(NumExprContext.prototype);
ConstEvaluateContext.prototype.constructor = ConstEvaluateContext;

CalcParser.ConstEvaluateContext = ConstEvaluateContext;

ConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitConstEvaluate(this);
	}
};

ConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.ParseContext = ParseContext;

ParseContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.MultiplyContext = MultiplyContext;

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
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateContext.prototype = Object.create(NumExprContext.prototype);
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



CalcParser.prototype.numExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 34;
    this.enterRecursionRule(localctx, 34, CalcParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.OPAR:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 210;
            this.match(CalcParser.OPAR);
            this.state = 211;
            this.numExpr(0);
            this.state = 212;
            this.match(CalcParser.CPAR);
            break;
        case CalcParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 214;
            this.match(CalcParser.SUB);
            this.state = 215;
            this.numExpr(10);
            break;
        case CalcParser.ABS:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
        case CalcParser.COS:
        case CalcParser.INT:
        case CalcParser.SIN:
        case CalcParser.SQRT:
        case CalcParser.TAN:
            localctx = new ComputeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 216;
            this.func();
            this.state = 217;
            this.numExpr(9);
            break;
        case CalcParser.MATRIX:
            localctx = new MatrixElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 219;
            this.matrixElementExpr();
            break;
        case CalcParser.LIST:
            localctx = new ListElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 220;
            this.listElementExpr();
            break;
        case CalcParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 221;
            this.variable();
            break;
        case CalcParser.PI:
            localctx = new ConstEvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 222;
            this.constant();
            break;
        case CalcParser.UINT:
        case CalcParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 223;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 238;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 236;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 227;
                    this.multOp();
                    this.state = 228;
                    this.numExpr(8);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                    this.state = 230;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 231;
                    this.addOp();
                    this.state = 232;
                    this.numExpr(7);
                    break;

                case 3:
                    localctx = new ScalarMultContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                    this.state = 234;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 235;
                    this.vectorExpr();
                    break;

                } 
            }
            this.state = 240;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
    this.ruleIndex = CalcParser.RULE_matrixExpr;
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


function EvaluateMatrixInitializerExprContext(parser, ctx) {
	MatrixExprContext.call(this, parser);
    MatrixExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateMatrixInitializerExprContext.prototype = Object.create(MatrixExprContext.prototype);
EvaluateMatrixInitializerExprContext.prototype.constructor = EvaluateMatrixInitializerExprContext;

CalcParser.EvaluateMatrixInitializerExprContext = EvaluateMatrixInitializerExprContext;

EvaluateMatrixInitializerExprContext.prototype.matrixInitializerExpr = function() {
    return this.getTypedRuleContext(MatrixInitializerExprContext,0);
};
EvaluateMatrixInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateMatrixInitializerExpr(this);
	}
};

EvaluateMatrixInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateMatrixInitializerExpr(this);
	}
};

EvaluateMatrixInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.AddMatricesContext = AddMatricesContext;

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
    if(listener instanceof CalcListener ) {
        listener.enterAddMatrices(this);
	}
};

AddMatricesContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAddMatrices(this);
	}
};

AddMatricesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAddMatrices(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.matrixExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MatrixExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, CalcParser.RULE_matrixExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.MATRIX:
            localctx = new EvaluateMatrixContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 242;
            this.matrix();
            break;
        case CalcParser.OBRA:
            localctx = new EvaluateMatrixInitializerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 243;
            this.matrixInitializerExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 252;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddMatricesContext(this, new MatrixExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_matrixExpr);
                this.state = 246;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 247;
                this.addOp();
                this.state = 248;
                this.matrixExpr(4); 
            }
            this.state = 254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
    this.ruleIndex = CalcParser.RULE_listExpr;
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

CalcParser.AddListsContext = AddListsContext;

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
    if(listener instanceof CalcListener ) {
        listener.enterAddLists(this);
	}
};

AddListsContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAddLists(this);
	}
};

AddListsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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


function EvaluateListInitializerExprContext(parser, ctx) {
	ListExprContext.call(this, parser);
    ListExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluateListInitializerExprContext.prototype = Object.create(ListExprContext.prototype);
EvaluateListInitializerExprContext.prototype.constructor = EvaluateListInitializerExprContext;

CalcParser.EvaluateListInitializerExprContext = EvaluateListInitializerExprContext;

EvaluateListInitializerExprContext.prototype.listInitializerExpr = function() {
    return this.getTypedRuleContext(ListInitializerExprContext,0);
};
EvaluateListInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvaluateListInitializerExpr(this);
	}
};

EvaluateListInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvaluateListInitializerExpr(this);
	}
};

EvaluateListInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvaluateListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.listExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ListExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, CalcParser.RULE_listExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.LIST:
            localctx = new EvaluateListContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 256;
            this.list();
            break;
        case CalcParser.OCUR:
            localctx = new EvaluateListInitializerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 257;
            this.listInitializerExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 266;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddListsContext(this, new ListExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_listExpr);
                this.state = 260;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 261;
                this.addOp();
                this.state = 262;
                this.listExpr(4); 
            }
            this.state = 268;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
    this.ruleIndex = CalcParser.RULE_stoExpr;
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
    this.enterRule(localctx, 40, CalcParser.RULE_stoExpr);
    try {
        this.state = 271;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.MATRIX:
            this.enterOuterAlt(localctx, 1);
            this.state = 269;
            this.matrixElementExpr();
            break;
        case CalcParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 270;
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
    this.ruleIndex = CalcParser.RULE_matrixStoExpr;
    return this;
}

MatrixStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixStoExprContext.prototype.constructor = MatrixStoExprContext;

MatrixStoExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

MatrixStoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrixStoExpr(this);
	}
};

MatrixStoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrixStoExpr(this);
	}
};

MatrixStoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrixStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixStoExprContext = MatrixStoExprContext;

CalcParser.prototype.matrixStoExpr = function() {

    var localctx = new MatrixStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CalcParser.RULE_matrixStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
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
    this.ruleIndex = CalcParser.RULE_listStoExpr;
    return this;
}

ListStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListStoExprContext.prototype.constructor = ListStoExprContext;

ListStoExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListStoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterListStoExpr(this);
	}
};

ListStoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitListStoExpr(this);
	}
};

ListStoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitListStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ListStoExprContext = ListStoExprContext;

CalcParser.prototype.listStoExpr = function() {

    var localctx = new ListStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CalcParser.RULE_listStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
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
    this.ruleIndex = CalcParser.RULE_matrixInitializerExpr;
    return this;
}

MatrixInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixInitializerExprContext.prototype.constructor = MatrixInitializerExprContext;

MatrixInitializerExprContext.prototype.OBRA = function() {
    return this.getToken(CalcParser.OBRA, 0);
};

MatrixInitializerExprContext.prototype.CBRA = function() {
    return this.getToken(CalcParser.CBRA, 0);
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
    if(listener instanceof CalcListener ) {
        listener.enterMatrixInitializerExpr(this);
	}
};

MatrixInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrixInitializerExpr(this);
	}
};

MatrixInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrixInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixInitializerExprContext = MatrixInitializerExprContext;

CalcParser.prototype.matrixInitializerExpr = function() {

    var localctx = new MatrixInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CalcParser.RULE_matrixInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(CalcParser.OBRA);
        this.state = 279; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 278;
            this.matrixRowExpr();
            this.state = 281; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CalcParser.OBRA);
        this.state = 283;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_listInitializerExpr;
    return this;
}

ListInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListInitializerExprContext.prototype.constructor = ListInitializerExprContext;

ListInitializerExprContext.prototype.OCUR = function() {
    return this.getToken(CalcParser.OCUR, 0);
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
    return this.getToken(CalcParser.CCUR, 0);
};

ListInitializerExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.COMMA);
    } else {
        return this.getToken(CalcParser.COMMA, i);
    }
};


ListInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterListInitializerExpr(this);
	}
};

ListInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitListInitializerExpr(this);
	}
};

ListInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ListInitializerExprContext = ListInitializerExprContext;

CalcParser.prototype.listInitializerExpr = function() {

    var localctx = new ListInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CalcParser.RULE_listInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.match(CalcParser.OCUR);
        this.state = 286;
        this.numExpr(0);
        this.state = 291;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalcParser.COMMA) {
            this.state = 287;
            this.match(CalcParser.COMMA);
            this.state = 288;
            this.numExpr(0);
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 294;
        this.match(CalcParser.CCUR);
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
    this.ruleIndex = CalcParser.RULE_matrixRowExpr;
    return this;
}

MatrixRowExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixRowExprContext.prototype.constructor = MatrixRowExprContext;

MatrixRowExprContext.prototype.OBRA = function() {
    return this.getToken(CalcParser.OBRA, 0);
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
    return this.getToken(CalcParser.CBRA, 0);
};

MatrixRowExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.COMMA);
    } else {
        return this.getToken(CalcParser.COMMA, i);
    }
};


MatrixRowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrixRowExpr(this);
	}
};

MatrixRowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrixRowExpr(this);
	}
};

MatrixRowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrixRowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixRowExprContext = MatrixRowExprContext;

CalcParser.prototype.matrixRowExpr = function() {

    var localctx = new MatrixRowExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CalcParser.RULE_matrixRowExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(CalcParser.OBRA);
        this.state = 297;
        this.numExpr(0);
        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalcParser.COMMA) {
            this.state = 298;
            this.match(CalcParser.COMMA);
            this.state = 299;
            this.numExpr(0);
            this.state = 304;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 305;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_matrixElementExpr;
    return this;
}

MatrixElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixElementExprContext.prototype.constructor = MatrixElementExprContext;

MatrixElementExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

MatrixElementExprContext.prototype.OBRA = function() {
    return this.getToken(CalcParser.OBRA, 0);
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
    return this.getToken(CalcParser.COMMA, 0);
};

MatrixElementExprContext.prototype.CBRA = function() {
    return this.getToken(CalcParser.CBRA, 0);
};

MatrixElementExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrixElementExpr(this);
	}
};

MatrixElementExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrixElementExpr(this);
	}
};

MatrixElementExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrixElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrixElementExprContext = MatrixElementExprContext;

CalcParser.prototype.matrixElementExpr = function() {

    var localctx = new MatrixElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, CalcParser.RULE_matrixElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.matrix();
        this.state = 308;
        this.match(CalcParser.OBRA);
        this.state = 309;
        this.numExpr(0);
        this.state = 310;
        this.match(CalcParser.COMMA);
        this.state = 311;
        this.numExpr(0);
        this.state = 312;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_listElementExpr;
    return this;
}

ListElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListElementExprContext.prototype.constructor = ListElementExprContext;

ListElementExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListElementExprContext.prototype.OBRA = function() {
    return this.getToken(CalcParser.OBRA, 0);
};

ListElementExprContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ListElementExprContext.prototype.CBRA = function() {
    return this.getToken(CalcParser.CBRA, 0);
};

ListElementExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterListElementExpr(this);
	}
};

ListElementExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitListElementExpr(this);
	}
};

ListElementExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitListElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ListElementExprContext = ListElementExprContext;

CalcParser.prototype.listElementExpr = function() {

    var localctx = new ListElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, CalcParser.RULE_listElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.list();
        this.state = 315;
        this.match(CalcParser.OBRA);
        this.state = 316;
        this.numExpr(0);
        this.state = 317;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_vectorExpr;
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

CalcParser.VParensContext = VParensContext;

VParensContext.prototype.OPAR = function() {
    return this.getToken(CalcParser.OPAR, 0);
};

VParensContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

VParensContext.prototype.CPAR = function() {
    return this.getToken(CalcParser.CPAR, 0);
};
VParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterVParens(this);
	}
};

VParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitVParens(this);
	}
};

VParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.VEvaluateContext = VEvaluateContext;

VEvaluateContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
VEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterVEvaluate(this);
	}
};

VEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitVEvaluate(this);
	}
};

VEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.VConstEvaluateContext = VConstEvaluateContext;

VConstEvaluateContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
VConstEvaluateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitVConstEvaluate(this);
	}
};

VConstEvaluateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
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

CalcParser.VComputeContext = VComputeContext;

VComputeContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

VComputeContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};
VComputeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterVCompute(this);
	}
};

VComputeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitVCompute(this);
	}
};

VComputeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitVCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.VectorExprContext = VectorExprContext;

CalcParser.prototype.vectorExpr = function() {

    var localctx = new VectorExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, CalcParser.RULE_vectorExpr);
    try {
        this.state = 328;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.OPAR:
            localctx = new VParensContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 319;
            this.match(CalcParser.OPAR);
            this.state = 320;
            this.numExpr(0);
            this.state = 321;
            this.match(CalcParser.CPAR);
            break;
        case CalcParser.ABS:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
        case CalcParser.COS:
        case CalcParser.INT:
        case CalcParser.SIN:
        case CalcParser.SQRT:
        case CalcParser.TAN:
            localctx = new VComputeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 323;
            this.func();
            this.state = 324;
            this.numExpr(0);
            break;
        case CalcParser.ID:
            localctx = new VEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 326;
            this.variable();
            break;
        case CalcParser.PI:
            localctx = new VConstEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 327;
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
    this.enterRule(localctx, 58, CalcParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        _la = this._input.LA(1);
        if(!(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (CalcParser.EQ - 23)) | (1 << (CalcParser.GE - 23)) | (1 << (CalcParser.GT - 23)) | (1 << (CalcParser.LE - 23)) | (1 << (CalcParser.LT - 23)) | (1 << (CalcParser.NE - 23)))) !== 0))) {
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
    this.ruleIndex = CalcParser.RULE_logicOp;
    return this;
}

LogicOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicOpContext.prototype.constructor = LogicOpContext;

LogicOpContext.prototype.AND = function() {
    return this.getToken(CalcParser.AND, 0);
};

LogicOpContext.prototype.OR = function() {
    return this.getToken(CalcParser.OR, 0);
};

LogicOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterLogicOp(this);
	}
};

LogicOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitLogicOp(this);
	}
};

LogicOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitLogicOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.LogicOpContext = LogicOpContext;

CalcParser.prototype.logicOp = function() {

    var localctx = new LogicOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, CalcParser.RULE_logicOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
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

MultOpContext.prototype.REMAIN = function() {
    return this.getToken(CalcParser.REMAIN, 0);
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
    this.enterRule(localctx, 62, CalcParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (CalcParser.DIV - 19)) | (1 << (CalcParser.REMAIN - 19)) | (1 << (CalcParser.MUL - 19)))) !== 0))) {
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
    this.enterRule(localctx, 64, CalcParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
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
    this.enterRule(localctx, 66, CalcParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.ABS) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.COS))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CalcParser.INT - 32)) | (1 << (CalcParser.SIN - 32)) | (1 << (CalcParser.SQRT - 32)) | (1 << (CalcParser.TAN - 32)))) !== 0))) {
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
    this.enterRule(localctx, 68, CalcParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.match(CalcParser.MATRIX);
        this.state = 341;
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

ListContext.prototype.UINT = function() {
    return this.getToken(CalcParser.UINT, 0);
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
    this.enterRule(localctx, 70, CalcParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(CalcParser.LIST);
        this.state = 344;
        this.match(CalcParser.UINT);
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
    this.enterRule(localctx, 72, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
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

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(CalcParser.PI, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ConstantContext = ConstantContext;

CalcParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, CalcParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(CalcParser.PI);
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

NumberContext.prototype.UINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.UINT);
    } else {
        return this.getToken(CalcParser.UINT, i);
    }
};


NumberContext.prototype.DOT = function() {
    return this.getToken(CalcParser.DOT, 0);
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




CalcParser.NumberContext = NumberContext;

CalcParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, CalcParser.RULE_number);
    try {
        this.state = 356;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 350;
            this.match(CalcParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 351;
            this.match(CalcParser.DOT);
            this.state = 352;
            this.match(CalcParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 353;
            this.match(CalcParser.UINT);
            this.state = 354;
            this.match(CalcParser.DOT);
            this.state = 355;
            this.match(CalcParser.UINT);
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


CalcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 16:
			return this.boolExpr_sempred(localctx, predIndex);
	case 17:
			return this.numExpr_sempred(localctx, predIndex);
	case 18:
			return this.matrixExpr_sempred(localctx, predIndex);
	case 19:
			return this.listExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalcParser.prototype.boolExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CalcParser.prototype.numExpr_sempred = function(localctx, predIndex) {
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

CalcParser.prototype.matrixExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CalcParser.prototype.listExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalcParser = CalcParser;
