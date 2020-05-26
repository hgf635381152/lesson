const MyKoa = require("./lib/application"); // 全栈  koa  class
// // 手写koa  模块化的
const app = new MyKoa();

// // 源码
// // 上下文   req  res

app.use((req, res) => {
  res.end('hello world!')
})

app.listen(3001, () => {
  console.log(`你的应用在3001端口启动`)
});