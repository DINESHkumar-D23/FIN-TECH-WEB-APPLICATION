const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: String,
  email: String,
  phone: String,
  role: String,
  country: String,
  city: String,
  postalCode: String,
  image: String
});

module.exports = mongoose.model('Profile', profileSchema);
