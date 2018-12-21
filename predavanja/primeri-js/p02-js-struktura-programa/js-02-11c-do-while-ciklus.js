//'use strict'
// do while ciklus
let pokusaja = 0;
do {
    slucajan = Math.random();
    console.log(slucajan);
    pokusaja = pokusaja + 1;
} while (slucajan >= 0.1);
console.log(`Извучен је број ${slucajan} мањи од 0.1 из покушаја бр. ${pokusaja}`);