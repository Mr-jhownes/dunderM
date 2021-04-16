const express = require('express'),
fs = require('fs');
router = express.Router();
methodOverride = require('method-override');


var adminCtrl = require('./admin-controller')

router.get('/', function(req, res) {

  res.render('index');

});


router.use(methodOverride('_method'));

router.get('/get/dunderm', (req, res) => {
    
       res.setHeader('Content-Type', 'text/plain');
     let content = fs.readFileSync('./dmuffin.json', 'utf8'); 
    
     res.end(content);
 });
router.delete('/admin-list/:name', adminCtrl.deleteMuffin);

router.get('/admin-list', adminCtrl.getMuffin);

router.post('/admin-list', adminCtrl.postMuffin);






module.exports = router;