class List {
  constructor (array) {
    Object.defineProperties(this, {
      array: {
        value: (array.array || array).map(elt => elt),
      },
    });
  }

  set (array) {
    const arr = this.array;
    const arr2 = (array.array || array);
    for (let i = 0, l = arr.length; i < l; i++) {
      arr[i] = arr2[i];
    }
  }

  add (array) {
    const arr = (array.array || array);
    return new List(this.array.map((elt, j) => {
      return elt + arr[j];
    }));
  }

  sub (array) {
    const arr = (array.array || array);
    return new List(this.array.map((elt, j) => {
      return elt - arr[j];
    }));
  }

  equal (array) {
    const arr = (array.array || array);
    return this.array.every((elt, j) => {
      return elt === arr[j];
    });
  }
}

export default List;
