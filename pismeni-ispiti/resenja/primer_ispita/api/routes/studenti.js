const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Student = require('../models/student');

// dohvatanje informacija o svim studentima
router.get('/', function(req, res, next) {

    Student.find({}, function(err, result)
    {
        if (err)
        {
            return res.status(500).json({reason: err});
        }

        res.status(200).json({
            rezultat: result
        });
    });
});

// dodavanje novog dokumenta u bazu
router.post('/', function(req, res, next) {
    // prvo pravimo novi objekat sa podacima iz tela zahteva
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        ime: req.body.ime,
        prezime: req.body.prezime,
        indeks: req.body.indeks
    });

    // nad objektom pozivamo metod za cuvanje dokumenta u bazu
    student.save(function(err, result) {
        if (err) 
        {
            return res.status(500).json({reason: err});
            
        }
        res.status(201).json({
            poruka: 'Student je uspesno kreiran',
            kreirano: result
        });
    });
});


// Individualni
// dohvatanje informacija o studentu sa zadatim indeksom
router.get('/:indeks', function(req, res, next) {
    const indeks = req.params.indeks;

    Student.find({indeks : indeks}, function(err, result)
    {
        // Provera da li je doslo do greske
        if (err)
        {
            return res.status(500).json({reason: err});
        }

        // Provera da li je pronadjen objekat
        if (result.length > 0)
        {
            return res.status(200).json({rezultat: result});
        }
        
        // nije pronadjen objekat
        res.status(404).json({poruka: "Ne postoji trazeni student"});
    });
});

// azuriranje podataka o studentu sa zadatim indeksom
router.patch('/:indeks', function(req, res, next) {
    const indeks = req.params.indeks;
    
    // formiramo objekat koji definise koja polja treba azurirati
    const zaAzuriranje = {};

    for (let i = 0; i < req.body.length; ++i)
    {
        let opcija = req.body[i];
        zaAzuriranje[opcija.nazivPolja] = opcija.novaVrednost;
    }

    Student.updateOne({indeks : indeks}, {$set : zaAzuriranje}, function(err, raw){
        if (err)
        {
            return res.status(500).json({poruka: err});
        }

        res.status(200).json({poruka: "Uspesno su izmenjeni podaci o studentu!"});
    });
});

// brisanje podataka o studentu sa zadatim indeksom
router.delete('/:indeks', function(req, res, next) {
    const indeks = req.params.indeks;

    Student.deleteOne({indeks : indeks}, function(err){
        if (err)
        {
            return res.status(500).json({poruka: err});
        }

        res.status(200).json({poruka: "Uspesno su obrisani podaci o studentu!", indeks});
    });
});

module.exports = router;