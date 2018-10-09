/*
Overriding properties is also used to give the standard function and array prototypes 
a different toString method than the basic object prototype.
*/

console.log(Array.prototype.toString ==
    Object.prototype.toString);
// → false

console.log([1, 2].toString());
// → 1,2

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]