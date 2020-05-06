// var 没有块级变量
// 块：独立的块 => {}
// if (){

// }
// function(){

// }
// 如果有块级变量 => a 只在 {} 生效
//  java / c: 有块级变量
{
    var a = 1;
    let b = 2;
    b = function() {};
    console.log(b);
    const PI = 3.1415926
}
console.log(a);
console.log(b);