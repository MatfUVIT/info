function Zec(tip = "непознат", boja = "непознатa") {

    this.tip = tip;
    this.boja = boja;
}

Zec.prototype.predstaviSe = function () {
    console.log("Зец: " + this.tip + " боја: " + this.boja + "." + "'\n");
};

Zec.prototype.govori = function (tekst) {
    console.log("Овај зец " + this.tip + " боје " + this.boja
        + " каже '" + tekst + "'" + "\n");
};

let zec = new Zec();
zec.predstaviSe();
// >>> Зец: непознат боја: непознатa.
zec.govori("Ко сам ја?");
// >>> Овај зец непознат боје непознатa каже 'Ко сам ја?'

function ZecIzFikcije(tip, boja, ime,
    imeKreatora, prezimeKreatora, delo,
    uzrecica) {
    Zec.call(this, tip, boja);
    this.ime = ime;
    this.kreator = { "ime": imeKreatora, "prezime": prezimeKreatora };
    this.delo = delo;
    this.uzrecica = uzrecica;
}

ZecIzFikcije.prototype = Object.create(Zec.prototype);

ZecIzFikcije.prototype.predstaviSe = function () {
    console.log("Зец: " + this.tip + ", боја: " + this.boja + ", име: "
        + this.ime + "\n"
        + "креатор: " + this.kreator.ime + " " + this.kreator.prezime + "\n"
        + "дело: " + this.delo + "\n"
        + "узречица: '" + this.uzrecica + "'\n");
};

ZecIzFikcije.prototype.skoci = function () {
    console.log("Скок, скок, скок \n");
};

let duskoDugousko = new ZecIzFikcije("паметан", "сива", "Душко Дугоушко",
    "Tex", "Avery", "A Wild Hare", "Шефе, који ти је враг?");
duskoDugousko.predstaviSe();
// >>> Зец: паметан, боја: сива, име: Душко Дугоушко
// >>> креатор: Tex Avery
// >>> дело: A Wild Hare
// >>> узречица: 'Шефе, који ти је враг?'
duskoDugousko.govori(duskoDugousko.uzrecica);
// >>> Овај зец паметан боје сива каже 'Шефе, који ти је враг?''
duskoDugousko.skoci();
// >>> Скок, скок, скок

let plaviZec = new ZecIzFikcije("веома паметан", "плава", "Плави ѕец",
    "Душко", "Радовић", "Плави зец", "Плави, зец, чудни зец, једини на свету.");
plaviZec.predstaviSe();
// >>> Зец: веома паметан, боја: плава, име: Плави ѕец
// >>> креатор: Душко Радовић
// >>> дело: Плави зец
// >>> узречица: 'Плави, зец, чудни зец, једини на свету.'
plaviZec.govori(plaviZec.uzrecica);
// >>> Овај зец веома паметан боје плава каже 'Плави, зец, чудни зец, једини на свету.'