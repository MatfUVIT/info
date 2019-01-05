let niz = [1, 2, 3];

// prvi način
for (let i = 0; i < niz.length; i++) {
    let tekuci = niz[i];
    console.log(tekuci);
}

console.log("---");

// drugi način, kolekcijski ciklus
for (let i in niz) {
    let tekuci = niz[i];
    console.log(tekuci);
}

