class Rabbit {
    speak(line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    };
}

killerRabbit = new Rabbit();
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
