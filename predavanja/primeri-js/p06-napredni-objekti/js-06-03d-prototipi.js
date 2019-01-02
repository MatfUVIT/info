let protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'