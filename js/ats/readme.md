对象字面量，表达能力
JSON 描述一下
DOM树   AST Tree Abstract
{
  
}

html  document  ？？？ 什么关系
- URL   输入  打开页面后，发生了什么
    download  index.html  html标签
  1. 空白页面  背后发生了什么
  启动了一个tab， 进程1(主进程)
  2. window.url = http://127.0.0.1:5500/js/ats/index.html
  html 文档标记语言
  - tab 主进程 url
  启动一个网络请求 进程2 url 127.0.0.1:5500/   html文件
  - 渲染页面

  web应用  多进程架构
  当我们用chrome  打开页面的时候
  启动四个进程  应用进程(pid 计算及资源调用的最小单元)  浏览器运行
  tab 负责一次页面渲染需要的   主进程
  两个子进程   Network Service  http 请求 200
  GPU 计算  高速css  绘制

  GPU 加速  chro为了让页面加载更快，使用GPU来绘制页面  这也是chrome战胜IE的

  html 文本  text/html  

  将文本 -> dom 对象 内存里面  .... 浏览器是怎么编程的
  chrome  v8
  BOM Browser Object Model
  DOM Document Object Model

  抽象语法树

  api, 可以把所有css 查询出来   styleSheets 

  了解页面的生成过程，浏览器，操作系统中的应用  进程来分阶段理解它
  text/html  html 文本，转变成js document
  浏览器不知道怎么显示HTML
  html -> json