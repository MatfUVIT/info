/**
 * Izračunava broj cifara koje se nalaze u datoj niski.
 * @param {string} vrednost niska
 * @returns broj cifara u niski `vrednost`
 */
function prebrojCifre (vrednost) {
    let brojCifara = 0;
    for (let i = 0; i < vrednost.length; ++i) {
        const tekuciKarakter = vrednost.charAt(i);
        if ('0123456789'.indexOf(tekuciKarakter) !== -1) {
            ++brojCifara;
        }
    }

    return brojCifara;
}

// Postavljenje osluškivača nad formularom
const f = document.querySelector('#formular');

f.addEventListener('submit', function(ev) {
    // Pomoćna promenljiva koju ćemo koristiti za 
    // dohvatanje jednog po jednog polja iz formulara
    let polje;

    // U okviru polja za grešku biće upisivane greške
    const greska = document.querySelector('#greska');

    // Provera za ime i prezime
    polje = document.querySelector('#ime_prezime');
    const imePrezime = polje.value.trim();
    const maxDuzina = polje.maxLength || 30;
    if (imePrezime === '' || imePrezime.length > maxDuzina) {
        // Obrada greške se može sastojati od narednih koraka:
        // 1. Prijavi korisniku da je došlo do greške (opciono, ali korisno)
        greska.textContent = 'Nekorektna vrednost u polju za ime i prezime!';
        // 2. Fokusiraj korisniku polje za koje validacija nije prošla (opciono, ali korisno)
        polje.focus();
        // 3. Spreči propagiranje događaja 'submit' nadalje (obavezno)
        ev.preventDefault();
        // 4. Prekini dalju validaciju (obavezno)
        return false;
    }

    // Provera za datum rođenja
    polje = document.querySelector('#datum_rodjenja');
    const datumRodjenja = polje.value;
    const godina = parseInt(datumRodjenja.substr(0, 4));
    const mesec = parseInt(datumRodjenja.substr(5, 2));
    const dan = parseInt(datumRodjenja.substr(8, 2));
    
    if (isNaN(dan) || isNaN(mesec) || isNaN(godina) || 
        dan < 1 || dan > 31 || 
        mesec < 1 || mesec > 12 || 
        godina < 0) {
        greska.textContent='Nekorektna vrednost u polju za datum rodjenja!';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    if (datumRodjenja.charAt(4) != '-' || datumRodjenja.charAt(7) != '-') {
        greska.textContent='Datum rodjenja treba da bude u formatu gggg-mm-dd';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    // Provera za email
    polje = document.querySelector('#email');
    const email = polje.value;
    const manki = email.indexOf('@');
    const poslednjaTackica = email.lastIndexOf('.');

    if (manki === -1 || poslednjaTackica === -1 || poslednjaTackica < manki) {
        greska.textContent='Nekorektna vrednost u polju za email adresu.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    // Provera za url adresu
    polje = document.querySelector('#veb_adresa');
    const vebAdresa = polje.value;

    if (vebAdresa.substr(0, 7) != 'http://') {
        greska.textContent='Nekorektna vrednost u polju za veb adresu.';
        polje.focus();
        ev.preventDefault();
		return false;
    }

    // Provera za korisničko ime
    polje = document.querySelector('#username');
    const korisnickoIme = polje.value.trim();

    if (korisnickoIme.length < 5) {
        greska.textContent = 'Korisnicko ime nije dovoljno dugo.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    const malaSlova = [];
    const velikaSlova = [];
    for (let i = 0; i < 26; ++i) {
        malaSlova[i] = String.fromCharCode(97 + i);
        velikaSlova[i] = String.fromCharCode(65 + i);
    }

    for (let i = 0; i < korisnickoIme.length; ++i) {
        const tekuciKarakter = korisnickoIme.charAt(i);

        if (malaSlova.indexOf(tekuciKarakter) === -1 && 
            velikaSlova.indexOf(tekuciKarakter) === -1) {
            greska.textContent = 'Nedozvoljeni karakter u polju za korisnicko ime.';
            polje.focus();
            ev.preventDefault();
            return false;
        }
    }

    // Provera za šifru
    polje = document.querySelector('#password');
    const sifra = polje.value.trim();

    if (sifra === '') {
        greska.textContent = 'Polje za sifru je obavezno.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    const brojCifara = prebrojCifre(sifra);

    if (brojCifara < 2) {
        greska.textContent = 'Polje za sifru mora da sadrzi barem dve cifre.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    // Provera za fakultet
    polje = document.querySelector('#fakultet');

    if (polje.selectedIndex === 0) {
        greska.textContent = 'Odaberite fakultet.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    // Provera za godinu studija
    let indikatorGodine = false;
    polje = document.querySelectorAll('input[name="godina"]');

    for (let i = 0; i < polje.length; ++i) {
        let godina = polje[i];

        if (godina.checked) {
            indikatorGodine = true;
            break;
        }
    }

    if (!indikatorGodine) {
        greska.textContent = 'Godina studija je obavezno polje.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    // Sve validacije su prošle!
    return true;
});

f.addEventListener('reset', function(ev) {
    const treba_resetovati = window.confirm('Da li zelite da ponistite unos?');

    if (!treba_resetovati) {
        ev.preventDefault();
        return false;
    }
    return true;
});

// Postavljenje osluškivača nad elementom formulara
// u kojem korisnik unosi lozinku.
const s = document.getElementById('password');

s.addEventListener('focus', function() {
    const brojCifara = prebrojCifre(this.value.trim());    
    // Ukoliko šifra ne ispunjava uslove, prikazujemo poruku. 
    if (brojCifara < 2) {
       upozorenje.style.display = 'block';
    }
});

s.addEventListener('blur', function() {
    // Kada element izgubi fokus, sakrivamo poruku.
    upozorenje.style.display = 'none';
});

s.addEventListener('change', function() {
    const brojCifara = prebrojCifre(this.value.trim());
    // Ukoliko šifra ne ispunjava uslove, 
    // prikazujemo poruku u obaveštajnom prozoru. 
    // Poruka se prikazuje nakon što element izgubi fokus, 
    // ukoliko je vrednost polja izmenjena.
    if (brojCifara < 2) {
        window.alert('Šifra mora da sadrži bar dve cifre!');
    }
});

s.addEventListener('input', function() {
    const upozorenje = document.getElementById('upozorenje');
    const sifra = this.value.trim();
    const brojCifara = prebrojCifre(sifra);
    
    // Ukoliko šifra ne ispunjava uslove, prikazujemo poruku.
    if (brojCifara < 2) {
        upozorenje.style.display = 'block';
    }
    // Ukoliko je uslov ispunjen, sakrivamo poruku.
    else {
        upozorenje.style.display = 'none';
    }
});