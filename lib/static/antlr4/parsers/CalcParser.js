'use strict';

// Generated from /home/jason/Projets/casem/src/static/antlr4/grammars/Calc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalcListener = require('./CalcListener').CalcListener;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

var grammarFileName = "Calc.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03B\u01CA\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t', '\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04', '\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04\f\t\f\x04', '\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04', '\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t', '\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04', '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t', '\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04', '\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#\t#\x04$\t$\x04', '%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+\x04', ',\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03', '\x02\x03\x02\x03\x02\x06\x02h\n\x02\r\x02\x0E\x02', 'i\x05\x02l\n\x02\x03\x03\x03\x03\x03\x03\x03\x03', '\x03\x04\x07\x04s\n\x04\f\x04\x0E\x04v\x0B\x04\x03', '\x05\x03\x05\x03\x05\x06\x05{\n\x05\r\x05\x0E\x05', '|\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05\x83', '\n\x05\r\x05\x0E\x05\x84\x05\x05\x87\n\x05\x03\x06', '\x03\x06\x03\x06\x03\x06\x05\x06\x8D\n\x06\x03', '\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03', '\x07\x05\x07\x96\n\x07\x03\x07\x03\x07\x03\b\x03', '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA2\n\b', '\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03', '\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\x0B', '\x03\x0B\x03\x0B\x03\x0B\x03\f\x03\f\x03\f\x03\f', '\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\xC2\n\f\r', '\f\x0E\f\xC3\x03\r\x03\r\x03\r\x07\r\xC9\n\r\f\r\x0E', '\r\xCC\x0B\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03', '\x0F\x03\x0F\x05\x0F\xD4\n\x0F\x03\x0F\x03\x0F', '\x06\x0F\xD8\n\x0F\r\x0F\x0E\x0F\xD9\x03\x0F\x07', '\x0F\xDD\n\x0F\f\x0F\x0E\x0F\xE0\x0B\x0F\x03\x10', '\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12', '\x03\x12\x06\x12\xEA\n\x12\r\x12\x0E\x12\xEB\x03', '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05', '\x13\xF4\n\x13\x03\x14\x03\x14\x03\x14\x03\x14', '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14', '\x03\x14\x03\x14\x05\x14\u0102\n\x14\x03\x15\x03', '\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03', '\x15\x05\x15\u010C\n\x15\x03\x15\x05\x15\u010F\n\x15', '\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17', '\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18', '\x03\x18\x05\x18\u011E\n\x18\x03\x19\x03\x19\x03', '\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03', '\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03', '\x1C\x03\x1C\x07\x1C\u0130\n\x1C\f\x1C\x0E\x1C\u0133', '\x0B\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D', '\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D', '\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0144\n', '\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03', '\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0150', '\n\x1D\f\x1D\x0E\x1D\u0153\x0B\x1D\x03\x1E\x03\x1E', '\x03\x1E\x05\x1E\u0158\n\x1E\x03\x1E\x03\x1E\x03', '\x1E\x03\x1E\x07\x1E\u015E\n\x1E\f\x1E\x0E\x1E\u0161', '\x0B\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0166\n', '\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u016C', '\n\x1F\f\x1F\x0E\x1F\u016F\x0B\x1F\x03 \x03 \x05 ', '\u0173\n \x03!\x03!\x03"\x03"\x03#\x03#\x06#\u017B\n', '#\r#\x0E#\u017C\x03#\x03#\x03$\x03$\x03$\x03$\x07$\u0185', '\n$\f$\x0E$\u0188\x0B$\x03$\x03$\x03%\x03%\x03%\x03', '%\x07%\u0190\n%\f%\x0E%\u0193\x0B%\x03%\x03%\x03&\x03', '&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'', '\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03', '(\x05(\u01AC\n(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03', ',\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x03', '0\x031\x031\x032\x032\x032\x032\x032\x032\x052\u01C8', '\n2\x032\x02\x07\x1C68:<3\x02\x04\x06\b\n\f\x0E\x10', '\x12\x14\x16\x18\x1A\x1C\x1E "$&(*,.02468:<>@BDFHJLN', 'PRTVXZ\\^`b\x02\t\x03\x02>?\x04\x02\t\t88\x04\x02\x11', '\x11BB\b\x02\x19\x19\x1C\x1C\x1F\x1F$$((,,\x04\x02', '\n\n11\x04\x02\x15\x15*+\b\x02\x07\b\f\r\x13\x13""', '5699\x02\u01CF\x02k\x03\x02\x02\x02\x04m\x03\x02\x02', '\x02\x06t\x03\x02\x02\x02\b\x86\x03\x02\x02\x02', '\n\x8C\x03\x02\x02\x02\f\x8E\x03\x02\x02\x02\x0E', '\x99\x03\x02\x02\x02\x10\xA7\x03\x02\x02\x02\x12', '\xAD\x03\x02\x02\x02\x14\xB3\x03\x02\x02\x02\x16', '\xC1\x03\x02\x02\x02\x18\xC5\x03\x02\x02\x02\x1A', '\xCD\x03\x02\x02\x02\x1C\xD3\x03\x02\x02\x02\x1E', '\xE1\x03\x02\x02\x02 \xE4\x03\x02\x02\x02"\xE7', '\x03\x02\x02\x02$\xF3\x03\x02\x02\x02&\u0101\x03', '\x02\x02\x02(\u010E\x03\x02\x02\x02*\u0110\x03\x02', '\x02\x02,\u0114\x03\x02\x02\x02.\u011D\x03\x02\x02', '\x020\u011F\x03\x02\x02\x022\u0122\x03\x02\x02\x02', '4\u0124\x03\x02\x02\x026\u0126\x03\x02\x02\x028\u0143', '\x03\x02\x02\x02:\u0157\x03\x02\x02\x02<\u0165\x03', '\x02\x02\x02>\u0172\x03\x02\x02\x02@\u0174\x03\x02', '\x02\x02B\u0176\x03\x02\x02\x02D\u0178\x03\x02\x02', '\x02F\u0180\x03\x02\x02\x02H\u018B\x03\x02\x02\x02', 'J\u0196\x03\x02\x02\x02L\u019D\x03\x02\x02\x02N\u01AB', '\x03\x02\x02\x02P\u01AD\x03\x02\x02\x02R\u01AF\x03', '\x02\x02\x02T\u01B1\x03\x02\x02\x02V\u01B3\x03\x02', '\x02\x02X\u01B5\x03\x02\x02\x02Z\u01B7\x03\x02\x02', '\x02\\\u01BA\x03\x02\x02\x02^\u01BD\x03\x02\x02\x02', '`\u01BF\x03\x02\x02\x02b\u01C7\x03\x02\x02\x02dl\x05', '\x06\x04\x02eg\x05\x06\x04\x02fh\x05\x04\x03\x02', 'gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02', '\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02kd\x03\x02', '\x02\x02ke\x03\x02\x02\x02l\x03\x03\x02\x02\x02', 'mn\x05\x14\x0B\x02no\x05\x06\x04\x02op\x05"\x12', '\x02p\x05\x03\x02\x02\x02qs\x05\b\x05\x02rq\x03', '\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02', 'tu\x03\x02\x02\x02u\x07\x03\x02\x02\x02vt\x03\x02', '\x02\x02wx\x05$\x13\x02xy\x052\x1A\x02y{\x03\x02', '\x02\x02zw\x03\x02\x02\x02{|\x03\x02\x02\x02|z\x03', '\x02\x02\x02|}\x03\x02\x02\x02}\x87\x03\x02\x02', '\x02~\x7F\x05\n\x06\x02\x7F\x80\x052\x1A\x02\x80', '\x87\x03\x02\x02\x02\x81\x83\x07B\x02\x02\x82', '\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84', '\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85', '\x87\x03\x02\x02\x02\x86z\x03\x02\x02\x02\x86', '~\x03\x02\x02\x02\x86\x82\x03\x02\x02\x02\x87', '\t\x03\x02\x02\x02\x88\x8D\x05\f\x07\x02\x89\x8D', '\x05\x0E\b\x02\x8A\x8D\x05\x10\t\x02\x8B\x8D\x05', '\x12\n\x02\x8C\x88\x03\x02\x02\x02\x8C\x89\x03', '\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03', '\x02\x02\x02\x8D\x0B\x03\x02\x02\x02\x8E\x8F\x07', ' \x02\x02\x8F\x90\x056\x1C\x02\x90\x91\x052\x1A', '\x02\x91\x92\x07:\x02\x02\x92\x95\x05\x06\x04', '\x02\x93\x94\x07\x18\x02\x02\x94\x96\x05\x06\x04', '\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02', '\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07!\x02', '\x02\x98\r\x03\x02\x02\x02\x99\x9A\x07\x1B\x02', '\x02\x9A\x9B\x058\x1D\x02\x9B\x9C\x07\x0B\x02', '\x02\x9C\x9D\x05^0\x02\x9D\x9E\x07;\x02\x02\x9E', '\xA1\x058\x1D\x02\x9F\xA0\x077\x02\x02\xA0\xA2', '\x058\x1D\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2', '\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4', '\x052\x1A\x02\xA4\xA5\x05\x06\x04\x02\xA5\xA6', '\x07-\x02\x02\xA6\x0F\x03\x02\x02\x02\xA7\xA8', '\x07\x16\x02\x02\xA8\xA9\x052\x1A\x02\xA9\xAA', '\x05\x06\x04\x02\xAA\xAB\x07\'\x02\x02\xAB\xAC', '\x056\x1C\x02\xAC\x11\x03\x02\x02\x02\xAD\xAE', '\x07<\x02\x02\xAE\xAF\x056\x1C\x02\xAF\xB0\x05', '2\x1A\x02\xB0\xB1\x05\x06\x04\x02\xB1\xB2\x07', '=\x02\x02\xB2\x13\x03\x02\x02\x02\xB3\xB4\x05', '\x1E\x10\x02\xB4\xB5\x05\x16\f\x02\xB5\xB6\x05', ' \x11\x02\xB6\x15\x03\x02\x02\x02\xB7\xB8\x05', '\x18\r\x02\xB8\xB9\x07\x11\x02\x02\xB9\xBA\x05', '\x1A\x0E\x02\xBA\xBB\x07B\x02\x02\xBB\xC2\x03', '\x02\x02\x02\xBC\xBD\x07\x03\x02\x02\xBD\xBE\x07', '\x11\x02\x02\xBE\xBF\x05\x1C\x0F\x02\xBF\xC0\x07', 'B\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xB7\x03', '\x02\x02\x02\xC1\xBC\x03\x02\x02\x02\xC2\xC3\x03', '\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03', '\x02\x02\x02\xC4\x17\x03\x02\x02\x02\xC5\xCA\x07', '>\x02\x02\xC6\xC7\x07A\x02\x02\xC7\xC9\x07>\x02', '\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCC\x03\x02\x02', '\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02', '\x02\xCB\x19\x03\x02\x02\x02\xCC\xCA\x03\x02\x02', '\x02\xCD\xCE\t\x02\x02\x02\xCE\x1B\x03\x02\x02', '\x02\xCF\xD0\b\x0F\x01\x02\xD0\xD4\x07>\x02\x02', '\xD1\xD2\x07?\x02\x02\xD2\xD4\x07>\x02\x02\xD3', '\xCF\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4', '\xDE\x03\x02\x02\x02\xD5\xD7\f\x03\x02\x02\xD6', '\xD8\t\x03\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8', '\xD9\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9', '\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB', '\xDD\x05\x1C\x0F\x04\xDC\xD5\x03\x02\x02\x02\xDD', '\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE', '\xDF\x03\x02\x02\x02\xDF\x1D\x03\x02\x02\x02\xE0', '\xDE\x03\x02\x02\x02\xE1\xE2\x07\x04\x02\x02\xE2', '\xE3\x07B\x02\x02\xE3\x1F\x03\x02\x02\x02\xE4', '\xE5\x07\x05\x02\x02\xE5\xE6\x07B\x02\x02\xE6', '!\x03\x02\x02\x02\xE7\xE9\x07\x06\x02\x02\xE8', '\xEA\x07B\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA', '\xEB\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB', '\xEC\x03\x02\x02\x02\xEC#\x03\x02\x02\x02\xED', '\xF4\x05&\x14\x02\xEE\xF4\x05(\x15\x02\xEF\xF4', '\x05*\x16\x02\xF0\xF4\x05,\x17\x02\xF1\xF4\x05', '.\x18\x02\xF2\xF4\x050\x19\x02\xF3\xED\x03\x02', '\x02\x02\xF3\xEE\x03\x02\x02\x02\xF3\xEF\x03\x02', '\x02\x02\xF3\xF0\x03\x02\x02\x02\xF3\xF1\x03\x02', '\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4%\x03\x02', '\x02\x02\xF5\xF6\x058\x1D\x02\xF6\xF7\x07\x0B', '\x02\x02\xF7\xF8\x05> \x02\xF8\u0102\x03\x02\x02', '\x02\xF9\xFA\x05:\x1E\x02\xFA\xFB\x07\x0B\x02', '\x02\xFB\xFC\x05@!\x02\xFC\u0102\x03\x02\x02\x02', '\xFD\xFE\x05<\x1F\x02\xFE\xFF\x07\x0B\x02\x02', '\xFF\u0100\x05B"\x02\u0100\u0102\x03\x02\x02\x02\u0101', '\xF5\x03\x02\x02\x02\u0101\xF9\x03\x02\x02\x02\u0101', '\xFD\x03\x02\x02\x02\u0102\'\x03\x02\x02\x02\u0103', '\u010F\x07@\x02\x02\u0104\u0105\x07&\x02\x02\u0105\u0106', '\x058\x1D\x02\u0106\u0107\x07\x12\x02\x02\u0107\u0108', '\x058\x1D\x02\u0108\u010B\x07\x12\x02\x02\u0109\u010C', '\x07@\x02\x02\u010A\u010C\x058\x1D\x02\u010B\u0109\x03', '\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010F\x03', '\x02\x02\x02\u010D\u010F\x07\x10\x02\x02\u010E\u0103\x03', '\x02\x02\x02\u010E\u0104\x03\x02\x02\x02\u010E\u010D\x03', '\x02\x02\x02\u010F)\x03\x02\x02\x02\u0110\u0111\x07', '\x1D\x02\x02\u0111\u0112\x07\x0B\x02\x02\u0112\u0113\x05', '> \x02\u0113+\x03\x02\x02\x02\u0114\u0115\x056\x1C\x02', '\u0115\u0116\x07\x1A\x02\x02\u0116\u0117\x05$\x13\x02', '\u0117-\x03\x02\x02\x02\u0118\u0119\x07\x1E\x02\x02', '\u0119\u011E\x07>\x02\x02\u011A\u011B\x073\x02\x02\u011B', '\u011E\x07@\x02\x02\u011C\u011E\x054\x1B\x02\u011D\u0118', '\x03\x02\x02\x02\u011D\u011A\x03\x02\x02\x02\u011D\u011C', '\x03\x02\x02\x02\u011E/\x03\x02\x02\x02\u011F\u0120', '\x07#\x02\x02\u0120\u0121\x07>\x02\x02\u01211\x03\x02', '\x02\x02\u0122\u0123\t\x04\x02\x02\u01233\x03\x02\x02', '\x02\u0124\u0125\x074\x02\x02\u01255\x03\x02\x02\x02', '\u0126\u0127\b\x1C\x01\x02\u0127\u0128\x058\x1D\x02\u0128', '\u0129\x05P)\x02\u0129\u012A\x058\x1D\x02\u012A\u0131\x03', '\x02\x02\x02\u012B\u012C\f\x03\x02\x02\u012C\u012D\x05', 'R*\x02\u012D\u012E\x056\x1C\x04\u012E\u0130\x03\x02\x02', '\x02\u012F\u012B\x03\x02\x02\x02\u0130\u0133\x03\x02\x02', '\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02', '\x02\u01327\x03\x02\x02\x02\u0133\u0131\x03\x02\x02', '\x02\u0134\u0135\b\x1D\x01\x02\u0135\u0136\x070\x02\x02', '\u0136\u0137\x058\x1D\x02\u0137\u0138\x07\x14\x02\x02', '\u0138\u0144\x03\x02\x02\x02\u0139\u013A\x078\x02\x02', '\u013A\u0144\x058\x1D\f\u013B\u013C\x05X-\x02\u013C\u013D\x05', '8\x1D\x0B\u013D\u0144\x03\x02\x02\x02\u013E\u0144\x05', 'J&\x02\u013F\u0144\x05L\'\x02\u0140\u0144\x05^0\x02\u0141', '\u0144\x05`1\x02\u0142\u0144\x05b2\x02\u0143\u0134\x03\x02', '\x02\x02\u0143\u0139\x03\x02\x02\x02\u0143\u013B\x03\x02', '\x02\x02\u0143\u013E\x03\x02\x02\x02\u0143\u013F\x03\x02', '\x02\x02\u0143\u0140\x03\x02\x02\x02\u0143\u0141\x03\x02', '\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144\u0151\x03\x02', '\x02\x02\u0145\u0146\f\t\x02\x02\u0146\u0147\x05T+\x02\u0147', '\u0148\x058\x1D\n\u0148\u0150\x03\x02\x02\x02\u0149\u014A', '\f\b\x02\x02\u014A\u014B\x05V,\x02\u014B\u014C\x058\x1D', '\t\u014C\u0150\x03\x02\x02\x02\u014D\u014E\f\n\x02\x02\u014E', '\u0150\x05N(\x02\u014F\u0145\x03\x02\x02\x02\u014F\u0149', '\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0153', '\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152', '\x03\x02\x02\x02\u01529\x03\x02\x02\x02\u0153\u0151', '\x03\x02\x02\x02\u0154\u0155\b\x1E\x01\x02\u0155\u0158', '\x05Z.\x02\u0156\u0158\x05D#\x02\u0157\u0154\x03\x02\x02', '\x02\u0157\u0156\x03\x02\x02\x02\u0158\u015F\x03\x02\x02', '\x02\u0159\u015A\f\x05\x02\x02\u015A\u015B\x05V,\x02\u015B', '\u015C\x05:\x1E\x06\u015C\u015E\x03\x02\x02\x02\u015D', '\u0159\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F', '\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160', ';\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162', '\u0163\b\x1F\x01\x02\u0163\u0166\x05\\/\x02\u0164\u0166\x05', 'F$\x02\u0165\u0162\x03\x02\x02\x02\u0165\u0164\x03\x02', '\x02\x02\u0166\u016D\x03\x02\x02\x02\u0167\u0168\f\x05', '\x02\x02\u0168\u0169\x05V,\x02\u0169\u016A\x05<\x1F\x06', '\u016A\u016C\x03\x02\x02\x02\u016B\u0167\x03\x02\x02\x02', '\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02', '\u016D\u016E\x03\x02\x02\x02\u016E=\x03\x02\x02\x02', '\u016F\u016D\x03\x02\x02\x02\u0170\u0173\x05J&\x02\u0171', '\u0173\x05^0\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0171', '\x03\x02\x02\x02\u0173?\x03\x02\x02\x02\u0174\u0175', '\x05Z.\x02\u0175A\x03\x02\x02\x02\u0176\u0177\x05\\/\x02', '\u0177C\x03\x02\x02\x02\u0178\u017A\x07.\x02\x02\u0179', '\u017B\x05H%\x02\u017A\u0179\x03\x02\x02\x02\u017B\u017C', '\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D', '\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F', '\x07\x0E\x02\x02\u017FE\x03\x02\x02\x02\u0180\u0181', '\x07/\x02\x02\u0181\u0186\x058\x1D\x02\u0182\u0183\x07', '\x12\x02\x02\u0183\u0185\x058\x1D\x02\u0184\u0182\x03', '\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03', '\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03', '\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x07', '\x0F\x02\x02\u018AG\x03\x02\x02\x02\u018B\u018C\x07', '.\x02\x02\u018C\u0191\x058\x1D\x02\u018D\u018E\x07\x12', '\x02\x02\u018E\u0190\x058\x1D\x02\u018F\u018D\x03\x02', '\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02', '\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02', '\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0195\x07\x0E', '\x02\x02\u0195I\x03\x02\x02\x02\u0196\u0197\x05Z.\x02', '\u0197\u0198\x07.\x02\x02\u0198\u0199\x058\x1D\x02\u0199', '\u019A\x07\x12\x02\x02\u019A\u019B\x058\x1D\x02\u019B', '\u019C\x07\x0E\x02\x02\u019CK\x03\x02\x02\x02\u019D', '\u019E\x05\\/\x02\u019E\u019F\x07.\x02\x02\u019F\u01A0\x05', '8\x1D\x02\u01A0\u01A1\x07\x0E\x02\x02\u01A1M\x03\x02', '\x02\x02\u01A2\u01A3\x070\x02\x02\u01A3\u01A4\x058\x1D', '\x02\u01A4\u01A5\x07\x14\x02\x02\u01A5\u01AC\x03\x02\x02', '\x02\u01A6\u01A7\x05X-\x02\u01A7\u01A8\x058\x1D\x02\u01A8', '\u01AC\x03\x02\x02\x02\u01A9\u01AC\x05^0\x02\u01AA\u01AC', '\x05`1\x02\u01AB\u01A2\x03\x02\x02\x02\u01AB\u01A6\x03', '\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03', '\x02\x02\x02\u01ACO\x03\x02\x02\x02\u01AD\u01AE\t\x05', '\x02\x02\u01AEQ\x03\x02\x02\x02\u01AF\u01B0\t\x06\x02', '\x02\u01B0S\x03\x02\x02\x02\u01B1\u01B2\t\x07\x02\x02', '\u01B2U\x03\x02\x02\x02\u01B3\u01B4\t\x03\x02\x02\u01B4', 'W\x03\x02\x02\x02\u01B5\u01B6\t\b\x02\x02\u01B6Y\x03\x02', '\x02\x02\u01B7\u01B8\x07)\x02\x02\u01B8\u01B9\x07>\x02', '\x02\u01B9[\x03\x02\x02\x02\u01BA\u01BB\x07%\x02\x02', '\u01BB\u01BC\x07?\x02\x02\u01BC]\x03\x02\x02\x02\u01BD', '\u01BE\x07>\x02\x02\u01BE_\x03\x02\x02\x02\u01BF\u01C0', '\x072\x02\x02\u01C0a\x03\x02\x02\x02\u01C1\u01C8\x07', '?\x02\x02\u01C2\u01C3\x07\x17\x02\x02\u01C3\u01C8\x07', '?\x02\x02\u01C4\u01C5\x07?\x02\x02\u01C5\u01C6\x07\x17', '\x02\x02\u01C6\u01C8\x07?\x02\x02\u01C7\u01C1\x03\x02', '\x02\x02\u01C7\u01C2\x03\x02\x02\x02\u01C7\u01C4\x03\x02', '\x02\x02\u01C8c\x03\x02\x02\x02%ikt|\x84\x86\x8C\x95', '\xA1\xC1\xC3\xCA\xD3\xD9\xDE\xEB\xF3\u0101\u010B\u010E', '\u011D\u0131\u0143\u014F\u0151\u0157\u015F\u0165\u016D\u0172\u017C\u0186', '\u0191\u01AB\u01C7'].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'File Name'", "'%Header Record'", "'%Data Record'", "'%End'", "'\\Abs '", "'\\acos '", "'+'", "'\\ And '", "'\\->'", "'\\asin '", "'\\atan '", "']'", "'}'", "'\\ClrText'", "':'", "','", "'\\cos '", "')'", "'/'", "'\\Do'", "'.'", "'\\Else '", "'='", "'\\=>'", "'\\For '", "'\\>='", "'\\Getkey'", "'\\Goto'", "'>'", "'\\If '", "'\\IfEnd'", "'\\Int '", "'\\Lbl '", "'\\<='", "'\\List '", "'\\Locate '", "'\\LpWhile '", "'<'", "'\\Mat '", "'%'", "'*'", "'\\<>'", "'\\Next'", "'['", "'{'", "'('", "'\\ Or '", "'\\Pi'", "'\\Prog '", "'\\Return'", "'\\sin '", "'\\sqrt'", "'\\Step '", "'-'", "'\\tan '", "'\\Then '", "' \\To '", "'\\While '", "'\\WhileEnd'"];

