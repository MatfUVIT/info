const bucna = function (f) {
    return function (arg) {
        console.log(`poziv   '${f.name}' sa argumentom `, arg);
        var val = f(arg);
        console.log(`pozvana '${f.name}' sa argumentom `, arg, " - rezultat ", val);
        return val;
    };
}

bucna(Boolean)(0);
bucna(Math.sin)(Math.PI / 2);
bucna(Math.cos)(Math.PI / 2);