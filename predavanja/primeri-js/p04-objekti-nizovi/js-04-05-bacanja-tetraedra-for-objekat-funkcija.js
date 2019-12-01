const brojEksperimenata = 15;
const brojBacanjaUEksperimentu = 100;

let rezultatBacanja = undefined;

for (let eksp = 0; eksp < brojEksperimenata; eksp++) {
    let statistika =
    {
        "broj1": 0,
        "broj2": 0,
        "broj3": 0,
        "broj4": 0
    };
    for (let i = 0; i < brojBacanjaUEksperimentu; i++) {
        rezultatBacanja = Math.floor(Math.random() * 4 + 1);
        //console.log(rezultatBacanja);
        azurirajStatistiku(rezultatBacanja, statistika);
    }
    console.log("STATISTIKA JEDNOG EKSPERIMENTA:");
    console.log(statistika);
}

function azurirajStatistiku(dobijeniBroj, statistika) {
    switch (dobijeniBroj) {
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
        default:
            console.log("OVO NE BI SMELO DA SE DESI !!!");
    }
}
