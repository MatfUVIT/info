const ukupnoEksperimenata = 15;
const ukupnoBacanjaUEksperimentu = 100;

for (let eksp = 0; eksp < ukupnoEksperimenata; eksp++) {
    let statistika = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < ukupnoBacanjaUEksperimentu; i++) {
        let kockaJePalaNa = Math.floor(Math.random() * 6 + 1);
        //console.log(rezultatBacanja);
        azurirajStatistiku(kockaJePalaNa, statistika);
    }
    console.log(`Statistika eksperimenta br. ${eksp + 1}, sa ${ukupnoBacanjaUEksperimentu} bacanja:`);
    console.log(statistika);
}

function azurirajStatistiku(dobijeniBroj, statistika) {
    statistika[dobijeniBroj - 1]++;
}
