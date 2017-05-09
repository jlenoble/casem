lexer grammar Commands;
import CommonLexerRules;

GOTO    : '\\Goto' ;
LBL     : '\\Lbl' ;
PROG    : '\\Prog' ;
RETURN  : '\\Return' ;
STOP    : '\\Stop' ;

IF      : '\\If' ;
THEN    : '\\Then' ;
ELSE    : '\\Else' ;
IFEND   : '\\IfEnd' ;

FOR     : '\\For' ;
TO      : '\\To' ;
NEXT    : '\\Next' ;

DO      : '\\Do' ;
LPWHILE : '\\LpWhile' ;
GETKEY  : '\\Getkey' ;

LOCATE  : '\\Locate' ;
CLRTXT  : '\\ClrText' ;
DISP    : '\\Disp' ;

NORM    : '\\Norm' ;
GRA     : '\\Gra' ;
FIX     : '\\Fix' ;

CLRGRPH     : '\\ClrGraph' ;
VIEWWINDOW  : '\\ViewWindow' ;
AXESON      : '\\AxesOn' ;
AXESOFF     : '\\AxesOff' ;
FLINE       : '\\F-Line' ;
PLOTON      : '\\PlotOn' ;

MATR    : '\\Mat ' ;
LIST    : '\\List ' ;
LISTMAT : '\\List->Mat' ;
SEQ     : '\\Seq' ;
PI      : '\\Pi' ;
ANS     : '\\Ans' ;

ABS     : '\\Abs ' ;
ACOS    : '\\acos ' ;
ASIN    : '\\asin ' ;
ATAN    : '\\atan ' ;
COS     : '\\cos ' ;
INT     : '\\Int ' ;
SIN     : '\\sin ' ;
SQRT    : '\\sqrt' ;
TAN     : '\\tan ' ;

EXPNT   : '\\10^x' ;
FACT    : '!' ;
POW     : ('^'|'\\x^') ;
