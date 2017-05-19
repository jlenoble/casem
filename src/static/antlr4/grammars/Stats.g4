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
| LOCATE numExpr COMMA numExpr COMMA numExpr
;

readStat
: GETKEY ARROW stoExpr
;

endStat
: NEWLINE
| COLON
;
