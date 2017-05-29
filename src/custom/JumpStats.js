import {execFile} from '../helpers/file';

export const mixWithJumpStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitJumpStat (ctx) {
      if (ctx.PROG() !== null) {
        return execFile(ctx.STRING().getText());
      }
    },
  });
};
