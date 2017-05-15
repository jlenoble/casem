grammar Calc;

prog
: block
;

block
: (stat endStat)*
;

stat
: printStat
| doStat
;

printStat
: STRING
;

doStat
: '\\Do ' endStat block '\\lpWhile ' boolExpr
;

endStat
: NEWLINE
| ':'
;

boolExpr
: numExpr compOp numExpr
;

numExpr
: number
;

compOp
: '='
;

number
: UINT
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
