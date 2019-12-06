console.log('---')
const izgradiIzraz1 = function (cilj) {
    const izgradi1 = function (start, istorija) {
        if (start == cilj)
            return istorija;
        else if (start > cilj)
            return null;
        else {
            let rezultat = izgradi1(start + 5, "(" + istorija + " + 5) ");
            if (rezultat != null)
                return rezultat;
            return izgradi1(start * 3, "(" + istorija + " * 3) ");
        }
    }
    return izgradi1(1, "1");
}

for (let i = 80; i <= 100; i++)
    console.log(i + " = " + izgradiIzraz1(i));

console.log('---')
// sazetija verzija - ista funkcionalnost
const izgradiIzraz = function (cilj) {
    const izgradi = function (start, istorija) {
        if (start == cilj)
            return istorija;
        if (start > cilj)
            return null;
        return izgradi(start + 5, "(" + istorija + " + 5) ") ||
            izgradi(start * 3, "(" + istorija + " * 3) ");
    }
    return izgradi(1, "1");
}

for (let i = 80; i <= 100; i++)
    console.log(i + " = " + izgradiIzraz(i));