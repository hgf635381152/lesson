var isPowerOfThree = function (n) {
  if (n == 1) return true
  if (n % 3 != 0 || n == 0) return false
  while (n % 3 == 0) {
    n = n / 3
  }
  if (n == 1) {
    return true
  }
  else {
    return false
  }
};