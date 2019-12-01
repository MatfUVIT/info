let niz = [1, 2, 3, 'mika', 'zika'];

console.log('---');
// prvi način
for (let i = 0; i < niz.length; i++) {
    let tekuci = niz[i];
    console.log(tekuci);
}

console.log('---');
// drugi način, kolekcijski ciklus for-in
for (let i in niz) {
    let tekuci = niz[i];
    console.log(tekuci);
}

console.log('---');
// treci način, kolekcijski ciklus for-of
for (let tekuci of niz) {
    console.log(tekuci);
}
