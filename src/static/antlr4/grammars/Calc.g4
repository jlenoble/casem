grammar Calc;

prog: statement+;
statement: expr endStatement;
expr: evalExpr
    | printExpr
    | assignExpr
    ;

evalExpr: evalExpr additiveOp evalExpr # add
        | variable # eval
        | number # parseFloat
        ;

printExpr : STRING # print
          | LOCATE evalExpr ',' evalExpr ',' evalExpr # printAt
          ;

assignExpr: evalExpr ARROW stoExpr;
stoExpr: variable;

additiveOp: PLUS | MINUS;

variable: ID;
number: NATNUM;

endStatement: NEWLINE;

ARROW   : '\\->';
LOCATE  : '\\Locate ';
MINUS   : '-';
PLUS    : '+';

STRING  : '"' .*? '"';
ID      : [A-Z];
NATNUM  : [1-9][0-9]*;
NEWLINE : '\r'? '\n';
