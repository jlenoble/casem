import {makeIOTest} from 'child-process-data';
import {toScreen} from '../src/screen';

const waitForReady = 1000;

describe('Testing Casem', function () {
  /* it('Testing Getkey loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/getkey.txt'],
      waitForReady,

      messages: [
        {o: '\n' + toScreen('Entering loop') + '\n'},
        {io: ['Hello', toScreen('Entering loop\nLeaving loop') + '\n']},
      ],
    });

    return test();
  });*/

  it('Testing the four operations', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/four-ops.txt'],
      waitForReady,

      messages: [{o:
        '\n' + toScreen('9') + '\n' +
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
        '\n' + toScreen('0') + '\n' +
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
        '\n' + toScreen('-2') + '\n' +
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
        '\n' + toScreen('1') + '\n' +
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
        '\n' + toScreen('1') + '\n' +
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
});
