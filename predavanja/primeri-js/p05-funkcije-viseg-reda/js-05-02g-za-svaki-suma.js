var nizBrojeva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function zaSvaki(niz, akcija) {
    for (var i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

// racuna sumu niza brojeva pomoću funkcije zaSvaki
var sum = 0;
zaSvaki(nizBrojeva, function(broj) {
    sum += broj;
});
console.log(sum);
