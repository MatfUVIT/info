var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);


for (var name in map)
  console.log(name);
// → pizza
// → touched tree

/*
We still have the problem with the regular in operator claiming that the Object.prototype 
properties exist in our object. 

For that, we can use the object’s hasOwnProperty method.

This method tells us whether the object itself has the property, without looking at its prototypes. 

This is often a more useful piece of information than what the in operator gives us.
*/

console.log(map.hasOwnProperty("toString"));
// → false

/*
When you are worried that someone (some other code you loaded into your program) might have messed
with the base object prototype, you should write your for/in loops like this:
*/
for (var name in map)
  if (map.hasOwnProperty(name)) {
    // ... this is an own property
    console.log(name);
  }

