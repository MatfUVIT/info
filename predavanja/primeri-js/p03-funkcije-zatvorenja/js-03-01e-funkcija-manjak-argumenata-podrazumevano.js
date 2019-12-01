const triArgumentaPodrazumenvano = function(a = 'a', b = 'b', c = null) {
    console.log('---\n' + a)
    console.log(b)
    console.log(c)
};

triArgumentaPodrazumenvano(1, 2, 'tri');
triArgumentaPodrazumenvano(1, 2);
triArgumentaPodrazumenvano(1);
triArgumentaPodrazumenvano();