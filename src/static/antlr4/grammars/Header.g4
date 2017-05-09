grammar Header;
import Operators;

header: headerBeg entry+ ;
entry: label ':' option ;

label : 'Format'
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

option : value NEWLINE
       | NEWLINE
       ;

value : ID
      | NUM
      | NUM ID
      | value ('-'|'+')+ value?
      ;

headerBeg : '%Header Record' NEWLINE;