var symbolicNames = [null, null, null, null, null, "ABS", "ACOS", "ADD", "AND", "ARROW", "ASIN", "ATAN", "CBRA", "CCUR", "CLRTEXT", "COLON", "COMMA", "COS", "CPAR", "DIV", "DO", "DOT", "ELSE", "EQ", "FATARROW", "FOR", "GE", "GETKEY", "GOTO", "GT", "IF", "IFEND", "INT", "LBL", "LE", "LIST", "LOCATE", "LOOPWHILE", "LT", "MATRIX", "REMAIN", "MUL", "NE", "NEXT", "OBRA", "OCUR", "OPAR", "OR", "PI", "PROG", "RETURN", "SIN", "SQRT", "STEP", "SUB", "TAN", "THEN", "TO", "WHILE", "WHILEEND", "ID", "UINT", "STRING", "WS", "NEWLINE"];

var ruleNames = ["prog", "file", "blocks", "block", "blockStat", "ifStat", "forStat", "doStat", "whileStat", "header", "attributes", "headerAttr", "headerValue", "fileName", "startHeader", "endHeader", "endFile", "stat", "assignStat", "printStat", "readStat", "implyStat", "jumpStat", "labelStat", "endStat", "endProg", "boolExpr", "numExpr", "matrixExpr", "listExpr", "stoExpr", "matrixStoExpr", "listStoExpr", "matrixInitializerExpr", "listInitializerExpr", "matrixRowExpr", "matrixElementExpr", "listElementExpr", "vectorExpr", "compOp", "logicOp", "multOp", "addOp", "func", "matrix", "list", "variable", "constant", "number"];

