var express = require('express');
var router = express.Router();

const detail_ne555 = [
	{
		title: '功能数量',
		val: '1'
	},{
		title: '端子数量',
		val: '8'
	},{
		title: '最大工作温度',
		val: '70 Cel'
	},{
		title: '最小工作温度',
		val: '0.0 Cel'
	},{
		title: '最大供电/工作电压',
		val: '16 V'
	},{
		title: '最小供电/工作电压',
		val: '4.5 V'
	},{
		title: '额定供电电压',
		val: '5 V'
	},{
		title: '加工封装描述',
		val: 'SOP-8'
	},{
		title: '无铅',
		val: 'Yes'
	},{
		title: '欧盟RoHS规范',
		val: 'Yes'
	},{
		title: '状态',
		val: 'DISCONTINUED'
	},{
		title: '包装形状',
		val: '矩形的'
	},{
		title: '包装尺寸',
		val: 'SMALL OUTLINE'
	},{
		title: '表面贴装',
		val: 'Yes'
	},{
		title: '端子形式',
		val: 'GULL WING'
	},{
		title: '端子间距',
		val: '1.27 mm'
	},{
		title: '端子涂层',
		val: 'MATTE 锡'
	},{
		title: '端子位置',
		val: '双'
	},{
		title: '包装材料',
		val: '塑料/环氧树脂'
	},{
		title: '温度等级',
		val: 'COMMERCIAL'
	},{
		title: '模拟IC其它类型',
		val: '脉冲; 矩形的'
	}]

const detail_74ls = [
	{
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
	}]
var result = [{
	id: '0',
	name: '74LS00',
	company: 'Fairchild Semiconductor',
	desc: {
		ch: '四2输入与非门',
		en: 'MCF52233 LOW COST EVALUA'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '1',
	name: '74LS00A',
	company: 'Motorola',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, PDIP14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, PDIP14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '2',
	name: '74LS00DC',
	company: 'Fairchild',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, CDIP14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, CDIP14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '3',
	name: '74LS00DCQM',
	company: 'ETC',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, PDIP14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, PDIP14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '4',
	name: '74LS00DCQR',
	company: 'Fairchild Semiconductor',
	desc: {
		ch: '',
		en: 'NAND Gate, TTL, CDIP14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '5',
	name: '74LS00DCQR',
	company: 'Hitachi Semiconductor',
	desc: {
		ch: '',
		en: 'NAND Gate'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '6',
	name: '74LS00FC',
	company: ' Fairchild',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, DSO14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, DSO14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '7',
	name: '74LS00FC',
	company: 'Motorola',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, DSO14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, DSO14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '8',
	name: '74LS00FC',
	company: 'ETC',
	desc: {
		ch: 'LS 系列, 四 2输入 与非门, DSO14',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, DSO14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '9',
	name: '74LS00N',
	company: 'Fairchild Semiconductor',
	desc: {
		ch: '',
		en: 'IC,LOGIC GATE,QUAD 2-INPUT NAND,LS-TTL,DIP,14PIN,PLASTIC'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '10',
	name: '74LS00N',
	company: 'ON Semiconductor',
	desc: {
		ch: '',
		en: 'LS SERIES, QUAD 2-INPUT NAND GATE, PDIP14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '11',
	name: '74LS00PC',
	company: 'Fairchild Semiconductor',
	desc: {
		ch: '',
		en: 'NAND Gate, LS Series, 4-Func, 2-Input, TTL, PDIP14'
	},
	detail: [...detail_74ls],
	pdf: ''
},{
	id: '12',
	name: '74LS00PCQR',
	company: 'Fairchild Semiconductor',
	desc: {
		ch: '',
		en: 'NAND Gate, TTL, PDIP14'
	},
	detail: [...detail_74ls],
	pdf: ''
}];

var ne555 = [{
	id: '0',
	name: 'NE555',
	company: 'TY Semicondutor',
	desc: {
		ch: '高性能运算放大器',
		en: 'high-performance operational amplifiers'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '1',
	name: 'NE555',
	company: 'Fairchild Semiconductor',
	desc: {
		ch: '单定时器',
		en: 'Single Timer'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '2',
	name: 'NE5550779A-A',
	company: 'Renesas Electronics',
	desc: {
		ch: '射频功率, 场效应晶体管',
		en: 'RF POWER, FET'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '3',
	name: 'NE555D',
	company: 'Rochester Electronics, Inc.',
	desc: {
		ch: '脉冲; 矩形的, 定时器, PDSO8',
		en: 'PULSE; RECTANGULAR, TIMER, PDSO8'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '4',
	name: 'NE555D',
	company: 'Texas Instruments',
	desc: {
		ch: '',
		en: 'Single Precision Timer 8-SOIC 0 to 70'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '5',
	name: 'NE555D',
	company: 'Fairchild',
	desc: {
		ch: '脉冲; 矩形的, 定时器, PDSO8',
		en: 'PULSE; RECTANGULAR, TIMER, PDSO8'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '6',
	name: 'NE555D',
	company: 'NXP',
	desc: {
		ch: 'SQUARE, 定时器, PDSO8',
		en: 'SQUARE, TIMER, PDSO8'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '7',
	name: 'NE555D-T',
	company: 'NXP',
	desc: {
		ch: 'SQUARE, 定时器, PDSO8',
		en: 'SQUARE, TIMER, PDSO8'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '8',
	name: 'NE555D/DT',
	company: 'STMicroelectronics, Inc.',
	desc: {
		ch: '定时器',
		en: 'TIMER'
	},
	detail: [...detail_ne555],
	pdf: ''
},{
	id: '9',
	name: 'NE555DG4',
	company: 'Texas Instruments',
	desc: {
		ch: '脉冲; 矩形的, 定时器, PDSO8',
		en: 'Single Precision Timer 8-SOIC 0 to 70'
	},
	detail: [...detail_ne555],
	pdf: ''
}]

/* 查询 */
router.get('/:id', function(req, res, next) {
	if(req.params.id === 'ne555'){
		res.send(JSON.stringify(ne555));
	}else{
		res.send(JSON.stringify(result));
	}
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