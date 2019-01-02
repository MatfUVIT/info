var rabbit = {};
rabbit.name = "Bugs Bunny";
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};

console.log(rabbit.name);

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

let x = rabbit.name;
rabbit.name = rabbit.speak;
rabbit.speak = x;
rabbit.name("This is the test.");
