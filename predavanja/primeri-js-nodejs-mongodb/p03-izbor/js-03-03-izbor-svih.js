const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    var dbo = db.db("mydb");
    dbo.collection("studenti").find({}).toArray(function (err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    });
});

