'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stat = function () {
  function Stat(ctx, visitor, file) {
    _classCallCheck(this, Stat);

    Object.defineProperties(this, {
      ctx: {
        value: ctx
      },

      visitor: {
        value: visitor
      },

      file: {
        value: file
      }
    });
  }

  _createClass(Stat, [{
    key: 'reduce',
    value: function reduce() {
      if (this.isJumping()) {
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
  }, {
    key: 'isJumping',
    value: function isJumping() {
      return this.file.isJumping();
    }
  }, {
    key: 'isJumpingTo',
    value: function isJumpingTo(label) {
      return this.file.isJumpingTo(label);
    }
  }, {
    key: 'startJumping',
    value: function startJumping(label) {
      return this.file.startJumping(label);
    }
  }, {
    key: 'stopJumping',
    value: function stopJumping(label) {
      return this.file.stopJumping(label);
    }
  }]);

  return Stat;
}();

exports.default = Stat;
module.exports = exports['default'];