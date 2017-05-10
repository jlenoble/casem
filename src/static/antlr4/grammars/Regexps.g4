lexer grammar Regexps;

ID      : [A-Z];
NATNUM  : [1-9][0-9]*;
NEWLINE : '\r'? '\n';
MINUS   : '-';
PLUS    : '+';
SLASH   : '/';
STAR    : '*';
STRING  : '"' .*? '"';
ZERO    : '0';
