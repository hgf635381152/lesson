## reg
浏览器: xhr  fetch
node: http.get()

不同的api -> http 

http: 超文本传输协议
- xhr
```js
const xhr = new Xmlhttprequest();
xhr.setheader('Content-Type':'application/json');
xhr.open('POST','api.com',true);
xhr.send({a: 1, b: 2 })

- 浏览器拼接报文
  http1.1 报文纯文本
  - 首行
  - 首部
  - \r\n
  - 实体

## 解析报文
split('\r\n');

限制：必须等到拿到一个完整的报文
现实：报文传输  可以允许我们分段传输

## 解析
FSM (finate, state, machine)
Infinty: 正无穷  负无穷  除法

浏览器解析报文：body(html), header, 响应行
html怎么渲染出来  浏览器也要解析 html
js 怎么被执行  解析 js

## 编译原理

代码都是字符串
- 词法分析(分词)： 代码切割成一个个最小的单位
- 语法分析
- 生成中间代码
- 生成目标代码