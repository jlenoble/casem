class Matrix {
  constructor (array) {
    Object.defineProperties(this, {
      array: {
        value: (array.array || array).map(row => {
          return row.map(elt => elt);
        }),
      },
    });
  }

  set (array) {
    const arr = this.array;
    const arr2 = (array.array || array);

    arr.length = arr2.length;

    for (let i = 0, l = arr.length; i < l; i++) {
      arr[i] = arr2[i].map(elt => elt);
    }
  }

  add (array) {
    const arr = (array.array || array);
    return new Matrix(this.array.map((row, i) => {
      return row.map((elt, j) => {
        return elt + arr[i][j];
      });
    }));
  }

  sub (array) {
    const arr = (array.array || array);
    return new Matrix(this.array.map((row, i) => {
      return row.map((elt, j) => {
        return elt - arr[i][j];
      });
    }));
  }

  equal (array) {
    const arr = (array.array || array);
    return this.array.every((row, i) => {
      return row.every((elt, j) => {
        return elt === arr[i][j];
      });
    });
  }
}

export default Matrix;
