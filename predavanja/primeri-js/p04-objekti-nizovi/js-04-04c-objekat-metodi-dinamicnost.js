// kreiranje objekta
let tacka1 = {
    xKoordinata: 1.3,
    yKoordinata: 2.8,
    pojaviSe: ()=> console.log('ja sam tacka 1') 
};

// prikaz osobina objekta
console.log(tacka1.xKoordinata);
console.log(tacka1["yKoordinata"]);

// poziva metod
tacka1.pojaviSe();

// provera da li je osobina sadržana u objektu
console.log("xKoordinata" in tacka1);
// provera da li je metod sadržan u objektu
console.log("pojaviSe" in tacka1);

// redefinisanje metoda
tacka1.pojaviSe = (x,y) => console.log(`ja sam tacka 1(${x}, ${y})`); 

// poziv redefinisanog metoda
tacka1.pojaviSe(tacka1.xKoordinata, tacka1.yKoordinata);
// poziv redefinisanog metoda
tacka1.pojaviSe();

// uklanjanje osobine objekta
delete tacka1.xKoordinata;
// pokusaj pristupanja uklonjenoj osobini
console.log(tacka1.xKoordinata);

// provera da li je osobina sadržana u objektu
console.log("xKoordinata" in tacka1);

// uklanjanje metode objekta
delete tacka1.pojaviSe;

// pokusaj poziva uklonjenog metoda dovodo do greske u izvrsavanju
tacka1.pojaviSe();
