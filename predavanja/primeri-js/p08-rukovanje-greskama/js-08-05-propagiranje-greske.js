/*
Say you have a function promptInteger that asks the user for a whole 
number and returns it.

What should it return if the user inputs orange?

One option is to make it return a special value. 

Common choices for such values are null and undefined.
*/
"use strict";
function promptNumber(question) {
  var result = Number(prompt(question, ""));
  if (isNaN(result))
    return null;
  else
    return result;
}

console.log(promptNumber("How many trees do you see?"));

/*
This policy, however, have its downsides. 

First, what if the function can already return every possible kind of value? 

For such a function, it is hard to find a special value that can be distinguished 
from a valid result.

The second issue with returning special values is that it can lead to some very 
cluttered code.
 
If a piece of code calls promptNumber 10 times, it has to check 10 times whether 
null was returned. 

And if its response to finding null is to simply return null itself, 
the caller will in turn have to check for it, and so on.
*/