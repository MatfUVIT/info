$(document).ready(function () {
    /*
        Date objekat se moze inicijalizovati navodjenjem odgovarajuce godine, meseca i dana.
        Napomena: numeracija meseci pocinje od 0.
    */
    let kraj_semestra = new Date(2020, 0, 9);
    let danas = new Date();
    
    // Ocitavanje aktuelnog datuma
    let dan = danas.getDate();
    let mesec = danas.getMonth() + 1;
    let godina = danas.getFullYear();
    
    console.log(dan, mesec, godina);

    // Broj dana do kraja semestra
    let broj_dana;

    // Metod getTime() vraca broj milisekundi od epohe: 1. januar 1970.
    broj_dana = kraj_semestra.getTime() - danas.getTime();
    if (broj_dana < 0) 
    {
        $('#info')
            .text('Semestar se zavrsio...')
            .css({ 
                'font-weight': 'bold', 
                'color': 'green' 
            });
        return;
    }

    // Math.ceil je funkcija koja vrsi zaokruzivanje vrednosti na prvu vecu vrednost
    broj_dana = Math.ceil(broj_dana / (1000 * 3600 * 24));

    if (broj_dana < 15) 
    {
        $('#info')
            .text(broj_dana)
            .addClass('red');
    }
    else 
    {
        $('#info')
            .text(broj_dana)
            .addClass('blue');
    }
});