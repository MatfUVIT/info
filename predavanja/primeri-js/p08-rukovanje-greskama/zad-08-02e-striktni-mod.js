/*
So if you accidentally call a method or constructor incorrectly in 
strict mode, JavaScript will produce an error as soon as it tries 
to read something from this.
*/
"use strict";
function Person(name) {
  this.name = name;
}

// Oops, forgot 'new'
var ferdinand = Person("Ferdinand");
// → TypeError: Cannot set property 'name' of undefined