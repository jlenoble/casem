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
    this.queue.forEach(stat => {
      stat.reduce();
    });
  }
}

export default Queue;
