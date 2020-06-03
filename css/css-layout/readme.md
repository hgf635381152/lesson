## normal flow
行内元素 (inline-level-box): 水平从左往右一个接着一个布局，垂直方向默认会以 baseline 对齐
块级元素 (block-level-box): 垂直方向从上往下一个接着一个布局
relative 定位： 占据着 normal flow 自己的空间


## baseLine
inline 没有任何文字的时候 baseLine 在底部 img 以baseLine(把行撑高了)

## position
absolute: 父级第一个 非 static (x错误的) 是相对于 它从containing block
fixed: viewport (x)

http://www.w3.rog/

## containing block
 
盒子大小， 尺寸都是根据我们包含块来计算的
一个元素的包含块: containing block箱子， 箱子装着元素  箱子里面的元素放到哪里，大小？
首先先确定包含块的位置大小

```css
width: 100%
height: 100%
```

## 怎么确定 containing block
确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

- 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）的内容区的边缘组成，也可能会建立格式化上下文(比如说 a table container, flex container, grid container, 或者是 the block container 自身)。

- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成。

- 如果 position 属性是 fixed，在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)。

- 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
  - transform / perspective 不是 none
  - will-change 是 transform / perspective
  - filter 不是 none 或者 will-change 是 filter(only works on Firefox).
  - contain 是 paint (例如: contain: paint;)


## css 