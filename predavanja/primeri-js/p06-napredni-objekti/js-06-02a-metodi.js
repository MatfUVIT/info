let rabbit = {};
rabbit.name = "Душко Дугоушко";
rabbit.speak = function(tekst) {
    console.log("Зека каже: '" + tekst + "'");
};

console.log(rabbit.name);

rabbit.speak("Који ти је враг, шефе?");

let x = rabbit.name;
rabbit.name = rabbit.speak;
rabbit.speak = x;
rabbit.name("Проба! 1,2,3...");
