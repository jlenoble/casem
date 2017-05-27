import Block from './block';

export class ForStat extends Block {
  constructor (ctx, visitor, parent) {
    super(ctx, visitor, parent);

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
    });
  }

  reduce () {
    const {start, end, step, varName} = this;

    for (let i = start; i <= end; i += step) {
      this.visitor.setVariable(varName, i);
      super.reduce();
    }

    this.visitor.setVariable(varName, this.visitor.getVariable(varName) +
      step);
  }
}

export class IfStat extends Block {
  reduce () {
    const [b1, b2] = this.queue.queue;

    if (this.visitor.visit(this.ctx.boolExpr())) {
      b1.reduce();
    } else {
      if (b2 !== undefined) {
        b2.reduce();
      }
    }
  }
}
