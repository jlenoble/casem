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
: STRING                                                # print
| LOCATE numExpr COMMA numExpr COMMA (STRING|numExpr)   # printAt
;

readStat
: GETKEY ARROW stoExpr
;

endStat
: NEWLINE
| COLON
;
