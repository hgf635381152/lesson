// 引入 http 模块
const http = require('http');
const fs = require('fs');
// 1.前端 ajax 传输数据给后端，后端接受前端数据
// 2.响应数据给前端
// baidu.com -> 一段 html -> 浏览器拿到html 渲染成立页面
// MIME
// text/html
// http:127.0.0.1:8081 => 把 ajax.html 内容返回给前端
const server = http.createServer(function(req,res){
  console.log('当前正在请求',req.url);
  if (req.url.includes('search')){
    // search 搜索功能
    //  /  首页功能
    res.end(req.url.split('?')[1]);
    return;
  }
  res.writeHead(200,{
    'Content-Type':'text/html;charset=utf-8'
  })
  const file = fs.readFileSync('./ajax.html',{encoding:'utf8'})
  res.end(file);
});
server.listen(8081,function(){
  console.log('server is running http:127.0.0.1:8081')
})