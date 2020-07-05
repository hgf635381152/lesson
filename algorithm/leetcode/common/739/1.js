var dailyTemperatures = function (T) {
  let t = [];
  let a = 0;
  if (T.length == 1) {
    t = [0];
    return t;
  }
  while (a < T.length - 1) {
    t[a] = 0;
    for (let i = a + 1; i < T.length; i++) {
      if (T[i] > T[a]) {
        t[a] = i - a;
        break;
      }

    }
    a++;
  }
  t[T.length - 1] = 0;
  return t;
};