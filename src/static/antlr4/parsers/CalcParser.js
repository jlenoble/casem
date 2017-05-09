// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003W\u01b0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0003\u0002\u0003\u0002",
    "\u0005\u0002G\n\u0002\u0006\u0002I\n\u0002\r\u0002\u000e\u0002J\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0006",
    "\u0004S\n\u0004\r\u0004\u000e\u0004T\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005b\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006r\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\u008b\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0096\n\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u009e\n\b\f\b\u000e",
    "\b\u00a1\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00a8",
    "\n\t\u0003\n\u0003\n\u0003\n\u0006\n\u00ad\n\n\r\n\u000e\n\u00ae\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0007\u000b\u00d1\n\u000b\f\u000b\u000e\u000b\u00d4\u000b\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00d8\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00e5\n\u000b",
    "\f\u000b\u000e\u000b\u00e8\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00f4\n\f",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0006\r\u00ff\n\r\r\r\u000e\r\u0100\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u0126\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0006\u000f",
    "\u012f\n\u000f\r\u000f\u000e\u000f\u0130\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0006\u000f\u0136\n\u000f\r\u000f\u000e\u000f\u0137\u0005\u000f",
    "\u013a\n\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u0152\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u015b\n\u0011\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u015f\n\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0166\n\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0177\n\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0006\u001c\u0186\n\u001c\r\u001c\u000e\u001c\u0187\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0194\n\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u019b\n \u0003 \u0003 \u0006 \u019f\n",
    " \r \u000e \u01a0\u0003 \u0005 \u01a4\n \u0007 \u01a6\n \f \u000e \u01a9",
    "\u000b \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0002\u0005\u000e",
    "\u0014>#\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@B\u0002\t\u0003\u0002\u001a\u001b",
    "\u0003\u0002\u0018\u0019\u0003\u0002ST\u0003\u0002GO\u0004\u0002\t\t",
    "WW\u0003\u0002\f\u0016\u0003\u0002\u001c!\u0002\u01d1\u0002H\u0003\u0002",
    "\u0002\u0002\u0004L\u0003\u0002\u0002\u0002\u0006P\u0003\u0002\u0002",
    "\u0002\ba\u0003\u0002\u0002\u0002\nq\u0003\u0002\u0002\u0002\f\u008a",
    "\u0003\u0002\u0002\u0002\u000e\u0095\u0003\u0002\u0002\u0002\u0010\u00a7",
    "\u0003\u0002\u0002\u0002\u0012\u00a9\u0003\u0002\u0002\u0002\u0014\u00d7",
    "\u0003\u0002\u0002\u0002\u0016\u00f3\u0003\u0002\u0002\u0002\u0018\u00f5",
    "\u0003\u0002\u0002\u0002\u001a\u0125\u0003\u0002\u0002\u0002\u001c\u0127",
    "\u0003\u0002\u0002\u0002\u001e\u0151\u0003\u0002\u0002\u0002 \u015a",
    "\u0003\u0002\u0002\u0002\"\u015e\u0003\u0002\u0002\u0002$\u0165\u0003",
    "\u0002\u0002\u0002&\u0167\u0003\u0002\u0002\u0002(\u0169\u0003\u0002",
    "\u0002\u0002*\u016b\u0003\u0002\u0002\u0002,\u0176\u0003\u0002\u0002",
    "\u0002.\u0178\u0003\u0002\u0002\u00020\u017b\u0003\u0002\u0002\u0002",
    "2\u017d\u0003\u0002\u0002\u00024\u0180\u0003\u0002\u0002\u00026\u0183",
    "\u0003\u0002\u0002\u00028\u0189\u0003\u0002\u0002\u0002:\u018d\u0003",
    "\u0002\u0002\u0002<\u0193\u0003\u0002\u0002\u0002>\u019a\u0003\u0002",
    "\u0002\u0002@\u01aa\u0003\u0002\u0002\u0002B\u01ad\u0003\u0002\u0002",
    "\u0002DF\u0005\u0004\u0003\u0002EG\u0007W\u0002\u0002FE\u0003\u0002",
    "\u0002\u0002FG\u0003\u0002\u0002\u0002GI\u0003\u0002\u0002\u0002HD\u0003",
    "\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002",
    "JK\u0003\u0002\u0002\u0002K\u0003\u0003\u0002\u0002\u0002LM\u00056\u001c",
    "\u0002MN\u0005\u0006\u0004\u0002NO\u00054\u001b\u0002O\u0005\u0003\u0002",
    "\u0002\u0002PR\u00052\u001a\u0002QS\u0005\b\u0005\u0002RQ\u0003\u0002",
    "\u0002\u0002ST\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003",
    "\u0002\u0002\u0002U\u0007\u0003\u0002\u0002\u0002VW\u0005\n\u0006\u0002",
    "WX\u00050\u0019\u0002Xb\u0003\u0002\u0002\u0002YZ\u0005\u001e\u0010",
    "\u0002Z[\u00077\u0002\u0002[b\u0003\u0002\u0002\u0002\\]\u0005\u000e",
    "\b\u0002]^\u0007%\u0002\u0002^_\u0005\u001e\u0010\u0002_`\u00077\u0002",
    "\u0002`b\u0003\u0002\u0002\u0002aV\u0003\u0002\u0002\u0002aY\u0003\u0002",
    "\u0002\u0002a\\\u0003\u0002\u0002\u0002b\t\u0003\u0002\u0002\u0002c",
    "r\u0005\f\u0007\u0002dr\u0005\u001e\u0010\u0002er\u0005\u001a\u000e",
    "\u0002fr\u0005\u0016\f\u0002gr\u0005 \u0011\u0002hr\u0005\u0010\t\u0002",
    "ij\u0005\u000e\b\u0002jk\u0007%\u0002\u0002kl\u0005\n\u0006\u0002lr",
    "\u0003\u0002\u0002\u0002mr\u0005\u001c\u000f\u0002nr\u0005\u0018\r\u0002",
    "or\u0005\u0012\n\u0002pr\u0003\u0002\u0002\u0002qc\u0003\u0002\u0002",
    "\u0002qd\u0003\u0002\u0002\u0002qe\u0003\u0002\u0002\u0002qf\u0003\u0002",
    "\u0002\u0002qg\u0003\u0002\u0002\u0002qh\u0003\u0002\u0002\u0002qi\u0003",
    "\u0002\u0002\u0002qm\u0003\u0002\u0002\u0002qn\u0003\u0002\u0002\u0002",
    "qo\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002\u0002r\u000b\u0003\u0002",
    "\u0002\u0002st\u0005\u0014\u000b\u0002tu\u0007$\u0002\u0002uv\u0005",
    "\"\u0012\u0002v\u008b\u0003\u0002\u0002\u0002wx\u0005,\u0017\u0002x",
    "y\u0007$\u0002\u0002yz\u0005,\u0017\u0002z\u008b\u0003\u0002\u0002\u0002",
    "{|\u0007D\u0002\u0002|}\u0007\u0003\u0002\u0002}~\u0005\u0014\u000b",
    "\u0002~\u007f\u0007\u0004\u0002\u0002\u007f\u0080\u0005\u0014\u000b",
    "\u0002\u0080\u0081\u0007\u0004\u0002\u0002\u0081\u0082\u0005\u0014\u000b",
    "\u0002\u0082\u0083\u0007\u0004\u0002\u0002\u0083\u0084\u0005\u0014\u000b",
    "\u0002\u0084\u0085\u0007\u0004\u0002\u0002\u0085\u0086\u0005\u0014\u000b",
    "\u0002\u0086\u0087\u0007\u0005\u0002\u0002\u0087\u0088\u0007$\u0002",
    "\u0002\u0088\u0089\u0005.\u0018\u0002\u0089\u008b\u0003\u0002\u0002",
    "\u0002\u008as\u0003\u0002\u0002\u0002\u008aw\u0003\u0002\u0002\u0002",
    "\u008a{\u0003\u0002\u0002\u0002\u008b\r\u0003\u0002\u0002\u0002\u008c",
    "\u008d\b\b\u0001\u0002\u008d\u008e\u0005\u0014\u000b\u0002\u008e\u008f",
    "\u0005B\"\u0002\u008f\u0090\u0005\u0014\u000b\u0002\u0090\u0096\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u00074\u0002\u0002\u0092\u0093\u0005",
    "B\"\u0002\u0093\u0094\u0005\u0014\u000b\u0002\u0094\u0096\u0003\u0002",
    "\u0002\u0002\u0095\u008c\u0003\u0002\u0002\u0002\u0095\u0091\u0003\u0002",
    "\u0002\u0002\u0096\u009f\u0003\u0002\u0002\u0002\u0097\u0098\f\u0005",
    "\u0002\u0002\u0098\u0099\u0007\"\u0002\u0002\u0099\u009e\u0005\u000e",
    "\b\u0006\u009a\u009b\f\u0004\u0002\u0002\u009b\u009c\u0007#\u0002\u0002",
    "\u009c\u009e\u0005\u000e\b\u0005\u009d\u0097\u0003\u0002\u0002\u0002",
    "\u009d\u009a\u0003\u0002\u0002\u0002\u009e\u00a1\u0003\u0002\u0002\u0002",
    "\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u000f\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002",
    "\u00a2\u00a8\u00078\u0002\u0002\u00a3\u00a4\u0007:\u0002\u0002\u00a4",
    "\u00a5\u0007\u0006\u0002\u0002\u00a5\u00a8\u0007T\u0002\u0002\u00a6",
    "\u00a8\u00079\u0002\u0002\u00a7\u00a2\u0003\u0002\u0002\u0002\u00a7",
    "\u00a3\u0003\u0002\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8",
    "\u0011\u0003\u0002\u0002\u0002\u00a9\u00aa\u00072\u0002\u0002\u00aa",
    "\u00ac\u00050\u0019\u0002\u00ab\u00ad\u0005\b\u0005\u0002\u00ac\u00ab",
    "\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00ac",
    "\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u00073\u0002\u0002\u00b1\u00b2",
    "\u0007\u0006\u0002\u0002\u00b2\u00b3\u0005\u000e\b\u0002\u00b3\u0013",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\b\u000b\u0001\u0002\u00b5\u00d8",
    "\u0005$\u0013\u0002\u00b6\u00b7\u0007\u0003\u0002\u0002\u00b7\u00b8",
    "\u0005\u0014\u000b\u0002\u00b8\u00b9\u0007\u0005\u0002\u0002\u00b9\u00d8",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0019\u0002\u0002\u00bb\u00d8",
    "\u0005$\u0013\u0002\u00bc\u00bd\u0007\u0019\u0002\u0002\u00bd\u00be",
    "\u0007\u0003\u0002\u0002\u00be\u00bf\u0005\u0014\u000b\u0002\u00bf\u00c0",
    "\u0007\u0005\u0002\u0002\u00c0\u00d8\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0005(\u0015\u0002\u00c2\u00c3\u0007\u0003\u0002\u0002\u00c3\u00c4",
    "\u0005\u0014\u000b\u0002\u00c4\u00c5\u0007\u0005\u0002\u0002\u00c5\u00d8",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0005(\u0015\u0002\u00c7\u00c8",
    "\u0005$\u0013\u0002\u00c8\u00d8\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0007P\u0002\u0002\u00ca\u00d8\u0007T\u0002\u0002\u00cb\u00cc\u0007",
    "C\u0002\u0002\u00cc\u00cd\u0007\u0003\u0002\u0002\u00cd\u00d2\u0005",
    ".\u0018\u0002\u00ce\u00cf\u0007\u0004\u0002\u0002\u00cf\u00d1\u0005",
    ".\u0018\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d4\u0003",
    "\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003",
    "\u0002\u0002\u0002\u00d3\u00d5\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\u0007\u0005\u0002\u0002\u00d6\u00d8\u0003",
    "\u0002\u0002\u0002\u00d7\u00b4\u0003\u0002\u0002\u0002\u00d7\u00b6\u0003",
    "\u0002\u0002\u0002\u00d7\u00ba\u0003\u0002\u0002\u0002\u00d7\u00bc\u0003",
    "\u0002\u0002\u0002\u00d7\u00c1\u0003\u0002\u0002\u0002\u00d7\u00c6\u0003",
    "\u0002\u0002\u0002\u00d7\u00c9\u0003\u0002\u0002\u0002\u00d7\u00cb\u0003",
    "\u0002\u0002\u0002\u00d8\u00e6\u0003\u0002\u0002\u0002\u00d9\u00da\f",
    "\r\u0002\u0002\u00da\u00db\u0007R\u0002\u0002\u00db\u00e5\u0005\u0014",
    "\u000b\u000e\u00dc\u00dd\f\f\u0002\u0002\u00dd\u00de\t\u0002\u0002\u0002",
    "\u00de\u00e5\u0005\u0014\u000b\r\u00df\u00e0\f\u000b\u0002\u0002\u00e0",
    "\u00e1\t\u0003\u0002\u0002\u00e1\u00e5\u0005\u0014\u000b\f\u00e2\u00e3",
    "\f\u000e\u0002\u0002\u00e3\u00e5\u0007Q\u0002\u0002\u00e4\u00d9\u0003",
    "\u0002\u0002\u0002\u00e4\u00dc\u0003\u0002\u0002\u0002\u00e4\u00df\u0003",
    "\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e8\u0003",
    "\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003",
    "\u0002\u0002\u0002\u00e7\u0015\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003",
    "\u0002\u0002\u0002\u00e9\u00ea\u0007(\u0002\u0002\u00ea\u00eb\u0007",
    "\u0006\u0002\u0002\u00eb\u00f4\u0007U\u0002\u0002\u00ec\u00f4\u0007",
    ")\u0002\u0002\u00ed\u00ee\u0007\'\u0002\u0002\u00ee\u00ef\u0007\u0006",
    "\u0002\u0002\u00ef\u00f4\u0005&\u0014\u0002\u00f0\u00f1\u0007&\u0002",
    "\u0002\u00f1\u00f4\u0005&\u0014\u0002\u00f2\u00f4\u0007*\u0002\u0002",
    "\u00f3\u00e9\u0003\u0002\u0002\u0002\u00f3\u00ec\u0003\u0002\u0002\u0002",
    "\u00f3\u00ed\u0003\u0002\u0002\u0002\u00f3\u00f0\u0003\u0002\u0002\u0002",
    "\u00f3\u00f2\u0003\u0002\u0002\u0002\u00f4\u0017\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\u0007/\u0002\u0002\u00f6\u00f7\u0007\u0006\u0002\u0002",
    "\u00f7\u00f8\u0005\f\u0007\u0002\u00f8\u00f9\u0007\u0006\u0002\u0002",
    "\u00f9\u00fa\u00070\u0002\u0002\u00fa\u00fb\u0007\u0006\u0002\u0002",
    "\u00fb\u00fc\u0005\u0014\u000b\u0002\u00fc\u00fe\u00050\u0019\u0002",
    "\u00fd\u00ff\u0005\b\u0005\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002",
    "\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002",
    "\u0102\u0103\u00071\u0002\u0002\u0103\u0019\u0003\u0002\u0002\u0002",
    "\u0104\u0126\u0007>\u0002\u0002\u0105\u0126\u0007=\u0002\u0002\u0106",
    "\u0126\u0007;\u0002\u0002\u0107\u0108\u0007<\u0002\u0002\u0108\u0109",
    "\u0007\u0006\u0002\u0002\u0109\u010a\u0005\u0014\u000b\u0002\u010a\u010b",
    "\u0007\u0004\u0002\u0002\u010b\u010c\u0005\u0014\u000b\u0002\u010c\u010d",
    "\u0007\u0004\u0002\u0002\u010d\u010e\u0005\u0014\u000b\u0002\u010e\u010f",
    "\u0007\u0004\u0002\u0002\u010f\u0110\u0005\u0014\u000b\u0002\u0110\u0111",
    "\u0007\u0004\u0002\u0002\u0111\u0112\u0005\u0014\u000b\u0002\u0112\u0113",
    "\u0007\u0004\u0002\u0002\u0113\u0114\u0005\u0014\u000b\u0002\u0114\u0126",
    "\u0003\u0002\u0002\u0002\u0115\u0116\u0007?\u0002\u0002\u0116\u0117",
    "\u0007\u0006\u0002\u0002\u0117\u0118\u0005\u0014\u000b\u0002\u0118\u0119",
    "\u0007\u0004\u0002\u0002\u0119\u011a\u0005\u0014\u000b\u0002\u011a\u011b",
    "\u0007\u0004\u0002\u0002\u011b\u011c\u0005\u0014\u000b\u0002\u011c\u011d",
    "\u0007\u0004\u0002\u0002\u011d\u011e\u0005\u0014\u000b\u0002\u011e\u0126",
    "\u0003\u0002\u0002\u0002\u011f\u0120\u0007@\u0002\u0002\u0120\u0121",
    "\u0007\u0006\u0002\u0002\u0121\u0122\u0005\u0014\u000b\u0002\u0122\u0123",
    "\u0007\u0004\u0002\u0002\u0123\u0124\u0005\u0014\u000b\u0002\u0124\u0126",
    "\u0003\u0002\u0002\u0002\u0125\u0104\u0003\u0002\u0002\u0002\u0125\u0105",
    "\u0003\u0002\u0002\u0002\u0125\u0106\u0003\u0002\u0002\u0002\u0125\u0107",
    "\u0003\u0002\u0002\u0002\u0125\u0115\u0003\u0002\u0002\u0002\u0125\u011f",
    "\u0003\u0002\u0002\u0002\u0126\u001b\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0007+\u0002\u0002\u0128\u0129\u0007\u0006\u0002\u0002\u0129\u012a",
    "\u0005\u000e\b\u0002\u012a\u012b\u00050\u0019\u0002\u012b\u012c\u0007",
    ",\u0002\u0002\u012c\u012e\u0007\u0006\u0002\u0002\u012d\u012f\u0005",
    "\b\u0005\u0002\u012e\u012d\u0003\u0002\u0002\u0002\u012f\u0130\u0003",
    "\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0130\u0131\u0003",
    "\u0002\u0002\u0002\u0131\u0139\u0003\u0002\u0002\u0002\u0132\u0133\u0007",
    "-\u0002\u0002\u0133\u0135\u0007\u0006\u0002\u0002\u0134\u0136\u0005",
    "\b\u0005\u0002\u0135\u0134\u0003\u0002\u0002\u0002\u0136\u0137\u0003",
    "\u0002\u0002\u0002\u0137\u0135\u0003\u0002\u0002\u0002\u0137\u0138\u0003",
    "\u0002\u0002\u0002\u0138\u013a\u0003\u0002\u0002\u0002\u0139\u0132\u0003",
    "\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013b\u0003",
    "\u0002\u0002\u0002\u013b\u013c\u0007.\u0002\u0002\u013c\u001d\u0003",
    "\u0002\u0002\u0002\u013d\u0152\u0007U\u0002\u0002\u013e\u0152\u0007",
    "6\u0002\u0002\u013f\u0140\u00075\u0002\u0002\u0140\u0141\u0007\u0006",
    "\u0002\u0002\u0141\u0142\u0005\u0014\u000b\u0002\u0142\u0143\u0007\u0004",
    "\u0002\u0002\u0143\u0144\u0005\u0014\u000b\u0002\u0144\u0145\u0007\u0004",
    "\u0002\u0002\u0145\u0146\u0005\u0014\u000b\u0002\u0146\u0152\u0003\u0002",
    "\u0002\u0002\u0147\u0148\u00075\u0002\u0002\u0148\u0149\u0007\u0006",
    "\u0002\u0002\u0149\u014a\u0005\u0014\u000b\u0002\u014a\u014b\u0007\u0004",
    "\u0002\u0002\u014b\u014c\u0005\u0014\u000b\u0002\u014c\u014d\u0007\u0004",
    "\u0002\u0002\u014d\u014e\u0007U\u0002\u0002\u014e\u0152\u0003\u0002",
    "\u0002\u0002\u014f\u0152\u0005\u0014\u000b\u0002\u0150\u0152\u0005,",
    "\u0017\u0002\u0151\u013d\u0003\u0002\u0002\u0002\u0151\u013e\u0003\u0002",
    "\u0002\u0002\u0151\u013f\u0003\u0002\u0002\u0002\u0151\u0147\u0003\u0002",
    "\u0002\u0002\u0151\u014f\u0003\u0002\u0002\u0002\u0151\u0150\u0003\u0002",
    "\u0002\u0002\u0152\u001f\u0003\u0002\u0002\u0002\u0153\u0154\u0007U",
    "\u0002\u0002\u0154\u0155\u0007V\u0002\u0002\u0155\u0156\u0007$\u0002",
    "\u0002\u0156\u015b\u0005\"\u0012\u0002\u0157\u0158\u00074\u0002\u0002",
    "\u0158\u0159\u0007$\u0002\u0002\u0159\u015b\u0007S\u0002\u0002\u015a",
    "\u0153\u0003\u0002\u0002\u0002\u015a\u0157\u0003\u0002\u0002\u0002\u015b",
    "!\u0003\u0002\u0002\u0002\u015c\u015f\u0007S\u0002\u0002\u015d\u015f",
    "\u0005*\u0016\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015e\u015d",
    "\u0003\u0002\u0002\u0002\u015f#\u0003\u0002\u0002\u0002\u0160\u0166",
    "\u0007S\u0002\u0002\u0161\u0166\u0007T\u0002\u0002\u0162\u0166\u0007",
    "E\u0002\u0002\u0163\u0166\u0005*\u0016\u0002\u0164\u0166\u0007F\u0002",
    "\u0002\u0165\u0160\u0003\u0002\u0002\u0002\u0165\u0161\u0003\u0002\u0002",
    "\u0002\u0165\u0162\u0003\u0002\u0002\u0002\u0165\u0163\u0003\u0002\u0002",
    "\u0002\u0165\u0164\u0003\u0002\u0002\u0002\u0166%\u0003\u0002\u0002",
    "\u0002\u0167\u0168\t\u0004\u0002\u0002\u0168\'\u0003\u0002\u0002\u0002",
    "\u0169\u016a\t\u0005\u0002\u0002\u016a)\u0003\u0002\u0002\u0002\u016b",
    "\u016c\u0005,\u0017\u0002\u016c\u016d\u0007\u0007\u0002\u0002\u016d",
    "\u016e\u0005\u0014\u000b\u0002\u016e\u016f\u0007\u0004\u0002\u0002\u016f",
    "\u0170\u0005\u0014\u000b\u0002\u0170\u0171\u0007\b\u0002\u0002\u0171",
    "+\u0003\u0002\u0002\u0002\u0172\u0173\u0007A\u0002\u0002\u0173\u0177",
    "\u0007S\u0002\u0002\u0174\u0175\u0007A\u0002\u0002\u0175\u0177\u0007",
    "F\u0002\u0002\u0176\u0172\u0003\u0002\u0002\u0002\u0176\u0174\u0003",
    "\u0002\u0002\u0002\u0177-\u0003\u0002\u0002\u0002\u0178\u0179\u0007",
    "B\u0002\u0002\u0179\u017a\u0007T\u0002\u0002\u017a/\u0003\u0002\u0002",
    "\u0002\u017b\u017c\t\u0006\u0002\u0002\u017c1\u0003\u0002\u0002\u0002",
    "\u017d\u017e\u0007\n\u0002\u0002\u017e\u017f\u0007W\u0002\u0002\u017f",
    "3\u0003\u0002\u0002\u0002\u0180\u0181\u0007\u000b\u0002\u0002\u0181",
    "\u0182\u0007W\u0002\u0002\u01825\u0003\u0002\u0002\u0002\u0183\u0185",
    "\u0005@!\u0002\u0184\u0186\u00058\u001d\u0002\u0185\u0184\u0003\u0002",
    "\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u0185\u0003\u0002",
    "\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002\u01887\u0003\u0002",
    "\u0002\u0002\u0189\u018a\u0005:\u001e\u0002\u018a\u018b\u0007\t\u0002",
    "\u0002\u018b\u018c\u0005<\u001f\u0002\u018c9\u0003\u0002\u0002\u0002",
    "\u018d\u018e\t\u0007\u0002\u0002\u018e;\u0003\u0002\u0002\u0002\u018f",
    "\u0190\u0005> \u0002\u0190\u0191\u0007W\u0002\u0002\u0191\u0194\u0003",
    "\u0002\u0002\u0002\u0192\u0194\u0007W\u0002\u0002\u0193\u018f\u0003",
    "\u0002\u0002\u0002\u0193\u0192\u0003\u0002\u0002\u0002\u0194=\u0003",
    "\u0002\u0002\u0002\u0195\u0196\b \u0001\u0002\u0196\u019b\u0007S\u0002",
    "\u0002\u0197\u019b\u0007T\u0002\u0002\u0198\u0199\u0007T\u0002\u0002",
    "\u0199\u019b\u0007S\u0002\u0002\u019a\u0195\u0003\u0002\u0002\u0002",
    "\u019a\u0197\u0003\u0002\u0002\u0002\u019a\u0198\u0003\u0002\u0002\u0002",
    "\u019b\u01a7\u0003\u0002\u0002\u0002\u019c\u019e\f\u0003\u0002\u0002",
    "\u019d\u019f\t\u0003\u0002\u0002\u019e\u019d\u0003\u0002\u0002\u0002",
    "\u019f\u01a0\u0003\u0002\u0002\u0002\u01a0\u019e\u0003\u0002\u0002\u0002",
    "\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1\u01a3\u0003\u0002\u0002\u0002",
    "\u01a2\u01a4\u0005> \u0002\u01a3\u01a2\u0003\u0002\u0002\u0002\u01a3",
    "\u01a4\u0003\u0002\u0002\u0002\u01a4\u01a6\u0003\u0002\u0002\u0002\u01a5",
    "\u019c\u0003\u0002\u0002\u0002\u01a6\u01a9\u0003\u0002\u0002\u0002\u01a7",
    "\u01a5\u0003\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8",
    "?\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002\u01aa",
    "\u01ab\u0007\u0017\u0002\u0002\u01ab\u01ac\u0007W\u0002\u0002\u01ac",
    "A\u0003\u0002\u0002\u0002\u01ad\u01ae\t\b\u0002\u0002\u01aeC\u0003\u0002",
    "\u0002\u0002\"FJTaq\u008a\u0095\u009d\u009f\u00a7\u00ae\u00d2\u00d7",
    "\u00e4\u00e6\u00f3\u0100\u0125\u0130\u0137\u0139\u0151\u015a\u015e\u0165",
    "\u0176\u0187\u0193\u019a\u01a0\u01a3\u01a7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", "' '", "'['", "']'", "':'", 
                     "'%Data Record'", "'%End'", "'Format'", "'Communication SW'", 
                     "'Data Type'", "'Capacity'", "'File Name'", "'Group Name'", 
                     "'Password'", "'Option1'", "'Option2'", "'Option3'", 
                     "'Option4'", "'%Header Record'", "'+'", "'-'", "'*'", 
                     "'/'", "'='", "'\\<>'", "'>'", "'\\>='", "'<'", "'\\<='", 
                     "'\\ And '", "'\\ Or '", "'\\->'", "'\\=>'", "'\\Goto'", 
                     "'\\Lbl'", "'\\Prog'", "'\\Return'", "'\\Stop'", "'\\If'", 
                     "'\\Then'", "'\\Else'", "'\\IfEnd'", "'\\For'", "'\\To'", 
                     "'\\Next'", "'\\Do'", "'\\LpWhile'", "'\\Getkey'", 
                     "'\\Locate'", "'\\ClrText'", "'\\Disp'", "'\\Norm'", 
                     "'\\Gra'", "'\\Fix'", "'\\ClrGraph'", "'\\ViewWindow'", 
                     "'\\AxesOn'", "'\\AxesOff'", "'\\F-Line'", "'\\PlotOn'", 
                     "'\\Mat '", "'\\List '", "'\\List->Mat'", "'\\Seq'", 
                     "'\\Pi'", "'\\Ans'", "'\\Abs '", "'\\acos '", "'\\asin '", 
                     "'\\atan '", "'\\cos '", "'\\Int '", "'\\sin '", "'\\sqrt'", 
                     "'\\tan '", "'\\10^x'", "'!'", null, null, null, null, 
                     "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "ADD", "SUB", "MUL", "DIV", 
                      "EQ", "NE", "GT", "GE", "LT", "LE", "AND", "OR", "ARROW", 
                      "FATARROW", "GOTO", "LBL", "PROG", "RETURN", "STOP", 
                      "IF", "THEN", "ELSE", "IFEND", "FOR", "TO", "NEXT", 
                      "DO", "LPWHILE", "GETKEY", "LOCATE", "CLRTXT", "DISP", 
                      "NORM", "GRA", "FIX", "CLRGRPH", "VIEWWINDOW", "AXESON", 
                      "AXESOFF", "FLINE", "PLOTON", "MATR", "LIST", "LISTMAT", 
                      "SEQ", "PI", "ANS", "ABS", "ACOS", "ASIN", "ATAN", 
                      "COS", "INT", "SIN", "SQRT", "TAN", "EXPNT", "FACT", 
                      "POW", "ID", "NUM", "STRING", "QUESMARK", "NEWLINE" ];

