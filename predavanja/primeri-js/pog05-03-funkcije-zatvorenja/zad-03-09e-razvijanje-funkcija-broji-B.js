/* 
Napredniji pristup u razvijanju funkcija

Prebrojiti pojave slova B
*/
function prebrojZnak(niska, znak) {
    var ret = 0;
    for (var i = 0; i < niska.length; i++)
        if (niska.charAt(i) == znak)
            ret++;
    return ret;
}

function prebrojB(niska) {
    return prebrojZnak(niska, 'B');
}

console.log(prebrojB("BAOBAB NIJE BELE BOJE"));

