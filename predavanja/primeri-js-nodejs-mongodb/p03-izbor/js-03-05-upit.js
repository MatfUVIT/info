const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    const upit = { mestoRodjenja: "Čačak" };
    dbo.collection("studenti").find(upit).toArray(function (err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    });
});
