var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    let randomNo=Math.floor(Math.random()*100)
  
  res.render('comput',{result:'sin math function '+randomNo+' is '+Math.sin(randomNo)});
});
    

 

module.exports = router;