var ruleNames =  [ "prog", "file", "data", "cmd", "expr", "assignExpr", 
                   "boolExpr", "confExpr", "doExpr", "evalExpr", "flowExpr", 
                   "forExpr", "graphExpr", "ifExpr", "printExpr", "readExpr", 
                   "storExpr", "valueExpr", "lbl", "func", "matrElt", "matr", 
                   "list", "cmdEnd", "dataBeg", "fileEnd", "header", "entry", 
                   "label", "option", "value", "headerBeg", "boolOp" ];

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
CalcParser.T__15 = 16;
CalcParser.T__16 = 17;
CalcParser.T__17 = 18;
CalcParser.T__18 = 19;
CalcParser.T__19 = 20;
CalcParser.T__20 = 21;
CalcParser.ADD = 22;
CalcParser.SUB = 23;
CalcParser.MUL = 24;
CalcParser.DIV = 25;
CalcParser.EQ = 26;
CalcParser.NE = 27;
CalcParser.GT = 28;
CalcParser.GE = 29;
CalcParser.LT = 30;
CalcParser.LE = 31;
CalcParser.AND = 32;
CalcParser.OR = 33;
CalcParser.ARROW = 34;
CalcParser.FATARROW = 35;
CalcParser.GOTO = 36;
CalcParser.LBL = 37;
CalcParser.PROG = 38;
CalcParser.RETURN = 39;
CalcParser.STOP = 40;
CalcParser.IF = 41;
CalcParser.THEN = 42;
CalcParser.ELSE = 43;
CalcParser.IFEND = 44;
CalcParser.FOR = 45;
CalcParser.TO = 46;
CalcParser.NEXT = 47;
CalcParser.DO = 48;
CalcParser.LPWHILE = 49;
CalcParser.GETKEY = 50;
CalcParser.LOCATE = 51;
CalcParser.CLRTXT = 52;
CalcParser.DISP = 53;
CalcParser.NORM = 54;
CalcParser.GRA = 55;
CalcParser.FIX = 56;
CalcParser.CLRGRPH = 57;
CalcParser.VIEWWINDOW = 58;
CalcParser.AXESON = 59;
CalcParser.AXESOFF = 60;
CalcParser.FLINE = 61;
CalcParser.PLOTON = 62;
CalcParser.MATR = 63;
CalcParser.LIST = 64;
CalcParser.LISTMAT = 65;
CalcParser.SEQ = 66;
CalcParser.PI = 67;
CalcParser.ANS = 68;
CalcParser.ABS = 69;
CalcParser.ACOS = 70;
CalcParser.ASIN = 71;
CalcParser.ATAN = 72;
CalcParser.COS = 73;
CalcParser.INT = 74;
CalcParser.SIN = 75;
CalcParser.SQRT = 76;
CalcParser.TAN = 77;
CalcParser.EXPNT = 78;
CalcParser.FACT = 79;
CalcParser.POW = 80;
CalcParser.ID = 81;
CalcParser.NUM = 82;
CalcParser.STRING = 83;
CalcParser.QUESMARK = 84;
CalcParser.NEWLINE = 85;

