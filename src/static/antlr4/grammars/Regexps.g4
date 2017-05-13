lexer grammar Regexps;

ID      : ([A-Z]|'\\r'|'\\theta');
NATNUM  : [1-9][0-9]*;
TEXT    : [a-zA-Z]+;
WS      : [ \t]+;
NEWLINE : '\r'? '\n';
STRING  : '"' .*? '"';
ZERO    : '0';
