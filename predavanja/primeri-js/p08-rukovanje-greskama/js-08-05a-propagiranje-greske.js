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
  let rezultat = Math.sqrt(broj);
  return { "broj": broj, "rezultat": rezultat };
}

console.log(kvadratniKoren(slucajanBrojIliMiki));
