import { add, min, bar } from './math.js'

console.log(add(1, 2))
// tree-shaking: min 没用打包
// js: 
// 1. 没用模块化普通的脚本文件
// 2. moudle 一个模块
console.log(bar)
setTimeout(() => {
  console.log(bar)
}, 5000)