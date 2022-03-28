const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo')
});

const cowSchema = new mongoose.Schema({
  id: Number,
  name: {type: String, unique: true},
  description: String
})

const Cow = mongoose.model('Cow', cowSchema);

let getAll = () => {
  return Cow.find();
}

let save = (newCowObj) => {
  return Cow.create(newCowObj)
}



module.exports = Cow;
module.exports.getAll = getAll;
module.exports.save = save;