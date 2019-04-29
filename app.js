'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


// Conenct to DB
mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/week1`, 
    { 
        useNewUrlParser: true 
    }
    ).then(() => {
        console.log('Connected successfully to db.');
    }, err => {
        console.log('Connection to db failed: ' + err);
});

// Middleware
app.use(bodyParser.urlencoded({extended:true}));   //handle body requests
app.use(bodyParser.json());                         //makes JSON work
app.use(cors());                                    //cross origin requests allowed
app.use(express.static('dist'));

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
        message: error.message
        }
    });
});

module.exports = app;
