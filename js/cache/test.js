Promise.resolve(1).then(console.log);  // ??
let arr = [1, 2, 3];
console.log(arr.map(parseInt))    // ??
// 
// Promise.all 当所有的 promise 都完成的时候才认为 resolve
// 有一个 为 reject 就为 reject
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
Promise.all([p1, p2]).then(console.log)
  // 要你完成：不管最终的他们是resolve，还是 reject。
  // 我只想要最终的，状态变化完的结果，怎么办。
  // allSellted es10