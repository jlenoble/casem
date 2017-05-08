import gulp from 'gulp';
import {build} from './build';
import {test} from './test';
import {makeParser, parse} from './parse';

const allSrcGlob = [
  'src/**/*.js',
  'test/**/*.js'
];
const allBuildGlob = [
  'build/src/**/*.js',
  'build/test/**/*.js'
];
const grammarGlob = [
  'src/static/antlr4/grammars/**/*.g4'
];
const dataGlob = [
  'src/static/data/**/*.*'
];

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(allBuildGlob, test);
  gulp.watch(grammarGlob, makeParser);
  gulp.watch(dataGlob, parse);
  done();
};

gulp.task('watch', watch);
