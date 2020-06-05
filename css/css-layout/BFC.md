## 格式化上下文
koa: ctx === context
token: 泛指

```js
let a = 123;
function foo(){
  return a + 1;
}
foo()
```

## BFC
block-formatting-context

## 新建一个BFC
如何创建BFC
- float的值不是none。
- position的值不是static或者relative。
- display的值是inline-block、table-cell、flex、table-caption或者 inline-flex
- overflow的值不是visible
- 根元素默认新建 BFC

## BFC规则
- 内部的Box会在垂直方向，一个接一个地放置。
- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
- 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算
