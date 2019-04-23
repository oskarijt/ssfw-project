'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
      key: sslkey,
      cert: sslcert
};

var app = module.exports = express();

require('dotenv').config();

// Middleware
app.use(bodyParser.urlencoded({extended:true}));   //handle body requests
app.use(bodyParser.json());                         //makes JSON work
app.use(cors());                                    //cross origin requests allowed
app.use(express.static('dist'));


const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');


app.use('/api/posts', posts);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;

https.createServer(options, app).listen(port, () => console.log(`Server started on port ${port}`));

/*
app.listen(port, () => console.log(`Server started on port ${port}`));
*/