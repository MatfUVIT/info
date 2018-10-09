/*
Function, withContext, wants to make sure that, during its execution, 
the top-level variable context holds a specific context value.

After it finishes, it restores this variable to its old value.
*/
"use strict";

var context = null;
console.log(context);
// → null

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  var result = body();
  context = oldContext;
  return result;
}

/*
What if body raises an exception? 

In that case, the call to withContext will be thrown off the stack by the 
exception, and context will never be set back to its old value.
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
// → 5


