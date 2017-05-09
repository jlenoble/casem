grammar Calc;
import Header;

prog  : (file NEWLINE?)+ ;
file  : header data fileEnd;

data  : dataBeg cmd+ ;
cmd   : expr cmdEnd
      | printExpr DISP
      | boolExpr FATARROW printExpr DISP
      ;
expr  : assignExpr
      | printExpr
      | graphExpr
      | flowExpr
      | readExpr
      | confExpr
      | boolExpr FATARROW expr
      | ifExpr
      | forExpr
      | doExpr
      |
      ;

assignExpr  : evalExpr ARROW storExpr
            | matr ARROW matr
            | SEQ '(' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr ')' ARROW list
            ;
boolExpr    : evalExpr boolOp evalExpr
            | boolExpr AND boolExpr
            | boolExpr OR boolExpr
            | GETKEY boolOp evalExpr
            ;
confExpr    : NORM
            | FIX ' ' NUM
            | GRA
            ;
doExpr      : DO cmdEnd cmd+ LPWHILE ' ' boolExpr ;
evalExpr    : evalExpr FACT
            | evalExpr POW evalExpr
            | evalExpr op=(MUL|DIV) evalExpr
            | evalExpr op=(ADD|SUB) evalExpr
            | valueExpr
            | '(' evalExpr ')'
            | '-' valueExpr
            | '-' '(' evalExpr ')'
            | func '(' evalExpr ')'
            | func valueExpr
            | EXPNT NUM
            | LISTMAT '(' list (',' list)* ')'
            ;
flowExpr    : PROG ' ' STRING
            | RETURN
            | LBL ' ' lbl
            | GOTO lbl
            | STOP
            ;
forExpr     : FOR ' ' assignExpr ' ' TO ' ' evalExpr cmdEnd cmd+ NEXT ;
graphExpr   : AXESOFF
            | AXESON
            | CLRGRPH
            | VIEWWINDOW ' ' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr
            | FLINE ' ' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr
            | PLOTON ' ' evalExpr ',' evalExpr
            ;
ifExpr      : IF ' ' boolExpr cmdEnd THEN ' ' cmd+ (ELSE ' ' cmd+)? IFEND ;
printExpr   : STRING
            | CLRTXT
            | LOCATE ' ' evalExpr ',' evalExpr ',' evalExpr
            | LOCATE ' ' evalExpr ',' evalExpr ',' STRING
            | evalExpr
            | matr
            ;
readExpr    : STRING QUESMARK ARROW storExpr
            | GETKEY ARROW ID
            ;
storExpr    : ID
            | matrElt
            ;
valueExpr   : ID
            | NUM
            | PI
            | matrElt
            | ANS
            ;

lbl     : ID
        | NUM
        ;
func    : ABS
        | ACOS
        | ASIN
        | ATAN
        | COS
        | INT
        | SIN
        | SQRT
        | TAN
        ;
matrElt : matr '[' evalExpr ',' evalExpr ']' ;
matr    : MATR ID
        | MATR ANS
        ;
list    : LIST NUM ;

cmdEnd  : ':'
        | NEWLINE
        ;
dataBeg : '%Data Record' NEWLINE;
fileEnd : '%End' NEWLINE;
