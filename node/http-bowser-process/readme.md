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