grammar Calc;
import Functions, Operators, Keywords, Regexps;

prog
: block*
;

block
: (stat endStat)+
;

nonGreedyBlock
: (stat endStat)+?
;

stat
: assignStat
| printStat
| ifStat
| implyStat
| routineStat
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
| endProg
;

routineStat
: labelStat endStat nonGreedyBlock jumpStat
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
