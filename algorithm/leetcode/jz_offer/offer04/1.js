var findNumberIn2DArray = function (matrix, target) {
  let n = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(target) >= 0) {
      return true;
    }
  }
  return false;
};