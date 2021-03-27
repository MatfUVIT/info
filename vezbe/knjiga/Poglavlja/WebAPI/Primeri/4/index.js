const paragrafi = document.getElementsByTagName('p');

for (const i in paragrafi) {
    const paragraf = paragrafi[i];
    
    if (i % 2 === 0) {
        // Nazivi CSS svojstava koja nemaju crticu 
        // odgovaraju nazivima JavaScript objekata DOM stabla.
        paragraf.style.padding = '10px';
        paragraf.style.color = 'BlueViolet';

        // Nazivi CSS svojstava koja imaju crticu 
        // transformisu se u JavaScript objektima DOM stabla
        // tako sto se crtice uklanjaju,
        // a naredno slovo nakon crtice postaje veliko (camelCase imenovanje).
        paragraf.style.backgroundColor = '#FFECA1';
        paragraf.style.textTransform = 'uppercase';
    } else {
        paragraf.className = 'neparni paragraf';
    }
}