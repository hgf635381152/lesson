function longestConsec(strarr, k) {
  // your code
  let n = strarr.length, num = 0, count = 0, a = 0, str = "";
  if (k <= 0 || k > n || n == 0) return ""
  for (let i = 0; i < n; i++) {
    strarr[i] = strarr[i].split('')
  }
  for (let i = 0; i < n - k + 1; i++) {
    for (let j = i; j < k + i; j++) {
      count = count + strarr[j].length
    }
    if (count > num) {
      num = count;
      a = i
    }
    count = 0;
  }
  for (let i = a; i < k + a; i++) {
    str = str + strarr[i].join('')
  }
  return str
}
