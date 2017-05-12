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
;

headerValue
: TEXT
| NATNUM
| ZERO
|
;

fileName
: headerValue '-'* TEXT
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
