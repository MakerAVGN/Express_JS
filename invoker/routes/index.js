var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/quas', function(req, res, next) {
  res.render('component',{
    title: "QUAS",
    picture: "images/invoker_quas.png",
    desc: "Сфера стихии льда. Позволяет управлять стихией льда и увеличивает здоровье персонажа. Каждая активная сфера увеличивает восстановление здоровья."
  });
});
router.get('/wex', function(req, res, next) {
  res.render('component',{
    title: "WEX",
    picture: "images/invoker_wex.png",
    desc: "Сфера стихии молнии. Позволяет управлять стихией молнии и увеличивает ловкость персонажа. Каждая активная сфера увеличивает скорость атаки и передвижения."
  });
});
router.get('/exort', function(req, res, next) {
  res.render('component',{
    title: "EXORT",
    picture: "images/invoker_exort.png",
    desc: "Сфера стихии огня. Позволяет управлять стихией огня и увеличивает интеллект персонажа. Каждая активная сфера увеличивает урон от атак."
  });
});
module.exports = router;
