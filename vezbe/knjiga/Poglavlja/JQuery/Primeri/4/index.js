$(document).ready(function() {

    // Provera za korisnicko ime
    $('input[name="username"]').blur(function ()
    {
        if ($(this).val() == '')
        {
            $(this).next().addClass('greska').text('Ovo polje je obavezno!');
        }
        else
        {
            $(this).next().removeClass('greska').text('');
        }
    });

    // Provera za elektronsku adresu
    $('input[name="email"]').blur(function()
    {
        if ($(this).val() == '')
        {
            if (!$(this).next().hasClass('greska'))
            {
                $(this).after('<span class="greska"> Ovo polje je obavezno! </span>');
            }
        }
        else
        {
            $(this).next('.greska').remove();
        }
    });

    // Provera za lozinku
    $('input[name="sifra1"]').keyup(function()
    {
        if ($(this).val().length <= 5) 
        {
            if (!$(this).next().hasClass('greska'))
            {
                $(this).after('<span class="greska"> kratka šifra! </span>');
            }
        }
        else
        {
            $(this).next('.greska').remove();
        }
    });

    // Prikazivanje/sakrivanje polja za vesti
    $('input:checkbox').change(function()
    {
        if ($(this).is(':checked'))
        {
            $('#vesti').slideDown(1000);
        }
        else 
        {
            $('#vesti').slideUp(1000);
        }
    });

    // Validacija formulara pri slanju podataka
    $('form').submit(function()
    {
        // Proveravamo korisnicko ime
        let username = $('input[name="username"]').val();
        if (username === '') 
        {
            $('#izvestaj').text('Korisničko ime je obavezno!');
            $('input[name="username"]').focus();
            return false;
        }

        // Proveravamo elektronsku adresu
        let email = $('input[name="email"]').val();
        if (email === '') 
        {
            $('#izvestaj').text('E-mail adresa je obavezna!');
            $('input[name="email"]').focus();
            return false;
        }

        let manki = email.indexOf('@');
        let poslednjaTackica = email.lastIndexOf('.');
        if (manki === -1 || poslednjaTackica === -1 || manki > poslednjaTackica) 
        {
            $('#izvestaj').text('Uneta e-mail adresa nije korektna!');
            return false;
        }

        // Proveravamo sifre (originalnu i ponovljenu sifru).
        let sifra_original = $('input[name="sifra1"]').val();
        let sifra_potvrda = $('input[name="sifra2"]').val();

        if (sifra_original === '' || sifra_original.length <= 5 || sifra_potvrda === '' || sifra_original != sifra_potvrda)
        {
            $('#izvestaj').text('Ponovo popunite polja za šifru!');
            $('input[name="sifra1"]').focus();
            return false;
        }

        // Proveravamo da li se korisnik prijavio na vesti 
        if ($('input:checkbox').is(':checked')) 
        {
            let oblast = $('select[name="oblast"]').val();
            if (oblast === '') 
            {
                window.alert('Niste odabrali oblast za vesti!');
                return false;
            }

            let vesti = $('input:radio[name="vesti"]:checked').val();
            let dinamika;
            switch (vesti)
            {
                case 'd':
                    dinamika = 'dnevnom';
                    break;
                case 'n':
                    dinamika = 'nedeljnom';
                    break;
                case 'm':
                    dinamika = 'mesecnom';
                    break;
            }
            window.alert(`Odabrali ste da primate vesti na ${dinamika} nivou`);
        }

        // Ako je sve u redu, u polju za izvestaj se na kratko moze videti zahvalnica...
        $('#izvestaj').text('Hvala što ste se prijavili!');

        return true;
    });

    $('form').on('reset', function()
    {
        $('span').text('');
        // Sakrivanje polja za vesti ukoliko su bile aktivne
        if ($('input:checkbox').is(':checked')) 
        {
            $('#vesti').slideUp(1000);
        };
    });

});