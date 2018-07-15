/* 
Najnapredniji pristup u razvijanju funkcija (sa zatvorenjem)

Prebrojiti pojave slova B i O
*/

function prebroj(znak) {
    return function prebrojPojave(niska) {
        var ret = 0;
        for (var i = 0; i < niska.length; i++)
            if (niska.charAt(i) == znak)
                ret++;
        return ret;
    };
}

var prebrojB = prebroj("B");
console.log(prebrojB("BAOBAB NIJE BELE BOJE"));
var prebrojO = prebroj("O");
console.log(prebrojO("BAOBAB NIJE BELE BOJE"));
