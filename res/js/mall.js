var MallPage = {
  getMallLists: function() {
    $.ajax({
      url: 'http://www.chenyanni.cn/api/mall/getLists',
      type: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res);
        var data = res.data;

        // 将ajax请求到的数据 渲染出来
        for (var i = 0; i < data.length; i++) {
          var dogName = data[i].name,
            imgUrl = data[i].imgUrl,
            price = data[i].price,
            buyPeople = data[i].buyNum,
            dogNum = data[i].dogNum;
          var html= '<li data-id="' + dogNum + '">' +
                      '<img src="' + imgUrl + '">' +
                      '<h3>' + dogName + '</h3>' +
                      '<p>' +
                        price + '元<span>' + buyPeople + '人购买</span>' +
                      '</p>' +
                    '</li>';
          $('.mall-page .lists').append(html);
        }

        // 添加每个项的点击事件
        $('.mall-page .lists li').on('click', function() {
          var num = $(this).attr('data-id');
          window.location.href = localeUrl + "/#detail?dogNum=" + num;
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
}

$(function() {
  MallPage.getMallLists();
})