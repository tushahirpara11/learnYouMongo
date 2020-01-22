var mongo = require('mongodb').MongoClient

const process = require('process');
const age = parseInt(process.argv[2]);
let firstName = process.argv[2];
let lastName = process.argv[3];
let data = {
  firstName: firstName,
  lastName: lastName
};

let url = "mongodb://localhost:27017/learnyoumongo";
mongo.connect(url, function (err, db) {
  let dbo = db.db("learnyoumongo");
  /*    (dbo.collection("parrots").find({age:{$gt:+age}})).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
      });
      (dbo.collection("parrots").find({age:{$gt:+age}},{projection:{name:1,age:1,_id:0}})).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        dbo.close();
      })*/
  dbo.collection('users').insert(data, function (err) {
    if (err) throw err;
    console.log(JSON.stringify(data));
    dbo.close();
  });
})
