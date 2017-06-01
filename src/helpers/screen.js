export const makeTop = len => {
  return '┏' + Array(len + 1).join('━') + '┓\n';
};

export const makeBottom = len => {
  return '┗' + Array(len + 1).join('━') + '┛\n';
};

export const makeSeparator = len => {
  return '┠' + Array(len + 1).join('┄') + '┨\n';
};
export const makeBlank = len => {
  return Array(len + 1).join(' ');
};

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

export const makeToScreen = width => {
  const top = makeTop(width);
  const bottom = makeBottom(width);
  const separator = makeSeparator(width);
  const blank = makeBlank(width);

  return str => {
    const rows = Array.isArray(str) ? str : str.split('\n');

    let txt = top;
    let i = 0;

    rows.forEach(row => {
      txt += '┃' + (row.toString().replace(/(.*)(\n)$/, '$1') + blank)
        .slice(0, width) + '┃\n';
      i++;
      if (i%8 === 0 && i !== rows.length) {
        txt += separator;
      }
    });

    if (i%8 === 0) {
      txt += bottom;
    } else {
      txt += separator;
    }

    return txt;
  };
};

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
      toScreen: {
        value: makeToScreen(width),
      },
    });

    this.clear();
  }

  set (x, y, value) {
    this.rows[y].set(x, value);
  }

  clear () {
    this.rows.length = 0;
    this.offset = 0;
  }

  update (txt) {
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

    this.updateAt(1, o + 1, txt);
    this.offset += ySpan;
  }

  updateAt (x, y, txt) {
    const _txt = txt.toString();
    const w = this.width;
    const r = this.rows;

    let _x = this.preprocessCoord(x, w);
    let _y = this.preprocessCoord(y, Math.max(this.height, this.rows.length));

    for (let i = 0, l = _txt.length; i < l; i++) {
      if (_x + i >= w) {
        _x -= w;
        _y += 1;
      }

      while (_y >= r.length) {
        r.push(new Row(w));
      }

      this.set(_x + i, _y, _txt[i]);
    }
  }

  print (txt) {
    this.update(txt);
    console.log(this.toString());
  }

  printAt (x, y, txt) {
    this.updateAt(x, y, txt);
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
    return this.toScreen(this.rows);
  }

  preprocessCoord (x, size) {
    return (x < 1 ? 1 : x > size ? size : x) - 1;
  }

  equals (txt) {
    return this.toString() === this.toScreen(txt);
  }
}

export default Screen;
