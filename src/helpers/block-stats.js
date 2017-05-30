import Block from './block';

const BREAK = {};

export class DoStat extends Block {
  reduce (label) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        super.reduce(label).then(resolve, reject);
      });
    }).then(() => {
      if (this.visitor.visit(this.ctx.boolExpr())) {
        return this.reduce();
      }
    });
  }
}

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

    this.i = this.start;
  }

  reduce (label) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.visitor.setVariable(this.varName, this.i);
        super.reduce(label).then(resolve, reject);
      });
    });

    if (this.i !== this.end) {
      return promise.then(() => {
        this.i += this.step;
        return this.reduce();
      });
    } else {
      this.visitor.setVariable(this.varName, this.i);
      return promise.then(() => {
        this.visitor.setVariable(this.varName, this.i + 1);
        this.i = this.start;
      });
    }
  }
}

export class IfStat extends Block {
  reduce () {
    return new Promise((resolve, reject) => {
      try {
        const [b1, b2] = this.queue.queue;

        if (this.visitor.visit(this.ctx.boolExpr())) {
          resolve(b1.reduce());
        } else {
          if (b2 !== undefined) {
            resolve(b2.reduce());
          }
        }
      } catch (err) {
        reject(err);
      }
    });
  }
}

export class WhileStat extends Block {
  reduce (label) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.visitor.visit(this.ctx.boolExpr())) {
          super.reduce(label).then(resolve, reject);
        } else {
          resolve(BREAK);
        }
      });
    }).then(res => {
      return res !== BREAK ? this.reduce() : Promise.resolve();
    });
  }
}
