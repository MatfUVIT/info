$(document).ready(function () {
    // Redni broj slicice koja se trenutno vidi.
    let i = 0;

    // Kad se dokument ucita, sakrivamo sve slicice osim prve.
    $('#galerija div:gt(0)').hide();

    // Prikaz naredne slike
    const narednaSlika = function () {
        // Sakrivamo tekucu slicicu
        $('#galerija div:eq(' + i + ')').fadeOut(1000);

        // Odredjujemo indeks sledece slicice
        i = (i == 3) ? 0 : i + 1;

        // Prikazujemo sledecu slicicu
        $('#galerija div:eq(' + i + ')').fadeIn(1000);
    };

    // Prikaz prethodne slike
    const prethodnaSlika = function () {
        // Sakrivamo tekucu slicicu
        $('#galerija div:eq(' + i + ')').fadeOut(1000);

        // Odredjujemo indeks prethodne slicice
        i = (i == 0) ? 3 : i - 1;

        // Prikazujemo prethodnu slicicu
        $('#galerija div:eq(' + i + ')').fadeIn(1000);
    };

    // Dodajemo osluskivace za dugmice naredna i prethodna
    $('#naredna').click(narednaSlika);
    $('#prethodna').click(prethodnaSlika);

    // Promenljiva koja pamti podesavanja za setInterval
    let si;

    // Aktiviranje slideshow-a
    $('#slideshow').click(function () {
        /*
            Brisemo stari slideShow ako je postojao.
            Ovim se sprecava nekorektno ponasanje ako korisnik vise puta klikne na ovo dugme
        */
        window.clearInterval(si);

        si = window.setInterval(function () 
        {
            // Specijalan slucaj kad se prelazi iz poslednje u prvu slicicu
            if (i == 3) 
            {
                $('#galerija div:last').fadeOut(1000);
                $('#galerija div:first').fadeIn(1000);
                i = 0;
            } 
            // Ostali slucajevi
            else 
            {
                $('#galerija div:eq(' + i + ')')
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000);
                ++i;
            }

        }, 1000);

        // Menjamo izgled slideshow dugmeta u aktivno
        $(this).addClass('aktivnoDugme');

        // Onemogucujemo da korisnik klikne na dugmice naredna i prethodna
        $('#naredna').off('click');
        $('#prethodna').off('click');
    });

    // Prekidanje slideshow-a
    $('#stop').click(function () 
    {
        // Brisemo stanje za slideshow
        window.clearInterval(si);

        // Vracamo dugme za slideshow u normalno stanje
        $('#slideshow').removeClass('aktivnoDugme');

        // Aktiviramo ostale dugmice
        $('#naredna').click(narednaSlika);
        $('#prethodna').click(prethodnaSlika);
    });
});