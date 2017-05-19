grammar Calc;
import CommonLexerRules;

prog
: block
;

block
: (stat endStat)*
;

stat
: assignStat
| printStat
| readStat
| doStat
;

assignStat
: numExpr '\\->' variable
;

printStat
: STRING
;

readStat
: '\\Getkey' '\\->' variable
;

doStat
: '\\Do' endStat block '\\LpWhile ' boolExpr
;

endStat
: NEWLINE
| ':'
;

boolExpr
: numExpr compOp numExpr
;

numExpr
: variable
| number
;

compOp
: '='
;

variable
: ID
;

number
: UINT
;
