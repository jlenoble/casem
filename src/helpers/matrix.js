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

  transpose () {
    const arr = [];
    const arr2 = this.array;

    arr.length = arr2[0].length;

    for (let j = 0, m = arr2[0].length; j < m; j++) {
      arr[j] = Array(arr2.length);
      for (let i = 0, l = arr2.length; i < l; i++) {
        arr[j][i] = arr2[i][j];
      }
    }

    return new Matrix(arr);
  }
}

export default Matrix;
