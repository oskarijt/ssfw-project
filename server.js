require('dotenv').config();
const https = require('https');
const app = require('./app');
const fs = require('fs');
const mongoose = require('mongoose');

const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
      key: sslkey,
      cert: sslcert
};

const port = process.env.PORT || 3000;

const localdb = `mongodb://${process.env.DB_HOST}:27017/week1`;
const serverdb = `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/week1`;

app.enable('trust proxy');

// Connect to DB
mongoose.connect(serverdb, 
    { 
        useNewUrlParser: true 
    }
    ).then(() => {
        console.log('Connected successfully to db.');
        //https.createServer(options, app).listen(port, () => console.log(`Server started on port ${port}`));
        app.use ((req, res, next) => {
            if (req.secure) {
              // request was via https, so do no special handling
              next();
            } else {
              // request was via http, so redirect to https
              res.redirect('https://' + req.headers.host + req.url);
            }
          });

        app.listen(3000);
    }, err => {
        console.log('Connection to db failed: ' + err);
});