CalcParser.RULE_prog = 0;
CalcParser.RULE_file = 1;
CalcParser.RULE_data = 2;
CalcParser.RULE_cmd = 3;
CalcParser.RULE_expr = 4;
CalcParser.RULE_assignExpr = 5;
CalcParser.RULE_boolExpr = 6;
CalcParser.RULE_confExpr = 7;
CalcParser.RULE_doExpr = 8;
CalcParser.RULE_evalExpr = 9;
CalcParser.RULE_flowExpr = 10;
CalcParser.RULE_forExpr = 11;
CalcParser.RULE_graphExpr = 12;
CalcParser.RULE_ifExpr = 13;
CalcParser.RULE_printExpr = 14;
CalcParser.RULE_readExpr = 15;
CalcParser.RULE_storExpr = 16;
CalcParser.RULE_valueExpr = 17;
CalcParser.RULE_lbl = 18;
CalcParser.RULE_func = 19;
CalcParser.RULE_matrElt = 20;
CalcParser.RULE_matr = 21;
CalcParser.RULE_list = 22;
CalcParser.RULE_cmdEnd = 23;
CalcParser.RULE_dataBeg = 24;
CalcParser.RULE_fileEnd = 25;
CalcParser.RULE_header = 26;
CalcParser.RULE_entry = 27;
CalcParser.RULE_label = 28;
CalcParser.RULE_option = 29;
CalcParser.RULE_value = 30;
CalcParser.RULE_headerBeg = 31;
CalcParser.RULE_boolOp = 32;

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

ProgContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 70; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 66;
            this.file();
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CalcParser.NEWLINE) {
                this.state = 67;
                this.match(CalcParser.NEWLINE);
            }

            this.state = 72; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CalcParser.T__20);
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

FileContext.prototype.data = function() {
    return this.getTypedRuleContext(DataContext,0);
};

FileContext.prototype.fileEnd = function() {
    return this.getTypedRuleContext(FileEndContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.header();
        this.state = 75;
        this.data();
        this.state = 76;
        this.fileEnd();
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

function DataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_data;
    return this;
}

DataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataContext.prototype.constructor = DataContext;

DataContext.prototype.dataBeg = function() {
    return this.getTypedRuleContext(DataBegContext,0);
};

DataContext.prototype.cmd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CmdContext);
    } else {
        return this.getTypedRuleContext(CmdContext,i);
    }
};

DataContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterData(this);
	}
};

DataContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitData(this);
	}
};

DataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitData(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.DataContext = DataContext;

CalcParser.prototype.data = function() {

    var localctx = new DataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalcParser.RULE_data);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.dataBeg();
        this.state = 80; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 79;
            this.cmd();
            this.state = 82; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__6) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (CalcParser.GOTO - 36)) | (1 << (CalcParser.LBL - 36)) | (1 << (CalcParser.PROG - 36)) | (1 << (CalcParser.RETURN - 36)) | (1 << (CalcParser.STOP - 36)) | (1 << (CalcParser.IF - 36)) | (1 << (CalcParser.FOR - 36)) | (1 << (CalcParser.DO - 36)) | (1 << (CalcParser.GETKEY - 36)) | (1 << (CalcParser.LOCATE - 36)) | (1 << (CalcParser.CLRTXT - 36)) | (1 << (CalcParser.NORM - 36)) | (1 << (CalcParser.GRA - 36)) | (1 << (CalcParser.FIX - 36)) | (1 << (CalcParser.CLRGRPH - 36)) | (1 << (CalcParser.VIEWWINDOW - 36)) | (1 << (CalcParser.AXESON - 36)) | (1 << (CalcParser.AXESOFF - 36)) | (1 << (CalcParser.FLINE - 36)) | (1 << (CalcParser.PLOTON - 36)) | (1 << (CalcParser.MATR - 36)) | (1 << (CalcParser.LISTMAT - 36)) | (1 << (CalcParser.SEQ - 36)) | (1 << (CalcParser.PI - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (CalcParser.ANS - 68)) | (1 << (CalcParser.ABS - 68)) | (1 << (CalcParser.ACOS - 68)) | (1 << (CalcParser.ASIN - 68)) | (1 << (CalcParser.ATAN - 68)) | (1 << (CalcParser.COS - 68)) | (1 << (CalcParser.INT - 68)) | (1 << (CalcParser.SIN - 68)) | (1 << (CalcParser.SQRT - 68)) | (1 << (CalcParser.TAN - 68)) | (1 << (CalcParser.EXPNT - 68)) | (1 << (CalcParser.ID - 68)) | (1 << (CalcParser.NUM - 68)) | (1 << (CalcParser.STRING - 68)) | (1 << (CalcParser.NEWLINE - 68)))) !== 0));
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

function CmdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_cmd;
    return this;
}

CmdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CmdContext.prototype.constructor = CmdContext;

CmdContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CmdContext.prototype.cmdEnd = function() {
    return this.getTypedRuleContext(CmdEndContext,0);
};

CmdContext.prototype.printExpr = function() {
    return this.getTypedRuleContext(PrintExprContext,0);
};

CmdContext.prototype.DISP = function() {
    return this.getToken(CalcParser.DISP, 0);
};

CmdContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

CmdContext.prototype.FATARROW = function() {
    return this.getToken(CalcParser.FATARROW, 0);
};

CmdContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterCmd(this);
	}
};

CmdContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitCmd(this);
	}
};

CmdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitCmd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.CmdContext = CmdContext;

CalcParser.prototype.cmd = function() {

    var localctx = new CmdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalcParser.RULE_cmd);
    try {
        this.state = 95;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.expr();
            this.state = 85;
            this.cmdEnd();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.printExpr();
            this.state = 88;
            this.match(CalcParser.DISP);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 90;
            this.boolExpr(0);
            this.state = 91;
            this.match(CalcParser.FATARROW);
            this.state = 92;
            this.printExpr();
            this.state = 93;
            this.match(CalcParser.DISP);
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

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.assignExpr = function() {
    return this.getTypedRuleContext(AssignExprContext,0);
};

ExprContext.prototype.printExpr = function() {
    return this.getTypedRuleContext(PrintExprContext,0);
};

ExprContext.prototype.graphExpr = function() {
    return this.getTypedRuleContext(GraphExprContext,0);
};

ExprContext.prototype.flowExpr = function() {
    return this.getTypedRuleContext(FlowExprContext,0);
};

ExprContext.prototype.readExpr = function() {
    return this.getTypedRuleContext(ReadExprContext,0);
};

ExprContext.prototype.confExpr = function() {
    return this.getTypedRuleContext(ConfExprContext,0);
};

ExprContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

ExprContext.prototype.FATARROW = function() {
    return this.getToken(CalcParser.FATARROW, 0);
};

ExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprContext.prototype.ifExpr = function() {
    return this.getTypedRuleContext(IfExprContext,0);
};

ExprContext.prototype.forExpr = function() {
    return this.getTypedRuleContext(ForExprContext,0);
};

ExprContext.prototype.doExpr = function() {
    return this.getTypedRuleContext(DoExprContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ExprContext = ExprContext;

CalcParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalcParser.RULE_expr);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.assignExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.printExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 99;
            this.graphExpr();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 100;
            this.flowExpr();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 101;
            this.readExpr();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 102;
            this.confExpr();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 103;
            this.boolExpr(0);
            this.state = 104;
            this.match(CalcParser.FATARROW);
            this.state = 105;
            this.expr();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 107;
            this.ifExpr();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 108;
            this.forExpr();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 109;
            this.doExpr();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);

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

function AssignExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_assignExpr;
    return this;
}

AssignExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignExprContext.prototype.constructor = AssignExprContext;

AssignExprContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

AssignExprContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

AssignExprContext.prototype.storExpr = function() {
    return this.getTypedRuleContext(StorExprContext,0);
};

AssignExprContext.prototype.matr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatrContext);
    } else {
        return this.getTypedRuleContext(MatrContext,i);
    }
};

AssignExprContext.prototype.SEQ = function() {
    return this.getToken(CalcParser.SEQ, 0);
};

AssignExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

AssignExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterAssignExpr(this);
	}
};

AssignExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitAssignExpr(this);
	}
};

AssignExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitAssignExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.AssignExprContext = AssignExprContext;

CalcParser.prototype.assignExpr = function() {

    var localctx = new AssignExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalcParser.RULE_assignExpr);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.evalExpr(0);
            this.state = 114;
            this.match(CalcParser.ARROW);
            this.state = 115;
            this.storExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.matr();
            this.state = 118;
            this.match(CalcParser.ARROW);
            this.state = 119;
            this.matr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 121;
            this.match(CalcParser.SEQ);
            this.state = 122;
            this.match(CalcParser.T__0);
            this.state = 123;
            this.evalExpr(0);
            this.state = 124;
            this.match(CalcParser.T__1);
            this.state = 125;
            this.evalExpr(0);
            this.state = 126;
            this.match(CalcParser.T__1);
            this.state = 127;
            this.evalExpr(0);
            this.state = 128;
            this.match(CalcParser.T__1);
            this.state = 129;
            this.evalExpr(0);
            this.state = 130;
            this.match(CalcParser.T__1);
            this.state = 131;
            this.evalExpr(0);
            this.state = 132;
            this.match(CalcParser.T__2);
            this.state = 133;
            this.match(CalcParser.ARROW);
            this.state = 134;
            this.list();
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

BoolExprContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

BoolExprContext.prototype.boolOp = function() {
    return this.getTypedRuleContext(BoolOpContext,0);
};

BoolExprContext.prototype.GETKEY = function() {
    return this.getToken(CalcParser.GETKEY, 0);
};

BoolExprContext.prototype.boolExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BoolExprContext);
    } else {
        return this.getTypedRuleContext(BoolExprContext,i);
    }
};

BoolExprContext.prototype.AND = function() {
    return this.getToken(CalcParser.AND, 0);
};

BoolExprContext.prototype.OR = function() {
    return this.getToken(CalcParser.OR, 0);
};

BoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBoolExpr(this);
	}
};

BoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBoolExpr(this);
	}
};

BoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBoolExpr(this);
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
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, CalcParser.RULE_boolExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.T__0:
        case CalcParser.SUB:
        case CalcParser.MATR:
        case CalcParser.LISTMAT:
        case CalcParser.PI:
        case CalcParser.ANS:
        case CalcParser.ABS:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
        case CalcParser.COS:
        case CalcParser.INT:
        case CalcParser.SIN:
        case CalcParser.SQRT:
        case CalcParser.TAN:
        case CalcParser.EXPNT:
        case CalcParser.ID:
        case CalcParser.NUM:
            this.state = 139;
            this.evalExpr(0);
            this.state = 140;
            this.boolOp();
            this.state = 141;
            this.evalExpr(0);
            break;
        case CalcParser.GETKEY:
            this.state = 143;
            this.match(CalcParser.GETKEY);
            this.state = 144;
            this.boolOp();
            this.state = 145;
            this.evalExpr(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 157;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 155;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BoolExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_boolExpr);
                    this.state = 149;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 150;
                    this.match(CalcParser.AND);
                    this.state = 151;
                    this.boolExpr(4);
                    break;

                case 2:
                    localctx = new BoolExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_boolExpr);
                    this.state = 152;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 153;
                    this.match(CalcParser.OR);
                    this.state = 154;
                    this.boolExpr(3);
                    break;

                } 
            }
            this.state = 159;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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

function ConfExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_confExpr;
    return this;
}

ConfExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConfExprContext.prototype.constructor = ConfExprContext;

ConfExprContext.prototype.NORM = function() {
    return this.getToken(CalcParser.NORM, 0);
};

ConfExprContext.prototype.FIX = function() {
    return this.getToken(CalcParser.FIX, 0);
};

ConfExprContext.prototype.NUM = function() {
    return this.getToken(CalcParser.NUM, 0);
};

ConfExprContext.prototype.GRA = function() {
    return this.getToken(CalcParser.GRA, 0);
};

ConfExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterConfExpr(this);
	}
};

ConfExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitConfExpr(this);
	}
};

ConfExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitConfExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ConfExprContext = ConfExprContext;

CalcParser.prototype.confExpr = function() {

    var localctx = new ConfExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CalcParser.RULE_confExpr);
    try {
        this.state = 165;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.NORM:
            this.enterOuterAlt(localctx, 1);
            this.state = 160;
            this.match(CalcParser.NORM);
            break;
        case CalcParser.FIX:
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            this.match(CalcParser.FIX);
            this.state = 162;
            this.match(CalcParser.T__3);
            this.state = 163;
            this.match(CalcParser.NUM);
            break;
        case CalcParser.GRA:
            this.enterOuterAlt(localctx, 3);
            this.state = 164;
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

function DoExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_doExpr;
    return this;
}

DoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoExprContext.prototype.constructor = DoExprContext;

DoExprContext.prototype.DO = function() {
    return this.getToken(CalcParser.DO, 0);
};

DoExprContext.prototype.cmdEnd = function() {
    return this.getTypedRuleContext(CmdEndContext,0);
};

DoExprContext.prototype.LPWHILE = function() {
    return this.getToken(CalcParser.LPWHILE, 0);
};

DoExprContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

DoExprContext.prototype.cmd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CmdContext);
    } else {
        return this.getTypedRuleContext(CmdContext,i);
    }
};

DoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterDoExpr(this);
	}
};

DoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitDoExpr(this);
	}
};

DoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitDoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.DoExprContext = DoExprContext;

CalcParser.prototype.doExpr = function() {

    var localctx = new DoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CalcParser.RULE_doExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(CalcParser.DO);
        this.state = 168;
        this.cmdEnd();
        this.state = 170; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 169;
            this.cmd();
            this.state = 172; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__6) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (CalcParser.GOTO - 36)) | (1 << (CalcParser.LBL - 36)) | (1 << (CalcParser.PROG - 36)) | (1 << (CalcParser.RETURN - 36)) | (1 << (CalcParser.STOP - 36)) | (1 << (CalcParser.IF - 36)) | (1 << (CalcParser.FOR - 36)) | (1 << (CalcParser.DO - 36)) | (1 << (CalcParser.GETKEY - 36)) | (1 << (CalcParser.LOCATE - 36)) | (1 << (CalcParser.CLRTXT - 36)) | (1 << (CalcParser.NORM - 36)) | (1 << (CalcParser.GRA - 36)) | (1 << (CalcParser.FIX - 36)) | (1 << (CalcParser.CLRGRPH - 36)) | (1 << (CalcParser.VIEWWINDOW - 36)) | (1 << (CalcParser.AXESON - 36)) | (1 << (CalcParser.AXESOFF - 36)) | (1 << (CalcParser.FLINE - 36)) | (1 << (CalcParser.PLOTON - 36)) | (1 << (CalcParser.MATR - 36)) | (1 << (CalcParser.LISTMAT - 36)) | (1 << (CalcParser.SEQ - 36)) | (1 << (CalcParser.PI - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (CalcParser.ANS - 68)) | (1 << (CalcParser.ABS - 68)) | (1 << (CalcParser.ACOS - 68)) | (1 << (CalcParser.ASIN - 68)) | (1 << (CalcParser.ATAN - 68)) | (1 << (CalcParser.COS - 68)) | (1 << (CalcParser.INT - 68)) | (1 << (CalcParser.SIN - 68)) | (1 << (CalcParser.SQRT - 68)) | (1 << (CalcParser.TAN - 68)) | (1 << (CalcParser.EXPNT - 68)) | (1 << (CalcParser.ID - 68)) | (1 << (CalcParser.NUM - 68)) | (1 << (CalcParser.STRING - 68)) | (1 << (CalcParser.NEWLINE - 68)))) !== 0));
        this.state = 174;
        this.match(CalcParser.LPWHILE);
        this.state = 175;
        this.match(CalcParser.T__3);
        this.state = 176;
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
    this.op = null; // Token
    return this;
}

EvalExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvalExprContext.prototype.constructor = EvalExprContext;

EvalExprContext.prototype.valueExpr = function() {
    return this.getTypedRuleContext(ValueExprContext,0);
};

EvalExprContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

EvalExprContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

EvalExprContext.prototype.EXPNT = function() {
    return this.getToken(CalcParser.EXPNT, 0);
};

EvalExprContext.prototype.NUM = function() {
    return this.getToken(CalcParser.NUM, 0);
};

EvalExprContext.prototype.LISTMAT = function() {
    return this.getToken(CalcParser.LISTMAT, 0);
};

EvalExprContext.prototype.list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ListContext);
    } else {
        return this.getTypedRuleContext(ListContext,i);
    }
};

EvalExprContext.prototype.POW = function() {
    return this.getToken(CalcParser.POW, 0);
};

EvalExprContext.prototype.MUL = function() {
    return this.getToken(CalcParser.MUL, 0);
};

EvalExprContext.prototype.DIV = function() {
    return this.getToken(CalcParser.DIV, 0);
};

EvalExprContext.prototype.ADD = function() {
    return this.getToken(CalcParser.ADD, 0);
};

EvalExprContext.prototype.SUB = function() {
    return this.getToken(CalcParser.SUB, 0);
};

EvalExprContext.prototype.FACT = function() {
    return this.getToken(CalcParser.FACT, 0);
};

EvalExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEvalExpr(this);
	}
};

EvalExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEvalExpr(this);
	}
};

EvalExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEvalExpr(this);
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
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, CalcParser.RULE_evalExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 179;
            this.valueExpr();
            break;

        case 2:
            this.state = 180;
            this.match(CalcParser.T__0);
            this.state = 181;
            this.evalExpr(0);
            this.state = 182;
            this.match(CalcParser.T__2);
            break;

        case 3:
            this.state = 184;
            this.match(CalcParser.SUB);
            this.state = 185;
            this.valueExpr();
            break;

        case 4:
            this.state = 186;
            this.match(CalcParser.SUB);
            this.state = 187;
            this.match(CalcParser.T__0);
            this.state = 188;
            this.evalExpr(0);
            this.state = 189;
            this.match(CalcParser.T__2);
            break;

        case 5:
            this.state = 191;
            this.func();
            this.state = 192;
            this.match(CalcParser.T__0);
            this.state = 193;
            this.evalExpr(0);
            this.state = 194;
            this.match(CalcParser.T__2);
            break;

        case 6:
            this.state = 196;
            this.func();
            this.state = 197;
            this.valueExpr();
            break;

        case 7:
            this.state = 199;
            this.match(CalcParser.EXPNT);
            this.state = 200;
            this.match(CalcParser.NUM);
            break;

        case 8:
            this.state = 201;
            this.match(CalcParser.LISTMAT);
            this.state = 202;
            this.match(CalcParser.T__0);
            this.state = 203;
            this.list();
            this.state = 208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===CalcParser.T__1) {
                this.state = 204;
                this.match(CalcParser.T__1);
                this.state = 205;
                this.list();
                this.state = 210;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 211;
            this.match(CalcParser.T__2);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 228;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 226;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new EvalExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 215;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 216;
                    this.match(CalcParser.POW);
                    this.state = 217;
                    this.evalExpr(12);
                    break;

                case 2:
                    localctx = new EvalExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 218;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 219;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalcParser.MUL || _la===CalcParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 220;
                    this.evalExpr(11);
                    break;

                case 3:
                    localctx = new EvalExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 221;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 222;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalcParser.ADD || _la===CalcParser.SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 223;
                    this.evalExpr(10);
                    break;

                case 4:
                    localctx = new EvalExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 224;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 225;
                    this.match(CalcParser.FACT);
                    break;

                } 
            }
            this.state = 230;
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

function FlowExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_flowExpr;
    return this;
}

FlowExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlowExprContext.prototype.constructor = FlowExprContext;

FlowExprContext.prototype.PROG = function() {
    return this.getToken(CalcParser.PROG, 0);
};

FlowExprContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};

FlowExprContext.prototype.RETURN = function() {
    return this.getToken(CalcParser.RETURN, 0);
};

FlowExprContext.prototype.LBL = function() {
    return this.getToken(CalcParser.LBL, 0);
};

FlowExprContext.prototype.lbl = function() {
    return this.getTypedRuleContext(LblContext,0);
};

FlowExprContext.prototype.GOTO = function() {
    return this.getToken(CalcParser.GOTO, 0);
};

FlowExprContext.prototype.STOP = function() {
    return this.getToken(CalcParser.STOP, 0);
};

FlowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterFlowExpr(this);
	}
};

FlowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitFlowExpr(this);
	}
};

FlowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitFlowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.FlowExprContext = FlowExprContext;

CalcParser.prototype.flowExpr = function() {

    var localctx = new FlowExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CalcParser.RULE_flowExpr);
    try {
        this.state = 241;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.PROG:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.match(CalcParser.PROG);
            this.state = 232;
            this.match(CalcParser.T__3);
            this.state = 233;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.RETURN:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.match(CalcParser.RETURN);
            break;
        case CalcParser.LBL:
            this.enterOuterAlt(localctx, 3);
            this.state = 235;
            this.match(CalcParser.LBL);
            this.state = 236;
            this.match(CalcParser.T__3);
            this.state = 237;
            this.lbl();
            break;
        case CalcParser.GOTO:
            this.enterOuterAlt(localctx, 4);
            this.state = 238;
            this.match(CalcParser.GOTO);
            this.state = 239;
            this.lbl();
            break;
        case CalcParser.STOP:
            this.enterOuterAlt(localctx, 5);
            this.state = 240;
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

function ForExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_forExpr;
    return this;
}

ForExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForExprContext.prototype.constructor = ForExprContext;

ForExprContext.prototype.FOR = function() {
    return this.getToken(CalcParser.FOR, 0);
};

ForExprContext.prototype.assignExpr = function() {
    return this.getTypedRuleContext(AssignExprContext,0);
};

ForExprContext.prototype.TO = function() {
    return this.getToken(CalcParser.TO, 0);
};

ForExprContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

ForExprContext.prototype.cmdEnd = function() {
    return this.getTypedRuleContext(CmdEndContext,0);
};

ForExprContext.prototype.NEXT = function() {
    return this.getToken(CalcParser.NEXT, 0);
};

ForExprContext.prototype.cmd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CmdContext);
    } else {
        return this.getTypedRuleContext(CmdContext,i);
    }
};

ForExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterForExpr(this);
	}
};

ForExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitForExpr(this);
	}
};

ForExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitForExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ForExprContext = ForExprContext;

CalcParser.prototype.forExpr = function() {

    var localctx = new ForExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CalcParser.RULE_forExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(CalcParser.FOR);
        this.state = 244;
        this.match(CalcParser.T__3);
        this.state = 245;
        this.assignExpr();
        this.state = 246;
        this.match(CalcParser.T__3);
        this.state = 247;
        this.match(CalcParser.TO);
        this.state = 248;
        this.match(CalcParser.T__3);
        this.state = 249;
        this.evalExpr(0);
        this.state = 250;
        this.cmdEnd();
        this.state = 252; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 251;
            this.cmd();
            this.state = 254; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__6) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (CalcParser.GOTO - 36)) | (1 << (CalcParser.LBL - 36)) | (1 << (CalcParser.PROG - 36)) | (1 << (CalcParser.RETURN - 36)) | (1 << (CalcParser.STOP - 36)) | (1 << (CalcParser.IF - 36)) | (1 << (CalcParser.FOR - 36)) | (1 << (CalcParser.DO - 36)) | (1 << (CalcParser.GETKEY - 36)) | (1 << (CalcParser.LOCATE - 36)) | (1 << (CalcParser.CLRTXT - 36)) | (1 << (CalcParser.NORM - 36)) | (1 << (CalcParser.GRA - 36)) | (1 << (CalcParser.FIX - 36)) | (1 << (CalcParser.CLRGRPH - 36)) | (1 << (CalcParser.VIEWWINDOW - 36)) | (1 << (CalcParser.AXESON - 36)) | (1 << (CalcParser.AXESOFF - 36)) | (1 << (CalcParser.FLINE - 36)) | (1 << (CalcParser.PLOTON - 36)) | (1 << (CalcParser.MATR - 36)) | (1 << (CalcParser.LISTMAT - 36)) | (1 << (CalcParser.SEQ - 36)) | (1 << (CalcParser.PI - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (CalcParser.ANS - 68)) | (1 << (CalcParser.ABS - 68)) | (1 << (CalcParser.ACOS - 68)) | (1 << (CalcParser.ASIN - 68)) | (1 << (CalcParser.ATAN - 68)) | (1 << (CalcParser.COS - 68)) | (1 << (CalcParser.INT - 68)) | (1 << (CalcParser.SIN - 68)) | (1 << (CalcParser.SQRT - 68)) | (1 << (CalcParser.TAN - 68)) | (1 << (CalcParser.EXPNT - 68)) | (1 << (CalcParser.ID - 68)) | (1 << (CalcParser.NUM - 68)) | (1 << (CalcParser.STRING - 68)) | (1 << (CalcParser.NEWLINE - 68)))) !== 0));
        this.state = 256;
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

function GraphExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_graphExpr;
    return this;
}

GraphExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphExprContext.prototype.constructor = GraphExprContext;

GraphExprContext.prototype.AXESOFF = function() {
    return this.getToken(CalcParser.AXESOFF, 0);
};

GraphExprContext.prototype.AXESON = function() {
    return this.getToken(CalcParser.AXESON, 0);
};

GraphExprContext.prototype.CLRGRPH = function() {
    return this.getToken(CalcParser.CLRGRPH, 0);
};

GraphExprContext.prototype.VIEWWINDOW = function() {
    return this.getToken(CalcParser.VIEWWINDOW, 0);
};

GraphExprContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

GraphExprContext.prototype.FLINE = function() {
    return this.getToken(CalcParser.FLINE, 0);
};

GraphExprContext.prototype.PLOTON = function() {
    return this.getToken(CalcParser.PLOTON, 0);
};

GraphExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterGraphExpr(this);
	}
};

GraphExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitGraphExpr(this);
	}
};

GraphExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitGraphExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.GraphExprContext = GraphExprContext;

CalcParser.prototype.graphExpr = function() {

    var localctx = new GraphExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CalcParser.RULE_graphExpr);
    try {
        this.state = 291;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.AXESOFF:
            this.enterOuterAlt(localctx, 1);
            this.state = 258;
            this.match(CalcParser.AXESOFF);
            break;
        case CalcParser.AXESON:
            this.enterOuterAlt(localctx, 2);
            this.state = 259;
            this.match(CalcParser.AXESON);
            break;
        case CalcParser.CLRGRPH:
            this.enterOuterAlt(localctx, 3);
            this.state = 260;
            this.match(CalcParser.CLRGRPH);
            break;
        case CalcParser.VIEWWINDOW:
            this.enterOuterAlt(localctx, 4);
            this.state = 261;
            this.match(CalcParser.VIEWWINDOW);
            this.state = 262;
            this.match(CalcParser.T__3);
            this.state = 263;
            this.evalExpr(0);
            this.state = 264;
            this.match(CalcParser.T__1);
            this.state = 265;
            this.evalExpr(0);
            this.state = 266;
            this.match(CalcParser.T__1);
            this.state = 267;
            this.evalExpr(0);
            this.state = 268;
            this.match(CalcParser.T__1);
            this.state = 269;
            this.evalExpr(0);
            this.state = 270;
            this.match(CalcParser.T__1);
            this.state = 271;
            this.evalExpr(0);
            this.state = 272;
            this.match(CalcParser.T__1);
            this.state = 273;
            this.evalExpr(0);
            break;
        case CalcParser.FLINE:
            this.enterOuterAlt(localctx, 5);
            this.state = 275;
            this.match(CalcParser.FLINE);
            this.state = 276;
            this.match(CalcParser.T__3);
            this.state = 277;
            this.evalExpr(0);
            this.state = 278;
            this.match(CalcParser.T__1);
            this.state = 279;
            this.evalExpr(0);
            this.state = 280;
            this.match(CalcParser.T__1);
            this.state = 281;
            this.evalExpr(0);
            this.state = 282;
            this.match(CalcParser.T__1);
            this.state = 283;
            this.evalExpr(0);
            break;
        case CalcParser.PLOTON:
            this.enterOuterAlt(localctx, 6);
            this.state = 285;
            this.match(CalcParser.PLOTON);
            this.state = 286;
            this.match(CalcParser.T__3);
            this.state = 287;
            this.evalExpr(0);
            this.state = 288;
            this.match(CalcParser.T__1);
            this.state = 289;
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

function IfExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_ifExpr;
    return this;
}

IfExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfExprContext.prototype.constructor = IfExprContext;

IfExprContext.prototype.IF = function() {
    return this.getToken(CalcParser.IF, 0);
};

IfExprContext.prototype.boolExpr = function() {
    return this.getTypedRuleContext(BoolExprContext,0);
};

IfExprContext.prototype.cmdEnd = function() {
    return this.getTypedRuleContext(CmdEndContext,0);
};

IfExprContext.prototype.THEN = function() {
    return this.getToken(CalcParser.THEN, 0);
};

IfExprContext.prototype.IFEND = function() {
    return this.getToken(CalcParser.IFEND, 0);
};

IfExprContext.prototype.cmd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CmdContext);
    } else {
        return this.getTypedRuleContext(CmdContext,i);
    }
};

IfExprContext.prototype.ELSE = function() {
    return this.getToken(CalcParser.ELSE, 0);
};

IfExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterIfExpr(this);
	}
};

IfExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitIfExpr(this);
	}
};

IfExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitIfExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.IfExprContext = IfExprContext;

CalcParser.prototype.ifExpr = function() {

    var localctx = new IfExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CalcParser.RULE_ifExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(CalcParser.IF);
        this.state = 294;
        this.match(CalcParser.T__3);
        this.state = 295;
        this.boolExpr(0);
        this.state = 296;
        this.cmdEnd();
        this.state = 297;
        this.match(CalcParser.THEN);
        this.state = 298;
        this.match(CalcParser.T__3);
        this.state = 300; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 299;
            this.cmd();
            this.state = 302; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__6) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (CalcParser.GOTO - 36)) | (1 << (CalcParser.LBL - 36)) | (1 << (CalcParser.PROG - 36)) | (1 << (CalcParser.RETURN - 36)) | (1 << (CalcParser.STOP - 36)) | (1 << (CalcParser.IF - 36)) | (1 << (CalcParser.FOR - 36)) | (1 << (CalcParser.DO - 36)) | (1 << (CalcParser.GETKEY - 36)) | (1 << (CalcParser.LOCATE - 36)) | (1 << (CalcParser.CLRTXT - 36)) | (1 << (CalcParser.NORM - 36)) | (1 << (CalcParser.GRA - 36)) | (1 << (CalcParser.FIX - 36)) | (1 << (CalcParser.CLRGRPH - 36)) | (1 << (CalcParser.VIEWWINDOW - 36)) | (1 << (CalcParser.AXESON - 36)) | (1 << (CalcParser.AXESOFF - 36)) | (1 << (CalcParser.FLINE - 36)) | (1 << (CalcParser.PLOTON - 36)) | (1 << (CalcParser.MATR - 36)) | (1 << (CalcParser.LISTMAT - 36)) | (1 << (CalcParser.SEQ - 36)) | (1 << (CalcParser.PI - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (CalcParser.ANS - 68)) | (1 << (CalcParser.ABS - 68)) | (1 << (CalcParser.ACOS - 68)) | (1 << (CalcParser.ASIN - 68)) | (1 << (CalcParser.ATAN - 68)) | (1 << (CalcParser.COS - 68)) | (1 << (CalcParser.INT - 68)) | (1 << (CalcParser.SIN - 68)) | (1 << (CalcParser.SQRT - 68)) | (1 << (CalcParser.TAN - 68)) | (1 << (CalcParser.EXPNT - 68)) | (1 << (CalcParser.ID - 68)) | (1 << (CalcParser.NUM - 68)) | (1 << (CalcParser.STRING - 68)) | (1 << (CalcParser.NEWLINE - 68)))) !== 0));
        this.state = 311;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CalcParser.ELSE) {
            this.state = 304;
            this.match(CalcParser.ELSE);
            this.state = 305;
            this.match(CalcParser.T__3);
            this.state = 307; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 306;
                this.cmd();
                this.state = 309; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__6) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (CalcParser.GOTO - 36)) | (1 << (CalcParser.LBL - 36)) | (1 << (CalcParser.PROG - 36)) | (1 << (CalcParser.RETURN - 36)) | (1 << (CalcParser.STOP - 36)) | (1 << (CalcParser.IF - 36)) | (1 << (CalcParser.FOR - 36)) | (1 << (CalcParser.DO - 36)) | (1 << (CalcParser.GETKEY - 36)) | (1 << (CalcParser.LOCATE - 36)) | (1 << (CalcParser.CLRTXT - 36)) | (1 << (CalcParser.NORM - 36)) | (1 << (CalcParser.GRA - 36)) | (1 << (CalcParser.FIX - 36)) | (1 << (CalcParser.CLRGRPH - 36)) | (1 << (CalcParser.VIEWWINDOW - 36)) | (1 << (CalcParser.AXESON - 36)) | (1 << (CalcParser.AXESOFF - 36)) | (1 << (CalcParser.FLINE - 36)) | (1 << (CalcParser.PLOTON - 36)) | (1 << (CalcParser.MATR - 36)) | (1 << (CalcParser.LISTMAT - 36)) | (1 << (CalcParser.SEQ - 36)) | (1 << (CalcParser.PI - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (CalcParser.ANS - 68)) | (1 << (CalcParser.ABS - 68)) | (1 << (CalcParser.ACOS - 68)) | (1 << (CalcParser.ASIN - 68)) | (1 << (CalcParser.ATAN - 68)) | (1 << (CalcParser.COS - 68)) | (1 << (CalcParser.INT - 68)) | (1 << (CalcParser.SIN - 68)) | (1 << (CalcParser.SQRT - 68)) | (1 << (CalcParser.TAN - 68)) | (1 << (CalcParser.EXPNT - 68)) | (1 << (CalcParser.ID - 68)) | (1 << (CalcParser.NUM - 68)) | (1 << (CalcParser.STRING - 68)) | (1 << (CalcParser.NEWLINE - 68)))) !== 0));
        }

        this.state = 313;
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

function PrintExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_printExpr;
    return this;
}

PrintExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintExprContext.prototype.constructor = PrintExprContext;

PrintExprContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};

PrintExprContext.prototype.CLRTXT = function() {
    return this.getToken(CalcParser.CLRTXT, 0);
};

PrintExprContext.prototype.LOCATE = function() {
    return this.getToken(CalcParser.LOCATE, 0);
};

PrintExprContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

PrintExprContext.prototype.matr = function() {
    return this.getTypedRuleContext(MatrContext,0);
};

PrintExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterPrintExpr(this);
	}
};

PrintExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitPrintExpr(this);
	}
};

PrintExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitPrintExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.PrintExprContext = PrintExprContext;

CalcParser.prototype.printExpr = function() {

    var localctx = new PrintExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CalcParser.RULE_printExpr);
    try {
        this.state = 335;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 315;
            this.match(CalcParser.STRING);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 316;
            this.match(CalcParser.CLRTXT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 317;
            this.match(CalcParser.LOCATE);
            this.state = 318;
            this.match(CalcParser.T__3);
            this.state = 319;
            this.evalExpr(0);
            this.state = 320;
            this.match(CalcParser.T__1);
            this.state = 321;
            this.evalExpr(0);
            this.state = 322;
            this.match(CalcParser.T__1);
            this.state = 323;
            this.evalExpr(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 325;
            this.match(CalcParser.LOCATE);
            this.state = 326;
            this.match(CalcParser.T__3);
            this.state = 327;
            this.evalExpr(0);
            this.state = 328;
            this.match(CalcParser.T__1);
            this.state = 329;
            this.evalExpr(0);
            this.state = 330;
            this.match(CalcParser.T__1);
            this.state = 331;
            this.match(CalcParser.STRING);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 333;
            this.evalExpr(0);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 334;
            this.matr();
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

function ReadExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_readExpr;
    return this;
}

ReadExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadExprContext.prototype.constructor = ReadExprContext;

ReadExprContext.prototype.STRING = function() {
    return this.getToken(CalcParser.STRING, 0);
};

ReadExprContext.prototype.QUESMARK = function() {
    return this.getToken(CalcParser.QUESMARK, 0);
};

ReadExprContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

ReadExprContext.prototype.storExpr = function() {
    return this.getTypedRuleContext(StorExprContext,0);
};

ReadExprContext.prototype.GETKEY = function() {
    return this.getToken(CalcParser.GETKEY, 0);
};

ReadExprContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

ReadExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterReadExpr(this);
	}
};

ReadExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitReadExpr(this);
	}
};

ReadExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitReadExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ReadExprContext = ReadExprContext;

CalcParser.prototype.readExpr = function() {

    var localctx = new ReadExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CalcParser.RULE_readExpr);
    try {
        this.state = 344;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 337;
            this.match(CalcParser.STRING);
            this.state = 338;
            this.match(CalcParser.QUESMARK);
            this.state = 339;
            this.match(CalcParser.ARROW);
            this.state = 340;
            this.storExpr();
            break;
        case CalcParser.GETKEY:
            this.enterOuterAlt(localctx, 2);
            this.state = 341;
            this.match(CalcParser.GETKEY);
            this.state = 342;
            this.match(CalcParser.ARROW);
            this.state = 343;
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

function StorExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_storExpr;
    return this;
}

StorExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StorExprContext.prototype.constructor = StorExprContext;

StorExprContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

StorExprContext.prototype.matrElt = function() {
    return this.getTypedRuleContext(MatrEltContext,0);
};

StorExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterStorExpr(this);
	}
};

StorExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitStorExpr(this);
	}
};

StorExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitStorExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.StorExprContext = StorExprContext;

CalcParser.prototype.storExpr = function() {

    var localctx = new StorExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CalcParser.RULE_storExpr);
    try {
        this.state = 348;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 346;
            this.match(CalcParser.ID);
            break;
        case CalcParser.MATR:
            this.enterOuterAlt(localctx, 2);
            this.state = 347;
            this.matrElt();
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

function ValueExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_valueExpr;
    return this;
}

ValueExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueExprContext.prototype.constructor = ValueExprContext;

ValueExprContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

ValueExprContext.prototype.NUM = function() {
    return this.getToken(CalcParser.NUM, 0);
};

ValueExprContext.prototype.PI = function() {
    return this.getToken(CalcParser.PI, 0);
};

ValueExprContext.prototype.matrElt = function() {
    return this.getTypedRuleContext(MatrEltContext,0);
};

ValueExprContext.prototype.ANS = function() {
    return this.getToken(CalcParser.ANS, 0);
};

ValueExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterValueExpr(this);
	}
};

ValueExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitValueExpr(this);
	}
};

ValueExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitValueExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.ValueExprContext = ValueExprContext;

