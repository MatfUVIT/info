// kreiranje objekta
let objekat = {
    levo: 1,
    desno: 2
}

// prikaz osobina objekta
console.log(objekat.levo);
console.log(objekat["levo"]);


// uklanjanje osobine objekta
delete objekat.levo;

// prikaz osobina objekta
console.log(objekat.levo);
console.log(objekat["levo"]);

// provera da li je osobina sadržana u objektu
console.log("levo" in objekat);
console.log("desno" in objekat);


niz = [1,3, "Mika", "pera", false];
for(let i=0; i<niz.length; i++)
   console.log(niz[i]);

   console.log("---");
for( i in niz)
   console.log(niz[i]);

 let obj = {
    rad: "Odlazak na posao", 
    drvo: "Grljenje drveća",
    pica: "Jedenje pice",
    trcanje: "Trčanje kroz park",
    televizija: "Gledanje televizije"
}

for( element in obj)
  console.log(`${element} - ${obj[element]}`);

   
