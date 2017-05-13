import Muter, {captured, muted} from 'muter';
import {expect} from 'chai';
import {interprete} from '../src/casem';

describe('Testing Casem', function () {
  const muter = Muter(process);

  it('Testing addition', muted(muter, function () {
    return interprete('src/static/data/additive-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:203\n/);
      });
  }));

  it('Testing multiplication', muted(muter, function () {
    return interprete('src/static/data/multiplicative-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:250\n/);
      });
  }));

  it('Testing negation', muted(muter, function () {
    return interprete('src/static/data/negation-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:625\n/);
      });
  }));

  it('Testing parens', muted(muter, function () {
    return interprete('src/static/data/parens-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:-400\n/);
      });
  }));

  it('Testing functions', muted(muter, function () {
    return interprete('src/static/data/function-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/100.00000000000024\n/);
      });
  }));

  it('Testing Polar to Cartesian', muted(muter, function () {
    return interprete('src/static/data/polcart.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(
          /Result: {14}\n0.43301270189221946  \n0.75 {17}\n0.49999999999999994\n/);
      });
  }));

  it('Testing Cartesian to Polar', muted(muter, function () {
    return interprete('src/static/data/cartpol.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(
          /Result: {14}\n1 {20}\n1 {20}\n1\n/);
      });
  }));

  it('Testing Goto', muted(muter, function () {
    return interprete('src/static/data/goto.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:\s+B\s+E\s+F\n/);
      });
  }));

  it('Testing calls to programs', muted(muter, function () {
    return interprete('src/static/data/prog.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(
          /In ONE\s+In TWO\s+In THREE\s+In TWO\s+back to main\s+In ONE\s+In TWO\n/);
      });
  }));

  it('Testing matrices', muted(muter, function () {
    return interprete('src/static/data/matrix-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Calculation Ok\n/);
      });
  }));
});
