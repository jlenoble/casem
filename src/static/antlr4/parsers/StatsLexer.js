// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00025\u016e\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u0003\u0002\u0003\u0002\u0007\u0002",
    "l\n\u0002\f\u0002\u000e\u0002o\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003t\n\u0003\f\u0003\u000e\u0003w\u000b\u0003\u0005\u0003",
    "y\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004}\n\u0004\f\u0004\u000e",
    "\u0004\u0080\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0005\u0005",
    "\u0085\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003",
    "%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u0003",
    "0\u00030\u00030\u00030\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
    "1\u00032\u00032\u00032\u00032\u00032\u00032\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u0003~\u00025\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d",
    "9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5\u0003\u0002",
    "\u0006\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0003\u00023;\u0003\u0002",
    "2;\u0002\u0172\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002",
    "\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002",
    "I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003",
    "\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002",
    "\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002",
    "\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002",
    "\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002",
    "_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003",
    "\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002",
    "\u0002\u0002\u0003i\u0003\u0002\u0002\u0002\u0005x\u0003\u0002\u0002",
    "\u0002\u0007z\u0003\u0002\u0002\u0002\t\u0084\u0003\u0002\u0002\u0002",
    "\u000b\u0088\u0003\u0002\u0002\u0002\r\u008e\u0003\u0002\u0002\u0002",
    "\u000f\u0095\u0003\u0002\u0002\u0002\u0011\u0097\u0003\u0002\u0002\u0002",
    "\u0013\u009e\u0003\u0002\u0002\u0002\u0015\u00a2\u0003\u0002\u0002\u0002",
    "\u0017\u00a9\u0003\u0002\u0002\u0002\u0019\u00b0\u0003\u0002\u0002\u0002",
    "\u001b\u00b2\u0003\u0002\u0002\u0002\u001d\u00b4\u0003\u0002\u0002\u0002",
    "\u001f\u00ba\u0003\u0002\u0002\u0002!\u00bc\u0003\u0002\u0002\u0002",
    "#\u00be\u0003\u0002\u0002\u0002%\u00c0\u0003\u0002\u0002\u0002\'\u00c4",
    "\u0003\u0002\u0002\u0002)\u00c6\u0003\u0002\u0002\u0002+\u00cd\u0003",
    "\u0002\u0002\u0002-\u00cf\u0003\u0002\u0002\u0002/\u00d3\u0003\u0002",
    "\u0002\u00021\u00d9\u0003\u0002\u0002\u00023\u00dd\u0003\u0002\u0002",
    "\u00025\u00e5\u0003\u0002\u0002\u00027\u00e7\u0003\u0002\u0002\u0002",
    "9\u00ec\u0003\u0002\u0002\u0002;\u00f3\u0003\u0002\u0002\u0002=\u00f9",
    "\u0003\u0002\u0002\u0002?\u00fd\u0003\u0002\u0002\u0002A\u0106\u0003",
    "\u0002\u0002\u0002C\u0110\u0003\u0002\u0002\u0002E\u0112\u0003\u0002",
    "\u0002\u0002G\u0118\u0003\u0002\u0002\u0002I\u011a\u0003\u0002\u0002",
    "\u0002K\u011c\u0003\u0002\u0002\u0002M\u0120\u0003\u0002\u0002\u0002",
    "O\u0126\u0003\u0002\u0002\u0002Q\u0128\u0003\u0002\u0002\u0002S\u012a",
    "\u0003\u0002\u0002\u0002U\u0130\u0003\u0002\u0002\u0002W\u0134\u0003",
    "\u0002\u0002\u0002Y\u013a\u0003\u0002\u0002\u0002[\u0140\u0003\u0002",
    "\u0002\u0002]\u0147\u0003\u0002\u0002\u0002_\u0149\u0003\u0002\u0002",
    "\u0002a\u014f\u0003\u0002\u0002\u0002c\u0156\u0003\u0002\u0002\u0002",
    "e\u015c\u0003\u0002\u0002\u0002g\u0164\u0003\u0002\u0002\u0002im\t\u0002",
    "\u0002\u0002jl\t\u0003\u0002\u0002kj\u0003\u0002\u0002\u0002lo\u0003",
    "\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "n\u0004\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002py\u00072\u0002",
    "\u0002qu\t\u0004\u0002\u0002rt\t\u0005\u0002\u0002sr\u0003\u0002\u0002",
    "\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002xp\u0003",
    "\u0002\u0002\u0002xq\u0003\u0002\u0002\u0002y\u0006\u0003\u0002\u0002",
    "\u0002z~\u0007$\u0002\u0002{}\u000b\u0002\u0002\u0002|{\u0003\u0002",
    "\u0002\u0002}\u0080\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002",
    "\u0002~|\u0003\u0002\u0002\u0002\u007f\u0081\u0003\u0002\u0002\u0002",
    "\u0080~\u0003\u0002\u0002\u0002\u0081\u0082\u0007$\u0002\u0002\u0082",
    "\b\u0003\u0002\u0002\u0002\u0083\u0085\u0007\u000f\u0002\u0002\u0084",
    "\u0083\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0007\f\u0002\u0002\u0087",
    "\n\u0003\u0002\u0002\u0002\u0088\u0089\u0007^\u0002\u0002\u0089\u008a",
    "\u0007C\u0002\u0002\u008a\u008b\u0007d\u0002\u0002\u008b\u008c\u0007",
    "u\u0002\u0002\u008c\u008d\u0007\"\u0002\u0002\u008d\f\u0003\u0002\u0002",
    "\u0002\u008e\u008f\u0007^\u0002\u0002\u008f\u0090\u0007c\u0002\u0002",
    "\u0090\u0091\u0007e\u0002\u0002\u0091\u0092\u0007q\u0002\u0002\u0092",
    "\u0093\u0007u\u0002\u0002\u0093\u0094\u0007\"\u0002\u0002\u0094\u000e",
    "\u0003\u0002\u0002\u0002\u0095\u0096\u0007-\u0002\u0002\u0096\u0010",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0007^\u0002\u0002\u0098\u0099",
    "\u0007\"\u0002\u0002\u0099\u009a\u0007C\u0002\u0002\u009a\u009b\u0007",
    "p\u0002\u0002\u009b\u009c\u0007f\u0002\u0002\u009c\u009d\u0007\"\u0002",
    "\u0002\u009d\u0012\u0003\u0002\u0002\u0002\u009e\u009f\u0007^\u0002",
    "\u0002\u009f\u00a0\u0007/\u0002\u0002\u00a0\u00a1\u0007@\u0002\u0002",
    "\u00a1\u0014\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007^\u0002\u0002",
    "\u00a3\u00a4\u0007c\u0002\u0002\u00a4\u00a5\u0007u\u0002\u0002\u00a5",
    "\u00a6\u0007k\u0002\u0002\u00a6\u00a7\u0007p\u0002\u0002\u00a7\u00a8",
    "\u0007\"\u0002\u0002\u00a8\u0016\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0007^\u0002\u0002\u00aa\u00ab\u0007c\u0002\u0002\u00ab\u00ac\u0007",
    "v\u0002\u0002\u00ac\u00ad\u0007c\u0002\u0002\u00ad\u00ae\u0007p\u0002",
    "\u0002\u00ae\u00af\u0007\"\u0002\u0002\u00af\u0018\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0007<\u0002\u0002\u00b1\u001a\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0007.\u0002\u0002\u00b3\u001c\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0007^\u0002\u0002\u00b5\u00b6\u0007e\u0002\u0002",
    "\u00b6\u00b7\u0007q\u0002\u0002\u00b7\u00b8\u0007u\u0002\u0002\u00b8",
    "\u00b9\u0007\"\u0002\u0002\u00b9\u001e\u0003\u0002\u0002\u0002\u00ba",
    "\u00bb\u0007_\u0002\u0002\u00bb \u0003\u0002\u0002\u0002\u00bc\u00bd",
    "\u0007+\u0002\u0002\u00bd\"\u0003\u0002\u0002\u0002\u00be\u00bf\u0007",
    "1\u0002\u0002\u00bf$\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007^\u0002",
    "\u0002\u00c1\u00c2\u0007F\u0002\u0002\u00c2\u00c3\u0007q\u0002\u0002",
    "\u00c3&\u0003\u0002\u0002\u0002\u00c4\u00c5\u00070\u0002\u0002\u00c5",
    "(\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007^\u0002\u0002\u00c7\u00c8",
    "\u0007G\u0002\u0002\u00c8\u00c9\u0007n\u0002\u0002\u00c9\u00ca\u0007",
    "u\u0002\u0002\u00ca\u00cb\u0007g\u0002\u0002\u00cb\u00cc\u0007\"\u0002",
    "\u0002\u00cc*\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007?\u0002\u0002",
    "\u00ce,\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007^\u0002\u0002\u00d0",
    "\u00d1\u0007?\u0002\u0002\u00d1\u00d2\u0007@\u0002\u0002\u00d2.\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\u0007^\u0002\u0002\u00d4\u00d5\u0007",
    "H\u0002\u0002\u00d5\u00d6\u0007q\u0002\u0002\u00d6\u00d7\u0007t\u0002",
    "\u0002\u00d7\u00d8\u0007\"\u0002\u0002\u00d80\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u0007^\u0002\u0002\u00da\u00db\u0007@\u0002\u0002\u00db",
    "\u00dc\u0007?\u0002\u0002\u00dc2\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0007^\u0002\u0002\u00de\u00df\u0007I\u0002\u0002\u00df\u00e0\u0007",
    "g\u0002\u0002\u00e0\u00e1\u0007v\u0002\u0002\u00e1\u00e2\u0007m\u0002",
    "\u0002\u00e2\u00e3\u0007g\u0002\u0002\u00e3\u00e4\u0007{\u0002\u0002",
    "\u00e44\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007@\u0002\u0002\u00e6",
    "6\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007^\u0002\u0002\u00e8\u00e9",
    "\u0007K\u0002\u0002\u00e9\u00ea\u0007h\u0002\u0002\u00ea\u00eb\u0007",
    "\"\u0002\u0002\u00eb8\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007^\u0002",
    "\u0002\u00ed\u00ee\u0007K\u0002\u0002\u00ee\u00ef\u0007h\u0002\u0002",
    "\u00ef\u00f0\u0007G\u0002\u0002\u00f0\u00f1\u0007p\u0002\u0002\u00f1",
    "\u00f2\u0007f\u0002\u0002\u00f2:\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0007^\u0002\u0002\u00f4\u00f5\u0007K\u0002\u0002\u00f5\u00f6\u0007",
    "p\u0002\u0002\u00f6\u00f7\u0007v\u0002\u0002\u00f7\u00f8\u0007\"\u0002",
    "\u0002\u00f8<\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007^\u0002\u0002",
    "\u00fa\u00fb\u0007>\u0002\u0002\u00fb\u00fc\u0007?\u0002\u0002\u00fc",
    ">\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007^\u0002\u0002\u00fe\u00ff",
    "\u0007N\u0002\u0002\u00ff\u0100\u0007q\u0002\u0002\u0100\u0101\u0007",
    "e\u0002\u0002\u0101\u0102\u0007c\u0002\u0002\u0102\u0103\u0007v\u0002",
    "\u0002\u0103\u0104\u0007g\u0002\u0002\u0104\u0105\u0007\"\u0002\u0002",
    "\u0105@\u0003\u0002\u0002\u0002\u0106\u0107\u0007^\u0002\u0002\u0107",
    "\u0108\u0007N\u0002\u0002\u0108\u0109\u0007r\u0002\u0002\u0109\u010a",
    "\u0007Y\u0002\u0002\u010a\u010b\u0007j\u0002\u0002\u010b\u010c\u0007",
    "k\u0002\u0002\u010c\u010d\u0007n\u0002\u0002\u010d\u010e\u0007g\u0002",
    "\u0002\u010e\u010f\u0007\"\u0002\u0002\u010fB\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0007>\u0002\u0002\u0111D\u0003\u0002\u0002\u0002\u0112",
    "\u0113\u0007^\u0002\u0002\u0113\u0114\u0007O\u0002\u0002\u0114\u0115",
    "\u0007c\u0002\u0002\u0115\u0116\u0007v\u0002\u0002\u0116\u0117\u0007",
    "\"\u0002\u0002\u0117F\u0003\u0002\u0002\u0002\u0118\u0119\u0007\'\u0002",
    "\u0002\u0119H\u0003\u0002\u0002\u0002\u011a\u011b\u0007,\u0002\u0002",
    "\u011bJ\u0003\u0002\u0002\u0002\u011c\u011d\u0007^\u0002\u0002\u011d",
    "\u011e\u0007>\u0002\u0002\u011e\u011f\u0007@\u0002\u0002\u011fL\u0003",
    "\u0002\u0002\u0002\u0120\u0121\u0007^\u0002\u0002\u0121\u0122\u0007",
    "P\u0002\u0002\u0122\u0123\u0007g\u0002\u0002\u0123\u0124\u0007z\u0002",
    "\u0002\u0124\u0125\u0007v\u0002\u0002\u0125N\u0003\u0002\u0002\u0002",
    "\u0126\u0127\u0007]\u0002\u0002\u0127P\u0003\u0002\u0002\u0002\u0128",
    "\u0129\u0007*\u0002\u0002\u0129R\u0003\u0002\u0002\u0002\u012a\u012b",
    "\u0007^\u0002\u0002\u012b\u012c\u0007\"\u0002\u0002\u012c\u012d\u0007",
    "Q\u0002\u0002\u012d\u012e\u0007t\u0002\u0002\u012e\u012f\u0007\"\u0002",
    "\u0002\u012fT\u0003\u0002\u0002\u0002\u0130\u0131\u0007^\u0002\u0002",
    "\u0131\u0132\u0007R\u0002\u0002\u0132\u0133\u0007k\u0002\u0002\u0133",
    "V\u0003\u0002\u0002\u0002\u0134\u0135\u0007^\u0002\u0002\u0135\u0136",
    "\u0007u\u0002\u0002\u0136\u0137\u0007k\u0002\u0002\u0137\u0138\u0007",
    "p\u0002\u0002\u0138\u0139\u0007\"\u0002\u0002\u0139X\u0003\u0002\u0002",
    "\u0002\u013a\u013b\u0007^\u0002\u0002\u013b\u013c\u0007u\u0002\u0002",
    "\u013c\u013d\u0007s\u0002\u0002\u013d\u013e\u0007t\u0002\u0002\u013e",
    "\u013f\u0007v\u0002\u0002\u013fZ\u0003\u0002\u0002\u0002\u0140\u0141",
    "\u0007^\u0002\u0002\u0141\u0142\u0007U\u0002\u0002\u0142\u0143\u0007",
    "v\u0002\u0002\u0143\u0144\u0007g\u0002\u0002\u0144\u0145\u0007r\u0002",
    "\u0002\u0145\u0146\u0007\"\u0002\u0002\u0146\\\u0003\u0002\u0002\u0002",
    "\u0147\u0148\u0007/\u0002\u0002\u0148^\u0003\u0002\u0002\u0002\u0149",
    "\u014a\u0007^\u0002\u0002\u014a\u014b\u0007v\u0002\u0002\u014b\u014c",
    "\u0007c\u0002\u0002\u014c\u014d\u0007p\u0002\u0002\u014d\u014e\u0007",
    "\"\u0002\u0002\u014e`\u0003\u0002\u0002\u0002\u014f\u0150\u0007^\u0002",
    "\u0002\u0150\u0151\u0007V\u0002\u0002\u0151\u0152\u0007j\u0002\u0002",
    "\u0152\u0153\u0007g\u0002\u0002\u0153\u0154\u0007p\u0002\u0002\u0154",
    "\u0155\u0007\"\u0002\u0002\u0155b\u0003\u0002\u0002\u0002\u0156\u0157",
    "\u0007\"\u0002\u0002\u0157\u0158\u0007^\u0002\u0002\u0158\u0159\u0007",
    "V\u0002\u0002\u0159\u015a\u0007q\u0002\u0002\u015a\u015b\u0007\"\u0002",
    "\u0002\u015bd\u0003\u0002\u0002\u0002\u015c\u015d\u0007^\u0002\u0002",
    "\u015d\u015e\u0007Y\u0002\u0002\u015e\u015f\u0007j\u0002\u0002\u015f",
    "\u0160\u0007k\u0002\u0002\u0160\u0161\u0007n\u0002\u0002\u0161\u0162",
    "\u0007g\u0002\u0002\u0162\u0163\u0007\"\u0002\u0002\u0163f\u0003\u0002",
    "\u0002\u0002\u0164\u0165\u0007^\u0002\u0002\u0165\u0166\u0007Y\u0002",
    "\u0002\u0166\u0167\u0007j\u0002\u0002\u0167\u0168\u0007k\u0002\u0002",
    "\u0168\u0169\u0007n\u0002\u0002\u0169\u016a\u0007g\u0002\u0002\u016a",
    "\u016b\u0007G\u0002\u0002\u016b\u016c\u0007p\u0002\u0002\u016c\u016d",
    "\u0007f\u0002\u0002\u016dh\u0003\u0002\u0002\u0002\b\u0002mux~\u0084",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function StatsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

