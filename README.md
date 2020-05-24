# FiszczLang

```
  _
 |_ o  _ _   _ _  |   _. ._   _
 |  | _> /_ (_ /_ |_ (_| | | (_|
                              _|
```

A new amateurish programming language

### Example fragment of code

```
int some_number 5;
real float_number 5.0;
PRINT some_number float_number;

READ some_number;
PRINT some_number;
PRINT some_number + 5 * 6 - 7 / 7;

some_number 10;
PRINT some_number;

int other_number 20;
some_number other_number;
PRINT some_number;

string some_text "some text";
PRINT some_text " and other text";

int[] array_of_numbers [1, 2, 3];
PRINT array_of_numbers[0];
array_of_numbers[0] 100;
PRINT array_of_numbers[0];

IF 44 > someNumber {
    PRINT "\nInside IF (greater than)";
}

IF 44 = someNumber {
    PRINT "\nInside IF (equal)";
}

IF 44 < someNumber {
    PRINT "\nInside IF (less than)";
}

int iterator 1;
WHILE iterator <= 10 {
    PRINT "\n" iterator;
    iterator iterator + 1;
}
```

### Concept of language

##### Types

-   `int` - integer numbers
-   `real` - float numbers
-   `string` - text
-   `type[]` - array of elements

##### Input/Output operations

-   `read` - read data from **stdin**
-   `print` - print data to **stdout**

##### Arithmetic Operators

-   `+` - plus
-   `-` - minus
-   `*` - multiplication
-   `/` - division
-   `()` - brackets

##### Comments

-   `// some comment` - single line comment
-   `/* some comment */` - multiline comment

##### Conditional instructions

-   `if condition { instructions }` - if condition

##### Loops

-   `while condition { instructions }` - while loop

##### Comparison operators (conditions)

-   `=` - equal
-   `>` - greater than
-   `<` - less than
-   `>=` - greater or equal
-   `<=` - less or equal
