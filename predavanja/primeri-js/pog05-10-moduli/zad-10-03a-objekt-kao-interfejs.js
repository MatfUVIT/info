/*
We want to add another function to our day-of-the-week module, one that goes 
from a day name to a number. 

We can’t simply return the function anymore but must wrap the two functions in an object.
*/
var zemaljskiDani = function () {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  return {
    name: function (number) { return names[number]; },
    number: function (name) { return names.indexOf(name); }
  };
} ();

console.log(zemaljskiDani.name(zemaljskiDani.number("Sunday")));
// → Sunday

/*
For bigger modules, gathering all the exported values into an object at the end of the 
function becomes awkward since many of the exported functions are likely to be big and
 you’d prefer to write them somewhere else, near related internal code.
*/