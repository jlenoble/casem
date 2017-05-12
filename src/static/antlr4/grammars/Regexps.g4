lexer grammar Regexps;

ID      : [A-Z];
NATNUM  : [1-9][0-9]*;
TEXT    : [a-zA-Z ]+;
NEWLINE : '\r'? '\n';
STRING  : '"' .*? '"';
ZERO    : '0';
