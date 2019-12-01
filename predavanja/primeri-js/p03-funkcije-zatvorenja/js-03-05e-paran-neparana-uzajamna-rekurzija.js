function paran(broj) {
    if (broj == 0)
        return true;
    if(broj == 1)
        return false;
    return neparan(broj - 1);
}

function neparan(broj) {
    if (broj == 0)
        return false;
    if (broj == 1)
        return true;
    return paran(broj-1);
}

console.log(paran(6));
console.log(neparan(50));
console.log(paran(75));
console.log(neparan(75));