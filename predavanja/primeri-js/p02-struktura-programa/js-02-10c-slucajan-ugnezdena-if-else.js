// ugnјeždena if naredba
let br = 10 * Math.random() - 5;
console.log(`Псеудо-случајни број има вредност ${br}`);
if (br <= 0)
    console.log(`Број је негативан`);
else if (br == 0)
    console.log(`Број је тачно 0`);
else if (br < 2)
    console.log(`Број је позитиван, мањи од 2`);
else
    console.log(`Број је већи или једнак од 2`);