function CalcParser(input) {
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
    get: function get() {
        return atn;
    }
});

CalcParser.EOF = antlr4.Token.EOF;
CalcParser.T__0 = 1;
CalcParser.T__1 = 2;
CalcParser.T__2 = 3;
CalcParser.T__3 = 4;
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
CalcParser.RETURN = 50;
CalcParser.SIN = 51;
CalcParser.SQRT = 52;
CalcParser.STEP = 53;
CalcParser.SUB = 54;
CalcParser.TAN = 55;
CalcParser.THEN = 56;
CalcParser.TO = 57;
CalcParser.WHILE = 58;
CalcParser.WHILEEND = 59;
CalcParser.ID = 60;
CalcParser.UINT = 61;
CalcParser.STRING = 62;
CalcParser.WS = 63;
CalcParser.NEWLINE = 64;

CalcParser.RULE_prog = 0;
CalcParser.RULE_file = 1;
CalcParser.RULE_blocks = 2;
CalcParser.RULE_block = 3;
CalcParser.RULE_blockStat = 4;
CalcParser.RULE_ifStat = 5;
CalcParser.RULE_forStat = 6;
CalcParser.RULE_doStat = 7;
CalcParser.RULE_whileStat = 8;
CalcParser.RULE_header = 9;
CalcParser.RULE_attributes = 10;
CalcParser.RULE_headerAttr = 11;
CalcParser.RULE_headerValue = 12;
CalcParser.RULE_fileName = 13;
CalcParser.RULE_startHeader = 14;
CalcParser.RULE_endHeader = 15;
CalcParser.RULE_endFile = 16;
CalcParser.RULE_stat = 17;
CalcParser.RULE_assignStat = 18;
CalcParser.RULE_printStat = 19;
CalcParser.RULE_readStat = 20;
CalcParser.RULE_implyStat = 21;
CalcParser.RULE_jumpStat = 22;
CalcParser.RULE_labelStat = 23;
CalcParser.RULE_endStat = 24;
CalcParser.RULE_endProg = 25;
CalcParser.RULE_boolExpr = 26;
CalcParser.RULE_numExpr = 27;
CalcParser.RULE_matrixExpr = 28;
CalcParser.RULE_listExpr = 29;
CalcParser.RULE_stoExpr = 30;
CalcParser.RULE_matrixStoExpr = 31;
CalcParser.RULE_listStoExpr = 32;
CalcParser.RULE_matrixInitializerExpr = 33;
CalcParser.RULE_listInitializerExpr = 34;
CalcParser.RULE_matrixRowExpr = 35;
CalcParser.RULE_matrixElementExpr = 36;
CalcParser.RULE_listElementExpr = 37;
CalcParser.RULE_vectorExpr = 38;
CalcParser.RULE_compOp = 39;
CalcParser.RULE_logicOp = 40;
CalcParser.RULE_multOp = 41;
CalcParser.RULE_addOp = 42;
CalcParser.RULE_func = 43;
CalcParser.RULE_matrix = 44;
CalcParser.RULE_list = 45;
CalcParser.RULE_variable = 46;
CalcParser.RULE_constant = 47;
CalcParser.RULE_number = 48;

function ProgContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.blocks = function () {
    return this.getTypedRuleContext(BlocksContext, 0);
};

ProgContext.prototype.file = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(FileContext);
    } else {
        return this.getTypedRuleContext(FileContext, i);
    }
};

ProgContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterProg(this);
    }
};

ProgContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitProg(this);
    }
};

ProgContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ProgContext = ProgContext;

CalcParser.prototype.prog = function () {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalcParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.state = 105;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 98;
                this.blocks();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 99;
                this.blocks();
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 100;
                    this.file();
                    this.state = 103;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === CalcParser.T__1);
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

function FileContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.header = function () {
    return this.getTypedRuleContext(HeaderContext, 0);
};

FileContext.prototype.blocks = function () {
    return this.getTypedRuleContext(BlocksContext, 0);
};

FileContext.prototype.endFile = function () {
    return this.getTypedRuleContext(EndFileContext, 0);
};

FileContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterFile(this);
    }
};

FileContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitFile(this);
    }
};

FileContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.FileContext = FileContext;

CalcParser.prototype.file = function () {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalcParser.RULE_file);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.header();
        this.state = 108;
        this.blocks();
        this.state = 109;
        this.endFile();
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

function BlocksContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_blocks;
    return this;
}

BlocksContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlocksContext.prototype.constructor = BlocksContext;

BlocksContext.prototype.block = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext, i);
    }
};

BlocksContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterBlocks(this);
    }
};

BlocksContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitBlocks(this);
    }
};

BlocksContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitBlocks(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.BlocksContext = BlocksContext;

CalcParser.prototype.blocks = function () {

    var localctx = new BlocksContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalcParser.RULE_blocks);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la - 5 & ~0x1f) == 0 && (1 << _la - 5 & (1 << CalcParser.ABS - 5 | 1 << CalcParser.ACOS - 5 | 1 << CalcParser.ASIN - 5 | 1 << CalcParser.ATAN - 5 | 1 << CalcParser.CLRTEXT - 5 | 1 << CalcParser.COS - 5 | 1 << CalcParser.DO - 5 | 1 << CalcParser.DOT - 5 | 1 << CalcParser.FOR - 5 | 1 << CalcParser.GETKEY - 5 | 1 << CalcParser.GOTO - 5 | 1 << CalcParser.IF - 5 | 1 << CalcParser.INT - 5 | 1 << CalcParser.LBL - 5 | 1 << CalcParser.LIST - 5 | 1 << CalcParser.LOCATE - 5)) !== 0 || (_la - 39 & ~0x1f) == 0 && (1 << _la - 39 & (1 << CalcParser.MATRIX - 39 | 1 << CalcParser.OBRA - 39 | 1 << CalcParser.OCUR - 39 | 1 << CalcParser.OPAR - 39 | 1 << CalcParser.PI - 39 | 1 << CalcParser.PROG - 39 | 1 << CalcParser.RETURN - 39 | 1 << CalcParser.SIN - 39 | 1 << CalcParser.SQRT - 39 | 1 << CalcParser.SUB - 39 | 1 << CalcParser.TAN - 39 | 1 << CalcParser.WHILE - 39 | 1 << CalcParser.ID - 39 | 1 << CalcParser.UINT - 39 | 1 << CalcParser.STRING - 39 | 1 << CalcParser.NEWLINE - 39)) !== 0) {
            this.state = 111;
            this.block();
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function BlockContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext, i);
    }
};

