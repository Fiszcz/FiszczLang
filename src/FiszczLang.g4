grammar FiszczLang;

// Grammar rules

program : (instruction | W)+ EOF ;

instruction : (definition | print_instruction | print_instruction | read_instruction | assignment | array_element_assignment) ';' ;

definition : (single_element_definition | array_definition) ;

single_element_definition : (int_definition | real_definition | string_definition) ;
array_definition : (int_array_definition | real_array_definition | string_array_definition) ;

int_definition : 'int' W VARIABLE_NAME W arithmetic_expression ;
real_definition : 'real' W VARIABLE_NAME W arithmetic_expression ;
string_definition : 'string' W VARIABLE_NAME W (string | VARIABLE_NAME | element_of_array) ;

int_array_definition : 'int[]' VARIABLE_NAME '[' INTEGER_NUMBER (',' INTEGER_NUMBER)* ']' ;
real_array_definition : 'real[]' VARIABLE_NAME '[' (INTEGER_NUMBER | REAL_NUMBER) (',' (INTEGER_NUMBER | REAL_NUMBER))* ']' ;
string_array_definition : 'string[]' VARIABLE_NAME '[' string (',' string)* ']' ;

element_number : '[' value ']' ;
element_of_array : VARIABLE_NAME element_number ;

print_instruction : ('print' | 'PRINT') W (value | W)* ;
read_instruction : ('read' | 'READ') W (VARIABLE_NAME | element_of_array) ;

arithmetic_expression : '(' arithmetic_expression ')'
                      | arithmetic_expression W? ASTERISK W? arithmetic_expression
                      | arithmetic_expression W? SLASH W? arithmetic_expression
                      | arithmetic_expression W? PLUS W? arithmetic_expression
                      | arithmetic_expression W? MINUS W? arithmetic_expression
                      | VARIABLE_NAME
                      | element_of_array
                      | INTEGER_NUMBER
                      | REAL_NUMBER
                      ;

assignment :  VARIABLE_NAME W value ;
array_element_assignment : element_of_array  value ;

value : (VARIABLE_NAME | INTEGER_NUMBER | REAL_NUMBER | string | element_of_array | arithmetic_expression) ;

string : TEXT ;

// Lexical rules

fragment LETTER : [a-zA-Z] ;
fragment DIGIT : [0-9] ;

fragment KEYWORDS : ('int' | 'real' | 'string' | 'print' | 'PRINT' | 'read' | 'READ') ;

COMMENT
    :   ( '//' ~[\r\n]* '\r'? '\n'
        | '/*' .*? '*/'
        ) -> skip
    ;

INTEGER_NUMBER : '-'? DIGIT+ ;
REAL_NUMBER : '-'? DIGIT+ ([.] DIGIT+)? ;

ASTERISK : '*' ;
SLASH : '/' ;
PLUS : '+' ;
MINUS : '-' ;

VARIABLE_NAME : ((LETTER | DIGIT | '_')* LETTER+ (LETTER | DIGIT | '_')*) ;

TEXT : '"' ~["]+? '"';

//WHITESPACE : (' ' | '\t' | '\n' | '\r') -> skip ;
W : (' ' | '\t' | '\n' | '\r')+;