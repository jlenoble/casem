import Muter, {captured, muted} from 'muter';
import {expect} from 'chai';
import {interprete} from '../src/casem';

describe('Testing Casem', function () {
  this.timeout(1200000); // eslint-disable-line no-invalid-this

  const muter = Muter(process);

  it('Testing', captured(muter, function () {
    return interprete('src/static/data/casem.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Hello world/);
      });
  }));
});
