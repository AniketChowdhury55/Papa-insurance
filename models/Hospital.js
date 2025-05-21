const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  description: String,
  image: String // this will store the URL or image path
});

module.exports = mongoose.model('Hospital', hospitalSchema);
