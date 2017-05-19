import {makeIOTest} from 'child-process-data';

describe('Testing Casem', function () {
  it('Testing Getkey loop', function () {
    const test = makeIOTest({
      childProcessFile: 'build/src/casem.js',
      childProcessOptions: ['src/static/data/getkey.txt'],
      waitForReady: 1000,

      messages: [
        {o: 'Entering loop\n'},
        {io: ['Hello', 'Leaving loop\nGood bye!\n']},
      ],
    });

    return test();
  });
});
