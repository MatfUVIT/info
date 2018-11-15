/*
When you add a property to an object, whether it is present in the prototype or not, 
the property is added to the object itself. 

If there is a property by the same name in the prototype, this property will no 
longer affect the object. 

The prototype itself is not changed.

Overriding properties that exist in a prototype is often a useful thing to do. 

It can be used to express exceptional properties in instances of a more generic class 
of objects, while letting the nonexceptional objects simply take a standard value 
from their prototype.
*/

function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);
// → small

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody

console.log(blackRabbit.teeth);
// → small

console.log(Rabbit.prototype.teeth);
// → small
