grammar Calc;
import Stats;

prog
: blocks
;

blocks
: block*
;

block
: (stat endStat)+
| blockStat endStat
;

blockStat
: ifStat
| forStat
| doStat
| whileStat
;

ifStat
: IF boolExpr endStat THEN blocks (ELSE blocks)? IFEND
;

forStat
: FOR numExpr ARROW variable TO numExpr (STEP numExpr)? endStat blocks NEXT
;

doStat
: DO endStat blocks LOOPWHILE boolExpr
;

whileStat
: WHILE boolExpr endStat blocks WHILEEND
;
