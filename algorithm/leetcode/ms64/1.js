var sumNums = function (n) {
  let number = 0;
  function Sum(n, sum) {
    sum += n;
    number = sum;
    n > 1 && Sum(n - 1, sum);
  }
  Sum(n, 0);
  return number;
};
sumNums(3);