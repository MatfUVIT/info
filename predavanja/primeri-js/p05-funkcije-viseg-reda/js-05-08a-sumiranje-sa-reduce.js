
const reduce = function (niz, kombinuj, pocetnaVrednost) {
    let akumulator = pocetnaVrednost;
    for (let x of niz)
        akumulator = kombinuj(akumulator, x);
    return akumulator;
}

let brojevi = [2, 4, 3, 1, -5, 12, 7];

// prikaz svih clanova niza
console.log('--- Clanovi niza ---');
console.log(brojevi);

// odredjivanje sume svih clanova niza
console.log('--- Suma ---');
console.log(reduce(brojevi,
    function (a, b) {
        return a + b;
    }, 0));


// odredjivanje sume svih clanova niza
console.log('--- Suma ---');
console.log(reduce(brojevi, (a, b) => a + b, 0));

// odredjivanje sume svih clanova niza pomocu metoda niza
console.log('--- Suma ---');
console.log(brojevi.reduce((a, b) => a + b, 0));

// odredjivanje sume svih pozitivnih clanova niza
console.log('--- Suma pozitivnih ---');
console.log(
    brojevi
        .filter(a => a >= 0)
        .reduce((a, b) => a + b, 0));

// odredjivanje proizvoda svih clanova niza
console.log('--- Proizvod ---');
console.log(reduce(brojevi, (a, b) => a * b, 1));

// odredjivanje minimuma svih clanova niza
console.log('--- Minimum ---');
console.log(reduce(brojevi, function (a, b) {
    if (a < b)
        return a;
    return b;
}, Infinity));

// odredjivanje minimuma svih clanova niza
console.log('--- Minimum ---');
console.log(reduce(brojevi, (a, b) => (a < b) ? a : b, Infinity));

// odredjivanje minimuma svih clanova niza
console.log('--- Minimum ---');
console.log(brojevi.reduce( (a, b) => (a < b) ? a : b, Infinity));


// // odredjivanje maksimuma svih clanova niza
// console.log('--- Maksimum ---');
// console.log(reduce(brojevi, function (a, b) {
//     if (a > b)
//         return a;
//     return b;
// }, -Infinity));

// // odredjivanje maksimuma svih clanova niza
// console.log('--- Maksimum ---');
// console.log(reduce(brojevi, (a, b) => (a > b) ? a : b, -Infinity));

