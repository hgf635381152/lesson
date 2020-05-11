const ages = [32, 15, 19, 12];
// 所有大于18 的数字
// const nums = []; // 空间的开销 O(n)
// for (let age of ages){
//     if(age >= 18){
//         nums.push(age);
//     }
// }
// console.log(nums);
// ages 数组, filter 语义化的 过滤
// 1.计数 for 机器化
// 2.表述性好一些 forEach 函数式编程 提升可读性
const adultArr = ages.filter(age => age >=18);
//
const adultPresent = ages.some(age => age >= 50);
//  所有人满足需求
//  取名
// console.log(adultPresent);
const allOldEnough = ages.every(age => age => 50);
console.log(allOldEnough);
