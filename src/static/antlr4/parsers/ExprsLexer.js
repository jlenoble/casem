// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Exprs.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002<\u01a3\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
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
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0003\u0002\u0003\u0002\u0007\u0002",
    "z\n\u0002\f\u0002\u000e\u0002}\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u0082\n\u0003\f\u0003\u000e\u0003\u0085\u000b\u0003",
    "\u0005\u0003\u0087\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004\u008b",
    "\n\u0004\f\u0004\u000e\u0004\u008e\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0005\u0005\u0093\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003",
    "/\u0003/\u00030\u00030\u00030\u00030\u00030\u00030\u00031\u00031\u0003",
    "1\u00031\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00036\u00036\u0003",
    "7\u00037\u00037\u00037\u00037\u00037\u00038\u00038\u00038\u00038\u0003",
    "8\u00038\u00038\u00039\u00039\u00039\u00039\u00039\u00039\u0003:\u0003",
    ":\u0003:\u0003:\u0003:\u0003:\u0003:\u0003:\u0003;\u0003;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003\u008c\u0002<\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.",
    "[/]0_1a2c3e4g5i6k7m8o9q:s;u<\u0003\u0002\u0006\u0004\u0002C\\c|\u0005",
    "\u00022;C\\c|\u0003\u00023;\u0003\u00022;\u0002\u01a7\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002",
    "G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003",
    "\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002",
    "\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002",
    "\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002",
    "\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002",
    "]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003",
    "\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002",
    "\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002",
    "\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002",
    "\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002",
    "s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0003w\u0003",
    "\u0002\u0002\u0002\u0005\u0086\u0003\u0002\u0002\u0002\u0007\u0088\u0003",
    "\u0002\u0002\u0002\t\u0092\u0003\u0002\u0002\u0002\u000b\u0096\u0003",
    "\u0002\u0002\u0002\r\u009c\u0003\u0002\u0002\u0002\u000f\u00a3\u0003",
    "\u0002\u0002\u0002\u0011\u00a5\u0003\u0002\u0002\u0002\u0013\u00ac\u0003",
    "\u0002\u0002\u0002\u0015\u00b0\u0003\u0002\u0002\u0002\u0017\u00b7\u0003",
    "\u0002\u0002\u0002\u0019\u00be\u0003\u0002\u0002\u0002\u001b\u00c0\u0003",
    "\u0002\u0002\u0002\u001d\u00c2\u0003\u0002\u0002\u0002\u001f\u00cb\u0003",
    "\u0002\u0002\u0002!\u00cd\u0003\u0002\u0002\u0002#\u00cf\u0003\u0002",
    "\u0002\u0002%\u00d5\u0003\u0002\u0002\u0002\'\u00d7\u0003\u0002\u0002",
    "\u0002)\u00d9\u0003\u0002\u0002\u0002+\u00dd\u0003\u0002\u0002\u0002",
    "-\u00df\u0003\u0002\u0002\u0002/\u00e6\u0003\u0002\u0002\u00021\u00e8",
    "\u0003\u0002\u0002\u00023\u00ec\u0003\u0002\u0002\u00025\u00f2\u0003",
    "\u0002\u0002\u00027\u00f6\u0003\u0002\u0002\u00029\u00fe\u0003\u0002",
    "\u0002\u0002;\u0104\u0003\u0002\u0002\u0002=\u0106\u0003\u0002\u0002",
    "\u0002?\u010b\u0003\u0002\u0002\u0002A\u0112\u0003\u0002\u0002\u0002",
    "C\u0118\u0003\u0002\u0002\u0002E\u011e\u0003\u0002\u0002\u0002G\u0122",
    "\u0003\u0002\u0002\u0002I\u0129\u0003\u0002\u0002\u0002K\u0132\u0003",
    "\u0002\u0002\u0002M\u013c\u0003\u0002\u0002\u0002O\u013e\u0003\u0002",
    "\u0002\u0002Q\u0144\u0003\u0002\u0002\u0002S\u0146\u0003\u0002\u0002",
    "\u0002U\u0148\u0003\u0002\u0002\u0002W\u014c\u0003\u0002\u0002\u0002",
    "Y\u0152\u0003\u0002\u0002\u0002[\u0154\u0003\u0002\u0002\u0002]\u0156",
    "\u0003\u0002\u0002\u0002_\u0158\u0003\u0002\u0002\u0002a\u015e\u0003",
    "\u0002\u0002\u0002c\u0162\u0003\u0002\u0002\u0002e\u0169\u0003\u0002",
    "\u0002\u0002g\u016f\u0003\u0002\u0002\u0002i\u0175\u0003\u0002\u0002",
    "\u0002k\u017c\u0003\u0002\u0002\u0002m\u017e\u0003\u0002\u0002\u0002",
    "o\u0184\u0003\u0002\u0002\u0002q\u018b\u0003\u0002\u0002\u0002s\u0191",
    "\u0003\u0002\u0002\u0002u\u0199\u0003\u0002\u0002\u0002w{\t\u0002\u0002",
    "\u0002xz\t\u0003\u0002\u0002yx\u0003\u0002\u0002\u0002z}\u0003\u0002",
    "\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0004",
    "\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0087\u00072\u0002",
    "\u0002\u007f\u0083\t\u0004\u0002\u0002\u0080\u0082\t\u0005\u0002\u0002",
    "\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002",
    "\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002",
    "\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0086~\u0003\u0002\u0002\u0002\u0086\u007f\u0003\u0002\u0002\u0002",
    "\u0087\u0006\u0003\u0002\u0002\u0002\u0088\u008c\u0007$\u0002\u0002",
    "\u0089\u008b\u000b\u0002\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002",
    "\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002",
    "\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002\u0002\u0002",
    "\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0090\u0007$\u0002\u0002",
    "\u0090\b\u0003\u0002\u0002\u0002\u0091\u0093\u0007\u000f\u0002\u0002",
    "\u0092\u0091\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002",
    "\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0095\u0007\f\u0002\u0002",
    "\u0095\n\u0003\u0002\u0002\u0002\u0096\u0097\u0007^\u0002\u0002\u0097",
    "\u0098\u0007C\u0002\u0002\u0098\u0099\u0007d\u0002\u0002\u0099\u009a",
    "\u0007u\u0002\u0002\u009a\u009b\u0007\"\u0002\u0002\u009b\f\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0007^\u0002\u0002\u009d\u009e\u0007c\u0002",
    "\u0002\u009e\u009f\u0007e\u0002\u0002\u009f\u00a0\u0007q\u0002\u0002",
    "\u00a0\u00a1\u0007u\u0002\u0002\u00a1\u00a2\u0007\"\u0002\u0002\u00a2",
    "\u000e\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007-\u0002\u0002\u00a4",
    "\u0010\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007^\u0002\u0002\u00a6",
    "\u00a7\u0007\"\u0002\u0002\u00a7\u00a8\u0007C\u0002\u0002\u00a8\u00a9",
    "\u0007p\u0002\u0002\u00a9\u00aa\u0007f\u0002\u0002\u00aa\u00ab\u0007",
    "\"\u0002\u0002\u00ab\u0012\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007",
    "^\u0002\u0002\u00ad\u00ae\u0007/\u0002\u0002\u00ae\u00af\u0007@\u0002",
    "\u0002\u00af\u0014\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007^\u0002",
    "\u0002\u00b1\u00b2\u0007c\u0002\u0002\u00b2\u00b3\u0007u\u0002\u0002",
    "\u00b3\u00b4\u0007k\u0002\u0002\u00b4\u00b5\u0007p\u0002\u0002\u00b5",
    "\u00b6\u0007\"\u0002\u0002\u00b6\u0016\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\u0007^\u0002\u0002\u00b8\u00b9\u0007c\u0002\u0002\u00b9\u00ba",
    "\u0007v\u0002\u0002\u00ba\u00bb\u0007c\u0002\u0002\u00bb\u00bc\u0007",
    "p\u0002\u0002\u00bc\u00bd\u0007\"\u0002\u0002\u00bd\u0018\u0003\u0002",
    "\u0002\u0002\u00be\u00bf\u0007_\u0002\u0002\u00bf\u001a\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0007\u007f\u0002\u0002\u00c1\u001c\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0007^\u0002\u0002\u00c3\u00c4\u0007E\u0002",
    "\u0002\u00c4\u00c5\u0007n\u0002\u0002\u00c5\u00c6\u0007t\u0002\u0002",
    "\u00c6\u00c7\u0007V\u0002\u0002\u00c7\u00c8\u0007g\u0002\u0002\u00c8",
    "\u00c9\u0007z\u0002\u0002\u00c9\u00ca\u0007v\u0002\u0002\u00ca\u001e",
    "\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007<\u0002\u0002\u00cc \u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0007.\u0002\u0002\u00ce\"\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\u0007^\u0002\u0002\u00d0\u00d1\u0007e\u0002",
    "\u0002\u00d1\u00d2\u0007q\u0002\u0002\u00d2\u00d3\u0007u\u0002\u0002",
    "\u00d3\u00d4\u0007\"\u0002\u0002\u00d4$\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\u0007+\u0002\u0002\u00d6&\u0003\u0002\u0002\u0002\u00d7\u00d8",
    "\u00071\u0002\u0002\u00d8(\u0003\u0002\u0002\u0002\u00d9\u00da\u0007",
    "^\u0002\u0002\u00da\u00db\u0007F\u0002\u0002\u00db\u00dc\u0007q\u0002",
    "\u0002\u00dc*\u0003\u0002\u0002\u0002\u00dd\u00de\u00070\u0002\u0002",
    "\u00de,\u0003\u0002\u0002\u0002\u00df\u00e0\u0007^\u0002\u0002\u00e0",
    "\u00e1\u0007G\u0002\u0002\u00e1\u00e2\u0007n\u0002\u0002\u00e2\u00e3",
    "\u0007u\u0002\u0002\u00e3\u00e4\u0007g\u0002\u0002\u00e4\u00e5\u0007",
    "\"\u0002\u0002\u00e5.\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007?\u0002",
    "\u0002\u00e70\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007^\u0002\u0002",
    "\u00e9\u00ea\u0007?\u0002\u0002\u00ea\u00eb\u0007@\u0002\u0002\u00eb",
    "2\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007^\u0002\u0002\u00ed\u00ee",
    "\u0007H\u0002\u0002\u00ee\u00ef\u0007q\u0002\u0002\u00ef\u00f0\u0007",
    "t\u0002\u0002\u00f0\u00f1\u0007\"\u0002\u0002\u00f14\u0003\u0002\u0002",
    "\u0002\u00f2\u00f3\u0007^\u0002\u0002\u00f3\u00f4\u0007@\u0002\u0002",
    "\u00f4\u00f5\u0007?\u0002\u0002\u00f56\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0007^\u0002\u0002\u00f7\u00f8\u0007I\u0002\u0002\u00f8\u00f9",
    "\u0007g\u0002\u0002\u00f9\u00fa\u0007v\u0002\u0002\u00fa\u00fb\u0007",
    "m\u0002\u0002\u00fb\u00fc\u0007g\u0002\u0002\u00fc\u00fd\u0007{\u0002",
    "\u0002\u00fd8\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007^\u0002\u0002",
    "\u00ff\u0100\u0007I\u0002\u0002\u0100\u0101\u0007q\u0002\u0002\u0101",
    "\u0102\u0007v\u0002\u0002\u0102\u0103\u0007q\u0002\u0002\u0103:\u0003",
    "\u0002\u0002\u0002\u0104\u0105\u0007@\u0002\u0002\u0105<\u0003\u0002",
    "\u0002\u0002\u0106\u0107\u0007^\u0002\u0002\u0107\u0108\u0007K\u0002",
    "\u0002\u0108\u0109\u0007h\u0002\u0002\u0109\u010a\u0007\"\u0002\u0002",
    "\u010a>\u0003\u0002\u0002\u0002\u010b\u010c\u0007^\u0002\u0002\u010c",
    "\u010d\u0007K\u0002\u0002\u010d\u010e\u0007h\u0002\u0002\u010e\u010f",
    "\u0007G\u0002\u0002\u010f\u0110\u0007p\u0002\u0002\u0110\u0111\u0007",
    "f\u0002\u0002\u0111@\u0003\u0002\u0002\u0002\u0112\u0113\u0007^\u0002",
    "\u0002\u0113\u0114\u0007K\u0002\u0002\u0114\u0115\u0007p\u0002\u0002",
    "\u0115\u0116\u0007v\u0002\u0002\u0116\u0117\u0007\"\u0002\u0002\u0117",
    "B\u0003\u0002\u0002\u0002\u0118\u0119\u0007^\u0002\u0002\u0119\u011a",
    "\u0007N\u0002\u0002\u011a\u011b\u0007d\u0002\u0002\u011b\u011c\u0007",
    "n\u0002\u0002\u011c\u011d\u0007\"\u0002\u0002\u011dD\u0003\u0002\u0002",
    "\u0002\u011e\u011f\u0007^\u0002\u0002\u011f\u0120\u0007>\u0002\u0002",
    "\u0120\u0121\u0007?\u0002\u0002\u0121F\u0003\u0002\u0002\u0002\u0122",
    "\u0123\u0007^\u0002\u0002\u0123\u0124\u0007N\u0002\u0002\u0124\u0125",
    "\u0007k\u0002\u0002\u0125\u0126\u0007u\u0002\u0002\u0126\u0127\u0007",
    "v\u0002\u0002\u0127\u0128\u0007\"\u0002\u0002\u0128H\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0007^\u0002\u0002\u012a\u012b\u0007N\u0002\u0002",
    "\u012b\u012c\u0007q\u0002\u0002\u012c\u012d\u0007e\u0002\u0002\u012d",
    "\u012e\u0007c\u0002\u0002\u012e\u012f\u0007v\u0002\u0002\u012f\u0130",
    "\u0007g\u0002\u0002\u0130\u0131\u0007\"\u0002\u0002\u0131J\u0003\u0002",
    "\u0002\u0002\u0132\u0133\u0007^\u0002\u0002\u0133\u0134\u0007N\u0002",
    "\u0002\u0134\u0135\u0007r\u0002\u0002\u0135\u0136\u0007Y\u0002\u0002",
    "\u0136\u0137\u0007j\u0002\u0002\u0137\u0138\u0007k\u0002\u0002\u0138",
    "\u0139\u0007n\u0002\u0002\u0139\u013a\u0007g\u0002\u0002\u013a\u013b",
    "\u0007\"\u0002\u0002\u013bL\u0003\u0002\u0002\u0002\u013c\u013d\u0007",
    ">\u0002\u0002\u013dN\u0003\u0002\u0002\u0002\u013e\u013f\u0007^\u0002",
    "\u0002\u013f\u0140\u0007O\u0002\u0002\u0140\u0141\u0007c\u0002\u0002",
    "\u0141\u0142\u0007v\u0002\u0002\u0142\u0143\u0007\"\u0002\u0002\u0143",
    "P\u0003\u0002\u0002\u0002\u0144\u0145\u0007\'\u0002\u0002\u0145R\u0003",
    "\u0002\u0002\u0002\u0146\u0147\u0007,\u0002\u0002\u0147T\u0003\u0002",
    "\u0002\u0002\u0148\u0149\u0007^\u0002\u0002\u0149\u014a\u0007>\u0002",
    "\u0002\u014a\u014b\u0007@\u0002\u0002\u014bV\u0003\u0002\u0002\u0002",
    "\u014c\u014d\u0007^\u0002\u0002\u014d\u014e\u0007P\u0002\u0002\u014e",
    "\u014f\u0007g\u0002\u0002\u014f\u0150\u0007z\u0002\u0002\u0150\u0151",
    "\u0007v\u0002\u0002\u0151X\u0003\u0002\u0002\u0002\u0152\u0153\u0007",
    "]\u0002\u0002\u0153Z\u0003\u0002\u0002\u0002\u0154\u0155\u0007}\u0002",
    "\u0002\u0155\\\u0003\u0002\u0002\u0002\u0156\u0157\u0007*\u0002\u0002",
    "\u0157^\u0003\u0002\u0002\u0002\u0158\u0159\u0007^\u0002\u0002\u0159",
    "\u015a\u0007\"\u0002\u0002\u015a\u015b\u0007Q\u0002\u0002\u015b\u015c",
    "\u0007t\u0002\u0002\u015c\u015d\u0007\"\u0002\u0002\u015d`\u0003\u0002",
    "\u0002\u0002\u015e\u015f\u0007^\u0002\u0002\u015f\u0160\u0007R\u0002",
    "\u0002\u0160\u0161\u0007k\u0002\u0002\u0161b\u0003\u0002\u0002\u0002",
    "\u0162\u0163\u0007^\u0002\u0002\u0163\u0164\u0007R\u0002\u0002\u0164",
    "\u0165\u0007t\u0002\u0002\u0165\u0166\u0007q\u0002\u0002\u0166\u0167",
    "\u0007i\u0002\u0002\u0167\u0168\u0007\"\u0002\u0002\u0168d\u0003\u0002",
    "\u0002\u0002\u0169\u016a\u0007^\u0002\u0002\u016a\u016b\u0007u\u0002",
    "\u0002\u016b\u016c\u0007k\u0002\u0002\u016c\u016d\u0007p\u0002\u0002",
    "\u016d\u016e\u0007\"\u0002\u0002\u016ef\u0003\u0002\u0002\u0002\u016f",
    "\u0170\u0007^\u0002\u0002\u0170\u0171\u0007u\u0002\u0002\u0171\u0172",
    "\u0007s\u0002\u0002\u0172\u0173\u0007t\u0002\u0002\u0173\u0174\u0007",
    "v\u0002\u0002\u0174h\u0003\u0002\u0002\u0002\u0175\u0176\u0007^\u0002",
    "\u0002\u0176\u0177\u0007U\u0002\u0002\u0177\u0178\u0007v\u0002\u0002",
    "\u0178\u0179\u0007g\u0002\u0002\u0179\u017a\u0007r\u0002\u0002\u017a",
    "\u017b\u0007\"\u0002\u0002\u017bj\u0003\u0002\u0002\u0002\u017c\u017d",
    "\u0007/\u0002\u0002\u017dl\u0003\u0002\u0002\u0002\u017e\u017f\u0007",
    "^\u0002\u0002\u017f\u0180\u0007v\u0002\u0002\u0180\u0181\u0007c\u0002",
    "\u0002\u0181\u0182\u0007p\u0002\u0002\u0182\u0183\u0007\"\u0002\u0002",
    "\u0183n\u0003\u0002\u0002\u0002\u0184\u0185\u0007^\u0002\u0002\u0185",
    "\u0186\u0007V\u0002\u0002\u0186\u0187\u0007j\u0002\u0002\u0187\u0188",
    "\u0007g\u0002\u0002\u0188\u0189\u0007p\u0002\u0002\u0189\u018a\u0007",
    "\"\u0002\u0002\u018ap\u0003\u0002\u0002\u0002\u018b\u018c\u0007\"\u0002",
    "\u0002\u018c\u018d\u0007^\u0002\u0002\u018d\u018e\u0007V\u0002\u0002",
    "\u018e\u018f\u0007q\u0002\u0002\u018f\u0190\u0007\"\u0002\u0002\u0190",
    "r\u0003\u0002\u0002\u0002\u0191\u0192\u0007^\u0002\u0002\u0192\u0193",
    "\u0007Y\u0002\u0002\u0193\u0194\u0007j\u0002\u0002\u0194\u0195\u0007",
    "k\u0002\u0002\u0195\u0196\u0007n\u0002\u0002\u0196\u0197\u0007g\u0002",
    "\u0002\u0197\u0198\u0007\"\u0002\u0002\u0198t\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0007^\u0002\u0002\u019a\u019b\u0007Y\u0002\u0002\u019b",
    "\u019c\u0007j\u0002\u0002\u019c\u019d\u0007k\u0002\u0002\u019d\u019e",
    "\u0007n\u0002\u0002\u019e\u019f\u0007g\u0002\u0002\u019f\u01a0\u0007",
    "G\u0002\u0002\u01a0\u01a1\u0007p\u0002\u0002\u01a1\u01a2\u0007f\u0002",
    "\u0002\u01a2v\u0003\u0002\u0002\u0002\b\u0002{\u0083\u0086\u008c\u0092",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ExprsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ExprsLexer.prototype = Object.create(antlr4.Lexer.prototype);
