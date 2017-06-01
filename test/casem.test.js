import {makeIOTest} from 'child-process-data';
import {makeToScreen} from '../src/helpers/screen';

const waitForReady = 1000;
const toScreen = makeToScreen(21);

describe('Testing Casem', function () {
  it('Testing Getkey loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/getkey.txt'],
      waitForReady,

      messages: [
        {o: toScreen('Entering loop') + '\n'},
        {io: ['Hello', toScreen('Entering loop\nLeaving loop') + '\n']},
      ],
    });

    return test();
  });

  it('Testing the four operations', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/four-ops.txt'],
      waitForReady,

      messages: [{o:
        toScreen('9') + '\n' +
        toScreen('9\n-3') + '\n' +
        toScreen('9\n-3\n-1.5') + '\n' +
        toScreen('9\n-3\n-1.5\n2') + '\n',
      }],
    });

    return test();
  });

  it('Testing functions', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/functions.txt'],
      waitForReady,

      messages: [{o:
        toScreen('0') + '\n' +
        toScreen('0\n18') + '\n' +
        toScreen('0\n18\n-4') + '\n' +
        toScreen('0\n18\n-4\n-2') + '\n',
      }],
    });

    return test();
  });

  it('Testing If and For structures', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/if-for.txt'],
      waitForReady,

      messages: [{o:
        toScreen('-2') + '\n' +
        toScreen('-2\n6') + '\n' +
        toScreen('-2\n6\n-6') + '\n' +
        toScreen('-2\n6\n-6\n12') + '\n' +
        toScreen('-2\n6\n-6\n12\n-10') + '\n' +
        toScreen('-2\n6\n-6\n12\n-10\n18') + '\n',
      }],
    });

    return test();
  });

  it('Testing comparison operators', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/comparison.txt'],
      waitForReady,

      messages: [{o:
        toScreen('1') + '\n' +
        toScreen('12') + '\n' +
        toScreen('123') + '\n' +
        toScreen('1234') + '\n' +
        toScreen('12345') + '\n' +
        toScreen('123456') + '\n',
      }],
    });

    return test();
  });

  it('Successive loops', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/loops.txt'],
      waitForReady,

      messages: [{o:
        toScreen('1') + '\n' +
        toScreen('12') + '\n' +
        toScreen('123') + '\n' +
        toScreen('1234') + '\n' +
        toScreen('12345') + '\n' +
        toScreen('123456') + '\n' +
        toScreen('1234567') + '\n' +
        toScreen('12345678') + '\n' +
        toScreen('123456789') + '\n' +
        toScreen('123456789\n9') + '\n' +
        toScreen('123456789\n98') + '\n' +
        toScreen('123456789\n987') + '\n' +
        toScreen('123456789\n9876') + '\n' +
        toScreen('123456789\n98765') + '\n' +
        toScreen('123456789\n987654') + '\n' +
        toScreen('123456789\n9876543') + '\n' +
        toScreen('123456789\n98765432') + '\n' +
        toScreen('123456789\n987654321') + '\n',
      }],
    });

    return test();
  });

  it('Nested loops', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/nested-loops.txt'],
      waitForReady,

      messages: [{o:
        toScreen('111') + '\n' +
        toScreen('111\n211') + '\n' +
        toScreen('111\n211\n121') + '\n' +
        toScreen('111\n211\n121\n221') + '\n' +
        toScreen('111 112\n211\n121\n221') + '\n' +
        toScreen('111 112\n211 212\n121\n221') + '\n' +
        toScreen('111 112\n211 212\n121 122\n221') + '\n' +
        toScreen('111 112\n211 212\n121 122\n221 222') + '\n' +
        toScreen('111 112 113\n211 212\n121 122\n221 222') + '\n' +
        toScreen('111 112 113\n211 212 213\n121 122\n221 222') + '\n' +
        toScreen('111 112 113\n211 212 213\n121 122 123\n221 222') + '\n' +
        toScreen('111 112 113\n211 212 213\n121 122 123\n221 222 223') + '\n',
      }],
    });

    return test();
  });

  it('Testing matrices', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/matrix-expr.txt'],
      waitForReady,

      messages: [{o:
        toScreen('Calculation Ok') + '\n',
      }],
    });

    return test();
  });

  it('Testing lists', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/list-expr.txt'],
      waitForReady,

      messages: [{o:
        toScreen('Calculation Ok') + '\n',
      }],
    });

    return test();
  });

  it('Calling a program', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/prog.txt'],
      waitForReady,

      messages: [{o:
        toScreen('In ONE') + '\n' +
        toScreen('In ONE\nIn TWO') + '\n' +
        toScreen('In ONE\nIn TWO\nIn THREE') + '\n' +
        toScreen('In ONE\nIn TWO\nIn THREE\nIn TWO') + '\n' +
        toScreen('In ONE\nIn TWO\nIn THREE\nIn TWO\nback to main') + '\n' +
        toScreen('In ONE\nIn TWO\nIn THREE\nIn TWO\nback to main\nIn ONE') +
          '\n' +
        toScreen(
          'In ONE\nIn TWO\nIn THREE\nIn TWO\nback to main\nIn ONE\nIn TWO') +
          '\n',
      }],
    });

    return test();
  });

  it('Jumping to label', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/goto.txt'],
      waitForReady,

      messages: [{o:
        toScreen('B') + '\n' +
        toScreen('B\nE') + '\n' +
        toScreen('B\nE\nF') + '\n',
      }],
    });

    return test();
  });

  it('Goto within For loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/goto-for.txt'],
      waitForReady,

      messages: [{o:
        toScreen('F') + '\n' +
        toScreen('F\nA') + '\n' +
        toScreen('F\nA\nG') + '\n' +
        toScreen('F\nA\nG\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH\nI\nD') + '\n',
      }],
    });

    return test();
  });

  it('Goto within Do loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/goto-do.txt'],
      waitForReady,

      messages: [{o:
        toScreen('F') + '\n' +
        toScreen('F\nA') + '\n' +
        toScreen('F\nA\nG') + '\n' +
        toScreen('F\nA\nG\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH\nI\nD') + '\n',
      }],
    });

    return test();
  });

  it('Goto within While loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/goto-while.txt'],
      waitForReady,

      messages: [{o:
        toScreen('F') + '\n' +
        toScreen('F\nA') + '\n' +
        toScreen('F\nA\nG') + '\n' +
        toScreen('F\nA\nG\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG') +
          '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH\nI') + '\n' +
        toScreen('F\nA\nG\nH\nI\nD\nF\nG\nB\nH\nI\nD\nF\nG\nH\nC\nI\nD\nF\nG' +
          '\nH\nI\nD') + '\n',
      }],
    });

    return test();
  });

  it('Goto with IfStat', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/goto-if.txt'],
      waitForReady,

      messages: [{o:
        toScreen('B') + '\n' +
        toScreen('BA') + '\n' +
        toScreen('BAE') + '\n' +
        toScreen('BAEE') + '\n' +
        toScreen('BAEEE') + '\n' +
        toScreen('BAEEEE') + '\n' +
        toScreen('BAEEEEB') + '\n' +
        toScreen('BAEEEEBA') + '\n' +
        toScreen('BAEEEEBAE') + '\n' +
        toScreen('BAEEEEBAEB') + '\n' +
        toScreen('BAEEEEBAEBA') + '\n' +
        toScreen('BAEEEEBAEBAD') + '\n' +
        toScreen('BAEEEEBAEBADC') + '\n',
      }],
    });

    return test();
  });
});
