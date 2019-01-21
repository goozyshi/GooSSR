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
	detail: [{
		title: '功能数量',
		val: '4'
	},{
		title: '端子数量',
		val: '14'
	},{
		title: '最大工作温度',
		val: '70 Cel'
	},{
		title: '最小工作温度',
		val: '0.0 Cel'
	},{
		title: '最大供电/工作电压',
		val: '5.25 V'
	},{
		title: '最小供电/工作电压',
		val: '4.75 V'
	},{
		title: '额定供电电压',
		val: '5 V'
	},{
		title: '加工封装描述',
		val: 'DFP-14'
	},{
		title: '状态',
		val: 'DISCONTINUED'
	},{
		title: '工艺',
		val: 'TTl'
	},{
		title: '包装形状',
		val: 'RECTANGULAR'
	},{
		title: '包装尺寸',
		val: 'SMALL OUTLINE'
	},{
		title: '表面贴装',
		val: 'Yes'
	},{
		title: '端子形式',
		val: 'FLAT'
	},{
		title: '端子涂层',
		val: 'TIN LEAD'
	},{
		title: '端子位置',
		val: 'DUAL'
	},{
		title: '包装材料',
		val: 'UNSPECIFIED'
	},{
		title: '温度等级',
		val: 'COMMERCIAL'
	},{
		title: '系列',
		val: 'LS'
	},{
		title: '逻辑IC类型',
		val: 'NAND'
	},{
		title: '输入数',
		val: '2'
	},{
		title: '传播延迟TPD',
		val: '10 ns'
	},
	],
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