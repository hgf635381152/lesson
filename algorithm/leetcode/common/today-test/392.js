var isSubsequence = function (s, t) {
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) == -1) {
      return false
    }
    t = t.slice(t.indexOf(s[i]) + 1)
  }
  return true
};