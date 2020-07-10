function persistence(num) {
  //code me
  num = num.toString().split('')
  if (num.length == 1) return 0
  let count = 0;
  while (num.length > 1) {
    let sum = 1;
    for (let i = 0; i < num.length; i++) {
      sum = sum * num[i];
    }
    count++;
    num = sum.toString().split('');
  }
  return count;
}