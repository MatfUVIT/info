class Rabbit {
    constructor(type) {
        this.type = type;
    };

    speak(line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    };
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

blackRabbit.speak("Doom...");
killerRabbit.speak("Make my day!");
