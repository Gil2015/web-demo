/* 
 * 给jquery添加一个方法： 获取url里的指定参数
 * 
 * 例:
 *  地址栏地址: www.baidu.com?wd=helloWord
 *  var str = $.getUrlParam('wd')   
 *  得到结果 str = 'helloWord'
 */
$.getUrlParam = function(name){
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

// 定义一个根路径，方便设置页面跳转页
var localeUrl = window.location.origin;

$(function(){
  // vipspa插件 路由配置，地址栏输入url, $('#con')加载对应html模板和js文件
	vipspa.start({
    view: '#Con',                       // 加载html模板的dom节点
    router: {
      'mall': {                         // 路由名
        templateUrl: 'tpl/mall.html',   // 路由对应的html
        controller: 'res/js/mall.js'    // 该页面需要加载的js,该插件缺点，一个页面只能加载1个js文件
      },
      'detail': {
        templateUrl: 'tpl/detail.html',
        controller: 'res/js/detail.js'
      },
      'success': {
        templateUrl: 'tpl/success.html',
        controller: ''
      },
      'defaults': 'mall' //默认路由
    }
  });

  // 底部栏点击跳转首页设置
  $('#Footer').on('click', function() {
    window.location.href = localeUrl + "/#mall";
  });
});