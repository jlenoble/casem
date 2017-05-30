'use strict';

// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Stats.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StatsListener = require('./StatsListener').StatsListener;
var StatsVisitor = require('./StatsVisitor').StatsVisitor;

var grammarFileName = "Stats.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03>\u011F\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t', '\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04', '\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04\f\t\f\x04', '\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04', '\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t', '\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04', '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t', '\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04', '\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x03\x02\x03\x02', '\x03\x02\x03\x02\x03\x02\x05\x02I\n\x02\x03\x03', '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03', '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03', 'W\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04', '\x03\x04\x03\x04\x03\x04\x05\x04a\n\x04\x03\x04', '\x05\x04d\n\x04\x03\x05\x03\x05\x03\x05\x03\x05', '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07', '\x03\x07\x03\x07\x03\x07\x05\x07s\n\x07\x03\b\x03', '\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\x0B\x03\x0B\x03', '\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x03', '\x0B\x07\x0B\x85\n\x0B\f\x0B\x0E\x0B\x88\x0B\x0B', '\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03', '\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x99\n\f', '\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03', '\f\x03\f\x07\f\xA5\n\f\f\f\x0E\f\xA8\x0B\f\x03\r\x03', '\r\x03\r\x05\r\xAD\n\r\x03\r\x03\r\x03\r\x03\r\x07\r', '\xB3\n\r\f\r\x0E\r\xB6\x0B\r\x03\x0E\x03\x0E\x03\x0E', '\x05\x0E\xBB\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03', '\x0E\x07\x0E\xC1\n\x0E\f\x0E\x0E\x0E\xC4\x0B\x0E', '\x03\x0F\x03\x0F\x05\x0F\xC8\n\x0F\x03\x10\x03', '\x10\x03\x11\x03\x11\x03\x12\x03\x12\x06\x12\xD0', '\n\x12\r\x12\x0E\x12\xD1\x03\x12\x03\x12\x03\x13', '\x03\x13\x03\x13\x03\x13\x07\x13\xDA\n\x13\f\x13', '\x0E\x13\xDD\x0B\x13\x03\x13\x03\x13\x03\x14\x03', '\x14\x03\x14\x03\x14\x07\x14\xE5\n\x14\f\x14\x0E', '\x14\xE8\x0B\x14\x03\x14\x03\x14\x03\x15\x03\x15', '\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16', '\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17', '\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17', '\x03\x17\x05\x17\u0101\n\x17\x03\x18\x03\x18\x03', '\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03', '\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03', '\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03', '!\x03!\x03!\x03!\x03!\x05!\u011D\n!\x03!\x02\x06\x14', '\x16\x18\x1A"\x02\x04\x06\b\n\f\x0E\x10\x12\x14', '\x16\x18\x1A\x1C\x1E "$&(*,.02468:<>@\x02\b\x04\x02', '\x07\x07\x12\x12\b\x02\x1A\x1A\x1D\x1D  %%))--\x04', '\x02\x0B\x0B22\x04\x02\x16\x16+,\x04\x02\n\n99\b\x02', '\b\t\r\x0E\x14\x14##67::\x02\u0122\x02H\x03\x02\x02', '\x02\x04V\x03\x02\x02\x02\x06c\x03\x02\x02\x02', '\be\x03\x02\x02\x02\ni\x03\x02\x02\x02\fr\x03\x02', '\x02\x02\x0Et\x03\x02\x02\x02\x10w\x03\x02\x02', '\x02\x12y\x03\x02\x02\x02\x14{\x03\x02\x02\x02', '\x16\x98\x03\x02\x02\x02\x18\xAC\x03\x02\x02\x02', '\x1A\xBA\x03\x02\x02\x02\x1C\xC7\x03\x02\x02\x02', '\x1E\xC9\x03\x02\x02\x02 \xCB\x03\x02\x02\x02', '"\xCD\x03\x02\x02\x02$\xD5\x03\x02\x02\x02&\xE0', '\x03\x02\x02\x02(\xEB\x03\x02\x02\x02*\xF2\x03', '\x02\x02\x02,\u0100\x03\x02\x02\x02.\u0102\x03\x02', '\x02\x020\u0104\x03\x02\x02\x022\u0106\x03\x02\x02', '\x024\u0108\x03\x02\x02\x026\u010A\x03\x02\x02\x02', '8\u010C\x03\x02\x02\x02:\u010F\x03\x02\x02\x02<\u0112', '\x03\x02\x02\x02>\u0114\x03\x02\x02\x02@\u011C\x03', '\x02\x02\x02BI\x05\x04\x03\x02CI\x05\x06\x04\x02', 'DI\x05\b\x05\x02EI\x05\n\x06\x02FI\x05\f\x07\x02G', 'I\x05\x0E\b\x02HB\x03\x02\x02\x02HC\x03\x02\x02', '\x02HD\x03\x02\x02\x02HE\x03\x02\x02\x02HF\x03\x02', '\x02\x02HG\x03\x02\x02\x02I\x03\x03\x02\x02\x02', 'JK\x05\x16\f\x02KL\x07\f\x02\x02LM\x05\x1C\x0F\x02', 'MW\x03\x02\x02\x02NO\x05\x18\r\x02OP\x07\f\x02\x02', 'PQ\x05\x1E\x10\x02QW\x03\x02\x02\x02RS\x05\x1A\x0E', '\x02ST\x07\f\x02\x02TU\x05 \x11\x02UW\x03\x02\x02', '\x02VJ\x03\x02\x02\x02VN\x03\x02\x02\x02VR\x03\x02', '\x02\x02W\x05\x03\x02\x02\x02Xd\x07\x05\x02\x02', 'YZ\x07\'\x02\x02Z[\x05\x16\f\x02[\\\x07\x13\x02\x02', '\\]\x05\x16\f\x02]`\x07\x13\x02\x02^a\x07\x05\x02', '\x02_a\x05\x16\f\x02`^\x03\x02\x02\x02`_\x03\x02', '\x02\x02ad\x03\x02\x02\x02bd\x07\x11\x02\x02cX\x03', '\x02\x02\x02cY\x03\x02\x02\x02cb\x03\x02\x02\x02', 'd\x07\x03\x02\x02\x02ef\x07\x1E\x02\x02fg\x07\f', '\x02\x02gh\x05\x1C\x0F\x02h\t\x03\x02\x02\x02ij', '\x05\x14\x0B\x02jk\x07\x1B\x02\x02kl\x05\x02\x02', '\x02l\x0B\x03\x02\x02\x02mn\x07\x1F\x02\x02ns\x07', '\x03\x02\x02op\x074\x02\x02ps\x07\x05\x02\x02qs', '\x05\x12\n\x02rm\x03\x02\x02\x02ro\x03\x02\x02\x02', 'rq\x03\x02\x02\x02s\r\x03\x02\x02\x02tu\x07$\x02', '\x02uv\x07\x03\x02\x02v\x0F\x03\x02\x02\x02wx\t', '\x02\x02\x02x\x11\x03\x02\x02\x02yz\x075\x02\x02', 'z\x13\x03\x02\x02\x02{|\b\x0B\x01\x02|}\x05\x16', '\f\x02}~\x05.\x18\x02~\x7F\x05\x16\f\x02\x7F\x86', '\x03\x02\x02\x02\x80\x81\f\x03\x02\x02\x81\x82', '\x050\x19\x02\x82\x83\x05\x14\x0B\x04\x83\x85', '\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x85\x88', '\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87', '\x03\x02\x02\x02\x87\x15\x03\x02\x02\x02\x88\x86', '\x03\x02\x02\x02\x89\x8A\b\f\x01\x02\x8A\x8B\x07', '1\x02\x02\x8B\x8C\x05\x16\f\x02\x8C\x8D\x07\x15', '\x02\x02\x8D\x99\x03\x02\x02\x02\x8E\x8F\x079', '\x02\x02\x8F\x99\x05\x16\f\f\x90\x91\x056\x1C\x02', '\x91\x92\x05\x16\f\x0B\x92\x99\x03\x02\x02\x02', '\x93\x99\x05(\x15\x02\x94\x99\x05*\x16\x02\x95', '\x99\x05<\x1F\x02\x96\x99\x05> \x02\x97\x99\x05', '@!\x02\x98\x89\x03\x02\x02\x02\x98\x8E\x03\x02', '\x02\x02\x98\x90\x03\x02\x02\x02\x98\x93\x03\x02', '\x02\x02\x98\x94\x03\x02\x02\x02\x98\x95\x03\x02', '\x02\x02\x98\x96\x03\x02\x02\x02\x98\x97\x03\x02', '\x02\x02\x99\xA6\x03\x02\x02\x02\x9A\x9B\f\t\x02', '\x02\x9B\x9C\x052\x1A\x02\x9C\x9D\x05\x16\f\n\x9D', '\xA5\x03\x02\x02\x02\x9E\x9F\f\b\x02\x02\x9F\xA0', '\x054\x1B\x02\xA0\xA1\x05\x16\f\t\xA1\xA5\x03\x02', '\x02\x02\xA2\xA3\f\n\x02\x02\xA3\xA5\x05,\x17\x02', '\xA4\x9A\x03\x02\x02\x02\xA4\x9E\x03\x02\x02\x02', '\xA4\xA2\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02', '\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02', '\xA7\x17\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02', '\xA9\xAA\b\r\x01\x02\xAA\xAD\x058\x1D\x02\xAB\xAD', '\x05"\x12\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAB', '\x03\x02\x02\x02\xAD\xB4\x03\x02\x02\x02\xAE\xAF', '\f\x05\x02\x02\xAF\xB0\x054\x1B\x02\xB0\xB1\x05', '\x18\r\x06\xB1\xB3\x03\x02\x02\x02\xB2\xAE\x03', '\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03', '\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\x19\x03', '\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\b', '\x0E\x01\x02\xB8\xBB\x05:\x1E\x02\xB9\xBB\x05', '$\x13\x02\xBA\xB7\x03\x02\x02\x02\xBA\xB9\x03', '\x02\x02\x02\xBB\xC2\x03\x02\x02\x02\xBC\xBD\f', '\x05\x02\x02\xBD\xBE\x054\x1B\x02\xBE\xBF\x05', '\x1A\x0E\x06\xBF\xC1\x03\x02\x02\x02\xC0\xBC\x03', '\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03', '\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\x1B\x03', '\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC8\x05', '(\x15\x02\xC6\xC8\x05<\x1F\x02\xC7\xC5\x03\x02', '\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x1D\x03\x02', '\x02\x02\xC9\xCA\x058\x1D\x02\xCA\x1F\x03\x02', '\x02\x02\xCB\xCC\x05:\x1E\x02\xCC!\x03\x02\x02', '\x02\xCD\xCF\x07/\x02\x02\xCE\xD0\x05&\x14\x02', '\xCF\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02', '\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02', '\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x07\x0F\x02\x02', '\xD4#\x03\x02\x02\x02\xD5\xD6\x070\x02\x02\xD6', '\xDB\x05\x16\f\x02\xD7\xD8\x07\x13\x02\x02\xD8', '\xDA\x05\x16\f\x02\xD9\xD7\x03\x02\x02\x02\xDA', '\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB', '\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD', '\xDB\x03\x02\x02\x02\xDE\xDF\x07\x10\x02\x02\xDF', '%\x03\x02\x02\x02\xE0\xE1\x07/\x02\x02\xE1\xE6', '\x05\x16\f\x02\xE2\xE3\x07\x13\x02\x02\xE3\xE5', '\x05\x16\f\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8', '\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7', '\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6', '\x03\x02\x02\x02\xE9\xEA\x07\x0F\x02\x02\xEA\'', '\x03\x02\x02\x02\xEB\xEC\x058\x1D\x02\xEC\xED', '\x07/\x02\x02\xED\xEE\x05\x16\f\x02\xEE\xEF\x07', '\x13\x02\x02\xEF\xF0\x05\x16\f\x02\xF0\xF1\x07', '\x0F\x02\x02\xF1)\x03\x02\x02\x02\xF2\xF3\x05', ':\x1E\x02\xF3\xF4\x07/\x02\x02\xF4\xF5\x05\x16', '\f\x02\xF5\xF6\x07\x0F\x02\x02\xF6+\x03\x02\x02', '\x02\xF7\xF8\x071\x02\x02\xF8\xF9\x05\x16\f\x02', '\xF9\xFA\x07\x15\x02\x02\xFA\u0101\x03\x02\x02\x02', '\xFB\xFC\x056\x1C\x02\xFC\xFD\x05\x16\f\x02\xFD', '\u0101\x03\x02\x02\x02\xFE\u0101\x05<\x1F\x02\xFF', '\u0101\x05> \x02\u0100\xF7\x03\x02\x02\x02\u0100\xFB', '\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\xFF', '\x03\x02\x02\x02\u0101-\x03\x02\x02\x02\u0102\u0103', '\t\x03\x02\x02\u0103/\x03\x02\x02\x02\u0104\u0105\t\x04', '\x02\x02\u01051\x03\x02\x02\x02\u0106\u0107\t\x05\x02', '\x02\u01073\x03\x02\x02\x02\u0108\u0109\t\x06\x02\x02', '\u01095\x03\x02\x02\x02\u010A\u010B\t\x07\x02\x02\u010B', '7\x03\x02\x02\x02\u010C\u010D\x07*\x02\x02\u010D\u010E', '\x07\x03\x02\x02\u010E9\x03\x02\x02\x02\u010F\u0110', '\x07&\x02\x02\u0110\u0111\x07\x04\x02\x02\u0111;\x03', '\x02\x02\x02\u0112\u0113\x07\x03\x02\x02\u0113=\x03', '\x02\x02\x02\u0114\u0115\x073\x02\x02\u0115?\x03\x02', '\x02\x02\u0116\u011D\x07\x04\x02\x02\u0117\u0118\x07\x18', '\x02\x02\u0118\u011D\x07\x04\x02\x02\u0119\u011A\x07\x04', '\x02\x02\u011A\u011B\x07\x18\x02\x02\u011B\u011D\x07\x04', '\x02\x02\u011C\u0116\x03\x02\x02\x02\u011C\u0117\x03\x02', '\x02\x02\u011C\u0119\x03\x02\x02\x02\u011DA\x03\x02', '\x02\x02\x15HV`cr\x86\x98\xA4\xA6\xAC\xB4\xBA\xC2', '\xC7\xD1\xDB\xE6\u0100\u011C'].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, null, null, null, null, null, "'\\Abs '", "'\\acos '", "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", "']'", "'}'", "'\\ClrText'", "':'", "','", "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", "'='", "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", "'\\Goto'", "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\Lbl '", "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\Prog '", "'\\Return'", "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", "' \\To '", "'\\While '", "'\\WhileEnd'"];

