var plusOne = function (digits) {
  let i = 1;
  digits[digits.length - i] += 1;
  while (digits[digits.length - i] == 10) {
    digits[digits.length - i] = 0
    i++
    if (digits[digits.length - i]) {
      digits[digits.length - i] += 1;
    }
    else {
      digits.unshift(1)
    }

  }
  return digits
};