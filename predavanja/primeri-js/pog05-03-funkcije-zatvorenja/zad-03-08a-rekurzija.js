// rekurzivna funkcija za stepenovanje
function stepen(osnova, izlozilac) {
    if (izlozilac == 0)
        return 1;
    return osnova * stepen(osnova, izlozilac - 1);
}

console.log(stepen(2,10))