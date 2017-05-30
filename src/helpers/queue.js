class Queue {
  constructor () {
    Object.defineProperties(this, {
      queue: {
        value: [],
      },

      push: {
        value: function (arg) {
          return this.queue.push(arg);
        },
      },

      length: {
        get () {
          return this.queue.length;
        },
        set (value) {
          this.queue.length = value;
        },
      },
    });
  }

  reduce () {
    return this.queue.reduce((promise, stat) => {
      return promise.then(() => {
        if (stat.isJumping()) {
          const label = stat.ctx.getText();
          if (stat.isJumpingTo(label)) {
            stat.stopJumping(label);
            return Promise.resolve();
          }
        }

        return stat.reduce();
      });
    }, Promise.resolve());
  }
}

export default Queue;
