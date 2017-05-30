'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execFile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var files = new Map();

var execFile = exports.execFile = function execFile(filename) {
  var file = files.get(filename);

  if (file !== undefined) {
    return file.reduce();
  }
};

var File = function (_Block) {
  _inherits(File, _Block);

  function File(ctx, visitor) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, ctx, visitor));

    if (ctx.header !== undefined) {
      // Cache nested file: Must be explicitly called
      var filename = ctx.header().attributes().fileName(0).getText();
      files.set('"' + filename + '"', _this);
    } else {
      files.set('"main"', _this);
    }
    return _this;
  }

  _createClass(File, [{
    key: 'reduce',
    value: function reduce(label) {
      var _this2 = this;

      return _get(File.prototype.__proto__ || Object.getPrototypeOf(File.prototype), 'reduce', this).call(this, label).catch(function (err) {
        if (err.message === 'RETURN') {
          return;
        }

        if (('' + err.message).match(/^\\Lbl [A-Z0-9]$/)) {
          return _this2.reduce(err.message);
        }

        throw err;
      });
    }
  }]);

  return File;
}(_block2.default);

exports.default = File;