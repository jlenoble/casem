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

  reduce (label) {
    let searchForLabel = label !== undefined;

    return this.queue.reduce((promise, stat) => {
      return promise.then(() => {
        if (!searchForLabel) {
          return stat.reduce();
        }

        if (stat.ctx.getText() === label) {
          searchForLabel = false;
          return Promise.resolve();
        }

        return stat.reduce(label);
      });
    }, Promise.resolve());
  }
}

export default Queue;
