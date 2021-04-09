const express = require('express'),
fs = require('fs');
router = express.Router();


var adminCtrl = require('./admin-controller')

router.get('/', function(req, res) {

  res.render('index');

});




// router.get('/get/dunderm', (req, res) => {
    
//       res.setHeader('Content-Type', 'text/plain');
//     let content = fs.readFileSync('dmuffin.json', 'utf8'); 
    
//     res.end(content);
// });

router.get('/list', adminCtrl.getMuffin);

router.post('/admin-list', adminCtrl.postMuffin);


module.exports = router;