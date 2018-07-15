/*
We saw the Object.create function, which allows us to create an object with a specific prototype. 

You are allowed to pass null as the prototype to create a fresh object with no prototype. 

For objects like map, where the properties could be anything, this is exactly what we want:
*/

var map = Object.create(null);
map["pizza"] = 0.069;
map["touched tree"] = -0.081;

console.log("toString" in map);
// → false

console.log("pizza" in map);
// → true

/*
 We no longer need the hasOwnProperty kludge because all the properties the object has are its own 
 properties. 
 
 Now we can safely use for/in loops, no matter what people have been doing to Object.prototype.
*/

for (var name in map)
  console.log(name);
// → pizza
// → touched tree
