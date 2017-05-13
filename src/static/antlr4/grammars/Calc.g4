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
: evalExpr ARROW stoExpr          # setStoExpr
| matrixInitializer ARROW matrix  # setMatrix
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
| variable                  # evaluate
| number                    # parseFloat
;

stoExpr
: matrixElement
| variable
;

boolExpr
: evalExpr compOp evalExpr
;

matrixElement
: MATRIX ID '[' evalExpr ']' '[' evalExpr ']'
;

matrixInitializer
: '[' matrixRow (',' matrixRow)* ']'
;

matrixRow
: '[' evalExpr (',' evalExpr)* ']'
;
