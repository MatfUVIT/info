// uslovno izvršavanje
var unos = prompt("Unesite broj");
var br = Number(unos);
if (!isNaN(br))
    alert(br + " je kvadratni koren broja " + br * br);
else
    alert("Potrebno je uneti broj.\n" + unos + " nije broj.");
