/* 
Rekurzivna funkcija za proveru da li se dati broj cilj može 
napraviti od broja 1, uzastopnim ponavljanjem množenja 
sa 3 i/ili dodavanja 5 u bilo kom redosledu
*/
function pronadjiResenje(cilj) {
    function pronadji(start, istorija) {
        if (start == cilj)
            return istorija;
        else if (start > cilj)
            return null;
        else
            return pronadji(start + 5, "(" + istorija + " + 5) ") ||
                pronadji(start * 3, "(" + istorija + " * 3) ");
    }
    return pronadji(1, "1");
}

for(var i=1; i<11171; i++)
    console.log(i + " = "+ pronadjiResenje(i));