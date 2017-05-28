class Queue {
  constructor () {
    Object.defineProperties(this, {
      queue: {
        value: [],
      },

      push: {
        value: function (arg) {
          this.queue.push(arg);
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
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          promise.then(() => {
            try {
              resolve(stat.reduce());
            } catch (err) {
              reject(err);
            }
          });
        });
      });
    }, Promise.resolve());
  }
}

export default Queue;
