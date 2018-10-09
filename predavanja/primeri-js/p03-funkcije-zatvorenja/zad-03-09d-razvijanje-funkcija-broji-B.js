/* 
Monolitni pristup u razvijanju funkcija

Prebrojiti pojave slova B 
*/
function prebrojB(niska) {
    var ret = 0;
    for (var i=0; i<niska.length; i++)
        if(niska.charAt(i) =='B')
          ret++;
    return ret;
}

console.log(prebrojB("BAOBAB NIJE BEO"));

