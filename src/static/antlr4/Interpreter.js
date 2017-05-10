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

  visitCompute (ctx) {
    const func = this.visit(ctx.func());
    const arg = this.visit(ctx.evalExpr());
    return func(arg);
  }

  visitEvaluate (ctx) {
    const id = this.visit(ctx.variable());
    return this.variables[id];
  }

  visitFunc (ctx) {
    if (ctx.COS()) {
      return Math.cos;
    }
    if (ctx.SIN()) {
      return Math.sin;
    }
    if (ctx.TAN()) {
      return Math.tan;
    }
  }

  visitMultiplicativeOp (ctx) {
    return (ctx.STAR() || ctx.SLASH()).symbol.type;
  }

  visitMultiply (ctx) {
    const left = this.visit(ctx.evalExpr(0));
    const right = this.visit(ctx.evalExpr(1));
    const operator = this.visit(ctx.multiplicativeOp());

    switch (operator) {
    case CalcParser.STAR:
      return left * right;

    case CalcParser.SLASH:
      return left / right;
    }
  }

  visitNegate (ctx) {
    return -this.visit(ctx.evalExpr());
  }

  visitNumber (ctx) {
    if (ctx.PI()) {
      return Math.PI;
    }
    return parseFloat(ctx.getText(), 10);
  }

  visitParens (ctx) {
    return this.visit(ctx.evalExpr());
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
    console.log(txt);
  }

  visitStoExpr (ctx) {
    return this.visit(ctx.variable());
  }

  visitVariable (ctx) {
    return ctx.ID().getText();
  }
}
