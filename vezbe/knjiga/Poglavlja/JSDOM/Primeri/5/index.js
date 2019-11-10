/** Funkcija kreira HTML strukturu zadatog elementa `body` korišćenjem svojstva `innerHTML`.
 * 
 * @param {Body} body Element čija će HTML struktura biti dinamički kreirana.
 */
function napravi_html_strukturu_1(body) {
    body.innerHTML = 
        `<div>
            <h1>JavaScript</h1>
            <p>Super jezik, ali samo ako znamo kako se koristi :)</p>
            <ul>
                <li>Može da se koristi na klijentskoj strani</li>
                <li>Ali i na serverskoj</li>
            </ul>
        </div>`;
}

/** Funkcija kreira HTML strukturu zadatog elementa `body` korišćenjem metoda `document.createElement` za kreiranje novih čvorova DOM stabla i metoda `appendChild` nad roditeljskim čvorom za povezivanje roditeljskog čvora i dete čvora.
 * 
 * @param {Body} body Element čija će HTML struktura biti dinamički kreirana.
 */
function napravi_html_strukturu_2(body) {
    // Prvo kreiramo promenljive koje predstavljaju HTML elemente
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h1_text = document.createTextNode('JavaScript');
    const p = document.createElement('p');
    const p_text = document.createTextNode('Super jezik, ali samo ako znamo kako se koristi :)');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li1_text = document.createTextNode('Može da se koristi na klijentskoj strani');
    const li2 = document.createElement('li');
    const li2_text = document.createTextNode('Ali i na serverskoj');

    // A zatim iz povezemo u drvoliku strukturu
    body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(ul);
    h1.appendChild(h1_text);
    p.appendChild(p_text);
    ul.appendChild(li1);
    ul.appendChild(li2);
    li1.appendChild(li1_text);
    li2.appendChild(li2_text);
}

const bodies = document.getElementsByTagName('body');
if (bodies.length > 0) {
    const body = bodies[0];
    // napravi_html_strukturu_1(body);
    napravi_html_strukturu_2(body);
}