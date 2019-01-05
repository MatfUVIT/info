var object1 = {
    value: 10
};

var object2 = object1;

var object3 = {
    value: 10
};

// Prikazuje true
console.log(object1 == object2);

// Prikazuje false
console.log(object1 == object3);

object1.value = 15;
// Prikazuje 15
console.log(object2.value);

object2.value = 17;
// Prikazuje 17
console.log(object1.value);


// Prikazuje 10
console.log(object3.value);
