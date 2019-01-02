var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/views/test.html'));
});

module.exports = router;
