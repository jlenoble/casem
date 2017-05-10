grammar Calc;
import Keywords, Regexps;

prog: statement+;
statement: expr endStatement;
expr: evalExpr
    | printExpr
    | assignExpr
    ;

evalExpr: MINUS evalExpr # negate
        | evalExpr multiplicativeOp evalExpr # multiply
        | evalExpr additiveOp evalExpr # add
        | variable # evaluate
        | number # parseFloat
        ;

printExpr : STRING # print
          | LOCATE evalExpr ',' evalExpr ',' evalExpr # printAt
          ;

assignExpr: evalExpr ARROW stoExpr;
stoExpr: variable;

additiveOp      : PLUS | MINUS;
multiplicativeOp: STAR | SLASH;

variable: ID;
number: NATNUM;

endStatement: NEWLINE;
