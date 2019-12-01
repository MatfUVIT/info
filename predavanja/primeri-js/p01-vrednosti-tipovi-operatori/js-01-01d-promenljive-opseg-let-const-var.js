const osoba1 = "Никола";
console.log(osoba1);

let osoba2 = osoba1 + "!!!!";
console.log(osoba2);

// nemoguce - pokusaj postavljanja 
// vrednosti za konstantnu promenljivu
//osoba1 = "Драгослав"

// rad sa promenljivom deklarisanom
// pomocu var
{
    var osoba3 = "Петар";
    console.log(osoba3);
}
console.log(osoba3 + " " + osoba2)

// rad sa promenljivom deklarisanom
// pomocu let
{
    let osoba4 = "Јован"
    console.log(osoba4)
}
// nemoguce - pokusaj pristupa
// promenljvoj van njenog opsega
// definisanosti
console.log(оsoba4 + " " + osoba2)