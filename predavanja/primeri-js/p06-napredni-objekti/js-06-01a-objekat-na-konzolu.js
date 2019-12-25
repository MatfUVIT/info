const naKonzolu = function (obj) {
    for (let osobina in obj)
        console.log(`${osobina} - ${obj[osobina]}`);
}

console.log('---')
naKonzolu(
    {
        ime: 'Miki', duzina: 4
    }
);

let tackaA = { ime: 'A', x: 12, y: 10 };
console.log('---')
naKonzolu(tackaA);

let pravaP = { naziv: 'p', A: 7, B: 8.5, C: 9 };
console.log('---')
naKonzolu(pravaP);

delete pravaP.ime;
console.log('---')
naKonzolu(pravaP);

let niz = [1,2,3,'miki', 'paja'];
console.log('---')
naKonzolu(niz);

niz[8] = 23.7;
console.log('---')
naKonzolu(niz);


