grammar Calc;
import Exprs;

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
