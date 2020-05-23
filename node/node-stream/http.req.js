const http = require('http');
const fs = require('fs');
const request = require('request');

request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'));
http.createServer((req,res) => {
  // GET 
  // juejin.com/search>type=all&query=js
  // 后端会接受
  // 前端  type=all&query=js  当做流的方式过来  后端
  // console.log(req);
  // GET:数据 放到 url
  // POST：数据 放到 实体
  const writeStream = fs.createWriteStream('./params.txt');
  // postman 以 post 提交过来的数据 保存搭配 params.txt
  req.pipe(writeStream);
  res.end('ok');
})
.listen(8088, () => {
  console.log('8088');
})