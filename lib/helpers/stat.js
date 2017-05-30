'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stat = function () {
  function Stat(ctx, visitor) {
    _classCallCheck(this, Stat);

    Object.defineProperties(this, {
      ctx: {
        value: ctx
      },

      visitor: {
        value: visitor
      }
    });
  }

  _createClass(Stat, [{
    key: 'reduce',
    value: function reduce(label) {
      if (label !== undefined) {
        return;
      }

      var p = this.visitor.visit(this.ctx);

      if (Array.isArray(p)) {
        if (p.length !== 1) {
          throw new Error('Length should always be 1; Was', p.length);
        }
        return p[0];
      }

      return p;
    }
  }]);

  return Stat;
}();

exports.default = Stat;
module.exports = exports['default'];