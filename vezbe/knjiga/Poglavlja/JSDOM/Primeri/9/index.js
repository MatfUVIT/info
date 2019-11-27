let f = document.querySelector('#formular');

f.onsubmit = function() 
{
    // Pomocna promenljiva
    let polje;

    // U okviru polja za gresku bice upisivane greske
    let greska = document.querySelector('#greska');

    // Provera za ime i prezime
    polje = document.querySelector('#ime_prezime');
    let imePrezime = polje.value.trim();
    let maxDuzina = polje.maxLength || 30;
    if (imePrezime === '' || imePrezime.length > maxDuzina) 
    {
        greska.textContent = 'Nekorektna vrednost u polju za ime i prezime!';
        return false;
    }

    // Provera za datum rodjenja
    polje = document.querySelector('#datum_rodjenja');
    let datumRodjenja = polje.value;
    let godina = parseInt(datumRodjenja.substr(0, 4));
    let mesec = parseInt(datumRodjenja.substr(5, 2));
    let dan = parseInt(datumRodjenja.substr(8, 2));
    
    if (isNaN(dan) || isNaN(mesec) || isNaN(godina) || 
        dan < 1 || dan > 31 || 
        mesec < 1 || mesec > 12 || 
        godina < 0) 
    {
        greska.textContent='Nekorektna vrednost u polju za datum rodjenja!';
        return false;
    }

    if (datumRodjenja.charAt(4) != '-' || datumRodjenja.charAt(7) != '-') 
    {
        greska.textContent='Datum rodjenja treba da bude u formatu gggg-mm-dd';
        return false;
    }

    // Provera za email
    polje = document.querySelector('#email');
    let email = polje.value;
    let manki = email.indexOf('@');
    let poslednjaTackica = email.lastIndexOf('.');

    if (manki === -1 || poslednjaTackica === -1 || poslednjaTackica < manki) 
    {
        greska.textContent='Nekorektna vrednost u polju za email adresu.';
        return false;
    }

    // Provera za url adresu
    polje = document.querySelector('#veb_adresa');
    let vebAdresa = polje.value;

    if (vebAdresa.substr(0, 7) != 'http://') 
    {
        greska.textContent='Nekorektna vrednost u polju za veb adresu.';
		return false;
    }

    // Provera za korisnicko ime
    polje = document.querySelector('#username');
    let korisnickoIme = polje.value.trim();

    let malaSlova = new Array();
    let velikaSlova = new Array();
    for (let i = 0; i < 26; ++i) 
    {
        malaSlova[i] = String.fromCharCode(97 + i);
        velikaSlova[i] = String.fromCharCode(65 + i);
    }

    if (korisnickoIme.length < 5) 
    {
        greska.textContent = 'Korisnicko ime nije dovoljno dugo.';
        return false;
    }

    for (let i = 0; i < korisnickoIme.length; ++i) 
    {
        let tekuciKarakter = korisnickoIme.charAt(i);

        if (malaSlova.indexOf(tekuciKarakter) === -1 && 
            velikaSlova.indexOf(tekuciKarakter) === -1) 
        {
            greska.textContent = 'Nedozvoljeni karakter u polju za korisnicko ime.';
            return false;
        }
    }

    // Provera za sifru
    polje = document.querySelector('#password');
    let sifra = polje.value.trim();

    if (sifra === '') 
    {
        greska.textContent = 'Polje za sifru je obavezno.';
        return false;
    }

    let brojCifara = 0;
    for (let i = 0; i < sifra.length; ++i) 
    {
        let tekuciKarakter = sifra.charAt(i);

        if ('0123456789'.indexOf(tekuciKarakter) != -1)
        {
            ++brojCifara;
        }
    }

    if (brojCifara < 2) 
    {
        greska.textContent = 'Polje za sifru mora da sadrzi barem dve cifre.';
        return false;
    }

    // Provera za fakultet
    polje = document.querySelector('#fakultet');

    if (polje.selectedIndex === 0) 
    {
        greska.textContent = 'Odaberite fakultet.';
        return false;
    }

    // Provera za godinu studija
    let indikatorGodine = false;
    polje = document.querySelectorAll('input[name="godina"]');

    for (let i = 0; i < polje.length; ++i) 
    {
        let godina = polje[i];

        if (godina.checked)
        {
            indikatorGodine = true;
            break;
        }
    }

    if (!indikatorGodine)
    {
        greska.textContent = 'Godina studija je obavezno polje.';
        return false;
    }
};

f.onreset = function()
{
    let odgovor = window.confirm('Da li zelite da ponistite unos?');
    return odgovor;
};
