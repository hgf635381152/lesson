var findCircleNum = function (M) {
  let n = M.length, res = n;
  let friend = []
  for (let i = 0; i < res; i++) {
    friend[i] = i
  }
  function union(s, d) {
    for (let i = 0; i < n; i++) {
      if (friend[i] == s) {
        friend[i] = d
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] == 1) {
        if (friend[i] != friend[j]) {
          res--;
          union(friend[i], friend[j])
        }
      }
    }
  }
  return res
};