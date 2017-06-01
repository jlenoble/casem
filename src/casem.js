import readline from 'readline';
import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';
import {argv} from 'yargs';

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

const grammar = 'Calc';
const rule = 'prog';
const parserDir = 'src/static/antlr4/parsers';
const listener = 'Translator';
const listenerDir = 'build/src/custom';

const interprete = dataFile => {
  return new Promise((resolve, reject) => {
    gulp.src(dataFile)
      .pipe(antlr4({
        grammar, parserDir, listener, listenerDir, rule,
      }))
      .on('finish', resolve)
      .on('error', reject);
  });
};

const [dataFile] = argv._;

interprete(dataFile);
