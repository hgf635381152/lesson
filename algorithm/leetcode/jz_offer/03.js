var findRepeatNumber = function (nums) {
  // var [...Nums] = nums;
  var n = nums.length;
  var Nums = [];
  for (let i = 0; i < n; i++) {
    if (Nums.indexOf(nums[i]) != -1) {
      return nums[i]
    }
    else {
      Nums.push(nums[i])
    }
  }
};