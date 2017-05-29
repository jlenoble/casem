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
| listElementExpr             # listElement
| variable                    # evaluate
| constant                    # constEvaluate
| number                      # parse
;

matrixExpr
: matrixExpr addOp matrixExpr   # addMatrices
| matrix                        # evaluateMatrix
| matrixInitializerExpr         # evaluateMatrixInitializerExpr
;

listExpr
: listExpr addOp listExpr       # addLists
| list                          # evaluateList
| listInitializerExpr           # evaluateListInitializerExpr
;

stoExpr
: matrixElementExpr
| variable
;

matrixStoExpr
: matrix
;

listStoExpr
: list
;

matrixInitializerExpr
: OBRA matrixRowExpr+ CBRA
;

listInitializerExpr
: OCUR numExpr (COMMA numExpr)* CCUR
;

matrixRowExpr
: OBRA numExpr (COMMA numExpr)* CBRA
;

matrixElementExpr
: matrix OBRA numExpr COMMA numExpr CBRA
;

listElementExpr
: list OBRA numExpr CBRA
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
