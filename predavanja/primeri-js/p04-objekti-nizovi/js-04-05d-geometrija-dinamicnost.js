let tacka1 = {
    x: 1.3,
    y: 2.8,
    pojaviSe: function () {
        console.log(`ja sam tacka (${this.x},${this.y})`);
    }
};


console.log('---');
tacka1.pojaviSe();

console.log('---');
for (let deo in tacka1)
    console.log(`${deo} - ${tacka1[deo]}`);

console.log('---');
delete tacka1.x;
for (let deo in tacka1)
    console.log(`${deo} - ${tacka1[deo]}`);

