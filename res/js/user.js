var UserPage = {
  renderFooter: function() {
    $('#Footer').show();
    $('#Footer a').eq(2).addClass('act');
  },
  checkOut: function() {
    sessionStorage.removeItem('token');
    window.location.href = Base.localeUrl + '/login';
  },
  getUserInfo: function() {
    var token = sessionStorage.getItem('token');
    $.ajax({
      url: Base.api + 'getUserInfo',
      type: 'POST',
      dataType: 'json',
      data: {
        token: token,
      },
      success: function(res) {
        if (res.callStatus === 'SUCCEED') {
          var data = res.data;
          $('.user-page .user-name').html(data.userName);
          $('.user-page .sexy').html(data.sexy);
          $('.user-page .mobile').html(data.mobile);
          $('.user-page .address').html(data.address);
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  renderPage: function() {
    // 验证用户是否登录
    Base.checkUserInfo();
    this.getUserInfo();
    this.renderFooter();
  }
};

$(function() {
  UserPage.renderPage();
});