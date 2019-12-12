class Tacka {
  constructor(x = 0, y = 0) {
      this.getX = function() {return x;}
      this.getY = function() {return y;}
  }

  get x()
  {
     return this.getX();
  }

  get y()
  {
     return this.getY();
  }

  prikazi() {
      console.log(`(${this.x},${this.y})`);
  }

  translacija(xV, yV) {
      return new Tacka(this.x + xV, this.y + yV);
  }

  centralnaSimetrija(xC, yC) {
      return this.translacija(2 * (xC - this.x), 2 * (yC - this.y));
  }
}

let tackaA = new Tacka(7, 9);
tackaA.prikazi();

let tackaB = new Tacka(1);
tackaB.prikazi();

const tackaC = tackaB.translacija(tackaA.x, tackaA.y);
tackaC.prikazi();

const tackaD = new Tacka(12, 12);
tackaD.prikazi();
const tackaE = tackaD.centralnaSimetrija(tackaC.x, tackaC.y);
tackaE.prikazi();

