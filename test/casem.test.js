import Muter, {captured} from 'muter';
import {expect} from 'chai';
import {spawn} from 'child_process';
import childProcessData, {makeSingleTest} from 'child-process-data';

describe('Testing Casem', function () {
  it('Testing Getkey loop', function () {
    const test = makeSingleTest({
      debug: true,
      spawnTest () {
        const p = spawn('node', [
          'build/src/casem.js',
          'src/static/data/getkey.txt',
        ], {stdio: 'pipe'});

        this.childProcess = p;

        childProcessData(p);
      },
      checkResults () {
        const muter = new Muter(process);

        const doCheck = () => {
          const logs = muter.getLogs();

          try {
            expect(logs).to.match(/Entering loop\n/);
          } catch (err) {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(doCheck());
              }, 10);
            });
          }

          this.childProcess.stdin.write('Hello\r');

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              try {
                expect(muter.getLogs()).to.match(/Leaving loop\n/);
                resolve();
              } catch (err) {
                reject(err);
              }
            }, 10);
          });
        };

        return captured(muter, doCheck)();
      },
    });

    return test();
  });
});
