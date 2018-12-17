// deklaracija i postavljanje vrednosti 
let osoba1 = "Драгослав"
let osoba2 = "Драгослав"

// u ovom trenutku promenljive osoba1 i osoba2 imaju istu vrednost 
console.log(`osoba1 = ${osoba1}
osoba2 = ${osoba2}
`)


// promena vrednosti promenljive osoba1 ne utice na osoba2
osoba1 = "Павле"
console.log(`osoba1 = ${osoba1}
osoba2 = ${osoba2}
`)

// promena vrednosti promenljive osoba2 ne utice na osoba1
osoba2 = "Никола"
console.log(`osoba1 = ${osoba1}
osoba2 = ${osoba2}
`)

// postavljenje vrednosti
osoba1 = "Драгослав"
osoba2 = osoba1
console.log(`osoba1 = ${osoba1}
osoba2 = ${osoba2}
`)

// promena vrednosti promenljive osoba1 ne utice na osoba2
osoba1 = "Павле"
console.log(`osoba1 = ${osoba1}
osoba2 = ${osoba2}
`)
