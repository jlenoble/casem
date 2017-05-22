grammar Exprs;
import DataStructs;

boolExpr
: numExpr compOp numExpr
;

numExpr
: OPAR numExpr CPAR           # parens
| SUB numExpr                 # negate
| func numExpr                # compute
| numExpr vectorExpr          # scalarMult
| numExpr multOp numExpr      # multiply
| numExpr addOp numExpr       # add
| variable                    # evaluate
| constant                    # constEvaluate
| number                      # parse
;

stoExpr
: variable
;

vectorExpr
: OPAR numExpr CPAR           # vParens
| func numExpr                # vCompute
| variable                    # vEvaluate
| constant                    # vConstEvaluate
;

compOp
: EQUAL
;

multOp
: MUL
| DIV
| REMAIN
;

addOp
: ADD
| SUB
;
