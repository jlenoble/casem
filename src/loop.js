import Block, {getParentBlock} from './block';

class Loop extends Block {
  constructor (ctx, visitor) {
    super(visitor);

    Object.defineProperties(this, {
      execBeforeCondition: {
        value: function () {},
        writable: true,
      },

      execBlock: {
        value: function () {
          visitor.visit(ctx.blocks());
        },
      },

      execWithinCondition: {
        value: function () {
          this.execBlock();
        },
        writable: true,
      },

      init: {
        value: function () {},
        writable: true,
      },

      mustExec: {
        value: function () {
          return visitor.visit(ctx.boolExpr());
        },
        writable: true,
      },

      runOnceAndRepeat: {
        value: function () {
          this.register();
          this.execBeforeCondition();

          if (this.mustExec()) {
            this.execWithinCondition();

            getParentBlock().doQueue(() => this.runOnceAndRepeat());
          }

          this.unregister();
        },
        writable: true,
      },
    });
  }

  run () {
    this.init();
    this.runOnceAndRepeat();
  }
}

export default Loop;
export class WhileLoop extends Loop {}

export class ForLoop extends Loop {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    Object.defineProperties(this, {
      execWithinCondition: {
        value: function () {
          this.execBlock();
          visitor.setVariable(this.varName,
            visitor.getVariable(this.varName) + this.step);
        },
      },

      init: {
        value: function () {
          this.start = visitor.visit(ctx.numExpr(0));
          this.end = visitor.visit(ctx.numExpr(1));
          this.step = ctx.numExpr(2) !== null ?
            visitor.visit(ctx.numExpr(2)) : 1;
          this.varName = ctx.variable().getText();

          visitor.setVariable(this.varName, this.start);
        },
      },

      mustExec: {
        value: function () {
          return visitor.getVariable(this.varName) <= this.end;
        },
      },
    });
  }
}

export class DoLoop extends Loop {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    Object.defineProperties(this, {
      execBeforeCondition: {
        value: function () {
          this.execBlock();
        },
      },

      execWithinCondition: {
        value: function () {},
      },
    });
  }
}
