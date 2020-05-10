/*
  _
 |_ o  _ _   _ _  |   _. ._   _
 |  | _> /_ (_ /_ |_ (_| | | (_|
                              _|

Creator: Filip Szcześniak
*/

PRINT "Tworzenie konta.\n";

// Imię
string imie;
PRINT "Podaj imie: ";
READ imie;

// Nazwisko
string nazwisko;
PRINT "Podaj nazwisko: ";
READ nazwisko;

// Wiek
int wiek;
PRINT "Podaj wiek: ";
READ wiek;

// Kraj pochodzenia
int wybranePanstwo;
string[] panstwa ["Niemcy", "Polska", "Rosja"];
PRINT "Wybierz jedno z panstw: 1)" panstwa[0] " 2)" panstwa[1] " 3)" panstwa[2] "\n";
READ wybranePanstwo;

// Losowa liczba
real losowaLiczba;
PRINT "Wpisz losowa liczbe (najlepiej zmiennoprzecinkowa): ";
READ losowaLiczba;

// Wynik
PRINT "\n\nTwoje stworzene konto: ";
PRINT "\nTwoje pelne imie: " imie " " nazwisko;
PRINT "\nTwoj wiek: " wiek;
PRINT "\nTwoj wiek w psich latach: " wiek * 4;
PRINT "\nKraj pochodzenia: " panstwa[wybranePanstwo - 1];

// Obliczenia
PRINT "\n\nA teraz obliczenia na twoim wieku i wpisanej liczbie losowej";
PRINT "\nWiek: " wiek "  Losowa liczba: " losowaLiczba;
PRINT "\nDodawanie: wiek + losowaLiczba: " wiek + losowaLiczba;
PRINT "\nOdejmowanie: wiek - losowaLiczba: " wiek - losowaLiczba;
PRINT "\nMnozenie: wiek * losowaLiczba: " wiek * losowaLiczba;
PRINT "\nDzielenie: wiek / losowaLiczba: " wiek / losowaLiczba;
PRINT "\nZlozone: wiek + losowaLiczba * (losowaLiczba + wiek): " wiek + losowaLiczba * (losowaLiczba + wiek);
