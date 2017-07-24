# Web Demo
一个轻量级的前后端分离demo。<br>
无前端自动化工具，框架，小巧。<br>
有路由功能，包含ajax代码请求接口示例<br>
demo适合前端新人学习，或用于移动端小型项目。中大型项目推荐vue,react,angular<br>
demo知识点: 前后端分离，参照接口文档使用ajax请求<br>
`在线浏览demo`: [https://gil2015.github.io/web-demo/](https://gil2015.github.io/web-demo/)


<br>

### 项目结构说明
```
res: resource缩写
  ┣━ img: 图片资源
  ┣━ js: 自定义的js文件
  ┣━ style: css等样式文件
  ┗━ vender: 插件
         ┣━ api.js: 模拟后台自定义接口，可无视
         ┣━ mock-min.js: 模拟接口数据必要插件，可无视
         ┣━ vipspa.min.js: 路由必要插件2kb
         ┗━ zepto.min.js: 可替换jquery
tpl: template缩写，该文件夹内放所有html模板或组件
index.html: 服务器根目录加载的index页面
接口文档.html: 便于新人查看接口文档对照ajax代码学习，通常项目开发接口文档由后台给到前端
```


<br>

### 本地运行demo
```
因为有ajax请求，所以必须要本地起服务器浏览demo。
可以用webstorm，hbuilder，tomcat等起，这里示范使用http-server起服务器:
```
1. 安装node.js
2. 打开命令行工具,输入`npm install http-server -g` 全局安装http-server插件
3. 命令行工具切换到项目根目录,输入执行`http-server`
4. 浏览器地址栏输入localhost:8080(或插件指定端口),完毕
