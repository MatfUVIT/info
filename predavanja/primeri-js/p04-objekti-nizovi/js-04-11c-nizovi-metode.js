// prikazuje 1
console.log([1, 2, 3, 2, 1].indexOf(2));

// prikazuje 3
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// prikazuje [2 , 3]
console.log([0, 1, 2, 3, 4].slice(2, 4));
// prikazuje [2 , 3 , 4]
console.log([0, 1, 2, 3, 4].slice(2));

function ukloni(niz, indeks) {
    return niz.slice(0, indeks)
        .concat(niz.slice(indeks + 1));
}

// prikazuje [" a " , " b " , " d " , " e "]
console.log(ukloni([" a ", " b ", " c ", " d ", " e "], 2));
