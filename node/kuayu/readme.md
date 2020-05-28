## 跨域
浏览器安全策略

一个源向另外一个源发出请求
同源： 同协议(http/https)，同域名，同端口
不同源：产生跨域

CORS: cross origin resousrce share

前后端分开部署，前后端各自有自己的域名

## 一
1. Access-Control-Allow-Origin  设置域


## http 头
请求头:  
accept

响应头:
Set-Cookie

通用头：
Content-Type: 
- 请求的时候带给后端的内容的类型
- 后端告诉前端我给资源的类型：MIME

## 简单请求
跨域直接发出请求

## 非简单请求
- OPTIONS  preflight
- POST / api

## JSONP
不同于  xhr  fetch  不受跨域限制
img
src
link

借助了script
1. jsonp  后端给你返回的是什么