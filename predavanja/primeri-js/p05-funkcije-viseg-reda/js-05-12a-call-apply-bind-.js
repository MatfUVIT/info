prikaz = function (visina, tezina) {
    console.log(`tip: ${this.tip}, naziv: ${this.ime}, visina: ${visina}, tezina: ${tezina}`);
};

console.log('---');
prikaz(1.82, 87);

let duskoDugousko = {
    tip: 'zec',
    ime: 'Dusko Dugousko',
    prikazNaKonzolu: prikaz
};

duskoDugousko.prikazNaKonzolu(0.3, 5.2);

let tarzan = {
    tip: 'covek',
    ime: 'Tarzan',
};

let dambo =  {
    tip: 'slon',
    ime: 'Dambo',
};

console.log('---');
prikaz.call(tarzan, 1.9, 80);
prikaz.call(dambo, 2.5, 300);
duskoDugousko.prikazNaKonzolu.call(tarzan, 1.9, 80);
duskoDugousko.prikazNaKonzolu.call(dambo, 2.5, 300);

console.log('---');
prikaz.apply(tarzan, [1.9, 80]);
prikaz.apply(dambo, [2.5, 300]);
duskoDugousko.prikazNaKonzolu.apply(tarzan, [1.9, 80]);
duskoDugousko.prikazNaKonzolu.apply(dambo, [2.5, 300]);

console.log('---');
prikaz.bind(tarzan)(1.9, 80);
prikaz.bind(dambo)(2.5, 300);
duskoDugousko.prikazNaKonzolu.bind(tarzan)(1.9, 80);
duskoDugousko.prikazNaKonzolu.bind(dambo)(2.5, 300);
