'use strict';

const add = (a, b) => {
  return a + b
};

var bar = 'bar';
setTimeout(() => {
  bar = 'biz';
}, 3000);

console.log(add(1, 2));
// tree-shaking: min 没用打包
console.log(bar);
setTimeout(() => {
  console.log(bar);
}, 5000);
