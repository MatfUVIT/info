"use strict";

function NeMozeIspodZemljeError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
NeMozeIspodZemljeError.prototype = Object.create(Error.prototype);
NeMozeIspodZemljeError.prototype.name = "NeMozeIspodZemljeError";

function NeMozePrekoNebaError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
NeMozePrekoNebaError.prototype = Object.create(Error.prototype);
NeMozePrekoNebaError.prototype.name = "NeMozePrekoNebaError";

const pravac = function () {
  const slucajan = Math.random();
  if (slucajan < 0.3)
    return "levo";
  if (slucajan < 0.6)
    return "desno";
  if (slucajan < 0.8)
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
    throw new NeMozePrekoNebaError("Auto ne leti: " + rezultat);
  if (rezultat.toLowerCase() == "dole")
    throw new NeMozeIspodZemljeError("Auto nije krtica: " + rezultat);
  throw new Error("Nekorektno usmerenje za auto");
}

function pogled() {
  if (voziAuto(pravac) == "L")
    return "Sa ove strane se nalazi livada";
  else
    return "Sa ove strane su planine";
}

for (let i = 0; i < 50; i++)
  try {
    console.log(` ${i} Gledas iz auta. ${pogled()}`);
  } catch (error) {
    if (error instanceof NeMozeIspodZemljeError)
      console.log("Podzemlje: " + error + " ***");
    else if (error instanceof NeMozePrekoNebaError)
      console.log("Nembeski svod: " + error + " ***");
    else {
      console.log("Nesto je jako pogresno: *** " + error + " ***");
      throw error;
    }
  }

