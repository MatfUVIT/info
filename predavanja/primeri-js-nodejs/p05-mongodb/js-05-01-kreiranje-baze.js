const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
  if (err)
    throw err;
  console.log(`Baza 'mydb' je kreirana`);
  db.close();
});