/*
Parametri i promenljive deklarisani unutar funkcije su lokalni za tu
funkciju, oni se ponovo kreiraju pri svakom pozivu funkcije i oni
nisu vidljivi iz spoljašnjosti.
Funkcije deklarisane unutar opsega neke druge funkcije mogu pristupati
lokalnom opsegu funkcije unutar koje su deklarisani 
*/

// Kreiranje funkcijske vrednosti f
var f = function(a) {
    console.log(a + 2);
};

// Deklaracija funkcije g
function g(a, b) {
    return a * b * 3.5;
}

