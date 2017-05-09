grammar Operators;
import Commands;

boolOp  : EQ
        | NE
        | GT
        | GE
        | LT
        | LE
        ;

ADD : '+' ;
SUB : '-' ;
MUL : '*' ;
DIV : '/' ;

EQ : '=' ;
NE : '\\<>' ;
GT : '>' ;
GE : '\\>=' ;
LT : '<' ;
LE : '\\<=' ;

AND : '\\ And ' ;
OR  : '\\ Or ' ;

ARROW    : '\\->' ;
FATARROW : '\\=>' ;
