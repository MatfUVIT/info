let objekat = 'Miki Maus';
console.log(objekat);

let rezultat = Array.from(objekat);
console.log(rezultat);

console.log('---')
let niz = [1, 2, 3];
rezultat = Array.from(Array.from(niz, x => x + x));
console.log(rezultat);
