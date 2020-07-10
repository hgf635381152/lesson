var reversePrint = function (head) {
  let arr = [], i = 0;
  while (head) {
    arr[i] = head.val;
    head = head.next;
    i++;
  }
  return arr.reverse();
};