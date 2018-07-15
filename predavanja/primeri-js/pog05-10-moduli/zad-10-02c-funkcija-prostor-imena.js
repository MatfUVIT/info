/*
We can use a similar pattern to isolate code from the outside world entirely. 

The following module logs a value to the console but does not actually 
provide any values for other modules to use:
*/
(function () {
  function square(x) { return x * x; }
  var hundred = 100;

  console.log(square(hundred));
})();
// → 10000

/*
This code simply outputs the square of 100, but in the real world it could be 
a module that adds a method to some prototype or sets up a widget on a web page. 

It is wrapped in a function to prevent the variables it uses internally from 
polluting the global scope.
*/