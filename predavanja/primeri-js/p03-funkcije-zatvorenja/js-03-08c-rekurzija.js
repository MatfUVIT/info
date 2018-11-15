/* 
Rekurzivna funkcija za proveru da li se dati broj cilj može 
napraviti od broja 1, uzastopnim ponavljanjem množenja 
sa 3 i/ili dodavanja 5 u bilo kom redosledu
*/
function paran(broj) {
    if (broj == 0)
        return true;
    if (broj == 1)
        return false;
    return paran(broj - 2);
}

function neparan(broj) {
    return !paran(broj);
}

console.log(paran(50));
console.log(neparan(50));
console.log(paran(75));
console.log(neparan(75));