var replaceSpace = function (s) {
  // 解法一:
  // let S = s, num = 0;
  // S = S.split('')
  // while(s.indexOf(' ') != -1){
  //     S[s.indexOf(' ') + num] = '%20';
  //     num = num + s.indexOf(' ') + 1;
  //     s = s.slice(s.indexOf(' ') + 1);   
  // }
  // return S.join('')

  let S = s, arr = [], count = 0;
  S = S.split('');
  for (let i = 0; i < S.length; i++) {
    if (S[i] === ' ') {
      S[i] = '%20'
    }
  }
  return S.join('')
};