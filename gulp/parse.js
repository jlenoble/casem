import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';

const grammarGlob = [
  'src/static/antlr4/grammars/**/*.g4'
];
const parserDir = 'src/static/antlr4/parsers';
const dataGlob = [
  'src/static/data/**/*.*'
];
const grammar = 'Calc';
const rule = 'prog';
const visitor = 'Interpreter';
const visitorDir = 'src/static/antlr4';

export const makeParser = () => {
  if (require && require.cache) {
    // Remove parser files from Babel cache
    Object.keys(require.cache).filter(key => {
      return key.includes(parserDir);
    }).forEach(key => {
      delete require.cache[key];
    });
  }

  return gulp.src(grammarGlob, {
    since: gulp.lastRun(makeParser),
  })
    .pipe(antlr4({
      'listener': false,
      'parserDir': 'src/static/antlr4/parsers',
      'visitor': true
    }));
};

export const interprete = () => {
  return gulp.src(dataGlob)
    .pipe(antlr4({
      grammar, parserDir, visitor, visitorDir, rule,
    }));
};

gulp.task('interprete', gulp.series(makeParser, interprete));

export const parse = interprete;

gulp.task('parse', gulp.series(makeParser, interprete));

