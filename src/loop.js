import Block from './block';

class Loop extends Block {
  constructor (ctx, visitor) {
    super(visitor);
  }
}

export default Loop;

export class ForLoop extends Loop {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    Object.defineProperties(this, {
      start: {
        value: visitor.visit(ctx.numExpr(0)),
      },

      end: {
        value: visitor.visit(ctx.numExpr(1)),
      },

      step: {
        value: ctx.numExpr(2) !== null ? visitor.visit(ctx.numExpr(2)) : 1,
      },

      varName: {
        value: ctx.variable().getText(),
      },

      forNext: {
        value: function () {
          let i = visitor.getVariable(this.varName);

          if (i <= this.end) {
            visitor.visit(ctx.blocks());
            visitor.setVariable(this.varName, i + this.step);

            visitor.getCurrentFile().doQueue(() => this.forNext());
          }
        },
      },
    });
  }

  run () {
    this.visitor.setVariable(this.varName, this.start);
    this.forNext();
  }
}

export class DoLoop extends Loop {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    Object.defineProperties(this, {
      repeatUntil: {
        value: function () {
          visitor.visit(ctx.blocks());

          if (visitor.visit(ctx.boolExpr())) {
            visitor.getCurrentFile().doQueue(() => this.repeatUntil());
          }
        },
      },
    });
  }

  run () {
    this.repeatUntil();
  }
}

export class WhileLoop extends Loop {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    Object.defineProperties(this, {
      whileLoop: {
        value: function () {
          if (visitor.visit(ctx.boolExpr())) {
            visitor.visit(ctx.blocks());
            visitor.getCurrentFile().doQueue(() => this.whileLoop());
          }
        },
      },
    });
  }

  run () {
    this.whileLoop();
  }
}