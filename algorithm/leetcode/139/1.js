var wordBreak = function (s, wordDict) {
  // 与方法一类似，但是此处dp[i]表示从下标0开始长度为i的的字符串是否满足题意要求，可以被拆分并存在与wordDict中
  let dp = new Array(s.length + 1).fill(false);
  let set = new Set(wordDict);

  // 因为dp[i]的i表示长度，因此dp[0]=true
  dp[0] = true;
  // for中的i表示从下标0开始字符串的长度，因此从1开始
  for (let i = 1; i < s.length + 1; i++) {
    // 判断s[j-i]是否满足题目要求
    // 注意此处是j<i不是j<=i
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

