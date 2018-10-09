/*
Exceptions are a mechanism that make it possible for code that runs 
into a problem to raise (or throw) an exception, which is simply a 
value. 

Raising an exception somewhat resembles a super-charged return from a function: 
it jumps out of not just the current function but also out of its callers, all 
the way down to the first call that started the current execution. 

This is called unwinding the stack. 

An exception zooms down this stack, throwing away all the call contexts it encounters.

If exceptions always zoomed right down to the bottom of the stack, they would not be 
of much use. 

Their power lies in the fact that you can set “obstacles” along the stack to catch 
the exception as it is zooming down. 

Then you can do something with it, after which the program continues running at the 
point where the exception was caught.
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

function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}

