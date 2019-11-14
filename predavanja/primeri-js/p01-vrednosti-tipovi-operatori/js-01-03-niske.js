console.log("---");
/* запис ниске */
let x = " Trla baba lan, da joj prođe dan ";
console.log(x);

/* алтернативни запис ниске */
x = ' Trla baba lan, da joj prođe dan ';
console.log(x);

/* коришћћење знака \ омогућава да се ниска пружа кроз више редова */
x = " Trla baba lan, \
da joj prođe dan ";
console.log(x);

/* коришћћење знака \ омогућава да се ниска пружа кроз више редова */
x = " Trla \
baba lan, \
da joj prođe \
dan ";
console.log(x);

console.log("---");
/* ниска која садржи знак за крај линије */
let y = " Trla baba lan,\n da joj prođe dan ";
console.log(y);

console.log("---");
/* ниска која садржи секвенцу знакова "\n" */
let z = " Trla baba lan,\"\\n\" da joj prođe dan ";
console.log(z);

/* ниска која садржи секвенцу знакова "\n" */
z =' Trla baba lan,"\\n" da joj prođe dan ';
console.log(z);
