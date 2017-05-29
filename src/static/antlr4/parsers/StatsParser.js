// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StatsListener = require('./StatsListener').StatsListener;
var StatsVisitor = require('./StatsVisitor').StatsVisitor;

var grammarFileName = "Stats.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u010a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002A\n\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003O\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004Y\n\u0004\u0005",
    "\u0004[\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
    "\bp\n\b\f\b\u000e\bs\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u0084\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0090\n\t\f\t\u000e",
    "\t\u0093\u000b\t\u0003\n\u0003\n\u0003\n\u0005\n\u0098\n\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u009e\n\n\f\n\u000e\n\u00a1\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a6\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00ac\n\u000b\f\u000b",
    "\u000e\u000b\u00af\u000b\u000b\u0003\f\u0003\f\u0005\f\u00b3\n\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0006\u000f",
    "\u00bb\n\u000f\r\u000f\u000e\u000f\u00bc\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00c5\n\u0010",
    "\f\u0010\u000e\u0010\u00c8\u000b\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00d0\n\u0011",
    "\f\u0011\u000e\u0011\u00d3\u000b\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00ec\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0005\u001e\u0108\n\u001e\u0003\u001e\u0002\u0006\u000e",
    "\u0010\u0012\u0014\u001f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:\u0002\b\u0004\u0002\u0006",
    "\u0006\u0010\u0010\b\u0002\u0018\u0018\u001b\u001b\u001d\u001d!!%%)",
    ")\u0004\u0002\n\n..\u0004\u0002\u0014\u0014\'(\u0004\u0002\t\t33\b\u0002",
    "\u0007\b\f\r\u0012\u0012  0144\u0002\u010b\u0002@\u0003\u0002\u0002",
    "\u0002\u0004N\u0003\u0002\u0002\u0002\u0006Z\u0003\u0002\u0002\u0002",
    "\b\\\u0003\u0002\u0002\u0002\n`\u0003\u0002\u0002\u0002\fd\u0003\u0002",
    "\u0002\u0002\u000ef\u0003\u0002\u0002\u0002\u0010\u0083\u0003\u0002",
    "\u0002\u0002\u0012\u0097\u0003\u0002\u0002\u0002\u0014\u00a5\u0003\u0002",
    "\u0002\u0002\u0016\u00b2\u0003\u0002\u0002\u0002\u0018\u00b4\u0003\u0002",
    "\u0002\u0002\u001a\u00b6\u0003\u0002\u0002\u0002\u001c\u00b8\u0003\u0002",
    "\u0002\u0002\u001e\u00c0\u0003\u0002\u0002\u0002 \u00cb\u0003\u0002",
    "\u0002\u0002\"\u00d6\u0003\u0002\u0002\u0002$\u00dd\u0003\u0002\u0002",
    "\u0002&\u00eb\u0003\u0002\u0002\u0002(\u00ed\u0003\u0002\u0002\u0002",
    "*\u00ef\u0003\u0002\u0002\u0002,\u00f1\u0003\u0002\u0002\u0002.\u00f3",
    "\u0003\u0002\u0002\u00020\u00f5\u0003\u0002\u0002\u00022\u00f7\u0003",
    "\u0002\u0002\u00024\u00fa\u0003\u0002\u0002\u00026\u00fd\u0003\u0002",
    "\u0002\u00028\u00ff\u0003\u0002\u0002\u0002:\u0107\u0003\u0002\u0002",
    "\u0002<A\u0005\u0004\u0003\u0002=A\u0005\u0006\u0004\u0002>A\u0005\b",
    "\u0005\u0002?A\u0005\n\u0006\u0002@<\u0003\u0002\u0002\u0002@=\u0003",
    "\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@?\u0003\u0002\u0002\u0002",
    "A\u0003\u0003\u0002\u0002\u0002BC\u0005\u0010\t\u0002CD\u0007\u000b",
    "\u0002\u0002DE\u0005\u0016\f\u0002EO\u0003\u0002\u0002\u0002FG\u0005",
    "\u0012\n\u0002GH\u0007\u000b\u0002\u0002HI\u0005\u0018\r\u0002IO\u0003",
    "\u0002\u0002\u0002JK\u0005\u0014\u000b\u0002KL\u0007\u000b\u0002\u0002",
    "LM\u0005\u001a\u000e\u0002MO\u0003\u0002\u0002\u0002NB\u0003\u0002\u0002",
    "\u0002NF\u0003\u0002\u0002\u0002NJ\u0003\u0002\u0002\u0002O\u0005\u0003",
    "\u0002\u0002\u0002P[\u0007\u0005\u0002\u0002QR\u0007#\u0002\u0002RS",
    "\u0005\u0010\t\u0002ST\u0007\u0011\u0002\u0002TU\u0005\u0010\t\u0002",
    "UX\u0007\u0011\u0002\u0002VY\u0007\u0005\u0002\u0002WY\u0005\u0010\t",
    "\u0002XV\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002Y[\u0003\u0002",
    "\u0002\u0002ZP\u0003\u0002\u0002\u0002ZQ\u0003\u0002\u0002\u0002[\u0007",
    "\u0003\u0002\u0002\u0002\\]\u0007\u001c\u0002\u0002]^\u0007\u000b\u0002",
    "\u0002^_\u0005\u0016\f\u0002_\t\u0003\u0002\u0002\u0002`a\u0005\u000e",
    "\b\u0002ab\u0007\u0019\u0002\u0002bc\u0005\u0002\u0002\u0002c\u000b",
    "\u0003\u0002\u0002\u0002de\t\u0002\u0002\u0002e\r\u0003\u0002\u0002",
    "\u0002fg\b\b\u0001\u0002gh\u0005\u0010\t\u0002hi\u0005(\u0015\u0002",
    "ij\u0005\u0010\t\u0002jq\u0003\u0002\u0002\u0002kl\f\u0003\u0002\u0002",
    "lm\u0005*\u0016\u0002mn\u0005\u000e\b\u0004np\u0003\u0002\u0002\u0002",
    "ok\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002r\u000f\u0003\u0002\u0002\u0002sq\u0003",
    "\u0002\u0002\u0002tu\b\t\u0001\u0002uv\u0007-\u0002\u0002vw\u0005\u0010",
    "\t\u0002wx\u0007\u0013\u0002\u0002x\u0084\u0003\u0002\u0002\u0002yz",
    "\u00073\u0002\u0002z\u0084\u0005\u0010\t\f{|\u00050\u0019\u0002|}\u0005",
    "\u0010\t\u000b}\u0084\u0003\u0002\u0002\u0002~\u0084\u0005\"\u0012\u0002",
    "\u007f\u0084\u0005$\u0013\u0002\u0080\u0084\u00056\u001c\u0002\u0081",
    "\u0084\u00058\u001d\u0002\u0082\u0084\u0005:\u001e\u0002\u0083t\u0003",
    "\u0002\u0002\u0002\u0083y\u0003\u0002\u0002\u0002\u0083{\u0003\u0002",
    "\u0002\u0002\u0083~\u0003\u0002\u0002\u0002\u0083\u007f\u0003\u0002",
    "\u0002\u0002\u0083\u0080\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002",
    "\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0091\u0003\u0002",
    "\u0002\u0002\u0085\u0086\f\t\u0002\u0002\u0086\u0087\u0005,\u0017\u0002",
    "\u0087\u0088\u0005\u0010\t\n\u0088\u0090\u0003\u0002\u0002\u0002\u0089",
    "\u008a\f\b\u0002\u0002\u008a\u008b\u0005.\u0018\u0002\u008b\u008c\u0005",
    "\u0010\t\t\u008c\u0090\u0003\u0002\u0002\u0002\u008d\u008e\f\n\u0002",
    "\u0002\u008e\u0090\u0005&\u0014\u0002\u008f\u0085\u0003\u0002\u0002",
    "\u0002\u008f\u0089\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002",
    "\u0002\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0011\u0003\u0002\u0002",
    "\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0095\b\n\u0001\u0002",
    "\u0095\u0098\u00052\u001a\u0002\u0096\u0098\u0005\u001c\u000f\u0002",
    "\u0097\u0094\u0003\u0002\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002",
    "\u0098\u009f\u0003\u0002\u0002\u0002\u0099\u009a\f\u0005\u0002\u0002",
    "\u009a\u009b\u0005.\u0018\u0002\u009b\u009c\u0005\u0012\n\u0006\u009c",
    "\u009e\u0003\u0002\u0002\u0002\u009d\u0099\u0003\u0002\u0002\u0002\u009e",
    "\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f",
    "\u00a0\u0003\u0002\u0002\u0002\u00a0\u0013\u0003\u0002\u0002\u0002\u00a1",
    "\u009f\u0003\u0002\u0002\u0002\u00a2\u00a3\b\u000b\u0001\u0002\u00a3",
    "\u00a6\u00054\u001b\u0002\u00a4\u00a6\u0005\u001e\u0010\u0002\u00a5",
    "\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6",
    "\u00ad\u0003\u0002\u0002\u0002\u00a7\u00a8\f\u0005\u0002\u0002\u00a8",
    "\u00a9\u0005.\u0018\u0002\u00a9\u00aa\u0005\u0014\u000b\u0006\u00aa",
    "\u00ac\u0003\u0002\u0002\u0002\u00ab\u00a7\u0003\u0002\u0002\u0002\u00ac",
    "\u00af\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad",
    "\u00ae\u0003\u0002\u0002\u0002\u00ae\u0015\u0003\u0002\u0002\u0002\u00af",
    "\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b3\u0005\"\u0012\u0002\u00b1",
    "\u00b3\u00056\u001c\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2",
    "\u00b1\u0003\u0002\u0002\u0002\u00b3\u0017\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\u00052\u001a\u0002\u00b5\u0019\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u00054\u001b\u0002\u00b7\u001b\u0003\u0002\u0002\u0002\u00b8",
    "\u00ba\u0007+\u0002\u0002\u00b9\u00bb\u0005 \u0011\u0002\u00ba\u00b9",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00ba",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\u0007\u000e\u0002\u0002\u00bf\u001d",
    "\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007,\u0002\u0002\u00c1\u00c6",
    "\u0005\u0010\t\u0002\u00c2\u00c3\u0007\u0011\u0002\u0002\u00c3\u00c5",
    "\u0005\u0010\t\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c8",
    "\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0003\u0002\u0002\u0002\u00c7\u00c9\u0003\u0002\u0002\u0002\u00c8\u00c6",
    "\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007\u000f\u0002\u0002\u00ca\u001f",
    "\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007+\u0002\u0002\u00cc\u00d1",
    "\u0005\u0010\t\u0002\u00cd\u00ce\u0007\u0011\u0002\u0002\u00ce\u00d0",
    "\u0005\u0010\t\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d3",
    "\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0003\u0002\u0002\u0002\u00d2\u00d4\u0003\u0002\u0002\u0002\u00d3\u00d1",
    "\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007\u000e\u0002\u0002\u00d5!",
    "\u0003\u0002\u0002\u0002\u00d6\u00d7\u00052\u001a\u0002\u00d7\u00d8",
    "\u0007+\u0002\u0002\u00d8\u00d9\u0005\u0010\t\u0002\u00d9\u00da\u0007",
    "\u0011\u0002\u0002\u00da\u00db\u0005\u0010\t\u0002\u00db\u00dc\u0007",
    "\u000e\u0002\u0002\u00dc#\u0003\u0002\u0002\u0002\u00dd\u00de\u0005",
    "4\u001b\u0002\u00de\u00df\u0007+\u0002\u0002\u00df\u00e0\u0005\u0010",
    "\t\u0002\u00e0\u00e1\u0007\u000e\u0002\u0002\u00e1%\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0007-\u0002\u0002\u00e3\u00e4\u0005\u0010\t\u0002",
    "\u00e4\u00e5\u0007\u0013\u0002\u0002\u00e5\u00ec\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u00050\u0019\u0002\u00e7\u00e8\u0005\u0010\t\u0002\u00e8",
    "\u00ec\u0003\u0002\u0002\u0002\u00e9\u00ec\u00056\u001c\u0002\u00ea",
    "\u00ec\u00058\u001d\u0002\u00eb\u00e2\u0003\u0002\u0002\u0002\u00eb",
    "\u00e6\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb",
    "\u00ea\u0003\u0002\u0002\u0002\u00ec\'\u0003\u0002\u0002\u0002\u00ed",
    "\u00ee\t\u0003\u0002\u0002\u00ee)\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\t\u0004\u0002\u0002\u00f0+\u0003\u0002\u0002\u0002\u00f1\u00f2\t\u0005",
    "\u0002\u0002\u00f2-\u0003\u0002\u0002\u0002\u00f3\u00f4\t\u0006\u0002",
    "\u0002\u00f4/\u0003\u0002\u0002\u0002\u00f5\u00f6\t\u0007\u0002\u0002",
    "\u00f61\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007&\u0002\u0002\u00f8",
    "\u00f9\u0007\u0003\u0002\u0002\u00f93\u0003\u0002\u0002\u0002\u00fa",
    "\u00fb\u0007\"\u0002\u0002\u00fb\u00fc\u0007\u0004\u0002\u0002\u00fc",
    "5\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007\u0003\u0002\u0002\u00fe",
    "7\u0003\u0002\u0002\u0002\u00ff\u0100\u0007/\u0002\u0002\u01009\u0003",
    "\u0002\u0002\u0002\u0101\u0108\u0007\u0004\u0002\u0002\u0102\u0103\u0007",
    "\u0016\u0002\u0002\u0103\u0108\u0007\u0004\u0002\u0002\u0104\u0105\u0007",
    "\u0004\u0002\u0002\u0105\u0106\u0007\u0016\u0002\u0002\u0106\u0108\u0007",
    "\u0004\u0002\u0002\u0107\u0101\u0003\u0002\u0002\u0002\u0107\u0102\u0003",
    "\u0002\u0002\u0002\u0107\u0104\u0003\u0002\u0002\u0002\u0108;\u0003",
    "\u0002\u0002\u0002\u0014@NXZq\u0083\u008f\u0091\u0097\u009f\u00a5\u00ad",
    "\u00b2\u00bc\u00c6\u00d1\u00eb\u0107"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'\\Abs '", "'\\acos '", 
                     "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", 
                     "']'", "'}'", "':'", "','", "'\\cos '", "')'", "'/'", 
                     "'\\Do'", "'.'", "'\\Else '", "'='", "'\\=>'", "'\\For '", 
                     "'\\>='", "'\\Getkey'", "'>'", "'\\If '", "'\\IfEnd'", 
                     "'\\Int '", "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", 
                     "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", 
                     "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\sin '", 
                     "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", 
                     "' \\To '", "'\\While '", "'\\WhileEnd'" ];

var symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", "ABS", "ACOS", 
                      "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", 
                      "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", 
                      "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GT", 
                      "IF", "IFEND", "INT", "LE", "LIST", "LOCATE", "LOOPWHILE", 
                      "LT", "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", 
                      "OCUR", "OPAR", "OR", "PI", "SIN", "SQRT", "STEP", 
                      "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND" ];

var ruleNames =  [ "stat", "assignStat", "printStat", "readStat", "implyStat", 
                   "endStat", "boolExpr", "numExpr", "matrixExpr", "listExpr", 
                   "stoExpr", "matrixStoExpr", "listStoExpr", "matrixInitializerExpr", 
                   "listInitializerExpr", "matrixRowExpr", "matrixElementExpr", 
                   "listElementExpr", "vectorExpr", "compOp", "logicOp", 
                   "multOp", "addOp", "func", "matrix", "list", "variable", 
                   "constant", "number" ];

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
StatsParser.AND = 8;
StatsParser.ARROW = 9;
StatsParser.ASIN = 10;
StatsParser.ATAN = 11;
StatsParser.CBRA = 12;
StatsParser.CCUR = 13;
StatsParser.COLON = 14;
StatsParser.COMMA = 15;
StatsParser.COS = 16;
StatsParser.CPAR = 17;
StatsParser.DIV = 18;
StatsParser.DO = 19;
StatsParser.DOT = 20;
StatsParser.ELSE = 21;
StatsParser.EQ = 22;
StatsParser.FATARROW = 23;
StatsParser.FOR = 24;
StatsParser.GE = 25;
StatsParser.GETKEY = 26;
StatsParser.GT = 27;
StatsParser.IF = 28;
StatsParser.IFEND = 29;
StatsParser.INT = 30;
StatsParser.LE = 31;
StatsParser.LIST = 32;
StatsParser.LOCATE = 33;
StatsParser.LOOPWHILE = 34;
StatsParser.LT = 35;
StatsParser.MATRIX = 36;
StatsParser.REMAIN = 37;
StatsParser.MUL = 38;
StatsParser.NE = 39;
StatsParser.NEXT = 40;
StatsParser.OBRA = 41;
StatsParser.OCUR = 42;
StatsParser.OPAR = 43;
StatsParser.OR = 44;
StatsParser.PI = 45;
StatsParser.SIN = 46;
StatsParser.SQRT = 47;
StatsParser.STEP = 48;
StatsParser.SUB = 49;
StatsParser.TAN = 50;
StatsParser.THEN = 51;
StatsParser.TO = 52;
StatsParser.WHILE = 53;
StatsParser.WHILEEND = 54;

