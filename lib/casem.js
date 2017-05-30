'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpAntlr = require('gulp-antlr4');

var _gulpAntlr2 = _interopRequireDefault(_gulpAntlr);

var _yargs = require('yargs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grammar = 'Calc';
var rule = 'prog';
var parserDir = 'src/static/antlr4/parsers';
var listener = 'Translator';
var listenerDir = 'build/src/custom';

var interprete = function interprete(dataFile) {
  return new Promise(function (resolve, reject) {
    _gulp2.default.src(dataFile).pipe((0, _gulpAntlr2.default)({
      grammar: grammar, parserDir: parserDir, listener: listener, listenerDir: listenerDir, rule: rule
    })).on('finish', resolve).on('error', reject);
  });
};

var _argv$_ = _slicedToArray(_yargs.argv._, 1),
    dataFile = _argv$_[0];

interprete(dataFile);