"use strict";

// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

var serializedATN = ["\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964", "\x02B\u01E4\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04", "\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t", "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04", "\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10", "\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13", "\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17", "\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A", "\x04\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E", "\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#", "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04", "*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x04", "1\t1\x042\t2\x043\t3\x044\t4\x045\t5\x046\t6\x047\t7\x04", "8\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04=\t=\x04>\t>\x04", "?\t?\x04@\t@\x04A\tA\x03\x02\x03\x02\x03\x02\x03\x02", "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02", "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03", "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03", "\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04", "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04", "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05", "\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06", "\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07", "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03", "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03", "\n\x03\n\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x0B", "\x03\x0B\x03\x0B\x03\f\x03\f\x03\f\x03\f\x03\f\x03", "\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03", "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03", "\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03", "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03", "\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03", "\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03", "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03", "\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03", "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03", "\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03", "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03", "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03", "\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03", " \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03", "!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03", "#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03", "$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03", "&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03", "'\x03'\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03", "*\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03", ",\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x03", "0\x030\x030\x030\x031\x031\x031\x031\x032\x032\x03", "2\x032\x032\x032\x032\x033\x033\x033\x033\x033\x03", "3\x033\x033\x034\x034\x034\x034\x034\x034\x035\x03", "5\x035\x035\x035\x035\x036\x036\x036\x036\x036\x03", "6\x036\x037\x037\x038\x038\x038\x038\x038\x038\x03", "9\x039\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03", ":\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03", ";\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03", "<\x03=\x03=\x07=\u01C6\n=\f=\x0E=\u01C9\x0B=\x03>\x03", ">\x03>\x07>\u01CE\n>\f>\x0E>\u01D1\x0B>\x05>\u01D3\n>\x03", "?\x03?\x07?\u01D7\n?\f?\x0E?\u01DA\x0B?\x03?\x03?\x03", "@\x03@\x03A\x05A\u01E1\nA\x03A\x03A\x03\u01D8\x02B\x03", "\x03\x05\x04\x07\x05\t\x06\x0B\x07\r\b\x0F\t\x11", "\n\x13\x0B\x15\f\x17\r\x19\x0E\x1B\x0F\x1D\x10\x1F", "\x11!\x12#\x13%\x14'\x15)\x16+\x17-\x18/\x191\x1A", "3\x1B5\x1C7\x1D9\x1E;\x1F= ?!A\"C#E$G%I&K'M(O)Q*S+U,W-Y.", "[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y>{?}@\x7FA\x81B\x03\x02\x07", "\x04\x02C\\c|\x05\x022;C\\c|\x03\x023;\x03\x022;\x04", "\x02\x0B\x0B\"\"\x02\u01E8\x02\x03\x03\x02\x02\x02", "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02", "\x02\t\x03\x02\x02\x02\x02\x0B\x03\x02\x02\x02", "\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02", "\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02", "\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02", "\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02", "\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02", "\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02", "%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03", "\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02", "\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02", "\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02", "\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02", ";\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03", "\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02", "\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02", "\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02", "\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02", "Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03", "\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02", "\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02", "\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02", "\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02", "g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03", "\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02", "\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02", "\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02", "\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02", "}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02", "\x81\x03\x02\x02\x02\x03\x83\x03\x02\x02\x02\x05", "\x8D\x03\x02\x02\x02\x07\x9C\x03\x02\x02\x02\t", "\xA9\x03\x02\x02\x02\x0B\xAE\x03\x02\x02\x02\r", "\xB4\x03\x02\x02\x02\x0F\xBB\x03\x02\x02\x02\x11", "\xBD\x03\x02\x02\x02\x13\xC4\x03\x02\x02\x02\x15", "\xC8\x03\x02\x02\x02\x17\xCF\x03\x02\x02\x02\x19", "\xD6\x03\x02\x02\x02\x1B\xD8\x03\x02\x02\x02\x1D", "\xDA\x03\x02\x02\x02\x1F\xE3\x03\x02\x02\x02!", "\xE5\x03\x02\x02\x02#\xE7\x03\x02\x02\x02%\xED", "\x03\x02\x02\x02'\xEF\x03\x02\x02\x02)\xF1\x03", "\x02\x02\x02+\xF5\x03\x02\x02\x02-\xF7\x03\x02", "\x02\x02/\xFE\x03\x02\x02\x021\u0100\x03\x02\x02", "\x023\u0104\x03\x02\x02\x025\u010A\x03\x02\x02\x02", "7\u010E\x03\x02\x02\x029\u0116\x03\x02\x02\x02;\u011C", "\x03\x02\x02\x02=\u011E\x03\x02\x02\x02?\u0123\x03", "\x02\x02\x02A\u012A\x03\x02\x02\x02C\u0130\x03\x02", "\x02\x02E\u0136\x03\x02\x02\x02G\u013A\x03\x02\x02", "\x02I\u0141\x03\x02\x02\x02K\u014A\x03\x02\x02\x02", "M\u0154\x03\x02\x02\x02O\u0156\x03\x02\x02\x02Q\u015C", "\x03\x02\x02\x02S\u015E\x03\x02\x02\x02U\u0160\x03", "\x02\x02\x02W\u0164\x03\x02\x02\x02Y\u016A\x03\x02", "\x02\x02[\u016C\x03\x02\x02\x02]\u016E\x03\x02\x02", "\x02_\u0170\x03\x02\x02\x02a\u0176\x03\x02\x02\x02", "c\u017A\x03\x02\x02\x02e\u0181\x03\x02\x02\x02g\u0189", "\x03\x02\x02\x02i\u018F\x03\x02\x02\x02k\u0195\x03", "\x02\x02\x02m\u019C\x03\x02\x02\x02o\u019E\x03\x02", "\x02\x02q\u01A4\x03\x02\x02\x02s\u01AB\x03\x02\x02", "\x02u\u01B1\x03\x02\x02\x02w\u01B9\x03\x02\x02\x02", "y\u01C3\x03\x02\x02\x02{\u01D2\x03\x02\x02\x02}\u01D4", "\x03\x02\x02\x02\x7F\u01DD\x03\x02\x02\x02\x81\u01E0", "\x03\x02\x02\x02\x83\x84\x07H\x02\x02\x84\x85", "\x07k\x02\x02\x85\x86\x07n\x02\x02\x86\x87\x07", "g\x02\x02\x87\x88\x07\"\x02\x02\x88\x89\x07P\x02", "\x02\x89\x8A\x07c\x02\x02\x8A\x8B\x07o\x02\x02", "\x8B\x8C\x07g\x02\x02\x8C\x04\x03\x02\x02\x02", "\x8D\x8E\x07'\x02\x02\x8E\x8F\x07J\x02\x02\x8F", "\x90\x07g\x02\x02\x90\x91\x07c\x02\x02\x91\x92", "\x07f\x02\x02\x92\x93\x07g\x02\x02\x93\x94\x07", "t\x02\x02\x94\x95\x07\"\x02\x02\x95\x96\x07T\x02", "\x02\x96\x97\x07g\x02\x02\x97\x98\x07e\x02\x02", "\x98\x99\x07q\x02\x02\x99\x9A\x07t\x02\x02\x9A", "\x9B\x07f\x02\x02\x9B\x06\x03\x02\x02\x02\x9C", "\x9D\x07'\x02\x02\x9D\x9E\x07F\x02\x02\x9E\x9F", "\x07c\x02\x02\x9F\xA0\x07v\x02\x02\xA0\xA1\x07", "c\x02\x02\xA1\xA2\x07\"\x02\x02\xA2\xA3\x07T\x02", "\x02\xA3\xA4\x07g\x02\x02\xA4\xA5\x07e\x02\x02", "\xA5\xA6\x07q\x02\x02\xA6\xA7\x07t\x02\x02\xA7", "\xA8\x07f\x02\x02\xA8\b\x03\x02\x02\x02\xA9\xAA", "\x07'\x02\x02\xAA\xAB\x07G\x02\x02\xAB\xAC\x07", "p\x02\x02\xAC\xAD\x07f\x02\x02\xAD\n\x03\x02\x02", "\x02\xAE\xAF\x07^\x02\x02\xAF\xB0\x07C\x02\x02", "\xB0\xB1\x07d\x02\x02\xB1\xB2\x07u\x02\x02\xB2", "\xB3\x07\"\x02\x02\xB3\f\x03\x02\x02\x02\xB4\xB5", "\x07^\x02\x02\xB5\xB6\x07c\x02\x02\xB6\xB7\x07", "e\x02\x02\xB7\xB8\x07q\x02\x02\xB8\xB9\x07u\x02", "\x02\xB9\xBA\x07\"\x02\x02\xBA\x0E\x03\x02\x02", "\x02\xBB\xBC\x07-\x02\x02\xBC\x10\x03\x02\x02", "\x02\xBD\xBE\x07^\x02\x02\xBE\xBF\x07\"\x02\x02", "\xBF\xC0\x07C\x02\x02\xC0\xC1\x07p\x02\x02\xC1", "\xC2\x07f\x02\x02\xC2\xC3\x07\"\x02\x02\xC3\x12", "\x03\x02\x02\x02\xC4\xC5\x07^\x02\x02\xC5\xC6", "\x07/\x02\x02\xC6\xC7\x07@\x02\x02\xC7\x14\x03", "\x02\x02\x02\xC8\xC9\x07^\x02\x02\xC9\xCA\x07", "c\x02\x02\xCA\xCB\x07u\x02\x02\xCB\xCC\x07k\x02", "\x02\xCC\xCD\x07p\x02\x02\xCD\xCE\x07\"\x02\x02", "\xCE\x16\x03\x02\x02\x02\xCF\xD0\x07^\x02\x02", "\xD0\xD1\x07c\x02\x02\xD1\xD2\x07v\x02\x02\xD2", "\xD3\x07c\x02\x02\xD3\xD4\x07p\x02\x02\xD4\xD5", "\x07\"\x02\x02\xD5\x18\x03\x02\x02\x02\xD6\xD7", "\x07_\x02\x02\xD7\x1A\x03\x02\x02\x02\xD8\xD9", "\x07\x7F\x02\x02\xD9\x1C\x03\x02\x02\x02\xDA\xDB", "\x07^\x02\x02\xDB\xDC\x07E\x02\x02\xDC\xDD\x07", "n\x02\x02\xDD\xDE\x07t\x02\x02\xDE\xDF\x07V\x02", "\x02\xDF\xE0\x07g\x02\x02\xE0\xE1\x07z\x02\x02", "\xE1\xE2\x07v\x02\x02\xE2\x1E\x03\x02\x02\x02", "\xE3\xE4\x07<\x02\x02\xE4 \x03\x02\x02\x02\xE5", "\xE6\x07.\x02\x02\xE6\"\x03\x02\x02\x02\xE7\xE8", "\x07^\x02\x02\xE8\xE9\x07e\x02\x02\xE9\xEA\x07", "q\x02\x02\xEA\xEB\x07u\x02\x02\xEB\xEC\x07\"\x02", "\x02\xEC$\x03\x02\x02\x02\xED\xEE\x07+\x02\x02", "\xEE&\x03\x02\x02\x02\xEF\xF0\x071\x02\x02\xF0", "(\x03\x02\x02\x02\xF1\xF2\x07^\x02\x02\xF2\xF3", "\x07F\x02\x02\xF3\xF4\x07q\x02\x02\xF4*\x03\x02", "\x02\x02\xF5\xF6\x070\x02\x02\xF6,\x03\x02\x02", "\x02\xF7\xF8\x07^\x02\x02\xF8\xF9\x07G\x02\x02", "\xF9\xFA\x07n\x02\x02\xFA\xFB\x07u\x02\x02\xFB", "\xFC\x07g\x02\x02\xFC\xFD\x07\"\x02\x02\xFD.\x03", "\x02\x02\x02\xFE\xFF\x07?\x02\x02\xFF0\x03\x02", "\x02\x02\u0100\u0101\x07^\x02\x02\u0101\u0102\x07?\x02", "\x02\u0102\u0103\x07@\x02\x02\u01032\x03\x02\x02\x02", "\u0104\u0105\x07^\x02\x02\u0105\u0106\x07H\x02\x02\u0106", "\u0107\x07q\x02\x02\u0107\u0108\x07t\x02\x02\u0108\u0109", "\x07\"\x02\x02\u01094\x03\x02\x02\x02\u010A\u010B\x07", "^\x02\x02\u010B\u010C\x07@\x02\x02\u010C\u010D\x07?\x02", "\x02\u010D6\x03\x02\x02\x02\u010E\u010F\x07^\x02\x02", "\u010F\u0110\x07I\x02\x02\u0110\u0111\x07g\x02\x02\u0111", "\u0112\x07v\x02\x02\u0112\u0113\x07m\x02\x02\u0113\u0114", "\x07g\x02\x02\u0114\u0115\x07{\x02\x02\u01158\x03\x02", "\x02\x02\u0116\u0117\x07^\x02\x02\u0117\u0118\x07I\x02", "\x02\u0118\u0119\x07q\x02\x02\u0119\u011A\x07v\x02\x02", "\u011A\u011B\x07q\x02\x02\u011B:\x03\x02\x02\x02\u011C", "\u011D\x07@\x02\x02\u011D<\x03\x02\x02\x02\u011E\u011F", "\x07^\x02\x02\u011F\u0120\x07K\x02\x02\u0120\u0121\x07", "h\x02\x02\u0121\u0122\x07\"\x02\x02\u0122>\x03\x02\x02", "\x02\u0123\u0124\x07^\x02\x02\u0124\u0125\x07K\x02\x02", "\u0125\u0126\x07h\x02\x02\u0126\u0127\x07G\x02\x02\u0127", "\u0128\x07p\x02\x02\u0128\u0129\x07f\x02\x02\u0129@\x03", "\x02\x02\x02\u012A\u012B\x07^\x02\x02\u012B\u012C\x07", "K\x02\x02\u012C\u012D\x07p\x02\x02\u012D\u012E\x07v\x02", "\x02\u012E\u012F\x07\"\x02\x02\u012FB\x03\x02\x02\x02", "\u0130\u0131\x07^\x02\x02\u0131\u0132\x07N\x02\x02\u0132", "\u0133\x07d\x02\x02\u0133\u0134\x07n\x02\x02\u0134\u0135", "\x07\"\x02\x02\u0135D\x03\x02\x02\x02\u0136\u0137\x07", "^\x02\x02\u0137\u0138\x07>\x02\x02\u0138\u0139\x07?\x02", "\x02\u0139F\x03\x02\x02\x02\u013A\u013B\x07^\x02\x02", "\u013B\u013C\x07N\x02\x02\u013C\u013D\x07k\x02\x02\u013D", "\u013E\x07u\x02\x02\u013E\u013F\x07v\x02\x02\u013F\u0140", "\x07\"\x02\x02\u0140H\x03\x02\x02\x02\u0141\u0142\x07", "^\x02\x02\u0142\u0143\x07N\x02\x02\u0143\u0144\x07q\x02", "\x02\u0144\u0145\x07e\x02\x02\u0145\u0146\x07c\x02\x02", "\u0146\u0147\x07v\x02\x02\u0147\u0148\x07g\x02\x02\u0148", "\u0149\x07\"\x02\x02\u0149J\x03\x02\x02\x02\u014A\u014B", "\x07^\x02\x02\u014B\u014C\x07N\x02\x02\u014C\u014D\x07", "r\x02\x02\u014D\u014E\x07Y\x02\x02\u014E\u014F\x07j\x02", "\x02\u014F\u0150\x07k\x02\x02\u0150\u0151\x07n\x02\x02", "\u0151\u0152\x07g\x02\x02\u0152\u0153\x07\"\x02\x02\u0153", "L\x03\x02\x02\x02\u0154\u0155\x07>\x02\x02\u0155N\x03", "\x02\x02\x02\u0156\u0157\x07^\x02\x02\u0157\u0158\x07", "O\x02\x02\u0158\u0159\x07c\x02\x02\u0159\u015A\x07v\x02", "\x02\u015A\u015B\x07\"\x02\x02\u015BP\x03\x02\x02\x02", "\u015C\u015D\x07'\x02\x02\u015DR\x03\x02\x02\x02\u015E", "\u015F\x07,\x02\x02\u015FT\x03\x02\x02\x02\u0160\u0161", "\x07^\x02\x02\u0161\u0162\x07>\x02\x02\u0162\u0163\x07", "@\x02\x02\u0163V\x03\x02\x02\x02\u0164\u0165\x07^\x02", "\x02\u0165\u0166\x07P\x02\x02\u0166\u0167\x07g\x02\x02", "\u0167\u0168\x07z\x02\x02\u0168\u0169\x07v\x02\x02\u0169", "X\x03\x02\x02\x02\u016A\u016B\x07]\x02\x02\u016BZ\x03", "\x02\x02\x02\u016C\u016D\x07}\x02\x02\u016D\\\x03\x02", "\x02\x02\u016E\u016F\x07*\x02\x02\u016F^\x03\x02\x02", "\x02\u0170\u0171\x07^\x02\x02\u0171\u0172\x07\"\x02\x02", "\u0172\u0173\x07Q\x02\x02\u0173\u0174\x07t\x02\x02\u0174", "\u0175\x07\"\x02\x02\u0175`\x03\x02\x02\x02\u0176\u0177", "\x07^\x02\x02\u0177\u0178\x07R\x02\x02\u0178\u0179\x07", "k\x02\x02\u0179b\x03\x02\x02\x02\u017A\u017B\x07^\x02", "\x02\u017B\u017C\x07R\x02\x02\u017C\u017D\x07t\x02\x02", "\u017D\u017E\x07q\x02\x02\u017E\u017F\x07i\x02\x02\u017F", "\u0180\x07\"\x02\x02\u0180d\x03\x02\x02\x02\u0181\u0182", "\x07^\x02\x02\u0182\u0183\x07T\x02\x02\u0183\u0184\x07", "g\x02\x02\u0184\u0185\x07v\x02\x02\u0185\u0186\x07w\x02", "\x02\u0186\u0187\x07t\x02\x02\u0187\u0188\x07p\x02\x02", "\u0188f\x03\x02\x02\x02\u0189\u018A\x07^\x02\x02\u018A", "\u018B\x07u\x02\x02\u018B\u018C\x07k\x02\x02\u018C\u018D", "\x07p\x02\x02\u018D\u018E\x07\"\x02\x02\u018Eh\x03\x02", "\x02\x02\u018F\u0190\x07^\x02\x02\u0190\u0191\x07u\x02", "\x02\u0191\u0192\x07s\x02\x02\u0192\u0193\x07t\x02\x02", "\u0193\u0194\x07v\x02\x02\u0194j\x03\x02\x02\x02\u0195", "\u0196\x07^\x02\x02\u0196\u0197\x07U\x02\x02\u0197\u0198", "\x07v\x02\x02\u0198\u0199\x07g\x02\x02\u0199\u019A\x07", "r\x02\x02\u019A\u019B\x07\"\x02\x02\u019Bl\x03\x02\x02", "\x02\u019C\u019D\x07/\x02\x02\u019Dn\x03\x02\x02\x02", "\u019E\u019F\x07^\x02\x02\u019F\u01A0\x07v\x02\x02\u01A0", "\u01A1\x07c\x02\x02\u01A1\u01A2\x07p\x02\x02\u01A2\u01A3", "\x07\"\x02\x02\u01A3p\x03\x02\x02\x02\u01A4\u01A5\x07", "^\x02\x02\u01A5\u01A6\x07V\x02\x02\u01A6\u01A7\x07j\x02", "\x02\u01A7\u01A8\x07g\x02\x02\u01A8\u01A9\x07p\x02\x02", "\u01A9\u01AA\x07\"\x02\x02\u01AAr\x03\x02\x02\x02\u01AB", "\u01AC\x07\"\x02\x02\u01AC\u01AD\x07^\x02\x02\u01AD\u01AE", "\x07V\x02\x02\u01AE\u01AF\x07q\x02\x02\u01AF\u01B0\x07", "\"\x02\x02\u01B0t\x03\x02\x02\x02\u01B1\u01B2\x07^\x02", "\x02\u01B2\u01B3\x07Y\x02\x02\u01B3\u01B4\x07j\x02\x02", "\u01B4\u01B5\x07k\x02\x02\u01B5\u01B6\x07n\x02\x02\u01B6", "\u01B7\x07g\x02\x02\u01B7\u01B8\x07\"\x02\x02\u01B8v\x03", "\x02\x02\x02\u01B9\u01BA\x07^\x02\x02\u01BA\u01BB\x07", "Y\x02\x02\u01BB\u01BC\x07j\x02\x02\u01BC\u01BD\x07k\x02", "\x02\u01BD\u01BE\x07n\x02\x02\u01BE\u01BF\x07g\x02\x02", "\u01BF\u01C0\x07G\x02\x02\u01C0\u01C1\x07p\x02\x02\u01C1", "\u01C2\x07f\x02\x02\u01C2x\x03\x02\x02\x02\u01C3\u01C7", "\t\x02\x02\x02\u01C4\u01C6\t\x03\x02\x02\u01C5\u01C4\x03", "\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03", "\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8z\x03", "\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01D3\x07", "2\x02\x02\u01CB\u01CF\t\x04\x02\x02\u01CC\u01CE\t\x05\x02", "\x02\u01CD\u01CC\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02", "\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02", "\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02", "\x02\u01D2\u01CA\x03\x02\x02\x02\u01D2\u01CB\x03\x02\x02", "\x02\u01D3|\x03\x02\x02\x02\u01D4\u01D8\x07$\x02\x02", "\u01D5\u01D7\x0B\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02", "\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02", "\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DB\x03\x02\x02\x02", "\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DC\x07$\x02\x02", "\u01DC~\x03\x02\x02\x02\u01DD\u01DE\t\x06\x02\x02\u01DE", "\x80\x03\x02\x02\x02\u01DF\u01E1\x07\x0F\x02\x02\u01E0", "\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1", "\u01E2\x03\x02\x02\x02\u01E2\u01E3\x07\f\x02\x02\u01E3", "\x82\x03\x02\x02\x02\b\x02\u01C7\u01CF\u01D2\u01D8\u01E0", "\x02"].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

function CalcLexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CalcLexer.prototype = Object.create(antlr4.Lexer.prototype);
CalcLexer.prototype.constructor = CalcLexer;

CalcLexer.EOF = antlr4.Token.EOF;
CalcLexer.T__0 = 1;
CalcLexer.T__1 = 2;
CalcLexer.T__2 = 3;
CalcLexer.T__3 = 4;
CalcLexer.ABS = 5;
CalcLexer.ACOS = 6;
CalcLexer.ADD = 7;
CalcLexer.AND = 8;
CalcLexer.ARROW = 9;
CalcLexer.ASIN = 10;
CalcLexer.ATAN = 11;
CalcLexer.CBRA = 12;
CalcLexer.CCUR = 13;
CalcLexer.CLRTEXT = 14;
CalcLexer.COLON = 15;
CalcLexer.COMMA = 16;
CalcLexer.COS = 17;
CalcLexer.CPAR = 18;
CalcLexer.DIV = 19;
CalcLexer.DO = 20;
CalcLexer.DOT = 21;
CalcLexer.ELSE = 22;
CalcLexer.EQ = 23;
CalcLexer.FATARROW = 24;
CalcLexer.FOR = 25;
CalcLexer.GE = 26;
CalcLexer.GETKEY = 27;
CalcLexer.GOTO = 28;
CalcLexer.GT = 29;
CalcLexer.IF = 30;
CalcLexer.IFEND = 31;
CalcLexer.INT = 32;
CalcLexer.LBL = 33;
CalcLexer.LE = 34;
CalcLexer.LIST = 35;
CalcLexer.LOCATE = 36;
CalcLexer.LOOPWHILE = 37;
CalcLexer.LT = 38;
CalcLexer.MATRIX = 39;
CalcLexer.REMAIN = 40;
CalcLexer.MUL = 41;
CalcLexer.NE = 42;
CalcLexer.NEXT = 43;
CalcLexer.OBRA = 44;
CalcLexer.OCUR = 45;
CalcLexer.OPAR = 46;
CalcLexer.OR = 47;
CalcLexer.PI = 48;
CalcLexer.PROG = 49;
CalcLexer.RETURN = 50;
CalcLexer.SIN = 51;
CalcLexer.SQRT = 52;
CalcLexer.STEP = 53;
CalcLexer.SUB = 54;
CalcLexer.TAN = 55;
CalcLexer.THEN = 56;
CalcLexer.TO = 57;
CalcLexer.WHILE = 58;
CalcLexer.WHILEEND = 59;
CalcLexer.ID = 60;
CalcLexer.UINT = 61;
CalcLexer.STRING = 62;
CalcLexer.WS = 63;
CalcLexer.NEWLINE = 64;

CalcLexer.prototype.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

CalcLexer.prototype.modeNames = ["DEFAULT_MODE"];

CalcLexer.prototype.literalNames = [null, "'File Name'", "'%Header Record'", "'%Data Record'", "'%End'", "'\\Abs '", "'\\acos '", "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", "']'", "'}'", "'\\ClrText'", "':'", "','", "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", "'='", "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", "'\\Goto'", "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\Lbl '", "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\Prog '", "'\\Return'", "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", "' \\To '", "'\\While '", "'\\WhileEnd'"];

CalcLexer.prototype.symbolicNames = [null, null, null, null, null, "ABS", "ACOS", "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", "OR", "PI", "PROG", "RETURN", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND", "ID", "UINT", "STRING", "WS", "NEWLINE"];

CalcLexer.prototype.ruleNames = ["T__0", "T__1", "T__2", "T__3", "ABS", "ACOS", "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", "OR", "PI", "PROG", "RETURN", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND", "ID", "UINT", "STRING", "WS", "NEWLINE"];

CalcLexer.prototype.grammarFileName = "Calc.g4";

exports.CalcLexer = CalcLexer;