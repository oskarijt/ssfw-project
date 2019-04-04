'use strict'

const mongodb = require('mongodb');     
const mongoose = require('mongoose');   
const express = require('express');

var app = require('../../index')

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        message: 'haloo vittu'
    });
});

router.post('/register', (req, res) => {
    res.send({
        message: `Your user "${req.body.email}" was registered! Have fun!`
    });
});

module.exports = router;
