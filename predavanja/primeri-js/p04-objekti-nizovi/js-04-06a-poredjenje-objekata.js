let object1 = {
    value: 10
};

let object2 = object1;

let object3 = {
    value: 10
};

console.log(object1 == object2);
// Prikazuje true

console.log(object1 == object3);
// Prikazuje false

object1.value = 15;
console.log(object2.value);
// Prikazuje 15

object2.value = 17;
console.log(object1.value);
// Prikazuje 17

console.log(object3.value);
// Prikazuje 10
