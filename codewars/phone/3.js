function createPhoneNumbers(numbers) {

  numbers = numbers.join('');
  // es6更加优雅
  return `(${numbers.substring(0,3)}) ${numbers.substring(3,6)}-${numbers.substring(6)}`

}
console.log(createPhoneNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))