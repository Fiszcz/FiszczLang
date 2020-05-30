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
int OPERATION POW: int number, int power {
    int base = number;
    WHILE power > 1 {
        number = base * number;
        power = power - 1;
    };
    # number;
};

int OPERATION printGlobalVariable: {
    PRINT globalVariable;
};

// Example of FiszczLang
int someNumber = 5;
real floatNumber = 5.0;
PRINT someNumber floatNumber;

READ someNumber;
PRINT someNumber;
PRINT someNumber + 5 * (6 - 7) / 7;
PRINT 1.5 / 3;

int someNewNumber = 10 + 5;
PRINT someNewNumber;

string someText = "some text";
PRINT someText " and other text";
PRINT "New line\nAnd we are in new line";
READ someText;
PRINT someText;

int[] arrayOfNumbers = [1, 2, 3];
PRINT arrayOfNumbers[0];
arrayOfNumbers[0] = 100;
PRINT arrayOfNumbers[0];

string[] arrayOfStrings = ["one", "two", "three"];
PRINT arrayOfStrings[1];

int numberWithoutInitialValue;
PRINT numberWithoutInitialValue;

PRINT "\n" arrayOfNumbers[2];
IF arrayOfNumbers[2] < 10 {
    PRINT "\nBeginning of IF";
    PRINT "\nInside IF (greater than)";
    PRINT "\nEnd of IF";
}

IF someNumber = 44 {
    PRINT "\nInside IF (equal)";
}

IF 44 > someNumber {
    PRINT "\nInside IF (less than)";
}

if 44 >= 44 {
    PRINT "\nGreater or equal";
}

if 44 <= 44 {
    PRINT "\nLess or equal";
}

int iterator = 1;
WHILE iterator <= 10 {
    PRINT "\n" iterator;
    iterator iterator + 1;
}

PRINT POW<2, 4>;

string globalVariable = "globalVariable";
printGlobalVariable<>;

val dynamicValue1 = 3.0;
PRINT "\n" dynamicValue1;

val dynamicValue2 = 1 + 2;
PRINT "\n" dynamicValue2;

val dynamicValue3 = 1 + 2 + 3.5;
PRINT "\n" dynamicValue3;
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

##### Functions

-   `return_type OPERATION name_of_function: parameters { instructions }` - definition of function
-   `name_of_function<arguments>` - call function
-   `ret` - return value from function
