'use strict'
const ukupnoEksperimenata = 15;
const ukupnoBacanjaUEksperimentu = 100;

for (let eksp = 0; eksp < ukupnoEksperimenata; eksp++) {
    let statistika =
    {
        broj1: 0,
        broj2: 0,
        broj3: 0,
        broj4: 0,
        broj5: 0,
        broj6: 0
    };
    for (let i = 0; i < ukupnoBacanjaUEksperimentu; i++) {
        let kockajePalaNa = Math.floor(Math.random() * 6 + 1);
        //console.log(rezultatBacanja);
        statistika = azurirajStatistiku(kockajePalaNa, statistika);
    }
    console.log(`Statistika eksperimenta br. ${eksp + 1}, sa ${ukupnoBacanjaUEksperimentu} bacanja:`);
    console.log(statistika);
}

function azurirajStatistiku(ishod, statistika) {
    let br1 = statistika.broj1;
    let br2 = statistika.broj2;
    let br3 = statistika.broj3;
    let br4 = statistika.broj4;
    let br5 = statistika.broj5;
    let br6 = statistika.broj6;
    switch (ishod) {
        case 1:
            br1++;
            break;
        case 2:
            br2++;
            break;
        case 3:
            br3++;
            break;
        case 4:
            br4++;
            break;
        case 5:
            br5++;
            break;
        case 6:
            br6++;
            break;
        default:
            console.log("OVO NE BI SMELO DA SE DESI !!!");
    }
    return {
        broj1: br1, broj2: br2, broj3: br3,
        broj4: br4, broj5: br5, broj6: br6
    };
}
