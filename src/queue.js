class Queue {
  constructor () {
    Object.defineProperties(this, {
      queue: {
        value: [],
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

  doQueue (onResume) {
    this.queue.push(onResume);
  }

  flush (resolve) {
     // Unqueuing may generate more postponed stats so we will use
     // the reset main queue to register them while only flushing a copy
    const queue = this.queue.concat();
    this.queue.length = 0;

    // Unqueue one postponed stat at a time until all are processed or
    // one is newly postponed
    while (!this.queue.length && queue.length) {
      queue.shift()();
    }

    if (!queue.length && !this.queue.length) { // No stat left unprocessed
      return resolve();
    }

    // **Prepend** new postponed stats to old ones
    this.queue.push(...queue);

    // Flush again until promise is resolved
    setTimeout(this.flush.bind(this, resolve), 0);
  }
}

export default Queue;
