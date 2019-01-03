const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    const upit = { mestoRodjenja: `Kragujevac` };
    dbo.collection("studenti").deleteMany(upit, function (err, obj) {
        if (err)
            throw err;
        console.log(`Izvrseno brisanje dokumanata u kolkeciji. Broj obrisanih: ${obj.result.n}.`);
        db.close();
    });
});
