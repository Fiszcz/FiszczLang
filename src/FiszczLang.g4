grammar FiszczLang;

// Grammar rules

program : (instruction | W)+ EOF ;

instruction : (new_operation | definition | print_instruction | print_instruction | read_instruction | if_instruction | while_instruction | assignment | array_element_assignment | return_instruction | call_operation) W? ';' ;

parameter : type W VARIABLE_NAME;

definition : (single_element_definition | array_definition | dynamic_definition) ;

single_element_definition : (int_definition | real_definition | string_definition) ;
array_definition : (int_array_definition | real_array_definition | string_array_definition) ;

int_definition : 'int' W VARIABLE_NAME (W? '=' W? arithmetic_expression)? ;
real_definition : 'real' W VARIABLE_NAME (W? '=' W? arithmetic_expression)? ;
string_definition : 'string' W VARIABLE_NAME (W? '=' W? (string | VARIABLE_NAME | element_of_array))? ;

dynamic_definition : 'val' W VARIABLE_NAME (W? '=' W? arithmetic_expression)? ;

int_array_definition : 'int[]' W VARIABLE_NAME W? '=' W? '[' W? INTEGER_NUMBER (W? ',' W? INTEGER_NUMBER)* W?']' ;
real_array_definition : 'real[]' W VARIABLE_NAME W? '=' W? '['W? (INTEGER_NUMBER | REAL_NUMBER) (W? ',' W? (INTEGER_NUMBER | REAL_NUMBER))* W?']' ;
string_array_definition : 'string[]' W VARIABLE_NAME W? '=' W? '['W? string (W? ',' W? string)* W?']' ;

new_operation : type W OPERATION_STRING W VARIABLE_NAME W? ':' (W? parameter?) (',' W? parameter)* W? '{' (instruction | W)+ '}' ;

element_number : '[' value ']' ;
element_of_array : VARIABLE_NAME element_number ;

print_instruction : ('print' | 'PRINT') W (value | W)* ;
read_instruction : ('read' | 'READ') W (VARIABLE_NAME | element_of_array) ;

while_instruction : ('while' | 'WHILE') W condition W? '{' (instruction | W)+ '}';

if_instruction : ('if' | 'IF') W condition W? '{' (instruction | W)+ '}';

return_instruction : '#' W? value;

condition : value W? (EQUAL | LESS_OR_EQUAL | GREATER_OR_EQUAL | GREATER_THAN | LESS_THAN) W? value;

call_operation : VARIABLE_NAME '<' value? (W? ',' W? value)* W? '>';

arithmetic_expression : '(' arithmetic_expression ')'
                      | arithmetic_expression W? ASTERISK W? arithmetic_expression
                      | arithmetic_expression W? SLASH W? arithmetic_expression
                      | arithmetic_expression W? PLUS W? arithmetic_expression
                      | arithmetic_expression W? MINUS W? arithmetic_expression
                      | call_operation
                      | VARIABLE_NAME
                      | element_of_array
                      | INTEGER_NUMBER
                      | REAL_NUMBER
                      ;

assignment :  VARIABLE_NAME W? '=' W?  value ;
array_element_assignment : element_of_array W? '=' W?  value ;

value : (call_operation | VARIABLE_NAME | INTEGER_NUMBER | REAL_NUMBER | string | element_of_array | arithmetic_expression) ;

type : ('int' | 'real' | 'string' | 'int[]' | 'real[]' | 'string[]');

string : TEXT ;

// Lexical rules

fragment LETTER : [a-zA-Z] ;
fragment DIGIT : [0-9] ;

fragment KEYWORDS : ('int' | 'real' | 'string' | 'print' | 'PRINT' | 'read' | 'READ' | 'if' | 'IF' | 'while' | 'WHILE' | 'operation' | 'OPERATION') ;

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

EQUAL : '=' ;
LESS_OR_EQUAL : '<=';
GREATER_OR_EQUAL : '>=';
GREATER_THAN : '>' ;
LESS_THAN : '<' ;

TYPE : ('int' | 'real' | 'string' | 'int[]' | 'real[]' | 'string[]');

OPERATION_STRING : ('operation' | 'OPERATION') ;

VARIABLE_NAME : ((LETTER | DIGIT | '_')* LETTER+ (LETTER | DIGIT | '_')*) ;

TEXT : '"' ~["]+? '"';

//WHITESPACE : (' ' | '\t' | '\n' | '\r') -> skip ;
W : (' ' | '\t' | '\n' | '\r')+;
