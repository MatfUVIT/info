"use strict";

const slucajanBrojIliMiki = function(){
  
}

function promptNumber(question) {
  var result = Number(prompt(question, ""));
  if (isNaN(result))
    return null;
  else
    return result;
}

console.log(promptNumber("How many trees do you see?"));
