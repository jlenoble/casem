import Block from './block';

export class DoStat extends Block {
  reduce () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(super.reduce());
        } catch(err) {
          reject(err);
        }
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

  reduce () {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.visitor.setVariable(this.varName, this.i);
          this.i += this.step;
          resolve(super.reduce());
        } catch(err) {
          reject(err);
        }
      });
    });

    if (this.i !== this.end) {
      return promise.then(() => {
        return this.reduce();
      });
    } else {
      this.visitor.setVariable(this.varName, this.i);
      return promise.then(() => {
        this.visitor.setVariable(this.varName, this.i);
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
  reduce () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (this.visitor.visit(this.ctx.boolExpr())) {
            resolve(super.reduce());
          } else {
            resolve();
          }
        } catch(err) {
          reject(err);
        }
      });
    }).then(res => {
      return res !== undefined ? this.reduce() : Promise.resolve();
    });
  }
}
