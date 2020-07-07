var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (typeof (iterable) == 'string') {
    iterable = iterable.split('')
  }
  if (iterable.length == 0) return []
  let arr = [], count = 1;
  arr[0] = iterable[0];
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] != iterable[i - 1]) {
      arr[count] = iterable[i];
      count++;
    }
  }
  return arr
}