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
  return gulp.src(grammarGlob, {
    since: gulp.lastRun(makeParser),
  })
    .pipe(antlr4(parserDir));
};


export const interprete = () => {
  return gulp.src(dataGlob, {
    since: gulp.lastRun(interprete),
  })
    .pipe(antlr4({
      grammar, parserDir, visitor, visitorDir, rule,
    }));
};

gulp.task('interprete', gulp.series(makeParser, interprete));

gulp.task('parse', gulp.series(makeParser, interprete));

