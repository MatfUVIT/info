const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
  if (err)
    throw err;
  let dbo = db.db("mydb");
  let stud = { 
    ime: "Petar", 
    prezime: "Petrović", 
    brojIndeksa: "207/2017", 
    godinaStudija: 2, 
    datumRodjenja: { 
      dan:12, 
      mesec:7, 
      godina:1999
    },
    mestoRodjenja: "Čačak"
  };
  dbo.collection("studenti").insertOne(stud, function (err, res) {
    if (err)
      throw err;
    console.log("Jedan dokument je umetnut u kolekciju!");
    db.close();
  });
});