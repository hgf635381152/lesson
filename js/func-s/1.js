// 长方形面积的函数
/**
 * 
 * @param {number} w 
 * @param {number} h 
 */
function area(w, h){ // es5
    // console.log(w, h); undefined
    // 两个参数
    console.log(arguments);
    if (arguments.length < 2){
        throw new Error('参数不够');
        return;
    }
    if (typeof w != 'number' && typeof h != 'number')
    {
        throw new Error('参数类型有误');
        return;
    }
    return w * h;
}
console.log(area(3,5));
// var area = function(w, h){ // 匿名函数

// }

// const getArea = (w, h) => w*h; //es6

// 问题所在?