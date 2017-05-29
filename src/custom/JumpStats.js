import {execFile} from '../helpers/file';

export const mixWithJumpStats = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitJumpStat (ctx) {
      if (ctx.PROG() !== null) {
        return execFile(ctx.STRING().getText());
      }

      if (ctx.endProg() !== null) {
        throw new Error('RETURN'); // Must be caught to stop reducing file
      }
    },
  });
};
