var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'