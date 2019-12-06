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