## 基本数据类型
Null 
Undefined
String
Number
Bool

## 复杂数据(引用)类型
Object
- array
- function    
- object
- reg(正则)
- data

`运行时`决定  变量类型

```js
var a = 123;
var b = []
function c(){}
var d = {a: 1, b: 2}   // 对象字面量
var e = /[0-9]/
var f = Date.now()
```

## 定义变量的关键词
- var: es5
块级变量：
- let:   可变， 认为它是更完美的 var
- const: 常量   不可变

## ==
值是否相等，会进行类型转换
## ===
值是否相等，不会进行类型转换

## 盒模型
- content-box
width/height: content 区域
- border-box
width/height: border及以内的区域