var arr = [1,2,3,4];
// reduce  total

// 链式调用: arr.map().filter()
// 1. 良好的可读性  代码风格
// 2. 

var sum = arr.reduce(function(pre, cur, index, arr) {
  console.log(pre, cur, index);
  return pre + cur;
},0);

console.log(sum);