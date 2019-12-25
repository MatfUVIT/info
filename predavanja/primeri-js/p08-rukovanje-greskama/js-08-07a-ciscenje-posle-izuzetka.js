"use strict";

let kontekst = null;
console.log(kontekst);

function izvrsiSaKontekstom(noviKontekst, teloFunkcije) {
  let stariKontekst = kontekst;
  kontekst = noviKontekst;
  let rezultat = teloFunkcije();
  kontekst = stariKontekst;
  return rezultat;
}

console.log("---")
izvrsiSaKontekstom(25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);
izvrsiSaKontekstom(-25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);


console.log("---")

const korenujAkoMozes = function (x) {
  if (kontekst < 0)
    throw new Error("Nemoguce izracunati koren negativnog broja!");
  console.log(Math.sqrt(kontekst));
};

try {
  izvrsiSaKontekstom(16, korenujAkoMozes);
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);

console.log("---")
try {
  izvrsiSaKontekstom(-16, korenujAkoMozes);
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);



