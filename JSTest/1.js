// function showName() {
//   console.log('极客邦');
// }
// showName();
// function showName() {
//   console.log('极客时间');
// }
// showName();

// showName()
// var showName = function() {
//     console.log(2)
// }
// showName()
// function showName() {
//     console.log(1)
// }
// function foo() {
//   var a = 1
//   let b = 2
//   {
//     let b = 3
//     var c = 4
//     let d = 5
//     console.log(a)
//     console.log(b)
//   }
//   console.log(b)
//   console.log(c)
//   console.log(d)
// }
// foo()
// let myname = '极客时间'


// function bar() {
//   console.log(myName)
// }
// function foo() {
//   var myName = " 极客邦 "
//   bar()
// }
// var myName = " 极客时间 "
// foo()

// function bar() {
//   var myName = " 极客世界 "
//   let test1 = 100
//   if (1) {
//     let myName = "Chrome 浏览器 "
//     console.log(test)
//   }
// }
// function foo() {
//   var myName = " 极客邦 "
//   let test = 2
//   {
//     let test = 3
//     bar()
//   }
// }
// var myName = " 极客时间 "
// let myAge = 10
// let test = 1
// foo()

// var bar = {
//   myName: "time.geekbang.com",
//   printName: function () {
//     console.log(myName)
//   }
// }
// function foo() {
//   let myName = " 极客时间 "
//   return bar.printName
// }
// let myName = " 极客邦 "
// let _printName = foo()
// _printName()
// bar.printName()

let bar = {
  myName: " 极客邦 ",
  test1: 1
}
function foo() {
  this.myName = " 极客时间 "
}
foo.call(bar)
console.log(bar)
// console.log(myName)