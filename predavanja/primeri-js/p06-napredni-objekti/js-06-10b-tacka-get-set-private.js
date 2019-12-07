class Tacka {
  constructor(x = 0, y = 0) {
      this.getX = function() {return x;}
      this.getY = function() {return y;}
  }

  prikazi() {
      console.log(`(${this.getX()},${this.getY()})`);
  }

  translacija(xV, yV) {
      return new Tacka(this.getX() + xV, this.getY() + yV);
  }

  centralnaSimetrija(xC, yC) {
      return this.translacija(2 * (xC - this.getX()), 2 * (yC - this.getY()));
  }
}

let tackaA = new Tacka(7, 9);
tackaA.prikazi();

let tackaB = new Tacka(1);
tackaB.prikazi();

const tackaC = tackaB.translacija(tackaA.getX(), tackaA.getY());
tackaC.prikazi();

const tackaD = new Tacka(12, 12);
tackaD.prikazi();
const tackaE = tackaD.centralnaSimetrija(tackaC.getX(), tackaC.getY());
tackaE.prikazi();

