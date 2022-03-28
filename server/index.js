const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
//so I think this is for mongo?
// let db;
let db = require('../database/mongo/index.js');
// let db = require('../database/mysql/index.js');

const path = require('path');

const PORT = 3000;
const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')));

// dummy server testing:
// app.get('/api/cows', (req, res) => {
//   res.send('Hello from the server!');
// })

app.get('/api/cows', (req, res) => {
  // db.query(function(err, result){
  // })
  db.getAll()
  .then(result => res.send(result))
  .catch(err => res.send(err))
  // res.send('hi')
})

app.post('/api/cows', (req, res) => {
  console.log('req.body:',req.body)
  db.save(req.body)
  .then(result => res.send(result)) //this seems to be single entry result
  .catch(err => res.send(err))
})


//set up listening and db selection
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stop node, restart and try again, valid options are mysql and mongo')
      }
    })

});

