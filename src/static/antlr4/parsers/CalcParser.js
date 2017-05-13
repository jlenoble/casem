// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00032\u012f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0003",
    "\u0002\u0007\u0002J\n\u0002\f\u0002\u000e\u0002M\u000b\u0002\u0003\u0002",
    "\u0005\u0002P\n\u0002\u0003\u0002\u0006\u0002S\n\u0002\r\u0002\u000e",
    "\u0002T\u0005\u0002W\n\u0002\u0003\u0003\u0003\u0003\u0007\u0003[\n",
    "\u0003\f\u0003\u000e\u0003^\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0006\u0004e\n\u0004\r\u0004\u000e\u0004",
    "f\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005o\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006y",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0083\n\u0007\u0005",
    "\u0007\u0085\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0005\b\u008e\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u009b\n\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ad",
    "\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0007\f\u00b7\n\f\f\f\u000e\f\u00ba\u000b\f\u0003\r\u0003\r\u0005\r",
    "\u00be\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00d1\n\u0010\f\u0010\u000e\u0010\u00d4\u000b\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u00dc\n\u0011\f\u0011\u000e\u0011\u00df\u000b\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0006\u0013\u00f1\n\u0013\r\u0013",
    "\u000e\u0013\u00f2\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u00fb\n\u0015\u0003\u0016\u0003\u0016",
    "\u0007\u0016\u00ff\n\u0016\f\u0016\u000e\u0016\u0102\u000b\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0006\u0019\u010e\n\u0019",
    "\r\u0019\u000e\u0019\u010f\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0006\u001e\u011c\n\u001e\r\u001e\u000e\u001e\u011d\u0003\u001e",
    "\u0005\u001e\u0121\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003",
    "!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0002\u0003",
    "\u0016%\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDF\u0002\b\u0005\u0002\u000e\u000e",
    "\u0012\u0012//\u0003\u0002\u0013\u0019\u0003\u0002\u001a\u001b\u0003",
    "\u0002\u001c\u001d\u0003\u0002\u001e#\u0003\u0002$%\u0002\u012f\u0002",
    "V\u0003\u0002\u0002\u0002\u0004X\u0003\u0002\u0002\u0002\u0006d\u0003",
    "\u0002\u0002\u0002\bn\u0003\u0002\u0002\u0002\nx\u0003\u0002\u0002\u0002",
    "\f\u0084\u0003\u0002\u0002\u0002\u000e\u0086\u0003\u0002\u0002\u0002",
    "\u0010\u0091\u0003\u0002\u0002\u0002\u0012\u009a\u0003\u0002\u0002\u0002",
    "\u0014\u009c\u0003\u0002\u0002\u0002\u0016\u00ac\u0003\u0002\u0002\u0002",
    "\u0018\u00bd\u0003\u0002\u0002\u0002\u001a\u00bf\u0003\u0002\u0002\u0002",
    "\u001c\u00c3\u0003\u0002\u0002\u0002\u001e\u00cc\u0003\u0002\u0002\u0002",
    " \u00d7\u0003\u0002\u0002\u0002\"\u00e2\u0003\u0002\u0002\u0002$\u00f0",
    "\u0003\u0002\u0002\u0002&\u00f4\u0003\u0002\u0002\u0002(\u00fa\u0003",
    "\u0002\u0002\u0002*\u00fc\u0003\u0002\u0002\u0002,\u0105\u0003\u0002",
    "\u0002\u0002.\u0108\u0003\u0002\u0002\u00020\u010b\u0003\u0002\u0002",
    "\u00022\u0111\u0003\u0002\u0002\u00024\u0114\u0003\u0002\u0002\u0002",
    "6\u0116\u0003\u0002\u0002\u00028\u0118\u0003\u0002\u0002\u0002:\u0120",
    "\u0003\u0002\u0002\u0002<\u0122\u0003\u0002\u0002\u0002>\u0124\u0003",
    "\u0002\u0002\u0002@\u0126\u0003\u0002\u0002\u0002B\u0128\u0003\u0002",
    "\u0002\u0002D\u012a\u0003\u0002\u0002\u0002F\u012c\u0003\u0002\u0002",
    "\u0002HJ\u0005\u0006\u0004\u0002IH\u0003\u0002\u0002\u0002JM\u0003\u0002",
    "\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LW\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002NP\u0005\u0006\u0004\u0002",
    "ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002",
    "\u0002QS\u0005\u0004\u0003\u0002RQ\u0003\u0002\u0002\u0002ST\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UW\u0003",
    "\u0002\u0002\u0002VK\u0003\u0002\u0002\u0002VO\u0003\u0002\u0002\u0002",
    "W\u0003\u0003\u0002\u0002\u0002X\\\u0005\"\u0012\u0002Y[\u0005\u0006",
    "\u0004\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z",
    "\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_`\u00050\u0019\u0002`\u0005\u0003",
    "\u0002\u0002\u0002ab\u0005\b\u0005\u0002bc\u0005:\u001e\u0002ce\u0003",
    "\u0002\u0002\u0002da\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002",
    "fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002g\u0007\u0003\u0002",
    "\u0002\u0002ho\u0005\n\u0006\u0002io\u0005\f\u0007\u0002jo\u0005\u000e",
    "\b\u0002ko\u0005\u0010\t\u0002lo\u0005\u0012\n\u0002mo\u0005\u0014\u000b",
    "\u0002nh\u0003\u0002\u0002\u0002ni\u0003\u0002\u0002\u0002nj\u0003\u0002",
    "\u0002\u0002nk\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002nm\u0003",
    "\u0002\u0002\u0002o\t\u0003\u0002\u0002\u0002pq\u0005\u0016\f\u0002",
    "qr\u0007&\u0002\u0002rs\u0005\u0018\r\u0002sy\u0003\u0002\u0002\u0002",
    "tu\u0005\u001e\u0010\u0002uv\u0007&\u0002\u0002vw\u00052\u001a\u0002",
    "wy\u0003\u0002\u0002\u0002xp\u0003\u0002\u0002\u0002xt\u0003\u0002\u0002",
    "\u0002y\u000b\u0003\u0002\u0002\u0002z\u0085\u0007\u0011\u0002\u0002",
    "{|\u0007-\u0002\u0002|}\u0005\u0016\f\u0002}~\u0007\u0003\u0002\u0002",
    "~\u007f\u0005\u0016\f\u0002\u007f\u0082\u0007\u0003\u0002\u0002\u0080",
    "\u0083\u0005\u0016\f\u0002\u0081\u0083\u0007\u0011\u0002\u0002\u0082",
    "\u0080\u0003\u0002\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083",
    "\u0085\u0003\u0002\u0002\u0002\u0084z\u0003\u0002\u0002\u0002\u0084",
    "{\u0003\u0002\u0002\u0002\u0085\r\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007*\u0002\u0002\u0087\u0088\u0005\u001a\u000e\u0002\u0088\u0089",
    "\u0005:\u001e\u0002\u0089\u008a\u00072\u0002\u0002\u008a\u008d\u0005",
    "\u0006\u0004\u0002\u008b\u008c\u0007(\u0002\u0002\u008c\u008e\u0005",
    "\u0006\u0004\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0007",
    "+\u0002\u0002\u0090\u000f\u0003\u0002\u0002\u0002\u0091\u0092\u0005",
    "\u001a\u000e\u0002\u0092\u0093\u0007\'\u0002\u0002\u0093\u0094\u0005",
    "\b\u0005\u0002\u0094\u0011\u0003\u0002\u0002\u0002\u0095\u0096\u0007",
    ")\u0002\u0002\u0096\u009b\u00056\u001c\u0002\u0097\u0098\u00070\u0002",
    "\u0002\u0098\u009b\u0007\u0011\u0002\u0002\u0099\u009b\u0005<\u001f",
    "\u0002\u009a\u0095\u0003\u0002\u0002\u0002\u009a\u0097\u0003\u0002\u0002",
    "\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u0013\u0003\u0002\u0002",
    "\u0002\u009c\u009d\u0007,\u0002\u0002\u009d\u009e\u00056\u001c\u0002",
    "\u009e\u0015\u0003\u0002\u0002\u0002\u009f\u00a0\b\f\u0001\u0002\u00a0",
    "\u00a1\u0007\u0004\u0002\u0002\u00a1\u00a2\u0005\u0016\f\u0002\u00a2",
    "\u00a3\u0007\u0005\u0002\u0002\u00a3\u00ad\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0007\u001b\u0002\u0002\u00a5\u00ad\u0005\u0016\f\t\u00a6\u00a7",
    "\u0005> \u0002\u00a7\u00a8\u0005\u0016\f\b\u00a8\u00ad\u0003\u0002\u0002",
    "\u0002\u00a9\u00ad\u0005\u001c\u000f\u0002\u00aa\u00ad\u00054\u001b",
    "\u0002\u00ab\u00ad\u00058\u001d\u0002\u00ac\u009f\u0003\u0002\u0002",
    "\u0002\u00ac\u00a4\u0003\u0002\u0002\u0002\u00ac\u00a6\u0003\u0002\u0002",
    "\u0002\u00ac\u00a9\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00b8\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\f\u0007\u0002\u0002\u00af\u00b0\u0005B\"\u0002\u00b0",
    "\u00b1\u0005\u0016\f\b\u00b1\u00b7\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\f\u0006\u0002\u0002\u00b3\u00b4\u0005@!\u0002\u00b4\u00b5\u0005\u0016",
    "\f\u0007\u00b5\u00b7\u0003\u0002\u0002\u0002\u00b6\u00ae\u0003\u0002",
    "\u0002\u0002\u00b6\u00b2\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002",
    "\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002",
    "\u0002\u0002\u00b9\u0017\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002",
    "\u0002\u0002\u00bb\u00be\u0005\u001c\u000f\u0002\u00bc\u00be\u00054",
    "\u001b\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00bd\u00bc\u0003\u0002",
    "\u0002\u0002\u00be\u0019\u0003\u0002\u0002\u0002\u00bf\u00c0\u0005\u0016",
    "\f\u0002\u00c0\u00c1\u0005D#\u0002\u00c1\u00c2\u0005\u0016\f\u0002\u00c2",
    "\u001b\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007.\u0002\u0002\u00c4",
    "\u00c5\u0007\r\u0002\u0002\u00c5\u00c6\u0007\u0006\u0002\u0002\u00c6",
    "\u00c7\u0005\u0016\f\u0002\u00c7\u00c8\u0007\u0007\u0002\u0002\u00c8",
    "\u00c9\u0007\u0006\u0002\u0002\u00c9\u00ca\u0005\u0016\f\u0002\u00ca",
    "\u00cb\u0007\u0007\u0002\u0002\u00cb\u001d\u0003\u0002\u0002\u0002\u00cc",
    "\u00cd\u0007\u0006\u0002\u0002\u00cd\u00d2\u0005 \u0011\u0002\u00ce",
    "\u00cf\u0007\u0003\u0002\u0002\u00cf\u00d1\u0005 \u0011\u0002\u00d0",
    "\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002\u00d2",
    "\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3",
    "\u00d5\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\u0007\u0007\u0002\u0002\u00d6\u001f\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0007\u0006\u0002\u0002\u00d8\u00dd\u0005\u0016\f\u0002\u00d9",
    "\u00da\u0007\u0003\u0002\u0002\u00da\u00dc\u0005\u0016\f\u0002\u00db",
    "\u00d9\u0003\u0002\u0002\u0002\u00dc\u00df\u0003\u0002\u0002\u0002\u00dd",
    "\u00db\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de",
    "\u00e0\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00e0",
    "\u00e1\u0007\u0007\u0002\u0002\u00e1!\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0005,\u0017\u0002\u00e3\u00e4\u0005$\u0013\u0002\u00e4\u00e5",
    "\u0005.\u0018\u0002\u00e5#\u0003\u0002\u0002\u0002\u00e6\u00e7\u0005",
    "&\u0014\u0002\u00e7\u00e8\u0007\b\u0002\u0002\u00e8\u00e9\u0005(\u0015",
    "\u0002\u00e9\u00ea\u0007\u0010\u0002\u0002\u00ea\u00f1\u0003\u0002\u0002",
    "\u0002\u00eb\u00ec\u0007\t\u0002\u0002\u00ec\u00ed\u0007\b\u0002\u0002",
    "\u00ed\u00ee\u0005*\u0016\u0002\u00ee\u00ef\u0007\u0010\u0002\u0002",
    "\u00ef\u00f1\u0003\u0002\u0002\u0002\u00f0\u00e6\u0003\u0002\u0002\u0002",
    "\u00f0\u00eb\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002",
    "\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002",
    "\u00f3%\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007\u000f\u0002\u0002",
    "\u00f5\'\u0003\u0002\u0002\u0002\u00f6\u00fb\u0007\u000f\u0002\u0002",
    "\u00f7\u00fb\u0007\u000e\u0002\u0002\u00f8\u00fb\u0007\u0012\u0002\u0002",
    "\u00f9\u00fb\u0003\u0002\u0002\u0002\u00fa\u00f6\u0003\u0002\u0002\u0002",
    "\u00fa\u00f7\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002",
    "\u00fa\u00f9\u0003\u0002\u0002\u0002\u00fb)\u0003\u0002\u0002\u0002",
    "\u00fc\u0100\u0005(\u0015\u0002\u00fd\u00ff\u0007\u001b\u0002\u0002",
    "\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff\u0102\u0003\u0002\u0002\u0002",
    "\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002",
    "\u0101\u0103\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002",
    "\u0103\u0104\u0007\u000f\u0002\u0002\u0104+\u0003\u0002\u0002\u0002",
    "\u0105\u0106\u0007\n\u0002\u0002\u0106\u0107\u0007\u0010\u0002\u0002",
    "\u0107-\u0003\u0002\u0002\u0002\u0108\u0109\u0007\u000b\u0002\u0002",
    "\u0109\u010a\u0007\u0010\u0002\u0002\u010a/\u0003\u0002\u0002\u0002",
    "\u010b\u010d\u0007\f\u0002\u0002\u010c\u010e\u0007\u0010\u0002\u0002",
    "\u010d\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002",
    "\u010f\u010d\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002",
    "\u01101\u0003\u0002\u0002\u0002\u0111\u0112\u0007.\u0002\u0002\u0112",
    "\u0113\u0007\r\u0002\u0002\u01133\u0003\u0002\u0002\u0002\u0114\u0115",
    "\u0007\r\u0002\u0002\u01155\u0003\u0002\u0002\u0002\u0116\u0117\u0007",
    "\r\u0002\u0002\u01177\u0003\u0002\u0002\u0002\u0118\u0119\t\u0002\u0002",
    "\u0002\u01199\u0003\u0002\u0002\u0002\u011a\u011c\u0007\u0010\u0002",
    "\u0002\u011b\u011a\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002",
    "\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011d\u011e\u0003\u0002\u0002",
    "\u0002\u011e\u0121\u0003\u0002\u0002\u0002\u011f\u0121\u0007\b\u0002",
    "\u0002\u0120\u011b\u0003\u0002\u0002\u0002\u0120\u011f\u0003\u0002\u0002",
    "\u0002\u0121;\u0003\u0002\u0002\u0002\u0122\u0123\u00071\u0002\u0002",
    "\u0123=\u0003\u0002\u0002\u0002\u0124\u0125\t\u0003\u0002\u0002\u0125",
    "?\u0003\u0002\u0002\u0002\u0126\u0127\t\u0004\u0002\u0002\u0127A\u0003",
    "\u0002\u0002\u0002\u0128\u0129\t\u0005\u0002\u0002\u0129C\u0003\u0002",
    "\u0002\u0002\u012a\u012b\t\u0006\u0002\u0002\u012bE\u0003\u0002\u0002",
    "\u0002\u012c\u012d\t\u0007\u0002\u0002\u012dG\u0003\u0002\u0002\u0002",
    "\u001bKOTV\\fnx\u0082\u0084\u008d\u009a\u00ac\u00b6\u00b8\u00bd\u00d2",
    "\u00dd\u00f0\u00f2\u00fa\u0100\u010f\u011d\u0120"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'('", "')'", "'['", "']'", "':'", "'File Name'", 
                     "'%Header Record'", "'%Data Record'", "'%End'", null, 
                     null, null, null, null, "'0'", "'\\sqrt'", "'\\cos '", 
                     "'\\sin '", "'\\tan '", "'\\acos '", "'\\asin '", "'\\atan '", 
                     "'+'", "'-'", "'*'", "'/'", "'='", "'\\<>'", "'>'", 
                     "'\\>='", "'<'", "'\\<='", "'\\ And '", "'\\ Or '", 
                     "'\\->'", "'\\=>'", "'\\Else '", "'\\Goto'", "'\\If '", 
                     "'\\IfEnd'", "'\\Lbl '", "'\\Locate '", "'\\Mat '", 
                     "'\\Pi'", "'\\Prog '", "'\\Return'", "'\\Then '" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, "ID", "NATNUM", "TEXT", "NEWLINE", "STRING", 
                      "ZERO", "SQRT", "COS", "SIN", "TAN", "ACOS", "ASIN", 
                      "ATAN", "ADD", "SUB", "MUL", "DIV", "EQ", "NE", "GT", 
                      "GE", "LT", "LE", "AND", "OR", "ARROW", "FATARROW", 
                      "ELSE", "GOTO", "IF", "IFEND", "LBL", "LOCATE", "MATRIX", 
                      "PI", "PROG", "RETURN", "THEN" ];

