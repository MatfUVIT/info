console.log('---');
const sreca = () => console.log('Sto sam srecan!');

for (let i = 0; i < 3; i++)
    sreca();

console.log('---');
const poruka = x => console.log(`Poruka: '${x}'`);

for (let i = 0; i < 3; i++)
    poruka('vazna poruka broj ' + i);