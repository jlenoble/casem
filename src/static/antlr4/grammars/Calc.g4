grammar Calc;
import Functions, Operators, Keywords, Regexps;

prog
: block*
;

block
: stat+
;

stat
: assignStat endStat
| printStat endStat
| ifStat endStat
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

number
: NATNUM
| PI
| ZERO
;

endStat
: NEWLINE
| ':'
;
