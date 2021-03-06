import {mixWithNumExprs} from './NumExprs';

export const mixWithVectorExprs = Interpreter => {
  mixWithNumExprs(Interpreter);

  const proto = Interpreter.prototype;

  Object.assign(proto, {
    visitVCompute: proto.visitCompute,
    visitVConstEvaluate: proto.visitConstEvaluate,
    visitVEvaluate: proto.visitEvaluate,
    visitVParens: proto.visitParens,
  });
};

export const mixWithExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitCompare (ctx) {
      const left = this.visit(ctx.numExpr(0));
      const right = this.visit(ctx.numExpr(1));
      const operator = ctx.compOp();

      if(operator.EQ() !== null) {
        return left === right;
      }
      if(operator.NE() !== null) {
        return left !== right;
      }
      if(operator.GT() !== null) {
        return left > right;
      }
      if(operator.GE() !== null) {
        return left >= right;
      }
      if(operator.LT() !== null) {
        return left < right;
      }
      return left <= right;
    },

    visitReduceBoolExpr (ctx) {
      const left = this.visit(ctx.boolExpr(0));
      const right = this.visit(ctx.boolExpr(1));
      const operator = ctx.logicOp();

      if(operator.AND() !== null) {
        return left && right;
      }
      return left || right;
    },
  });

  mixWithVectorExprs(Interpreter);
};
