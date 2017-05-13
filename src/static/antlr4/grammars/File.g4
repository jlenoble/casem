grammar File;
import Regexps;

header
: startHeader attributes endHeader
;

attributes
: (
    headerAttr ':' headerValue NEWLINE
  |
    'File Name' ':' fileName NEWLINE
  )+
;

headerAttr
: TEXT
| TEXT NATNUM
| TEXT WS TEXT
;

headerValue
: TEXT
| NATNUM
| ZERO
|
;

fileName
: (TEXT|ID|NATNUM|ZERO)+
| fileName ('-'|'+')+ fileName?
;

startHeader
: '%Header Record' NEWLINE
;

endHeader
: '%Data Record' NEWLINE
;

endFile
: '%End' NEWLINE+
;
