grammar Common;
import Functions, Operators, Keywords, Regexps;

matrix
: MATRIX ID
;

variable
: ID
;

lbl
: ID
;

number
: NATNUM
| PI
| ZERO
;

endStat
: NEWLINE+
| ':'
;

endProg
: RETURN
;
