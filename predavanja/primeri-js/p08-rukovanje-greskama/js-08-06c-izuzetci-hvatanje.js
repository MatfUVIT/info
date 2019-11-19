"use strict";

let slucajanBrojIliMiki = function () {
  if (Math.random() < 0.4)
    return Math.floor(Math.random() * 10);
  if (Math.random() < 0.8)
    return Math.floor(-Math.random() * 10);
  return "Miki Maus";
}

function kvadratniKoren(izvorPodataka) {
  let broj = Number(izvorPodataka());
  if (isNaN(broj))
    throw new Error("nemoguce korenovati nesto sto nije broj");
  if (broj < 0)
    throw new Error("nemoguce korenovati negativan broj");
  let rezultat = Math.sqrt(broj);
  return { "broj": broj, "rezultat": rezultat };
}

for (let i = 0; i < 10; i++)
  try {
    console.log(kvadratniKoren(slucajanBrojIliMiki));
  } catch (error) {
    console.log("Nesto je jako pogresno: *** " + error + " ***");
  }
