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
    const operator = this.visit(ctx.addOp());

    switch (operator) {
    case CalcParser.ADD:
      return left + right;

    case CalcParser.SUB:
      return left - right;
    }
  }

  visitAddOp (ctx) {
    return (ctx.ADD() || ctx.SUB()).symbol.type;
  }

  visitAssignStat (ctx) {
    const id = this.visit(ctx.stoExpr());
    const value = this.visit(ctx.evalExpr());
    this.variables[id] = value;
  }

  visitBoolExpr (ctx) {
    const left = this.visit(ctx.evalExpr(0));
    const right = this.visit(ctx.evalExpr(1));
    const operator = this.visit(ctx.compOp());

    switch (operator) {
    case CalcParser.EQ:
      return left === right;

    case CalcParser.NE:
      return left !== right;

    case CalcParser.GT:
      return left > right;

    case CalcParser.GE:
      return left >= right;

    case CalcParser.LT:
      return left < right;

    case CalcParser.LE:
      return left <= right;
    }
  }

  visitCompOp (ctx) {
    return (ctx.EQ() || ctx.NE() || ctx.GT() || ctx.GE() || ctx.LT() ||
      ctx.LE()).symbol.type;
  }

  visitCompute (ctx) {
    const func = this.visit(ctx.func());
    const arg = this.visit(ctx.evalExpr());
    return func(arg);
  }

  visitEndProg (ctx) {
    console.log('END PROG');
  }

  visitEvaluate (ctx) {
    const id = this.visit(ctx.variable());
    return this.variables[id];
  }

  visitFunc (ctx) {
    if (ctx.SQRT()) {
      return Math.sqrt;
    }
    if (ctx.COS()) {
      return Math.cos;
    }
    if (ctx.SIN()) {
      return Math.sin;
    }
    if (ctx.TAN()) {
      return Math.tan;
    }
    if (ctx.ACOS()) {
      return Math.acos;
    }
    if (ctx.ASIN()) {
      return Math.asin;
    }
    if (ctx.ATAN()) {
      return Math.atan;
    }
  }

  visitIfStat (ctx) {
    const bool = this.visit(ctx.boolExpr());

    if (bool) {
      this.visit(ctx.block(0));
    } else {
      if (ctx.ELSE()) {
        this.visit(ctx.block(1));
      }
    }
  }

  visitImplyStat (ctx) {
    const bool = this.visit(ctx.boolExpr());

    if (bool) {
      this.visit(ctx.stat());
    }
  }

  visitJumpStat (ctx) {
    if (ctx.endProg()) {
      this.visit(ctx.endProg());
      return;
    }

    console.log('JUMP');
  }

  visitMultOp (ctx) {
    return (ctx.MUL() || ctx.DIV()).symbol.type;
  }

  visitMultiply (ctx) {
    const left = this.visit(ctx.evalExpr(0));
    const right = this.visit(ctx.evalExpr(1));
    const operator = this.visit(ctx.multOp());

    switch (operator) {
    case CalcParser.MUL:
      return left * right;

    case CalcParser.DIV:
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

  visitRoutineStat (ctx) {
    console.log('ROUTINE');
    this.visit(ctx.block());
    this.visit(ctx.jumpStat());
  }

  visitStoExpr (ctx) {
    return this.visit(ctx.variable());
  }

  visitVariable (ctx) {
    return ctx.ID().getText();
  }
}