StatsParser.RULE_stat = 0;
StatsParser.RULE_assignStat = 1;
StatsParser.RULE_printStat = 2;
StatsParser.RULE_readStat = 3;
StatsParser.RULE_implyStat = 4;
StatsParser.RULE_endStat = 5;
StatsParser.RULE_boolExpr = 6;
StatsParser.RULE_numExpr = 7;
StatsParser.RULE_matrixExpr = 8;
StatsParser.RULE_listExpr = 9;
StatsParser.RULE_stoExpr = 10;
StatsParser.RULE_matrixStoExpr = 11;
StatsParser.RULE_listStoExpr = 12;
StatsParser.RULE_matrixInitializerExpr = 13;
StatsParser.RULE_listInitializerExpr = 14;
StatsParser.RULE_matrixRowExpr = 15;
StatsParser.RULE_matrixElementExpr = 16;
StatsParser.RULE_listElementExpr = 17;
StatsParser.RULE_vectorExpr = 18;
StatsParser.RULE_compOp = 19;
StatsParser.RULE_logicOp = 20;
StatsParser.RULE_multOp = 21;
StatsParser.RULE_addOp = 22;
StatsParser.RULE_func = 23;
StatsParser.RULE_matrix = 24;
StatsParser.RULE_list = 25;
StatsParser.RULE_variable = 26;
StatsParser.RULE_constant = 27;
StatsParser.RULE_number = 28;

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
        this.state = 62;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.assignStat();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
            this.printStat();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 60;
            this.readStat();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 61;
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
        this.state = 76;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 64;
            this.numExpr(0);
            this.state = 65;
            this.match(StatsParser.ARROW);
            this.state = 66;
            this.stoExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.matrixExpr(0);
            this.state = 69;
            this.match(StatsParser.ARROW);
            this.state = 70;
            this.matrixStoExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 72;
            this.listExpr(0);
            this.state = 73;
            this.match(StatsParser.ARROW);
            this.state = 74;
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
        this.state = 88;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.STRING:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.match(StatsParser.STRING);
            break;
        case StatsParser.LOCATE:
            localctx = new PrintAtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.match(StatsParser.LOCATE);
            this.state = 80;
            this.numExpr(0);
            this.state = 81;
            this.match(StatsParser.COMMA);
            this.state = 82;
            this.numExpr(0);
            this.state = 83;
            this.match(StatsParser.COMMA);
            this.state = 86;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case StatsParser.STRING:
                this.state = 84;
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
            case StatsParser.LIST:
            case StatsParser.MATRIX:
            case StatsParser.OPAR:
            case StatsParser.PI:
            case StatsParser.SIN:
            case StatsParser.SQRT:
            case StatsParser.SUB:
            case StatsParser.TAN:
                this.state = 85;
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
        this.state = 90;
        this.match(StatsParser.GETKEY);
        this.state = 91;
        this.match(StatsParser.ARROW);
        this.state = 92;
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
        this.state = 94;
        this.boolExpr(0);
        this.state = 95;
        this.match(StatsParser.FATARROW);
        this.state = 96;
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
        this.state = 98;
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

