grammar Stats;
import Exprs;

stat
: assignStat
| printStat
| readStat
| implyStat
;

assignStat
: numExpr ARROW stoExpr
| matrixExpr ARROW matrixStoExpr
;

printStat
: STRING                                                # print
| LOCATE numExpr COMMA numExpr COMMA (STRING|numExpr)   # printAt
;

readStat
: GETKEY ARROW stoExpr
;

implyStat
: boolExpr FATARROW stat
;

endStat
: NEWLINE
| COLON
;
