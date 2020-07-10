## commonJS

导出:
module.exports = function() {}
module.exports = {}

导入:
require

1. commonjs 一定要代码运行时才知道引入了哪些模块
2. 可以出现在逻辑分支里


## e5-module

1. import/export  不论书写位置, 都会提前执行 
2. 在代码静态分析(代码不用执行), 就可以分析出引入了哪些模块

AMD
CMD
UMD: 统一模块化方案
```JS
(function() {
  // 判断代码最终执行环境到底是 node 还是 浏览器
})()
```
CJS
es