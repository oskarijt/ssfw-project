const express = require('express');
const router = express.Router();
const passport = require('passport');

const UserController = require('../controllers/UserController');

// User registration & token creation
router.post('/register', UserController.userSignup);

// User login & token creation
router.post('/login', passport.authenticate('local'), UserController.userLogin);

// User logout & token destrutcion
router.get('/logout', UserController.userLogout);

module.exports = router;