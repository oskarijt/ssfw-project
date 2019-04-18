'use strict'

var mongoose = require('mongoose');   
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/user');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
var config = require('../../config');


var app = require('../../index')

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }));
  
// Passport init
app.use(passport.initialize());
app.use(passport.session());

const router = express.Router();

// Conenct to DB
mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/week1`, { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully to db. (auth)');
    //app.listen(process.env.APP_PORT);
    
  }, err => {
    console.log('Connection to db failed: ' + err);
  });
var db = mongoose.connection;

passport.use(new LocalStrategy(
    (username, password, done) => {
        if (username !== process.env.username || password !== process.env.password) {
            done(null, false, {message: 'Incorrect credentials.'});
            return;
        }
        return done(null, {}); // returned object usally contains something to identify the user
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
     	if(isMatch){     
     	  return done(null, user);
     	} else {
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));

app.use(passport.initialize());

router.post('/register', (req, res) => {
    var password = req.body.password;
    var password2 = req.body.password2;


  if (password == password2){
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      //res.send(user).end()
        // create a token
        var token = jwt.sign({ id: User._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token });
    });
  } else {
    res.status(500).send("{errors: \"Passwords don't match\"}").end()
  }
});

router.post('/login', 
    passport.authenticate('local'),
    function(req, res) {
        var token = jwt.sign({ id: User._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    }
);

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
