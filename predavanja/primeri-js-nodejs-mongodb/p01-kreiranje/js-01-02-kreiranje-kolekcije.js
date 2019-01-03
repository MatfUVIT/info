const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
  if (err)
    throw err;
  let baza = db.db("mydb");
  baza.createCollection("studenti", function (err, res) {
    if (err)
      throw err;
    console.log(`Kolekcija 'studenti' je kreirana!`);
    db.close();
  });
})