StatsParser.ReduceBoolExprContext = ReduceBoolExprContext;

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
    if(listener instanceof StatsListener ) {
        listener.enterReduceBoolExpr(this);
	}
};

ReduceBoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitReduceBoolExpr(this);
	}
};

ReduceBoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.CompareContext = CompareContext;

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
    if(listener instanceof StatsListener ) {
        listener.enterCompare(this);
	}
};

CompareContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitCompare(this);
	}
};

CompareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitCompare(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StatsParser.prototype.boolExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BoolExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, StatsParser.RULE_boolExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CompareContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 101;
        this.numExpr(0);
        this.state = 102;
        this.compOp();
        this.state = 103;
        this.numExpr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 111;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ReduceBoolExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_boolExpr);
                this.state = 105;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 106;
                this.logicOp();
                this.state = 107;
                this.boolExpr(2); 
            }
            this.state = 113;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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


function MatrixElementContext(parser, ctx) {
	NumExprContext.call(this, parser);
    NumExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MatrixElementContext.prototype = Object.create(NumExprContext.prototype);
MatrixElementContext.prototype.constructor = MatrixElementContext;

StatsParser.MatrixElementContext = MatrixElementContext;

MatrixElementContext.prototype.matrixElementExpr = function() {
    return this.getTypedRuleContext(MatrixElementExprContext,0);
};
MatrixElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterMatrixElement(this);
	}
};

MatrixElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMatrixElement(this);
	}
};

MatrixElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.ListElementContext = ListElementContext;

ListElementContext.prototype.listElementExpr = function() {
    return this.getTypedRuleContext(ListElementExprContext,0);
};
ListElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterListElement(this);
	}
};

ListElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitListElement(this);
	}
};

ListElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.OPAR:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 115;
            this.match(StatsParser.OPAR);
            this.state = 116;
            this.numExpr(0);
            this.state = 117;
            this.match(StatsParser.CPAR);
            break;
        case StatsParser.SUB:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 119;
            this.match(StatsParser.SUB);
            this.state = 120;
            this.numExpr(10);
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
            this.state = 121;
            this.func();
            this.state = 122;
            this.numExpr(9);
            break;
        case StatsParser.MATRIX:
            localctx = new MatrixElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 124;
            this.matrixElementExpr();
            break;
        case StatsParser.LIST:
            localctx = new ListElementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 125;
            this.listElementExpr();
            break;
        case StatsParser.ID:
            localctx = new EvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 126;
            this.variable();
            break;
        case StatsParser.PI:
            localctx = new ConstEvaluateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 127;
            this.constant();
            break;
        case StatsParser.UINT:
        case StatsParser.DOT:
            localctx = new ParseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 128;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 143;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 141;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 131;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 132;
                    this.multOp();
                    this.state = 133;
                    this.numExpr(8);
                    break;

                case 2:
                    localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 135;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 136;
                    this.addOp();
                    this.state = 137;
                    this.numExpr(7);
                    break;

                case 3:
                    localctx = new ScalarMultContext(this, new NumExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                    this.state = 139;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 140;
                    this.vectorExpr();
                    break;

                } 
            }
            this.state = 145;
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

function MatrixExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_matrixExpr;
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

StatsParser.EvaluateMatrixContext = EvaluateMatrixContext;

EvaluateMatrixContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};
EvaluateMatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterEvaluateMatrix(this);
	}
};

EvaluateMatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitEvaluateMatrix(this);
	}
};

EvaluateMatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.EvaluateMatrixInitializerExprContext = EvaluateMatrixInitializerExprContext;

EvaluateMatrixInitializerExprContext.prototype.matrixInitializerExpr = function() {
    return this.getTypedRuleContext(MatrixInitializerExprContext,0);
};
EvaluateMatrixInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterEvaluateMatrixInitializerExpr(this);
	}
};

EvaluateMatrixInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitEvaluateMatrixInitializerExpr(this);
	}
};

EvaluateMatrixInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.AddMatricesContext = AddMatricesContext;

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
    if(listener instanceof StatsListener ) {
        listener.enterAddMatrices(this);
	}
};

AddMatricesContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitAddMatrices(this);
	}
};

AddMatricesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitAddMatrices(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StatsParser.prototype.matrixExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MatrixExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, StatsParser.RULE_matrixExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.MATRIX:
            localctx = new EvaluateMatrixContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 147;
            this.matrix();
            break;
        case StatsParser.OBRA:
            localctx = new EvaluateMatrixInitializerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 148;
            this.matrixInitializerExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 157;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddMatricesContext(this, new MatrixExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_matrixExpr);
                this.state = 151;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 152;
                this.addOp();
                this.state = 153;
                this.matrixExpr(4); 
            }
            this.state = 159;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
    this.ruleIndex = StatsParser.RULE_listExpr;
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

StatsParser.AddListsContext = AddListsContext;

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
    if(listener instanceof StatsListener ) {
        listener.enterAddLists(this);
	}
};

AddListsContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitAddLists(this);
	}
};

AddListsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.EvaluateListContext = EvaluateListContext;

EvaluateListContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};
EvaluateListContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterEvaluateList(this);
	}
};

EvaluateListContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitEvaluateList(this);
	}
};

EvaluateListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
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

StatsParser.EvaluateListInitializerExprContext = EvaluateListInitializerExprContext;

EvaluateListInitializerExprContext.prototype.listInitializerExpr = function() {
    return this.getTypedRuleContext(ListInitializerExprContext,0);
};
EvaluateListInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterEvaluateListInitializerExpr(this);
	}
};

EvaluateListInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitEvaluateListInitializerExpr(this);
	}
};

EvaluateListInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitEvaluateListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StatsParser.prototype.listExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ListExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, StatsParser.RULE_listExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.LIST:
            localctx = new EvaluateListContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 161;
            this.list();
            break;
        case StatsParser.OCUR:
            localctx = new EvaluateListInitializerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 162;
            this.listInitializerExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 171;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddListsContext(this, new ListExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_listExpr);
                this.state = 165;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 166;
                this.addOp();
                this.state = 167;
                this.listExpr(4); 
            }
            this.state = 173;
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

StoExprContext.prototype.matrixElementExpr = function() {
    return this.getTypedRuleContext(MatrixElementExprContext,0);
};

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
    this.enterRule(localctx, 20, StatsParser.RULE_stoExpr);
    try {
        this.state = 176;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.MATRIX:
            this.enterOuterAlt(localctx, 1);
            this.state = 174;
            this.matrixElementExpr();
            break;
        case StatsParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
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
    this.ruleIndex = StatsParser.RULE_matrixStoExpr;
    return this;
}

MatrixStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixStoExprContext.prototype.constructor = MatrixStoExprContext;

MatrixStoExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

MatrixStoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterMatrixStoExpr(this);
	}
};

MatrixStoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMatrixStoExpr(this);
	}
};

MatrixStoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitMatrixStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.MatrixStoExprContext = MatrixStoExprContext;

StatsParser.prototype.matrixStoExpr = function() {

    var localctx = new MatrixStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, StatsParser.RULE_matrixStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
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
    this.ruleIndex = StatsParser.RULE_listStoExpr;
    return this;
}

ListStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListStoExprContext.prototype.constructor = ListStoExprContext;

ListStoExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListStoExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterListStoExpr(this);
	}
};

ListStoExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitListStoExpr(this);
	}
};

ListStoExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitListStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.ListStoExprContext = ListStoExprContext;

StatsParser.prototype.listStoExpr = function() {

    var localctx = new ListStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, StatsParser.RULE_listStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
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
    this.ruleIndex = StatsParser.RULE_matrixInitializerExpr;
    return this;
}

MatrixInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixInitializerExprContext.prototype.constructor = MatrixInitializerExprContext;

MatrixInitializerExprContext.prototype.OBRA = function() {
    return this.getToken(StatsParser.OBRA, 0);
};

