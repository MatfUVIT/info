let opis = '{"name":"Miki Maus","born":1980, "father":"Volt Dizni"}';

opis = `
{
    "version": "0.2.0",
    "configurations": [    

        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "workspaceFolder/predavanja/primeri-js/p04-objekti-nizovi/js-04-14b-json.js"
        }
    ]
}`;

let konfiguracija = JSON.parse(opis);

console.log(konfiguracija);
