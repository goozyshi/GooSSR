var express = require('express');
var router = express.Router();
var result = [
  {
    "name": "袁敏",
    "id": 0,
    "desc": "解主要金清构年形温及些进整少角千结。",
    "company": "http://dummyimage.com/120x60"
  },
  {
    "name": "侯勇",
    "id": 1,
    "desc": "认国须写心天便到会期报论由题。",
    "company": "http://dummyimage.com/300x600"
  },
  {
    "name": "史娜",
    "id": 2,
    "desc": "共系志理高他根构何他京儿起度同须研。",
    "company": "http://dummyimage.com/720x300"
  },
  {
    "name": "韩霞",
    "id": 3,
    "desc": "知周下张意方算北切军物南油权接题矿。",
    "company": "http://dummyimage.com/300x600"
  },
  {
    "name": "汪强",
    "id": 4,
    "desc": "电子构算上公存有提满处离眼头看厂红。",
    "company": "http://dummyimage.com/120x60"
  },
  {
    "name": "黎霞",
    "id": 5,
    "desc": "给或单海于面如前存五方这战果况二分色。",
    "company": "http://dummyimage.com/336x280"
  },
  {
    "name": "卢艳",
    "id": 6,
    "desc": "律式确品过记给更取七务加县。",
    "company": "http://dummyimage.com/88x31"
  },
  {
    "name": "谢秀英",
    "id": 7,
    "desc": "何区然强业所厂始切展即入易。",
    "company": "http://dummyimage.com/160x600"
  },
  {
    "name": "何秀兰",
    "id": 8,
    "desc": "展记往次一格具斯部计算越而。",
    "company": "http://dummyimage.com/160x600"
  },
  {
    "name": "陆艳",
    "id": 9,
    "desc": "共片所族离信将当己照装海按进里展多包。",
    "company": "http://dummyimage.com/180x150"
  }
]

/* 查询 */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(result));// 返回result的json格式
});

/* 新建 */
router.post('/', function(req, res, next) {
  result = result.concat(req.body)
  res.send(JSON.stringify(result));
});

/* 更新 */
router.put('/:id', function(req, res, next) {
  for( var i = 0; i<result.length; i++){
    if(result[i].id === parseInt(req.param.id)){
      result[i] = req.body
    }
  }
  res.send(JSON.stringify(result));
});

/* 删除 */
router.put('/:id', function(req, res, next) {
  for( var i = 0; i<result.length; i++){
    if(result[i].id === parseInt(req.param.id)){
      result.splice(i, 1)
    }
  }
  res.send(JSON.stringify(result));
});
module.exports = router;
