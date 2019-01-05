let nizBrojeva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function zaSvaki(niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

// funkcijska vrednost povecaj pristupa globalnoj promenljivoj sum
var povecaj =  function(broj) {
    sum += broj;
};

// racuna sumu niza brojeva pomoću funkcije zaSvaki
let sum = 0;
zaSvaki(nizBrojeva, povecaj);
console.log(sum);

// racuna sumu niza brojeva pomoću funkcije zaSvaki i lambda izraza
sum = 0;
zaSvaki(nizBrojeva, (broj)=>sum+=broj);
console.log(sum);