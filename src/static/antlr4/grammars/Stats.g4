grammar Stats;
import Exprs;

stat
: assignStat
| printStat
| readStat
| implyStat
| jumpStat
| labelStat
;

assignStat
: numExpr ARROW stoExpr
| matrixExpr ARROW matrixStoExpr
| listExpr ARROW listStoExpr
;

printStat
: STRING                                                # print
| LOCATE numExpr COMMA numExpr COMMA (STRING|numExpr)   # printAt
| CLRTEXT                                               # clearText
;

readStat
: GETKEY ARROW stoExpr
;

implyStat
: boolExpr FATARROW stat
;

jumpStat
: GOTO ID
| PROG STRING
| endProg
;

labelStat
: LBL ID
;

endStat
: NEWLINE
| COLON
;

endProg
: RETURN
;
