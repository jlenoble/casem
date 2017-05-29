grammar Files;
import Keywords, CommonLexerRules;

header
: startHeader attributes endHeader
;

attributes
: (
    headerAttr COLON headerValue NEWLINE
  |
    'File Name' COLON fileName NEWLINE
  )+
;

headerAttr
: ID (WS ID)*
;

headerValue
: ID
| UINT
;

fileName
: ID
| UINT ID
| fileName (SUB|ADD)+ fileName
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
