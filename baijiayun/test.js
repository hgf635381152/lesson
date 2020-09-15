// function char_count(str) {
//   var arr = str.split('')
//   var Arr = []
//   var count = 1
//   for(let i = 0; i < arr.length; i++) {
//     while(arr[i] == arr[i+1]) {
//       count += 1
//       i++
//     }
//     Arr.push(count)
//     count = 1
//     Arr.push(arr[i])
//   }
//   return Arr.join('')
// }
// console.log(char_count('aaabbcccaab'))

// function arraySort(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - i - 1; j++) {
//       if(arr[j] > arr[j+1]) {
//         let temp = arr[j+1]
//         arr[j+1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }
// console.log(arraySort([2,13,1,5,99,234,23]))