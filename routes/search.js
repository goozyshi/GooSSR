var express = require('express');
var router = express.Router();

var result = [{
	id: '0',
	name: '74LS00',
	company: 'Fairchild Semiconductor Corporation',
	desc: {
		ch: '四2输入与非门',
		en: 'MCF52233 LOW COST EVALUA'
	},
	detail:[],
	pdf: ''
},{
	id: '1',
	name: '74LS00FC',
	company: ' Fairchild',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, DSO14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, DSO14'
	},
	detail: {
		fun: 4,
		num: 14
	},
	pdf: ''
},{
	id: '2',
	name: '74LS00',
	company: 'Fairchild Semiconductor Corporation',
	desc: {
		ch: '四2输入与非门',
		en: 'MCF52233 LOW COST EVALUA'
	},
	detail:[],
	pdf: ''
},{
	id: '3',
	name: '74LS00FC',
	company: ' Fairchild',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, DSO14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, DSO14'
	},
	detail: {
		fun: 4,
		num: 14
	},
	pdf: ''
},{
	id: '4',
	name: '74LS00',
	company: 'Fairchild Semiconductor Corporation',
	desc: {
		ch: '四2输入与非门',
		en: 'MCF52233 LOW COST EVALUA'
	},
	detail:[],
	pdf: ''
},{
	id: '5',
	name: '74LS00FC',
	company: ' Fairchild',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, DSO14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, DSO14'
	},
	detail: {
		fun: 4,
		num: 14
	},
	pdf: ''
},{
	id: '6',
	name: '74LS00',
	company: 'Fairchild Semiconductor Corporation',
	desc: {
		ch: '四2输入与非门',
		en: 'MCF52233 LOW COST EVALUA'
	},
	detail:[],
	pdf: ''
},{
	id: '7',
	name: '74LS00FC',
	company: ' Fairchild',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, DSO14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, DSO14'
	},
	detail: {
		fun: 4,
		num: 14
	},
	pdf: ''
}]

/* 查询 */
router.get('/', function(req, res, next) {
	res.send(JSON.stringify(result));
});

/* 新建 */
router.post('/', function(req, res, next) {
	result = result.concat(req.body);
  res.send(JSON.stringify(result));
});

/* 更新 */
router.put('/:id', function(req, res, next) {
	for (var i = 0; i < result.length; i++) {
		if(result[i].id === parseInt(req.params.id)) {
			result[i] = req.body
		}
	}
  res.send(JSON.stringify(result));
});

/* 删除 */
router.delete('/:id', function(req, res, next) {
  for (var i = 0; i < result.length; i++) {
  	if(result[i].id === parseInt(req.params.id)) {
			result.splice(i, 1);
		}
  }
  res.send("success");
});

module.exports = router;