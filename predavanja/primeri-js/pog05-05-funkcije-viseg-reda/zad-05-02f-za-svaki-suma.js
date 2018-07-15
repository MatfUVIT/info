var nizBrojeva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function zaSvaki(niz, akcija) {
    for (var i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

// funkcijska vrednost povecaj pristupa globalnoj promenljivoj sum
var povecaj =  function(broj) {
    sum += broj;
};

// racuna sumu niza brojeva pomoću funkcije zaSvaki
var sum = 0;
zaSvaki(nizBrojeva, povecaj);
console.log(sum);
