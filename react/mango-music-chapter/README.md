1. 做react/vue项目， 仿一个音乐类的
2. 做一个上线的业务  思路  架构  技能点

- react  组件由 组件component实例 和 一个css文件 styl
  create-react-app   css/less
  没有必要用官方的create-react-app  从项目模板开始做新项目
  头条
  
  类文件大写， 一个文件夹一个组件， 便于维护和模块化

- 单页应用   Single Page Application  SPA
  使用路由 Route
  只有一个页面的应用
  提升网站的用户体验
  点击路由时， 不会重新刷新整个页面  而是根据路由的配置， 把相应的组件显示出来

- 单页应用设计思路:
  根据界面  可以分析出  头尾不动  中间内容根据 Route 匹配 