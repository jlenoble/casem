grammar DataStructs;
import CommonLexerRules, Keywords;

variable
: ID
;

number
: UINT
| DOT UINT
| UINT DOT UINT
;
