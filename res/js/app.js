var Base = {
  // 根路径，方便设置页面跳转页
  localeUrl: window.location.origin,
  api: 'http://www.dogMall.com/api/',
  // 验证用户是否登录
  checkUserInfo: function () {
    var token = sessionStorage.getItem('token');
    if (!token) {
      window.location.href = Base.localeUrl + '/login';
    }
  },
  /* 
   * 获取url里的指定参数
   * 例:
   *  地址栏地址: www.baidu.com?wd=helloWord
   *  var str = $.getUrlParam('wd')   
   *  得到结果 str = 'helloWord'
   */
  getUrlParam: function () {
    var after = window.location.hash.split("?")[1];
    if (after) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = after.match(reg);
      if (r != null) {
        return  decodeURIComponent(r[2]);
      } else {
        return null;
      }
    }
  }
}

$(function(){
  // vipspa插件 路由配置，地址栏输入url, $('#con')加载对应html模板和js文件
	vipspa.start({
    view: '#Con',                       // 加载html模板的dom节点
    router: {
      'mall': {                         // 路由名
        templateUrl: 'tpl/mall.html',   // 路由对应的html
        controller: 'res/js/mall.js'    // 该页面需要加载的js,该插件缺点，一个页面只能加载1个js文件
      },
      'mall/detail': {
        templateUrl: 'tpl/detail.html',
        controller: 'res/js/detail.js'
      },
      'mall/success': {
        templateUrl: 'tpl/success.html',
        controller: 'res/js/success.js'
      },
      'user': {
        templateUrl: 'tpl/user.html',
        controller: 'res/js/user.js'
      },
      'order': {
        templateUrl: 'tpl/order.html',
        controller: 'res/js/order.js'
      },
      'defaults': 'mall' //默认路由
    }
  });

  // 底部栏点击跳转首页设置
  $('#Footer a').on('click', function() {
    $('#Footer a').removeClass('act');
    var url = $(this).attr('data-url');
    window.location.href = Base.localeUrl + url;
  });
});