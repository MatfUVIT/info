class Rabbit {
    constructor(type) {
        this.type = type;
        this.teeth = "small";
    };

    speak(line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    };
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit.teeth);
// → small

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody

console.log(blackRabbit.teeth);
// → small

