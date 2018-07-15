/*
Consider this trivial module for associating names with day-of-the-week 
numbers, as returned by a Date object’s getDay method.

The dayName function is part of the module’s interface, but the 
names variable is not. 
*/
var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"];
function dayName(number) {
  return names[number];
}

console.log(dayName(1));
// → Monday

/*
We would prefer not to spill it into the global scope.
*/