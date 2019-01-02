/*
Funkcije za sumiranje
*/

function reduce(array, combine, start) {
    let current = start;
    for (let i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

let niz = [2, 4, 3, 1, -5, 12, 7];
console.log(niz);

console.log(reduce(niz, function(a, b) {
    return a + b;
}, 0));


console.log(reduce(niz, (a, b) => a + b, 0));

console.log( niz.reduce((a, b) => a + b, 0));

console.log( niz.filter((a)=>a>=0).reduce((a, b) => a + b, 0));


console.log(reduce(niz, (a, b) => a * b, 1));

console.log(reduce(niz, function(a, b) {
    if (a < b)
        return a;
    return b;
}, Infinity));


console.log(reduce(niz, (a, b)=>(a < b)? a : b, Infinity));


console.log(reduce(niz, function(a, b) {
    if (a > b)
        return a;
    return b;
}, -Infinity));

console.log(reduce(niz, (a, b)=>(a > b)? a : b, -Infinity));

