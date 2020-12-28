var http = require('http'),
    path = require('path'),
    express = require('express'),
    fs = require('fs');

var router = express();
var server = http.createServer(router);
 
app.locals.dataShips = require('./spchip.json');

router.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served
router.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
router.use(express.json()); //We include support for JSON that is coming from the client


router.get('/', function(req, res) {

    res.render('index');

});




server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
        var addr = server.address();
        console.log("Server listening at ", addr.address + ";" + addr.port);
} )



