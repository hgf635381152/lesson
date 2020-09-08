var combine = function (n, k) {
  let Arr = []
  searcharr([], 0)
  return Arr
  function searcharr(arr, s) {
    for (let i = s + 1; i < n + 1; i++) {
      let arr2 = arr.concat([i])
      if (arr2.length < k) {
        searcharr(arr2, i)
      } else if (arr2.length === k) {
        Arr.push(arr2)
      }
    }
  }
}
console.log(combine(4, 2))