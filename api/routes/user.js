const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../controllers/UserController');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const app = express();

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }));

const router = express.Router();

passport.use(new LocalStrategy(
    (username, password, done) => {
        if (username !== process.env.username || password !== process.env.password) {
            done(null, false, 
              {
                message: 'Incorrect credentials.'
              }
            );
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

router.post('/register', (req, res) => {
    const password = req.body.password;
    const password2 = req.body.password2;


  if (password == password2){
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
        // create a token
        const token = jwt.sign({ id: User._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).json({ auth: true, token: token });
    });
  } else {
    res.json({errors: "Passwords don't match"}).end();
  }
});

router.post('/login', 
    passport.authenticate('local'),
    function(req, res) {
        const token = jwt.sign({ id: User._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).json({ auth: true, token: token });
    }
);

router.get('/logout', function(req, res) {
  res.status(200).json({ auth: false, token: null });
});

module.exports = router;