const LocalStrategy = require('passport-local').Strategy;
const User = require('../controllers/UserController');


module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.getUserById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy(
    (username, password, done) => {
        User.getUserByUsername(username, (err, user) => {
            if(err) throw err;
            if(!user){
                return done(null, false, {message: 'Unknown User'});
            }
            User.comparePassword(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch){     
                return done(null, user);
                } else {
                return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }));
}