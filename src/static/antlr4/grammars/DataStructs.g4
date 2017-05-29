grammar DataStructs;
import CommonLexerRules, Keywords;

func
: SQRT
| COS   | SIN   | TAN
| ACOS  | ASIN  | ATAN
| ABS   | INT
;

matrix
: MATRIX ID
;

variable
: ID
;

constant
: PI
;

number
: UINT
| DOT UINT
| UINT DOT UINT
;
