let prototipTacke = {
    x: 0,
    y: 0,

    prikazi: function () { console.log(`(${this.x},${this.y})`); },

    translacija: function (xV, yV) {
        this.x += xV;
        this.y += yV;
    }
};

let tackaA = Object.create(prototipTacke);
tackaA.prikazi();
tackaA.x = 7;
tackaA.prikazi();
tackaA.y = 9;
tackaA.prikazi();
tackaA.translacija(-3, -4);
tackaA.prikazi();

Object.getPrototypeOf(tackaA).centralnaSimetrija = function (xC, yC) {
    this.translacija(2 * (xC - this.x), 2 * (yC - this.y));
}

console.log("===")
let tackaB = Object.create(prototipTacke);
tackaB.prikazi();
tackaB.centralnaSimetrija(tackaA.x, tackaA.y);
tackaB.prikazi();

