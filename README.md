# FiszczLang
A new amateurish programming language 

### Example fragment of code

```
int some_number 5;
real float_number 5.0;
print some_number float_number;

read some_number;
print some_number;
print some_number + 5 * 6 - 7 / 7;

some_number 10;
print some_number;

int other_number 20;
some_number other_number;
print some_number;

string some_text "some text";
print some_text " and other text";

int[] array_of_numbers [1, 2, 3];
print array_of_numbers[0];
array_of_numbers[0] 100;
print array_of_numbers[0];
```

### Concept of language

##### Types

- ``int`` - integer numbers
- ``real`` - float numbers
- ``string`` - text
- ``type[]`` - array of elements

##### Input/Output operations

- ``read`` - read data from **stdin**
- ``print`` - print data to **stdout**

##### Arithmetic Operators

- ``+`` - plus
- ``-`` - minus
- ``*`` - multiplication
- ``/`` - division

### Lexical and grammatical rules

##### Grammar

```
instruction : (definition | print_instruction) ';' ;

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

print_instruction : ('print' | 'PRINT') W value* ;
read_instruction : ('read' | 'READ') W (VARIABLE_NAME | element_of_array) ;

arithmetic_expression : '(' arithmetic_expression ')'
                      | multiplication_operation
                      | division_operation
                      | subtraction_operation
                      | addition_operation
                      | VARIABLE_NAME
                      | element_of_array
                      | INTEGER_NUMBER
                      | REAL_NUMBER
                      ;
multiplication_operation : arithmetic_expression '*' arithmetic_expression ;
division_operation : arithmetic_expression '/' arithmetic_expression ;
subtraction_operation : arithmetic_expression '-' arithmetic_expression ;
addition_operation : arithmetic_expression '+' arithmetic_expression ;

assignment :  VARIABLE_NAME W value ;
array_element_assignment : element_of_array  value ;

value : (VARIABLE_NAME | INTEGER_NUMBER | REAL_NUMBER | string | arithmetic_expression | element_of_array) ;

string : '"' TEXT '"' ;
```

##### Lexical rules

```
fragment LETTER : [a-zA-Z] ;
fragment DIGIT : [0-9] ;

fragment KEYWORDS : ('int' | 'real' | 'string' | 'print' | 'PRINT' | 'read' | 'READ') ;

INTEGER_NUMBER : '-'? DIGIT+ ;
REAL_NUMBER : '-'? DIGIT+ ([.] DIGIT+)? ;

VARIABLE_NAME : (?!KEYWORDS) ((LETTER | DIGIT | '_')* LETTER+ (LETTER | DIGIT | '_')*) ;

TEXT : [^"]*

WHITESPACE : (' ' | '\t' | '\n') -> skip ;
W : WHITESPACE+ ;
````
