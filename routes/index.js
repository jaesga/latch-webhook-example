var express = require('express');
var mg = require('../mongo');
var latch = require('../latch');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    mg.isAllowed(function(result){
      if (result === 'off'){
        res.render('index', { title: 'Locked' });
      } else {
          res.render('index', { title: 'Allowed' });
      }
    });
});


router.get('/hook', function(req, res, next) {
    if (req.query.challenge){
      res.send(req.query.challenge);
    }else{
      res.send("Error - No Challenge!");
    }
});


router.post('/hook', function(req, res) {
   var json = req.body;

   if (json.accounts[latch.accountId][0].new_status === "off"){
     mg.set_off();
   } else {
     mg.set_on();
   }

   res.send("{}");
});


module.exports = router;
