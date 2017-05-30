import Block from './block';

const files = new Map();

export const execFile = filename => {
  const file = files.get(filename);

  if (file !== undefined) {
    return file.reduce();
  }
};

class File extends Block {
  constructor (ctx, visitor) {
    super(ctx, visitor);

    if (ctx.header !== undefined) {
      // Cache nested file: Must be explicitly called
      const filename = ctx.header().attributes().fileName(0).getText();
      files.set('"' + filename + '"', this);
    } else {
      files.set('"main"', this);
    }
  }

  reduce (label) {
    return super.reduce(label).catch(err => {
      if (err.message === 'RETURN') {
        return;
      }

      if (('' + err.message).match(/^\\Lbl [A-Z0-9]$/)) {
        return this.reduce(err.message);
      }

      throw err;
    });
  }
}

export default File;
