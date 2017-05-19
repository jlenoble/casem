grammar Stats;
import Exprs;

stat
: assignStat
| printStat
| readStat
;

assignStat
: numExpr ARROW stoExpr
;

printStat
: STRING
;

readStat
: GETKEY ARROW stoExpr
;

endStat
: NEWLINE
| COLON
;