CalcParser.prototype.valueExpr = function() {

    var localctx = new ValueExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CalcParser.RULE_valueExpr);
    try {
        this.state = 355;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 350;
            this.match(CalcParser.ID);
            break;
        case CalcParser.NUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 351;
            this.match(CalcParser.NUM);
            break;
        case CalcParser.PI:
            this.enterOuterAlt(localctx, 3);
            this.state = 352;
            this.match(CalcParser.PI);
            break;
        case CalcParser.MATR:
            this.enterOuterAlt(localctx, 4);
            this.state = 353;
            this.matrElt();
            break;
        case CalcParser.ANS:
            this.enterOuterAlt(localctx, 5);
            this.state = 354;
            this.match(CalcParser.ANS);
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

LblContext.prototype.NUM = function() {
    return this.getToken(CalcParser.NUM, 0);
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
    this.enterRule(localctx, 36, CalcParser.RULE_lbl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.ID || _la===CalcParser.NUM)) {
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

FuncContext.prototype.ABS = function() {
    return this.getToken(CalcParser.ABS, 0);
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

FuncContext.prototype.COS = function() {
    return this.getToken(CalcParser.COS, 0);
};

FuncContext.prototype.INT = function() {
    return this.getToken(CalcParser.INT, 0);
};

FuncContext.prototype.SIN = function() {
    return this.getToken(CalcParser.SIN, 0);
};

FuncContext.prototype.SQRT = function() {
    return this.getToken(CalcParser.SQRT, 0);
};

FuncContext.prototype.TAN = function() {
    return this.getToken(CalcParser.TAN, 0);
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
    this.enterRule(localctx, 38, CalcParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        _la = this._input.LA(1);
        if(!(((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (CalcParser.ABS - 69)) | (1 << (CalcParser.ACOS - 69)) | (1 << (CalcParser.ASIN - 69)) | (1 << (CalcParser.ATAN - 69)) | (1 << (CalcParser.COS - 69)) | (1 << (CalcParser.INT - 69)) | (1 << (CalcParser.SIN - 69)) | (1 << (CalcParser.SQRT - 69)) | (1 << (CalcParser.TAN - 69)))) !== 0))) {
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

function MatrEltContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_matrElt;
    return this;
}

MatrEltContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrEltContext.prototype.constructor = MatrEltContext;

MatrEltContext.prototype.matr = function() {
    return this.getTypedRuleContext(MatrContext,0);
};

MatrEltContext.prototype.evalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EvalExprContext);
    } else {
        return this.getTypedRuleContext(EvalExprContext,i);
    }
};

MatrEltContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatrElt(this);
	}
};

MatrEltContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatrElt(this);
	}
};

MatrEltContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatrElt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrEltContext = MatrEltContext;

CalcParser.prototype.matrElt = function() {

    var localctx = new MatrEltContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CalcParser.RULE_matrElt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.matr();
        this.state = 362;
        this.match(CalcParser.T__4);
        this.state = 363;
        this.evalExpr(0);
        this.state = 364;
        this.match(CalcParser.T__1);
        this.state = 365;
        this.evalExpr(0);
        this.state = 366;
        this.match(CalcParser.T__5);
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

function MatrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_matr;
    return this;
}

MatrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrContext.prototype.constructor = MatrContext;

MatrContext.prototype.MATR = function() {
    return this.getToken(CalcParser.MATR, 0);
};

MatrContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

MatrContext.prototype.ANS = function() {
    return this.getToken(CalcParser.ANS, 0);
};

MatrContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterMatr(this);
	}
};

MatrContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitMatr(this);
	}
};

MatrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitMatr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.MatrContext = MatrContext;

CalcParser.prototype.matr = function() {

    var localctx = new MatrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CalcParser.RULE_matr);
    try {
        this.state = 372;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 368;
            this.match(CalcParser.MATR);
            this.state = 369;
            this.match(CalcParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 370;
            this.match(CalcParser.MATR);
            this.state = 371;
            this.match(CalcParser.ANS);
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

ListContext.prototype.NUM = function() {
    return this.getToken(CalcParser.NUM, 0);
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
    this.enterRule(localctx, 44, CalcParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(CalcParser.LIST);
        this.state = 375;
        this.match(CalcParser.NUM);
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

function CmdEndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_cmdEnd;
    return this;
}

CmdEndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CmdEndContext.prototype.constructor = CmdEndContext;

CmdEndContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

CmdEndContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterCmdEnd(this);
	}
};

CmdEndContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitCmdEnd(this);
	}
};

CmdEndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitCmdEnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.CmdEndContext = CmdEndContext;

CalcParser.prototype.cmdEnd = function() {

    var localctx = new CmdEndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CalcParser.RULE_cmdEnd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.T__6 || _la===CalcParser.NEWLINE)) {
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

function DataBegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_dataBeg;
    return this;
}

DataBegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataBegContext.prototype.constructor = DataBegContext;

DataBegContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

DataBegContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterDataBeg(this);
	}
};

DataBegContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitDataBeg(this);
	}
};

DataBegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitDataBeg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.DataBegContext = DataBegContext;

CalcParser.prototype.dataBeg = function() {

    var localctx = new DataBegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CalcParser.RULE_dataBeg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(CalcParser.T__7);
        this.state = 380;
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

function FileEndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_fileEnd;
    return this;
}

FileEndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileEndContext.prototype.constructor = FileEndContext;

FileEndContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

FileEndContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterFileEnd(this);
	}
};

FileEndContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitFileEnd(this);
	}
};

FileEndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitFileEnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.FileEndContext = FileEndContext;

CalcParser.prototype.fileEnd = function() {

    var localctx = new FileEndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CalcParser.RULE_fileEnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.match(CalcParser.T__8);
        this.state = 383;
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

HeaderContext.prototype.headerBeg = function() {
    return this.getTypedRuleContext(HeaderBegContext,0);
};

HeaderContext.prototype.entry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EntryContext);
    } else {
        return this.getTypedRuleContext(EntryContext,i);
    }
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
    this.enterRule(localctx, 52, CalcParser.RULE_header);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.headerBeg();
        this.state = 387; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 386;
            this.entry();
            this.state = 389; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__9) | (1 << CalcParser.T__10) | (1 << CalcParser.T__11) | (1 << CalcParser.T__12) | (1 << CalcParser.T__13) | (1 << CalcParser.T__14) | (1 << CalcParser.T__15) | (1 << CalcParser.T__16) | (1 << CalcParser.T__17) | (1 << CalcParser.T__18) | (1 << CalcParser.T__19))) !== 0));
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

function EntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_entry;
    return this;
}

EntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryContext.prototype.constructor = EntryContext;

EntryContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

EntryContext.prototype.option = function() {
    return this.getTypedRuleContext(OptionContext,0);
};

EntryContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterEntry(this);
	}
};

EntryContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitEntry(this);
	}
};

EntryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitEntry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.EntryContext = EntryContext;

CalcParser.prototype.entry = function() {

    var localctx = new EntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, CalcParser.RULE_entry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 391;
        this.label();
        this.state = 392;
        this.match(CalcParser.T__6);
        this.state = 393;
        this.option();
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

function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;


LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.LabelContext = LabelContext;

CalcParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, CalcParser.RULE_label);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__9) | (1 << CalcParser.T__10) | (1 << CalcParser.T__11) | (1 << CalcParser.T__12) | (1 << CalcParser.T__13) | (1 << CalcParser.T__14) | (1 << CalcParser.T__15) | (1 << CalcParser.T__16) | (1 << CalcParser.T__17) | (1 << CalcParser.T__18) | (1 << CalcParser.T__19))) !== 0))) {
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

function OptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_option;
    return this;
}

OptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionContext.prototype.constructor = OptionContext;

OptionContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

OptionContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

OptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterOption(this);
	}
};

OptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitOption(this);
	}
};

OptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.OptionContext = OptionContext;

CalcParser.prototype.option = function() {

    var localctx = new OptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, CalcParser.RULE_option);
    try {
        this.state = 401;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.ID:
        case CalcParser.NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 397;
            this.value(0);
            this.state = 398;
            this.match(CalcParser.NEWLINE);
            break;
        case CalcParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 400;
            this.match(CalcParser.NEWLINE);
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.ID = function() {
    return this.getToken(CalcParser.ID, 0);
};

ValueContext.prototype.NUM = function() {
    return this.getToken(CalcParser.NUM, 0);
};

ValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.prototype.value = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ValueContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 60;
    this.enterRecursionRule(localctx, 60, CalcParser.RULE_value, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.state = 404;
            this.match(CalcParser.ID);
            break;

        case 2:
            this.state = 405;
            this.match(CalcParser.NUM);
            break;

        case 3:
            this.state = 406;
            this.match(CalcParser.NUM);
            this.state = 407;
            this.match(CalcParser.ID);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 421;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ValueContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_value);
                this.state = 410;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 412; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 411;
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
                	this.state = 414; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,29, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                this.state = 417;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
                if(la_===1) {
                    this.state = 416;
                    this.value(0);

                } 
            }
            this.state = 423;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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

function HeaderBegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_headerBeg;
    return this;
}

HeaderBegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderBegContext.prototype.constructor = HeaderBegContext;

HeaderBegContext.prototype.NEWLINE = function() {
    return this.getToken(CalcParser.NEWLINE, 0);
};

HeaderBegContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterHeaderBeg(this);
	}
};

HeaderBegContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitHeaderBeg(this);
	}
};

HeaderBegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitHeaderBeg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.HeaderBegContext = HeaderBegContext;

CalcParser.prototype.headerBeg = function() {

    var localctx = new HeaderBegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, CalcParser.RULE_headerBeg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this.match(CalcParser.T__20);
        this.state = 425;
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

BoolOpContext.prototype.EQ = function() {
    return this.getToken(CalcParser.EQ, 0);
};

BoolOpContext.prototype.NE = function() {
    return this.getToken(CalcParser.NE, 0);
};

BoolOpContext.prototype.GT = function() {
    return this.getToken(CalcParser.GT, 0);
};

BoolOpContext.prototype.GE = function() {
    return this.getToken(CalcParser.GE, 0);
};

BoolOpContext.prototype.LT = function() {
    return this.getToken(CalcParser.LT, 0);
};

BoolOpContext.prototype.LE = function() {
    return this.getToken(CalcParser.LE, 0);
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
    this.enterRule(localctx, 64, CalcParser.RULE_boolOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.EQ) | (1 << CalcParser.NE) | (1 << CalcParser.GT) | (1 << CalcParser.GE) | (1 << CalcParser.LT) | (1 << CalcParser.LE))) !== 0))) {
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
	case 6:
			return this.boolExpr_sempred(localctx, predIndex);
	case 9:
			return this.evalExpr_sempred(localctx, predIndex);
	case 30:
			return this.value_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalcParser.prototype.boolExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CalcParser.prototype.evalExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 12);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CalcParser.prototype.value_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalcParser = CalcParser;
