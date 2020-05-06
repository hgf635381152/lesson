let a = 1;
let b = 1;
let c = [1];
let d = [1];
let e = '1';
let g = {};
let h = {};
console.log(a == e, a === e);
console.log(a == b);
console.log(c == d);  // false?
// 存储 引用类型的时候，存在不同的地方
// c,d   g,h 指向不同的地址
// 地址不一样  导致 ==，===都不相等
console.log(c === d);
console.log(g == h);
// 两个 == 判断啥 相不相等