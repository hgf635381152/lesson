var countSegments = function (s) {
  let n = 0;
  s = s.split(' ')
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '') {
      n++
    }
  }
  return n
};