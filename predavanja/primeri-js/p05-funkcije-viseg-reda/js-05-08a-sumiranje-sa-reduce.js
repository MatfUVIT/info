
function reduce(array, combine, start) {
    let current = start;
    for (let i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

let niz = [2, 4, 3, 1, -5, 12, 7];

// prikaz svih clanova niza
console.log('--- Clanovi niza ---');
console.log(niz);

// odredjivanje sume svih clanova niza
console.log('--- Suma ---');
console.log(reduce(niz, function (a, b) {
    return a + b;
}, 0));


// odredjivanje sume svih clanova niza
console.log('--- Suma ---');
console.log(reduce(niz, (a, b) => a + b, 0));

// odredjivanje sume svih clanova niza pomocu metoda niza
console.log('--- Suma ---');
console.log(niz.reduce((a, b) => a + b, 0));

// odredjivanje sume svih pozitivnih clanova niza
console.log('--- Suma pozitivnih ---');
console.log(niz.filter(a => a >= 0).reduce((a, b) => a + b, 0));

// odredjivanje proizvoda svih clanova niza
console.log('--- Proizvod ---');
console.log(reduce(niz, (a, b) => a * b, 1));

// odredjivanje minimuma svih clanova niza
console.log('--- Minimum ---');
console.log(reduce(niz, function (a, b) {
    if (a < b)
        return a;
    return b;
}, Infinity));

// odredjivanje minimuma svih clanova niza
console.log('--- Minimum ---');
console.log(reduce(niz, (a, b) => (a < b) ? a : b, Infinity));

// odredjivanje maksimuma svih clanova niza
console.log('--- Maksimum ---');
console.log(reduce(niz, function (a, b) {
    if (a > b)
        return a;
    return b;
}, -Infinity));

// odredjivanje maksimuma svih clanova niza
console.log('--- Maksimum ---');
console.log(reduce(niz, (a, b) => (a > b) ? a : b, -Infinity));

