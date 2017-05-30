'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Row = function () {
  function Row() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;

    _classCallCheck(this, Row);

    Object.defineProperties(this, {
      width: {
        value: width
      },
      pixels: {
        value: Array(width).fill(' ')
      }
    });
  }

  _createClass(Row, [{
    key: 'set',
    value: function set(i, value) {
      this.pixels[i] = value;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.pixels.join('');
    }
  }]);

  return Row;
}();

var toScreen = exports.toScreen = function toScreen(str) {
  var rows = Array.isArray(str) ? str : str.split('\n');

  var txt = '┏━━━━━━━━━━━━━━━━━━━━━┓\n';
  var i = 0;

  rows.forEach(function (row) {
    txt += '┃' + (row.toString().replace(/(.*)(\n)$/, '$1') + '                     ').slice(0, 21) + '┃\n';
    i++;
    if (i % 8 === 0 && i !== rows.length) {
      txt += '┠┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┨\n';
    }
  });

  if (i % 8 === 0) {
    txt += '┗━━━━━━━━━━━━━━━━━━━━━┛\n';
  } else {
    txt += '┠┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┨\n';
  }

  return txt;
};

var Screen = function () {
  function Screen() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;

    _classCallCheck(this, Screen);

    Object.defineProperties(this, {
      width: {
        value: width
      },
      height: {
        value: height
      },
      rows: {
        value: []
      },
      offset: {
        value: 0,
        writable: true
      }
    });

    this.clear();
  }

  _createClass(Screen, [{
    key: 'set',
    value: function set(x, y, value) {
      this.rows[y].set(x, value);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.rows.length = 0;
      this.offset = 0;
    }
  }, {
    key: 'update',
    value: function update(txt) {
      var r = this.rows;
      var w = this.width;
      var l = r.length;
      var ySpan = Math.floor(txt.length / w) + 1;
      var o = this.offset;

      for (var j = o; j < ySpan + o; j++) {
        if (j < l) {
          r[j] = new Row(w);
        } else {
          r.push(new Row(w));
        }
      }

      this.updateAt(1, o + 1, txt);
      this.offset += ySpan;
    }
  }, {
    key: 'updateAt',
    value: function updateAt(x, y, txt) {
      var _txt = txt.toString();
      var w = this.width;
      var r = this.rows;

      var _x = this.preprocessCoord(x, w);
      var _y = this.preprocessCoord(y, this.height);

      for (var i = 0, l = _txt.length; i < l; i++) {
        if (_x + i >= w) {
          _x -= w;
          _y += 1;
        }

        while (_y >= r.length) {
          r.push(new Row(w));
        }

        this.set(_x + i, _y, _txt[i]);
      }
    }
  }, {
    key: 'print',
    value: function print(txt) {
      this.update(txt);
      console.log(this.toString());
    }
  }, {
    key: 'printAt',
    value: function printAt(x, y, txt) {
      this.updateAt(x, y, txt);
      console.log(this.toString());
    }
  }, {
    key: 'writeCasio',
    value: function writeCasio(txt) {
      var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var rows = txt.split('\n');

      if (!append) {
        console.log('\\ClrText');
      }

      rows.forEach(function (row, i) {
        if (row) {
          if (append) {
            console.log('"' + row + '"');
          } else {
            console.log('\\Locate 1,' + (i + 1) + ',"' + row + '"');
          }
        }
      });
    }
  }, {
    key: 'toString',
    value: function toString() {
      return toScreen(this.rows);
    }
  }, {
    key: 'preprocessCoord',
    value: function preprocessCoord(x, size) {
      return (x < 1 ? 1 : x > size ? size : x) - 1;
    }
  }, {
    key: 'equals',
    value: function equals(txt) {
      return this.toString() === toScreen(txt);
    }
  }]);

  return Screen;
}();

exports.default = Screen;