BlockContext.prototype.endStat = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(EndStatContext);
    } else {
        return this.getTypedRuleContext(EndStatContext, i);
    }
};

BlockContext.prototype.blockStat = function () {
    return this.getTypedRuleContext(BlockStatContext, 0);
};

BlockContext.prototype.NEWLINE = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
    }
};

BlockContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterBlock(this);
    }
};

BlockContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitBlock(this);
    }
};

BlockContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.BlockContext = BlockContext;

CalcParser.prototype.block = function () {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalcParser.RULE_block);
    try {
        this.state = 132;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
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
            case CalcParser.RETURN:
            case CalcParser.SIN:
            case CalcParser.SQRT:
            case CalcParser.SUB:
            case CalcParser.TAN:
            case CalcParser.ID:
            case CalcParser.UINT:
            case CalcParser.STRING:
                this.enterOuterAlt(localctx, 1);
                this.state = 120;
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            this.state = 117;
                            this.stat();
                            this.state = 118;
                            this.endStat();
                            break;
                        default:
                            throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 122;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
                break;
            case CalcParser.DO:
            case CalcParser.FOR:
            case CalcParser.IF:
            case CalcParser.WHILE:
                this.enterOuterAlt(localctx, 2);
                this.state = 124;
                this.blockStat();
                this.state = 125;
                this.endStat();
                break;
            case CalcParser.NEWLINE:
                this.enterOuterAlt(localctx, 3);
                this.state = 128;
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            this.state = 127;
                            this.match(CalcParser.NEWLINE);
                            break;
                        default:
                            throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 130;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
                } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
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

function BlockStatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_blockStat;
    return this;
}

BlockStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatContext.prototype.constructor = BlockStatContext;

BlockStatContext.prototype.ifStat = function () {
    return this.getTypedRuleContext(IfStatContext, 0);
};

BlockStatContext.prototype.forStat = function () {
    return this.getTypedRuleContext(ForStatContext, 0);
};

BlockStatContext.prototype.doStat = function () {
    return this.getTypedRuleContext(DoStatContext, 0);
};

BlockStatContext.prototype.whileStat = function () {
    return this.getTypedRuleContext(WhileStatContext, 0);
};

BlockStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterBlockStat(this);
    }
};

BlockStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitBlockStat(this);
    }
};

BlockStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitBlockStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.BlockStatContext = BlockStatContext;

CalcParser.prototype.blockStat = function () {

    var localctx = new BlockStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalcParser.RULE_blockStat);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.IF:
                this.enterOuterAlt(localctx, 1);
                this.state = 134;
                this.ifStat();
                break;
            case CalcParser.FOR:
                this.enterOuterAlt(localctx, 2);
                this.state = 135;
                this.forStat();
                break;
            case CalcParser.DO:
                this.enterOuterAlt(localctx, 3);
                this.state = 136;
                this.doStat();
                break;
            case CalcParser.WHILE:
                this.enterOuterAlt(localctx, 4);
                this.state = 137;
                this.whileStat();
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

function IfStatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.IF = function () {
    return this.getToken(CalcParser.IF, 0);
};

IfStatContext.prototype.boolExpr = function () {
    return this.getTypedRuleContext(BoolExprContext, 0);
};

IfStatContext.prototype.endStat = function () {
    return this.getTypedRuleContext(EndStatContext, 0);
};

IfStatContext.prototype.THEN = function () {
    return this.getToken(CalcParser.THEN, 0);
};

IfStatContext.prototype.blocks = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(BlocksContext);
    } else {
        return this.getTypedRuleContext(BlocksContext, i);
    }
};

IfStatContext.prototype.IFEND = function () {
    return this.getToken(CalcParser.IFEND, 0);
};

IfStatContext.prototype.ELSE = function () {
    return this.getToken(CalcParser.ELSE, 0);
};

IfStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterIfStat(this);
    }
};

IfStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitIfStat(this);
    }
};

IfStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.IfStatContext = IfStatContext;

CalcParser.prototype.ifStat = function () {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalcParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(CalcParser.IF);
        this.state = 141;
        this.boolExpr(0);
        this.state = 142;
        this.endStat();
        this.state = 143;
        this.match(CalcParser.THEN);
        this.state = 144;
        this.blocks();
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === CalcParser.ELSE) {
            this.state = 145;
            this.match(CalcParser.ELSE);
            this.state = 146;
            this.blocks();
        }

        this.state = 149;
        this.match(CalcParser.IFEND);
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

function ForStatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_forStat;
    return this;
}

ForStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatContext.prototype.constructor = ForStatContext;

ForStatContext.prototype.FOR = function () {
    return this.getToken(CalcParser.FOR, 0);
};

ForStatContext.prototype.numExpr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NumExprContext);
    } else {
        return this.getTypedRuleContext(NumExprContext, i);
    }
};

ForStatContext.prototype.ARROW = function () {
    return this.getToken(CalcParser.ARROW, 0);
};

ForStatContext.prototype.variable = function () {
    return this.getTypedRuleContext(VariableContext, 0);
};

ForStatContext.prototype.TO = function () {
    return this.getToken(CalcParser.TO, 0);
};

ForStatContext.prototype.endStat = function () {
    return this.getTypedRuleContext(EndStatContext, 0);
};

ForStatContext.prototype.blocks = function () {
    return this.getTypedRuleContext(BlocksContext, 0);
};

ForStatContext.prototype.NEXT = function () {
    return this.getToken(CalcParser.NEXT, 0);
};

ForStatContext.prototype.STEP = function () {
    return this.getToken(CalcParser.STEP, 0);
};

ForStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterForStat(this);
    }
};

ForStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitForStat(this);
    }
};

ForStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitForStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ForStatContext = ForStatContext;

CalcParser.prototype.forStat = function () {

    var localctx = new ForStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CalcParser.RULE_forStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(CalcParser.FOR);
        this.state = 152;
        this.numExpr(0);
        this.state = 153;
        this.match(CalcParser.ARROW);
        this.state = 154;
        this.variable();
        this.state = 155;
        this.match(CalcParser.TO);
        this.state = 156;
        this.numExpr(0);
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === CalcParser.STEP) {
            this.state = 157;
            this.match(CalcParser.STEP);
            this.state = 158;
            this.numExpr(0);
        }

        this.state = 161;
        this.endStat();
        this.state = 162;
        this.blocks();
        this.state = 163;
        this.match(CalcParser.NEXT);
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

function DoStatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_doStat;
    return this;
}

DoStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoStatContext.prototype.constructor = DoStatContext;

DoStatContext.prototype.DO = function () {
    return this.getToken(CalcParser.DO, 0);
};

DoStatContext.prototype.endStat = function () {
    return this.getTypedRuleContext(EndStatContext, 0);
};

DoStatContext.prototype.blocks = function () {
    return this.getTypedRuleContext(BlocksContext, 0);
};

DoStatContext.prototype.LOOPWHILE = function () {
    return this.getToken(CalcParser.LOOPWHILE, 0);
};

DoStatContext.prototype.boolExpr = function () {
    return this.getTypedRuleContext(BoolExprContext, 0);
};

DoStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterDoStat(this);
    }
};

DoStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitDoStat(this);
    }
};

DoStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitDoStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.DoStatContext = DoStatContext;

CalcParser.prototype.doStat = function () {

    var localctx = new DoStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CalcParser.RULE_doStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(CalcParser.DO);
        this.state = 166;
        this.endStat();
        this.state = 167;
        this.blocks();
        this.state = 168;
        this.match(CalcParser.LOOPWHILE);
        this.state = 169;
        this.boolExpr(0);
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

function WhileStatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_whileStat;
    return this;
}

WhileStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatContext.prototype.constructor = WhileStatContext;

WhileStatContext.prototype.WHILE = function () {
    return this.getToken(CalcParser.WHILE, 0);
};

WhileStatContext.prototype.boolExpr = function () {
    return this.getTypedRuleContext(BoolExprContext, 0);
};

WhileStatContext.prototype.endStat = function () {
    return this.getTypedRuleContext(EndStatContext, 0);
};

WhileStatContext.prototype.blocks = function () {
    return this.getTypedRuleContext(BlocksContext, 0);
};

WhileStatContext.prototype.WHILEEND = function () {
    return this.getToken(CalcParser.WHILEEND, 0);
};

WhileStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterWhileStat(this);
    }
};

WhileStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitWhileStat(this);
    }
};

WhileStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitWhileStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.WhileStatContext = WhileStatContext;

CalcParser.prototype.whileStat = function () {

    var localctx = new WhileStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CalcParser.RULE_whileStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(CalcParser.WHILE);
        this.state = 172;
        this.boolExpr(0);
        this.state = 173;
        this.endStat();
        this.state = 174;
        this.blocks();
        this.state = 175;
        this.match(CalcParser.WHILEEND);
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

function HeaderContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.startHeader = function () {
    return this.getTypedRuleContext(StartHeaderContext, 0);
};

HeaderContext.prototype.attributes = function () {
    return this.getTypedRuleContext(AttributesContext, 0);
};

HeaderContext.prototype.endHeader = function () {
    return this.getTypedRuleContext(EndHeaderContext, 0);
};

HeaderContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterHeader(this);
    }
};

HeaderContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitHeader(this);
    }
};

HeaderContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.HeaderContext = HeaderContext;

CalcParser.prototype.header = function () {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CalcParser.RULE_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.startHeader();
        this.state = 178;
        this.attributes();
        this.state = 179;
        this.endHeader();
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

function AttributesContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_attributes;
    return this;
}

AttributesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributesContext.prototype.constructor = AttributesContext;

AttributesContext.prototype.headerAttr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(HeaderAttrContext);
    } else {
        return this.getTypedRuleContext(HeaderAttrContext, i);
    }
};

AttributesContext.prototype.COLON = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.COLON);
    } else {
        return this.getToken(CalcParser.COLON, i);
    }
};

AttributesContext.prototype.headerValue = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(HeaderValueContext);
    } else {
        return this.getTypedRuleContext(HeaderValueContext, i);
    }
};

AttributesContext.prototype.NEWLINE = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
    }
};

AttributesContext.prototype.fileName = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(FileNameContext);
    } else {
        return this.getTypedRuleContext(FileNameContext, i);
    }
};

AttributesContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterAttributes(this);
    }
};

AttributesContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitAttributes(this);
    }
};

AttributesContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitAttributes(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.AttributesContext = AttributesContext;

CalcParser.prototype.attributes = function () {

    var localctx = new AttributesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CalcParser.RULE_attributes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 191;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CalcParser.ID:
                    this.state = 181;
                    this.headerAttr();
                    this.state = 182;
                    this.match(CalcParser.COLON);
                    this.state = 183;
                    this.headerValue();
                    this.state = 184;
                    this.match(CalcParser.NEWLINE);
                    break;
                case CalcParser.T__0:
                    this.state = 186;
                    this.match(CalcParser.T__0);
                    this.state = 187;
                    this.match(CalcParser.COLON);
                    this.state = 188;
                    this.fileName(0);
                    this.state = 189;
                    this.match(CalcParser.NEWLINE);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (_la === CalcParser.T__0 || _la === CalcParser.ID);
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

function HeaderAttrContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_headerAttr;
    return this;
}

HeaderAttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderAttrContext.prototype.constructor = HeaderAttrContext;

HeaderAttrContext.prototype.ID = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.ID);
    } else {
        return this.getToken(CalcParser.ID, i);
    }
};

HeaderAttrContext.prototype.WS = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.WS);
    } else {
        return this.getToken(CalcParser.WS, i);
    }
};

HeaderAttrContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterHeaderAttr(this);
    }
};

HeaderAttrContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitHeaderAttr(this);
    }
};

HeaderAttrContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitHeaderAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.HeaderAttrContext = HeaderAttrContext;

CalcParser.prototype.headerAttr = function () {

    var localctx = new HeaderAttrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CalcParser.RULE_headerAttr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(CalcParser.ID);
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === CalcParser.WS) {
            this.state = 196;
            this.match(CalcParser.WS);
            this.state = 197;
            this.match(CalcParser.ID);
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function HeaderValueContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_headerValue;
    return this;
}

HeaderValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderValueContext.prototype.constructor = HeaderValueContext;

HeaderValueContext.prototype.ID = function () {
    return this.getToken(CalcParser.ID, 0);
};

HeaderValueContext.prototype.UINT = function () {
    return this.getToken(CalcParser.UINT, 0);
};

HeaderValueContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterHeaderValue(this);
    }
};

HeaderValueContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitHeaderValue(this);
    }
};

HeaderValueContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitHeaderValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.HeaderValueContext = HeaderValueContext;

CalcParser.prototype.headerValue = function () {

    var localctx = new HeaderValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CalcParser.RULE_headerValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        _la = this._input.LA(1);
        if (!(_la === CalcParser.ID || _la === CalcParser.UINT)) {
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

function FileNameContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_fileName;
    return this;
}

FileNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileNameContext.prototype.constructor = FileNameContext;

FileNameContext.prototype.ID = function () {
    return this.getToken(CalcParser.ID, 0);
};

FileNameContext.prototype.UINT = function () {
    return this.getToken(CalcParser.UINT, 0);
};

FileNameContext.prototype.fileName = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(FileNameContext);
    } else {
        return this.getTypedRuleContext(FileNameContext, i);
    }
};

FileNameContext.prototype.SUB = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.SUB);
    } else {
        return this.getToken(CalcParser.SUB, i);
    }
};

FileNameContext.prototype.ADD = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.ADD);
    } else {
        return this.getToken(CalcParser.ADD, i);
    }
};

FileNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterFileName(this);
    }
};

FileNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitFileName(this);
    }
};

FileNameContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitFileName(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.prototype.fileName = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new FileNameContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, CalcParser.RULE_fileName, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.ID:
                this.state = 206;
                this.match(CalcParser.ID);
                break;
            case CalcParser.UINT:
                this.state = 207;
                this.match(CalcParser.UINT);
                this.state = 208;
                this.match(CalcParser.ID);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 220;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FileNameContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_fileName);
                this.state = 211;
                if (!this.precpred(this._ctx, 1)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 212;
                    _la = this._input.LA(1);
                    if (!(_la === CalcParser.ADD || _la === CalcParser.SUB)) {
                        this._errHandler.recoverInline(this);
                    } else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 215;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === CalcParser.ADD || _la === CalcParser.SUB);
                this.state = 217;
                this.fileName(2);
            }
            this.state = 222;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
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

function StartHeaderContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_startHeader;
    return this;
}

StartHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartHeaderContext.prototype.constructor = StartHeaderContext;

StartHeaderContext.prototype.NEWLINE = function () {
    return this.getToken(CalcParser.NEWLINE, 0);
};

StartHeaderContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterStartHeader(this);
    }
};

StartHeaderContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitStartHeader(this);
    }
};

StartHeaderContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitStartHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.StartHeaderContext = StartHeaderContext;

CalcParser.prototype.startHeader = function () {

    var localctx = new StartHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CalcParser.RULE_startHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(CalcParser.T__1);
        this.state = 224;
        this.match(CalcParser.NEWLINE);
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

function EndHeaderContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_endHeader;
    return this;
}

EndHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndHeaderContext.prototype.constructor = EndHeaderContext;

EndHeaderContext.prototype.NEWLINE = function () {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EndHeaderContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEndHeader(this);
    }
};

EndHeaderContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEndHeader(this);
    }
};

EndHeaderContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitEndHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.EndHeaderContext = EndHeaderContext;

CalcParser.prototype.endHeader = function () {

    var localctx = new EndHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CalcParser.RULE_endHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.match(CalcParser.T__2);
        this.state = 227;
        this.match(CalcParser.NEWLINE);
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

function EndFileContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_endFile;
    return this;
}

EndFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndFileContext.prototype.constructor = EndFileContext;

EndFileContext.prototype.NEWLINE = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.NEWLINE);
    } else {
        return this.getToken(CalcParser.NEWLINE, i);
    }
};

EndFileContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEndFile(this);
    }
};

EndFileContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEndFile(this);
    }
};

EndFileContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitEndFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.EndFileContext = EndFileContext;

CalcParser.prototype.endFile = function () {

    var localctx = new EndFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CalcParser.RULE_endFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(CalcParser.T__3);
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 230;
            this.match(CalcParser.NEWLINE);
            this.state = 233;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (_la === CalcParser.NEWLINE);
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

function StatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalcParser.RULE_stat;
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
    if (listener instanceof CalcListener) {
        listener.enterStat(this);
    }
};

StatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitStat(this);
    }
};

StatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.StatContext = StatContext;

CalcParser.prototype.stat = function () {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CalcParser.RULE_stat);
    try {
        this.state = 241;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 235;
                this.assignStat();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 236;
                this.printStat();
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 237;
                this.readStat();
                break;

            case 4:
                this.enterOuterAlt(localctx, 4);
                this.state = 238;
                this.implyStat();
                break;

            case 5:
                this.enterOuterAlt(localctx, 5);
                this.state = 239;
                this.jumpStat();
                break;

            case 6:
                this.enterOuterAlt(localctx, 6);
                this.state = 240;
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
    this.ruleIndex = CalcParser.RULE_assignStat;
    return this;
}

AssignStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatContext.prototype.constructor = AssignStatContext;

AssignStatContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

AssignStatContext.prototype.ARROW = function () {
    return this.getToken(CalcParser.ARROW, 0);
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
    if (listener instanceof CalcListener) {
        listener.enterAssignStat(this);
    }
};

AssignStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitAssignStat(this);
    }
};

AssignStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitAssignStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.AssignStatContext = AssignStatContext;

CalcParser.prototype.assignStat = function () {

    var localctx = new AssignStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CalcParser.RULE_assignStat);
    try {
        this.state = 255;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 17, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 243;
                this.numExpr(0);
                this.state = 244;
                this.match(CalcParser.ARROW);
                this.state = 245;
                this.stoExpr();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 247;
                this.matrixExpr(0);
                this.state = 248;
                this.match(CalcParser.ARROW);
                this.state = 249;
                this.matrixStoExpr();
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 251;
                this.listExpr(0);
                this.state = 252;
                this.match(CalcParser.ARROW);
                this.state = 253;
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
    this.ruleIndex = CalcParser.RULE_printStat;
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

CalcParser.PrintContext = PrintContext;

PrintContext.prototype.STRING = function () {
    return this.getToken(CalcParser.STRING, 0);
};
PrintContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterPrint(this);
    }
};

PrintContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitPrint(this);
    }
};

PrintContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

ClearTextContext.prototype.CLRTEXT = function () {
    return this.getToken(CalcParser.CLRTEXT, 0);
};
ClearTextContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterClearText(this);
    }
};

ClearTextContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitClearText(this);
    }
};

ClearTextContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

PrintAtContext.prototype.LOCATE = function () {
    return this.getToken(CalcParser.LOCATE, 0);
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
        return this.getTokens(CalcParser.COMMA);
    } else {
        return this.getToken(CalcParser.COMMA, i);
    }
};

PrintAtContext.prototype.STRING = function () {
    return this.getToken(CalcParser.STRING, 0);
};
PrintAtContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterPrintAt(this);
    }
};

PrintAtContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitPrintAt(this);
    }
};

PrintAtContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitPrintAt(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.PrintStatContext = PrintStatContext;

CalcParser.prototype.printStat = function () {

    var localctx = new PrintStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CalcParser.RULE_printStat);
    try {
        this.state = 268;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.STRING:
                localctx = new PrintContext(this, localctx);
                this.enterOuterAlt(localctx, 1);
                this.state = 257;
                this.match(CalcParser.STRING);
                break;
            case CalcParser.LOCATE:
                localctx = new PrintAtContext(this, localctx);
                this.enterOuterAlt(localctx, 2);
                this.state = 258;
                this.match(CalcParser.LOCATE);
                this.state = 259;
                this.numExpr(0);
                this.state = 260;
                this.match(CalcParser.COMMA);
                this.state = 261;
                this.numExpr(0);
                this.state = 262;
                this.match(CalcParser.COMMA);
                this.state = 265;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CalcParser.STRING:
                        this.state = 263;
                        this.match(CalcParser.STRING);
                        break;
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
                    case CalcParser.ID:
                    case CalcParser.UINT:
                        this.state = 264;
                        this.numExpr(0);
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                }
                break;
            case CalcParser.CLRTEXT:
                localctx = new ClearTextContext(this, localctx);
                this.enterOuterAlt(localctx, 3);
                this.state = 267;
                this.match(CalcParser.CLRTEXT);
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
    this.ruleIndex = CalcParser.RULE_readStat;
    return this;
}

ReadStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadStatContext.prototype.constructor = ReadStatContext;

ReadStatContext.prototype.GETKEY = function () {
    return this.getToken(CalcParser.GETKEY, 0);
};

ReadStatContext.prototype.ARROW = function () {
    return this.getToken(CalcParser.ARROW, 0);
};

ReadStatContext.prototype.stoExpr = function () {
    return this.getTypedRuleContext(StoExprContext, 0);
};

ReadStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterReadStat(this);
    }
};

ReadStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitReadStat(this);
    }
};

ReadStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitReadStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ReadStatContext = ReadStatContext;

