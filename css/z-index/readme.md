## 
我们的一个网页  是沿着一条  Z轴 排开的 (ps 图层)


## 层叠上下文形成  z-index 就是调整层叠上下文
1. position 不为 static (默认)
2. filter  transform perspective 不为 none
3. will-change 


## layers
共同点: 都是 z-轴  顺序
**transform: translate3d**
**will-change**
position: fixed
perspective
video
backface-visiability 为 hidden
css3里面的 animation 动画开始的时候

## 
js -> relayout -> repaint -> composite(合成) - GPU

## 提升 layers 的好处
- 当前这个layers变化不会影响其他layers
- 对于 transform、opacity 产生变化了，不会经过 relayout repaint 跳到composite

## flex 
主轴 
交叉轴

flex 容器:
display: flex
flex-direaction: row cloumn
flex-wrap
justify-content: 主轴
align-items
align-content

flex 容器的每一项:
order
flex-grow
flex-basis
flex-shrink
align-self
