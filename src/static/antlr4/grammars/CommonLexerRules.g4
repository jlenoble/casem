lexer grammar CommonLexerRules;

ID
: [a-zA-Z][a-zA-Z0-9]*
;

UINT
: ('0'|[1-9][0-9]*)
;

STRING
: '"' .*? '"'
;

NEWLINE
: '\r'? '\n'
;
