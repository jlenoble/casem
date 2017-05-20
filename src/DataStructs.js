export const mixWithDataStructs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitFunc (ctx) {
      if (ctx.INT() !== null) {
        return Math.trunc;
      }
      if (ctx.ABS() !== null) {
        return Math.abs;
      }
      if (ctx.SQRT() !== null) {
        return Math.sqrt;
      }
      if (ctx.COS() !== null) {
        return Math.cos;
      }
      if (ctx.SIN() !== null) {
        return Math.sin;
      }
      if (ctx.TAN() !== null) {
        return Math.tan;
      }
      if (ctx.ACOS() !== null) {
        return Math.acos;
      }
      if (ctx.ASIN() !== null) {
        return Math.asin;
      }
      if (ctx.ATAN() !== null) {
        return Math.atan;
      }
    },
  });
};
