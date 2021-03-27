const prviDiv = document.getElementById('prvi');
if (prviDiv != null) {
    prviDiv.innerHTML = '<h2>Prvi podnaslov</h2>';
} else {
    console.log('Ne mogu da pronadjem element sa identifikatorom "prvi".');
}

const drugiDiv = document.getElementById('drugi');
if (drugiDiv != null) {
    drugiDiv.outerHTML = 
        `<main id="drugi">
            <h2>Drugi podnaslov</h2>
        </main>`;
} else {
    console.log('Ne mogu da pronadjem element sa identifikatorom "drugi".');
}