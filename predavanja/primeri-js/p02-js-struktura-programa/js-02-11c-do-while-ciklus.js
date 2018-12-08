// do while ciklus, traži unos od korisnika sve dok unos ne postane neprazan
let pokusaja = 0;
do {
    var slucajan = Math.random() - 0.1;
    pokusaja = pokusaja + 1;
} while (slucajan >= 0);
console.log(`Извучен је негативан случајан број ${slucajan} из покушаја бр. ${pokusaja}`);