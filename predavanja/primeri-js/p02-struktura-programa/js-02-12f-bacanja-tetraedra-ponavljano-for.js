const brojEksperimenata = 10;
const brojBacanjaUEksperimentu = 100;

let rezultatBacanja = undefined;

for (let eksp = 0; eksp < brojEksperimenata; eksp++) {
    let broj1 = 0;
    let broj2 = 0;
    let broj3 = 0;
    let broj4 = 0;
    for (let i = 0; i < brojBacanjaUEksperimentu; i++) {
        rezultatBacanja = Math.floor(Math.random() * 4 + 1);
        //console.log(rezultatBacanja);
        switch (rezultatBacanja) {
            case 1:
                broj1++;
                break;
            case 2:
                broj2++;
                break;
            case 3:
                broj3++;
                break;
            case 4:
                broj4++;
                break;
            default:
                console.log("OVO NE BI SMELO DA SE DESI !!!");
        }
    }
    console.log("STATISTIKA JEDNOG EKSPERIMENTA:");
    console.log(
`1: ${broj1}, 2: ${broj2}, 3: ${broj3}, 4: ${broj4}`);
}