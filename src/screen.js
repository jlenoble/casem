class Row {
  constructor (width = 21) {
    Object.defineProperties(this, {
      width: {
        value: width,
      },
      pixels: {
        value: Array(width).fill(' '),
      },
    });
  }

  set (i, value) {
    this.pixels[i] = value;
  }

  toString () {
    return this.pixels.join('');
  }
}

class Screen {
  constructor (width = 21, height = 8) {
    Object.defineProperties(this, {
      width: {
        value: width,
      },
      height: {
        value: height,
      },
      pixels: {
        value: [],
      },
      offset: {
        value: 0,
        writable: true,
      },
    });

    for (let i = 0; i < height; i++) {
      this.pixels.push(new Row(width));
    }
  }

  set (x, y, value) {
    this.pixels[y].set(x, value);
  }

  print (txt) {
    const ySpan = Math.floor(txt.length / this.width) + 1;

    for (let j = this.offset; j < ySpan + this.offset; j++) {
      if (j < this.pixels.length) {
        this.pixels[j] = new Row(this.width);
      } else {
        this.pixels.push(new Row(this.width));
      }
    }

    const _txt = txt.replace(/^"(.*)"$/, '$1');
    this.printAt(1, this.offset + 1, _txt);
    this.offset += ySpan;
  }

  printAt (x, y, txt) {
    const _txt = txt.toString();

    let _x = this.preprocessCoord(x, this.width);
    let _y = this.preprocessCoord(y, this.height);

    for (let i = 0, l = _txt.length; i < l; i++) {
      if (_x + i >= this.width) {
        _x -= this.width;
        _y += 1;
      }

      if (_y >= this.pixels.length) {
        this.pixels.push(new Row(this.width));
      }

      this.set(_x + i, _y, _txt[i]);
    }

    console.log(this.toString());
  }

  writeCasio (txt, append = true) {
    const rows = txt.split('\n');

    if (!append) {
      console.log('\\ClrText');
    }

    rows.forEach((row, i) => {
      if (row) {
        if (append) {
          console.log(`"${row}"`);
        } else {
          console.log(`\\Locate 1,${i + 1},"${row}"`);
        }
      }
    });
  }

  toString () {
    let txt = '';

    this.pixels.forEach(row => {
      txt += row.toString() + '\n';
    });

    return txt.trim();
  }

  preprocessCoord (x, size) {
    return (x < 1 ? 1 : x > size ? size : x) - 1;
  }
}

export default Screen;
