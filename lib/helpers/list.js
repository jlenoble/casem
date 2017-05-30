"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
  function List(array) {
    _classCallCheck(this, List);

    Object.defineProperties(this, {
      array: {
        value: (array.array || array).map(function (elt) {
          return elt;
        })
      }
    });
  }

  _createClass(List, [{
    key: "set",
    value: function set(array) {
      var arr = this.array;
      var arr2 = array.array || array;
      for (var i = 0, l = arr.length; i < l; i++) {
        arr[i] = arr2[i];
      }
    }
  }, {
    key: "add",
    value: function add(array) {
      var arr = array.array || array;
      return new List(this.array.map(function (elt, j) {
        return elt + arr[j];
      }));
    }
  }, {
    key: "sub",
    value: function sub(array) {
      var arr = array.array || array;
      return new List(this.array.map(function (elt, j) {
        return elt - arr[j];
      }));
    }
  }, {
    key: "equal",
    value: function equal(array) {
      var arr = array.array || array;
      return this.array.every(function (elt, j) {
        return elt === arr[j];
      });
    }
  }]);

  return List;
}();

exports.default = List;
module.exports = exports["default"];