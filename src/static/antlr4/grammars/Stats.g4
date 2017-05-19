grammar Stats;
import Exprs;

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

endStat
: NEWLINE
| ':'
;
