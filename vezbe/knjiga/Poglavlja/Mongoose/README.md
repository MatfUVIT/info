[Vežbe](../../../README.md)

[Knjiga](../../README.md)

-----

<style>
.domaci-zadatak {
    border: 5px solid gold;
    padding: 10px;
}

.domaci-zadatak .naslov {
    font-weight: bold;
    text-align: center;
    display: block;
}

.domaci-zadatak .tekst {
    border-top: 2px dashed black;
    border-bottom: 2px dashed black;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>

# 9. Mongoose.js ORM

Kako bi naše serverske aplikacije bile kompletne, potrebno je da naučimo kako da ih povežemo sa bazama podataka. Time ćemo se osigurati da sve operacije nad našim podacima budu trajno zapamćene, čak i kada naše serverske aplikacije prestanu da rade.

Iako je moguće komunicirati iz Node.js aplikacije ka MongoDB bazi podataka pomoću zvaničnog MongoDB drajvera koji se razvija od strane razvijača MongoDB baze podataka[^2], mi ćemo u našim aplikacijama koristiti razvojno okruženje Mongoose.js[^3]. Razlog za ovu odluku jeste što nam Mongoose.js omogućava da pišemo kod koji se poprilično dobro uklapa u ono što već znamo. Drugim rečima, moći ćemo da upotrebimo kod koji smo prethodno napisali bez i jedne konceptualne promene. Pređimo na implementaciju.

[^2]: Više informacije se može pronaći na zvaničnoj stranici projekta [ovde](https://mongodb.github.io/node-mongodb-native/). 

[^3]: Zvanična veb prezentacija projekta se nalazi [ovde](https://mongoosejs.com/), dok je dokumentaciju moguće pronaći [ovde](https://mongoosejs.com/docs/api.html)


U novoj verziji naše aplikacije želimo da implementiramo da se podaci čitaju iz baze umesto iz niza. Prvo ćemo instalirati paket `mongoose`

```shell
npm install mongoose
```

Nakon toga, u datoteci `app.js`, potrebno je da ga učitamo kao i sve prethodne:

```js
const mongoose = require('mongoose');
```

Da bi naša aplikacija mogla da koristi MongoDB SUBP pomoću biblioteke Mongoose, potrebno je da specifikujemo na koju bazu podataka se naša aplikacija povezuje. To se vrši pozivom funkcije `connect()` iz paketa `mongoose`. Ovu akciju je dovoljno uraditi jednom, te ćemo je mi smestiti na vrhu paketa `app.js`: 

1. Prvi argument ove funkcije je URL do baze podataka, zapisan kao niska. Prema specifikaciji MongoDB SUBP, ovaj URL se sastoji od sledećih elemenata: (1) Shema `mongodb://`, (2) adresa računara na kojem je pokrenut MongoDB SUBP; u našem slučaju, mi imamo pokrenut MongoDB server na lokalnom računaru, te je moguće koristiti lokalnu adresu `127.0.0.1`, odnosno, `localhost`, (3) port na kojem je pokrenut MongoDB SUBP; podrazumevano je `27017`, (4) naziv baze podataka. 

2. Drugi argument predstavlja objekat koji određuje dodatna podešavanja.

S obzirom da ćemo našu bazu podataka nazvati `Fakultet`, metod `connect()` pozivamo na sledeći način u paketu `app.js`:

```js
// app.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Fakultet", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
```

Drugi argument dodajemo kako bismo izbegli upozorenja o zastarelosti nekih pomoćnih metoda koji su se ranije koristili.

## 9.1. Definisanje sheme i modela dokumenata

Nastavljamo sa izmenama u modelu `student.js`. Rekli smo da umesto niza želimo da koristimo podatke iz baze. Da bi to bilo moguće, potrebno je da definišemo **shemu dokumenata** koji su upisani u kolekciji `students`, a zatim da napravimo odgovarajući model pomoću kog ćemo vršiti komunikaciju sa bazom. U te svrhe koristimo konstruktor `Schema` iz paketa `mongoose` koji je potrebno uključiti i u ovu datoteku.

```js
// models/student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        required: true  
    },
    name: String,
    surname: String,
    major: String,
    grades: {
        type: [Number],
        required: true,
        default: []
    },
    note: {
        type: String,
        default: ""
    }
}, { collection: "students" });
```

Konstruktor `mongoose.Schema` očekuje da mu se proslede dva JavaScript objekta. Prvi od njih opisuje shemu dokumenata, a drugi sadrži dodatna podešavanja kao što je naziv kolekcije u bazi podataka (što se podešava navođenjem svojstva `collection` kao što je prikazano iznad). Objekat koji definiše shemu dokumenata sadrži svojstva čiji nazivi odgovaraju nazivima polja u dokumentima kolekcije `students`, a vrednosti ovih svojstava služe za opisivanje informacija o tim poljima. Neke od informacija koje možemo specifikovati (a koji su prikazani iznad) jesu:

- Tip podataka koji se čuva u tom polju (`type`)
    - `String`
    - `Number`
    - `Date`
    - `Boolean`
    - `mongoose.Schema.Types.ObjectId`
    - nizovi
    - ...

- Da li je polje obavezno ili ne, tj. da li svaki dokument mora da ima postavljenu vrednost za ovo polje ili ne (`required`).

- Podrazumevana vrednost za ovo polje (`default`). Ova vrednost se koristi u slučaju da se prilikom upisa u bazu ne navede vrednost za ovo polje.

Primetimo sledeće važne napomene:

- Polje `_id` predstavlja jedinstveni identifikator dokumenta. Svaki dokument u bazi podataka mora da sadrži ovo polje, tj. ovo je polje koje je jedino sigurno obavezno za sva dokumenta. Svi identifikatori u MongoDB BP imaju tip `mongoose.Schema.Types.ObjectId`. U pitanju su objekti čija je tekstualna reprezentacija niska u heksadekadnom zapisu od 24 karaktera, na primer: `"5e1a0651741b255ddda996c4"`.

- Ukoliko za neko polje želimo da specifikujemo samo njegov tip i ništa drugo (na primer, takva su polja `_id`, `name`, `surname`, i sl. u shemi iznad), onda je dovoljno navesti odgovarajući tip. Inače, ako želimo da specifikujemo i neke druge informacije, poput `required` ili `default`, onda je vrednost svojstva objekat koji sadrži odgovarajuće informacije (na primer, takva su polja `username`, `password`, i sl. u shemi iznad).

- Dokumenti, pored jednostavnih podataka kao što su brojevi i niske, mogu čuvati i nizove podataka. Da bismo rekli da neko polje predstavlja niz nekakvih vrednosti tipa `T`, onda moramo specifikovati tip tog polja kao `[T]`. Na primer, niz brojeva se zapisuje kao tip `[Number]`, niz niski kao tip `[String]`, niz identifikatora kao tip `[mongoose.Schema.Types.ObjectId]`, itd.

Kreiranjem objekta `Schema` smo tek opisali kakve dokumente očekujemo da postoje u kolekciji `students`. Možemo reći da smo samo opisali tip podataka za jednog studenta. Međutim, da bismo mogli da upravljamo nad ovim podacima (na primer, da ih čitamo, menjamo, brišemo i sl.), potrebno je da konstruišemo **model dokumenata**. Ovo je moguće uraditi korišćenjem metoda `model`:

```js
// models/student.js (nastavak)

const StudentModel = mongoose.model('Student', studentSchema);
```

Prvi argument predstavlja naziv modela, a drugi shema koju smo upravo napravili. Svaki model u bazi podataka mora imati jedinstven naziv! Operacije sa bazom vršićemo upravo nad ovim modelom. Potrebno je još da izvezemo model kako bi ovaj model bio dostupan i drugim modulima:

```js
// models/student.js (nastavak)

module.exports.model = StudentModel;
```

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 1</span> 
    <div class="tekst">
        Napisati Mongoose shemu `artikalShema` za kolekciju `artikli` iz MongoDB baze podataka `Prodavnica` koja sadrži naredne informacije:
        <ul>
            <li>naziv (niska)</li>
            <li>cena (broj)</li>
            <li>broj artikala (broj)</li>
        </ul>
        Kreirati Mongoose model `Artikal` na osnovu date sheme.
    </div>
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 2</span> 
    <div class="tekst">
        Napisati Mongoose shemu `porudzbinaShema` za kolekciju `porudzbine` iz MongoDB baze podataka `Prodavnica` koja sadrži naredne informacije:
        <ul>
            <li>ime i prezime korisnika (niska)</li>
            <li>broj artikala (broj)</li>
            <li>datum naručivanja (datum)</li>
            <li>datum isporuke (datum)</li>
            <li>identifikator artikla na koji se porudžbina odnosi (tj. identifikator koji referiše na model `Artikal`)</li>
        </ul>
        Kreirati Mongoose model `Porudzbina` na osnovu date sheme.
    </div>
</div>

## 9.2. Čitanje dokumenata

Sada smo spremni za čitanje podataka iz baze. Menjamo implementaciju funkcije `getStudent()` tako da, umesto iz niza, čita podatke iz baze i proverava njihovu korektnost. Za čitanje iz baze koristimo metod `find()` koji je dostupan preko modela koji smo upravo napravili i izvezli. Metod `find()` funkcioniše poput funkcije `find()` koju smo koristili u `MongoDB shell` programu. Dakle, prvi argument je **upit** na osnovu kojeg se vrši pretraživanje podataka, a drugi, opcioni argument je **projekcija** koja definiše koja polja dokumenata će biti uključena u rezultatu. 

Metod `find()` radi asinhrono, tako da i naša funkcija `getStudent()` mora biti asinhrona. To postižemo dodavanjem ključne reči `async` u potpisu funkcije. Dodatno, ispred poziva funkcije `find()` dodajemo ključnu reč `await` kako bi se naredne operacije izvršile tek nakon što pristignu podaci. Na kraju je još potrebno da ulančamo metod `exec()` koji pokreće asinhronu funkciju.

Funkcija `find` uvek vraća **niz** dokumenata (objekata) koji su ispunili uslove upita. Ukoliko ne postoje takvi dokumenti, biće vraćen **prazan niz**. Zbog toga, proveru da li elementi postoje moramo izvršiti ispitivanjem broja elemenata u nizu. Kompletna implementacija funkcije `getStudent()` data je u nastavku:

```js
module.exports.getStudent = async function (studentUsername, studentPassword) {
    let students = await StudentModel.find({username: studentUsername}).exec();

    if (students.length > 0) {
        return students[0];
    }
    else {
        return null;
    }
};
```

Napomenimo da je naredna provera **nekorektna**, zato što bi izvršavanje uvek ulazilo u `else` granu. Objašnjenje za ovo ponašanje jeste da nizovi, bilo da su prazni ili ne, nikada nisu jednaki vrednosti `null`.

```js
// models/student.js (nastavak)

module.exports.getStudent = async function (studentUsername, studentPassword) {
    let students = await StudentModel.find({username: studentUsername}).exec();

    // Nekorektno!!! `students` je uvek niz (prazan ili neprazan)
    if (students === null) {
        // Ovo se nikad ne izvršava
        return null;
    }
    else {
        // Čak i da je `students` prazan niz, on i dalje nije jednak `null`,
        // pa će i u tom slučaju izvršavanje ući u `else` granu.
        // Šta će funkcija vratiti ako pokušamo da pristupimo prvom elementu praznog niza?
        return students[0];
    }
};
```

### 9.2.1. Čitanje dokumenata preko identifikatora

Slično metodu `find()`, postoji metod `findById()`, koji umesto upita prima vrednost sa kojom će biti upoređeno polje `_id`. Drugim rečima, ovaj metod pronalazi dokument iz kolekcije čiji se identifikator prosleđuje kao argument. S obzirom da je identifikator jedinstven za svaki dokument, metod `findById()` vraća **objekat** ukoliko uspe da pronađe traženi dokument, a `null` inače. Primetimo da se ovo razlikuje od metoda `find()` koji uvek vraća niz kao rezultat.

Ako bismo imali identifikator studenta, mogli bismo da napišemo narednu funkciju za pronalaženje studenta pomoću metoda `findById()`:

```js
// models/student.js (nastavak)

module.exports.getStudentById = async function (studentId) {
    let student = await StudentModel.findById(studentId).exec();
    // Nakon poziva metoda `findById`, vrednost promenljive `student` će biti tačno jedno od:
    // 1. Objekat studenta čiji je identifikator jednak `studentId`
    // 2. null

    // Drugim rečima, ova funkcija se ponaša identično kao getStudent() iznad (korektna verzija)
    return student;
};
```

### 9.2.2. Poziv modela za čitanje podataka iz kontrolera

Ostaje nam još da minimalno modifikujemo datoteku `controllers/student.js` kako bi sve funkcionisalo. Naime, funkcija koju smo upravo napisali izvršava se asinhrono, slično kao i `find()` koje smo koristili. Zbog toga, prilikom poziva ove funkcije, pre nego šro vratimo odgovor sa servera, treba da sačekamo da se podaci uspešno pročitaju. Ovo činimo na isti način kao i malo pre, dodavanjem ključne reči `await` ispred poziva `getStudent()`. Zbog toga i funkcija `displayStudent()` iz `controllers/student.js` postaje asinhrona: 

```js
// controllers/student.js
const StudentModel = require("../models/student");

module.exports.displayStudent = async function (req, res, next) {
    const studentObject = await StudentModel.getStudent(req.body.username, req.body.password);

    // Ili: if (studentObject === null)
    if (!studentObject) { 
        console.log("Nije pronađen student!");
    }
    else {
        console.log("Pronađen je student!");
    }
    
    return res.render('student.ejs', {
        student: studentObject
    });
};
```

## 9.3. Kreiranje novih dokumenata

Da bismo u neku kolekciju baze podataka upisali novi dokument, na serveru je potrebno prvo da kreiramo objekat koji predstavlja taj novi dokument, pa zatim da pošaljemo zahtev SUBP da taj objekat sačuva kao dokument. Ova dva koraka predstavljaju proceduru za kreiranje novih dokumenata. 

Pri kreiranju novog dokumenta, neophodno je obratiti pažnju na to koja polja u shemi su definisana kao obavezna (tj. imaju opciju `required` postavljenu na `true`). Za ova polja je neophodno da postavimo vrednosti pre čuvanja, inače će SUBP prijaviti grešku. Postoji jedan izuzetak od ovog pravila, a to je slučaj kada polje koje je obavezno ima postavljenu podrazumevanu vrednost (tj. ima opciju `default` postavljenu na neku vrednost koja se smatra podrazumevanom). Za takva polja nije neophodno navesti vrednost već će biti iskorišćena podrazumevana vrednost. Naravno, ukoliko prilikom konstrukcije dokumenta prosledimo neku drugu vrednost za takvo polje, onda će biti korišćena prosleđena vrednost, a ne podrazumevana vrednost, što je i očekivano ponašanje.

Pogledajmo sada našu shemu studenata. Mi smo jedino smo deklarisali polja `username`, `password` i `grades` kao obavezna, pri čemu polje `grades` ima postavljenu podrazumevanu vrednost. Dakle, korisnik mora da prosledi serveru korisničko ime i lozinku i bez tih polja nije moguće kreirati novi dokument za novog studenta. Međutim, postoji još jedno polje koje je implicitno obavezno za svaki dokument u bazi podataka, a to je identifikator dokumenta. Iako u samoj definiciji sheme nismo naveli da je to polje obavezno, MongoDB ipak zahteva da svaki dokument ima jedinstveni identifikator, tako da je potrebno da specifikujemo i vrednost za polje `_id`. S obzirom da ovo polje mora biti jedinstveno, moramo generisati identifikator koji ne postoji u bazi podataka. Srećom, ovo je moguće uraditi konstruisanjem novog objekta pomoću konstruktorske funkcije `mongoose.Types.ObjectId`. Primetite da se ovaj tip razlikuje od tipa u shemi! (U shemi smo naveli tip `mongoose.Schema.Types.ObjectId` i **to su dva različita tipa. Ako pogrešimo tipove identifikatora na bilo koja od ova dva mesta, `mongoose` će prijaviti grešku!**)

Kao što smo rekli, prvi korak jeste kreiranje objekta koji predstavlja novog studenta. Ono što nismo rekli do sada jeste da poziv metoda `mongoose.model` koji pravi novi model na osnovu date sheme zapravo kao povratnu vrednost vraća konstruktorsku funkciju koju možemo koristiti za pravljenje objekata koji predstavljaju dokumente. Možemo proslediti ovoj konstruktorskoj funkciji objekat koji se koristi za inicijalizaciju vrednosti polja novog dokumenta ili možemo naknadno dodeliti poljima vrednosti, kao što je prikazano u kodu ispod.

Drugi korak se sastoji od poziva metoda `save()` koji šalje SUBP zahtev da se dokument sačuva u BP. Važno je zapamtiti da se ovaj metod ne poziva nad samim modelom (kao što je to bio slučaj sa metodom `find()`), **već se poziva nad objektom koji predstavlja novi dokument**. Ovaj metod vraća dokument onakav kakav je sačuvan u BP, te ćemo tu povratnu vrednost iskoristiti kao povratnu vrednost naše funkcije `createStudent()`.

```js
// models/student.js (nastavak)

module.exports.createStudent = async function (studentUsername, studentPassword) {
    // Kreiranje novog dokumenta: korak 1
    const newStudent = new StudentModel();
    newStudent._id = new mongoose.Types.ObjectId();
    newStudent.username = studentUsername;
    newStudent.password = studentPassword;

    // Kreiranje novog dokumenta: korak 2
    const studentFromDB = await newStudent.save();

    return studentFromDB;
};
```

### 9.3.1. Poziv modela za kreiranje dokumenata podataka iz kontrolera

U `controllers/student.js` dodajemo asinhronu funkciju `createStudent` koja prosleđuje informacije o korisničkom imenu i lozinki za novog korisnika.

```js
// controllers/student.js (nastavak)

module.exports.createStudent = async function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    await StudentModel.createStudent(username, password);
    
    return next();
};
```

## 9.4. Ažuriranje dokumenata

Pređimo na ažuriranje podataka. Prvo izmenimo funkciju `changeStudentInfo()` u modelu studenta. Za ažuriranje vrednosti u bazi na raspolaganju imamo metode `updateOne()` ili `updateMany()`. Razlika između ova dva metoda je u tome što `updateOne` ažurira samo jedan dokument, a `updateMany` sve koji su obuhvaćeni datim upitom. Isto kao i metod `find`, i ovi metodi rade asinhrono. 

Oba metoda kao prvi argument primaju **upit** kojim se određuju dokumenti koji se menjaju, a kao drugi argument **upit za ažuriranje**, tj. objekat koji opisuje na koji način se podaci ažuriraju. Upit za ažuriranje predstavlja objekat čija su svojstva neki od operatora za upite ažuriranja, kao što su `$inc`, `$mul`, `$set`, `$currentDate` i sl. Vrednosti ovih operatora su objekti koji opisuju koja polja će biti promenjena, kao i nove vrednosti tih polja. 

U narednoj funkciji definišemo da, za studenta čije je korisničko ime jednako vrednosti `searchStudent.username`, potrebno je postaviti polja `password`, `name`, `surname` i `major` na vrednosti `searchStudent.password`, `searchStudent.name`, `searchStudent.surname` i `searchStudent.major`, redom.

```js
// models/student.js (nastavak)

module.exports.changeStudentInfo = async function (username, password, name, surname, major) {
    let newData = {
        'password': password,
        'name': name,
        'surname': surname,
        'major': major
    };

    await StudentModel.updateOne(
        // Upit za pronalaženje dokumenata koji će biti izmenjeni
        { username: username }, 
        // Upit za ažuriranje (koji postavlja vrednosti polja na nove vrednosti)
        { $set: newData }).exec();
};
```

### 9.4.1. Poziv modela za ažuriranje podataka iz kontrolera

U `controllers/student.js` treba izmeniti funkciju `updateStudent` tako da bude asinhrona i čeka da se podaci ažuriraju pre nego što pozove narednu funkciju srednjeg sloja.

```js
// controllers/student.js (nastavak)

module.exports.updateStudent = async function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;
    const major = req.body.major;

    await StudentModel.changeStudentInfo(username, password, name, surname, major);
    
    return next();
};
```

## 9.5. Brisanje dokumenata

Brisanje dokumenata iz baze je prilično jednostavno. Na raspolaganju su metodi `deleteOne()` i `deleteMany()`. Metodi prihvataju jedan parametar, a to je **upit** koji određuje šta treba obrisati iz kolekcije datog modela. Razlika između ovih metoda je ta što prvi metod briše tačno jedan dokument (ako ima više dokumenata koji zadovoljavaju uslov, briše se prvi iz rezultata), a drugi briše sva dokumenta koja ispunjavaju uslove upita. I ovi metodi su asinhroni te će i funkcija `deleteStudent()` morati da radi asinhrono.

```js
// models/student.js (nastavak)

module.exports.deleteStudent = async function (studentUsername) {
    await StudentModel.deleteOne({username: studentUsername});
};
```

### 9.5.1. Poziv modela za brisanje podataka iz kontrolera

Datoteku `controllers/student.js` menjamo na isti način kao malo pre. Funkcija `deleteStudent()` mora biti asinhrona, i pre nego što uradi preusmeravanje na početnu stranicu, potrebno je da sačeka da se operacija brisanja završi.

```js
// controllers/student.js (nastavak)

module.exports.deleteStudent = async function (req, res, next) {
    await StudentModel.deleteStudent(req.body.username);
    
    return res.redirect('/');
};
```

## 9.6. Obrada grešaka u asinhronim funkcijama

Iako smo kompletirali implementaciju funkcionalnosti ovog primera, ono što je neophodno da uradimo jeste da definišemo šta je to što naša aplikacija treba da uradi u slučaju dolaska do greške. Grešaka može biti raznih, na primer: SUBP može da prijavi grešku pri izvršavanju neke operacije nad njime, greška može da postoji u implementaciji koda, i dr. Problem sa asinhronim modelom programiranja jeste što i obrada grešaka mora da se vrši asinhrono.

Međutim, s obzirom da mi koristimo rad sa `async` funkcijama koje izvršavaju operacije tek kada se podaci izračunaju (zbog toga što koristimo `await` ispred poziva tih asinhronih akcija), obrada grešaka se u JavaScript-u ipak može izvršiti na jednostavan način, korišćenjem `try-catch` blokova. Pogledajmo primer obrade greške u funkciji `displayStudent()` paketa `controllers/student.js`:

```js
// controllers/student.js (nastavak)

module.exports.displayStudent = async function (req, res, next) {
    try {
        // Početak implementacije
        const studentObject = await StudentModel.getStudent(req.body.username, req.body.password);

        return res.render('student.ejs', {
            student: studentObject
        });
        // Kraj implementacije
    } catch (err) {
        next(err);
    }
};
```

Sav kod koji je ranije predstavljao implementaciju ove funkcije je smešten u `try` blok. Time se signalizira Node.js okruženju da "pokuša" da izvrši kod iz tog bloka. Ukoliko sve operacije prođu bez grešaka, funkcija se završava. U suprotnom, ukoliko bilo koja od datih operacija izazove grešku, sistem će _podići_ (eng. _raise_) grešku i ta greška će biti _uhvaćena_ (engl. _catch_) u `catch` bloku koji se navodi nakon `try` bloka. Ono što ćemo uvek raditi kada uhvatimo grešku jeste da prosledimo tu grešku funkciji srednjeg sloja koja radi na nivou obrade grešaka. U nastavku dajemo prikaz obrade grešaka za preostale kontrolere:

```js
// controllers/student.js (nastavak)

module.exports.updateStudent = async function (req, res, next) {
    try {
        await StudentModel.changeStudentInfo(req.body);
        
        return next();
    } catch (err) {
        next(err);
    }
};

module.exports.deleteStudent = async function (req, res, next) {
    try {
        await StudentModel.deleteStudent(req.body.username);
        
        return res.redirect('/');
    } catch (err) {
        next(err);
    }
};
```

Funkcija srednjeg sloja koja radi na nivou obrade grešaka je definisana u `app.js` kao poslednja funkcija srednjeg sloja. Ona takođe, kao što smo o tome govorili u podsekciji [7.3.1](../NodeJS/README.md#7-3-1-rutiranjeifunkcijesrednjegsloja), mora da prihvati dodatni argument koji predstavlja grešku koja joj se prosleđuje. Naša funkcija srednjeg sloja koja radi na nivou obrade grešaka će raditi dve stvari: 

- Na serveru će u konzoli ispisati razvijeni stek poziva funkcija, kako bismo mogli da saznamo gde se dogodila greška.
- Na klijentu će prikazati HTML stranicu generisanu šablonom `error.ejs` sa informacijama o grešci.

Kod ove funkcije sledi u nastavku:

```js
app.use(function (error, req, res, next) {
    console.error(error.stack);

    const statusCode = error.status || 500;
    res.status(statusCode).render('error.ejs', {
        errorMessage: error.message,
        errorCode: statusCode
    });
});
```

Celokupno rešenje je dato na [ovoj adresi](https://github.com/MatfUVIT/UVIT/tree/master/vezbe/knjiga/Poglavlja/Mongoose/Primeri/1){:target="_blank"}.

## 9.7. Dva povezana modela

Do sad smo radili samo sa jednom kolekcijom, `students`. Ukoliko bismo želeli da proširimo aplikaciju tako da u priču uvedemo i informacije o polaganjima ispita, tu se stvari malo komplikuju. Ta svako polaganje ispita potrebne su nam informacije o studentu koji je polagao ispit, o predmetu koji je polagao, datumu polaganja i dobijenoj oceni. Međutim, podatke o studentima već imamo u kolekciji `students` i ne bi bilo dobro da ih ponavljamo. Razlog je jednostavan - smanjujemo redudantnost. Ako želimo da izmenimo podatak o nekom studentu, to činimo samo na jednom mestu, u kolekciji `students` umesto da menjamo svuda gde se taj student pojavljuje. 

Potrebno je da odredimo jedinstveno polje za svaki dokument u kolekciji `students` i da samo to koristimo kao referencu na odgovarajućeg studenta u kolekciji `Exam`. Na našu sreću, to polje već postoji, ne samo za dokumente kolekcije `students` već za sve dokumente. U pitanju je polje `_id`. Dovoljno je da u kolekciji `Exam` pamtimo identifikator studenta kako bismo dobili sve potrebne informacije o studentu koji je polagao određeni ispit.

U aplikaciji želimo da razdvojimo tri dela: stranicu sa informacijama o studentu, stranicu sa informacijama o ispita i stranicu sa rezultatima:


<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/primer2_profil.png" alt="Profil">
</div>

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/primer2_ispiti.png" alt="Profil">
</div>

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/primer2_rezultati.png" alt="Profil">
</div>


Stranica sa informacijama o studentima je već implementirana, pređimo na stranu sa informacijama o ispitima.

Za novu kolekciju pravimo novi model `exam.js` u kom definišemo shemu i funkcije za manipulaciju podacima iz kolekcije `Exam`. Kolekciju možete preuzeti [sa ove veze](./Resursi/ispiti.json). Shema sadrži polje student koje pamti jedinstveni identifikator studenta iz kolekcije `students`. Za to polje treba definisati tip i sa kojim se modelom povezuje. Naziv modela treba da se poklopi sa nazivom koji smo zadali kao prvi argument metodu `mongoose.model()`. Nakon što je definisana shema, pravimo i izvozimo model za kolekciju `Exam`.

```js
// models/exam.js
const mongoose = require("mongoose");

const examSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    subject: String,
    date: Date,
    grade: Number
});

const examModel = mongoose.model('Exam', examSchema);

module.exports.model = examModel;
```

Pređimo na funkciju koja dohvata podatke o svim ispitima koje je polagao student čije je korisničko ime zadato parametrom funkcije. Pošto nam je zadato samo korisničko ime, a potreban nam je identifikato studenta, potrebno je da prvo izvršimo čitanje iz kolekcije `students`, a rezultat ćemo iskoristiti da dobijemo sve ispite. U te svrhe, pišemo asinhronu funkciju `getStudentId` u `student.js` koja će pročitati i vratiti odgovarajući podatak.

```js
// models/student.js (nastavak)

module.exports.getStudentId = async function getStudentId(studentUsername) {
    let students = await StudentModel.find({username: studentUsername}).exec();
    // Ovde nedostaje provera za slučaj da je `students` prazan niz. Uraditi za domaći!
    return students[0]._id;
};
```

Da bismo koristili ovu funkciju, moramo da uvezemo model `models/student.js` u `models/exam.js`:

```js
// models/exam.js (nastavak)
const StudentModel = require('./student');
```

Sada možemo da napišemo funkciju koja dohvata informacije o ispitima. Metodu `find()` dodaćemo drugi argument, tj. projekciju, kojim definišemo polja koja želimo da budu izdvojena, a to su: `subject`, `date` i `grade`. 

```js
// models/exam.js (nastavak)

module.exports.getExams = async function(studentUsername) {
    let studentId = await StudentModel.getStudentId(studentUsername);
    let exams = await examModel.find({student: studentId}, {subject:1, date:1, grade:1, _id:0}).exec();

    if (exams.length > 0) {
        return exams;
    }
    else {
        return null;
    }
};
```

Sada bi trebalo da napravimo kontroler koji će obraditi zahtev. U direktorijum `controllers` dodajemo `exam.js`. Uključujemo model koji smo upravo napravili, a zatim definišemo funkciju `displayExams`. Prvi korak je dohvatanje podataka pomoću modela, a drugi određivanje pogleda i podataka koji će mu biti dostupni. Osim podataka o ispitima, prosledićemo korisničko ime i lozinku, kako bi korisnik mogao da se vrati na stranu sa informacijama bez potrebe za novim prijavljivanjem na sistem.

```js
// controllers/exam.js
const ExamModel = require('../models/exam');

module.exports.displayExams = async function(req, res, next) {
    try {
        const examsObject = await ExamModel.getExams(req.body.username);

        return res.render('exam.ejs', {
            student: {
                username: req.body.username,
                password: req.body.password
            },
            exams: examsObject
        });
    } catch (err) {
        next(err);
    }
};
```

Nastavimo sa implementacijom, na redu je dodavanje novog ispita. Ovaj korak se malo razlikuje u odnosu na druge operacije. Naime, potrebno je da napravimo novi objekat našeg modela pozivom kostruktora. Argument koji prosleđujemo je objekat čija svojstva su nazivi polja dokumenta, a vrednosti su vrednosti za odgovarajuća polja. Vrednost za polje `_id` dobijamo pozivanjem konstruktora `mongoose.Types.ObjectId`. 

Dobijeni objekat je novi dokument koji treba sačuvati u bazu, a to činimo pozivom metoda `save()` nad objektom. Metod `save` je takođe asinhron.

```js
// models/exam.js (nastavak)

module.exports.addNewExam = async function(examData) {
    let studentId = StudentModel.getStudentId(studentUsername);
    let newExam = new examModel({
        _id: new mongoose.Types.ObjectId(),
        student: studentId,
        subject: examData.subject,
        date: examData.date,
        grade: examData.grade
    });

    await newExam.save();
};
```

U datoteku `controllers/exam.js` dodajemo funkciju koja obrađuje zahtev za dodavanje ispita `addExam`. Funkcija prvo poziva funkciju `addNewExam` koja vrši promene u bazi, a zatim poziva narednu funkciju srednjeg sloja koja će prikazati nove podatke.

```js
// controllers/exam.js (nastavak)

module.exports.addExam = async function(req, res, next) {
    try {
        await exam.addNewExam(req.body);

        return next();
    } catch (err) {
        next(err);
    }
};
```

Sada ćemo implementirati da se klikom na dugme `Izmeni ispite` izmeni datum polaganja ispita na današnji datum za ulogovanog studenta. Podsetimo se operatora `$currentDate` koji se koristi u upitima ažuriranja. Prvo dodajemo funkciju `changeDates()` u datoteku `models/exam.js` koja prima korisničko ime ulogovanog korisnika. Slično kao u prethodnoj funkciji, koristićemo `getStudentId()` kako bismo dobili odgovarajuću vrednost iz kolekcije `students`. Zatim, pozivamo metod `updateMany()` nad modelom ispita. Želimo da ažuriramo datume za sve ispite studenta koji je određen identifikatorom koji je vratila funkcija `getStudentId()`. Stoga je prvi argument upit koji zahteva da vrednost polja `student` bude jednaka tom identifikatoru. Drugi argument koristi operator `$currentDate`, a kao vrednost zadajemo objekat koji određuje kojim poljima se postavlja današnji datum kao nova vrednost.

```js
// models/exam.js (nastavak)

module.exports.changeDates = async function(studentUsername) {
    let studentId = await StudentModel.getStudentId(studentUsername);
    await examModel.updateMany(
        { student: studentId },
        { $currentDate: { date: true } });
};
```

U datoteku `controllers/exam.js` dodajemo asinhronu funkciju `updateExams` koja pozica `changeDates`, a zatim i narednu funkciju srednjeg sloja.

```js
// controllers/exam.js (nastavak)

module.exports.updateExams = async function(req, res, next) {
    try {
        await exam.changeDates(req.body.username);

        return next();
    } catch (err) {
        next(err);
    }
};
```

Na redu je dugme za brisanje ispita. Potrebno je da ulogovan korisnik unese naziv predmeta i klikom na dugme biće obrisana sve informacije o njegovim polaganjima ispita iz tog predmeta. U `models/exam.js` dodajemo asinronu funkcju `deleteExams()` koja prvo dohvata identifikator studenta sa zadatim korisničkim imenom, a onda briše sve informacije korišćenjem metoda `deleteMany()`.

```js
// models/exam.js (nastavak)

module.exports.deleteExams = async function(data) {
    let studentId = await StudentModel.getStudentId(data.username);
    await examModel.deleteMany({student: studentId, subject: data.subject});
};
```

U `controllers/exam.js` dodajemo asinhronu funkciju koja poziva `deleteExams()` iz modela, a zatim poziva narednu funkciju srednjeg sloja. 

```js
// controllers/exam.js (nastavak)

module.exports.deleteExams = async function(req, res, next) {
    try {
        await exam.deleteExams(req.body);

        return next();
    } catch (err) {
        next(err);
    }
};
```

Time smo kompletirali obradu podataka za ispite jednog studenta. Potrebno je još da odredimo napravimo objekat za rutiranje koji će preusmeriti zahteve na odgovarajući način. 

```js
// routes/exam.js

const express = require('express');
const controllers = require('../controllers/exam');
const router = express.Router();

router.post('/', 
    controllers.displayExams);

router.post('/create', 
    controllers.addExam, 
    controllers.displayExams);
    
router.post('/update', 
    controllers.updateExams, 
    controllers.displayExams);

router.post('/delete', 
    controllers.deleteExams, 
    controllers.displayExams);

module.exports = router;
```

Dodatno, u `app.js` treba dodati funckiju srednjeg sloja koja će sve zahteve poslate na `http://localhost:3000/exam` uputiti na objekat za rutiranje koji smo upravo napisali.

```js
// app.js (nastavak)

const examRoutes = require('./routes/exam');
app.use('/exam', examRoutes);
```

Za kraj nam ostaje da se pozabavimo delom sa rezultatima. Potrebno je, kada se klikne na `Rezultati` u navigaciji, da se otvori stranica sa rezultatima svih ispita. Želimo da se prikažu informacije o predmet, indeksu, imenu i prezimenu studenta, datumu polaganja i dobijenoj oceni. Uz to, želimo da spisak bude uređen prema predmetima rastuće, a prema ocenama opadajuće.

### 9.7.1. Obogaćivanje dokumenata podacima iz povezanog modela

Sve informacije o samim ispitima postoje u kolekciji `Exam`. Međutim, u njoj imamo samo podatke o identifikatoru studenta, ali ne i njegovo ime, prezime ili indeks. S obzirom da smo definisali model za kolekciju ispita tako da sadrži referencu na studenta, lako možemo dopuniti podatke o ispitu odgovarajućim podacima iz kolekcije studenata. U te svrhe koristi se metod `populate()` koji se ulančava sa pozivom metoda `find()`. Argument ovog metoda je niska koja govori koje polje treba da se dopuni podacima - u ovom slučaju to je `student`. Ovim se vrednost polja `student` iz `ObjectId` menja u objekat koji sadrži sve informacije o tom studentu. Dodatno, možemo da odredimo da se izdvoje samo neke informacije ukoliko nam nisu sve potrebne, kao što je ovde slučaj. Nama su potrebni korisničko ime, ime i prezime te možemo dodati još jedan argument u kome navodimo nazive polja koje želimo da zadržimo. Nazivi polja se navode kao jedna niska razdvojeni blanko karakterom.

```js
// models/exam.js (nastavak)

module.exports.getResults = async function() {
    let results = 
        await examModel
            .find({})
            // Obogaćivanje polja `student` u ispitima podacima iz povezanog modela
            .populate('student', 'username name surname')
            .exec();

    if (results.length > 0) {
        return results;
    }
    else {
        return null;
    }
};
```

### 9.7.2. Uređivanje dokumenata

Što se uređivanja podataka tiče, koristimo metod `sort()` koji se takođe ulančava na poziv metoda `find()`. Ovaj metod prima jedan objekat koji definiše po kojim poljima se podaci uređuju. Svojstva ovog objekta odgovaraju nazivima polja u kolekciji, a vrednosti mogu biti `1` (rastuće uređenje) i `-1` (opadajuće uređenje).

Pošto se čitanje vrši iz kolekcije `Exam` uz dopunu podacima o studentima, dodajemo novu funkciju u `models/exam.js`.

```js
// models/exam.js (nastavak)

module.exports.getResults = async function() {
    let results = 
        await examModel
            .find({})
            .populate('student', 'username name surname')
            .sort({subject: 1, grade: -1})
            .exec();

    if (results.length > 0) {
        return results;
    }
    else {
        return null;
    }
};
```

Napravićemo novi kotroler i rutirajući objekat koji će se baviti zahtevima poslatim na `http://localhost:3000/results`. Datoteka `controller/results.js` koristi model `exam` i sadrži jednu funkciju - `displayResults`. Njen zadatak je da pozove funkciju `getResults` i da prosledi te podatke zajedno sa stranicom `results.ejs`. Uz podatke o rezultatima, šaljemo i korisničko ime i lozinku ulogovanog korisnika kako bi korisnik mogao da nastavi sa radom i nakon pregleda rezultata.

```js
// controller/results.js
const ExamModel = require('../models/exam');

module.exports.displayResults = async function(req, res, next) {
    let resultsObject = await ExamModel.getResults();

    return res.render('results.ejs', {
        student: {username: req.body.username, password: req.body.password},
        results: resultsObject
    });
};
```

Objekat za rutiranje je prilično jednostavan. Obrađuje jedan `POST` zahtev i prosleđuje ga odgovarajućem kontroleru.

```js
// routes/results.js
const express = require('express');
const controllers = require('../controllers/results');
const router = express.Router();

router.post('/', 
    controllers.displayResults);

module.exports = router;
```

Ne smemo zaboraviti da u `app.js` dodamo funkciju srednjeg sloja koja će sve zahteve poslate na `http://localhost:3000/results` uputiti na objekat za rutiranje koji smo upravo napisali.

```js
// app.js (nastavak)
const resultsRoutes = require('./routes/results');
app.use('/results', resultsRoutes);
```

Celokupno rešenje je dato na [ovoj adresi](https://github.com/MatfUVIT/UVIT/tree/master/vezbe/knjiga/Poglavlja/Mongoose/Primeri/2){:target="_blank"}.


<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 3</span> 
    <div class="tekst">
        Koristeći implementaciju Node.js i Express.js serverske aplikacije napisane u duhu MVC arhitekture iz domaćeg zadatka 2 u <a href="../NodeJS/README.md">Node.js poglavlju</a>, izmeniti implementaciju modela tako da važi:
        <ul>
            <li>Umesto nizova objekata koji se čuvaju na serveru, koriste se napisane sheme iz domaćih zadataka 1 i 2 iznad, kako bi se omogućilo trajno skladištenje podataka u MongoDB bazu podataka sa nazivom `Prodavnica`.</li>
            <li>Sve funkcije modela se implementiraju nad modelima `Artikal` i `Porudzbina` umesto nad nizovima objekata koji se čuvaju na serveru.</li>
            <li>Koristiti `async`-`await` paradigmu asinhronog programiranja za rad sa bazom podataka i modelom MVC aplikacije. Samim tim, biće potrebno izvršiti manje izmene u kontroleru, kao u primerima iznad.</li>
        </ul>
    </div>
</div>

-----

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>
-->
