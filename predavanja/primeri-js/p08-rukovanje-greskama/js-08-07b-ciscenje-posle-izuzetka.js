"use strict";

let kontekst = null;
console.log(kontekst);

function izvrsiSaKontekstom(noviKontekst, teloFunkcije) {
  let stariKontekst = kontekst;
  kontekst = noviKontekst;
  try {
    return teloFunkcije();
  } finally {
    kontekst = stariKontekst;
  }
}

console.log("---")
izvrsiSaKontekstom(25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);
izvrsiSaKontekstom(-25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);


console.log("---")
try {
  izvrsiSaKontekstom(16, function (x) {
    if (kontekst < 0)
      throw new Error("Nemoguce izracunati koren negativnog broja!");
    console.log(Math.sqrt(kontekst));
  });
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);

console.log("---")
try {
  izvrsiSaKontekstom(-16, function () {
    if (kontekst < 0)
      throw new Error("Nemoguce izracunati koren negativnog broja!");
    console.log(Math.sqrt(kontekst));
  });
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);


