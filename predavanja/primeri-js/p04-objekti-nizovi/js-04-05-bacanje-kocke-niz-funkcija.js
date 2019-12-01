const brojEksperimenata = 15;
const brojBacanjaUEksperimentu = 100;

for (let eksp = 0; eksp < brojEksperimenata; eksp++) {
    let statistika = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < brojBacanjaUEksperimentu; i++) {
        let kockaJePalaNa = Math.floor(Math.random() * 6 + 1);
        //console.log(rezultatBacanja);
        azurirajStatistiku(kockaJePalaNa, statistika);
    }
    console.log(`Statistika eksperimenta br. ${eksp + 1}, sa ${brojBacanjaUEksperimentu} bacanja:`);
    console.log(statistika);
}

function azurirajStatistiku(dobijeniBroj, statistika) {
    statistika[dobijeniBroj - 1]++;
}
