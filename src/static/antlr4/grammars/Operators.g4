grammar Operators;

addOp     : ADD | SUB;
multOp    : MUL | DIV;
powOp     : POW;
compOp    : EQ  | NE | GT | GE | LT | LE;
boolOp    : AND | OR;

ADD       : '+' ;
SUB       : '-' ;
MUL       : '*' ;
DIV       : '/' ;
POW       : ('^'|'\\x^');

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
