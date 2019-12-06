
const izgradiIzraz = function (cilj, izraz1, izraz2) {
    const izgradi = function (start, istorija) {
        if (start == cilj)
            return istorija;
        if (start > cilj)
            return null;
        return izgradi(izraz1(start), `( ${izraz1}( ${istorija}) ) `) ||
            izgradi(izraz2(start), `( ${izraz2}( ${istorija}) ) `);
    }
    return izgradi(1, "1");
}

for (let i = 1; i <= 100; i++)
    console.log(i + " = " + izgradiIzraz(i, (x)=>x*3, (x)=>x+2));