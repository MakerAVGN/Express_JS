var express = require('express');
var router = express.Router();
var Inv = require("../models/invoker").Inv
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с invokers');
});

module.exports = router;    

/* Страница героев */
router.get('/:nick', function(req, res, next) {
     async.parallel[
            function(callback){
                Inv.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Inv.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
    Inv.findOne({nick:req.params.nick}, function(err,inv){
        if(err) return next(err)
        
        if(!inv) return next(new Error("Нет такой сферы"))
        res.render('invoker', {
            title: inv.title,
            picture: inv.avatar,
            desc: inv.desc
        })
    })
})