var symbolicNames = [null, "ID", "UINT", "STRING", "WS", "NEWLINE", "ABS", "ACOS", "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", "OR", "PI", "PROG", "RETURN", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND"];

var ruleNames = ["stat", "assignStat", "printStat", "readStat", "implyStat", "jumpStat", "labelStat", "endStat", "endProg", "boolExpr", "numExpr", "matrixExpr", "listExpr", "stoExpr", "matrixStoExpr", "listStoExpr", "matrixInitializerExpr", "listInitializerExpr", "matrixRowExpr", "matrixElementExpr", "listElementExpr", "vectorExpr", "compOp", "logicOp", "multOp", "addOp", "func", "matrix", "list", "variable", "constant", "number"];

function StatsParser(input) {
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
    get: function get() {
        return atn;
    }
});

StatsParser.EOF = antlr4.Token.EOF;
StatsParser.ID = 1;
StatsParser.UINT = 2;
StatsParser.STRING = 3;
StatsParser.WS = 4;
StatsParser.NEWLINE = 5;
StatsParser.ABS = 6;
StatsParser.ACOS = 7;
StatsParser.ADD = 8;
StatsParser.AND = 9;
StatsParser.ARROW = 10;
StatsParser.ASIN = 11;
StatsParser.ATAN = 12;
StatsParser.CBRA = 13;
StatsParser.CCUR = 14;
StatsParser.CLRTEXT = 15;
StatsParser.COLON = 16;
StatsParser.COMMA = 17;
StatsParser.COS = 18;
StatsParser.CPAR = 19;
StatsParser.DIV = 20;
StatsParser.DO = 21;
StatsParser.DOT = 22;
StatsParser.ELSE = 23;
StatsParser.EQ = 24;
StatsParser.FATARROW = 25;
StatsParser.FOR = 26;
StatsParser.GE = 27;
StatsParser.GETKEY = 28;
StatsParser.GOTO = 29;
StatsParser.GT = 30;
StatsParser.IF = 31;
StatsParser.IFEND = 32;
StatsParser.INT = 33;
StatsParser.LBL = 34;
StatsParser.LE = 35;
StatsParser.LIST = 36;
StatsParser.LOCATE = 37;
StatsParser.LOOPWHILE = 38;
StatsParser.LT = 39;
StatsParser.MATRIX = 40;
StatsParser.REMAIN = 41;
StatsParser.MUL = 42;
StatsParser.NE = 43;
StatsParser.NEXT = 44;
StatsParser.OBRA = 45;
StatsParser.OCUR = 46;
StatsParser.OPAR = 47;
StatsParser.OR = 48;
StatsParser.PI = 49;
StatsParser.PROG = 50;
StatsParser.RETURN = 51;
StatsParser.SIN = 52;
StatsParser.SQRT = 53;
StatsParser.STEP = 54;
StatsParser.SUB = 55;
StatsParser.TAN = 56;
StatsParser.THEN = 57;
StatsParser.TO = 58;
StatsParser.WHILE = 59;
StatsParser.WHILEEND = 60;

