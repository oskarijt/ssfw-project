const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require('passport');
const config = require('../../config');

const User = module.exports = require("../models/User");

const createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
        });
    });
}
  
module.exports.getUserByUsername = (username, callback) => {
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}
    
module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
    });
}

module.exports.userSignup = (req, res) => {
    const password = req.body.password;
    const password2 = req.body.password2;


  if (password == password2){
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      password: req.body.password
    });

    createUser(newUser, (err, user) => {
      if(err) throw err;
        // create a token
        const token = jwt.sign(
          { 
            user: user.username,
            id: user._id
          },
          config.secret, 
          {
            expiresIn: 86400 // expires in 24 hours
          }
        );
        res.json({ 
                auth: true,
                token: token,
                user: req.body.username,
                user_id: user._id,
                message: 'Token for you sir!'
            });
    });
  } else {
    res.json({errors: "Passwords don't match"}).end();
  }
}

module.exports.userLogin = (req, res) => {
    const token = jwt.sign(
        { 
        user: req.user.username,
        id: req.user._id
        }, 
        config.secret, 
        {
        expiresIn: 86400 // expires in 24 hours
        }
    );
    res.json({ 
        auth: true,
        token: token,
        user: req.user.username,
        user_id: req.user._id,
        message: 'Token for you sir!'
    });
}


module.exports.userLogout = (req, res) => {
    req.logout().json({ auth: false, token: null });
}
  