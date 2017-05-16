grammar Calc;

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

ID
: [a-zA-Z][a-zA-Z0-9]*
;

UINT
: ('0'|[1-9][0-9]*)
;

STRING
: '"' .*? '"'
;

NEWLINE
: '\r'? '\n'
;
