import path from 'path';
import File from './file';
import Screen from './screen';
import Matrix from './matrix';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcVisitor} = require(path.join(base, rel, 'CalcVisitor'));
const {CalcParser} = require(path.join(base, rel, 'CalcParser'));

export class Interpreter extends CalcVisitor {
  constructor (...args) {
    super(...args);

    const variables = {};
    const matrices = {};
    this.currentFile = null;
    this.screen = new Screen();
    const files = {};

    this.hasVariable = function (name) {
      return name in variables;
    };
    this.setVariable = function (name, value) {
      variables[name] = value;
    };
    this.getVariable = function (name) {
      if (!this.hasVariable(name)) {
        throw new Error('Never initialized variable ' + name);
      }
      return variables[name];
    };

    this.hasMatrix = function (name) {
      return name in matrices;
    };
    this.setMatrix = function (name, value) {
      matrices[name] = new Matrix(value);
    };
    this.setMatrixElement = function ({name, i, j}, value) {
      this.getMatrix(name).array[i][j] = value;
    };
    this.getMatrix = function (name) {
      if (!this.hasMatrix(name)) {
        throw new Error('Never initialized matrix ' + name);
      }
      return matrices[name];
    };
    this.getMatrixElement = function (name, i, j) {
      return this.getMatrix(name).array[i][j];
    };

    this.isJumping = function () {
      return this.currentFile.isJumping();
    };
    this.isJumpingTo = function (label) {
      return this.currentFile.isJumpingTo(label);
    };
    this.isFinished = function () {
      return this.currentFile.isFinished();
    };
    this.startJumping = function (label) {
      this.currentFile.startJumping(label);
    };
    this.stopJumping = function (label) {
      this.currentFile.stopJumping(label);
    };

    this.isRegistering = function () {
      return this.isJumpingTo('REGISTERING');
    };
    this.startRegistering = function () {
      return this.startJumping('REGISTERING');
    };
    this.stopRegistering = function () {
      return this.stopJumping('REGISTERING');
    };
    this.registerFile = function (file, ctx) {
      files[file] = new File(ctx);
    };
    this.callFile = function (file) {
      files[file].exec(this);
    };
  }

  visitAdd (ctx) {
    const left = this.visit(ctx.evalExpr(0));
    const right = this.visit(ctx.evalExpr(1));
    const operator = this.visit(ctx.addOp());

    switch (operator) {
    case CalcParser.ADD:
      return left.add ? left.add(right) : left + right;

    case CalcParser.SUB:
      return left.add ? left.sub(right) : left - right;
    }
  }

  visitAddOp (ctx) {
    return (ctx.ADD() || ctx.SUB()).symbol.type;
  }

  visitAssignStat (ctx) {
    const {id, set} = this.visit(ctx.stoExpr());
    const value = this.visit(ctx.evalExpr());
    this[set](id, value);
  }

  visitBoolOp (ctx) {
    return (ctx.AND() || ctx.OR()).symbol.type;
  }


  visitCompare (ctx) {
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
    this.startJumping('EOF');
  }

  visitEvaluate (ctx) {
    const id = this.visit(ctx.variable());
    return this.getVariable(id);
  }

  visitEvaluateMatrix (ctx) {
    const id = this.visit(ctx.matrix());
    return this.getMatrix(id);
  }

  visitEvaluateMatrixElement (ctx) {
    const {name, i, j} = this.visit(ctx.matrixElement());
    return this.getMatrixElement(name, i, j);
  }

  visitEvaluateMatrixInitializer (ctx) {
    const rows = ctx.matrixInitializer().matrixRow();

    return new Matrix(Object.keys(rows).map(key => {
      const exprs = rows[key].evalExpr();
      return Object.keys(exprs).map(key => {
        return this.visit(exprs[key]);
      });
    }));
  }

  visitFile (ctx) {
    const attributes = ctx.header().attributes();
    const file = '"' + attributes.fileName(0).getText() + '"';
    if (this.isRegistering()) {
      this.registerFile(file, ctx);
      return;
    }
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

  visitHeaderValue (ctx) {
    if (ctx.getText()) {
      super.visitHeaderValue(ctx);
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

    if (ctx.PROG()) {
      const file = ctx.STRING().getText();
      this.callFile(file);
      return;
    }

    const label = ctx.lbl().getText();
    this.startJumping(label);
  }

  visitLabelStat (ctx) {
    const label = ctx.lbl().getText();
    if (!this.isJumpingTo(label)) {
      return;
    }
    this.stopJumping(label);
  }

  visitMatrix (ctx) {
    return ctx.ID().getText();
  }

  visitMatrixElement (ctx) {
    return {
      name: ctx.ID().getText(),
      i: this.visit(ctx.evalExpr(0)) - 1,
      j: this.visit(ctx.evalExpr(1)) - 1,
    };
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
    let txt = ctx.STRING().getText();
    this.screen.print(txt);
  }

  visitPrintAt (ctx) {
    let x = this.visit(ctx.evalExpr(0));
    let y = this.visit(ctx.evalExpr(1));
    let txt;

    if (ctx.STRING()) {
      txt = ctx.STRING().getText();
    } else {
      txt = this.visit(ctx.evalExpr(2)).toString();
    }

    this.screen.printAt(x, y, txt);
  }

  visitProg (ctx) {
    this.currentFile = new File(ctx);

    this.startRegistering();
    let runCount = 0;

    do {
      if (runCount === 1) {
        this.stopRegistering();
      }
      super.visitProg(ctx);
      runCount++;
    } while (!this.isFinished() && this.isJumping());
  }

  visitReduceBoolExpr (ctx) {
    const left = this.visit(ctx.boolExpr(0));
    const right = this.visit(ctx.boolExpr(1));
    const operator = this.visit(ctx.boolOp());

    switch (operator) {
    case CalcParser.AND:
      return left && right;

    case CalcParser.OR:
      return left || right;
    }
  }

  visitStat (ctx) {
    if (this.isJumping() && !ctx.labelStat()) {
      return;
    }

    super.visitStat(ctx);
  }

  visitStoExpr (ctx) {
    if (ctx.variable()) {
      return {
        set: 'setVariable',
        id: this.visit(ctx.variable()),
      };
    }

    if (ctx.matrix()) {
      return {
        set: 'setMatrix',
        id: this.visit(ctx.matrix()),
      };
    }

    if (ctx.matrixElement()) {
      return {
        set: 'setMatrixElement',
        id: this.visit(ctx.matrixElement()),
      };
    }
  }

  visitVariable (ctx) {
    return ctx.ID().getText();
  }
}
