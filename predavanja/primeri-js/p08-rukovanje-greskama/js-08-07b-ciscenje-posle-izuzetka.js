/*
try statements may be followed by a finally block either instead of or in 
addition to a catch block. 

A finally block means “No matter what happens, run this code after trying 
to run the code in the try block”. 

If a function has to clean something up, the cleanup code should usually be 
put into a finally block.
*/
"use strict";

var context = null;
console.log(context);
// → null


function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  try {
    return body();
  } finally {
    context = oldContext;
  }
}

/*
Note that we no longer have to store the result of body (which we want to return) 
in a variable. 

Even if we return directly from the try block, the finally block will be run.
*/

try {
  withContext(5, function() {
    if (context < 10)
      throw new Error("Not enough context!");
  });
} catch (e) {
  console.log("Ignoring: " + e);
}
// → Ignoring: Error: Not enough context!

console.log(context);
// → null

