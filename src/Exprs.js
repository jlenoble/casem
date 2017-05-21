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
      return this.visit(ctx.numExpr(0)) === this.visit(ctx.numExpr(1));
    },
  });

  mixWithVectorExprs(Interpreter);
};
