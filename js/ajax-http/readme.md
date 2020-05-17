## 协议
应用层上的一个协议
fe  =>  http  =>  rd(数据库)
前端：李宗盛  传给  后端
后端：李宗盛的歌  传给  前端

两方传输数据，都要遵守 http 协议(规则)

https://www.baidu.com/   浏览器：http方式  去请求资源
http APP


## ajax
ajax： 无需重新加载整个网页的情况下，能够更新部分网页的技术

## 同步  异步
一行接着一行执行
代码书写的顺序  并不是执行的顺序

1. 双击打开
file 协议

2. live-server
http 协议
127.0.0.1 IP 四个数字(0~255)
locahost 域名

https://www.baidu.com/  
61.135.169.121:443

端口存在的目的：
一台服务器(电脑),运行很多东西
port：区别每一个应用
ip地址能够找到你的电脑
假设：
数据库  8060
提供搜索服务  占用  443
...          占用  ...

## http 规定
- 请求行
  - 方法：GET juejin.com?query=js
  - url:juejin.com?query=js
  - 版本1.1

- 首(头)部
  - key：value
  - Content-Type

- 实体
  - 传输的具体的数据
