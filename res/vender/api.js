/*
 * 模拟后台定义接口，需借助mock.js
 * 有兴趣的可以百度mock.js使用方法
 */
// 获取首页商品列表接口
Mock.mock('http://www.dogMall.com/api/mall/getLists', {
  callStatus: 'SUCCEED',
  message: '无异常',
  data: [
    {
      id: 0,
      name: '阿拉斯加',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/alasijia.jpeg',
      dogNum: 20170520001
    },
    {
      id: 1,
      name: '边境牧羊犬',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/bianjing.jpeg',
      dogNum: 20170520002
    },
    {
      id: 2,
      name: '比熊',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/bixiong.jpeg',
      dogNum: 20170520003
    },
    {
      id: 3,
      name: '博美犬',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/bomei.jpeg',
      dogNum: 20170520004
    },
    {
      id: 4,
      name: '哈士奇',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/hashiqi.jpeg',
      dogNum: 20170520005
    },
    {
      id: 5,
      name: '金毛犬',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/jinmao.jpeg',
      dogNum: 20170520006
    },
    {
      id: 6,
      name: '柯基犬',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/keji.jpeg',
      dogNum: 20170520007
    },
    {
      id: 7,
      name: '秋田犬',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/qiutian.jpeg',
      dogNum: 20170520008
    },
    {
      id: 8,
      name: '孙红雷',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/sunhonglei.jpeg',
      dogNum: 20170520009
    },
    {
      id: 9,
      name: '雪纳瑞',
      'price|500-3000': 3000,
      'buyNum|1-2000': 2000,
      imgUrl: 'res/img/xuenarui.jpeg',
      dogNum: 20170520010
    }
  ],
  currentPage: 1,
  numberPerPage: 10,
  totalNumber: 92,
  totalPage: 10
});

// 订单接口
Mock.mock('http://www.dogMall.com/api/getOrderLists', {
  callStatus: 'SUCCEED',
  message: '无异常',
  'data|2-10': [{
    'name|1': ['哈士奇','金毛','雪纳瑞','秋田犬','阿拉斯加','比熊','博美犬','柯基犬'],
    'description': '@cparagraph(2)',
    'imgUrl|1': [
      'res/img/alasijia.jpeg',
      'res/img/bianjing.jpeg',
      'res/img/bixiong.jpeg',
      'res/img/bomei.jpeg',
      'res/img/hashiqi.jpeg',
      'res/img/jinmao.jpeg',
      'res/img/keji.jpeg',
      'res/img/qiutian.jpeg',
      'res/img/sunhonglei.jpeg',
      'res/img/xuenarui.jpeg'
    ],
    'price|500-3000': 3000,
    'buyNum|1-3': 3,
    'buyDate': '@date(yyyy-MM-dd)',
    'status|1': ['finish', 'send']
  }],
});

// 商品详情接口
Mock.mock('http://www.dogMall.com/api/detail/getDogDetail', {
  callStatus: 'SUCCEED',
  message: '无异常',
  data: {
    'name|1': ['哈士奇','金毛','雪纳瑞','秋田犬','阿拉斯加','比熊','博美犬','柯基犬'],
    'description': '@cparagraph(3)',
    'imgUrl|1': [
      'res/img/alasijia.jpeg',
      'res/img/bianjing.jpeg',
      'res/img/bixiong.jpeg',
      'res/img/bomei.jpeg',
      'res/img/hashiqi.jpeg',
      'res/img/jinmao.jpeg',
      'res/img/keji.jpeg',
      'res/img/qiutian.jpeg',
      'res/img/sunhonglei.jpeg',
      'res/img/xuenarui.jpeg'
    ],
    'price|500-3000': 3000,
    'buyNum|1-2000': 2000
  },
});

// 购买成功接口
Mock.mock('http://www.dogMall.com/api/detail/buySuccess', {
  callStatus: 'SUCCEED',
  message: '无异常'
});

// 购买失败接口
Mock.mock('http://www.dogMall.com/api/detail/buyFailed', {
  callStatus: 'FAILED',
  message: '该狗狗已卖完'
});

// 登陆接口
Mock.mock('http://www.dogMall.com/api/login', {
  callStatus: 'SUCCEED',
  message: '无异常',
  data: {
    userName: '妮妮',
    token: 'TDAKCBK134JKAS9KJ21309GS3M'
  },
});

// 获取用户信息
Mock.mock('http://www.dogMall.com/api/getUserInfo', {
  callStatus: 'SUCCEED',
  message: '无异常',
  data: {
    userName: '妮妮',
    sexy: '女',
    address: '上海市 浦东新区 陆家嘴街道 乳山路',
    mobile: '13636XXXXXX1'
  },
});
