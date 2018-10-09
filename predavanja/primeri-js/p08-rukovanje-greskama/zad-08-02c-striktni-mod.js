/*
Normally, when you forget to put var in front of your variable, 
as with counter in the example, JavaScript quietly creates a 
global variable and uses that. 

In strict mode, however, an error is reported instead. 
*/
function gdeLiJeProblem() {
  "use strict";
  for (var brojac = 0; brojac < 10; brojac++)
    console.log("Sreća, sreća, radost!");
}

gdeLiJeProblem();
