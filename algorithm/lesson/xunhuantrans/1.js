// [1,2,3,4,5,6,7]        k = 3
// [5,6,7,1,2,3,4]
// function Rshift(arr, k) {
//   Arr = arr.concat();
//   if (k % arr.length == 0)  return arr
//   for (let i = 0; i < arr.length; i++){
//     Arr[(i + k) % arr.length] = arr[i]
//   }
//   return Arr;
// }

// function Rshift(arr, k) {
//   const n = arr.length;
//   if (k % n === 0) return arr
//   Arr = arr.slice(n-k,n).concat(arr.slice(0,n-k))
//   return Arr;
// }

// 三次翻转
// 1. [0, n-k-1]
// 2. [n-k, n-1]
// 3. [0, n-1]
function reverse(arr, start, end) {
  let t = null;
  while(start < end) {
    t = arr[start]
    arr[start] = arr[end];
    arr[end] = t;
    start++;
    end--;
  }
}
function Rshift(arr, k) {
  const n = arr.length;
  if (k % n === 0) return arr
  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - 1);
  return arr
}

console.log(Rshift([1, 2, 3, 4, 5, 6, 7], 3))