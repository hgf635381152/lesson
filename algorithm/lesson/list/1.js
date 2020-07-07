var oddEvenList = function (head) {
  let l1 = { val: null, next: null }, l2 = { val: null, next: null };
  let i = 1, current = head, l1current = l1, l2current = l2;
  while (current) {
    if (i % 2 !== 0) {
      l1current.next = current
      l1current = l1current.next;

    } else {
      l2current.next = current
      l2current = l2current.next;

    }
    current = current.next;
    // l1current=l1;
    // l2current=l2;
    i++;
  }
  if (i % 2 !== 0) {
    l1current.next = null;
  } else {
    l2current.next = null;
  }
  l1current.next = l2.next;
  // console.log(l1)
  return l1.next;
}