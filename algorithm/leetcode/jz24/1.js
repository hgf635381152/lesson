var reverseList = function (head) {
  let cur = head,
    pre = null,
    temp = null;

  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre
};

// 1->2->3->4->5->null
// 5->4->3->2->1->null