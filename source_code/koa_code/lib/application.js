const http = require('http');


class MyKoa{
  constructor() {
    // 手写代码   源码分析
    console.log('koa手写');
    this.fn = undefined;
  }
  // listen  use 
  // 有
  listen(...args) {
    let server = http.createServer(this.fn);
    server.listen(...args);
  }
  use(fn) {
    this.fn = fn;
  }
}



module.exports = MyKoa;
