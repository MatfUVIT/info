const brojBacanja = 300;

let rezultatBacanja = undefined;
let broj1 = 0;
let broj2 = 0;
let broj3 = 0;
let broj4 = 0;
for (let i = 0; i < brojBacanja; i++) {
    rezultatBacanja = Math.floor(Math.random() * 4 + 1);
    console.log(rezultatBacanja);
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
console.log("STATISTIKA JEDNOG PONAVLJANJA:");
console.log(broj1, broj2, broj3, broj4);