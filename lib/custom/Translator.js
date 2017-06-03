'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Interpreter = require('./Interpreter');

var _block = require('../helpers/block');

var _block2 = _interopRequireDefault(_block);

var _file = require('../helpers/file');

var _file2 = _interopRequireDefault(_file);

var _stat = require('../helpers/stat');

var _stat2 = _interopRequireDefault(_stat);

var _blockStats = require('../helpers/block-stats');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = process.cwd();
var rel = _path2.default.relative(base, 'src/static/antlr4/parsers');

var _require = require(_path2.default.join(base, rel, 'CalcListener')),
    CalcListener = _require.CalcListener;

var Translator = exports.Translator = function (_CalcListener) {
  _inherits(Translator, _CalcListener);

  function Translator() {
    var readStdin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, Translator);

    var _this = _possibleConstructorReturn(this, (Translator.__proto__ || Object.getPrototypeOf(Translator)).call(this));

    Object.defineProperties(_this, {
      visitor: {
        value: new _Interpreter.Interpreter(readStdin)
      }
    });
    return _this;
  }

  _createClass(Translator, [{
    key: 'enterBlock',
    value: function enterBlock(ctx) {
      this.currentBlock = new _block2.default(ctx, this.visitor, {
        parent: this.currentBlock,
        file: this.currentFile
      });
    }
  }, {
    key: 'exitBlock',
    value: function exitBlock(ctx) {
      this.currentBlock = this.currentBlock.parent;
    }
  }, {
    key: 'enterDoStat',
    value: function enterDoStat(ctx) {
      this.currentBlock = new _blockStats.DoStat(ctx, this.visitor, {
        parent: this.currentBlock,
        file: this.currentFile
      });
    }
  }, {
    key: 'exitDoStat',
    value: function exitDoStat(ctx) {
      this.currentBlock = this.currentBlock.parent;
    }
  }, {
    key: 'enterFile',
    value: function enterFile(ctx) {
      this.currentBlock = new _file2.default(ctx, this.visitor);
      this.currentFile = this.currentBlock;
    }
  }, {
    key: 'exitFile',
    value: function exitFile(ctx) {
      this.currentBlock = this.main;
      this.currentFile = this.currentBlock;
    }
  }, {
    key: 'enterForStat',
    value: function enterForStat(ctx) {
      this.currentBlock = new _blockStats.ForStat(ctx, this.visitor, {
        parent: this.currentBlock,
        file: this.currentFile
      });
    }
  }, {
    key: 'exitForStat',
    value: function exitForStat(ctx) {
      this.currentBlock = this.currentBlock.parent;
    }
  }, {
    key: 'enterIfStat',
    value: function enterIfStat(ctx) {
      this.currentBlock = new _blockStats.IfStat(ctx, this.visitor, {
        parent: this.currentBlock,
        file: this.currentFile
      });
    }
  }, {
    key: 'exitIfStat',
    value: function exitIfStat(ctx) {
      this.currentBlock = this.currentBlock.parent;
    }
  }, {
    key: 'enterProg',
    value: function enterProg(ctx) {
      this.main = new _file2.default(ctx, this.visitor);
      this.currentBlock = this.main;
      this.currentFile = this.currentBlock;
    }
  }, {
    key: 'exitProg',
    value: function exitProg(ctx) {
      var _this2 = this;

      setTimeout(function () {
        return _this2.currentBlock.reduce();
      });
    }
  }, {
    key: 'enterStat',
    value: function enterStat(ctx) {
      if (!this.isImplyStat) {
        // Makes sure implied Stat won't be cached
        this.currentBlock.push(new _stat2.default(ctx, this.visitor, this.currentFile));
      }

      this.isImplyStat = ctx.implyStat() !== null;
    }
  }, {
    key: 'exitStat',
    value: function exitStat(ctx) {
      this.isImplyStat = false;
    }
  }, {
    key: 'enterWhileStat',
    value: function enterWhileStat(ctx) {
      this.currentBlock = new _blockStats.WhileStat(ctx, this.visitor, {
        parent: this.currentBlock,
        file: this.currentFile
      });
    }
  }, {
    key: 'exitWhileStat',
    value: function exitWhileStat(ctx) {
      this.currentBlock = this.currentBlock.parent;
    }
  }]);

  return Translator;
}(CalcListener);