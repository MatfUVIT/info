"use strict";

let slucajanBrojIliMiki = function () {
  const slucajan = Math.random();
  if (slucajan < 0.4)
    return Math.floor(slucajan * 10);
  if (slucajan < 0.8)
    return Math.floor(-slucajan * 10);
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
