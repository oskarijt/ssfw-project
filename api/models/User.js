const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    index:true
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);