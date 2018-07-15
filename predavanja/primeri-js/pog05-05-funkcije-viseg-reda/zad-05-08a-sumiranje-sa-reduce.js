/*
Funkcije za sumiranje
*/

function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}


console.log([2, 4, 3, 1]);

console.log(reduce([2, 4, 3, 1], function(a, b) {
    return a + b;
}, 0));

console.log(reduce([2, 4, 3, 1], function(a, b) {
    return a * b;
}, 1));

console.log(reduce([2, 4, 3, 1], function(a, b) {
    if (a < b)
        return a;
    return b;
}, Infinity));

console.log(reduce([2, 4, 3, 1], function(a, b) {
    if (a > b)
        return a;
    return b;
}, -Infinity));