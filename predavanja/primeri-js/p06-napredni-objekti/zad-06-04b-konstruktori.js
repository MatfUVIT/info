/*
Constructors (in fact, all functions) automatically get a property named prototype, 
which by default holds a plain, empty object that derives from Object.prototype. 

Every instance created with this constructor will have this object as its prototype. 

So to add a speak method to rabbits created with the Rabbit constructor, we can simply do this:
*/

function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
};

blackRabbit.speak("Doom...");

killerRabbit.speak("Make my day!");
