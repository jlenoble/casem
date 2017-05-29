grammar Exprs;
import DataStructs;

boolExpr
: numExpr compOp numExpr      # compare
| boolExpr logicOp boolExpr   # reduceBoolExpr
;

numExpr
: OPAR numExpr CPAR           # parens
| SUB numExpr                 # negate
| func numExpr                # compute
| numExpr vectorExpr          # scalarMult
| numExpr multOp numExpr      # multiply
| numExpr addOp numExpr       # add
| matrixElementExpr           # matrixElement
| variable                    # evaluate
| constant                    # constEvaluate
| number                      # parse
;

matrixExpr
: matrixExpr addOp matrixExpr   # addMatrices
| matrix                        # evaluateMatrix
| matrixInitializerExpr         # evaluateMatrixInitializerExpr
;

stoExpr
: matrixElementExpr
| variable
;

matrixStoExpr
: matrix
;

matrixInitializerExpr
: OBRA matrixRowExpr+ CBRA
;

matrixRowExpr
: OBRA numExpr (COMMA numExpr)* CBRA
;

matrixElementExpr
: matrix OBRA numExpr COMMA numExpr CBRA
;

vectorExpr
: OPAR numExpr CPAR           # vParens
| func numExpr                # vCompute
| variable                    # vEvaluate
| constant                    # vConstEvaluate
;

compOp
: EQ
| NE
| GT
| GE
| LT
| LE
;

logicOp
: AND
| OR
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
