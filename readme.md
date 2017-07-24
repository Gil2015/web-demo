# Web Demo
一个轻量级的前后端分离demo。<br>
无前端自动化工具，框架，小巧。<br>
有路由功能，包含ajax代码请求接口示例<br>
demo适合前端新人学习，或用于移动端小型项目。中大型项目推荐vue,react,angular<br>
demo知识点: 前后端分离，参照接口文档使用ajax请求

<div style="background-color: #f1f8ff; border: 1px solid #c8e1ff; border-radius: 3px;padding: 12px;">
<h3>项目结构说明</h3>
res: resource缩写<br>
  ┣━ img: 图片资源<br>
  ┣━ js: 自定义的js文件<br>
  ┣━ style: css等样式文件<br>
  ┗━ vender: 插件<br>
    &emsp;&emsp;┣━ api.js: 模拟后台自定义接口，可无视<br>
    &emsp;&emsp;┣━ mock-min.js: 模拟接口数据必要插件，可无视<br>
    &emsp;&emsp;┣━ vipspa.min.js: 路由必要插件2kb<br>
    &emsp;&emsp;┗━ zepto.min.js: 可替换jquery<br>
tpl: template缩写，该文件夹内放所有html模板或组件<br>
index.html: 服务器根目录加载的index页面<br>
接口文档.html: 便于新人查看接口文档对照ajax代码学习，通常项目开发接口文档由后台给到前端
</div>
