import {makeIOTest} from 'child-process-data';
import {toScreen} from '../src/screen';

describe('Testing Casem', function () {
  it('Testing Getkey loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/getkey.txt'],
      waitForReady: 1000,

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
      waitForReady: 1000,

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
      waitForReady: 1000,

      messages: [{o:
        toScreen('0') + '\n' +
        toScreen('0\n18') + '\n' +
        toScreen('0\n18\n-4') + '\n' +
        toScreen('0\n18\n-4\n-2') + '\n',
      }],
    });

    return test();
  });
});
