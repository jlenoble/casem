grammar Calc;
import Keywords, Regexps;

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
