const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    const kriterijum = { ime: "Janko", prezime: 'Janković' };
    var noveVrednosti = { $set: { ime: "Janko", prezime: 'Janković', mestoRodjenja: "Beograd" } };
    dbo.collection("studenti").updateOne(kriterijum, noveVrednosti,
        function (err, res) {
            if (err)
                throw err;
            console.log("Dokument je azuriran.");
            db.close();
        });
});