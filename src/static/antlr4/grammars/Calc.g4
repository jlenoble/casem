grammar Calc;
import Functions, Operators, Keywords, Regexps;

prog
: block*
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
| routineStat
;

assignStat
: evalExpr ARROW stoExpr
;

printStat
: STRING                                    # print
| LOCATE evalExpr ',' evalExpr ',' evalExpr # printAt
;

ifStat
: IF boolExpr endStat THEN block (ELSE block)? IFEND
;

implyStat
: boolExpr FATARROW stat
;

jumpStat
: GOTO lbl
| endProg
;

routineStat
: LBL lbl endStat block jumpStat
;

evalExpr
: '(' evalExpr ')'          # parens
| '-' evalExpr              # negate
| func evalExpr             # compute
| evalExpr multOp evalExpr  # multiply
| evalExpr addOp evalExpr   # add
| variable                  # evaluate
| number                    # parseFloat
;

stoExpr
: variable
;

boolExpr
: evalExpr compOp evalExpr
;

variable
: ID
;

lbl
: ID
;

number
: NATNUM
| PI
| ZERO
;

endStat
: NEWLINE
| ':'
;

endProg
: RETURN
;
