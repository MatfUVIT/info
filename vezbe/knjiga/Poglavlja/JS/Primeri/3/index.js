(function(){

// Poredjenje dve vrednosti po jednakosti se moze vrsiti na dva nacina.

// Operator == ne uzima u obzir tip vrednosti koje se porede,
// vec je njegova vrednost true ako se vrednosti mogu konvertovati jedna u drugu.
console.log('Operator ==');
console.log('0 == false <=>', 0 == false);
console.log('42 == \'42\' <=>', 42 == '42');
console.log('1 == "jedan" <=>', 1 == 'jedan');
// Operator === zahteva da vrednosti imaju i isti tip i istu vrednost.
console.log("Operator ===");
console.log("0 === false <=>", 0 === false);
console.log("42 === '42' <=>", 42 === '42');
console.log("1 === 'jedan' <=>", 1 === 'jedan');
console.log("0 === 0 <=>", 0 === 0);
console.log("false === false <=>", false === false);
console.log("'jedan' === \"jedan\" <=>", 'jedan' === "jedan");

// Ovaj kod takodje demonstrira kako mozemo ugnezdjavati niske jednu u drugu
// kao i kako mozemo oznaciti (engl. escape) navodnike unutar niski (koriscenjem \' i \").

})();