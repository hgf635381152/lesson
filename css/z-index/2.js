

function sum1(a, b, c) {
  return a + b + c;
}
function curry(fun) {
  const len = fun.length;
  // console.log(len);
  // fun 普通的函数
  // return 出去的就是 具有 柯里化（函数参数分批次）
  // 无论你分几次传参数，接收到之后放在 args 里面
  let args = [];
  function help(...arg) {
    args = args.concat(arg);
    if (args.length >= len) {
      return fun(...args);
    } else {
      return help;
    }
  }
  return help;
}
let curriedSum = curry(sum1);
// 分批
console.log(curriedSum(1)(2)(3))
