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

