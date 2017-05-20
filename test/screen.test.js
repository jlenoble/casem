import Muter, {muted} from 'muter';
import {expect} from 'chai';
import Screen from '../src/screen';

describe('Testing class Screen', function () {
  const muter = Muter(process);

  it('Convert multiline text (append===true)', muted(muter, function () {
    const screen = new Screen();
    const txt = `Menu:
1: Do this
2: Do that
3: Go here
4: Go there
5: Get out
6: Abort
`;

    screen.writeCasio(txt);
    expect(muter.getLogs()).to.equal(`"Menu:"
"1: Do this"
"2: Do that"
"3: Go here"
"4: Go there"
"5: Get out"
"6: Abort"
`);
  }));

  it('Convert multiline text (append===false)', muted(muter, function () {
    const screen = new Screen();
    const txt = `Menu:
1: Do this
2: Do that
3: Go here
4: Go there
5: Get out
6: Abort
`;

    screen.writeCasio(txt, false);
    expect(muter.getLogs()).to.equal(`\\ClrText
\\Locate 1,1,"Menu:"
\\Locate 1,2,"1: Do this"
\\Locate 1,3,"2: Do that"
\\Locate 1,4,"3: Go here"
\\Locate 1,5,"4: Go there"
\\Locate 1,6,"5: Get out"
\\Locate 1,7,"6: Abort"
`);
  }));
});
