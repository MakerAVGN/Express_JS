var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/quas', function(req, res, next) {
  res.send("<h1>QUAS</h1>");
});
router.get('/wex', function(req, res, next) {
  res.send("<h1>WEX</h1>");
});
router.get('/exort', function(req, res, next) {
  res.send("<h1>EXORT</h1>");
});

module.exports = router;