var ruleNames =  [ "prog", "file", "block", "stat", "assignStat", "printStat", 
                   "ifStat", "implyStat", "jumpStat", "labelStat", "evalExpr", 
                   "stoExpr", "boolExpr", "matrixElement", "matrixInitializer", 
                   "matrixRow", "header", "attributes", "headerAttr", "headerValue", 
                   "fileName", "startHeader", "endHeader", "endFile", "matrix", 
                   "variable", "lbl", "number", "endStat", "endProg", "func", 
                   "addOp", "multOp", "compOp", "boolOP" ];

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
CalcParser.ID = 11;
CalcParser.NATNUM = 12;
CalcParser.TEXT = 13;
CalcParser.NEWLINE = 14;
CalcParser.STRING = 15;
CalcParser.ZERO = 16;
CalcParser.SQRT = 17;
CalcParser.COS = 18;
CalcParser.SIN = 19;
CalcParser.TAN = 20;
CalcParser.ACOS = 21;
CalcParser.ASIN = 22;
CalcParser.ATAN = 23;
CalcParser.ADD = 24;
CalcParser.SUB = 25;
CalcParser.MUL = 26;
CalcParser.DIV = 27;
CalcParser.EQ = 28;
CalcParser.NE = 29;
CalcParser.GT = 30;
CalcParser.GE = 31;
CalcParser.LT = 32;
CalcParser.LE = 33;
CalcParser.AND = 34;
CalcParser.OR = 35;
CalcParser.ARROW = 36;
CalcParser.FATARROW = 37;
CalcParser.ELSE = 38;
CalcParser.GOTO = 39;
CalcParser.IF = 40;
CalcParser.IFEND = 41;
CalcParser.LBL = 42;
CalcParser.LOCATE = 43;
CalcParser.MATRIX = 44;
CalcParser.PI = 45;
CalcParser.PROG = 46;
CalcParser.RETURN = 47;
CalcParser.THEN = 48;