MatrixInitializerExprContext.prototype.CBRA = function() {
    return this.getToken(StatsParser.CBRA, 0);
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
    if(listener instanceof StatsListener ) {
        listener.enterMatrixInitializerExpr(this);
	}
};

MatrixInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMatrixInitializerExpr(this);
	}
};

MatrixInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitMatrixInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.MatrixInitializerExprContext = MatrixInitializerExprContext;

StatsParser.prototype.matrixInitializerExpr = function() {

    var localctx = new MatrixInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, StatsParser.RULE_matrixInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(StatsParser.OBRA);
        this.state = 184; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 183;
            this.matrixRowExpr();
            this.state = 186; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StatsParser.OBRA);
        this.state = 188;
        this.match(StatsParser.CBRA);
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
    this.ruleIndex = StatsParser.RULE_listInitializerExpr;
    return this;
}

ListInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListInitializerExprContext.prototype.constructor = ListInitializerExprContext;

ListInitializerExprContext.prototype.OCUR = function() {
    return this.getToken(StatsParser.OCUR, 0);
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
    return this.getToken(StatsParser.CCUR, 0);
};

ListInitializerExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StatsParser.COMMA);
    } else {
        return this.getToken(StatsParser.COMMA, i);
    }
};


ListInitializerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterListInitializerExpr(this);
	}
};

ListInitializerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitListInitializerExpr(this);
	}
};

ListInitializerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.ListInitializerExprContext = ListInitializerExprContext;

StatsParser.prototype.listInitializerExpr = function() {

    var localctx = new ListInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, StatsParser.RULE_listInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(StatsParser.OCUR);
        this.state = 191;
        this.numExpr(0);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StatsParser.COMMA) {
            this.state = 192;
            this.match(StatsParser.COMMA);
            this.state = 193;
            this.numExpr(0);
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 199;
        this.match(StatsParser.CCUR);
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
    this.ruleIndex = StatsParser.RULE_matrixRowExpr;
    return this;
}

MatrixRowExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixRowExprContext.prototype.constructor = MatrixRowExprContext;

MatrixRowExprContext.prototype.OBRA = function() {
    return this.getToken(StatsParser.OBRA, 0);
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
    return this.getToken(StatsParser.CBRA, 0);
};

MatrixRowExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StatsParser.COMMA);
    } else {
        return this.getToken(StatsParser.COMMA, i);
    }
};


MatrixRowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterMatrixRowExpr(this);
	}
};

MatrixRowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMatrixRowExpr(this);
	}
};

MatrixRowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitMatrixRowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.MatrixRowExprContext = MatrixRowExprContext;

StatsParser.prototype.matrixRowExpr = function() {

    var localctx = new MatrixRowExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, StatsParser.RULE_matrixRowExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(StatsParser.OBRA);
        this.state = 202;
        this.numExpr(0);
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StatsParser.COMMA) {
            this.state = 203;
            this.match(StatsParser.COMMA);
            this.state = 204;
            this.numExpr(0);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 210;
        this.match(StatsParser.CBRA);
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
    this.ruleIndex = StatsParser.RULE_matrixElementExpr;
    return this;
}

MatrixElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixElementExprContext.prototype.constructor = MatrixElementExprContext;

MatrixElementExprContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

MatrixElementExprContext.prototype.OBRA = function() {
    return this.getToken(StatsParser.OBRA, 0);
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
    return this.getToken(StatsParser.COMMA, 0);
};

MatrixElementExprContext.prototype.CBRA = function() {
    return this.getToken(StatsParser.CBRA, 0);
};

MatrixElementExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterMatrixElementExpr(this);
	}
};

MatrixElementExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMatrixElementExpr(this);
	}
};

MatrixElementExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitMatrixElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.MatrixElementExprContext = MatrixElementExprContext;

StatsParser.prototype.matrixElementExpr = function() {

    var localctx = new MatrixElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, StatsParser.RULE_matrixElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.matrix();
        this.state = 213;
        this.match(StatsParser.OBRA);
        this.state = 214;
        this.numExpr(0);
        this.state = 215;
        this.match(StatsParser.COMMA);
        this.state = 216;
        this.numExpr(0);
        this.state = 217;
        this.match(StatsParser.CBRA);
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
    this.ruleIndex = StatsParser.RULE_listElementExpr;
    return this;
}

ListElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListElementExprContext.prototype.constructor = ListElementExprContext;

ListElementExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListElementExprContext.prototype.OBRA = function() {
    return this.getToken(StatsParser.OBRA, 0);
};

ListElementExprContext.prototype.numExpr = function() {
    return this.getTypedRuleContext(NumExprContext,0);
};

ListElementExprContext.prototype.CBRA = function() {
    return this.getToken(StatsParser.CBRA, 0);
};

ListElementExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterListElementExpr(this);
	}
};

ListElementExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitListElementExpr(this);
	}
};

ListElementExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitListElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.ListElementExprContext = ListElementExprContext;

StatsParser.prototype.listElementExpr = function() {

    var localctx = new ListElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, StatsParser.RULE_listElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.list();
        this.state = 220;
        this.match(StatsParser.OBRA);
        this.state = 221;
        this.numExpr(0);
        this.state = 222;
        this.match(StatsParser.CBRA);
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
    this.enterRule(localctx, 36, StatsParser.RULE_vectorExpr);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StatsParser.OPAR:
            localctx = new VParensContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 224;
            this.match(StatsParser.OPAR);
            this.state = 225;
            this.numExpr(0);
            this.state = 226;
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
            this.state = 228;
            this.func();
            this.state = 229;
            this.numExpr(0);
            break;
        case StatsParser.ID:
            localctx = new VEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 231;
            this.variable();
            break;
        case StatsParser.PI:
            localctx = new VConstEvaluateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 232;
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

CompOpContext.prototype.EQ = function() {
    return this.getToken(StatsParser.EQ, 0);
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
    this.enterRule(localctx, 38, StatsParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        _la = this._input.LA(1);
        if(!(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (StatsParser.EQ - 22)) | (1 << (StatsParser.GE - 22)) | (1 << (StatsParser.GT - 22)) | (1 << (StatsParser.LE - 22)) | (1 << (StatsParser.LT - 22)) | (1 << (StatsParser.NE - 22)))) !== 0))) {
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
    this.ruleIndex = StatsParser.RULE_logicOp;
    return this;
}

LogicOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicOpContext.prototype.constructor = LogicOpContext;

LogicOpContext.prototype.AND = function() {
    return this.getToken(StatsParser.AND, 0);
};

LogicOpContext.prototype.OR = function() {
    return this.getToken(StatsParser.OR, 0);
};

LogicOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterLogicOp(this);
	}
};

LogicOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitLogicOp(this);
	}
};

LogicOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitLogicOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.LogicOpContext = LogicOpContext;

StatsParser.prototype.logicOp = function() {

    var localctx = new LogicOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, StatsParser.RULE_logicOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        _la = this._input.LA(1);
        if(!(_la===StatsParser.AND || _la===StatsParser.OR)) {
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
    this.enterRule(localctx, 42, StatsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        _la = this._input.LA(1);
        if(!(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (StatsParser.DIV - 18)) | (1 << (StatsParser.REMAIN - 18)) | (1 << (StatsParser.MUL - 18)))) !== 0))) {
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
    this.enterRule(localctx, 44, StatsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
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
    this.enterRule(localctx, 46, StatsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StatsParser.ABS) | (1 << StatsParser.ACOS) | (1 << StatsParser.ASIN) | (1 << StatsParser.ATAN) | (1 << StatsParser.COS) | (1 << StatsParser.INT))) !== 0) || ((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (StatsParser.SIN - 46)) | (1 << (StatsParser.SQRT - 46)) | (1 << (StatsParser.TAN - 46)))) !== 0))) {
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
    this.ruleIndex = StatsParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function() {
    return this.getToken(StatsParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function() {
    return this.getToken(StatsParser.ID, 0);
};

MatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterMatrix(this);
	}
};

MatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitMatrix(this);
	}
};

MatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.MatrixContext = MatrixContext;

StatsParser.prototype.matrix = function() {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, StatsParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(StatsParser.MATRIX);
        this.state = 246;
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

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function() {
    return this.getToken(StatsParser.LIST, 0);
};

ListContext.prototype.UINT = function() {
    return this.getToken(StatsParser.UINT, 0);
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof StatsListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StatsVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StatsParser.ListContext = ListContext;

StatsParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, StatsParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.match(StatsParser.LIST);
        this.state = 249;
        this.match(StatsParser.UINT);
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
    this.enterRule(localctx, 52, StatsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
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
    this.enterRule(localctx, 54, StatsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
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
    this.enterRule(localctx, 56, StatsParser.RULE_number);
    try {
        this.state = 261;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 255;
            this.match(StatsParser.UINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 256;
            this.match(StatsParser.DOT);
            this.state = 257;
            this.match(StatsParser.UINT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 258;
            this.match(StatsParser.UINT);
            this.state = 259;
            this.match(StatsParser.DOT);
            this.state = 260;
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
	case 6:
			return this.boolExpr_sempred(localctx, predIndex);
	case 7:
			return this.numExpr_sempred(localctx, predIndex);
	case 8:
			return this.matrixExpr_sempred(localctx, predIndex);
	case 9:
			return this.listExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

StatsParser.prototype.boolExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

StatsParser.prototype.numExpr_sempred = function(localctx, predIndex) {
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

StatsParser.prototype.matrixExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

StatsParser.prototype.listExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.StatsParser = StatsParser;
