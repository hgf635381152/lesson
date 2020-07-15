function narcissistic(value) {
  // Code me to return true or false
  let num = 0;
  let Value = value.toString().split('');
  for (let i = 0; i < Value.length; i++) {
    num = num + Math.pow(Value[i], Value.length)
  }
  return num == value ? true : false;
}