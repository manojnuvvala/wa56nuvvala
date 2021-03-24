var express = require('express');
var router = express.Router();
var man = 0
/* GET users listing. */
router.get('/', function (req, res, next) {
  man = man + 1;

  res.send('User accesses are:' + man);
});

module.exports = router;