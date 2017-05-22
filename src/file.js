import Block from './block';

class File extends Block {
  constructor (filename, visitor) {
    super(visitor);
  }
}

export default File;
