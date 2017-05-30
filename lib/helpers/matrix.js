"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
  function Matrix(array) {
    _classCallCheck(this, Matrix);

    Object.defineProperties(this, {
      array: {
        value: (array.array || array).map(function (row) {
          return row.map(function (elt) {
            return elt;
          });
        })
      }
    });
  }

  _createClass(Matrix, [{
    key: "set",
    value: function set(array) {
      var arr = this.array;
      var arr2 = array.array || array;

      arr.length = arr2.length;

      for (var i = 0, l = arr.length; i < l; i++) {
        arr[i] = arr2[i].map(function (elt) {
          return elt;
        });
      }
    }
  }, {
    key: "add",
    value: function add(array) {
      var arr = array.array || array;
      return new Matrix(this.array.map(function (row, i) {
        return row.map(function (elt, j) {
          return elt + arr[i][j];
        });
      }));
    }
  }, {
    key: "sub",
    value: function sub(array) {
      var arr = array.array || array;
      return new Matrix(this.array.map(function (row, i) {
        return row.map(function (elt, j) {
          return elt - arr[i][j];
        });
      }));
    }
  }, {
    key: "equal",
    value: function equal(array) {
      var arr = array.array || array;
      return this.array.every(function (row, i) {
        return row.every(function (elt, j) {
          return elt === arr[i][j];
        });
      });
    }
  }, {
    key: "transpose",
    value: function transpose() {
      var arr = [];
      var arr2 = this.array;

      arr.length = arr2[0].length;

      for (var j = 0, m = arr2[0].length; j < m; j++) {
        arr[j] = Array(arr2.length);
        for (var i = 0, l = arr2.length; i < l; i++) {
          arr[j][i] = arr2[i][j];
        }
      }

      return new Matrix(arr);
    }
  }]);

  return Matrix;
}();

exports.default = Matrix;
module.exports = exports["default"];