import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcListener} = require(path.join(base, rel,
  'CalcListener'));

export class Translator extends CalcListener {
  enterAdditiveExpr (ctx) {}
}
