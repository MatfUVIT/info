/*
 In JavaScript, we can specify properties that, from the outside, 
 look like normal properties but secretly have methods associated with them.
*/

const pile = {
  elements: ["eggshell", "orange peel", "worm", "stare novine"],
  
  get height() {
    return this.elements.length;
  },
  
  set height(value) {
    console.log("Ignoring attempt to set height to", value);
  }
};

console.log(pile.height);
// → 4

pile.height = 100;
// → Ignoring attempt to set height to 100