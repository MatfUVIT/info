let Tacka = function (x = 0, y = 0) {
    this.x = x;
    this.y = y;

    this.prikazi = function () { console.log(`(${this.x},${this.y})`); };
}


let tackaA = new Tacka(7, 9);
tackaA.prikazi();

Tacka.prototype.translacija = function (xV, yV) {
    this.x += xV;
    this.y += yV;
};

let tackaB = new Tacka(1);
tackaB.prikazi();
tackaB.translacija(tackaA.x, tackaA.y);
tackaB.prikazi();

Tacka.prototype.centralnaSimetrija = function (xC, yC) {
    this.translacija(2 * (xC - this.x), 2 * (yC - this.y));
}

let tackaC = new Tacka(12, 12);
tackaC.prikazi();
tackaC.centralnaSimetrija(tackaB.x, tackaB.y);
tackaC.prikazi();

