grammar Exprs;
import DataStructs;

boolExpr
: numExpr compOp numExpr
;

numExpr
: variable
| number
;

compOp
: EQUAL
;