StatsParser.RULE_stat = 0;
StatsParser.RULE_assignStat = 1;
StatsParser.RULE_printStat = 2;
StatsParser.RULE_readStat = 3;
StatsParser.RULE_implyStat = 4;
StatsParser.RULE_jumpStat = 5;
StatsParser.RULE_labelStat = 6;
StatsParser.RULE_endStat = 7;
StatsParser.RULE_endProg = 8;
StatsParser.RULE_boolExpr = 9;
StatsParser.RULE_numExpr = 10;
StatsParser.RULE_matrixExpr = 11;
StatsParser.RULE_listExpr = 12;
StatsParser.RULE_stoExpr = 13;
StatsParser.RULE_matrixStoExpr = 14;
StatsParser.RULE_listStoExpr = 15;
StatsParser.RULE_matrixInitializerExpr = 16;
StatsParser.RULE_listInitializerExpr = 17;
StatsParser.RULE_matrixRowExpr = 18;
StatsParser.RULE_matrixElementExpr = 19;
StatsParser.RULE_listElementExpr = 20;
StatsParser.RULE_vectorExpr = 21;
StatsParser.RULE_compOp = 22;
StatsParser.RULE_logicOp = 23;
StatsParser.RULE_multOp = 24;
StatsParser.RULE_addOp = 25;
StatsParser.RULE_func = 26;
StatsParser.RULE_matrix = 27;
StatsParser.RULE_list = 28;
StatsParser.RULE_variable = 29;
StatsParser.RULE_constant = 30;
StatsParser.RULE_number = 31;

function StatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.assignStat = function () {
    return this.getTypedRuleContext(AssignStatContext, 0);
};

StatContext.prototype.printStat = function () {
    return this.getTypedRuleContext(PrintStatContext, 0);
};

StatContext.prototype.readStat = function () {
    return this.getTypedRuleContext(ReadStatContext, 0);
};

StatContext.prototype.implyStat = function () {
    return this.getTypedRuleContext(ImplyStatContext, 0);
};

StatContext.prototype.jumpStat = function () {
    return this.getTypedRuleContext(JumpStatContext, 0);
};

StatContext.prototype.labelStat = function () {
    return this.getTypedRuleContext(LabelStatContext, 0);
};

StatContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterStat(this);
    }
};

StatContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitStat(this);
    }
};

StatContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.StatContext = StatContext;

StatsParser.prototype.stat = function () {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StatsParser.RULE_stat);
    try {
        this.state = 70;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 64;
                this.assignStat();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 65;
                this.printStat();
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 66;
                this.readStat();
                break;

            case 4:
                this.enterOuterAlt(localctx, 4);
                this.state = 67;
                this.implyStat();
                break;

            case 5:
                this.enterOuterAlt(localctx, 5);
                this.state = 68;
                this.jumpStat();
                break;

            case 6:
                this.enterOuterAlt(localctx, 6);
                this.state = 69;
                this.labelStat();
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_assignStat;
    return this;
}

AssignStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatContext.prototype.constructor = AssignStatContext;

AssignStatContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

AssignStatContext.prototype.ARROW = function () {
    return this.getToken(StatsParser.ARROW, 0);
};

AssignStatContext.prototype.stoExpr = function () {
    return this.getTypedRuleContext(StoExprContext, 0);
};

AssignStatContext.prototype.matrixExpr = function () {
    return this.getTypedRuleContext(MatrixExprContext, 0);
};

AssignStatContext.prototype.matrixStoExpr = function () {
    return this.getTypedRuleContext(MatrixStoExprContext, 0);
};

AssignStatContext.prototype.listExpr = function () {
    return this.getTypedRuleContext(ListExprContext, 0);
};

AssignStatContext.prototype.listStoExpr = function () {
    return this.getTypedRuleContext(ListStoExprContext, 0);
};

AssignStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterAssignStat(this);
    }
};

AssignStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitAssignStat(this);
    }
};

AssignStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitAssignStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.AssignStatContext = AssignStatContext;

