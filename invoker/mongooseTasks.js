var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Inv = require("../models/invoker").Inv


var inv = new Inv({
title: "Exort",
nick: "Rxort2"
})


console.log(inv)
inv.save(function(err, inv, affected){
console.log(inv.title)
})