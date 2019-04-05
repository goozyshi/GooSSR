var express = require('express');
var users = express.Router();

var task = []

/* GET users listing. */
users.get('/', function(req, res, next) {
  res.send(JSON.stringify(task));
});

/* 新建 */
users.post('/', function(req, res, next) {
	task = task.concat(req.body);
  res.send(JSON.stringify(task));
});

/* 更新 */
users.put('/:id', function(req, res, next) {
	for (var i = 0; i < task.length; i++) {
		if(i === parseInt(req.params.id)) {
			task[i] = req.body
		}
	}
  res.send(JSON.stringify(task));
});

/* 删除 */
users.delete('/:id', function(req, res, next) {
  for (var i = 0; i < task.length; i++) {
  	if(i === parseInt(req.params.id)) {
			task.splice(i, 1);
		}
  }
  res.send("success");
});

module.exports = users;
