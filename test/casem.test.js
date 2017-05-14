import Muter, {captured, muted} from 'muter';
import {expect} from 'chai';
import {interprete} from '../src/casem';

describe('Testing Casem', function () {
  this.timeout(200000); // eslint-disable-line no-invalid-this

  const muter = Muter(process);

  it('Testing addition', muted(muter, function () {
    return interprete('src/static/data/additive-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:203/);
      });
  }));

  it('Testing multiplication', muted(muter, function () {
    return interprete('src/static/data/multiplicative-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:250/);
      });
  }));

  it('Testing negation', muted(muter, function () {
    return interprete('src/static/data/negation-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:625/);
      });
  }));

  it('Testing parens', muted(muter, function () {
    return interprete('src/static/data/parens-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:-400/);
      });
  }));

  it('Testing functions', muted(muter, function () {
    return interprete('src/static/data/function-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/100.00000000000024/);
      });
  }));

  it('Testing Polar to Cartesian', muted(muter, function () {
    return interprete('src/static/data/polcart.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(
          /Result:(\s|[─-╿])+0.43301270189221946(\s|[─-╿])+0.75(\s|[─-╿])+0.49999999999999994/);
      });
  }));

  it('Testing Cartesian to Polar', muted(muter, function () {
    return interprete('src/static/data/cartpol.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(
          /Result:(\s|[─-╿])+1(\s|[─-╿])+1(\s|[─-╿])+1/);
      });
  }));

  it('Testing Goto', muted(muter, function () {
    return interprete('src/static/data/goto.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Result:(\s|[─-╿])+B(\s|[─-╿])+E(\s|[─-╿])+F/);
      });
  }));

  it('Testing calls to programs', muted(muter, function () {
    return interprete('src/static/data/prog.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(
          /In ONE(\s|[─-╿])+In TWO(\s|[─-╿])+In THREE(\s|[─-╿])+In TWO(\s|[─-╿])+back to main(\s|[─-╿])+In ONE(\s|[─-╿])+In TWO/);
      });
  }));

  it('Testing matrices', muted(muter, function () {
    return interprete('src/static/data/matrix-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Calculation Ok/);
      });
  }));

  it('Testing lists', muted(muter, function () {
    return interprete('src/static/data/list-expr.txt')
      .then(() => {
        expect(muter.getLogs()).to.match(/Calculation Ok/);
      });
  }));

  it('dummy', captured(muter, function () {
    return interprete('src/static/data/init-matrix.txt2')
      .then(() => {
      });
  }));
});
