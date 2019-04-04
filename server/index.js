'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

var app = module.exports = express();

require('dotenv').config();

// Middleware
app.use(bodyParser.urlencoded({extended:false}));   //handle body requests
app.use(bodyParser.json());                         //makes JSON work
app.use(cors());                                    //cross origin requests allowed
app.use(express.static(__dirname + '../client'));

const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');


app.use('/api/posts', posts);
app.use('/api/auth', auth);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));