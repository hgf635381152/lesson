Tecent 腾讯  

基石？  C语言
c++, js, go, java, python

腾讯  做一个网络虚拟传呼机
QQ 连接一切  即时通信   TCP/IP  协议

HTTP  TCP/IP UDP  WebSocket

- koa node web 开发框架 
  7天后  blog 博客网站
  koa 加速了 node web 开发 一个web服务就是一个web  app
  koa 在 3000端口上提供了http 协议访问服务，
  https://127.0.0.1:3000

  http.createServer()
  http node 内置模块  createServer  启动了服务
  koa 封装了它们

  http 协议本质是干什么的？
  ctx context 上下文环境(request response)
  http x协议 诞生于1991年，用于传输学术论文的
  采用基于请求(ctx.request) 响应(ctx.response)的模式，在网络间传输HTML超文本的内容   HTTP/0.9

- HTTP(web server  应用层协议) 基于TCP(Tracnsport Control Protocol) 协议
  TCP 用户 移动或电信 运营商提供的动态IP，网站 阿里云(IP) 传输html
  TCP连接  三次握手  
  应用层   HTTP
  表示层
  会话层
  传输层   TCP
  网络层
  数据链路层
  物理层       七层结构  必看
- 建立连接后，会发送一个GET请求行(request method GET url / )的信息,
GET  /   template.html
- 服务器收到请求信息后， 读取对应的HTML文件，并将数据以ASC 返回给用户浏览器
- 断开连接