const https = require('https');
const app = require('./app');
const fs = require('fs');

const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
      key: sslkey,
      cert: sslcert
};

const port = process.env.PORT || 3000;

//https.createServer(options, app).listen(port, () => console.log(`Server started on port ${port}`));
app.listen(port, () => console.log(`Server started on port ${port}`));