StatsParser.prototype.assignStat = function () {

    var localctx = new AssignStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StatsParser.RULE_assignStat);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 72;
                this.numExpr(0);
                this.state = 73;
                this.match(StatsParser.ARROW);
                this.state = 74;
                this.stoExpr();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 76;
                this.matrixExpr(0);
                this.state = 77;
                this.match(StatsParser.ARROW);
                this.state = 78;
                this.matrixStoExpr();
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 80;
                this.listExpr(0);
                this.state = 81;
                this.match(StatsParser.ARROW);
                this.state = 82;
                this.listStoExpr();
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_printStat;
    return this;
}

PrintStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatContext.prototype.constructor = PrintStatContext;

PrintStatContext.prototype.copyFrom = function (ctx) {
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

PrintContext.prototype.STRING = function () {
    return this.getToken(StatsParser.STRING, 0);
};
PrintContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterPrint(this);
    }
};

PrintContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitPrint(this);
    }
};

PrintContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

StatsParser.ClearTextContext = ClearTextContext;

ClearTextContext.prototype.CLRTEXT = function () {
    return this.getToken(StatsParser.CLRTEXT, 0);
};
ClearTextContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterClearText(this);
    }
};

ClearTextContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitClearText(this);
    }
};

ClearTextContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

StatsParser.PrintAtContext = PrintAtContext;

PrintAtContext.prototype.LOCATE = function () {
    return this.getToken(StatsParser.LOCATE, 0);
};

PrintAtContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

PrintAtContext.prototype.COMMA = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(StatsParser.COMMA);
    } else {
        return this.getToken(StatsParser.COMMA, i);
    }
};

PrintAtContext.prototype.STRING = function () {
    return this.getToken(StatsParser.STRING, 0);
};
PrintAtContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterPrintAt(this);
    }
};

PrintAtContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitPrintAt(this);
    }
};

PrintAtContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitPrintAt(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.PrintStatContext = PrintStatContext;

StatsParser.prototype.printStat = function () {

    var localctx = new PrintStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StatsParser.RULE_printStat);
    try {
        this.state = 97;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case StatsParser.STRING:
                localctx = new PrintContext(this, localctx);
                this.enterOuterAlt(localctx, 1);
                this.state = 86;
                this.match(StatsParser.STRING);
                break;
            case StatsParser.LOCATE:
                localctx = new PrintAtContext(this, localctx);
                this.enterOuterAlt(localctx, 2);
                this.state = 87;
                this.match(StatsParser.LOCATE);
                this.state = 88;
                this.numExpr(0);
                this.state = 89;
                this.match(StatsParser.COMMA);
                this.state = 90;
                this.numExpr(0);
                this.state = 91;
                this.match(StatsParser.COMMA);
                this.state = 94;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case StatsParser.STRING:
                        this.state = 92;
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
                        this.state = 93;
                        this.numExpr(0);
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                }
                break;
            case StatsParser.CLRTEXT:
                localctx = new ClearTextContext(this, localctx);
                this.enterOuterAlt(localctx, 3);
                this.state = 96;
                this.match(StatsParser.CLRTEXT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_readStat;
    return this;
}

ReadStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadStatContext.prototype.constructor = ReadStatContext;

ReadStatContext.prototype.GETKEY = function () {
    return this.getToken(StatsParser.GETKEY, 0);
};

ReadStatContext.prototype.ARROW = function () {
    return this.getToken(StatsParser.ARROW, 0);
};

ReadStatContext.prototype.stoExpr = function () {
    return this.getTypedRuleContext(StoExprContext, 0);
};

ReadStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterReadStat(this);
    }
};

ReadStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitReadStat(this);
    }
};

ReadStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitReadStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.ReadStatContext = ReadStatContext;

StatsParser.prototype.readStat = function () {

    var localctx = new ReadStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StatsParser.RULE_readStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(StatsParser.GETKEY);
        this.state = 100;
        this.match(StatsParser.ARROW);
        this.state = 101;
        this.stoExpr();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_implyStat;
    return this;
}

ImplyStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImplyStatContext.prototype.constructor = ImplyStatContext;

ImplyStatContext.prototype.boolExpr = function () {
    return this.getTypedRuleContext(BoolExprContext, 0);
};

ImplyStatContext.prototype.FATARROW = function () {
    return this.getToken(StatsParser.FATARROW, 0);
};

ImplyStatContext.prototype.stat = function () {
    return this.getTypedRuleContext(StatContext, 0);
};

ImplyStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterImplyStat(this);
    }
};

ImplyStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitImplyStat(this);
    }
};

ImplyStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitImplyStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.ImplyStatContext = ImplyStatContext;

StatsParser.prototype.implyStat = function () {

    var localctx = new ImplyStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StatsParser.RULE_implyStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.boolExpr(0);
        this.state = 104;
        this.match(StatsParser.FATARROW);
        this.state = 105;
        this.stat();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_jumpStat;
    return this;
}

JumpStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JumpStatContext.prototype.constructor = JumpStatContext;

JumpStatContext.prototype.GOTO = function () {
    return this.getToken(StatsParser.GOTO, 0);
};

JumpStatContext.prototype.ID = function () {
    return this.getToken(StatsParser.ID, 0);
};

JumpStatContext.prototype.PROG = function () {
    return this.getToken(StatsParser.PROG, 0);
};

JumpStatContext.prototype.STRING = function () {
    return this.getToken(StatsParser.STRING, 0);
};

JumpStatContext.prototype.endProg = function () {
    return this.getTypedRuleContext(EndProgContext, 0);
};

JumpStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterJumpStat(this);
    }
};

JumpStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitJumpStat(this);
    }
};

JumpStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitJumpStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.JumpStatContext = JumpStatContext;

StatsParser.prototype.jumpStat = function () {

    var localctx = new JumpStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, StatsParser.RULE_jumpStat);
    try {
        this.state = 112;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case StatsParser.GOTO:
                this.enterOuterAlt(localctx, 1);
                this.state = 107;
                this.match(StatsParser.GOTO);
                this.state = 108;
                this.match(StatsParser.ID);
                break;
            case StatsParser.PROG:
                this.enterOuterAlt(localctx, 2);
                this.state = 109;
                this.match(StatsParser.PROG);
                this.state = 110;
                this.match(StatsParser.STRING);
                break;
            case StatsParser.RETURN:
                this.enterOuterAlt(localctx, 3);
                this.state = 111;
                this.endProg();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_labelStat;
    return this;
}

LabelStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelStatContext.prototype.constructor = LabelStatContext;

LabelStatContext.prototype.LBL = function () {
    return this.getToken(StatsParser.LBL, 0);
};

LabelStatContext.prototype.ID = function () {
    return this.getToken(StatsParser.ID, 0);
};

LabelStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterLabelStat(this);
    }
};

LabelStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitLabelStat(this);
    }
};

LabelStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitLabelStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.LabelStatContext = LabelStatContext;

StatsParser.prototype.labelStat = function () {

    var localctx = new LabelStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, StatsParser.RULE_labelStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(StatsParser.LBL);
        this.state = 115;
        this.match(StatsParser.ID);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_endStat;
    return this;
}

EndStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatContext.prototype.constructor = EndStatContext;

