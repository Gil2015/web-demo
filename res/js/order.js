var OrderPage = {
  renderFooter: function() {
    $('#Footer').show();
    $('#Footer a').eq(0).addClass('act');
  },
  getOrderLists: function() {
    var token = sessionStorage.getItem('token');
    $.ajax({
      url: Base.api + 'getOrderLists',
      type: 'POST',
      dataType: 'json',
      data: {
        token: token,
      },
      success: function(res) {
        if(res.callStatus === 'SUCCEED') {
          var data = res.data;
          for( var i = 0; i < data.length; i ++) {
            var statusHtml = '';
            if (data[i].status === 'send') {
              statusHtml = '<p class="status red">发货中</p>'
            } else {
              statusHtml = '<p class="status">已完成</p>'
            }
            var html =  '<div class="list '+ data[i].status +'">' +
                          '<div class="box">' +
                            '<img src="'+ data[i].imgUrl +'">' +
                            '<div class="info">' +
                              '<h3>'+ data[i].name +'</h3>' +
                              '<p>'+ data[i].description +'</p>' +
                              '<span>'+ data[i].buyDate +'</span>' +
                            '</div>' +
                          '</div>' +
                          '<p class="bottom">共'+ data[i].buyNum +'件商品，合计:￥<span>'+ (data[i].buyNum * data[i].price) +'元</span></p>' +
                          statusHtml
                        '</div>';
            $('.order-page .lists').append(html);
          }
        }
        OrderPage.navChange();
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  navChange: function() {
    $('.order-page .nav li').on('click', function() {
      $('.nav li').removeClass('act');
      $(this).addClass('act');
      var type = $(this).attr('data-type');
      switch (type) {
        case 'all':
          $('.list').show();
          break;
        case 'send':
          $('.send').show();
          $('.finish').hide();
          break;
        case 'finish':
          $('.finish').show();
          $('.send').hide();
          break;
        default:
          break;
      }
    });
  },
  renderPage: function() {
    // 验证用户是否登录
    Base.checkUserInfo();
    this.renderFooter();
    this.getOrderLists();
  }
};

$(function() {
  OrderPage.renderPage();
});