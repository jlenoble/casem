import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';

const grammar = 'Calc';
const rule = 'prog';
const parserDir = 'src/static/antlr4/parsers';
const visitor = 'Interpreter';
const visitorDir = 'build/src';

export const interprete = dataFile => {
  return new Promise((resolve, reject) => {
    gulp.src(dataFile)
      .pipe(antlr4({
        grammar, parserDir, visitor, visitorDir, rule,
      }))
      .on('finish', resolve)
      .on('error', reject);
  });
};
