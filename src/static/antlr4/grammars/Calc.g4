grammar Calc;

prog : header ;

header      : headerStart headerEntry+ ;
headerStart : HEADER_RECORD NEWLINE ;
headerEntry : entryName ':' entryExpr ;
entryName   : 'Format'
            | 'Communication SW'
            | 'Data Type'
            | 'Capacity'
            | 'File Name'
            | 'Group Name'
            | 'Password'
            | 'Option1'
            | 'Option2'
            | 'Option3'
            | 'Option4'
            ;
entryExpr   : ENTRY_VALUE NEWLINE
            | NEWLINE
            ;

HEADER_RECORD : '%Header Record' ;
ENTRY_VALUE   : [a-zA-Z0-9]+ ;
NEWLINE       : '\r'? '\n' ;
