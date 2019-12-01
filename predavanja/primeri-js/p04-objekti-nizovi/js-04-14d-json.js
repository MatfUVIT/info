let opis = '[{"name":"Emma de Milliano","sex":"f","born":1876,"died":1956,"father":"Petrus de Milliano","mother":"Sophia van Damme"},' +
    '{"name":"Carolus Haverbeke","sex":"m","born":1832,"died":1905,"father":"Carel Haverbeke","mother":"Maria van Brussel"}]';

let family = JSON.parse(opis);
console.log(family.length);
for (var i = 0; i < family.length; i++)
    console.log(family[i].name + " " + family[i].sex + " " + family[i].born + " " + family[i].died);
