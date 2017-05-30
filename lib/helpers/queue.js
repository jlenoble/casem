"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    Object.defineProperties(this, {
      queue: {
        value: []
      },

      push: {
        value: function value(arg) {
          return this.queue.push(arg);
        }
      },

      length: {
        get: function get() {
          return this.queue.length;
        },
        set: function set(value) {
          this.queue.length = value;
        }
      }
    });
  }

  _createClass(Queue, [{
    key: "reduce",
    value: function reduce(label) {
      var searchForLabel = label !== undefined;

      return this.queue.reduce(function (promise, stat) {
        return promise.then(function () {
          if (!searchForLabel) {
            return stat.reduce();
          }

          if (stat.ctx.getText() === label) {
            searchForLabel = false;
            return Promise.resolve();
          }

          return stat.reduce(label);
        });
      }, Promise.resolve());
    }
  }]);

  return Queue;
}();

exports.default = Queue;
module.exports = exports["default"];