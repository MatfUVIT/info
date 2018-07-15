/*
A better way of interpreting data as code is to use the Function constructor. 

This takes two arguments: a string containing a comma-separated list of argument names 
and a string containing the function’s body. 
*/

var plusOne = new Function("n", "return n + 1;");
console.log(plusOne(4));
// → 5

/*
e can wrap a module’s code in a function, with that function’s scope becoming our module scope.
*/

