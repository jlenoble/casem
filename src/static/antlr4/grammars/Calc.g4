grammar Calc;
import File, Common;

prog
: block*
| block? file+
;

file
: header block* endFile
;

block
: (stat endStat)+
;

stat
: assignStat
| printStat
| ifStat
| implyStat
| jumpStat
| labelStat
;

assignStat
: evalExpr ARROW stoExpr
;

printStat
: STRING                                              # print
| LOCATE evalExpr ',' evalExpr ',' (evalExpr|STRING)  # printAt
;

ifStat
: IF boolExpr endStat THEN block (ELSE block)? IFEND
;

implyStat
: boolExpr FATARROW stat
;

jumpStat
: GOTO lbl
| PROG STRING
| endProg
;

labelStat
: LBL lbl
;

evalExpr
: '(' evalExpr ')'          # parens
| '-' evalExpr              # negate
| func evalExpr             # compute
| evalExpr multOp evalExpr  # multiply
| evalExpr addOp evalExpr   # add
| matrixElement             # evaluateMatrixElement
| matrix                    # evaluateMatrix
| matrixInitializer         # evaluateMatrixInitializer
| variable                  # evaluate
| number                    # parseFloat
;

stoExpr
: matrixElement
| matrix
| variable
;

boolExpr
: evalExpr compOp evalExpr  # compare
| boolExpr boolOp boolExpr  # reduceBoolExpr
;

matrixElement
: MATRIX ID '[' evalExpr ',' evalExpr ']'
;

matrixInitializer
: '[' matrixRow+ ']'
;

matrixRow
: '[' evalExpr (',' evalExpr)* ']'
;
