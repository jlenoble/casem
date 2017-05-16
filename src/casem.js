import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';
import {argv} from 'yargs';

const grammar = 'Calc';
const rule = 'prog';
const parserDir = 'src/static/antlr4/parsers';
const visitor = 'Interpreter';
const visitorDir = 'build/src';

const interprete = dataFile => {
  return new Promise((resolve, reject) => {
    gulp.src(dataFile)
      .pipe(antlr4({
        grammar, parserDir, visitor, visitorDir, rule,
      }))
      .on('finish', resolve)
      .on('error', reject);
  });
};

const [dataFile] = argv._;

interprete(dataFile);
