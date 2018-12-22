function bezArgumenata() {
}

// Ovo je OK
bezArgumenata(1, 2, 3);

function triArgumenta(a, b, c) {
    console.log("---\n" + a)
    console.log(b)
    console.log(c)

}

// I ovo je OK
triArgumenta(1, 2, "tri");
triArgumenta(1, 2);
triArgumenta(1);
triArgumenta();

function triArgumentaPodrazumenvano(a = 'a', b = 'b', c = null) {
    console.log("---\n" + a)
    console.log(b)
    console.log(c)
}

triArgumentaPodrazumenvano(1, 2, "tri");
triArgumentaPodrazumenvano(1, 2);
triArgumentaPodrazumenvano(1);
triArgumentaPodrazumenvano();

