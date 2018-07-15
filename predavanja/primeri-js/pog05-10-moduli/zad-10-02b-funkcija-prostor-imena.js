/*
Consider previous module for associating names with day-of-the-week 
numbers, as returned by a Date object’s getDay method.

The dayName function is part of the module’s interface, but the 
names variable is not. 

We would prefer not to spill it into the global scope.
*/
var dayName = function () {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  return function (number) {
    return names[number];
  };
} ();

console.log(dayName(3));
// → Wednesday

/*
Now names is a local variable in an (unnamed) function. 

This function is created and immediately called, and its return value 
(the actual dayName function) is stored in a variable. 

We could have pages and pages of code in this function, with 100 local variables,
 and they would all be internal to our module — visible to the module itself but 
 not to outside code.
*/