EndStatContext.prototype.NEWLINE = function () {
    return this.getToken(StatsParser.NEWLINE, 0);
};

EndStatContext.prototype.COLON = function () {
    return this.getToken(StatsParser.COLON, 0);
};

EndStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterEndStat(this);
    }
};

EndStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitEndStat(this);
    }
};

EndStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitEndStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.EndStatContext = EndStatContext;

StatsParser.prototype.endStat = function () {

    var localctx = new EndStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, StatsParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        _la = this._input.LA(1);
        if (!(_la === StatsParser.NEWLINE || _la === StatsParser.COLON)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_endProg;
    return this;
}

EndProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndProgContext.prototype.constructor = EndProgContext;

EndProgContext.prototype.RETURN = function () {
    return this.getToken(StatsParser.RETURN, 0);
};

EndProgContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterEndProg(this);
    }
};

EndProgContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitEndProg(this);
    }
};

EndProgContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitEndProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.EndProgContext = EndProgContext;

StatsParser.prototype.endProg = function () {

    var localctx = new EndProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, StatsParser.RULE_endProg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(StatsParser.RETURN);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_boolExpr;
    return this;
}

BoolExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolExprContext.prototype.constructor = BoolExprContext;

BoolExprContext.prototype.copyFrom = function (ctx) {
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

ReduceBoolExprContext.prototype.boolExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(BoolExprContext);
    } else {
        return this.getTypedRuleContext(BoolExprContext, i);
    }
};

ReduceBoolExprContext.prototype.logicOp = function () {
    return this.getTypedRuleContext(LogicOpContext, 0);
};
ReduceBoolExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterReduceBoolExpr(this);
    }
};

ReduceBoolExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitReduceBoolExpr(this);
    }
};

ReduceBoolExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

CompareContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

CompareContext.prototype.compOp = function () {
    return this.getTypedRuleContext(CompOpContext, 0);
};
CompareContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterCompare(this);
    }
};

CompareContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitCompare(this);
    }
};

CompareContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitCompare(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.prototype.boolExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BoolExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, StatsParser.RULE_boolExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CompareContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 122;
        this.numExpr(0);
        this.state = 123;
        this.compOp();
        this.state = 124;
        this.numExpr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 132;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ReduceBoolExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_boolExpr);
                this.state = 126;
                if (!this.precpred(this._ctx, 1)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 127;
                this.logicOp();
                this.state = 128;
                this.boolExpr(2);
            }
            this.state = 134;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function NumExprContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_numExpr;
    return this;
}

NumExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumExprContext.prototype.constructor = NumExprContext;

NumExprContext.prototype.copyFrom = function (ctx) {
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

ComputeContext.prototype.func = function () {
    return this.getTypedRuleContext(FuncContext, 0);
};

ComputeContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};
ComputeContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterCompute(this);
    }
};

ComputeContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitCompute(this);
    }
};

ComputeContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

AddContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

AddContext.prototype.addOp = function () {
    return this.getTypedRuleContext(AddOpContext, 0);
};
AddContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterAdd(this);
    }
};

AddContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitAdd(this);
    }
};

AddContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

ParensContext.prototype.OPAR = function () {
    return this.getToken(StatsParser.OPAR, 0);
};

ParensContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

ParensContext.prototype.CPAR = function () {
    return this.getToken(StatsParser.CPAR, 0);
};
ParensContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterParens(this);
    }
};

ParensContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitParens(this);
    }
};

ParensContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

MatrixElementContext.prototype.matrixElementExpr = function () {
    return this.getTypedRuleContext(MatrixElementExprContext, 0);
};
MatrixElementContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMatrixElement(this);
    }
};

MatrixElementContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMatrixElement(this);
    }
};

MatrixElementContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

ListElementContext.prototype.listElementExpr = function () {
    return this.getTypedRuleContext(ListElementExprContext, 0);
};
ListElementContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterListElement(this);
    }
};

ListElementContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitListElement(this);
    }
};

ListElementContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

ScalarMultContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

ScalarMultContext.prototype.vectorExpr = function () {
    return this.getTypedRuleContext(VectorExprContext, 0);
};
ScalarMultContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterScalarMult(this);
    }
};

ScalarMultContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitScalarMult(this);
    }
};

ScalarMultContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

NegateContext.prototype.SUB = function () {
    return this.getToken(StatsParser.SUB, 0);
};

NegateContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};
NegateContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterNegate(this);
    }
};

NegateContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitNegate(this);
    }
};

NegateContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

ConstEvaluateContext.prototype.constant = function () {
    return this.getTypedRuleContext(ConstantContext, 0);
};
ConstEvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterConstEvaluate(this);
    }
};

ConstEvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitConstEvaluate(this);
    }
};

ConstEvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

ParseContext.prototype.number = function () {
    return this.getTypedRuleContext(NumberContext, 0);
};
ParseContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterParse(this);
    }
};

ParseContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitParse(this);
    }
};

ParseContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

MultiplyContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

MultiplyContext.prototype.multOp = function () {
    return this.getTypedRuleContext(MultOpContext, 0);
};
MultiplyContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMultiply(this);
    }
};

MultiplyContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMultiply(this);
    }
};

MultiplyContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

EvaluateContext.prototype.variable = function () {
    return this.getTypedRuleContext(VariableContext, 0);
};
EvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterEvaluate(this);
    }
};

EvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitEvaluate(this);
    }
};

EvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.prototype.numExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, StatsParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case StatsParser.OPAR:
                localctx = new ParensContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 136;
                this.match(StatsParser.OPAR);
                this.state = 137;
                this.numExpr(0);
                this.state = 138;
                this.match(StatsParser.CPAR);
                break;
            case StatsParser.SUB:
                localctx = new NegateContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 140;
                this.match(StatsParser.SUB);
                this.state = 141;
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
                this.state = 142;
                this.func();
                this.state = 143;
                this.numExpr(9);
                break;
            case StatsParser.MATRIX:
                localctx = new MatrixElementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 145;
                this.matrixElementExpr();
                break;
            case StatsParser.LIST:
                localctx = new ListElementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 146;
                this.listElementExpr();
                break;
            case StatsParser.ID:
                localctx = new EvaluateContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 147;
                this.variable();
                break;
            case StatsParser.PI:
                localctx = new ConstEvaluateContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 148;
                this.constant();
                break;
            case StatsParser.UINT:
            case StatsParser.DOT:
                localctx = new ParseContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 149;
                this.number();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 164;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 162;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                        this.state = 152;
                        if (!this.precpred(this._ctx, 7)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                        }
                        this.state = 153;
                        this.multOp();
                        this.state = 154;
                        this.numExpr(8);
                        break;

                    case 2:
                        localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                        this.state = 156;
                        if (!this.precpred(this._ctx, 6)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                        }
                        this.state = 157;
                        this.addOp();
                        this.state = 158;
                        this.numExpr(7);
                        break;

                    case 3:
                        localctx = new ScalarMultContext(this, new NumExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_numExpr);
                        this.state = 160;
                        if (!this.precpred(this._ctx, 8)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                        }
                        this.state = 161;
                        this.vectorExpr();
                        break;

                }
            }
            this.state = 166;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function MatrixExprContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_matrixExpr;
    return this;
}

MatrixExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixExprContext.prototype.constructor = MatrixExprContext;

MatrixExprContext.prototype.copyFrom = function (ctx) {
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

EvaluateMatrixContext.prototype.matrix = function () {
    return this.getTypedRuleContext(MatrixContext, 0);
};
EvaluateMatrixContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterEvaluateMatrix(this);
    }
};

EvaluateMatrixContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitEvaluateMatrix(this);
    }
};

EvaluateMatrixContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

EvaluateMatrixInitializerExprContext.prototype.matrixInitializerExpr = function () {
    return this.getTypedRuleContext(MatrixInitializerExprContext, 0);
};
EvaluateMatrixInitializerExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterEvaluateMatrixInitializerExpr(this);
    }
};

EvaluateMatrixInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitEvaluateMatrixInitializerExpr(this);
    }
};

EvaluateMatrixInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

AddMatricesContext.prototype.matrixExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(MatrixExprContext);
    } else {
        return this.getTypedRuleContext(MatrixExprContext, i);
    }
};

AddMatricesContext.prototype.addOp = function () {
    return this.getTypedRuleContext(AddOpContext, 0);
};
AddMatricesContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterAddMatrices(this);
    }
};

AddMatricesContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitAddMatrices(this);
    }
};

AddMatricesContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitAddMatrices(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.prototype.matrixExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MatrixExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, StatsParser.RULE_matrixExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case StatsParser.MATRIX:
                localctx = new EvaluateMatrixContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 168;
                this.matrix();
                break;
            case StatsParser.OBRA:
                localctx = new EvaluateMatrixInitializerExprContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 169;
                this.matrixInitializerExpr();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 178;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddMatricesContext(this, new MatrixExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_matrixExpr);
                this.state = 172;
                if (!this.precpred(this._ctx, 3)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 173;
                this.addOp();
                this.state = 174;
                this.matrixExpr(4);
            }
            this.state = 180;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function ListExprContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_listExpr;
    return this;
}

ListExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListExprContext.prototype.constructor = ListExprContext;

ListExprContext.prototype.copyFrom = function (ctx) {
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

AddListsContext.prototype.listExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ListExprContext);
    } else {
        return this.getTypedRuleContext(ListExprContext, i);
    }
};

AddListsContext.prototype.addOp = function () {
    return this.getTypedRuleContext(AddOpContext, 0);
};
AddListsContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterAddLists(this);
    }
};

AddListsContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitAddLists(this);
    }
};

AddListsContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

EvaluateListContext.prototype.list = function () {
    return this.getTypedRuleContext(ListContext, 0);
};
EvaluateListContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterEvaluateList(this);
    }
};

EvaluateListContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitEvaluateList(this);
    }
};

EvaluateListContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

EvaluateListInitializerExprContext.prototype.listInitializerExpr = function () {
    return this.getTypedRuleContext(ListInitializerExprContext, 0);
};
EvaluateListInitializerExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterEvaluateListInitializerExpr(this);
    }
};

EvaluateListInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitEvaluateListInitializerExpr(this);
    }
};

EvaluateListInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitEvaluateListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.prototype.listExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ListExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, StatsParser.RULE_listExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case StatsParser.LIST:
                localctx = new EvaluateListContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 182;
                this.list();
                break;
            case StatsParser.OCUR:
                localctx = new EvaluateListInitializerExprContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 183;
                this.listInitializerExpr();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 192;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddListsContext(this, new ListExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, StatsParser.RULE_listExpr);
                this.state = 186;
                if (!this.precpred(this._ctx, 3)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 187;
                this.addOp();
                this.state = 188;
                this.listExpr(4);
            }
            this.state = 194;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function StoExprContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_stoExpr;
    return this;
}

StoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoExprContext.prototype.constructor = StoExprContext;

StoExprContext.prototype.matrixElementExpr = function () {
    return this.getTypedRuleContext(MatrixElementExprContext, 0);
};

StoExprContext.prototype.variable = function () {
    return this.getTypedRuleContext(VariableContext, 0);
};

StoExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterStoExpr(this);
    }
};

StoExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitStoExpr(this);
    }
};

StoExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.StoExprContext = StoExprContext;

StatsParser.prototype.stoExpr = function () {

    var localctx = new StoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, StatsParser.RULE_stoExpr);
    try {
        this.state = 197;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case StatsParser.MATRIX:
                this.enterOuterAlt(localctx, 1);
                this.state = 195;
                this.matrixElementExpr();
                break;
            case StatsParser.ID:
                this.enterOuterAlt(localctx, 2);
                this.state = 196;
                this.variable();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_matrixStoExpr;
    return this;
}

MatrixStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixStoExprContext.prototype.constructor = MatrixStoExprContext;

MatrixStoExprContext.prototype.matrix = function () {
    return this.getTypedRuleContext(MatrixContext, 0);
};

MatrixStoExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMatrixStoExpr(this);
    }
};

MatrixStoExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMatrixStoExpr(this);
    }
};

MatrixStoExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitMatrixStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.MatrixStoExprContext = MatrixStoExprContext;

StatsParser.prototype.matrixStoExpr = function () {

    var localctx = new MatrixStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, StatsParser.RULE_matrixStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.matrix();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_listStoExpr;
    return this;
}

ListStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListStoExprContext.prototype.constructor = ListStoExprContext;

ListStoExprContext.prototype.list = function () {
    return this.getTypedRuleContext(ListContext, 0);
};

ListStoExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterListStoExpr(this);
    }
};

ListStoExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitListStoExpr(this);
    }
};

ListStoExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitListStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.ListStoExprContext = ListStoExprContext;

StatsParser.prototype.listStoExpr = function () {

    var localctx = new ListStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, StatsParser.RULE_listStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.list();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_matrixInitializerExpr;
    return this;
}

MatrixInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixInitializerExprContext.prototype.constructor = MatrixInitializerExprContext;

MatrixInitializerExprContext.prototype.OBRA = function () {
    return this.getToken(StatsParser.OBRA, 0);
};

MatrixInitializerExprContext.prototype.CBRA = function () {
    return this.getToken(StatsParser.CBRA, 0);
};

MatrixInitializerExprContext.prototype.matrixRowExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(MatrixRowExprContext);
    } else {
        return this.getTypedRuleContext(MatrixRowExprContext, i);
    }
};

MatrixInitializerExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMatrixInitializerExpr(this);
    }
};

MatrixInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMatrixInitializerExpr(this);
    }
};

MatrixInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitMatrixInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.MatrixInitializerExprContext = MatrixInitializerExprContext;

StatsParser.prototype.matrixInitializerExpr = function () {

    var localctx = new MatrixInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, StatsParser.RULE_matrixInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(StatsParser.OBRA);
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 204;
            this.matrixRowExpr();
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (_la === StatsParser.OBRA);
        this.state = 209;
        this.match(StatsParser.CBRA);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_listInitializerExpr;
    return this;
}

ListInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListInitializerExprContext.prototype.constructor = ListInitializerExprContext;

