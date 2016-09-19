var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,  
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
    avatar: String,
  },
  admin: Boolean,
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
