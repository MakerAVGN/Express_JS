var express = require('express');
var router = express.Router();
var Inv = require("../models/invoker").Inv


/* GET home page. */
router.get('/', function(req, res, next) {
  Inv.find({},{_id:0,title:1,nick:1},function(err,menu){
    req.session.greeting = "Hi!!!",
    render('index',  { 
                            title: 'Express',
                            menu: menu
                        });
});
});
module.exports = router;

