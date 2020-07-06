function descendingOrder(n) {
  n = n.toString().split('')
  let num = n.length, temp = 0;
  for (let i = 0; i < num - 1; i++) {/* 外循环为排序趟数，len个数进行len-1趟 */
    for (let j = 0; j < num - 1 - i; j++) { /* 内循环为每趟比较的次数，第i趟比较len-i次 */
      if (n[j] < n[j + 1]) { /* 相邻元素比较，若逆序则交换（升序为左大于右，降序反之） */
        temp = n[j];
        n[j] = n[j + 1];
        n[j + 1] = temp;
      }
    }
  }
  return +(n.join(''));
}