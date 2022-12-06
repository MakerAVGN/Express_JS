var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с orbs');
});

module.exports = router;

/* Страница сфер */
router.get('/:nick', function(req, res, next) {
    Inv.findOne({nick:req.params.nick}, function(err,inv){
        if(err) return next(err)
        if(!inv) return next(new Error("Нет такой сферы"))
        res.render('inv', {
            title: inv.title,
            picture: inv.avatar,
            desc: inv.desc
        })
    })
})

