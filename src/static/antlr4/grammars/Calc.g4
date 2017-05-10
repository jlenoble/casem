grammar Calc;
import Functions, Operators, Keywords, Regexps;

prog: statement+;
statement: expr endStatement;
expr: evalExpr
    | printExpr
    | assignExpr
    ;

evalExpr: '-' evalExpr # negate
        | evalExpr multOp evalExpr # multiply
        | evalExpr addOp evalExpr # add
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

variable: ID;
number: NATNUM | PI | ZERO;

endStatement: NEWLINE;
