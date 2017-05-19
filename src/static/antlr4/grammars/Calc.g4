grammar Calc;
import Exprs;

prog
: block*
;

block
: (stat endStat)+
| blockStat endStat
;

blockStat
: doStat
;

stat
: assignStat
| printStat
| readStat
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
