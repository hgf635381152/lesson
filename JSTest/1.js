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

// let bar = {
//   myName: " 极客邦 ",
//   test1: 1
// }
// function foo() {
//   this.myName = " 极客时间 "
// }
// foo.call(bar)
// console.log(bar)
// console.log(myName)

// function executor(resolve, reject) {
//   let rand = Math.random();
//   console.log(1)
//   console.log(rand)
//   if (rand > 0.5)
//     resolve()
//   else
//     reject()
// }
// var p0 = new Promise(executor);

// var p1 = p0.then((value) => {
//   console.log("succeed-1")
//   return new Promise(executor)
// })


// var p3 = p1.then((value) => {
//   console.log("succeed-2")
//   return new Promise(executor)
// })

// var p4 = p3.then((value) => {
//   console.log("succeed-3")
//   return new Promise(executor)
// })


// p4.catch((error) => {
//   console.log("error")
// })
// console.log(2)

// function* genDemo() {
//     console.log(" 开始执行第一段 ")
//     yield 'generator 2'
 
//     console.log(" 开始执行第二段 ")
//     yield 'generator 2'
 
//     console.log(" 开始执行第三段 ")
//     yield 'generator 2'
 
//     console.log(" 执行结束 ")
//     return 'generator 2'
// }
 
// console.log('main 0')
// let gen = genDemo()
// console.log(gen.next().value)
// console.log('main 1')
// console.log(gen.next().value)
// console.log('main 2')
// console.log(gen.next().value)
// console.log('main 3')
// console.log(gen.next().value)
// console.log('main 4')


// async function foo() {
//   console.log(1)
//   let a = await 100
//   console.log(a)
//   console.log(2)
// }
// console.log(0)
// foo()
// console.log(3)

// async function foo() {  
//   console.log('foo')  // 3
// }
// async function bar() {
//   console.log('bar start')  // 2
//   await foo()
//   console.log('bar end')   // 6
// }
// console.log('script start')     // 1
// setTimeout(function () {
//   console.log('setTimeout')   // 8
// }, 0)
// bar();
// new Promise(function (resolve) {
//   console.log('promise executor')   // 4
//   resolve();
// }).then(function () {
//   console.log('promise then')   // 7
// })
// console.log('script end')   // 5

