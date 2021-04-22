const express = require('express'),
fs = require('fs');
router = express.Router();
methodOverride = require('method-override');


var adminCtrl = require('./admin-controller')

router.get('/', function(req, res) {

  res.render('index');

});




router.delete('/admin-list/:id', adminCtrl.deleteMuffin);

router.get('/admin-list', adminCtrl.getMuffin);

router.post('/admin-list', adminCtrl.postMuffin);


module.exports = router;