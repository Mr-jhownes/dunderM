//including modules, for its funcionalities
var http = require('http'),
    path = require('path'),
    express = require('express'),
    fs = require('fs'),
    expAutoSan = require('express-autosanitizer'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    methodOverride = require('method-override');

var app = express();
//var server = http.createServer(app);// creating a server
var port = process.env.PORT || 8000;

dotenv.config();
app.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served
app.use(express.urlencoded({ extended: true })); //We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
app.use(express.json()); //We include support for JSON that is coming from the client
app.use(expAutoSan.all);//data sanitizer


app.use(require('./routes'));


app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});


const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));


