var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password_digest: { type: String, required: true },
  location: String,
  favorite: String,
  image: String
});

mongoose.model('User', userSchema);
