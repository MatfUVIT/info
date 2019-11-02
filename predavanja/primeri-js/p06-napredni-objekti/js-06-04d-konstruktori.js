let Tacka = function (x = 0, y = 0) {
    this.x = x;
    this.y = y;

    this.prikazi = function () { console.log(`(${this.x},${this.y})`); };
}


let tackaA = new Tacka(7, 9);
tackaA.prikazi();

Tacka.prototype.translacija = function (xV, yV) {
    return new Tacka( this.x + xV, this.y + yV);
};

let tackaB = new Tacka(1);
tackaB.prikazi();
const tackaC = tackaB.translacija(tackaA.x, tackaA.y);
tackaC.prikazi();

Tacka.prototype.centralnaSimetrija = function (xC, yC) {
   return this.translacija(2 * (xC - this.x), 2 * (yC - this.y));
}

const tackaD = new Tacka(12, 12);
tackaD.prikazi();
const tackaE = tackaD.centralnaSimetrija(tackaC.x, tackaC.y);
tackaE.prikazi();

