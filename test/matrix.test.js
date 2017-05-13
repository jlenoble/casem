import Muter, {muted} from 'muter';
import {expect} from 'chai';
import Matrix from '../src/matrix';

describe('Testing class Matrix', function () {
  const muter = Muter(process);
  const A = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const B = [[0, 2, 4], [6, 8, 10], [12, 14, 16]];
  const I = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  const Z = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  it('Initialization', muted(muter, function () {
    expect(() => new Matrix(Z)).not.to.throw();
  }));

  it('Comparing', muted(muter, function () {
    [new Matrix(Z), new Matrix(I), new Matrix(A)].forEach(m => {
      expect(m.equal(m.array)).to.be.true;
    });
  }));

  it('Setting', muted(muter, function () {
    [new Matrix(Z), new Matrix(I), new Matrix(A)].forEach(m => {
      m.set(I);
      expect(m.equal(I)).to.be.true;
    });
  }));

  it('Adding', muted(muter, function () {
    const m = new Matrix(A);
    const n = m.add(A);
    expect(n.equal(B)).to.be.true;
  }));

  it('Subtracting', muted(muter, function () {
    const m = new Matrix(A);
    const n = m.sub(A);
    expect(n.equal(Z)).to.be.true;
  }));
});
