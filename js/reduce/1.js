function reduce(arr, reuceCallback, initialValue) {
  // 参数的校验
  if (!Array.isArray(arr) || !arr.length || typeof(reduceCallback) !== 'function') {
    return [];
  }
  else{
    // initialValue 0 1

    // 定义中间变量
    let hasIninitialValue = initialValue !== undefined;

    // 分步法 定义变量
    let value = hasIninitialValue?initialValue:arr[0];
    for (let i = hasIninitialValue? 0: 1; i < arr.length; i++) {
      value = reuceCallback(value, arr[i], i, arr)
    }

    // 抽象能力
    // reuceCallback 4个能力
    // 1. initialValue false 少执行一次
    // 2. reduceCallback 怎么合并
    
    // let value;
    return value;
  }
}
reduce([1,2,3],function(pre, cur, index, arr){

},0)

// Array.prototype.reduceFn 