ExprsLexer.prototype.constructor = ExprsLexer;

ExprsLexer.EOF = antlr4.Token.EOF;
ExprsLexer.ID = 1;
ExprsLexer.UINT = 2;
ExprsLexer.STRING = 3;
ExprsLexer.NEWLINE = 4;
ExprsLexer.ABS = 5;
ExprsLexer.ACOS = 6;
ExprsLexer.ADD = 7;
ExprsLexer.AND = 8;
ExprsLexer.ARROW = 9;
ExprsLexer.ASIN = 10;
ExprsLexer.ATAN = 11;
ExprsLexer.CBRA = 12;
ExprsLexer.CCUR = 13;
ExprsLexer.CLRTEXT = 14;
ExprsLexer.COLON = 15;
ExprsLexer.COMMA = 16;
ExprsLexer.COS = 17;
ExprsLexer.CPAR = 18;
ExprsLexer.DIV = 19;
ExprsLexer.DO = 20;
ExprsLexer.DOT = 21;
ExprsLexer.ELSE = 22;
ExprsLexer.EQ = 23;
ExprsLexer.FATARROW = 24;
ExprsLexer.FOR = 25;
ExprsLexer.GE = 26;
ExprsLexer.GETKEY = 27;
ExprsLexer.GOTO = 28;
ExprsLexer.GT = 29;
ExprsLexer.IF = 30;
ExprsLexer.IFEND = 31;
ExprsLexer.INT = 32;
ExprsLexer.LBL = 33;
ExprsLexer.LE = 34;
ExprsLexer.LIST = 35;
ExprsLexer.LOCATE = 36;
ExprsLexer.LOOPWHILE = 37;
ExprsLexer.LT = 38;
ExprsLexer.MATRIX = 39;
ExprsLexer.REMAIN = 40;
ExprsLexer.MUL = 41;
ExprsLexer.NE = 42;
ExprsLexer.NEXT = 43;
ExprsLexer.OBRA = 44;
ExprsLexer.OCUR = 45;
ExprsLexer.OPAR = 46;
ExprsLexer.OR = 47;
ExprsLexer.PI = 48;
ExprsLexer.PROG = 49;
ExprsLexer.SIN = 50;
ExprsLexer.SQRT = 51;
ExprsLexer.STEP = 52;
ExprsLexer.SUB = 53;
ExprsLexer.TAN = 54;
ExprsLexer.THEN = 55;
ExprsLexer.TO = 56;
ExprsLexer.WHILE = 57;
ExprsLexer.WHILEEND = 58;

ExprsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ExprsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExprsLexer.prototype.literalNames = [ null, null, null, null, null, "'\\Abs '", 
                                      "'\\acos '", "'+'", "'\\ And '", "'\\->'", 
                                      "'\\asin '", "'\\atan '", "']'", "'}'", 
                                      "'\\ClrText'", "':'", "','", "'\\cos '", 
                                      "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", 
                                      "'='", "'\\=>'", "'\\For '", "'\\>='", 
                                      "'\\Getkey'", "'\\Goto'", "'>'", "'\\If '", 
                                      "'\\IfEnd'", "'\\Int '", "'\\Lbl '", 
                                      "'\\<='", "'\\List '", "'\\Locate '", 
                                      "'\\LpWhile '", "'<'", "'\\Mat '", 
                                      "'%'", "'*'", "'\\<>'", "'\\Next'", 
                                      "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", 
                                      "'\\Prog '", "'\\sin '", "'\\sqrt'", 
                                      "'\\Step '", "'-'", "'\\tan '", "'\\Then '", 
                                      "' \\To '", "'\\While '", "'\\WhileEnd'" ];

ExprsLexer.prototype.symbolicNames = [ null, "ID", "UINT", "STRING", "NEWLINE", 
                                       "ABS", "ACOS", "ADD", "AND", "ARROW", 
                                       "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", 
                                       "COLON", "COMMA", "COS", "CPAR", 
                                       "DIV", "DO", "DOT", "ELSE", "EQ", 
                                       "FATARROW", "FOR", "GE", "GETKEY", 
                                       "GOTO", "GT", "IF", "IFEND", "INT", 
                                       "LBL", "LE", "LIST", "LOCATE", "LOOPWHILE", 
                                       "LT", "MATRIX", "REMAIN", "MUL", 
                                       "NE", "NEXT", "OBRA", "OCUR", "OPAR", 
                                       "OR", "PI", "PROG", "SIN", "SQRT", 
                                       "STEP", "SUB", "TAN", "THEN", "TO", 
                                       "WHILE", "WHILEEND" ];

ExprsLexer.prototype.ruleNames = [ "ID", "UINT", "STRING", "NEWLINE", "ABS", 
                                   "ACOS", "ADD", "AND", "ARROW", "ASIN", 
                                   "ATAN", "CBRA", "CCUR", "CLRTEXT", "COLON", 
                                   "COMMA", "COS", "CPAR", "DIV", "DO", 
                                   "DOT", "ELSE", "EQ", "FATARROW", "FOR", 
                                   "GE", "GETKEY", "GOTO", "GT", "IF", "IFEND", 
                                   "INT", "LBL", "LE", "LIST", "LOCATE", 
                                   "LOOPWHILE", "LT", "MATRIX", "REMAIN", 
                                   "MUL", "NE", "NEXT", "OBRA", "OCUR", 
                                   "OPAR", "OR", "PI", "PROG", "SIN", "SQRT", 
                                   "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", 
                                   "WHILEEND" ];

ExprsLexer.prototype.grammarFileName = "Exprs.g4";



exports.ExprsLexer = ExprsLexer;

