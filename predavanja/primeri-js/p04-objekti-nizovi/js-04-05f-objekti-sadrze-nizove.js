var dan1 = {
    preobrazajVeverica: false,
    aktivnosti: ["rad", "drvo", "pica", "trčanje", "televizija"]
};

console.log(dan1.preobrazajVeverica);

dan1.preobrazajVeverica = true;
console.log(dan1["preobrazajVeverica"]);

console.log(dan1.preobrazajVuk);

dan1.preobrazajVuk = "Crvenkapa";
dan1.preobrazajVuk += "AAA";
console.log(dan1.preobrazajVuk);

console.log(dan1.aktivnosti[1].charAt(0));
console.log(dan1.aktivnosti[1][0]);

console.log(dan1.aktivnosti);

console.log(dan1);