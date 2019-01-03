const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    const upit = { mestoRodjenja: "Beograd" };
    const projekcija = { projection: { _id: 0, ime: 1, prezime: 1, mestoRodjenja: 1 } };
    dbo.collection("studenti").find(upit, projekcija)
        .toArray(function (err, result) {
            if (err)
                throw err;
            console.log(result);
            db.close();
        });
});