ListInitializerExprContext.prototype.OCUR = function () {
    return this.getToken(StatsParser.OCUR, 0);
};

ListInitializerExprContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

ListInitializerExprContext.prototype.CCUR = function () {
    return this.getToken(StatsParser.CCUR, 0);
};

ListInitializerExprContext.prototype.COMMA = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(StatsParser.COMMA);
    } else {
        return this.getToken(StatsParser.COMMA, i);
    }
};

ListInitializerExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterListInitializerExpr(this);
    }
};

ListInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitListInitializerExpr(this);
    }
};

ListInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.ListInitializerExprContext = ListInitializerExprContext;

StatsParser.prototype.listInitializerExpr = function () {

    var localctx = new ListInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, StatsParser.RULE_listInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(StatsParser.OCUR);
        this.state = 212;
        this.numExpr(0);
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === StatsParser.COMMA) {
            this.state = 213;
            this.match(StatsParser.COMMA);
            this.state = 214;
            this.numExpr(0);
            this.state = 219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 220;
        this.match(StatsParser.CCUR);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_matrixRowExpr;
    return this;
}

MatrixRowExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixRowExprContext.prototype.constructor = MatrixRowExprContext;

MatrixRowExprContext.prototype.OBRA = function () {
    return this.getToken(StatsParser.OBRA, 0);
};

MatrixRowExprContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

MatrixRowExprContext.prototype.CBRA = function () {
    return this.getToken(StatsParser.CBRA, 0);
};

MatrixRowExprContext.prototype.COMMA = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(StatsParser.COMMA);
    } else {
        return this.getToken(StatsParser.COMMA, i);
    }
};

MatrixRowExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMatrixRowExpr(this);
    }
};

MatrixRowExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMatrixRowExpr(this);
    }
};

MatrixRowExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitMatrixRowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.MatrixRowExprContext = MatrixRowExprContext;

StatsParser.prototype.matrixRowExpr = function () {

    var localctx = new MatrixRowExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, StatsParser.RULE_matrixRowExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this.match(StatsParser.OBRA);
        this.state = 223;
        this.numExpr(0);
        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === StatsParser.COMMA) {
            this.state = 224;
            this.match(StatsParser.COMMA);
            this.state = 225;
            this.numExpr(0);
            this.state = 230;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 231;
        this.match(StatsParser.CBRA);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_matrixElementExpr;
    return this;
}

MatrixElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixElementExprContext.prototype.constructor = MatrixElementExprContext;

MatrixElementExprContext.prototype.matrix = function () {
    return this.getTypedRuleContext(MatrixContext, 0);
};

MatrixElementExprContext.prototype.OBRA = function () {
    return this.getToken(StatsParser.OBRA, 0);
};

MatrixElementExprContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

MatrixElementExprContext.prototype.COMMA = function () {
    return this.getToken(StatsParser.COMMA, 0);
};

MatrixElementExprContext.prototype.CBRA = function () {
    return this.getToken(StatsParser.CBRA, 0);
};

MatrixElementExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMatrixElementExpr(this);
    }
};

MatrixElementExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMatrixElementExpr(this);
    }
};

MatrixElementExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitMatrixElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.MatrixElementExprContext = MatrixElementExprContext;

StatsParser.prototype.matrixElementExpr = function () {

    var localctx = new MatrixElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, StatsParser.RULE_matrixElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.matrix();
        this.state = 234;
        this.match(StatsParser.OBRA);
        this.state = 235;
        this.numExpr(0);
        this.state = 236;
        this.match(StatsParser.COMMA);
        this.state = 237;
        this.numExpr(0);
        this.state = 238;
        this.match(StatsParser.CBRA);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_listElementExpr;
    return this;
}

ListElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListElementExprContext.prototype.constructor = ListElementExprContext;

ListElementExprContext.prototype.list = function () {
    return this.getTypedRuleContext(ListContext, 0);
};

ListElementExprContext.prototype.OBRA = function () {
    return this.getToken(StatsParser.OBRA, 0);
};

ListElementExprContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

ListElementExprContext.prototype.CBRA = function () {
    return this.getToken(StatsParser.CBRA, 0);
};

ListElementExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterListElementExpr(this);
    }
};

ListElementExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitListElementExpr(this);
    }
};

ListElementExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitListElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.ListElementExprContext = ListElementExprContext;

StatsParser.prototype.listElementExpr = function () {

    var localctx = new ListElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, StatsParser.RULE_listElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.list();
        this.state = 241;
        this.match(StatsParser.OBRA);
        this.state = 242;
        this.numExpr(0);
        this.state = 243;
        this.match(StatsParser.CBRA);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_vectorExpr;
    return this;
}

VectorExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VectorExprContext.prototype.constructor = VectorExprContext;

VectorExprContext.prototype.copyFrom = function (ctx) {
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

VParensContext.prototype.OPAR = function () {
    return this.getToken(StatsParser.OPAR, 0);
};

VParensContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

VParensContext.prototype.CPAR = function () {
    return this.getToken(StatsParser.CPAR, 0);
};
VParensContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterVParens(this);
    }
};

VParensContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitVParens(this);
    }
};

VParensContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

VEvaluateContext.prototype.variable = function () {
    return this.getTypedRuleContext(VariableContext, 0);
};
VEvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterVEvaluate(this);
    }
};

VEvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitVEvaluate(this);
    }
};

VEvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

VConstEvaluateContext.prototype.constant = function () {
    return this.getTypedRuleContext(ConstantContext, 0);
};
VConstEvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterVConstEvaluate(this);
    }
};

VConstEvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitVConstEvaluate(this);
    }
};

VConstEvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
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

VComputeContext.prototype.func = function () {
    return this.getTypedRuleContext(FuncContext, 0);
};

VComputeContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};
VComputeContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterVCompute(this);
    }
};

VComputeContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitVCompute(this);
    }
};

VComputeContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitVCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.VectorExprContext = VectorExprContext;

StatsParser.prototype.vectorExpr = function () {

    var localctx = new VectorExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, StatsParser.RULE_vectorExpr);
    try {
        this.state = 254;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case StatsParser.OPAR:
                localctx = new VParensContext(this, localctx);
                this.enterOuterAlt(localctx, 1);
                this.state = 245;
                this.match(StatsParser.OPAR);
                this.state = 246;
                this.numExpr(0);
                this.state = 247;
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
                this.state = 249;
                this.func();
                this.state = 250;
                this.numExpr(0);
                break;
            case StatsParser.ID:
                localctx = new VEvaluateContext(this, localctx);
                this.enterOuterAlt(localctx, 3);
                this.state = 252;
                this.variable();
                break;
            case StatsParser.PI:
                localctx = new VConstEvaluateContext(this, localctx);
                this.enterOuterAlt(localctx, 4);
                this.state = 253;
                this.constant();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQ = function () {
    return this.getToken(StatsParser.EQ, 0);
};

CompOpContext.prototype.NE = function () {
    return this.getToken(StatsParser.NE, 0);
};

CompOpContext.prototype.GT = function () {
    return this.getToken(StatsParser.GT, 0);
};

CompOpContext.prototype.GE = function () {
    return this.getToken(StatsParser.GE, 0);
};

CompOpContext.prototype.LT = function () {
    return this.getToken(StatsParser.LT, 0);
};

CompOpContext.prototype.LE = function () {
    return this.getToken(StatsParser.LE, 0);
};

CompOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterCompOp(this);
    }
};

CompOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitCompOp(this);
    }
};

CompOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.CompOpContext = CompOpContext;

StatsParser.prototype.compOp = function () {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, StatsParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        _la = this._input.LA(1);
        if (!((_la - 24 & ~0x1f) == 0 && (1 << _la - 24 & (1 << StatsParser.EQ - 24 | 1 << StatsParser.GE - 24 | 1 << StatsParser.GT - 24 | 1 << StatsParser.LE - 24 | 1 << StatsParser.LT - 24 | 1 << StatsParser.NE - 24)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_logicOp;
    return this;
}

LogicOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicOpContext.prototype.constructor = LogicOpContext;

LogicOpContext.prototype.AND = function () {
    return this.getToken(StatsParser.AND, 0);
};

LogicOpContext.prototype.OR = function () {
    return this.getToken(StatsParser.OR, 0);
};

LogicOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterLogicOp(this);
    }
};

LogicOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitLogicOp(this);
    }
};

LogicOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitLogicOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.LogicOpContext = LogicOpContext;

StatsParser.prototype.logicOp = function () {

    var localctx = new LogicOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, StatsParser.RULE_logicOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        _la = this._input.LA(1);
        if (!(_la === StatsParser.AND || _la === StatsParser.OR)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function () {
    return this.getToken(StatsParser.MUL, 0);
};

MultOpContext.prototype.DIV = function () {
    return this.getToken(StatsParser.DIV, 0);
};

MultOpContext.prototype.REMAIN = function () {
    return this.getToken(StatsParser.REMAIN, 0);
};

MultOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMultOp(this);
    }
};

MultOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMultOp(this);
    }
};

MultOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.MultOpContext = MultOpContext;

StatsParser.prototype.multOp = function () {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, StatsParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        _la = this._input.LA(1);
        if (!((_la - 20 & ~0x1f) == 0 && (1 << _la - 20 & (1 << StatsParser.DIV - 20 | 1 << StatsParser.REMAIN - 20 | 1 << StatsParser.MUL - 20)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function () {
    return this.getToken(StatsParser.ADD, 0);
};

AddOpContext.prototype.SUB = function () {
    return this.getToken(StatsParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterAddOp(this);
    }
};

AddOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitAddOp(this);
    }
};

AddOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.AddOpContext = AddOpContext;

StatsParser.prototype.addOp = function () {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, StatsParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        _la = this._input.LA(1);
        if (!(_la === StatsParser.ADD || _la === StatsParser.SUB)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function () {
    return this.getToken(StatsParser.SQRT, 0);
};

FuncContext.prototype.COS = function () {
    return this.getToken(StatsParser.COS, 0);
};

FuncContext.prototype.SIN = function () {
    return this.getToken(StatsParser.SIN, 0);
};

FuncContext.prototype.TAN = function () {
    return this.getToken(StatsParser.TAN, 0);
};

FuncContext.prototype.ACOS = function () {
    return this.getToken(StatsParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function () {
    return this.getToken(StatsParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function () {
    return this.getToken(StatsParser.ATAN, 0);
};

FuncContext.prototype.ABS = function () {
    return this.getToken(StatsParser.ABS, 0);
};

FuncContext.prototype.INT = function () {
    return this.getToken(StatsParser.INT, 0);
};

FuncContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterFunc(this);
    }
};

FuncContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitFunc(this);
    }
};

FuncContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.FuncContext = FuncContext;

StatsParser.prototype.func = function () {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, StatsParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) == 0 && (1 << _la & (1 << StatsParser.ABS | 1 << StatsParser.ACOS | 1 << StatsParser.ASIN | 1 << StatsParser.ATAN | 1 << StatsParser.COS)) !== 0 || (_la - 33 & ~0x1f) == 0 && (1 << _la - 33 & (1 << StatsParser.INT - 33 | 1 << StatsParser.SIN - 33 | 1 << StatsParser.SQRT - 33 | 1 << StatsParser.TAN - 33)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function () {
    return this.getToken(StatsParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function () {
    return this.getToken(StatsParser.ID, 0);
};

MatrixContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterMatrix(this);
    }
};

MatrixContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitMatrix(this);
    }
};

MatrixContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.MatrixContext = MatrixContext;

StatsParser.prototype.matrix = function () {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, StatsParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.match(StatsParser.MATRIX);
        this.state = 267;
        this.match(StatsParser.ID);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function () {
    return this.getToken(StatsParser.LIST, 0);
};

ListContext.prototype.UINT = function () {
    return this.getToken(StatsParser.UINT, 0);
};

ListContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterList(this);
    }
};

ListContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitList(this);
    }
};

ListContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.ListContext = ListContext;

StatsParser.prototype.list = function () {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, StatsParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(StatsParser.LIST);
        this.state = 270;
        this.match(StatsParser.UINT);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function () {
    return this.getToken(StatsParser.ID, 0);
};

VariableContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterVariable(this);
    }
};

VariableContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitVariable(this);
    }
};

VariableContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.VariableContext = VariableContext;

StatsParser.prototype.variable = function () {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, StatsParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(StatsParser.ID);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function () {
    return this.getToken(StatsParser.PI, 0);
};

ConstantContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterConstant(this);
    }
};

ConstantContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitConstant(this);
    }
};

ConstantContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.ConstantContext = ConstantContext;

StatsParser.prototype.constant = function () {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, StatsParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(StatsParser.PI);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StatsParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(StatsParser.UINT);
    } else {
        return this.getToken(StatsParser.UINT, i);
    }
};

NumberContext.prototype.DOT = function () {
    return this.getToken(StatsParser.DOT, 0);
};

NumberContext.prototype.enterRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.enterNumber(this);
    }
};

NumberContext.prototype.exitRule = function (listener) {
    if (listener instanceof StatsListener) {
        listener.exitNumber(this);
    }
};

NumberContext.prototype.accept = function (visitor) {
    if (visitor instanceof StatsVisitor) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};

StatsParser.NumberContext = NumberContext;

StatsParser.prototype.number = function () {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, StatsParser.RULE_number);
    try {
        this.state = 282;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 18, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 276;
                this.match(StatsParser.UINT);
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 277;
                this.match(StatsParser.DOT);
                this.state = 278;
                this.match(StatsParser.UINT);
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 279;
                this.match(StatsParser.UINT);
                this.state = 280;
                this.match(StatsParser.DOT);
                this.state = 281;
                this.match(StatsParser.UINT);
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

StatsParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 9:
            return this.boolExpr_sempred(localctx, predIndex);
        case 10:
            return this.numExpr_sempred(localctx, predIndex);
        case 11:
            return this.matrixExpr_sempred(localctx, predIndex);
        case 12:
            return this.listExpr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

StatsParser.prototype.boolExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 1);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

StatsParser.prototype.numExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
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

StatsParser.prototype.matrixExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 4:
            return this.precpred(this._ctx, 3);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

StatsParser.prototype.listExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 5:
            return this.precpred(this._ctx, 3);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

exports.StatsParser = StatsParser;