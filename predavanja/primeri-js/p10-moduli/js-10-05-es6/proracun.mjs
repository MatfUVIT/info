import { getPodatak } from "./vrednost";

function izracunajKvadrat() {
    // pozvan je metod iz vrednost.js
    let x = getPodatak();
    // ovde ide deo koda vezan za proracun
    return x * x;
}

export const izracunajKvadratES6 = izracunajKvadrat;
