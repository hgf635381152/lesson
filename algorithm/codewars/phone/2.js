// API 正则
// (xxx) xxx-xxxx
// \d{3} \d{3} \d{4}  [0-9]
// - 正则 字符串

function createPhoneNumbers(numbers) {
  // 代码的语义连贯   可读性好
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
}
console.log(createPhoneNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))