import {mixWithNumExprs} from './NumExprs';

export const mixWithVectorExprs = Interpreter => {
  mixWithNumExprs(Interpreter);

  const proto = Interpreter.prototype;

  Object.assign(proto, {
    visitVCompute: proto.visitCompute,
    visitVConstEvaluate: proto.visitConstEvaluate,
    visitVEvaluate: proto.visitVEvaluate,
    visitVParens: proto.visitVParens,
  });
};

export const mixWithExprs = Interpreter => {
  Object.assign(Interpreter.prototype, {
    visitBoolExpr (ctx) {
      const left = this.visit(ctx.numExpr(0));
      const right = this.visit(ctx.numExpr(1));
      const operator = ctx.compOp();

      if(operator.EQUAL() !== null) {
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
  });

  mixWithVectorExprs(Interpreter);
};
