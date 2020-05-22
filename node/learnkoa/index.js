// 轻量级的web 开发框架，js node
const Koa = require('koa'); // 引入koa
const app = new Koa(); // web server
const fs = require('fs'); // node 内置模块  filesystem
// 启动一个服务 函数封装一个服务
// const func = ctx => {
//   console.log(func);
//   ctx.response.body = 'function l';
// }
const main = ctx => {
  console.log(ctx.request,'------------');
  // ctx.response.body = 'Hello World';
  // req   response
  ctx.response.type = 'html';  // 响应头
  // 分层 网站 大一点的网站 
  // 协议 操作系统(内存node  文件系统D:) 网络   数据库
  const html = fs.readFileSync('./template.html','utf-8'); // Sync:同步
  // fs.readFile('./template.html','utf-8',function(err,data){
  //   console.log(data);
  //   ctx.response.body = data;
  // })
  // console.log(html);
  ctx.response.body = html; // 发送出去 
}
// app.use(func);
app.use(main); //  启用了一个服务  给访问者 request 用
app.listen(3000);