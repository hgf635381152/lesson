const express = require('express');
const md5 = require('md5');

const app = express();
// GET 路由
app.get('/big.js', (req, res) => {
  console.log('111111111')
  const fs = require('fs')
  const jsContent = fs.readFileSync('./big.js', 'utf-8')
  // 一堆头字段
  // content-type
  // 强缓存: 200 from memory/disk cache, 请求不会到达服务器
  // expires: 时间   系统是可以随意设置的
  // cache-control  相对时间  
  // if-modified-since: 文件修改了文件最后修改时间会变化
  // 服务器 对比前后两次文件有没有变化 从时间角度考虑  有缺陷 
  res.setHeader('Cache-Control', 'max-age=3')

  // 协商缓存: 请求会到达服务器
  // 20s后   请求(会携带一个  if-none-match 的字段) 到达服务器
  // if-none-match: 浏览器发现  上一次请求  服务器 有 Etag 设置, 浏览器自动发送一个
  
  const Etag = md5(jsContent)
  const oldEtag  = req.headers['if-none-match']
  if (Etag === oldEtag) {
    // 文件没有变化
    // 从缓存中读取  304(not modified)
    res.sendStatus(304).end('')
    return ;
  }
  if (req.headers) {
    res.setHeader('Etag', Etag)
  }
  res.end(jsContent)
})

app.listen(9090, () => {
  console.log(9090)
})