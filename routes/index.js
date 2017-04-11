var express = require('express');
var mg = require('../mongo');
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



module.exports = router;
