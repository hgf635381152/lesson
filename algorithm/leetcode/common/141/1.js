var hasCycle = function (head) {
  while (head) {
    if (head.val.toString().indexOf('%') != -1) {
      return true
    }
    head.val = head.val.toString() + '%';
    head = head.next
  }
  return false;
};