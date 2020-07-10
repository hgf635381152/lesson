var divingBoard = function (shorter, longer, k) {
  let arr = [];
  if (k < 1) return []
  if (shorter == longer) {
    return [shorter * k]
  }
  else {
    for (let i = 0; i < k + 1; i++) {
      arr[i] = shorter * (k - i) + longer * i
    }
  }
  return arr
};