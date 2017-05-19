grammar Exprs;
import DataStructs;

boolExpr
: numExpr compOp numExpr
;

numExpr
: SUB numExpr                 # negate
| numExpr multOp numExpr      # multiply
| numExpr addOp numExpr       # add
| variable                    # evaluate
| number                      # parse
;

stoExpr
: variable
;

compOp
: EQUAL
;

multOp
: MUL
| DIV
;

addOp
: ADD
| SUB
;
