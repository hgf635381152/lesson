const fs = require('fs');

function copy(sourceUrl,destUrl) {
  // fs.readFile(sourceUrl,(err,info) => {
  //   if(!err){
  //     fs.writeFile(destUrl,info,(err) => {
  //       if (!err) {
  //         console.log('拷贝完毕');
  //       }
  //     })
  //   }
  // })
  // 源头
  // 流：基础类  Stream
  // 可读流
  // 可写流
  // 双工流
  const readStream = fs.createReadStream(sourceUrl);
  const writeStream = fs.createWriteStream(destUrl);
  readStream.pipe(writeStream);
  // pipe === 
}
// 不用流
// 读完一个文件得到内容   info 变量放到我们计算机内存里面的  把写到某个地方
// 区别
// 前端：baidu.com -> html,css,js 浏览器
// 浏览器执行  js  浏览器申请内存  多人各自运行   天然就是分布式

// 后端：baidu.com 一台服务器    处理多人的请求
// 内存占用多  baidu.com  卡  所有人都卡
copy('./readme.md','./copy.md')