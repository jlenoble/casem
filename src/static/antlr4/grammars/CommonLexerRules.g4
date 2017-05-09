lexer grammar CommonLexerRules;

ID        : ([A-Z][0-9A-Z]*|'\\r'|'\\theta') ;
NUM       : ('0'|[1-9][0-9]*('.'[0-9]+)?|'.'[0-9]+) ;
STRING    : '"' .*? '"' ;
QUESMARK  : '?' ;
NEWLINE   : '\r'? '\n' ;
