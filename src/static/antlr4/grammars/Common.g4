grammar Common;
import Functions, Operators, Keywords, Regexps;

matrix
: MATRIX (ID|ANS)
;

list
: LIST NATNUM
;

variable
: ID
;

lbl
: ID
| NATNUM
;

number
: NATNUM
| PI
| ZERO
| number '.' ZERO* number
| '.' ZERO* number
;

endStat
: NEWLINE+
| ':'
;

endProg
: RETURN
;
