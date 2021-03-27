const veze = document.getElementsByTagName('a');
if (veze.length > 0) {
    const prvaVeza = veze[0];

    // Postavljamo nove vrednosti za atribute href i target
    prvaVeza.href = 'https://matfuvit.github.io/UVIT/';
    prvaVeza.target = '_blank';

    // Ažuriramo tekst u vezi
    prvaVeza.innerHTML = 'Početna stranica kursa';
} else {
    console.log('Na ovoj stranici ne postoje veze.');
}
