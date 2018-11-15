/*
In strict mode is that the this binding holds the value undefined 
in functions that are not called as methods.

When making such a call outside of strict mode, this refers to the 
global scope object. 

So if you accidentally call a method or constructor incorrectly in 
non-strict mode, JavaScript will happily work with the 
global object, creating and reading global variables. 
*/
function Person(name) {
  this.name = name;
}

// oops
var ferdinand = Person("Ferdinand"); 
console.log(name);
// → Ferdinand