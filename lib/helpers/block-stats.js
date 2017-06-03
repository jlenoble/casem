'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhileStat = exports.IfStat = exports.ForStat = exports.DoStat = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BREAK = {};

var DoStat = exports.DoStat = function (_Block) {
  _inherits(DoStat, _Block);

  function DoStat() {
    _classCallCheck(this, DoStat);

    return _possibleConstructorReturn(this, (DoStat.__proto__ || Object.getPrototypeOf(DoStat)).apply(this, arguments));
  }

  _createClass(DoStat, [{
    key: 'reduce',
    value: function reduce() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          _get(DoStat.prototype.__proto__ || Object.getPrototypeOf(DoStat.prototype), 'reduce', _this2).call(_this2).then(resolve, reject);
        });
      }).then(function () {
        if (_this2.visitor.visit(_this2.ctx.boolExpr())) {
          return _this2.reduce();
        }
      });
    }
  }]);

  return DoStat;
}(_block2.default);

var ForStat = exports.ForStat = function (_Block2) {
  _inherits(ForStat, _Block2);

  function ForStat(ctx, visitor, options) {
    _classCallCheck(this, ForStat);

    var _this3 = _possibleConstructorReturn(this, (ForStat.__proto__ || Object.getPrototypeOf(ForStat)).call(this, ctx, visitor, options));

    Object.defineProperties(_this3, {
      start: {
        value: visitor.visit(ctx.numExpr(0))
      },

      end: {
        value: visitor.visit(ctx.numExpr(1))
      },

      step: {
        value: ctx.numExpr(2) !== null ? visitor.visit(ctx.numExpr(2)) : 1
      },

      varName: {
        value: ctx.variable().getText()
      }
    });

    _this3.i = _this3.start;
    return _this3;
  }

  _createClass(ForStat, [{
    key: 'reduce',
    value: function reduce() {
      var _this4 = this;

      var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          _this4.visitor.setVariable(_this4.varName, _this4.i);
          _get(ForStat.prototype.__proto__ || Object.getPrototypeOf(ForStat.prototype), 'reduce', _this4).call(_this4).then(resolve, reject);
        });
      });

      if (this.i !== this.end) {
        return promise.then(function () {
          _this4.i += _this4.step;
          return _this4.reduce();
        });
      } else {
        this.visitor.setVariable(this.varName, this.i);
        return promise.then(function () {
          _this4.visitor.setVariable(_this4.varName, _this4.i + 1);
          _this4.i = _this4.start;
        });
      }
    }
  }]);

  return ForStat;
}(_block2.default);

var IfStat = exports.IfStat = function (_Block3) {
  _inherits(IfStat, _Block3);

  function IfStat() {
    _classCallCheck(this, IfStat);

    return _possibleConstructorReturn(this, (IfStat.__proto__ || Object.getPrototypeOf(IfStat)).apply(this, arguments));
  }

  _createClass(IfStat, [{
    key: 'reduce',
    value: function reduce() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        var _queue$queue = _slicedToArray(_this6.queue.queue, 2),
            b1 = _queue$queue[0],
            b2 = _queue$queue[1];

        if (_this6.visitor.visit(_this6.ctx.boolExpr())) {
          b1.reduce().then(resolve, reject);
        } else {
          if (b2 !== undefined) {
            b2.reduce().then(resolve, reject);
          }
        }
      });
    }
  }]);

  return IfStat;
}(_block2.default);

var WhileStat = exports.WhileStat = function (_Block4) {
  _inherits(WhileStat, _Block4);

  function WhileStat() {
    _classCallCheck(this, WhileStat);

    return _possibleConstructorReturn(this, (WhileStat.__proto__ || Object.getPrototypeOf(WhileStat)).apply(this, arguments));
  }

  _createClass(WhileStat, [{
    key: 'reduce',
    value: function reduce() {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (_this8.visitor.visit(_this8.ctx.boolExpr())) {
            _get(WhileStat.prototype.__proto__ || Object.getPrototypeOf(WhileStat.prototype), 'reduce', _this8).call(_this8).then(resolve, reject);
          } else {
            resolve(BREAK);
          }
        });
      }).then(function (res) {
        return res !== BREAK ? _this8.reduce() : Promise.resolve();
      });
    }
  }]);

  return WhileStat;
}(_block2.default);