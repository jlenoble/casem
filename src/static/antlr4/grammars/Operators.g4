grammar Operators;

addOp     : ADD | SUB;
multOp    : MUL | DIV;
compOp    : EQ  | NE | GT | GE | LT | LE;
boolOP    : AND | OR;

ADD       : '+' ;
SUB       : '-' ;
MUL       : '*' ;
DIV       : '/' ;

EQ        : '=' ;
NE        : '\\<>' ;
GT        : '>' ;
GE        : '\\>=' ;
LT        : '<' ;
LE        : '\\<=' ;

AND       : '\\ And ' ;
OR        : '\\ Or ' ;

ARROW     : '\\->' ;
FATARROW  : '\\=>' ;
