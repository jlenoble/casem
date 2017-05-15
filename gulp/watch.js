import gulp from 'gulp';
import {build} from './build';
import {test} from './test';
import {makeParser, parse} from './parse';

const allSrcGlob = [
  'src/**/*.js',
  'test/**/*.js',
  '!src/static/antlr4/parsers/*.js'
];
const allBuildGlob = [
  'build/src/**/*.js',
  'build/test/**/*.js',
  '!build/src/static/antlr4/parsers/**/*.js'
];
const grammarGlob = [
  'src/static/antlr4/grammars/**/*.g4',
  'build/src/static/antlr4/Translator.js',
  'build/src/Interpreter.js'
];
const dataGlob = [
  'src/static/data/**/*.*',
  'src/static/antlr4/parsers/CalcParser.js'
];

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(allBuildGlob.concat(dataGlob), test);
  gulp.watch(grammarGlob, makeParser);
  done();
};

gulp.task('watch', watch);
