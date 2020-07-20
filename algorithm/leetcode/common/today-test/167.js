var twoSum = function (numbers, target) {
  let arr = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= target) {
      if (numbers.indexOf(target - numbers[i]) != -1) {
        arr[0] = i + 1;
        arr[1] = numbers.slice(i + 1).indexOf(target - numbers[i]) + 1 + i + 1;
        return arr
      }
    }

  }
};