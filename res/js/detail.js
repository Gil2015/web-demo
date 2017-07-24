// 定义商品详情页对象
var DetailPage = {
  dogNum: null,
  dogPrice: null,
  // 定义获取商品详情函数
  getDetailData: function() {
    // 将self指向DetailPage对象
    var self = this;
    // getUrlParam时app.js里给$添加的方法，这里拿来用
    var num = $.getUrlParam('dogNum');  
    $.ajax({
      url: 'http://www.chenyanni.cn/api/detail/getDogDetail',
      type: 'POST',
      dataType: 'json',
      data: {
        dogNum: num       // 要传递给后台的参数
      },
      success: function(res) {
        console.log(res);
        var data = res.data;

        // 把相应数据填充到页面里
        $('.detail-page .dog-img').attr('src', data.imgUrl);
        $('.detail-page .desc').text(data.description);
        $('.detail-page .status').html('￥' + data.price + '<span>月销' + data.buyNum + '笔</span>');
        $('.detail-page .all').text(data.price);

        // 把后面会用到的数据保存到DetailPage对象里
        self.dogNum = num;
        self.dogPrice = data.price;
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  // 定义购买商品函数
  buy: function() {
    // 此请求的请求参数正常都是从页面里获取的，这里节省时间直接写死了
    $.ajax({
      url: 'http://www.chenyanni.cn/api/detail/buySuccess',
      type: 'POST',
      dataType: 'json',
      data: {
        price: 2800,
        dogNo: 20170901001,
        num: 1,
        address: '上海',
        userName: '陈燕妮',
        phone: '13636377901'
      },
      success: function(res) {
        if (res.callStatus === 'SUCCEED') {
          window.location.href = localeUrl + "/#success";
        } else {
          alert(res.message);
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  renderPage: function() {
    var self = this;
    self.getDetailData();

    // 增加购买数量事件
    $('.detail-page .add').on('click', function(){
      var num = parseInt($('.detail-page .num').text());
      num += 1;
      $('.detail-page .num').text(num);
      $('.detail-page .all').text(self.dogPrice * num);
    });

    // 减少购买数量事件
    $('.detail-page .reduce').on('click', function() {
      var num = parseInt($('.detail-page .num').text());
      if (num > 1) {
        num -= 1;
        $('.detail-page .num').text(num);
        $('.detail-page .all').text(self.dogPrice * num);
      }
    });

    $('.buy-btn').on('click', self.buy);
  }
}

$(function() {
  DetailPage.renderPage();
})
