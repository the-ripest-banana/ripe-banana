const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actorSchema = Schema({
  name: { 
    type: String, 
    required: true
  },
  dob: { type: Date, default: Date.now },
  pob: { type: String }
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;
