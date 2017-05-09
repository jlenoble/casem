import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcVisitor} = require(path.join(base, rel,
  'CalcVisitor'));

export class Interpreter extends CalcVisitor {
  visitExpr () {
    // Do nothing
  }
}
