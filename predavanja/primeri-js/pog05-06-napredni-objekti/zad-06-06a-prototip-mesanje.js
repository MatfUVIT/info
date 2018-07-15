/*
A prototype can be used at any time to add new properties and methods to 
all objects based on it. 

For example, it might become necessary for our rabbits to dance.
*/
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.dance = function() {
    console.log("The " + this.type + " rabbit dances a jig.");
};

killerRabbit.dance();
// → The killer rabbit dances a jig.