var reverse = function (x) {
  x = x + ""
  X = x.split("");
  num = 0;
  if (X[0] == "-") {
    for (let i = 1; i < X.length; i++) {
      num += X[i] * Math.pow(10, i - 1);
    }
    num = -num;
  }
  else {
    for (let i = 0; i < X.length; i++) {
      num += X[i] * Math.pow(10, i);
    }
  }
  if (num <= Math.pow(-2, 31) || num >= (Math.pow(2, 31) - 1)) {
    return 0;
  }
  else {
    return num;
  }
};