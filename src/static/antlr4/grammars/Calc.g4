grammar Calc;
import Stats;

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

doStat
: '\\Do' endStat block '\\LpWhile ' boolExpr
;
