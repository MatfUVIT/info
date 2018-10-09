/*
JavaScript (in a rather glaring omission) doesn’t provide direct support for 
selectively catching exceptions: either you catch them all or you don’t catch 
any. 

This makes it very easy to assume that the exception you get is the one you 
were thinking about when you wrote the catch block.

But it might not be. 

Some other assumption might be violated, or you might have introduced a bug somewhere 
that is causing an exception. H

ere is an example, which attempts to keep on calling promptDirection until it gets a 
valid answer
*/
"use strict";

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") 
     return "L";
  if (result.toLowerCase() == "right") 
     return "R";
  throw new Error("Invalid direction: " + result);
}


for (; ;) {
  try {
    var dir = promtDirection("Where?"); // ← typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}

/*
As a general rule, don’t blanket-catch exceptions unless it is for the purpose of “routing” 
them somewhere—for example, over the network to tell another system that our program crashed. 

And even then, think carefully about how you might be hiding information.
*/