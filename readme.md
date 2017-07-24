# Web Demo
`一个轻量级的前后端分离demo。`

<h3>项目结构说明</h3>

res: resource缩写<br>
  ┣img: 图片资源<br>
  ┣js: 自定义的js文件<br>
  ┣style: css等样式文件<br>
  ┗vender: 插件<br>
    ┣api.js: 模拟后台自定义接口，可无视
    ┣mock-min.js: 模拟接口数据必要插件，可无视
    ┣vipspa.min.js: 路由必要插件2kb
    ┗zepto.min.js: 可替换jquery
tpl: template缩写，该文件夹内放所有html模板或组件
index.html: 服务器根目录加载的index页面
接口文档.html: 便于新人查看接口文档对照ajax代码学习，通常项目开发接口文档由后台给到前端
