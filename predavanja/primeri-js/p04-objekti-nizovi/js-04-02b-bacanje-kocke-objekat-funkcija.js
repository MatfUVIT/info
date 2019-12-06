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
    switch (ishod) {
        case 1:
            statistika.broj1++;
            break;
        case 2:
            statistika.broj2++;
            break;
        case 3:
            statistika.broj3++;
            break;
        case 4:
            statistika.broj4++;
            break;
        case 5:
            statistika.broj5++;
            break;
        case 6:
            statistika.broj6++;
            break;
        default:
            console.log("OVO NE BI SMELO DA SE DESI !!!");
    }
    return statistika;
}