CalcParser.prototype.readStat = function () {

    var localctx = new ReadStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CalcParser.RULE_readStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(CalcParser.GETKEY);
        this.state = 271;
        this.match(CalcParser.ARROW);
        this.state = 272;
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
    this.ruleIndex = CalcParser.RULE_implyStat;
    return this;
}

ImplyStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImplyStatContext.prototype.constructor = ImplyStatContext;

ImplyStatContext.prototype.boolExpr = function () {
    return this.getTypedRuleContext(BoolExprContext, 0);
};

ImplyStatContext.prototype.FATARROW = function () {
    return this.getToken(CalcParser.FATARROW, 0);
};

ImplyStatContext.prototype.stat = function () {
    return this.getTypedRuleContext(StatContext, 0);
};

ImplyStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterImplyStat(this);
    }
};

ImplyStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitImplyStat(this);
    }
};

ImplyStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitImplyStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ImplyStatContext = ImplyStatContext;

CalcParser.prototype.implyStat = function () {

    var localctx = new ImplyStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CalcParser.RULE_implyStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.boolExpr(0);
        this.state = 275;
        this.match(CalcParser.FATARROW);
        this.state = 276;
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
    this.ruleIndex = CalcParser.RULE_jumpStat;
    return this;
}

JumpStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JumpStatContext.prototype.constructor = JumpStatContext;

JumpStatContext.prototype.GOTO = function () {
    return this.getToken(CalcParser.GOTO, 0);
};

JumpStatContext.prototype.ID = function () {
    return this.getToken(CalcParser.ID, 0);
};

JumpStatContext.prototype.PROG = function () {
    return this.getToken(CalcParser.PROG, 0);
};

JumpStatContext.prototype.STRING = function () {
    return this.getToken(CalcParser.STRING, 0);
};

JumpStatContext.prototype.endProg = function () {
    return this.getTypedRuleContext(EndProgContext, 0);
};

JumpStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterJumpStat(this);
    }
};

JumpStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitJumpStat(this);
    }
};

JumpStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitJumpStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.JumpStatContext = JumpStatContext;

CalcParser.prototype.jumpStat = function () {

    var localctx = new JumpStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CalcParser.RULE_jumpStat);
    try {
        this.state = 283;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.GOTO:
                this.enterOuterAlt(localctx, 1);
                this.state = 278;
                this.match(CalcParser.GOTO);
                this.state = 279;
                this.match(CalcParser.ID);
                break;
            case CalcParser.PROG:
                this.enterOuterAlt(localctx, 2);
                this.state = 280;
                this.match(CalcParser.PROG);
                this.state = 281;
                this.match(CalcParser.STRING);
                break;
            case CalcParser.RETURN:
                this.enterOuterAlt(localctx, 3);
                this.state = 282;
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
    this.ruleIndex = CalcParser.RULE_labelStat;
    return this;
}

LabelStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelStatContext.prototype.constructor = LabelStatContext;

LabelStatContext.prototype.LBL = function () {
    return this.getToken(CalcParser.LBL, 0);
};

LabelStatContext.prototype.ID = function () {
    return this.getToken(CalcParser.ID, 0);
};

LabelStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterLabelStat(this);
    }
};

LabelStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitLabelStat(this);
    }
};

LabelStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitLabelStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.LabelStatContext = LabelStatContext;

CalcParser.prototype.labelStat = function () {

    var localctx = new LabelStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CalcParser.RULE_labelStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.match(CalcParser.LBL);
        this.state = 286;
        this.match(CalcParser.ID);
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
    this.ruleIndex = CalcParser.RULE_endStat;
    return this;
}

EndStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndStatContext.prototype.constructor = EndStatContext;

EndStatContext.prototype.NEWLINE = function () {
    return this.getToken(CalcParser.NEWLINE, 0);
};

EndStatContext.prototype.COLON = function () {
    return this.getToken(CalcParser.COLON, 0);
};

EndStatContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEndStat(this);
    }
};

EndStatContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEndStat(this);
    }
};

EndStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitEndStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.EndStatContext = EndStatContext;

CalcParser.prototype.endStat = function () {

    var localctx = new EndStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CalcParser.RULE_endStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        _la = this._input.LA(1);
        if (!(_la === CalcParser.COLON || _la === CalcParser.NEWLINE)) {
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
    this.ruleIndex = CalcParser.RULE_endProg;
    return this;
}

EndProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndProgContext.prototype.constructor = EndProgContext;

EndProgContext.prototype.RETURN = function () {
    return this.getToken(CalcParser.RETURN, 0);
};

EndProgContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEndProg(this);
    }
};

EndProgContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEndProg(this);
    }
};

EndProgContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitEndProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.EndProgContext = EndProgContext;

CalcParser.prototype.endProg = function () {

    var localctx = new EndProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CalcParser.RULE_endProg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(CalcParser.RETURN);
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
    this.ruleIndex = CalcParser.RULE_boolExpr;
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

CalcParser.ReduceBoolExprContext = ReduceBoolExprContext;

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
    if (listener instanceof CalcListener) {
        listener.enterReduceBoolExpr(this);
    }
};

ReduceBoolExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitReduceBoolExpr(this);
    }
};

ReduceBoolExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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
    if (listener instanceof CalcListener) {
        listener.enterCompare(this);
    }
};

CompareContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitCompare(this);
    }
};

CompareContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitCompare(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.prototype.boolExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BoolExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 52;
    this.enterRecursionRule(localctx, 52, CalcParser.RULE_boolExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CompareContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 293;
        this.numExpr(0);
        this.state = 294;
        this.compOp();
        this.state = 295;
        this.numExpr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 303;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ReduceBoolExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_boolExpr);
                this.state = 297;
                if (!this.precpred(this._ctx, 1)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 298;
                this.logicOp();
                this.state = 299;
                this.boolExpr(2);
            }
            this.state = 305;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
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
    this.ruleIndex = CalcParser.RULE_numExpr;
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

CalcParser.ComputeContext = ComputeContext;

ComputeContext.prototype.func = function () {
    return this.getTypedRuleContext(FuncContext, 0);
};

ComputeContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};
ComputeContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterCompute(this);
    }
};

ComputeContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitCompute(this);
    }
};

ComputeContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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
    if (listener instanceof CalcListener) {
        listener.enterAdd(this);
    }
};

AddContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitAdd(this);
    }
};

AddContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

ParensContext.prototype.OPAR = function () {
    return this.getToken(CalcParser.OPAR, 0);
};

ParensContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

ParensContext.prototype.CPAR = function () {
    return this.getToken(CalcParser.CPAR, 0);
};
ParensContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterParens(this);
    }
};

ParensContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitParens(this);
    }
};

ParensContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

MatrixElementContext.prototype.matrixElementExpr = function () {
    return this.getTypedRuleContext(MatrixElementExprContext, 0);
};
MatrixElementContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterMatrixElement(this);
    }
};

MatrixElementContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMatrixElement(this);
    }
};

MatrixElementContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

ListElementContext.prototype.listElementExpr = function () {
    return this.getTypedRuleContext(ListElementExprContext, 0);
};
ListElementContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterListElement(this);
    }
};

ListElementContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitListElement(this);
    }
};

ListElementContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

ScalarMultContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

ScalarMultContext.prototype.vectorExpr = function () {
    return this.getTypedRuleContext(VectorExprContext, 0);
};
ScalarMultContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterScalarMult(this);
    }
};

ScalarMultContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitScalarMult(this);
    }
};

ScalarMultContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

NegateContext.prototype.SUB = function () {
    return this.getToken(CalcParser.SUB, 0);
};

NegateContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};
NegateContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterNegate(this);
    }
};

NegateContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitNegate(this);
    }
};

NegateContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

ConstEvaluateContext.prototype.constant = function () {
    return this.getTypedRuleContext(ConstantContext, 0);
};
ConstEvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterConstEvaluate(this);
    }
};

ConstEvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitConstEvaluate(this);
    }
};

ConstEvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

ParseContext.prototype.number = function () {
    return this.getTypedRuleContext(NumberContext, 0);
};
ParseContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterParse(this);
    }
};

ParseContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitParse(this);
    }
};

ParseContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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
    if (listener instanceof CalcListener) {
        listener.enterMultiply(this);
    }
};

MultiplyContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMultiply(this);
    }
};

MultiplyContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

EvaluateContext.prototype.variable = function () {
    return this.getTypedRuleContext(VariableContext, 0);
};
EvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEvaluate(this);
    }
};

EvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEvaluate(this);
    }
};

EvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitEvaluate(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.prototype.numExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 54;
    this.enterRecursionRule(localctx, 54, CalcParser.RULE_numExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.OPAR:
                localctx = new ParensContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 307;
                this.match(CalcParser.OPAR);
                this.state = 308;
                this.numExpr(0);
                this.state = 309;
                this.match(CalcParser.CPAR);
                break;
            case CalcParser.SUB:
                localctx = new NegateContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 311;
                this.match(CalcParser.SUB);
                this.state = 312;
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
                this.state = 313;
                this.func();
                this.state = 314;
                this.numExpr(9);
                break;
            case CalcParser.MATRIX:
                localctx = new MatrixElementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 316;
                this.matrixElementExpr();
                break;
            case CalcParser.LIST:
                localctx = new ListElementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 317;
                this.listElementExpr();
                break;
            case CalcParser.ID:
                localctx = new EvaluateContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 318;
                this.variable();
                break;
            case CalcParser.PI:
                localctx = new ConstEvaluateContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 319;
                this.constant();
                break;
            case CalcParser.DOT:
            case CalcParser.UINT:
                localctx = new ParseContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 320;
                this.number();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 335;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 333;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new MultiplyContext(this, new NumExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                        this.state = 323;
                        if (!this.precpred(this._ctx, 7)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                        }
                        this.state = 324;
                        this.multOp();
                        this.state = 325;
                        this.numExpr(8);
                        break;

                    case 2:
                        localctx = new AddContext(this, new NumExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                        this.state = 327;
                        if (!this.precpred(this._ctx, 6)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                        }
                        this.state = 328;
                        this.addOp();
                        this.state = 329;
                        this.numExpr(7);
                        break;

                    case 3:
                        localctx = new ScalarMultContext(this, new NumExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_numExpr);
                        this.state = 331;
                        if (!this.precpred(this._ctx, 8)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                        }
                        this.state = 332;
                        this.vectorExpr();
                        break;

                }
            }
            this.state = 337;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
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
    this.ruleIndex = CalcParser.RULE_matrixExpr;
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

CalcParser.EvaluateMatrixContext = EvaluateMatrixContext;

EvaluateMatrixContext.prototype.matrix = function () {
    return this.getTypedRuleContext(MatrixContext, 0);
};
EvaluateMatrixContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEvaluateMatrix(this);
    }
};

EvaluateMatrixContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEvaluateMatrix(this);
    }
};

EvaluateMatrixContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

EvaluateMatrixInitializerExprContext.prototype.matrixInitializerExpr = function () {
    return this.getTypedRuleContext(MatrixInitializerExprContext, 0);
};
EvaluateMatrixInitializerExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEvaluateMatrixInitializerExpr(this);
    }
};

EvaluateMatrixInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEvaluateMatrixInitializerExpr(this);
    }
};

EvaluateMatrixInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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
    if (listener instanceof CalcListener) {
        listener.enterAddMatrices(this);
    }
};

AddMatricesContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitAddMatrices(this);
    }
};

AddMatricesContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitAddMatrices(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.prototype.matrixExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MatrixExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 56;
    this.enterRecursionRule(localctx, 56, CalcParser.RULE_matrixExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.MATRIX:
                localctx = new EvaluateMatrixContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 339;
                this.matrix();
                break;
            case CalcParser.OBRA:
                localctx = new EvaluateMatrixInitializerExprContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 340;
                this.matrixInitializerExpr();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 349;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddMatricesContext(this, new MatrixExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_matrixExpr);
                this.state = 343;
                if (!this.precpred(this._ctx, 3)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 344;
                this.addOp();
                this.state = 345;
                this.matrixExpr(4);
            }
            this.state = 351;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
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
    this.ruleIndex = CalcParser.RULE_listExpr;
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

CalcParser.AddListsContext = AddListsContext;

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
    if (listener instanceof CalcListener) {
        listener.enterAddLists(this);
    }
};

AddListsContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitAddLists(this);
    }
};

AddListsContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

EvaluateListContext.prototype.list = function () {
    return this.getTypedRuleContext(ListContext, 0);
};
EvaluateListContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEvaluateList(this);
    }
};

EvaluateListContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEvaluateList(this);
    }
};

EvaluateListContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

EvaluateListInitializerExprContext.prototype.listInitializerExpr = function () {
    return this.getTypedRuleContext(ListInitializerExprContext, 0);
};
EvaluateListInitializerExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterEvaluateListInitializerExpr(this);
    }
};

EvaluateListInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitEvaluateListInitializerExpr(this);
    }
};

EvaluateListInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitEvaluateListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.prototype.listExpr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ListExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 58;
    this.enterRecursionRule(localctx, 58, CalcParser.RULE_listExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.LIST:
                localctx = new EvaluateListContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 353;
                this.list();
                break;
            case CalcParser.OCUR:
                localctx = new EvaluateListInitializerExprContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 354;
                this.listInitializerExpr();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 363;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AddListsContext(this, new ListExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_listExpr);
                this.state = 357;
                if (!this.precpred(this._ctx, 3)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 358;
                this.addOp();
                this.state = 359;
                this.listExpr(4);
            }
            this.state = 365;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
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
    this.ruleIndex = CalcParser.RULE_stoExpr;
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
    if (listener instanceof CalcListener) {
        listener.enterStoExpr(this);
    }
};

StoExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitStoExpr(this);
    }
};

StoExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.StoExprContext = StoExprContext;

CalcParser.prototype.stoExpr = function () {

    var localctx = new StoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, CalcParser.RULE_stoExpr);
    try {
        this.state = 368;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.MATRIX:
                this.enterOuterAlt(localctx, 1);
                this.state = 366;
                this.matrixElementExpr();
                break;
            case CalcParser.ID:
                this.enterOuterAlt(localctx, 2);
                this.state = 367;
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
    this.ruleIndex = CalcParser.RULE_matrixStoExpr;
    return this;
}

MatrixStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixStoExprContext.prototype.constructor = MatrixStoExprContext;

MatrixStoExprContext.prototype.matrix = function () {
    return this.getTypedRuleContext(MatrixContext, 0);
};

MatrixStoExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterMatrixStoExpr(this);
    }
};

MatrixStoExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMatrixStoExpr(this);
    }
};

MatrixStoExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitMatrixStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.MatrixStoExprContext = MatrixStoExprContext;

CalcParser.prototype.matrixStoExpr = function () {

    var localctx = new MatrixStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, CalcParser.RULE_matrixStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
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
    this.ruleIndex = CalcParser.RULE_listStoExpr;
    return this;
}

ListStoExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListStoExprContext.prototype.constructor = ListStoExprContext;

ListStoExprContext.prototype.list = function () {
    return this.getTypedRuleContext(ListContext, 0);
};

ListStoExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterListStoExpr(this);
    }
};

ListStoExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitListStoExpr(this);
    }
};

ListStoExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitListStoExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ListStoExprContext = ListStoExprContext;

CalcParser.prototype.listStoExpr = function () {

    var localctx = new ListStoExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, CalcParser.RULE_listStoExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
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
    this.ruleIndex = CalcParser.RULE_matrixInitializerExpr;
    return this;
}

MatrixInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixInitializerExprContext.prototype.constructor = MatrixInitializerExprContext;

MatrixInitializerExprContext.prototype.OBRA = function () {
    return this.getToken(CalcParser.OBRA, 0);
};

MatrixInitializerExprContext.prototype.CBRA = function () {
    return this.getToken(CalcParser.CBRA, 0);
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
    if (listener instanceof CalcListener) {
        listener.enterMatrixInitializerExpr(this);
    }
};

MatrixInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMatrixInitializerExpr(this);
    }
};

MatrixInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitMatrixInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.MatrixInitializerExprContext = MatrixInitializerExprContext;

CalcParser.prototype.matrixInitializerExpr = function () {

    var localctx = new MatrixInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, CalcParser.RULE_matrixInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(CalcParser.OBRA);
        this.state = 376;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 375;
            this.matrixRowExpr();
            this.state = 378;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (_la === CalcParser.OBRA);
        this.state = 380;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_listInitializerExpr;
    return this;
}

ListInitializerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListInitializerExprContext.prototype.constructor = ListInitializerExprContext;

ListInitializerExprContext.prototype.OCUR = function () {
    return this.getToken(CalcParser.OCUR, 0);
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
    return this.getToken(CalcParser.CCUR, 0);
};

ListInitializerExprContext.prototype.COMMA = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.COMMA);
    } else {
        return this.getToken(CalcParser.COMMA, i);
    }
};

ListInitializerExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterListInitializerExpr(this);
    }
};

ListInitializerExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitListInitializerExpr(this);
    }
};

ListInitializerExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitListInitializerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ListInitializerExprContext = ListInitializerExprContext;

CalcParser.prototype.listInitializerExpr = function () {

    var localctx = new ListInitializerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, CalcParser.RULE_listInitializerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.match(CalcParser.OCUR);
        this.state = 383;
        this.numExpr(0);
        this.state = 388;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === CalcParser.COMMA) {
            this.state = 384;
            this.match(CalcParser.COMMA);
            this.state = 385;
            this.numExpr(0);
            this.state = 390;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 391;
        this.match(CalcParser.CCUR);
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
    this.ruleIndex = CalcParser.RULE_matrixRowExpr;
    return this;
}

MatrixRowExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixRowExprContext.prototype.constructor = MatrixRowExprContext;

MatrixRowExprContext.prototype.OBRA = function () {
    return this.getToken(CalcParser.OBRA, 0);
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
    return this.getToken(CalcParser.CBRA, 0);
};

MatrixRowExprContext.prototype.COMMA = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.COMMA);
    } else {
        return this.getToken(CalcParser.COMMA, i);
    }
};

MatrixRowExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterMatrixRowExpr(this);
    }
};

MatrixRowExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMatrixRowExpr(this);
    }
};

MatrixRowExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitMatrixRowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.MatrixRowExprContext = MatrixRowExprContext;

CalcParser.prototype.matrixRowExpr = function () {

    var localctx = new MatrixRowExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, CalcParser.RULE_matrixRowExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 393;
        this.match(CalcParser.OBRA);
        this.state = 394;
        this.numExpr(0);
        this.state = 399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === CalcParser.COMMA) {
            this.state = 395;
            this.match(CalcParser.COMMA);
            this.state = 396;
            this.numExpr(0);
            this.state = 401;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 402;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_matrixElementExpr;
    return this;
}

MatrixElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixElementExprContext.prototype.constructor = MatrixElementExprContext;

MatrixElementExprContext.prototype.matrix = function () {
    return this.getTypedRuleContext(MatrixContext, 0);
};

MatrixElementExprContext.prototype.OBRA = function () {
    return this.getToken(CalcParser.OBRA, 0);
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
    return this.getToken(CalcParser.COMMA, 0);
};

MatrixElementExprContext.prototype.CBRA = function () {
    return this.getToken(CalcParser.CBRA, 0);
};

MatrixElementExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterMatrixElementExpr(this);
    }
};

MatrixElementExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMatrixElementExpr(this);
    }
};

MatrixElementExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitMatrixElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.MatrixElementExprContext = MatrixElementExprContext;

CalcParser.prototype.matrixElementExpr = function () {

    var localctx = new MatrixElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, CalcParser.RULE_matrixElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        this.matrix();
        this.state = 405;
        this.match(CalcParser.OBRA);
        this.state = 406;
        this.numExpr(0);
        this.state = 407;
        this.match(CalcParser.COMMA);
        this.state = 408;
        this.numExpr(0);
        this.state = 409;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_listElementExpr;
    return this;
}

ListElementExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListElementExprContext.prototype.constructor = ListElementExprContext;

ListElementExprContext.prototype.list = function () {
    return this.getTypedRuleContext(ListContext, 0);
};

ListElementExprContext.prototype.OBRA = function () {
    return this.getToken(CalcParser.OBRA, 0);
};

ListElementExprContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

ListElementExprContext.prototype.CBRA = function () {
    return this.getToken(CalcParser.CBRA, 0);
};

ListElementExprContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterListElementExpr(this);
    }
};

ListElementExprContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitListElementExpr(this);
    }
};

ListElementExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitListElementExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ListElementExprContext = ListElementExprContext;

CalcParser.prototype.listElementExpr = function () {

    var localctx = new ListElementExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, CalcParser.RULE_listElementExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.list();
        this.state = 412;
        this.match(CalcParser.OBRA);
        this.state = 413;
        this.numExpr(0);
        this.state = 414;
        this.match(CalcParser.CBRA);
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
    this.ruleIndex = CalcParser.RULE_vectorExpr;
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

CalcParser.VParensContext = VParensContext;

VParensContext.prototype.OPAR = function () {
    return this.getToken(CalcParser.OPAR, 0);
};

VParensContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};

VParensContext.prototype.CPAR = function () {
    return this.getToken(CalcParser.CPAR, 0);
};
VParensContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterVParens(this);
    }
};

VParensContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitVParens(this);
    }
};

VParensContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

VEvaluateContext.prototype.variable = function () {
    return this.getTypedRuleContext(VariableContext, 0);
};
VEvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterVEvaluate(this);
    }
};

VEvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitVEvaluate(this);
    }
};

VEvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

VConstEvaluateContext.prototype.constant = function () {
    return this.getTypedRuleContext(ConstantContext, 0);
};
VConstEvaluateContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterVConstEvaluate(this);
    }
};

VConstEvaluateContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitVConstEvaluate(this);
    }
};

VConstEvaluateContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
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

VComputeContext.prototype.func = function () {
    return this.getTypedRuleContext(FuncContext, 0);
};

VComputeContext.prototype.numExpr = function () {
    return this.getTypedRuleContext(NumExprContext, 0);
};
VComputeContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterVCompute(this);
    }
};

VComputeContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitVCompute(this);
    }
};

VComputeContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitVCompute(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.VectorExprContext = VectorExprContext;

CalcParser.prototype.vectorExpr = function () {

    var localctx = new VectorExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, CalcParser.RULE_vectorExpr);
    try {
        this.state = 425;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CalcParser.OPAR:
                localctx = new VParensContext(this, localctx);
                this.enterOuterAlt(localctx, 1);
                this.state = 416;
                this.match(CalcParser.OPAR);
                this.state = 417;
                this.numExpr(0);
                this.state = 418;
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
                this.state = 420;
                this.func();
                this.state = 421;
                this.numExpr(0);
                break;
            case CalcParser.ID:
                localctx = new VEvaluateContext(this, localctx);
                this.enterOuterAlt(localctx, 3);
                this.state = 423;
                this.variable();
                break;
            case CalcParser.PI:
                localctx = new VConstEvaluateContext(this, localctx);
                this.enterOuterAlt(localctx, 4);
                this.state = 424;
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
    this.ruleIndex = CalcParser.RULE_compOp;
    return this;
}

CompOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompOpContext.prototype.constructor = CompOpContext;

CompOpContext.prototype.EQ = function () {
    return this.getToken(CalcParser.EQ, 0);
};

CompOpContext.prototype.NE = function () {
    return this.getToken(CalcParser.NE, 0);
};

CompOpContext.prototype.GT = function () {
    return this.getToken(CalcParser.GT, 0);
};

CompOpContext.prototype.GE = function () {
    return this.getToken(CalcParser.GE, 0);
};

CompOpContext.prototype.LT = function () {
    return this.getToken(CalcParser.LT, 0);
};

CompOpContext.prototype.LE = function () {
    return this.getToken(CalcParser.LE, 0);
};

CompOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterCompOp(this);
    }
};

CompOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitCompOp(this);
    }
};

CompOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitCompOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.CompOpContext = CompOpContext;

CalcParser.prototype.compOp = function () {

    var localctx = new CompOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, CalcParser.RULE_compOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        _la = this._input.LA(1);
        if (!((_la - 23 & ~0x1f) == 0 && (1 << _la - 23 & (1 << CalcParser.EQ - 23 | 1 << CalcParser.GE - 23 | 1 << CalcParser.GT - 23 | 1 << CalcParser.LE - 23 | 1 << CalcParser.LT - 23 | 1 << CalcParser.NE - 23)) !== 0)) {
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
    this.ruleIndex = CalcParser.RULE_logicOp;
    return this;
}

LogicOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicOpContext.prototype.constructor = LogicOpContext;

LogicOpContext.prototype.AND = function () {
    return this.getToken(CalcParser.AND, 0);
};

LogicOpContext.prototype.OR = function () {
    return this.getToken(CalcParser.OR, 0);
};

LogicOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterLogicOp(this);
    }
};

LogicOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitLogicOp(this);
    }
};

LogicOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitLogicOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.LogicOpContext = LogicOpContext;

CalcParser.prototype.logicOp = function () {

    var localctx = new LogicOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, CalcParser.RULE_logicOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
        _la = this._input.LA(1);
        if (!(_la === CalcParser.AND || _la === CalcParser.OR)) {
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
    this.ruleIndex = CalcParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;

MultOpContext.prototype.MUL = function () {
    return this.getToken(CalcParser.MUL, 0);
};

MultOpContext.prototype.DIV = function () {
    return this.getToken(CalcParser.DIV, 0);
};

MultOpContext.prototype.REMAIN = function () {
    return this.getToken(CalcParser.REMAIN, 0);
};

MultOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterMultOp(this);
    }
};

MultOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMultOp(this);
    }
};

MultOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitMultOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.MultOpContext = MultOpContext;

CalcParser.prototype.multOp = function () {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, CalcParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        _la = this._input.LA(1);
        if (!((_la - 19 & ~0x1f) == 0 && (1 << _la - 19 & (1 << CalcParser.DIV - 19 | 1 << CalcParser.REMAIN - 19 | 1 << CalcParser.MUL - 19)) !== 0)) {
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
    this.ruleIndex = CalcParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;

AddOpContext.prototype.ADD = function () {
    return this.getToken(CalcParser.ADD, 0);
};

AddOpContext.prototype.SUB = function () {
    return this.getToken(CalcParser.SUB, 0);
};

AddOpContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterAddOp(this);
    }
};

AddOpContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitAddOp(this);
    }
};

AddOpContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitAddOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.AddOpContext = AddOpContext;

CalcParser.prototype.addOp = function () {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, CalcParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        _la = this._input.LA(1);
        if (!(_la === CalcParser.ADD || _la === CalcParser.SUB)) {
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
    this.ruleIndex = CalcParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.SQRT = function () {
    return this.getToken(CalcParser.SQRT, 0);
};

FuncContext.prototype.COS = function () {
    return this.getToken(CalcParser.COS, 0);
};

FuncContext.prototype.SIN = function () {
    return this.getToken(CalcParser.SIN, 0);
};

FuncContext.prototype.TAN = function () {
    return this.getToken(CalcParser.TAN, 0);
};

FuncContext.prototype.ACOS = function () {
    return this.getToken(CalcParser.ACOS, 0);
};

FuncContext.prototype.ASIN = function () {
    return this.getToken(CalcParser.ASIN, 0);
};

FuncContext.prototype.ATAN = function () {
    return this.getToken(CalcParser.ATAN, 0);
};

FuncContext.prototype.ABS = function () {
    return this.getToken(CalcParser.ABS, 0);
};

FuncContext.prototype.INT = function () {
    return this.getToken(CalcParser.INT, 0);
};

FuncContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterFunc(this);
    }
};

FuncContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitFunc(this);
    }
};

FuncContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.FuncContext = FuncContext;

CalcParser.prototype.func = function () {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, CalcParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) == 0 && (1 << _la & (1 << CalcParser.ABS | 1 << CalcParser.ACOS | 1 << CalcParser.ASIN | 1 << CalcParser.ATAN | 1 << CalcParser.COS)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << CalcParser.INT - 32 | 1 << CalcParser.SIN - 32 | 1 << CalcParser.SQRT - 32 | 1 << CalcParser.TAN - 32)) !== 0)) {
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
    this.ruleIndex = CalcParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX = function () {
    return this.getToken(CalcParser.MATRIX, 0);
};

MatrixContext.prototype.ID = function () {
    return this.getToken(CalcParser.ID, 0);
};

MatrixContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterMatrix(this);
    }
};

MatrixContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitMatrix(this);
    }
};

MatrixContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.MatrixContext = MatrixContext;

CalcParser.prototype.matrix = function () {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, CalcParser.RULE_matrix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 437;
        this.match(CalcParser.MATRIX);
        this.state = 438;
        this.match(CalcParser.ID);
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
    this.ruleIndex = CalcParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST = function () {
    return this.getToken(CalcParser.LIST, 0);
};

ListContext.prototype.UINT = function () {
    return this.getToken(CalcParser.UINT, 0);
};

ListContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterList(this);
    }
};

ListContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitList(this);
    }
};

ListContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ListContext = ListContext;

CalcParser.prototype.list = function () {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, CalcParser.RULE_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        this.match(CalcParser.LIST);
        this.state = 441;
        this.match(CalcParser.UINT);
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
    this.ruleIndex = CalcParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function () {
    return this.getToken(CalcParser.ID, 0);
};

VariableContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterVariable(this);
    }
};

VariableContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitVariable(this);
    }
};

VariableContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.VariableContext = VariableContext;

CalcParser.prototype.variable = function () {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, CalcParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.match(CalcParser.ID);
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
    this.ruleIndex = CalcParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function () {
    return this.getToken(CalcParser.PI, 0);
};

ConstantContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterConstant(this);
    }
};

ConstantContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitConstant(this);
    }
};

ConstantContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.ConstantContext = ConstantContext;

CalcParser.prototype.constant = function () {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, CalcParser.RULE_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(CalcParser.PI);
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
    this.ruleIndex = CalcParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UINT = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(CalcParser.UINT);
    } else {
        return this.getToken(CalcParser.UINT, i);
    }
};

NumberContext.prototype.DOT = function () {
    return this.getToken(CalcParser.DOT, 0);
};

NumberContext.prototype.enterRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.enterNumber(this);
    }
};

NumberContext.prototype.exitRule = function (listener) {
    if (listener instanceof CalcListener) {
        listener.exitNumber(this);
    }
};

NumberContext.prototype.accept = function (visitor) {
    if (visitor instanceof CalcVisitor) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};

CalcParser.NumberContext = NumberContext;

CalcParser.prototype.number = function () {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, CalcParser.RULE_number);
    try {
        this.state = 453;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 34, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 447;
                this.match(CalcParser.UINT);
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 448;
                this.match(CalcParser.DOT);
                this.state = 449;
                this.match(CalcParser.UINT);
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 450;
                this.match(CalcParser.UINT);
                this.state = 451;
                this.match(CalcParser.DOT);
                this.state = 452;
                this.match(CalcParser.UINT);
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

CalcParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 13:
            return this.fileName_sempred(localctx, predIndex);
        case 26:
            return this.boolExpr_sempred(localctx, predIndex);
        case 27:
            return this.numExpr_sempred(localctx, predIndex);
        case 28:
            return this.matrixExpr_sempred(localctx, predIndex);
        case 29:
            return this.listExpr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

CalcParser.prototype.fileName_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 1);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

CalcParser.prototype.boolExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 1:
            return this.precpred(this._ctx, 1);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

CalcParser.prototype.numExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 2:
            return this.precpred(this._ctx, 7);
        case 3:
            return this.precpred(this._ctx, 6);
        case 4:
            return this.precpred(this._ctx, 8);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

CalcParser.prototype.matrixExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 5:
            return this.precpred(this._ctx, 3);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

CalcParser.prototype.listExpr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 6:
            return this.precpred(this._ctx, 3);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

exports.CalcParser = CalcParser;