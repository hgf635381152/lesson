var reverseList = function (head) {
  return reverse(null, head);
};

function reverse(prev, curr) {
  if (!curr) return prev;
  // [curr.next, prev, curr] = [prev, curr.next, curr.next];
  let tmp = curr.next;
  curr.next = prev;
  return reverse(curr, tmp);
}