import {makeIOTest} from 'child-process-data';

describe('Testing Casem', function () {
  it('Testing Getkey loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/getkey.txt'],
      waitForReady: 1000,

      messages: [
        {o: 'Entering loop\n'},
        {io: ['Hello', 'Leaving loop\n']},
      ],
    });

    return test();
  });

  it('Testing the four operations', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/four-ops.txt'],
      waitForReady: 1000,

      messages: [
        {o: '9\n-3\n-1.5\n2\n'},
      ],
    });

    return test();
  });
});
