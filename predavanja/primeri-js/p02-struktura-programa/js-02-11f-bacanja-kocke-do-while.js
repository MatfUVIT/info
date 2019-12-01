const ukupnoBacanjaUEksperimentu = 300;

let i = 0;
let brojPojaveBroja1 = 0;
let brojPojaveBroja2 = 0;
let brojPojaveBroja3 = 0;
let brojPojaveBroja4 = 0;
let brojPojaveBroja5 = 0;
let brojPojaveBroja6 = 0;
do {
    let kockaJePalaNa = Math.ceil(Math.random() * 6);
    console.log(kockaJePalaNa);
    switch (kockaJePalaNa) {
        case 1:
            brojPojaveBroja1++;
            break;
        case 2:
            brojPojaveBroja2++;
            break;
        case 3:
            brojPojaveBroja3++;
            break;
        case 4:
            brojPojaveBroja4++;
            break;
        case 5:
            brojPojaveBroja5++;
            break;
        case 6:
            brojPojaveBroja6++;
            break;
        default:
            console.log('OVO NE BI SMELO DA SE DESI !!!');
    }
    i++;
} while (i < ukupnoBacanjaUEksperimentu);
console.log(`Statistika jednog eksperimenta (${ukupnoBacanjaUEksperimentu} bacanja u eksperimentu):`);
console.log(brojPojaveBroja1, brojPojaveBroja2, brojPojaveBroja3, brojPojaveBroja4, brojPojaveBroja5, brojPojaveBroja6);