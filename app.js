//including modules, for its funcionalities
var http = require('http'), 
    path = require('path'),
    express = require('express'),
    fs = require('fs'),
    expAutoSan = require('express-autosanitizer'),
    logger = require('morgan'),
    nodemon = require('nodemon'),
    bodyparse = require('body-parser'),
    cors = require('cors');
    mongoose = require('mongoose');

var app = express();
var server = http.createServer(app);// creating a server

app.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served
app.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
app.use(express.json()); //We include support for JSON that is coming from the client
app.use(expAutoSan.all);//data sanitizer

app.use(require('./routes'));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
        var addr = server.address();
        console.log("Server listening at ", addr.address + ";" + addr.port);
} )

   const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


