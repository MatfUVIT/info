$(document).ready(function() {

    // prikazivanje i skrivanje formulara
    $('#infoS').click(function() {
        $('#studenti1').slideToggle(1000);
    });

    $('#infoI').click(function() {
        $('#ispiti1').slideToggle(1000);
    });

    $('#dodajS').click(function() {
        $('#studenti2').slideToggle(1000);
    });

    $('#dodajI').click(function() {
        $('#ispiti2').slideToggle(1000);
    });

    $('#obrisiP').click(function() {
        $('#podaci').slideToggle(1000);
    });

    // validacija i slanje zahteva

    // forma 1
    $('#form1').on('submit', function() {
        let indeks = $('#indeks1').val();
        
        // GET zahtev na studenti/ za dohvatanje podataka o svim studentima
        if(indeks === "") {
            $.ajax('http://localhost:3000/studenti', {
                method: "GET",
                success: function(data) {

                    if(data.hasOwnProperty("rezultat")) {
                        // rezultat prikazati u tabeli
                        let rezultat = data.rezultat;
                        
                        if(rezultat.length === 0) {
                            $("#rezultat").text(`Nema informacija o ispitima!`).css("color", "blue");
                            return false;
                        }

                        let tabela = "<table><tr><th>Ime</th><th>Prezime</th><th>Indeks</th></tr>";
                        for(let i=0; i<rezultat.length; i++) {

                            tabela += "<tr><td>" + rezultat[i].ime + "</td><td>"
                            + rezultat[i].prezime+"</td><td>"
                            + rezultat[i].indeks+"</td></tr>";
                        }

                        tabela += "</table>";

                        $("#rezultat").text("").append(tabela).css("color", "inherit");
                    }
                },
                error: function() {
                    $("#rezultat").text("Greska pri dohvatanju informacija o studentima!").css({color: "red"});
                }
            });

        }

        // GET zahtev na studenti/:indeks za dohvatanje podataka o jednom studentu
        else {
            $("#rezultat").css("color", "inherit");

            $.ajax(`http://localhost:3000/studenti/${encodeURIComponent(indeks)}`, {
                method: "GET",
                success: function(data) {
                    if(data.hasOwnProperty("rezultat")) {
                        // prikazivanje podataka u tabeli
                        let rezultat = data.rezultat;

                        let tabela = "<table><tr><th>Ime</th><th>Prezime</th><th>Indeks</th></tr>";
                        for(let i=0; i<rezultat.length; i++) {

                            tabela += "<tr><td>" + rezultat[i].ime + "</td><td>"
                            + rezultat[i].prezime+"</td><td>"
                            + rezultat[i].indeks+"</td></tr>";
                        }

                        tabela += "</table>";

                        $("#rezultat").text("").append(tabela).css("color", "inherit");
                    }
                },
                error: function(jqXHR) {
                    if(jqXHR.status === 404)
                        $("#rezultat").text(JSON.parse(jqXHR.responseText).poruka).css({color: "red"});
                    else
                        $("#rezultat").text("Greska pri dohvatanju informacija o studentu!").css({color: "red"});
                }
            });
        }

        return false;
    });


    // forma 2 - informacije o ispitima
    $('#form2').on('submit', function() {
        let parametar = $('#parametar').val();

        // GET zahtev na ispiti/predmet/:predmet za dohvatanje rezultata za jedan predmet
        if($("#polje_1").is(":checked")) {
            if(parametar === '') {
                $("#rezultat").text("Morate zadati parametar pretrage!").css("color", "red");
                return false;
            }

            $.ajax(`http://localhost:3000/ispiti/predmet/${parametar}`, {
                method: "GET",
                success: function(data) {
                    if(data.hasOwnProperty("rezultat")) {
                        // prikaz rezultata u tabeli
                        let rezultat = data.rezultat;
                        
                        if(rezultat.length === 0) {
                            $("#rezultat").text("Nema ispita za zadati predmet!").css("color", "red");
                            return false;
                        }

                        let tabela = "<table><caption>Rezultati ispita iz predmeta " + parametar + "</caption>";
                        tabela += "<tr><th>Indeks</th><th>Ime</th><th>Prezime</th><th>Bodovi</th></tr>";
                        for(let i=0; i<rezultat.length; i++) {
                            
                            tabela += "<tr><td>" + rezultat[i].student.indeks + "</td><td>"
                            + rezultat[i].student.ime+"</td><td>"
                            + rezultat[i].student.prezime +"</td><td>"
                            + rezultat[i].bodovi+"</td></tr>";
                        }

                        tabela += "</table>";

                        $("#rezultat").text("").append(tabela).css("color", "inherit");
                    
                    }
                },
                error: function() {
                    $("#rezultat").text("Greska pri dohvatanju informacija o studentu!").css({color: "red"});
                }
            });
        }

        // GET zahtev na ispiti/student/:indeks za dohvatanje svih ispita koje je student polagao
        else if($("#polje_2").is(":checked")) {
            if(parametar === '') {
                $("#rezultat").text("Morate zadati parametar pretrage!").css("color", "red");
                return false;
            }

            // koristimo funkciju encodeURICompontent jer broj indeksa sadrzi /
            $.ajax(`http://localhost:3000/ispiti/student/${encodeURIComponent(parametar)}`, {
                method: "GET",
                success: function(data) {
                    if(data.hasOwnProperty("rezultat")) {
                        let rezultat = data.rezultat;
                        
                        if(rezultat.length === 0) {
                            $("#rezultat").text("Student nije izlazio na ispite!").css("color", "red");
                            return false;
                        }

                        let tabela = "<table><tr><th>Predmet</th><th>Bodovi</th></tr>";
                        for(let i=0; i<rezultat.length; i++) {
                            tabela += "<tr><td>" + rezultat[i].predmet + "</td><td>"
                            + rezultat[i].bodovi+"</td></tr>";
                        }

                        tabela += "<caption>Ispiti na koje je student " + parametar
                            +  " izlazio</caption></table>";

                        $("#rezultat").text("").append(tabela).css("color", "inherit");
                    
                    }
                },
                error: function(jqXHR) {
                    if(jqXHR.status === 404)
                        $("#rezultat").text(JSON.parse(jqXHR.responseText).poruka).css("color", "red");
                    else
                        $("#rezultat").text("Greska pri dohvatanju informacija o studentu!").css({color: "red"});
                }
            });
        }

        // GET zahtev na ispiti/bodovi/:bodovi za dohvatanje podataka sa donjom granicom za bodove
        else if($("#polje_3").is(":checked")) {
            if(parametar === '') {
                $("#rezultat").text("Morate zadati parametar pretrage!").css("color", "red");
                return false;
            }

            $.ajax(`http://localhost:3000/ispiti/bodovi/${parametar}`, {
                method: "GET",
                success: function(data) {
                    if(data.hasOwnProperty("rezultat")) {
                        let rezultat = data.rezultat;
                        
                        if(rezultat.length === 0) {
                            $("#rezultat").text(`Nema ispita na kom je osvojeno vise od ${parametar} bodova!`).css("color", "red");
                            return false;
                        }
                        
                        let tabela = "<table><caption> Ispiti na kojima je postignuto vise od " + parametar + " poena</caption>";
                        tabela += "<tr><th>Predmet</th><th>Ime</th><th>Prezime</th><th>Indeks</th><th>Bodovi</th></tr>";
                        for(let i=0; i<rezultat.length; i++) {
                            
                            tabela += "<tr><td>" + rezultat[i].predmet + "</td><td>"
                            + rezultat[i].student.ime + "</td><td>"
                            + rezultat[i].student.prezime+"</td><td>"
                            + rezultat[i].student.indeks+"</td><td>"
                            + rezultat[i].bodovi+"</td></tr>";
                        }

                        tabela += "</table>";

                        $("#rezultat").text("").append(tabela).css("color", "inherit");
                    
                    }
                },
                error: function() {
                    $("#rezultat").text("Greska pri dohvatanju informacija o studentu!").css({color: "red"});
                }
            });
        }

        // GET na ispiti/ za dohvatanje svih ispita (ako je selektovano poslednje radio dugme ili nije selektovano nijedno)
        else {
            $.ajax(`http://localhost:3000/ispiti/`, {
                method: "GET",
                success: function(data) {
                    if(data.hasOwnProperty("rezultat")) {
                        let rezultat = data.rezultat;
                        
                        if(rezultat.length === 0) {
                            $("#rezultat").text(`Nema informacija o ispitima!`).css("color", "blue");
                            return false;
                        }

                        let tabela = "<table><tr><th>Predmet</th><th>Ime</th><th>Prezime</th><th>Indeks</th><th>Bodovi</th></tr>";
                        for(let i=0; i<rezultat.length; i++) {
                            
                            tabela += "<tr><td>" + rezultat[i].predmet + "</td><td>"
                            + rezultat[i].student.ime + "</td><td>"
                            + rezultat[i].student.prezime+"</td><td>"
                            + rezultat[i].student.indeks+"</td><td>"
                            + rezultat[i].bodovi+"</td></tr>";
                        }

                        tabela += "</table>";

                        $("#rezultat").text("").append(tabela).css("color", "inherit");
                    
                    }
                },
                error: function() {
                    $("#rezultat").text("Greska pri dohvatanju informacija o studentu!").css({color: "red"});
                }
            });
        }

        return false;
    });


    // forma 3 - dodavanje studenata
    $("#form3").submit(function()
    {
        let indeks = $("#indeks2").val();
        let ime = $("#ime").val();
        let prezime = $("#prezime").val();

        if (indeks === '') {
            $("#rezultat").text("Morate uneti indeks!").css("color", "red");
            return false;
        }

        // PATCH zahtev na studenti/:indeks za izmenu podataka o studentu (checkbox)
        if($("#izmeni").is(":checked")) {
            // priprema podataka za slanje na server
            let updateOptions = [];

            if (ime !== "")
            {
                updateOptions.push({
                    nazivPolja: "ime",
                    novaVrednost: ime
                });
            }

            if (prezime !== "")
            {
                updateOptions.push({
                    nazivPolja: "prezime",
                    novaVrednost: prezime
                });
            }

            $.ajax(`http://localhost:3000/studenti/${encodeURIComponent(indeks)}`, {
                method: "PATCH",
                data: JSON.stringify(updateOptions),
                contentType: 'application/json', 
                success: function(data) {
                    console.log("izmenjeno!");
                    $("#rezultat")
                            .text(`Uspesno ste izmenili podatke o studentu! `)
                            .css({color: "green"});
                },
                error: function() {
                    $("#rezultat").text("Greska pri izmeni podataka o studentu!").css({color: "red"});
                }
            });
        }

        // POST zahtev na studenti/ za dodavanje novog studenta u bazu
        else {

            if(ime === '' || prezime === '') {
                $("#rezultat").text("Morate popuniti sva polja!").css("color", "red");
                return false;
            }

            $.ajax("http://localhost:3000/studenti", {
                method: "POST",
                data: {
                    ime, prezime, indeks
                },
                success: function(data) {
                    console.log("napravljeno!");
                    if(data.hasOwnProperty("kreirano")) {
                        let kreirano = data.kreirano;
                        // prikaz rezultata u lepo uredjenom paragrafu
                        $("#rezultat").html(`<p>Ime:  ${kreirano.ime}
                            <br>Prezime: ${kreirano.prezime}
                            <br>Indeks: ${kreirano.indeks}
                            </p> `).css("color", "inherit");
                    }
                },
                error: function() {
                    $("#rezultat").text("Greska pri postavljanju studenta!").css({color: "red"});
                }
            });
        }
        

        return false;
    });

    // forma 4 - dodavanje ispita
    $("#form4").submit(function()
    {
        let predmet = $("#predmet").val();
        let indeks = $("#indeks3").val();
        let bodovi = $("#bodovi").val();

        if(predmet === '' || indeks === '' || bodovi === '') {
            $("#rezultat").text("Morate popuniti sva polja!").css("color", "red");
            return false;
        }

        // POST zahtev na ispiti/ za dodavanje novog ispita
        $.ajax("http://localhost:3000/ispiti", {
            method: "POST",
            data : {
                predmet, indeks, bodovi
            },
            success: function(data) {
                $("#rezultat").text(data.poruka).css("color", "green");
            },
            error: function(jqXHR) {
                if(jqXHR.status === 404)
                    $("#rezultat").text(JSON.parse(jqXHR.responseText).poruka).css("color", "red");
                else
                    $("#rezultat").text("Neuspelo dodavanje ispita!").css("color", "red");
            }
        });

        return false;
    });

    // forma 5 - brisanje podataka
    $("#form5").submit(function() {
        let indeks = $("#indeks4").val();
        
        if(indeks === '') {
            $("#rezultat").text("Morate popuniti polje Indeks!").css("color", "red");
            return false;
        }

        // DELETE zahtev na /ispiti/:indeks za brisanje ispita odredjenog studenta
        $.ajax(`http://localhost:3000/ispiti/${encodeURIComponent(indeks)}`, {
            method: "DELETE",
            success: function(data) {
                $("#rezultat").text("Uspesno su obrisani podaci o ispitima studenta!").css("color", "green");
            },
            error: function() {
                $("#rezultat").text("Doslo je do greske prilikom brisanja podataka o ispitima studenta!").css("color", "red");
            }
        });
        

        // DELETE zahtev na /studenti/:indeks za brisanje studenta na zahtev korisnika (checkbox)
        if($("#obrisi").is(":checked")) {
            $.ajax(`http://localhost:3000/studenti/${encodeURIComponent(indeks)}`, {
            method: "DELETE",
            success: function(data) {
                $("#rezultat").text("Uspesno su obrisani podaci o studentu!").css("color", "green");
            },
            error: function() {
                $("#rezultat").text("Doslo je do greske prilikom brisanja podataka o studentu!").css("color", "red");
            }
        });
        }

        return false;
    });
});