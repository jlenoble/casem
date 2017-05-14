import path from 'path';
import File from './file';
import Screen from './screen';
import Matrix from './matrix';
import List from './list';
import {getKeyCode} from './keys';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {CalcVisitor} = require(path.join(base, rel, 'CalcVisitor'));
const {CalcParser} = require(path.join(base, rel, 'CalcParser'));

export class Interpreter extends CalcVisitor {
  constructor (...args) {
    super(...args);

    const variables = {
      GETKEY: getKeyCode('EXE'), // Programs are started by pressing EXE
    };
    const matrices = {};
    const lists = {};
    this.currentFile = null;
    this.screen = new Screen();
    const files = {};

    this.readCharacter = function () {
      return variables['GETKEY'];
    };

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

    this.hasList = function (name) {
      return name in lists;
    };
    this.setList = function (name, value) {
      lists[name] = new List(value);
    };
    this.setListElement = function ({name, i}, value) {
      this.getList(name).array[i] = value;
    };
    this.getList = function (name) {
      if (!this.hasList(name)) {
        throw new Error('Never initialized list ' + name);
      }
      return lists[name];
    };
    this.getListElement = function (name, i) {
      return this.getList(name).array[i];
    };

    this.isJumping = function () {
      return this.currentFile.isJumping();
    };
    this.isJumpingTo = function (label) {
      return this.currentFile.isJumpingTo(label);
    };
    this.isFinished = function () {
      return this.currentFile.isFinished() ||
        this.isJumpingTo('STOP');
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
    this.stop = function () {
      this.isJumpingTo('STOP');
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

  visitClearText (ctx) {
    this.screen.clear();
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

  visitEvaluateList (ctx) {
    const id = this.visit(ctx.list());
    return this.getList(id);
  }

  visitEvaluateListElement (ctx) {
    const {name, i} = this.visit(ctx.listElement());
    return this.getListElement(name, i);
  }

  visitEvaluateListInitializer (ctx) {
    const exprs = ctx.listInitializer().evalExpr();
    return new List(Object.keys(exprs).map(key => {
      return this.visit(exprs[key]);
    }));
  }

  visitEvaluateSeq (ctx) {
    const expr = ctx.evalExpr(0);
    const variable = ctx.evalExpr(1).getText();
    const start = this.visit(ctx.evalExpr(2));
    const end = this.visit(ctx.evalExpr(3));
    const step = this.visit(ctx.evalExpr(4));

    const list = [];
    for (let X = start; X <= end; X += step) {
      this.setVariable(variable, X);
      list.push(this.visit(expr));
    }

    return new List(list);
  }

  visitFactorial (ctx) {
    let n = this.visit(ctx.evalExpr());
    if (n === 0 || n === 1) {
      return 1;
    }
    if (n !== parseInt(n, 10)) {
      throw new Error('Not a natural number:', n);
    }
    let fact = n;
    while (n > 2) {
      n--;
      fact *= n;
    }
    return fact;
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
    if (ctx.INT()) {
      return Math.trunc;
    }
    if (ctx.ABS()) {
      return Math.abs;
    }
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

    if (ctx.STOP()) {
      this.stop();
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

  visitList (ctx) {
    return ctx.NATNUM().getText();
  }

  visitListElement (ctx) {
    return {
      name: ctx.NATNUM().getText(),
      i: this.visit(ctx.evalExpr()) - 1,
    };
  }

  visitListToMatrix (ctx) {
    const cols = ctx.list().map(list => {
      return this.getList(this.visit(list)).array;
    });

    const matrix = new Matrix(cols);
    const rows = matrix.transpose().array;

    this.setMatrix('Ans', rows);

    return new Matrix(rows);
  }

  visitMatrix (ctx) {
    if (ctx.ID()) {
      return ctx.ID().getText();
    }

    if (ctx.ANS()) {
      return 'Ans';
    }
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

  visitPower (ctx) {
    const left = this.visit(ctx.evalExpr(0));
    const right = this.visit(ctx.evalExpr(1));
    return left**right;
  }

  visitPrint (ctx) {
    let txt = ctx.STRING().getText().replace(/^"(.*)"$/, '$1');
    this.screen.print(txt);
  }

  visitPrintAt (ctx) {
    let x = this.visit(ctx.evalExpr(0));
    let y = this.visit(ctx.evalExpr(1));
    let txt;

    if (ctx.STRING()) {
      txt = ctx.STRING().getText().replace(/^"(.*)"$/, '$1');
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

  visitReadStat (ctx) {
    if (ctx.GETKEY()) {
      const {id, set} = this.visit(ctx.stoExpr());
      const value = this.readCharacter();
      this[set](id, value);
    }
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

  visitScalarMult (ctx) {
    const left = this.visit(ctx.evalExpr());
    const right = this.visit(ctx.vectorExpr());
    return left * right;
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

    if (ctx.list()) {
      return {
        set: 'setList',
        id: this.visit(ctx.list()),
      };
    }

    if (ctx.listElement()) {
      return {
        set: 'setListElement',
        id: this.visit(ctx.listElement()),
      };
    }
  }

  visitVariable (ctx) {
    return ctx.ID().getText();
  }

  visitVectorExpr (ctx) {
    if (ctx.variable()) {
      return this.visitEvaluate(ctx);
    }

    if (ctx.func()) {
      return this.visitCompute(ctx);
    }

    if (ctx.evalExpr()) {
      return this.visitParens(ctx);
    }
  }
}