CalcParser.RULE_prog = 0;
CalcParser.RULE_file = 1;
CalcParser.RULE_block = 2;
CalcParser.RULE_stat = 3;
CalcParser.RULE_assignStat = 4;
CalcParser.RULE_printStat = 5;
CalcParser.RULE_ifStat = 6;
CalcParser.RULE_implyStat = 7;
CalcParser.RULE_jumpStat = 8;
CalcParser.RULE_labelStat = 9;
CalcParser.RULE_evalExpr = 10;
CalcParser.RULE_stoExpr = 11;
CalcParser.RULE_boolExpr = 12;
CalcParser.RULE_matrixElement = 13;
CalcParser.RULE_matrixInitializer = 14;
CalcParser.RULE_matrixRow = 15;
CalcParser.RULE_header = 16;
CalcParser.RULE_attributes = 17;
CalcParser.RULE_headerAttr = 18;
CalcParser.RULE_headerValue = 19;
CalcParser.RULE_fileName = 20;
CalcParser.RULE_startHeader = 21;
CalcParser.RULE_endHeader = 22;
CalcParser.RULE_endFile = 23;
CalcParser.RULE_matrix = 24;
CalcParser.RULE_variable = 25;
CalcParser.RULE_lbl = 26;
CalcParser.RULE_number = 27;
CalcParser.RULE_endStat = 28;
CalcParser.RULE_endProg = 29;
CalcParser.RULE_func = 30;
CalcParser.RULE_addOp = 31;
CalcParser.RULE_multOp = 32;
CalcParser.RULE_compOp = 33;
CalcParser.RULE_boolOP = 34;

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
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__3) | (1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.STRING) | (1 << CalcParser.ZERO) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (CalcParser.GOTO - 39)) | (1 << (CalcParser.IF - 39)) | (1 << (CalcParser.LBL - 39)) | (1 << (CalcParser.LOCATE - 39)) | (1 << (CalcParser.MATRIX - 39)) | (1 << (CalcParser.PI - 39)) | (1 << (CalcParser.PROG - 39)) | (1 << (CalcParser.RETURN - 39)))) !== 0)) {
                this.state = 70;
                this.block();
                this.state = 75;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__3) | (1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.STRING) | (1 << CalcParser.ZERO) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (CalcParser.GOTO - 39)) | (1 << (CalcParser.IF - 39)) | (1 << (CalcParser.LBL - 39)) | (1 << (CalcParser.LOCATE - 39)) | (1 << (CalcParser.MATRIX - 39)) | (1 << (CalcParser.PI - 39)) | (1 << (CalcParser.PROG - 39)) | (1 << (CalcParser.RETURN - 39)))) !== 0)) {
                this.state = 76;
                this.block();
            }

            this.state = 80; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 79;
                this.file();
                this.state = 82; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===CalcParser.T__7);
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
        this.state = 86;
        this.header();
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__3) | (1 << CalcParser.ID) | (1 << CalcParser.NATNUM) | (1 << CalcParser.STRING) | (1 << CalcParser.ZERO) | (1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN) | (1 << CalcParser.SUB))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (CalcParser.GOTO - 39)) | (1 << (CalcParser.IF - 39)) | (1 << (CalcParser.LBL - 39)) | (1 << (CalcParser.LOCATE - 39)) | (1 << (CalcParser.MATRIX - 39)) | (1 << (CalcParser.PI - 39)) | (1 << (CalcParser.PROG - 39)) | (1 << (CalcParser.RETURN - 39)))) !== 0)) {
            this.state = 87;
            this.block();
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
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
        this.state = 98; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 95;
        		this.stat();
        		this.state = 96;
        		this.endStat();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 100; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
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

StatContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
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
    this.enterRule(localctx, 6, CalcParser.RULE_stat);
    try {
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 102;
            this.assignStat();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.printStat();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 104;
            this.ifStat();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 105;
            this.implyStat();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 106;
            this.jumpStat();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 107;
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


 
AssignStatContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SetMatrixContext(parser, ctx) {
	AssignStatContext.call(this, parser);
    AssignStatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetMatrixContext.prototype = Object.create(AssignStatContext.prototype);
SetMatrixContext.prototype.constructor = SetMatrixContext;

CalcParser.SetMatrixContext = SetMatrixContext;

SetMatrixContext.prototype.matrixInitializer = function() {
    return this.getTypedRuleContext(MatrixInitializerContext,0);
};

SetMatrixContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

SetMatrixContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};
SetMatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterSetMatrix(this);
	}
};

SetMatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitSetMatrix(this);
	}
};

SetMatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitSetMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetStoExprContext(parser, ctx) {
	AssignStatContext.call(this, parser);
    AssignStatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetStoExprContext.prototype = Object.create(AssignStatContext.prototype);
SetStoExprContext.prototype.constructor = SetStoExprContext;

CalcParser.SetStoExprContext = SetStoExprContext;

SetStoExprContext.prototype.evalExpr = function() {
    return this.getTypedRuleContext(EvalExprContext,0);
};

SetStoExprContext.prototype.ARROW = function() {
    return this.getToken(CalcParser.ARROW, 0);
};

SetStoExprContext.prototype.stoExpr = function() {
    return this.getTypedRuleContext(StoExprContext,0);
};
SetStoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterSetStoExpr(this);
	}
};

SetStoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitSetStoExpr(this);
	}
};

SetStoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitSetStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalcParser.AssignStatContext = AssignStatContext;

CalcParser.prototype.assignStat = function() {

    var localctx = new AssignStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalcParser.RULE_assignStat);
    try {
        this.state = 118;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.T__1:
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
        case CalcParser.SUB:
        case CalcParser.MATRIX:
        case CalcParser.PI:
            localctx = new SetStoExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 110;
            this.evalExpr(0);
            this.state = 111;
            this.match(CalcParser.ARROW);
            this.state = 112;
            this.stoExpr();
            break;
        case CalcParser.T__3:
            localctx = new SetMatrixContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 114;
            this.matrixInitializer();
            this.state = 115;
            this.match(CalcParser.ARROW);
            this.state = 116;
            this.matrix();
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
        this.state = 130;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.match(CalcParser.LOCATE);
            this.state = 122;
            this.evalExpr(0);
            this.state = 123;
            this.match(CalcParser.T__0);
            this.state = 124;
            this.evalExpr(0);
            this.state = 125;
            this.match(CalcParser.T__0);
            this.state = 128;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CalcParser.T__1:
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
            case CalcParser.SUB:
            case CalcParser.MATRIX:
            case CalcParser.PI:
                this.state = 126;
                this.evalExpr(0);
                break;
            case CalcParser.STRING:
                this.state = 127;
                this.match(CalcParser.STRING);
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
    this.enterRule(localctx, 12, CalcParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(CalcParser.IF);
        this.state = 133;
        this.boolExpr();
        this.state = 134;
        this.endStat();
        this.state = 135;
        this.match(CalcParser.THEN);
        this.state = 136;
        this.block();
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CalcParser.ELSE) {
            this.state = 137;
            this.match(CalcParser.ELSE);
            this.state = 138;
            this.block();
        }

        this.state = 141;
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
    this.enterRule(localctx, 14, CalcParser.RULE_implyStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.boolExpr();
        this.state = 144;
        this.match(CalcParser.FATARROW);
        this.state = 145;
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
    this.enterRule(localctx, 16, CalcParser.RULE_jumpStat);
    try {
        this.state = 152;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.GOTO:
            this.enterOuterAlt(localctx, 1);
            this.state = 147;
            this.match(CalcParser.GOTO);
            this.state = 148;
            this.lbl();
            break;
        case CalcParser.PROG:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.match(CalcParser.PROG);
            this.state = 150;
            this.match(CalcParser.STRING);
            break;
        case CalcParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 151;
            this.endProg();
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
    this.enterRule(localctx, 18, CalcParser.RULE_labelStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(CalcParser.LBL);
        this.state = 155;
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



CalcParser.prototype.evalExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new EvalExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, CalcParser.RULE_evalExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.T__1:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 158;
            this.match(CalcParser.T__1);
            this.state = 159;
            this.evalExpr(0);
            this.state = 160;
            this.match(CalcParser.T__2);
            break;
        case CalcParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 162;
            this.match(CalcParser.SUB);
            this.state = 163;
            this.evalExpr(7);
            break;
        case CalcParser.SQRT:
        case CalcParser.COS:
        case CalcParser.SIN:
        case CalcParser.TAN:
        case CalcParser.ACOS:
        case CalcParser.ASIN:
        case CalcParser.ATAN:
            localctx = new ComputeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 164;
            this.func();
            this.state = 165;
            this.evalExpr(6);
            break;
        case CalcParser.MATRIX:
            localctx = new EvaluateMatrixElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 167;
            this.matrixElement();
            break;
        case CalcParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 168;
            this.variable();
            break;
        case CalcParser.NATNUM:
        case CalcParser.ZERO:
        case CalcParser.PI:
            localctx = new ParseFloatContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 169;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 182;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 180;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 172;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 173;
                    this.multOp();
                    this.state = 174;
                    this.evalExpr(6);
                    break;

                case 2:
                    localctx = new AddContext(this, new EvalExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_evalExpr);
                    this.state = 176;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 177;
                    this.addOp();
                    this.state = 178;
                    this.evalExpr(5);
                    break;

                } 
            }
            this.state = 184;
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
    this.enterRule(localctx, 22, CalcParser.RULE_stoExpr);
    try {
        this.state = 187;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.MATRIX:
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.matrixElement();
            break;
        case CalcParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 186;
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

BoolExprContext.prototype.compOp = function() {
    return this.getTypedRuleContext(CompOpContext,0);
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




CalcParser.BoolExprContext = BoolExprContext;

CalcParser.prototype.boolExpr = function() {

    var localctx = new BoolExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CalcParser.RULE_boolExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.evalExpr(0);
        this.state = 190;
        this.compOp();
        this.state = 191;
        this.evalExpr(0);
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
    this.enterRule(localctx, 26, CalcParser.RULE_matrixElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(CalcParser.MATRIX);
        this.state = 194;
        this.match(CalcParser.ID);
        this.state = 195;
        this.match(CalcParser.T__3);
        this.state = 196;
        this.evalExpr(0);
        this.state = 197;
        this.match(CalcParser.T__4);
        this.state = 198;
        this.match(CalcParser.T__3);
        this.state = 199;
        this.evalExpr(0);
        this.state = 200;
        this.match(CalcParser.T__4);
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
    this.enterRule(localctx, 28, CalcParser.RULE_matrixInitializer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(CalcParser.T__3);
        this.state = 203;
        this.matrixRow();
        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalcParser.T__0) {
            this.state = 204;
            this.match(CalcParser.T__0);
            this.state = 205;
            this.matrixRow();
            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 211;
        this.match(CalcParser.T__4);
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
    this.enterRule(localctx, 30, CalcParser.RULE_matrixRow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(CalcParser.T__3);
        this.state = 214;
        this.evalExpr(0);
        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalcParser.T__0) {
            this.state = 215;
            this.match(CalcParser.T__0);
            this.state = 216;
            this.evalExpr(0);
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 222;
        this.match(CalcParser.T__4);
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
    this.enterRule(localctx, 32, CalcParser.RULE_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.startHeader();
        this.state = 225;
        this.attributes();
        this.state = 226;
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
    this.enterRule(localctx, 34, CalcParser.RULE_attributes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 238;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CalcParser.TEXT:
                this.state = 228;
                this.headerAttr();
                this.state = 229;
                this.match(CalcParser.T__5);
                this.state = 230;
                this.headerValue();
                this.state = 231;
                this.match(CalcParser.NEWLINE);
                break;
            case CalcParser.T__6:
                this.state = 233;
                this.match(CalcParser.T__6);
                this.state = 234;
                this.match(CalcParser.T__5);
                this.state = 235;
                this.fileName();
                this.state = 236;
                this.match(CalcParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 240; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CalcParser.T__6 || _la===CalcParser.TEXT);
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

HeaderAttrContext.prototype.TEXT = function() {
    return this.getToken(CalcParser.TEXT, 0);
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
    this.enterRule(localctx, 36, CalcParser.RULE_headerAttr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(CalcParser.TEXT);
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
    this.enterRule(localctx, 38, CalcParser.RULE_headerValue);
    try {
        this.state = 248;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 244;
            this.match(CalcParser.TEXT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.match(CalcParser.NATNUM);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 246;
            this.match(CalcParser.ZERO);
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
    this.ruleIndex = CalcParser.RULE_fileName;
    return this;
}

FileNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileNameContext.prototype.constructor = FileNameContext;

FileNameContext.prototype.headerValue = function() {
    return this.getTypedRuleContext(HeaderValueContext,0);
};

FileNameContext.prototype.TEXT = function() {
    return this.getToken(CalcParser.TEXT, 0);
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




CalcParser.FileNameContext = FileNameContext;

CalcParser.prototype.fileName = function() {

    var localctx = new FileNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CalcParser.RULE_fileName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.headerValue();
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalcParser.SUB) {
            this.state = 251;
            this.match(CalcParser.SUB);
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 257;
        this.match(CalcParser.TEXT);
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
    this.enterRule(localctx, 42, CalcParser.RULE_startHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(CalcParser.T__7);
        this.state = 260;
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
    this.enterRule(localctx, 44, CalcParser.RULE_endHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.match(CalcParser.T__8);
        this.state = 263;
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
    this.enterRule(localctx, 46, CalcParser.RULE_endFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(CalcParser.T__9);
        this.state = 267; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 266;
            this.match(CalcParser.NEWLINE);
            this.state = 269; 
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
    this.enterRule(localctx, 48, CalcParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(CalcParser.MATRIX);
        this.state = 272;
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
    this.enterRule(localctx, 50, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
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
    this.enterRule(localctx, 52, CalcParser.RULE_lbl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
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

NumberContext.prototype.ZERO = function() {
    return this.getToken(CalcParser.ZERO, 0);
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
    this.enterRule(localctx, 54, CalcParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        _la = this._input.LA(1);
        if(!(_la===CalcParser.NATNUM || _la===CalcParser.ZERO || _la===CalcParser.PI)) {
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
    this.enterRule(localctx, 56, CalcParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.state = 286;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalcParser.NEWLINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 281; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 280;
                this.match(CalcParser.NEWLINE);
                this.state = 283; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===CalcParser.NEWLINE);
            break;
        case CalcParser.T__5:
            this.enterOuterAlt(localctx, 2);
            this.state = 285;
            this.match(CalcParser.T__5);
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
    this.enterRule(localctx, 58, CalcParser.RULE_endProg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
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
    this.enterRule(localctx, 60, CalcParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.SQRT) | (1 << CalcParser.COS) | (1 << CalcParser.SIN) | (1 << CalcParser.TAN) | (1 << CalcParser.ACOS) | (1 << CalcParser.ASIN) | (1 << CalcParser.ATAN))) !== 0))) {
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
    this.enterRule(localctx, 62, CalcParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
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
    this.enterRule(localctx, 64, CalcParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
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
    this.enterRule(localctx, 66, CalcParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        _la = this._input.LA(1);
        if(!(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (CalcParser.EQ - 28)) | (1 << (CalcParser.NE - 28)) | (1 << (CalcParser.GT - 28)) | (1 << (CalcParser.GE - 28)) | (1 << (CalcParser.LT - 28)) | (1 << (CalcParser.LE - 28)))) !== 0))) {
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

function BoolOPContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_boolOP;
    return this;
}

BoolOPContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOPContext.prototype.constructor = BoolOPContext;

BoolOPContext.prototype.AND = function() {
    return this.getToken(CalcParser.AND, 0);
};

BoolOPContext.prototype.OR = function() {
    return this.getToken(CalcParser.OR, 0);
};

BoolOPContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.enterBoolOP(this);
	}
};

BoolOPContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalcListener ) {
        listener.exitBoolOP(this);
	}
};

BoolOPContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalcVisitor ) {
        return visitor.visitBoolOP(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalcParser.BoolOPContext = BoolOPContext;

CalcParser.prototype.boolOP = function() {

    var localctx = new BoolOPContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, CalcParser.RULE_boolOP);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
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
	case 10:
			return this.evalExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalcParser.prototype.evalExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalcParser = CalcParser;
