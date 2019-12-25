const ukupnoEksperimenata = 10;
const ukupnoBacanjaUEksperimentu = 378;

for (let eksp = 0; eksp < ukupnoEksperimenata; eksp++) {
    var brojPojaveBroja1 = 0;
    var brojPojaveBroja2 = 0;
    var brojPojaveBroja3 = 0;
    var brojPojaveBroja4 = 0;
    var brojPojaveBroja5 = 0;
    var brojPojaveBroja6 = 0;
    var procenat1;
    var procenat2;
    var procenat3;
    var procenat4;
    var procenat5;
    var procenat6;
    for (let i = 0; i < ukupnoBacanjaUEksperimentu; i++) {
        let kockaJePalaNa = Math.ceil(Math.random() * 6);
        //console.log(kockaJePalaNa);
        sracunajStatistikuBocniEfekat(kockaJePalaNa);
    }
    console.log(`Statistika eksperimenta broj ${eksp + 1}, sa ${ukupnoBacanjaUEksperimentu} bacanja u eksperimentu:`);
    console.log(brojPojaveBroja1, brojPojaveBroja2, brojPojaveBroja3, brojPojaveBroja4, brojPojaveBroja5, brojPojaveBroja6);
    sracunajProcenteBocniEfekat();
    console.log(`Procenti eksperimenta broj ${eksp + 1}, sa ${ukupnoBacanjaUEksperimentu} bacanja u eksperimentu:`);
    console.log(procenat1, procenat2, procenat3, procenat4, procenat5, procenat6);
}

function sracunajStatistikuBocniEfekat(rezultat) {
    switch (rezultat) {
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
}


function sracunajProcenteBocniEfekat() {
    let suma = brojPojaveBroja1 + brojPojaveBroja2 + brojPojaveBroja3
        + brojPojaveBroja4 + brojPojaveBroja5 + brojPojaveBroja6;
    procenat1 = 100 * brojPojaveBroja1 / suma;
    procenat2 = 100 * brojPojaveBroja2 / suma;
    procenat3 = 100 * brojPojaveBroja3 / suma;
    procenat4 = 100 * brojPojaveBroja4 / suma;
    procenat5 = 100 * brojPojaveBroja5 / suma;
    procenat6 = 100 * brojPojaveBroja6 / suma;
}