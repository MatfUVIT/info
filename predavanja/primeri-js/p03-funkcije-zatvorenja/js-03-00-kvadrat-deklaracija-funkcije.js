function kvadrat(x) {
    return x * x;
};

console.log(`Kвадрат броја 12 је ${kvadrat(12)}`);
let y = kvadrat(10.5);
console.log(`Kвадрат броја 10.5 је ${y}`);
y = 14;
console.log(`Kвадрат броја ${y} је ${kvadrat(y)}`);
y = '2.5';
console.log(`Kвадрат ниске '${y}' је ${kvadrat(y)}`);
y = '2';
console.log(`Kвадрат ниске '${y}' је ${kvadrat(y)}`);
y = 'miki';
console.log(`Kвадрат ниске '${y}' је ${kvadrat(y)}`);
y = true;
console.log(`Kвадрат од ${y} је ${kvadrat(y)}`);
y = false;
console.log(`Kвадрат од ${y} је ${kvadrat(y)}`);
