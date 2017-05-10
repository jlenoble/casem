import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcVisitor} = require(path.join(base, rel, 'CalcVisitor'));
const {CalcParser} = require(path.join(base, rel, 'CalcParser'));

export class Interpreter extends CalcVisitor {
  constructor (...args) {
    super(...args);

    this.variables = {};
  }

  visitAdd (ctx) {
    const left = this.visit(ctx.evalExpr(0));
    const right = this.visit(ctx.evalExpr(1));
    const operator = this.visit(ctx.additiveOp());

    switch (operator) {
    case CalcParser.PLUS:
      return left + right;

    case CalcParser.MINUS:
      return left - right;
    }
  }

  visitAdditiveOp (ctx) {
    return (ctx.PLUS() || ctx.MINUS()).symbol.type;
  }

  visitAssignExpr (ctx) {
    const id = this.visit(ctx.stoExpr());
    const value = this.visit(ctx.evalExpr());
    this.variables[id] = value;
  }

  visitEval (ctx) {
    const id = this.visit(ctx.variable());
    return this.variables[id];
  }

  visitNumber (ctx) {
    return ctx.NATNUM().getText();
  }

  visitParseFloat (ctx) {
    const number = this.visit(ctx.number());
    return parseFloat(number, 10);
  }

  visitPrint (ctx) {
    process.stdout.write(ctx.STRING().getText());
  }

  visitPrintAt (ctx) {
    const txt = this.visit(ctx.evalExpr(2)).toString();
    process.stdout.write(txt);
  }

  visitStoExpr (ctx) {
    return this.visit(ctx.variable());
  }

  visitVariable (ctx) {
    return ctx.ID().getText();
  }
}
