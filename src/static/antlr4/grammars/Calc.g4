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
: DO endStat block LOOPWHILE boolExpr
;
