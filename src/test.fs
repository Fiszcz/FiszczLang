/*
  _
 |_ o  _ _   _ _  |   _. ._   _
 |  | _> /_ (_ /_ |_ (_| | | (_|
                              _|

Creator: Filip Szcześniak
*/

// Example of FiszczLang
int someNumber 5;
real floatNumber 5.0;
PRINT someNumber floatNumber;

READ someNumber;
PRINT someNumber;
PRINT someNumber + 5 * (6 - 7) / 7;
PRINT 1.5 / 3;

int someNewNumber 10 + 5;
PRINT someNewNumber;

string someText "some text";
PRINT someText " and other text";
PRINT "New line\nAnd we are in new line";
READ someText;
PRINT someText;

int[] arrayOfNumbers [1, 2, 3];
PRINT arrayOfNumbers[0];
arrayOfNumbers[0] 100;
PRINT arrayOfNumbers[0];

string[] arrayOfStrings ["one", "two", "three"];
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

int iterator 1;
WHILE iterator <= 10 {
    PRINT "\n" iterator;
    iterator iterator + 1;
}
