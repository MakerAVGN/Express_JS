var express = require('express');
var router = express.Router();
var Inv = require("../models/invoker").Inv


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', menu:menu, counter:req.session.counter });
});

module.exports = router;

