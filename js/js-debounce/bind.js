// call apply  一类
// bind  参数可分批传递
function sum(a, b, c){
  return a + b + c;
}
sum.call(null, 1, 10, 20);
// 参数完整
sum.bind(null, 1, 10);
// 参数可以不完整  会返回一个函数 让我们接着传递剩下的参数
let add11 = sum.bind(null, 1, 10);
let res = add11(20);
console.log(res);

// 
function test(reg, str) {
  return reg.test(str);
}
let str0 = `
`
let str1 = `123`
let str2 = `456
`
let str3 = `\n789`
let whiteSpace = /\n/g
// \n n: new line
// \t t: tab
//  glob: 全局
// console.log(test(whiteSpace, str0));
// console.log(test(whiteSpace, str1));
// console.log(test(whiteSpace, str2));
// console.log(test(whiteSpace, str3));
// test: 测试一下  某个字符串不存在回车
// 每次  都带着   whiteSpace
let hasWhiteSpace = test.bind(null,whiteSpace);
console.log(hasWhiteSpace(str0));
console.log(hasWhiteSpace(str1));
console.log(hasWhiteSpace(str2));
console.log(hasWhiteSpace(str3));

let hasTabSpace = test.bind(null, /\t/g);
console.log(hasTabSpace('\t123'));
let hasNumber = test.bind(null, /[0-9]/g);
console.log(hasNumber('abc123'));
