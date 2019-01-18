var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });// 渲染到模板文件index.ejs中
});

module.exports = router;
