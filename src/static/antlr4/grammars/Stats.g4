grammar Stats;
import Exprs;

stat
: assignStat
| printStat
| readStat
;

assignStat
: numExpr ARROW variable
;

printStat
: STRING
;

readStat
: GETKEY ARROW variable
;

endStat
: NEWLINE
| COLON
;