StatsLexer.prototype = Object.create(antlr4.Lexer.prototype);
StatsLexer.prototype.constructor = StatsLexer;

StatsLexer.EOF = antlr4.Token.EOF;
StatsLexer.ID = 1;
StatsLexer.UINT = 2;
StatsLexer.STRING = 3;
StatsLexer.NEWLINE = 4;
StatsLexer.ABS = 5;
StatsLexer.ACOS = 6;
StatsLexer.ADD = 7;
StatsLexer.AND = 8;
StatsLexer.ARROW = 9;
StatsLexer.ASIN = 10;
StatsLexer.ATAN = 11;
StatsLexer.COLON = 12;
StatsLexer.COMMA = 13;
StatsLexer.COS = 14;
StatsLexer.CBRA = 15;
StatsLexer.CPAR = 16;
StatsLexer.DIV = 17;
StatsLexer.DO = 18;
StatsLexer.DOT = 19;
StatsLexer.ELSE = 20;
StatsLexer.EQ = 21;
StatsLexer.FATARROW = 22;
StatsLexer.FOR = 23;
StatsLexer.GE = 24;
StatsLexer.GETKEY = 25;
StatsLexer.GT = 26;
StatsLexer.IF = 27;
StatsLexer.IFEND = 28;
StatsLexer.INT = 29;
StatsLexer.LE = 30;
StatsLexer.LOCATE = 31;
StatsLexer.LOOPWHILE = 32;
StatsLexer.LT = 33;
StatsLexer.MATRIX = 34;
StatsLexer.REMAIN = 35;
StatsLexer.MUL = 36;
StatsLexer.NE = 37;
StatsLexer.NEXT = 38;
StatsLexer.OBRA = 39;
StatsLexer.OPAR = 40;
StatsLexer.OR = 41;
StatsLexer.PI = 42;
StatsLexer.SIN = 43;
StatsLexer.SQRT = 44;
StatsLexer.STEP = 45;
StatsLexer.SUB = 46;
StatsLexer.TAN = 47;
StatsLexer.THEN = 48;
StatsLexer.TO = 49;
StatsLexer.WHILE = 50;
StatsLexer.WHILEEND = 51;

StatsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

StatsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

StatsLexer.prototype.literalNames = [ null, null, null, null, null, "'\\Abs '", 
                                      "'\\acos '", "'+'", "'\\ And '", "'\\->'", 
                                      "'\\asin '", "'\\atan '", "':'", "','", 
                                      "'\\cos '", "']'", "')'", "'/'", "'\\Do'", 
                                      "'.'", "'\\Else '", "'='", "'\\=>'", 
                                      "'\\For '", "'\\>='", "'\\Getkey'", 
                                      "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", 
                                      "'\\<='", "'\\Locate '", "'\\LpWhile '", 
                                      "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", 
                                      "'\\Next'", "'['", "'('", "'\\ Or '", 
                                      "'\\Pi'", "'\\sin '", "'\\sqrt'", 
                                      "'\\Step '", "'-'", "'\\tan '", "'\\Then '", 
                                      "' \\To '", "'\\While '", "'\\WhileEnd'" ];

StatsLexer.prototype.symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", 
                                       "ABS", "ACOS", "ADD", "AND", "ARROW", 
                                       "ASIN", "ATAN", "COLON", "COMMA", 
                                       "COS", "CBRA", "CPAR", "DIV", "DO", 
                                       "DOT", "ELSE", "EQ", "FATARROW", 
                                       "FOR", "GE", "GETKEY", "GT", "IF", 
                                       "IFEND", "INT", "LE", "LOCATE", "LOOPWHILE", 
                                       "LT", "MATRIX", "REMAIN", "MUL", 
                                       "NE", "NEXT", "OBRA", "OPAR", "OR", 
                                       "PI", "SIN", "SQRT", "STEP", "SUB", 
                                       "TAN", "THEN", "TO", "WHILE", "WHILEEND" ];

StatsLexer.prototype.ruleNames = [ "ID", "UINT", "STRING", "NEWLINE", "ABS", 
                                   "ACOS", "ADD", "AND", "ARROW", "ASIN", 
                                   "ATAN", "COLON", "COMMA", "COS", "CBRA", 
                                   "CPAR", "DIV", "DO", "DOT", "ELSE", "EQ", 
                                   "FATARROW", "FOR", "GE", "GETKEY", "GT", 
                                   "IF", "IFEND", "INT", "LE", "LOCATE", 
                                   "LOOPWHILE", "LT", "MATRIX", "REMAIN", 
                                   "MUL", "NE", "NEXT", "OBRA", "OPAR", 
                                   "OR", "PI", "SIN", "SQRT", "STEP", "SUB", 
                                   "TAN", "THEN", "TO", "WHILE", "WHILEEND" ];

StatsLexer.prototype.grammarFileName = "Stats.g4";



exports.StatsLexer = StatsLexer;

