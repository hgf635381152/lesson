function partition(nums, left, right){
  if (left >= right) return;
  let i = left;
  let j = right;
  let provit = nums[left];
  while(left < right){
    while(left < right && nums[right] >= provit)
    {
      right--;
    }
    nums[left] = nums[right];
    while (left < right && nums[left] <= provit) {
      left++;
    }
    nums[right] = nums[left];
  }
  nums[left] = provit;
  // return left;
  partition(nums, i, left);
  partition(nums, left + 1, j);
}
// const arr = [8, 9, 7, -1, 5, 10, 4, 2];
// partition(arr, 0, arr.length - 1);
// console.log(arr);