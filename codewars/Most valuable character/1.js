function solve(st) {
  //..
  st = st.split('');
  let n = st.length
  if (n < 2) return st.join('')

  var [...ST] = st;
  var ST = ST.reverse().join("");
  // console.log(st, ST);
  var num = 0, t = st[0];
  for (let i = 0; i < n; i++) {
    if (ST.substr(0, n - 1 - i).indexOf(st[i]) !== -1)
    {
      if ((n - 1 - i - ST.substr(0, n - 1 - i).indexOf(st[i])) > num) {
        t = st[i]
        num = n - 1 - i - ST.substr(0, n - 1 - i).indexOf(st[i]);
      }
      else if ((n - 1 - i - ST.substr(0, n - 1 - i).indexOf(st[i])) == num) {
        if (st[i] < t) {
          t = st[i]  
        }
      }
    }  
  }
  return t;

}
console.log(solve('axyzxyz'));