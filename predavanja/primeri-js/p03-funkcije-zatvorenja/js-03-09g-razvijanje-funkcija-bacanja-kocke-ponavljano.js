const ukupnoEksperimenata = 10;
const ukupnoBacanjaUEksperimentu = 300;

for (let eksp = 0; eksp < ukupnoEksperimenata; eksp++) {
    var brojPojaveBroja1 = 0;
    var brojPojaveBroja2 = 0;
    var brojPojaveBroja3 = 0;
    var brojPojaveBroja4 = 0;
    var brojPojaveBroja5 = 0;
    var brojPojaveBroja6 = 0;
    for (let i = 0; i < ukupnoBacanjaUEksperimentu; i++) {
        let kockaJePalaNa = Math.ceil(Math.random() * 6);
        //console.log(kockaJePalaNa);
        sracunajStatistikuBocniEfekat(kockaJePalaNa);
    }    
    console.log(`Statistika eksperimenta broj ${eksp+1}, sa ${ukupnoBacanjaUEksperimentu} bacanja u eksperimentu:`);
    console.log(brojPojaveBroja1, brojPojaveBroja2, brojPojaveBroja3, brojPojaveBroja4, brojPojaveBroja5, brojPojaveBroja6);
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
