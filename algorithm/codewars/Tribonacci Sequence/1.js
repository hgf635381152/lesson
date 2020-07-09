function tribonacci(signature, n) {
  //your code here
  let arr = [];
  if (n == 0) {
    return arr
  }
  else if (n < 4) {
    for (let i = 0; i < n; i++) {
      arr[i] = signature[i]
    }
    return arr
  }
  else {
    for (let i = 3; i < n; i++) {
      signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3])
    }
    return signature
  }
}