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
      rows: {
        value: [],
      },
      offset: {
        value: 0,
        writable: true,
      },
    });

    this.clear();
  }

  set (x, y, value) {
    this.rows[y].set(x, value);
  }

  clear () {
    const r = this.rows;
    const h = this.height;
    const w = this.width;
    r.length = 0;
    this.offset = 0;

    for (let i = 0; i < h; i++) {
      r.push(new Row(w));
    }
  }

  print (txt) {
    const r = this.rows;
    const w = this.width;
    const l = r.length;
    const ySpan = Math.floor(txt.length / w) + 1;
    let o = this.offset;

    for (let j = o; j < ySpan + o; j++) {
      if (j < l) {
        r[j] = new Row(w);
      } else {
        r.push(new Row(w));
      }
    }

    this.printAt(1, o + 1, txt);
    o += ySpan;
  }

  printAt (x, y, txt) {
    const _txt = txt.toString();
    const r = this.rows;
    const s = r.length;

    let _x = this.preprocessCoord(x, w);
    let _y = this.preprocessCoord(y, this.height);

    for (let i = 0, l = _txt.length; i < l; i++) {
      if (_x + i >= w) {
        _x -= w;
        _y += 1;
      }

      if (_y >= s) {
        r.push(new Row(w));
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
    let txt = '┏━━━━━━━━━━━━━━━━━━━━━┓\n';
    let i = 0;

    this.rows.forEach(row => {
      txt += '┃' + row.toString() + '┃\n';
      i++;
      if (i%8 === 0 && i !== this.rows.length) {
        txt += '┠┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┨\n';
      }
    });

    txt += '┗━━━━━━━━━━━━━━━━━━━━━┛\n';

    return txt;
  }

  preprocessCoord (x, size) {
    return (x < 1 ? 1 : x > size ? size : x) - 1;
  }
}

export default Screen;
