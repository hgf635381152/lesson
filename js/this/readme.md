## this
**运行时** 决定的
书写的时候
```js
function fo(){
  this.a + b;
}
fo
```
- this 默认指向 window
- 对象，调用 指向对象
```js
  var obj1 = {
    a: 1,
    say: function(){
      console.log(this.a);
    }
  }
  obj1.say()
  ```
- call/apply 调用，指向我们的第一个参数
