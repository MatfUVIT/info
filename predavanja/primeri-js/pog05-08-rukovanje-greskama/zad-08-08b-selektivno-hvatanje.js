/*
Of course, we could match its message property against the error message we happen to 
expect. 

But that’s a shaky way to write code—we’d be using information that’s intended for human 
consumption (the message) to make a programmatic decision. 

As soon as someone changes (or translates) the message, the code will stop working.

Rather, let’s define a new type of error and use instanceof to identify it.
*/
"use strict";

function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left")
    return "L";
  if (result.toLowerCase() == "right")
    return "R";
  throw new InputError("Invalid direction: " + result);
}


for (;;) {
  try {
    var dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError)
      console.log("Not a valid direction. Try again.");
    else
      throw e;
  }
}