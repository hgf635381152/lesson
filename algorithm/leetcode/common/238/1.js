// 左右分别遍历
var productExceptSelf = function(nums) {
    let left = 1;
    let right = 1;
    let len = nums.length;

    const result = new Array(len).fill(1); // 填充数组  每一项都为1
    for (let i = 0; i < len; i++) {
        result[i] *= left;
        left *= nums[i];

        result[len - 1 - i] *= right;
        right *= nums[len - 1 - i];
    }
    return result;
};