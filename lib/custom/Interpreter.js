'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interpreter = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _DataStructs = require('./DataStructs');

var _Exprs = require('./Exprs');

var _Stats = require('./Stats');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = process.cwd();
var rel = _path2.default.relative(base, 'src/static/antlr4/parsers');

var _require = require(_path2.default.join(base, rel, 'CalcVisitor')),
    CalcVisitor = _require.CalcVisitor;

var Interpreter = exports.Interpreter = function (_CalcVisitor) {
  _inherits(Interpreter, _CalcVisitor);

  function Interpreter(readStdin) {
    _classCallCheck(this, Interpreter);

    var _this = _possibleConstructorReturn(this, (Interpreter.__proto__ || Object.getPrototypeOf(Interpreter)).call(this));

    var currentKey = 0;
    _this.getKey = function () {
      return currentKey;
    };

    if (readStdin) {
      process.stdin.on('keypress', function (str, key) {
        if (key.ctrl && key.name === 'c') {
          process.exit();
        } else {
          currentKey = key;
        }
      });
    }
    return _this;
  }

  return Interpreter;
}(CalcVisitor);

(0, _DataStructs.mixWithDataStructs)(Interpreter);
(0, _Exprs.mixWithExprs)(Interpreter);
(0, _Stats.mixWithStats)(Interpreter);