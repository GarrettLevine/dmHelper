'use strict'

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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

module.exports = mongoose.model('User', UserSchema);
