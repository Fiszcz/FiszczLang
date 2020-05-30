/*
  _
 |_ o  _ _   _ _  |   _. ._   _
 |  | _> /_ (_ /_ |_ (_| | | (_|
                              _|

Creator: Filip Szcześniak
*/

real OPERATION POW: real number, int power {
    PRINT zmiennaGlobalna;
    string zmiennaLokalna = "Zmienna lokalna";

    IF power = 0 {
        # 1.0;
    };

    real base = number;
    IF power > 0 {
        WHILE power > 1 {
            number = base * number;
            power = power - 1;
        };
    };
    IF power < 0 {
        WHILE power <= 0 {
            number = number / base;
            power = power + 1;
        };
    };

    # number;
};

int OPERATION dynamicVariables: {
    PRINT "\n\nDynamiczne typowanie:";

    val someNumber = 1.0;
    PRINT "\n" someNumber;
    someNumber = 1;
    PRINT "\n" someNumber;
    PRINT "\n" someNumber * 1.5;
    PRINT "\n" someNumber * 15;
    PRINT "\n" someNumber;
}

PRINT "Program do liczenia potegi\n";

real base;
int power;
PRINT "Wprowadz podstawe liczby: ";
READ base;
PRINT "Wprowadz wykladnik: ";
READ power;

string zmiennaGlobalna = "Zmienna Globalna";
PRINT "Wynik: " POW<base, power>;

dynamicVariables<>;

//PRINT zmiennaLokalna;
