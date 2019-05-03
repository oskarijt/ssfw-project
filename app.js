'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const config = require('./config');
require('./api/auth/passport')(passport);

// Middleware
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended:true}));   //handle body requests
app.use(bodyParser.json());                         //makes JSON work
app.use(cors());
app.options('*', cors());                                    //cross origin requests allowed
// Express Session
app.use(session({
    secret: config.secret,
    saveUninitialized: false,
    resave: false,
    cookie: { secure: false }
  }));
// Passport init
app.use(passport.initialize());
app.use(passport.session());
// routes
// Routes
const postsRoutes = require('./api/routes/posts');
const userRoutes = require('./api/routes/user');
app.use('/posts', postsRoutes);
app.use('/user', userRoutes);

// Add headers
app.use((req, res, next) => {  
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Accept, X-Access-Token, X-Key, Authorization');
  
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
  });

module.exports = app;
