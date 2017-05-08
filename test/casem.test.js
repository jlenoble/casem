import Muter, {captured} from 'muter';
import {expect} from 'chai';
import Casem from '../src/casem';

describe('Testing Casem', function () {
  const muter = Muter(console, 'log'); // eslint-disable-line new-cap

  it(`Class Casem says 'Hello world!'`, captured(muter, function () {
    new Casem();
    expect(muter.getLogs()).to.equal('Hello world!\n');
  }));
});
