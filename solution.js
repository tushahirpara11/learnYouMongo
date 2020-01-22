const mongo = require('mongodb').MongoClient

const process = require('process');
const age = parseInt(process.argv[2]);

let firstName = process.argv[2];
let lastName = process.argv[3];
let data = {
  firstName: firstName,
  lastName: lastName
};

let url = "mongodb://localhost:27017/learnyoumongo";
// let url = "mongodb://localhost:27017/" + process.argv[2];
mongo.connect(url, function (err, db) {
  let dbo = db.db('learnyoumongo');
  // let dbo = db.db(process.argv[2]);
  // //Find Function
  // (dbo.collection("parrots").find({ age: { $gt: +age } })).toArray((err, res) => {
  //   if (err) throw err;
  //   console.log(res);
  // });
  // //Find with Projection
  // (dbo.collection("parrots").find({ age: { $gt: +age } }, { projection: { name: 1, age: 1, _id: 0 } })).toArray((err, res) => {
  //   if (err) throw err;
  //   console.log(res);
  //   dbo.close();
  // });
  // //Insert Function
  // dbo.collection('users').insert(data, function (err) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(data));
  //   dbo.close();
  // });
  // //Update Function
  // (dbo.collection('users').update({ username: 'tina' }, { $set: { age: 32 } }).toArray((err) => {
  //   if (err) throw err;
  //   dbo.close();
  // }));
  //Remove Function
  // if (err) throw err;
  // (dbo.collection(process.argv[3]).remove({ _id: process.argv[4] }).toArray((err) => {
  //   if (err) throw err;
  //   dbo.close();
  // }));
  //Count Function
  if (err) throw err;
  dbo.collection('parrots').count({ age: { $gt: +age } }, function (err, count) {
    if (err) throw err;
    console.log(count)
    dbo.close();
  });
});