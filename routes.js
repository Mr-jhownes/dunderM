const express = require('express'),
    fs = require('fs');
router = express.Router();

//admin-controller is where the router sends and retrivies data which executed their functionality 
var adminCtrl = require('./admin-controller')

//function that initialized the index page
router.get('/', function (req, res) {

    res.render('index');

});

//creating a full crud basic functions which will be executed on admin-controler
//the delete and post information are coming from the front end, created with information given from the user
router.delete('/admin-list/:id', adminCtrl.deleteMuffin);

router.get('/admin-list', adminCtrl.getMuffin);

router.post('/admin-list', adminCtrl.postMuffin);

router.put('/admin-list/_id', adminCtrl.updateMuffin);


module.exports = router;