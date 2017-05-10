grammar Calc;
import Functions, Keywords, Regexps;

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
        | '(' evalExpr ')' # parens
        | func evalExpr # compute
        ;

printExpr : STRING # print
          | LOCATE evalExpr ',' evalExpr ',' evalExpr # printAt
          ;

assignExpr: evalExpr ARROW stoExpr;
stoExpr: variable;

additiveOp      : PLUS | MINUS;
multiplicativeOp: STAR | SLASH;

variable: ID;
number: NATNUM | PI | ZERO;

endStatement: NEWLINE;
