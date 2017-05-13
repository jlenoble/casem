grammar Calc;
import File, Common;

prog
: block*
| block? file+
;

file
: header block* endFile
;

block
: (
    stat endStat
    | dispExpr DISP
    | boolExpr FATARROW dispExpr DISP
    | NEWLINE+
  )+
;

stat
: assignStat
| printStat
| confStat
| readStat
| graphStat
| ifStat
| forStat
| doStat
| implyStat
| jumpStat
| labelStat
| LISTMAT '(' list (',' list)* ')'
;

assignStat
: evalExpr ARROW stoExpr
;

printStat
: STRING                                              # print
| LOCATE evalExpr ',' evalExpr ',' (evalExpr|STRING)  # printAt
| CLRTXT                                              # clearText
;

confStat
: NORM
| FIX (NATNUM|ZERO)
| GRA
;

readStat
: STRING '?' ARROW stoExpr
| GETKEY ARROW ID
;

graphStat
: AXESOFF
| AXESON
| CLRGRPH
| VIEWWINDOW evalExpr ',' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr ',' evalExpr
| FLINE evalExpr ',' evalExpr ',' evalExpr ',' evalExpr
| PLOTON evalExpr ',' evalExpr
;

ifStat
: IF boolExpr endStat THEN block (ELSE block)? IFEND
;

forStat
: FOR assignStat TO evalExpr endStat block NEXT
;

doStat
: DO endStat block LPWHILE boolExpr
;

implyStat
: boolExpr FATARROW stat
;

jumpStat
: GOTO lbl
| PROG STRING
| endProg
| STOP
;

labelStat
: LBL lbl
;

evalExpr
: '(' evalExpr ')'                      # parens
| '-' evalExpr                          # negate
| func evalExpr                         # compute
| evalExpr '!'                          # factorial
| evalExpr powOp evalExpr               # power
| EXPNT evalExpr                        # exponent
| evalExpr multOp evalExpr              # multiply
| evalExpr addOp evalExpr               # add
| matrixElement                         # evaluateMatrixElement
| matrix                                # evaluateMatrix
| matrixInitializer                     # evaluateMatrixInitializer
| listElement                           # evaluateListElement
| list                                  # evaluateList
| listInitializer                       # evaluateListInitializer
| SEQ '(' evalExpr (',' evalExpr)+ ')'  # evaluateSeq
| variable                              # evaluate
| number                                # parseFloat
;

dispExpr
: evalExpr
| STRING
| matrix
;

stoExpr
: matrixElement
| matrix
| listElement
| list
| variable
;

boolExpr
: evalExpr compOp evalExpr  # compare
| GETKEY compOp evalExpr    # getKey
| boolExpr boolOp boolExpr  # reduceBoolExpr
;

matrixElement
: MATRIX ID '[' evalExpr ',' evalExpr ']'
;

matrixInitializer
: '[' matrixRow+ ']'
;

matrixRow
: '[' evalExpr (',' evalExpr)* ']'
;

listElement
: LIST NATNUM '[' evalExpr ']'
;

listInitializer
: '{' evalExpr (',' evalExpr)* '}'
;
