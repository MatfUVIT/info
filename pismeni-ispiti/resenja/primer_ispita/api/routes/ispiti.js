const express = require('express');
const mongoose = require('mongoose');

const Ispit = require('../models/ispit');
const Student = require('../models/student');

const router = express.Router();

// informacije o svim ispitima
router.get('/', function(req, res, next) {
    Ispit.find({}, {predmet:1, student:1, bodovi:1}, function(err, result)
    {
        if (err)
        {
            return res.status(500).json({reason: err});
        }

        res.status(200).json({
            rezultat: result
        });
    // nadovezivanje poziva metoda populate da bismo dobili odatke o studentima
    }).populate('student', {indeks:1, ime:1, prezime:1});
});

// dodavanje informacija o ispitu
router.post('/', function(req, res, next) {
    // citamo indeks iz tela zahteva
    const indeks = req.body.indeks;

    /* proveravamo da li postoji student sa zadatim indeksom 
    pre nego sto unesemo podatke o ispitu koji je polagao*/
    Student.find({indeks : indeks}, function(err, result) {
        if (err) {
            return res.status(500).json({porukaFind: err});
        }

        if (result.length === 0) {
            return res.status(404).json({poruka: "Ne postoji zadati student!"});
        } 
        else {
            // pravimo novi objekat koji dodajemo u bazu
            const ispit = new Ispit({
                _id: new mongoose.Types.ObjectId(),
                predmet: req.body.predmet,
                /* result sadrzi podatke dohvacene upitom nad Student
                   result je niz dokumenata, a posto je indeks jedinstven za svakog studenta
                   result ce sadrzati najvise jedan element
                */
                student: result[0]._id,
                bodovi: req.body.bodovi
            });
        
            // cuvamo objekat u bazu
            ispit.save(function(error, result1) {
                if (error) 
                {
                    return res.status(500).json({porukaSave: error});
                    
                }
                res.status(201).json({
                    poruka: 'Ispit je uspesno dodat!'
                });
            });
        }
    });
});

// informacije o ispitima za zadati predmet
router.get('/predmet/:predmet', function(req, res, next) {
    let predmet = req.params.predmet;

    // drugi parametar odredjuje koja polja iz dokumenta zelimo da citamo
    Ispit.find({predmet : predmet}, {student:1, bodovi:1}, function(err, result)
    {
        if (err)
        {
            return res.status(500).json({reason: err});
        }

        res.status(200).json({
            rezultat: result
        });

    // pozivom populate dodajemo podatke o studentima
    // pozivom sort definisemo sortiranje po bodovima
    }).populate('student', {ime:1, prezime:1, indeks:1}).sort({bodovi:-1});
});

// informacije o ispitima za zadatog studenta
router.get('/student/:indeks', function(req, res, next) {
    // citamo indeks iz url-a
    let indeks = req.params.indeks;

    /* provera da li student sa zadatim indeksom postoji i dohvatamo njegov _id
        kako bismo mogli da izvrsimo pretragu u kolekciji Ispit
    */
    Student.find({indeks : indeks}, function(err, result) {
        if (err) {
            return res.status(500).json({porukaFind: err});
        }

        if (result.length === 0) {
            return res.status(404).json({poruka: "Ne postoji zadati student!"});
        } 
        else {
            Ispit.find({student : result[0]._id}, {predmet:1, bodovi:1}, function(err, result)
            {
                if (err)
                {
                    return res.status(500).json({reason: err});
                }

                res.status(200).json({
                    rezultat: result
                });
            });
        }
    });
});

// informacije o ispitima na kojima su studenti osvojili odredjen broj bodova
router.get('/bodovi/:bodovi', function(req, res, next) {
    let bodovi = req.params.bodovi;

    Ispit.find({bodovi : {$gte : bodovi}}, function(err, result)
    {
        if (err)
        {
            return res.status(500).json({reason: err});
        }

        res.status(200).json({
            rezultat: result
        });
    }).populate('student').sort({predmet:1});
});

// brisanje informacija o ispitima zadatog studenta
router.delete('/:indeks', function(req, res, next) {
    const indeks = req.params.indeks;
    Student.find({indeks : indeks}, function(err, result) {
        if (err) {
            return res.status(500).json({porukaFind: err});
        }

        if (result.length === 0) {
            return res.status(404).json({poruka: "Ne postoji zadati student!"});
        } 
        else {
            /* koristimo funckiju deleteMany za brisanje 0 ili vise dokumenata
               iz kolekcije Ispit koji se odnose na odredjenog studenta
            */
            Ispit.deleteMany({student : result[0]._id}, function(err){
                if (err)
                {
                    return res.status(500).json({poruka: err});
                }
        
                res.status(200).json({poruka: "Uspesno su obrisani podaci o ispitima studenta!"});
            });
        }
    });
});


module.exports = router;