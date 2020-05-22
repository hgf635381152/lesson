// const math = require('./math');
// const {add, minus} = math;
// console.log(math);
// 解构
const {add, minus} = require('./math');

// let result = add(3, 7);
// let expected = 10;
// if(result !== expected){
//   throw new Error('3 + 7 = 10');
// }

// let result1 = add(3, 7);
// let expected1 = -4;
// if (result1 !== expected1) {
//   throw new Error('3 - 7 = -4');
// }
 
function expect(result) {
  return{
    toBe:function(value){
      if (result !== value){
        throw new Error(`预期值和真实值不一样`);
      }
    }
  }
}
function test(desc, fn){
  // fn 有没有抛出错误
  // 有必要 try catch
  // 代码
  // try catch 结构捕获错误不会中断代码
  try{
    fn();
    console.log(`${desc}通过`);
  }catch(err){
    console.log(`${desc}不通过`);
  }
}
test('测试加法',() => {
  expect(add(3, 7)).toBe(10);
})
test('测试减法',() => {
  expect(minus(3, 7)).toBe(-4);
})
// 提示 欠缺  不能够提示具体哪里错误

