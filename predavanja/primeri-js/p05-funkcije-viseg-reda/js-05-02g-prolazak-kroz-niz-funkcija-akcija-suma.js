let nizBrojeva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function zaSvaki(niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

console.log("---");
// racuna sumu niza brojeva pomoću funkcije zaSvaki
let sum = 0;
zaSvaki(nizBrojeva, function (broj) {
    sum += broj;
});
console.log(sum);

console.log("---");
// racuna sumu niza brojeva pomoću lambda izraza
sum = 0;
zaSvaki(nizBrojeva, x => sum += x);
console.log(sum);