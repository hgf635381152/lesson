// function getString(s) {
//     s = s.split('')
//     if (s.length <= 2) return s.join('')
//     let min = 'a'
//     let mindex = 1
//     let mIndex = 0
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] != s[0]) {
//             min = s[i]
//             mindex = i
//             s.slice(i).map((item, index) => {
//                 if (item < min) {
//                     min = item
//                     mIndex = index
//                 }
//             })
//             if (min < s[i]) {
//                 s[mIndex+i] = s[i]
//                 s[i] = min
//                 return s.join('')
//             }
//         }
//     }
// }
// console.log(getString('aaazbcdeadcd'))


// function getString(s) {
//     s = s.split('')
//     if (s.length < 2) return 1
//     for (let i = 0; i < s.length; i++) {
//         for (let j = s.length - 1; j > 1; j--) {
//             console.log('dada')
//             let flag = true
//             let n = i
//             let m = j
//             while (m > n && flag) {
//                 console.log(n, m, s[n], s[m], '-----------', flag)
//                 if (s[m] != '*' && s[n] != '*') {
//                     if (s[m] != s[n]) flag = false
//                 }
//                 n++ 
//                 m--
//             }
//             if (flag) 
//             {
//                 console.log(j, i, '-----------')
//                 return j - i + 1 
//             }
//         }
//     }
// }

// console.log(getString('DAB*B*ACD'))

// function getNum(arr) {
//     let num = -1
//     let A = []
//     let B = []
//     for (let i = 0; i < arr.length; i++) {
//         if (A.indexOf(arr[i]) == -1) {
//             A.push(arr[i])
//             B.push(1)
//         }else {
//             B[A.indexOf(arr[i])]++
//         }
//         if (B[A.indexOf(arr[i])] > arr.length / 2) {
//             return A[A.indexOf(arr[i])]
//         }
//         if (A.length > arr.length / 2) {
//             return num
//         }
//     }
    
//     return num
// }

// console.log(getNum([11,7,5,7,7]))

// function getStr(nums) {
//     nums.map((item, i) => {
//         nums[i] = item.toString().split('')
//     })
//     nums.sort((a, b) => {
//         let count = a.length < b.length ? a.length : b.length
//         let k = 0
//         while (k < count) {
//             if (a[k] != b[k]) {
//                 return b[k] - a[k]
//             }else {
//                 k++
//             }
//         }
//         return b[k] - a[k]
//     })
//     nums.map((item, i) => {
//         nums[i] = item.join('')
//     })
//     nums = nums.join('')
//     return `"${nums}"`
// }

// console.log(getStr([30]))


