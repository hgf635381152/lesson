var removeElement = function (nums, val) {
  let n = nums.length;
  while (nums.indexOf(val) != -1) {
    for (let i = nums.indexOf(val); i < n; i++) {
      nums[i] = nums[i + 1]
    }
    n--
  }
  return n;
};