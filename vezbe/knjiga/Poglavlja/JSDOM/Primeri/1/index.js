const prviPasus = document.getElementById('prvi_pasus');
if (prviPasus != null) {
    console.log('Uspešno smo pronašli element sa identifikatorom prvi_pasus');
}

const sviPasusi = document.getElementsByTagName('p');
const brojPasusa = sviPasusi.length;
if (brojPasusa > 0) {
    console.log(`Ova veb stranica sadrži ${brojPasusa} paragraf/a`);
}

const parniPasusi = document.getElementsByClassName('parni');
if (parniPasusi.length > 0) {
    console.log(`Ova veb stranica sadrži ${parniPasusi.length} element/elemenata sa klasom "parni"`);
}

const srednjiPasus = document.querySelector('.parni');
if (srednjiPasus != null) {
    console.log('Postoji makar jedan element sa klasom "parni"');
}

const sviPasusiPonovo = document.querySelectorAll('p');
if (sviPasusiPonovo.length > 0) {
    console.log(`Ponovo vidimo da ova veb stranica sadrži ${sviPasusiPonovo.length} paragraf/a`);
}