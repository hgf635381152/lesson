const express = require('express');
//  koa 是 express 的 child
const data = require('./db.json');
const app = express();
app.get('/', function(req, res) {
  // api  res.end(JSON.stringif(express))
  // Content-Type: application/json; charest=utf-8
  res.json(data);
})


// 设计一个URL  访问第一首诗
// restful   URL  暴露一个资源
app.get('/posts/:id', function(req, res){
  let id = req.params.id;
  // http"//www.baidu.com/posts/:id?a=1
  let post = data.posts.filter(post => post.id == id);
  res.json(post);
})

// 添加一篇新文章, 大家设计下URL + 动词
// post
// app.post("/posts",)

app.listen(8081);