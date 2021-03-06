const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studioSchema = Schema({
  name: { 
    type: String, 
    required: true
  },
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String }
  }
});

const Studio = mongoose.model('Studio', studioSchema);

module.exports = Studio;
