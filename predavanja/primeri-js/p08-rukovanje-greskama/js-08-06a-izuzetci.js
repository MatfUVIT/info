"use strict";

let pravac = function () {
  if (Math.random() < 0.3)
    return "levo";
  if (Math.random() < 0.6)
    return "desno";
  if (Math.random() < 0.8)
    return "gore";
  return "dole";
}

function voziAuto(usmerenje) {
  let rezultat = usmerenje();
  if (rezultat.toLowerCase() == "levo")
    return "L";
  if (rezultat.toLowerCase() == "desno")
    return "R";
  if (rezultat.toLowerCase() == "gore")
    throw new Error("Auto ne leti: " + rezultat);
  if (rezultat.toLowerCase() == "dole")
    throw new Error("Auto nije krtica: " + rezultat);
  throw new Error("Nekorektno smerenje za auto");
}

function pogled() {
  if (voziAuto(pravac) == "L")
    return "Sa ove strane se nalazi livada";
  else
    return "Sa ove strane su planine";
}

let brojPonavljanja = 10;

for (let i = 0; i < brojPonavljanja; i++)
  try {
    console.log(` ${i} Gledas iz auta. ${pogled()}`);
  } catch (error) {
    console.log("Nesto je jako pogresno: *** " + error + " ***");
  }
console.log("---");
for (let i = 0; i < brojPonavljanja; i++)
  console.log(` ${i} Gledas iz auta. ${pogled()}`);


