var findDisappearedNumbers = function (nums) {
  let n = nums.length
  for (let i = 1; i < n + 1; i++) {
    if (nums.indexOf(i) == -1) {
      nums.push(i)
    }
  }
  return nums.slice(n)
};